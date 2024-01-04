import { JwtPayload } from "jsonwebtoken";
import config from "../config";
import AppError from "../helpers/errorHelpers/AppError";
import { JWTHelpers } from "../helpers/jwtHelpers";
import { passwordHelpers } from "../helpers/passwordHelpers";
import IUser from "../interfaces/user.interface";
import User from "../models/user.model";

export interface IRegister extends Omit<IUser, "userStatus" | "role" | "passwordChangedAt"> {}

const register = async (payload: IRegister) => {
  const password = payload.password;

  // combined random bytes with password
  const hashedPassword = await passwordHelpers.hashPassword(password);

  const result = await User.create({
    ...payload,
    password: hashedPassword,
    userStatus: "active",
    role: "user",
  });
  return result;
};

export interface ILogin extends Pick<IUser, "email" | "password"> {}

const login = async (payload: ILogin) => {
  // if the user exist
  const user = await User.findOne({ email: payload.email }).select("+password");
  if (!user) {
    throw new AppError(404, "Invalid Credentials");
  }

  const plainTextPassword = payload.password;
  const hashedPassword = user.password;

  // check plainTextPassword and hashedPassword compare
  const isCorrectPassword = await passwordHelpers.comparePassword(plainTextPassword, hashedPassword);
  if (!isCorrectPassword) {
    throw new AppError(404, "Invalid Password");
  }

  // jwt payload
  const jwtPayload: JwtPayload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  // access token create (headers.payload.secret)
  const accessToken = JWTHelpers.createToken(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in as string,
  });

  // refresh token (headers.payload.secret)
  const refreshToken = JWTHelpers.createToken(jwtPayload, config.jwt_refresh_secret as string, {
    expiresIn: config.jwt_refresh_expires_in as string,
  });

  return {
    accessToken,
    refreshToken,
  };
};

const changePassword = async (
  decodedToken: JwtPayload,
  payload: { oldPassword: string; newPassword: string }
) => {
  const { id, iat } = decodedToken;

  const user = await User.findOne({ _id: id }).select("+password");
  if (!user) {
    throw new AppError(403, "Invalid Email or password");
  }

  if (!iat) {
    throw new AppError(403, "Invalid Token");
  }

  // after the change user
  if (user.passwordChangedAt && iat < user.passwordChangedAt.getTime() / 1000) {
    throw new AppError(403, "Old Password");
  }

  // check correct change of the password, we should not allow the user to use the old token
  const isCorrectPassword = await passwordHelpers.comparePassword(payload.oldPassword, user.password);
  if (!isCorrectPassword) {
    throw new AppError(404, "Invalid Password");
  }

  // hash password
  const hashedPassword = await passwordHelpers.hashPassword(payload.newPassword);

  // update password
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      password: hashedPassword,
      passwordChangedAt: new Date(),
    },
    { new: true }
  );

  return updatedUser;
};

const refreshToken = async (refreshToken: string) => {
  const decodedToken = JWTHelpers.verifyToken(refreshToken, config.jwt_refresh_secret as string);

  const { id } = decodedToken as JwtPayload;

  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new AppError(404, "Invalid Token");
  }

  // jwt payload
  const jwtPayload: JwtPayload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  // access token create (headers.payload.secret)
  const accessToken = JWTHelpers.createToken(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in as string,
  });

  return {
    accessToken,
  };
};

export const authServices = {
  register,
  login,
  changePassword,
  refreshToken,
};
