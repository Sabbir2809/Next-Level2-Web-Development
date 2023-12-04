import mongoose from "mongoose";
import config from "../../config";
import AppError from "../../errors/AppError";
import AcademicSemester from "../academicSemester/academicSemester.model";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.interface";
import User from "./user.model";
import { generateStudentId } from "./user.utils";

const createUserIntoDB = async (password: string, payload: IStudent) => {
  const userData: Partial<IUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = "student";

  const admissionSemester = await AcademicSemester.findById(payload.admissionSemesterId);
  if (!admissionSemester) {
    throw new AppError(404, "Admission semester not found");
  }
  userData.id = await generateStudentId(admissionSemester);

  const session = await mongoose.startSession();
  try {
    // startTransaction()
    session.startTransaction();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(400, "Failed to create user");
    }
    payload.id = newUser[0].id;
    payload.userId = newUser[0]._id;

    // create a student (transaction-2)
    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(400, "Failed to create student");
    }
    // commitTransaction() and endSession()
    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    // abortTransaction() and endSession()
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(400, "Failed to create user");
  }
};

export const UserServices = {
  createUserIntoDB,
};
