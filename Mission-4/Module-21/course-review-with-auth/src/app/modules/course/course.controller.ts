/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CourseServices } from "./course.service";

/**
 * 4.Create a Course (Only Admin can do this)
 * Route: /api/courses
 * Method: POST
 * Request Headers: Authorization: <ADMIN_JWT_TOKEN>
 */
const createCourse = catchAsync(async (req, res) => {
  const decodedToken = (req as any).user;
  const result = await CourseServices.createCourseIntoDB(decodedToken, req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Course created successfully",
    data: result,
  });
});

/**
 * 5.Get Paginated and Filtered Courses.
 * Route: /api/courses
 * Method: GET
 */
const getAllCourses = catchAsync(async (req, res) => {
  const data = await CourseServices.getAllCoursesFromDB(req.query);
  const { meta, courses } = data;

  res.json({
    success: true,
    statusCode: 200,
    message: "Courses retrieved successfully",
    meta,
    data: { courses },
  });
});

/**
 * 9. Update a Course (Partial Update with Dynamic Update)
 * Route: /api/courses/:courseId
 * Method: PUT
 * Request Headers: Authorization: <ADMIN_JWT_TOKEN>
 */
const updateCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const reqBody = req.body;
  const decodedToken = (req as any).user;

  if (reqBody.durationInWeeks) {
    throw new AppError(400, "durationInWeeks Filed Not Update");
  }
  const result = await CourseServices.updateCourseIntoDB(courseId, decodedToken, reqBody);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course updated successfully",
    data: result,
  });
});

/**
 * 10. Get Course by ID with Reviews
 * Route: /api/courses/:courseId/reviews
 * Method: GET
 */
const getCourseWithReviewsById = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const result = await CourseServices.getCourseWithReviewsByIdFromDB(courseId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course and Reviews retrieved successfully",
    data: result,
  });
});

/**
 * 11. Get the Best Course Based on Average Review (Rating)
 * Route: /api/course/best
 * Method: GET
 */
const getBestCourseByRating = catchAsync(async (req, res) => {
  const result = await CourseServices.getBestCourseByRatingFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Best course retrieved successfully",
    data: result || [],
  });
});

export const CourseControllers = {
  createCourse,
  getAllCourses,
  updateCourse,
  getCourseWithReviewsById,
  getBestCourseByRating,
};
