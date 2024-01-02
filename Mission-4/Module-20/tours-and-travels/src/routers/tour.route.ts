import express from "express";
import { tourControllers } from "../controllers/tour.controller";
import validateRequest from "../middlewares/validateRequest";
import { createTourZodSchema } from "../validations/tour.validation";
const router = express.Router();

router.post("/create-tour", validateRequest(createTourZodSchema), tourControllers.createTour);
router.get("/", tourControllers.getAllTours);
router.get("/:id", tourControllers.getSingleTour);
router.patch("/:id", tourControllers.updateTour);
router.delete("/:id", tourControllers.deleteTour);
router.get("/:id/next-schedule", tourControllers.getNextSchedule);

export const tourRoutes = router;
