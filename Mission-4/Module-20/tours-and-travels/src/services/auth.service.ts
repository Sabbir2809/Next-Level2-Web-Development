import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import AppError from "../helpers/errorHelpers/AppError";
import IUser from "../interfaces/user.interface";
import User from "../models/user.model";

export interface IRegister extends Omit<IUser, "userStatus" | "role" | "passwordChangedAt"> {}

export interface ILogin extends Pick<IUser, "email" | "password"> {}

const register = async (payload: IRegister) => {
  const result = await User.create({
    ...payload,
    userStatus: "active",
    role: "user",
  });
  return result;
};

const login = async (payload: ILogin) => {
  // if the user exist
  const user = await User.findOne(payload);
  if (!user) {
    throw new AppError(404, "Invalid Credentials");
  }

  // payload
  const jwtPayload: JwtPayload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  // token
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    // algorithm: "HS384",
    expiresIn: config.jwt_access_expires_in,
  });
  return {
    accessToken,
  };
};

export const authServices = {
  register,
  login,
};
