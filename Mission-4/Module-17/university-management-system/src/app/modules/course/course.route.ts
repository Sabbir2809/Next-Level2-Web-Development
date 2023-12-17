import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CourseControllers } from "./course.controller";
import { CourseValidations } from "./course.validation";
const router = express.Router();

router.post(
  "/create-course",
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse
);
router.get("/", CourseControllers.getAllCourses);
router.get("/:courseId", CourseControllers.getSingleCourse);
router.patch(
  "/:courseId",
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse
);
router.put(
  "/:courseId/assign-faculties",
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse
);
router.delete(
  "/:courseId/remove-faculties",
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesFromCourse
);
router.delete("/:courseId", CourseControllers.deleteCourse);

export const CourseRoutes = router;
