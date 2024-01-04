import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { USER_ROLE } from "../constants/users.constant";
import AppError from "../helpers/errorHelpers/AppError";
import catchAsync from "../utils/catchAsync";
import User from "./user.model";

const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(403, "Invalid Token");
    }

    const decodedToken = jwt.verify(token, config.jwt_access_secret as string);
    const { id } = decodedToken as JwtPayload;

    // find valid user
    const user = await User.findOne({ _id: id });

    // authentication
    if (!user) {
      throw new AppError(403, "Invalid Email or password");
    }

    // authorization
    if (!roles.includes(user?.role)) {
      throw new AppError(403, "Your are not authorized");
    }
    next();
  });
};

export default checkAuth;
