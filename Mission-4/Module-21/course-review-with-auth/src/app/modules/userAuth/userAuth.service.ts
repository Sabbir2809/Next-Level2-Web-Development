/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import { jwtHelpers } from "../../utils/jwtHelpers";
import { passwordHelpers } from "../../utils/passwordHelpers";
import { IChangePassword, ILogin, IUser } from "./userAuth.interface";
import { User } from "./userAuth.model";

const userRegistration = async (payload: IUser) => {
  // checking if the user is exist
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new AppError(403, "This User is Already Exists!");
  }

  // user data save into db
  const userData = await User.create(payload);

  const { password, passwordHistory, passwordChangedAt, ...result } = userData.toObject();
  return result;
};

const userLogin = async (payload: ILogin) => {
  const { username, password } = payload;

  // checking if the user is exist
  const user = await User.findOne({ username });
  if (!user) {
    throw new AppError(404, "This User is Not Found!");
  }

  // checking if the password is correct
  const isCorrectPassword = await passwordHelpers.comparePassword(password, user.password);
  if (!isCorrectPassword) {
    throw new AppError(403, "Password do not Matched!");
  }

  // create JWT token and sent to the client
  const JWTPayload = {
    _id: user._id.toString(),
    role: user.role,
    email: user.email,
  };
  const accessToken = jwtHelpers.createToken(
    JWTPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in_secret as string
  );

  const userData = {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };

  return {
    user: userData,
    token: accessToken,
  };
};

const changePassword = async (userData: JwtPayload, payload: IChangePassword) => {
  // Checking if the user exists
  const user = await User.findById({ _id: userData._id });
  if (!user) {
    throw new AppError(404, "This User is Not Found!");
  }

  // Checking if the password is correct
  const isCorrectPassword = await passwordHelpers.comparePassword(payload.currentPassword, user.password);
  if (!isCorrectPassword) {
    throw new AppError(403, "Password do not Matched!");
  }

  // Check if the new password is among the last two passwords or the current one
  const lastPasswords = user.passwordHistory.slice(0, 2);
  const isPasswordReused = lastPasswords.some((oldPassword) => {
    return bcrypt.compareSync(payload.newPassword, oldPassword.password);
  });

  // check previous two password history in database and newPassword
  if (isPasswordReused) {
    throw new AppError(
      400,
      `Password change failed. Ensure the new password is unique and not among the last 2 used (last used on ${lastPasswords[0].timestamp}).`
    );
  }

  // Hash the newHashedPassword
  const newHashedPassword = await passwordHelpers.hashPassword(payload.newPassword);

  // Update the password in the database
  await User.findByIdAndUpdate(
    user._id,
    {
      password: newHashedPassword,
      passwordChangedAt: new Date(),
      $push: {
        passwordHistory: {
          password: newHashedPassword,
          timestamp: new Date(),
        },
      },
      $slice: -2,
    },
    {
      new: true,
    }
  );

  const { password, passwordChangedAt, passwordHistory, ...responseData } = user.toObject();
  return responseData;
};

export const UserAuthServices = {
  userRegistration,
  userLogin,
  changePassword,
};
