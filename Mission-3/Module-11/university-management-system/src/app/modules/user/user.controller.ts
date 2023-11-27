import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
