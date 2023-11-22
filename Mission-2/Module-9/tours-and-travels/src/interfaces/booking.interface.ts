import { Schema } from "mongoose";

interface IBooking {
  tour: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

export default IBooking;
