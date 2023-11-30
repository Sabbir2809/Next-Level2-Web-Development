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

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id)
    .populate("admissionSemesterId")
    .populate({
      path: "academicDepartmentId",
      populate: {
        path: "academicFacultyId",
      },
    });
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
