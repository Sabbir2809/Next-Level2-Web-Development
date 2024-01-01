import { z } from "zod";

// Zod
const createCategoryValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "category name must be string",
    required_error: "category name is Required",
  }),
});

export const CategoryValidations = {
  createCategoryValidationSchema,
};
