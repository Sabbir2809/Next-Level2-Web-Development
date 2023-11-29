import config from "../../config";
import AcademicSemester from "../academicSemester/academicSemester.model";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.interface";
import User from "./user.model";
import { generateStudentId } from "./user.utils";

const createUserIntoDB = async (password: string, payload: IStudent) => {
  // create a user object
  const userData: Partial<IUser> = {};
  // if password is not given, use default password
  userData.password = password || (config.default_password as string);
  userData.role = "student";

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester);

  if (!admissionSemester) {
    // Handle the case where admissionSemester is null
    throw new Error("Admission semester not found");
  }

  // set manually generated it
  userData.id = await generateStudentId(admissionSemester);

  // create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id; // embedding id
    payload.userId = newUser._id; // reference _id

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createUserIntoDB,
};
