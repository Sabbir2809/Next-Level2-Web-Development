import { Request, Response } from "express";
import config from "../config";
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
  const { accessToken, refreshToken } = await authServices.login(req.body);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.node_dev === "production",
  });

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "User Logged Successfully",
    data: { accessToken },
  });
});

// change password
const changePassword = catchAsync(async (req: Request, res: Response) => {
  const decodedToken = (req as any).user;
  const result = await authServices.changePassword(decodedToken, req.body);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "User Password Change Successfully",
    data: result,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    throw new Error("Invalid Token");
  }

  const result = await authServices.refreshToken(refreshToken);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "User Password Change Successfully",
    data: result,
  });
});

export const authControllers = {
  register,
  login,
  changePassword,
  refreshToken,
};
