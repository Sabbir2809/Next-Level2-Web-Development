import express from "express";
import checkAuth from "../../middlewares/checkAuth";
import validateRequest from "../../middlewares/validateRequest";
import { UserAuthControllers } from "./userAuth.controller";
import { UserValidations } from "./userAuth.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(UserValidations.userRegistrationValidationSchema),
  UserAuthControllers.userRegistration
);

router.post(
  "/login",
  validateRequest(UserValidations.userLoginValidationSchema),
  UserAuthControllers.userLogin
);

router.post(
  "/change-password",
  checkAuth("user", "admin"),
  validateRequest(UserValidations.changePasswordValidationSchema),
  UserAuthControllers.changePassword
);

export const UserAuthRoutes = router;
