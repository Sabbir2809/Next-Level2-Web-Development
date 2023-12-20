import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import AppError from "../errors/AppError";
import { TUserRole } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // if the token is sent from the client
    if (!token) {
      throw new AppError(401, "Your are not Authorized!");
    }
    // check if the token is valid
    jwt.verify(token, config.jwt_access_secret as string, (error, decoded) => {
      // error
      if (error) {
        throw new AppError(401, "You are not authorized!");
      }

      const role = (decoded as JwtPayload).role;

      if (requiredRoles && !requiredRoles.includes(role)) {
        throw new AppError(401, "You are not authorized!");
      }

      // decoded
      (req as any).user = decoded as JwtPayload;
      next();
    });
  });
};
export default auth;
