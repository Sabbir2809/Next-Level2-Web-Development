import express from "express";
import checkAuth from "../../middlewares/checkAuth";
import validateRequest from "../../middlewares/validateRequest";
import { CourseControllers } from "./course.controller";
import { CourseValidations } from "./course.validation";

const router = express.Router();

router.post(
  "/courses",
  checkAuth("admin"),
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse
);
router.get("/courses", CourseControllers.getAllCourses);
router.put(
  "/courses/:courseId",
  checkAuth("admin"),
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse
);
router.get("/courses/:courseId/reviews", CourseControllers.getCourseWithReviewsById);
router.get("/course/best", CourseControllers.getBestCourseByRating);

export const CourseRoutes = router;
