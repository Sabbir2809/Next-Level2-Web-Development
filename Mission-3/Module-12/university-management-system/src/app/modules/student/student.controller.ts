import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StudentServices } from "./student.service";

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getStudentsFromDB();
  // send response
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Student are Retrieved Successfully",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student is Retrieved Successfully",
    data: result,
  });
});

const deleteSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteSingleStudentFromDB(studentId);
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student is Deleted Successfully",
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
};
