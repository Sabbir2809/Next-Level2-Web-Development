import mongoose from "mongoose";
import IBooking from "../interfaces/booking.interface";
import Booking from "../models/booking.model";
import Tour from "../models/tour.model";

// create
const createBooking = async (bookingData: IBooking) => {
  const session = await mongoose.startSession();
  // session is the isolated environment
  session.startTransaction();

  try {
    const booking = await Booking.create([bookingData], { session });
    if (!booking) {
      throw new Error("Booking Failed");
    }

    const tour = await Tour.findByIdAndUpdate(
      booking[0].tour,
      {
        $inc: { availableSeats: -booking[0].bookedSlots },
      },
      { session, new: true, returnOriginal: true }
    );

    if (!tour) {
      throw new Error("Booking Failed");
    }
    await session.commitTransaction();
    await session.endSession();

    return booking[0];
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

// read
const getAllBookings = async (): Promise<IBooking[]> => {
  const result = await Booking.find();
  return result;
};

// read
const getAllBookingsOfAUser = async (id: string): Promise<IBooking[] | null> => {
  const result = await Booking.find({ user: id });
  return result;
};

const getSingleBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findById(id);
  return result;
};

// update
const updateBooking = async (id: string, bookingData: IBooking): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndUpdate(id, bookingData, { new: true, runValidators: true });
  return result;
};

// delete
const deleteBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndDelete(id);
  return result;
};

export const bookingServices = {
  createBooking,
  getAllBookings,
  getAllBookingsOfAUser,
  getSingleBooking,
  updateBooking,
  deleteBooking,
};
