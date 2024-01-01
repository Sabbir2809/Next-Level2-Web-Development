import express from "express";
import checkAuth from "../../middlewares/checkAuth";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryControllers } from "./category.controller";
import { CategoryValidations } from "./category.validation";

const router = express.Router();

router.post(
  "/",
  checkAuth("admin"),
  validateRequest(CategoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategory
);
router.get("/", CategoryControllers.getAllCategories);

export const CategoryRoutes = router;
