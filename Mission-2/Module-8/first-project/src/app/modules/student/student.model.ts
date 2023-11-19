import { Schema, model } from "mongoose";
import { Guardian, Student, StudentName, localGuardian } from "./student.interface";

const studentNameSchema = new Schema<StudentName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  matherName: { type: String, required: true },
  matherOccupation: { type: String, required: true },
  matherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<localGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

// Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>(
  {
    id: { type: String },
    name: studentNameSchema,
    gender: ["Male", "Female"],
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImage: { type: String },
    isActive: ["active", "blocked"],
  },
  { versionKey: false }
);

export const StudentModel = model("Student", studentSchema);
