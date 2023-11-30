import { Schema, model } from "mongoose";
import { IAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true, versionKey: false }
);

const AcademicFaculty = model<IAcademicFaculty>("AcademicFaculty", academicFacultySchema);
export default AcademicFaculty;
