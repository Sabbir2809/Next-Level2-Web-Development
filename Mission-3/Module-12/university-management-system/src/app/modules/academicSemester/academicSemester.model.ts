import { Schema, model } from "mongoose";
import { AcademicSemesterCode, AcademicSemesterName, Months } from "./academicSemester.constant";
import { IAcademicSemester } from "./academicSemester.interface";

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    name: { type: String, enum: AcademicSemesterName, required: true },
    code: { type: String, enum: AcademicSemesterCode, required: true },
    year: { type: String, required: true },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExists) {
    throw new Error("Semester is already exists!");
  }
  next();
});

const AcademicSemester = model<IAcademicSemester>("AcademicSemester", academicSemesterSchema);
export default AcademicSemester;
