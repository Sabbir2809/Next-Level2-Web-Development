import { NextFunction, Request, Response } from "express";
import { reviewServices } from "../services/review.service";
import catchAsync from "../utils/catchAsync";
import sendSuccessResponse from "../utils/sendResponse";

const createReview = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const reviewData = req.body;
  const result = await reviewServices.createReview(reviewData);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "Review Created Successfully",
    data: result,
  });
});

const getAllReviews = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await reviewServices.getAllReviews();

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Review Fetch Successfully",
    data: result,
  });
});

const getSingleReview = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const result = await reviewServices.getSingleReview(id);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Review Fetch Successfully",
    data: result,
  });
});

const updateReview = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const reviewData = req.body;
  const result = await reviewServices.updateReview(id, reviewData);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Review Updated Successfully",
    data: result,
  });
});

const deleteReview = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  await reviewServices.deleteReview(id);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Review Deleted Successfully",
    data: null,
  });
});

export const reviewControllers = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
