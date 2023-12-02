import { Query, Schema, model } from "mongoose";
import IUser from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name"],
    },
    age: {
      type: Number,
      required: [true, "Please tell us your age"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please tell us your email"],
      lowercase: true,
    },
    photo: String,
    role: {
      type: String,
      enum: {
        values: ["user", "admin"],
        message: "Role is either: user or admin. Your role is {VALUE}",
        default: "user",
      },
    },
    userStatus: {
      type: String,
      enum: {
        values: ["active", "inactive"],
        message: "User Status is either: active or inactive. Your status is {VALUE}",
        default: "active",
      },
    },
  },
  { versionKey: false }
);

// Query middleware is supported for the following Query functions. Query middleware executes when you call exec() or then() on a Query object, or await on a Query object. In query middleware functions, this refers to the query.
userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
  this.find({ userStatus: { $eq: "active" } });
  next();
});

const User = model<IUser>("User", userSchema);
export default User;
