import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // service
    const result = await StudentServices.createStudentIntoDB(studentData);
    // send response
    res.status(201).json({
      success: true,
      message: "Student is Created Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      error: error.message,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Student are Retrieved Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      error: error.message,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: "Student is Retrieved Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      error: error.message,
    });
  }
};

const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: "Student is Deleted Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      error: error.message,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
};
