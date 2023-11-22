import { Request, Response } from "express";
import { reviewServices } from "../services/review.service";

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    const result = await reviewServices.createReview(reviewData);

    res.status(201).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const result = await reviewServices.getAllReviews();

    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

const getSingleReview = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await reviewServices.getSingleReview(id);

    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

const updateReview = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const reviewData = req.body;
    const result = await reviewServices.updateReview(id, reviewData);

    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

const deleteReview = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await reviewServices.deleteReview(id);

    res.status(200).json({
      status: true,
      message: "Review Deleted Successfully",
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

export const reviewControllers = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
