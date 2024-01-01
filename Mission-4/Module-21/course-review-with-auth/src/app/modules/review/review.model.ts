import { Schema, model } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      required: true,
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
  }
);

reviewSchema.index({ courseId: 1, createdBy: 1 }, { unique: true });

export const Review = model<IReview>("Review", reviewSchema);
