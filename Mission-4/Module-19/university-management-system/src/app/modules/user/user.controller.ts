import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  // service
  const result = await UserServices.createStudentIntoDB(password, studentData);
  // send response
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Student is Created Successfully",
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await UserServices.createFacultyIntoDB(password, facultyData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faculty is created successfully",
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserServices.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Admin is created successfully",
    data: result,
  });
});

export const UserControllers = {
  createStudent,
  createFaculty,
  createAdmin,
};
