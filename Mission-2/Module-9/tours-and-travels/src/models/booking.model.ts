import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    tour: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: [true, "Please tell us your tour"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please tell us your user"],
    },
  },
  {
    versionKey: false,
  }
);

const Booking = model("Booking", bookingSchema);
export default Booking;
