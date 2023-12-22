import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
  // service
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken, needsPasswordChange } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_DEV === "production",
    httpOnly: true,
  });
  // send response
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User is Logged in Successfully",
    data: {
      accessToken,
      needsPasswordChange,
    },
  });
});

const changePassword = catchAsync(async (req, res) => {
  const { ...passwordData } = req.body;
  // service
  const result = await AuthServices.changePassword((req as any).user, passwordData);
  // send response
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Password is Updated Successfully",
    data: result,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  // service
  const result = await AuthServices.refreshToken(refreshToken);

  // send response
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Access token is retrieved Successfully",
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
  changePassword,
  refreshToken,
};
