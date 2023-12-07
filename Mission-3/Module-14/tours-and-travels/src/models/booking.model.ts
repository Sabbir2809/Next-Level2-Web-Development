import { Schema, model } from "mongoose";
import IBooking from "../interfaces/booking.interface";

const bookingSchema = new Schema<IBooking>(
  {
    tour: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    bookedSlots: {
      type: Number,
      required: [true, "A Booking must be bookedSlots"],
    },
    price: {
      type: Number,
      required: [true, "Please tell us your user"],
    },
    bookingStatus: {
      type: String,
      enum: ["pending", "paid", "cancelled"],
      required: [true, "A Booking must be bookingStatus"],
    },
  },
  {
    versionKey: false,
  }
);

const Booking = model<IBooking>("Booking", bookingSchema);
export default Booking;
