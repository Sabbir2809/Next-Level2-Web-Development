import { Request, Response } from "express";
import { authServices } from "../services/auth.service";
import catchAsync from "../utils/catchAsync";
import sendSuccessResponse from "../utils/sendResponse";

// registration
const register = catchAsync(async (req: Request, res: Response) => {
  const result = await authServices.register(req.body);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "User Registered Successfully",
    data: result,
  });
});

// login
const login = catchAsync(async (req: Request, res: Response) => {
  const result = await authServices.login(req.body);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "User Logged Successfully",
    data: result,
  });
});

export const authControllers = {
  register,
  login,
};
