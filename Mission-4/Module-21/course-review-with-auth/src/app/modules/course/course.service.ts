import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errors/AppError";
import { TQueryObj } from "../../types/TQueryObj";
import { filter } from "../../utils/filterHelper";
import { Category } from "../category/category.model";
import { Review } from "../review/review.model";
import { User } from "../userAuth/userAuth.model";
import { ICourse } from "./course.interface";
import { Course } from "./course.model";

const createCourseIntoDB = async (userData: JwtPayload, payload: ICourse) => {
  // checking if the user is authorized
  const user = await User.findById(userData._id);
  if (!user) {
    throw new AppError(404, "This User is Not Found!");
  }

  // checking if the category is exist
  const category = await Category.findById(payload.categoryId);
  if (!category) {
    throw new AppError(404, "This Category is Not Found!");
  }

  const result = await Course.create({ ...payload, createdBy: user._id });
  return result;
};

const getAllCoursesFromDB = async (query: TQueryObj) => {
  // step-1: filtering(page, limit, sortBy, sortOrder, minPrice, maxPrice)
  const filteredQuery = filter(
    Course.find().populate({
      path: "createdBy",
      select: "-password -passwordHistory -passwordChangedAt -createdAt -updatedAt",
    }),
    query
  );

  if (query.sortBy && query.sortOrder) {
    const sortBy = query.sortBy;
    const sortOrder = query.sortOrder;
    const sortString = `${sortOrder === "desc" ? "-" : ""}${sortBy}`;
    filteredQuery.sort(sortString);
  }

  const priceQuery = filteredQuery;

  if (query.minPrice || query.maxPrice) {
    priceQuery.find({
      price: { $gte: query.minPrice, $lte: query.maxPrice },
    });
  }

  const sortedQuery = priceQuery;

  // step-2: pagination(page, limit)
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  if (query.page || query.limit) {
    const skip = (page - 1) * limit;
    sortedQuery.skip(skip).limit(limit);
  } else {
    sortedQuery.skip(0).limit(10);
  }
  // total document count
  const total = await Course.countDocuments();
  const meta = { page, limit, total };

  const result = await sortedQuery;
  return { meta, courses: result };
};

const updateCourseIntoDB = async (courseId: string, userData: JwtPayload, payload: Partial<ICourse>) => {
  // checking if the user is authorized
  const user = await User.findById(userData._id);
  if (!user) {
    throw new AppError(404, "This User is Not Found!");
  }

  // Partial Update with Dynamic Update divided
  const { details, ...courseRemainingData } = payload;
  const modifiedUpdatedData: Record<string, unknown> = { ...courseRemainingData };

  //  dynamic updating
  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedUpdatedData[`details.${key}`] = value;
    }
  }

  const result = await Course.findByIdAndUpdate(courseId, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  }).populate({
    path: "createdBy",
    select: "-password -passwordHistory -passwordChangedAt -createdAt -updatedAt",
  });

  return result;
};

const getCourseWithReviewsByIdFromDB = async (courseId: string) => {
  const course = await Course.findById(courseId).populate({
    path: "createdBy",
    select: "-password -passwordHistory -passwordChangedAt -createdAt -updatedAt",
  });
  if (!course) {
    throw new AppError(404, "This Course does not Exists!");
  }

  const reviews = await Review.find().populate({
    path: "createdBy",
    select: "-password -passwordHistory -passwordChangedAt -createdAt -updatedAt",
  });

  return {
    course,
    reviews,
  };
};

const getBestCourseByRatingFromDB = async () => {
  const courses = await Course.find().populate({
    path: "createdBy",
    select: "-password -passwordHistory -passwordChangedAt -createdAt -updatedAt",
  });

  let bestCourse = null;
  let highestAverageRating = 0;

  // visit each course
  for (const course of courses) {
    const reviews = await Review.find({ courseId: course._id });
    const reviewCount = reviews.length;

    // review count per course
    if (reviewCount > 0) {
      const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
      const averageRating = totalRating / reviewCount;

      // assign best course
      if (averageRating > highestAverageRating) {
        highestAverageRating = averageRating;
        bestCourse = course;
      }
    }
  }

  // show best course
  if (bestCourse) {
    const bestCourseReviews = await Review.find({ courseId: bestCourse._id });
    const reviewCount = bestCourseReviews.length;

    return {
      course: bestCourse,
      averageRating: parseFloat(highestAverageRating.toFixed(2)),
      reviewCount: reviewCount,
    };
  }
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  updateCourseIntoDB,
  getCourseWithReviewsByIdFromDB,
  getBestCourseByRatingFromDB,
};
