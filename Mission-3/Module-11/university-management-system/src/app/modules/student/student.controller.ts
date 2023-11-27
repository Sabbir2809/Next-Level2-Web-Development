import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { StudentServices } from "./student.service";

const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getStudentsFromDB();

    // send response
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Student are Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    // send response
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student is Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteSingleStudentFromDB(studentId);

    // send response
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student is Deleted Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
};
