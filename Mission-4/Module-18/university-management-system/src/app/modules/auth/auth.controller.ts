import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
  // service
  const result = await AuthServices.loginUser(req.body);
  // send response
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User is Logged in Successfully",
    data: result,
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

export const AuthControllers = {
  loginUser,
  changePassword,
};
