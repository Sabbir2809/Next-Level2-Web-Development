/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ReviewServices } from "./review.service";

/**
 * 8.Create a Review (Only the user can do this)
 * Route: /api/reviews
 * Method: POST
 * Request Headers: Authorization: <USER_JWT_TOKEN>
 */
const createReview = catchAsync(async (req, res) => {
  const userData = (req as any).user;
  const result = await ReviewServices.createReviewIntoDB(userData, req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Review created successfully",
    data: result,
  });
});

export const ReviewControllers = {
  createReview,
};
