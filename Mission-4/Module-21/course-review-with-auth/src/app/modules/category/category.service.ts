import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errors/AppError";
import { User } from "../userAuth/userAuth.model";
import { ICategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (userData: JwtPayload, payload: ICategory) => {
  // checking if the user is authorized
  const user = await User.findById(userData._id);
  if (!user) {
    throw new AppError(404, "This User is Not Found!");
  }

  const result = await Category.create({ ...payload, createdBy: user._id });
  return result;
};

const getAllCategoriesFromDB = async () => {
  const result = await Category.find().populate({
    path: "createdBy",
    select: "-password -passwordHistory -passwordChangedAt -createdAt -updatedAt",
  });
  return {
    categories: result,
  };
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
};
