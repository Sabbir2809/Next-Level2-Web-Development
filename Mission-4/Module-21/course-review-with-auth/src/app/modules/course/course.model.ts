import { Schema, model } from "mongoose";
import AppError from "../../errors/AppError";
import { ICourse } from "./course.interface";

const courseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tags: [
      {
        name: { type: String, required: true },
        isDeleted: { type: Boolean, default: false },
      },
    ],
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    details: {
      level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
      },
      description: {
        type: String,
      },
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

courseSchema.virtual("durationInWeeks").get(function () {
  const millisecondsPerWeek = 604800000; // 24*7*60*60*1000
  // Convert strings to Date
  const startDate = new Date(this.startDate);
  const endDate = new Date(this.endDate);
  // Calculate difference between startDate and endDate
  const differenceInMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
  // Calculate duration in weeks
  const durationInWeeks = Math.ceil(differenceInMilliseconds / millisecondsPerWeek);
  return durationInWeeks;
});

courseSchema.pre("findOneAndUpdate", async function () {
  const query = this.getQuery();
  const isExistCourseId = await Course.findOne(query);
  if (!isExistCourseId) {
    throw new AppError(404, "This Course does not Exists!");
  }
});

export const Course = model<ICourse>("Course", courseSchema);
