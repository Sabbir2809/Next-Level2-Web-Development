/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserAuthServices } from "./userAuth.service";

/**
 * 1.User Registration
 * Route: /api/auth/register
 * Method: POST
 */
const userRegistration = catchAsync(async (req, res) => {
  const result = await UserAuthServices.userRegistration(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

/**
 * 2.User Login
 * Route: /api/auth/login
 * Method: POST
 */
const userLogin = catchAsync(async (req, res) => {
  const result = await UserAuthServices.userLogin(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User login successful",
    data: result,
  });
});

/**
 * 3.Change Password
 * Route: /api/auth/change-password
 * Method: POST
 * Request Headers: Authorization: <JWT_TOKEN>
 */
const changePassword = catchAsync(async (req, res) => {
  const decodedToken = (req as any).user;
  const result = await UserAuthServices.changePassword(decodedToken, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully",
    data: result,
  });
});

export const UserAuthControllers = {
  userRegistration,
  userLogin,
  changePassword,
};
