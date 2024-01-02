import { NextFunction, Request, Response } from "express";
import { userServices } from "../services/user.service";
import catchAsync from "../utils/catchAsync";
import sendSuccessResponse from "../utils/sendResponse";

// create
const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;
  const result = await userServices.createUser(userData);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "User Created Successfully",
    data: result,
  });
});

// read all user
const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await userServices.getAllUsers();

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "User Fetched Successfully",
    data: result,
  });
});

// read single user
const getSingleUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const result = await userServices.getSingleUser(id);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "User Fetch Successfully",
    data: result,
  });
});

// update single user
const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const userData = req.body;
  const result = await userServices.updateUser(id, userData);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "User Updated Successfully",
    data: result,
  });
});

// update single user
const deleteUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  await userServices.deleteUser(id);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "User Deleted Successfully",
    data: null,
  });
});

export const userControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
