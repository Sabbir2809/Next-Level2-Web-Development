import mongoose from "mongoose";
import config from "../../config";
import AppError from "../../errors/AppError";
import AcademicDepartment from "../academicDepartment/academicDepartment.model";
import AcademicSemester from "../academicSemester/academicSemester.model";
import { Admin } from "../admin/admin.model";
import { IFaculty } from "../faculty/faculty.interface";
import { Faculty } from "../faculty/faculty.model";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.interface";
import User from "./user.model";
import { generateAdminId, generateFacultyId, generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: IStudent) => {
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

const createFacultyIntoDB = async (password: string, payload: IFaculty) => {
  // create a user object
  const userData: Partial<IUser> = {};

  //if password is not given , use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = "faculty";

  // find academic department info
  const academicDepartment = await AcademicDepartment.findById(payload.academicDepartment);

  if (!academicDepartment) {
    throw new AppError(400, "Academic department not found");
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateFacultyId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new AppError(400, "Failed to create user");
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.userId = newUser[0]._id; //reference _id

    // create a faculty (transaction-2)

    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new AppError(400, "Failed to create faculty");
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createAdminIntoDB = async (password: string, payload: IFaculty) => {
  // create a user object
  const userData: Partial<IUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = "admin";

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    //create a admin
    if (!newUser.length) {
      throw new AppError(400, "Failed to create admin");
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.userId = newUser[0]._id; //reference _id

    // create a admin (transaction-2)
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(400, "Failed to create admin");
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserServices = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
};
