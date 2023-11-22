import IReview from "../interfaces/review.interface";
import Review from "../models/review.model";

// create
const createReview = async (reviewData: IReview): Promise<IReview> => {
  const result = await Review.create(reviewData);
  return result;
};

// read
const getAllReviews = async (): Promise<IReview[]> => {
  const result = await Review.find();
  return result;
};

const getSingleReview = async (id: string): Promise<IReview | null> => {
  const result = await Review.findById(id);
  return result;
};

// update
const updateReview = async (id: string, reviewData: IReview): Promise<IReview | null> => {
  const result = await Review.findByIdAndUpdate(id, reviewData, { new: true, runValidators: true });
  return result;
};

// delete
const deleteReview = async (id: string): Promise<IReview | null> => {
  const result = await Review.findByIdAndDelete(id);
  return result;
};

export const reviewServices = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};