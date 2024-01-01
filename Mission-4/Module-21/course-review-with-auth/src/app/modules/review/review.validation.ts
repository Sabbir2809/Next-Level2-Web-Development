import { z } from "zod";

const createReviewValidationSchema = z.object({
  courseId: z.string({
    invalid_type_error: "courseId must be string",
    required_error: "courseId is Required",
  }),
  rating: z
    .number({
      invalid_type_error: "rating must be number",
      required_error: "rating is Required",
    })
    .positive()
    .min(1)
    .max(5),
  review: z.string({
    invalid_type_error: "review must be string",
    required_error: "review is Required",
  }),
});

export const ReviewValidations = {
  createReviewValidationSchema,
};
