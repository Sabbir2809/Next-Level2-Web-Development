import { z } from "zod";

const createCourseValidationSchema = z.object({
  title: z.string({
    invalid_type_error: "title must be string",
    required_error: "courseId is Required",
  }),
  instructor: z.string({
    invalid_type_error: "instructor must be string",
    required_error: "instructor is Required",
  }),
  categoryId: z.string({
    invalid_type_error: "categoryId must be string",
    required_error: "categoryId is Required",
  }),
  price: z
    .number({
      invalid_type_error: "price must be number",
      required_error: "price is Required",
    })
    .positive({
      message: "Price Must be a Positive Number",
    }),

  tags: z.array(
    z.object({
      name: z.string({
        invalid_type_error: "price must be number",
        required_error: "price is Required",
      }),
      isDeleted: z.boolean().default(false),
    })
  ),
  startDate: z.string({
    invalid_type_error: "startDate must be string",
    required_error: "startDate is Required",
  }),
  endDate: z.string({
    invalid_type_error: "endDate must be string",
    required_error: "endDate is Required",
  }),
  language: z.string({
    invalid_type_error: "language must be string",
    required_error: "language is Required",
  }),
  provider: z.string({
    invalid_type_error: "provider must be string",
    required_error: "provider is Required",
  }),

  details: z.object({
    level: z.enum(["Beginner", "Intermediate", "Advanced"], {
      invalid_type_error: "level must be string",
      required_error: "level is Required",
    }),
    description: z.string({
      invalid_type_error: "description must be string",
      required_error: "description is Required",
    }),
  }),
});

const updateCourseValidationSchema = z.object({
  title: z
    .string({
      invalid_type_error: "title must be string",
    })
    .optional(),
  instructor: z
    .string({
      invalid_type_error: "instructor must be string",
    })
    .optional(),
  categoryId: z
    .string({
      invalid_type_error: "categoryId must be string",
    })
    .optional(),
  price: z
    .number({
      invalid_type_error: "price must be number",
    })
    .positive({
      message: "Price Must be a Positive Number",
    })
    .optional(),

  tags: z
    .array(
      z.object({
        name: z
          .string({
            invalid_type_error: "price must be number",
          })
          .optional(),
        isDeleted: z.boolean().default(false).optional(),
      })
    )
    .optional(),
  startDate: z
    .string({
      invalid_type_error: "startDate must be string",
    })
    .optional(),
  endDate: z
    .string({
      invalid_type_error: "endDate must be string",
    })
    .optional(),
  language: z
    .string({
      invalid_type_error: "language must be string",
    })
    .optional(),
  provider: z
    .string({
      invalid_type_error: "provider must be string",
    })
    .optional(),

  details: z
    .object({
      level: z
        .enum(["Beginner", "Intermediate", "Advanced"], {
          invalid_type_error: "level must be string",
        })
        .optional(),

      description: z
        .string({
          invalid_type_error: "description must be string",
        })
        .optional(),
    })
    .optional(),
});

export const CourseValidations = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
};
