import { z } from "zod";

// Zod
const userRegistrationValidationSchema = z.object({
  username: z.string({
    invalid_type_error: "username must be string",
    required_error: "username is Required",
  }),
  email: z.string({
    invalid_type_error: "email must be string",
    required_error: "email is Required",
  }),
  password: z
    .string({
      invalid_type_error: "password must be a string",
      required_error: "password is Required",
    })
    .refine(
      (password) => {
        // at least one uppercase, one lowercase, one digit and length min-6)
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/g.test(password);
      },
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit and length min-6 character",
      }
    ),
  role: z.string({
    invalid_type_error: "role must be string",
    required_error: "role is Required",
  }),
});

const userLoginValidationSchema = z.object({
  username: z.string({
    invalid_type_error: "username must be string",
    required_error: "username is Required",
  }),
  password: z.string({
    invalid_type_error: "password must be string",
    required_error: "password is Required",
  }),
});

const changePasswordValidationSchema = z.object({
  currentPassword: z.string({ required_error: "currentPassword is Required" }),
  newPassword: z.string({ required_error: "newPassword is Required" }),
});

export const UserValidations = {
  userRegistrationValidationSchema,
  userLoginValidationSchema,
  changePasswordValidationSchema,
};
