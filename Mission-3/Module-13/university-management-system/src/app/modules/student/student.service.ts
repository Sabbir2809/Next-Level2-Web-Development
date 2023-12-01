import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import User from "../user/user.model";
import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const getStudentsFromDB = async () => {
  const result = await Student.find()
    .populate("admissionSemesterId")
    .populate({
      path: "academicDepartmentId",
      populate: {
        path: "academicFacultyId",
      },
    });
  return result;
};

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await Student.findOne({ id: studentId })
    .populate("admissionSemesterId")
    .populate({
      path: "academicDepartmentId",
      populate: {
        path: "academicFacultyId",
      },
    });
  return result;
};

const updateStudentFromDB = async (studentId: string, payload: Partial<IStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = { ...remainingStudentData };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian)) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  const result = await Student.findOneAndUpdate({ id: studentId }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteSingleStudentFromDB = async (studentId: string) => {
  const isExits = await Student.findOne({ id: studentId });
  if (!isExits) {
    throw new AppError(404, "Student id is does not exist");
  }
  // startSession
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id: studentId },
      { isDeleted: true },
      { new: true, session }
    );
    if (!deletedStudent) {
      throw new AppError(400, "Failed to delete student");
    }

    const deletedUser = await User.findOneAndUpdate(
      { id: studentId },
      { isDeleted: true },
      { new: true, session }
    );
    if (!deletedUser) {
      throw new AppError(400, "Failed to delete user");
    }

    await session.commitTransaction();
    await session.endSession();
    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(400, "Failed to delete Student");
  }
};

export const StudentServices = {
  getStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentFromDB,
  deleteSingleStudentFromDB,
};
