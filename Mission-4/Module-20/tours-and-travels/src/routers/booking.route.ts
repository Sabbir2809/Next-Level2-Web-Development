import express from "express";
import { bookingControllers } from "../controllers/booking.controller";
const router = express.Router();

router.post("/create-booking", bookingControllers.createBooking);
router.get("/", bookingControllers.getAllBookings);
router.get("/:id", bookingControllers.getSingleBooking);
router.get("/:userId/get-all-booking", bookingControllers.getAllBookingsOfAUser);
router.patch("/:id", bookingControllers.updateBooking);
router.delete("/:id", bookingControllers.deleteBooking);

export const bookingRoutes = router;
