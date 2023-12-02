import { NextFunction, Request, Response } from "express";
import { bookingServices } from "../services/booking.service";
import catchAsync from "../utils/catchAsync";
import sendSuccessResponse from "../utils/sendResponse";

// create
const createBooking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const bookingData = req.body;
  const result = await bookingServices.createBooking(bookingData);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "Booking Created Successfully",
    data: result,
  });
});

// read all booking
const getAllBookings = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await bookingServices.getAllBookings();

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Booking Fetched Successfully",
    data: result,
  });
});

// read single booking
const getAllBookingsOfAUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.userId;
  const result = await bookingServices.getSingleBooking(id);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "All Bookings of a User Fetched Successfully",
    data: result,
  });
});

// read single booking
const getSingleBooking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const result = await bookingServices.getSingleBooking(id);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Booking Fetch Successfully",
    data: result,
  });
});

// update single booking
const updateBooking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const bookingData = req.body;
  const result = await bookingServices.updateBooking(id, bookingData);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Booking Updated Successfully",
    data: result,
  });
});

// update single booking
const deleteBooking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  await bookingServices.deleteBooking(id);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "Booking Deleted Successfully",
    data: null,
  });
});

export const bookingControllers = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
  getAllBookingsOfAUser,
};
