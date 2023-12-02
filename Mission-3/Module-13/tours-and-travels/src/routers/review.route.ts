import express from "express";
import { reviewControllers } from "../controllers/review.controller";
const router = express.Router();

router.post("/create-review", reviewControllers.createReview);
router.get("/", reviewControllers.getAllReviews);
router.get("/:id", reviewControllers.getSingleReview);
router.patch("/:id", reviewControllers.updateReview);
router.delete("/:id", reviewControllers.deleteReview);

export const reviewRoutes = router;
