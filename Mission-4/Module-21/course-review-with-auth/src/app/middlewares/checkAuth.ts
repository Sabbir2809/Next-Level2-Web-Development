/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import config from "../config";
import AuthError from "../errors/AuthError";
import { USER_ROLE } from "../modules/userAuth/userAuth.constant";
import { User } from "../modules/userAuth/userAuth.model";
import catchAsync from "../utils/catchAsync";
import { jwtHelpers } from "../utils/jwtHelpers";

const checkAuth = (...requiredRoles: Array<keyof typeof USER_ROLE>) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // headers token
    const token = req.headers.authorization;
    if (!token) {
      throw new AuthError(401, "No JWT is provided in the request headers");
    }

    // check if the token is valid
    const decodedToken = jwtHelpers.verifyToken(token, config.jwt_access_secret as string);

    const { _id, iat, role } = decodedToken as JwtPayload;

    // Authentication
    const user = await User.findById(_id);
    if (!user) {
      throw new AuthError(
        401,
        "The user does not possess the required permissions for the requested action or resource."
      );
    }

    if (!iat) {
      throw new AuthError(401, "The provided JWT (JSON Web Token) has expired.");
    }

    if (user.passwordChangedAt && iat < user.passwordChangedAt.getTime() / 1000) {
      throw new AuthError(401, "The JWT provided is invalid or malformed.");
    }

    //Authorization
    if (!requiredRoles.includes(role)) {
      throw new AuthError(
        403,
        "The user is attempting to access a resource without the necessary authorization."
      );
    }

    // decoded
    (req as any).user = decodedToken as JwtPayload;
    next();
  });
};

export default checkAuth;
