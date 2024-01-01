import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errors/AppError";
import { Course } from "../course/course.model";
import { User } from "../userAuth/userAuth.model";
import { IReview } from "./review.interface";
import { Review } from "./review.model";

const createReviewIntoDB = async (userData: JwtPayload, payload: IReview) => {
  // checking if the user is authorized
  const user = await User.findById(userData._id);
  if (!user) {
    throw new AppError(404, "This User is Not Found!");
  }

  // checking if the course is exist
  const course = await Course.findById(payload.courseId);
  if (!course) {
    throw new AppError(404, "This Course does not Exists!");
  }

  // save data into db
  const reviewData = await Review.create({ ...payload, createdBy: user._id });

  const result = await reviewData.populate({
    path: "createdBy",
    select: "-password -passwordHistory -passwordChangedAt -createdAt -updatedAt -passwordChangedAt",
  });

  return result;
};

export const ReviewServices = {
  createReviewIntoDB,
};
