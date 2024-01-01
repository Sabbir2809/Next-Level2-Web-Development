/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CategoryServices } from "./category.service";

/**
 * 6.Create a Category (Only Admin can do this)
 * Route: /api/categories
 * Method: POST
 * Request Headers: Authorization: <ADMIN_JWT_TOKEN>
 */
const createCategory = catchAsync(async (req, res) => {
  const userData = (req as any).user;
  const result = await CategoryServices.createCategoryIntoDB(userData, req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Category created successfully",
    data: result,
  });
});

/**
 * 7. Get All Categories
 * Route: /api/categories
 * Method: GET
 */
const getAllCategories = catchAsync(async (req, res) => {
  const result = await CategoryServices.getAllCategoriesFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Categories retrieved successfully",
    data: result,
  });
});

export const CategoryControllers = {
  createCategory,
  getAllCategories,
};
