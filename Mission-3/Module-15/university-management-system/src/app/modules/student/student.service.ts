import mongoose from "mongoose";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import User from "../user/user.model";
import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const getStudentsFromDB = async (query: Record<string, unknown>) => {
  // const queryObj = { ...query };

  const studentSearchableFields = ["email", "name.firstName", "presentAddress"];

  // let searchTerm = "";
  // if (query?.searchTerm) {
  //   searchTerm = query?.searchTerm as string;
  // }

  // // filtering
  // const excludeFields = ["searchTerm", "sort", "limit", "page", "limit", "fields"];
  // excludeFields.forEach((el) => delete queryObj[el]);

  // const searchQuery = Student.find({
  //   $or: studentSearchableFields.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: "i" },
  //   })),
  // });

  // const filterQuery = searchQuery
  //   .find(queryObj)
  //   .populate("admissionSemesterId")
  //   .populate({
  //     path: "academicDepartmentId",
  //     populate: {
  //       path: "academicFacultyId",
  //     },
  //   });

  // let sort = "-createdAt";
  // if (query.sort) {
  //   sort = query.sort as string;
  // }
  // const sortQuery = filterQuery.sort(sort);

  // let limit = 1;
  // let page = 1;
  // let skip = 0;
  // if (query.limit) {
  //   limit = Number(query.limit);
  // }
  // if (query.page) {
  //   page = Number(query.page);
  //   skip = (page - 1) * limit;
  // }
  // const paginateQuery = sortQuery.skip(skip);
  // const limitQuery = paginateQuery.limit(limit);

  // let fields = "";
  // if (query.fields) {
  //   fields = (query.fields as string).split(",").join(" ");
  // }
  // const fieldQuery = await limitQuery.select(fields);
  // return fieldQuery;

  const studentQuery = new QueryBuilder(
    Student.find()
      .populate("admissionSemesterId")
      .populate({
        path: "academicDepartmentId",
        populate: {
          path: "academicFacultyId",
        },
      }),
    query
  )
    .search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await studentQuery.modelQuery;
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
