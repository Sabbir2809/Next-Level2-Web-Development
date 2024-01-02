import { Schema } from "mongoose";

interface IBooking {
  tour: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  bookedSlots: number;
  price: number;
  bookingStatus: "pending" | "paid" | "cancelled";
}

export default IBooking;
