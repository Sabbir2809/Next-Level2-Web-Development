import express from "express";
import checkAuth from "../../middlewares/checkAuth";
import validateRequest from "../../middlewares/validateRequest";
import { ReviewControllers } from "./review.controller";
import { ReviewValidations } from "./review.validation";

const router = express.Router();

router.post(
  "/",
  checkAuth("user"),
  validateRequest(ReviewValidations.createReviewValidationSchema),
  ReviewControllers.createReview
);

export const ReviewRoutes = router;
