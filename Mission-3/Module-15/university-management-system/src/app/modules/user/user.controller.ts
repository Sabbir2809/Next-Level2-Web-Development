import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  // service
  const result = await UserServices.createUserIntoDB(password, studentData);
  // send response
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Student is Created Successfully",
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
