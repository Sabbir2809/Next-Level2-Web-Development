/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { passwordHelpers } from "../../utils/passwordHelpers";
import { IUser } from "./userAuth.interface";

const userSchema = new Schema<IUser>(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    passwordHistory: [{ password: String, timestamp: Date }],
    passwordChangedAt: { type: Date, default: null },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true, versionKey: false }
);

// pre hook middleware
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  // Hashing Password before store user data
  const hashedPassword = await passwordHelpers.hashPassword(user.password);
  user.password = hashedPassword;

  // change password history save into db
  const passwordChange = {
    password: hashedPassword,
    timestamp: new Date(),
  };
  user.passwordHistory.push(passwordChange);
  next();
});

export const User = model<IUser>("User", userSchema);
