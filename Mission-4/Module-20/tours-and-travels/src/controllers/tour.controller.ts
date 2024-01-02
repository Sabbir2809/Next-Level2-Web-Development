import { NextFunction, Request, Response } from "express";
import { tourServices } from "../services/tour.service";
import catchAsync from "../utils/catchAsync";
import sendSuccessResponse from "../utils/sendResponse";

const createTour = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await tourServices.createTour(req.body);

  sendSuccessResponse(res, {
    statusCode: 201,
    message: "Tour Created Successfully",
    data: result,
  });
});

const getAllTours = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await tourServices.getAllTours(req.query);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Tour Fetched Successfully",
    data: result,
  });
});

const getSingleTour = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const result = await tourServices.getSingleTour(id);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Tour Fetched Successfully",
    data: result,
  });
});

const updateTour = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const tourData = req.body;
  const result = await tourServices.updateTour(id, tourData);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Tour Updated Successfully",
    data: result,
  });
});

const deleteTour = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  await tourServices.deleteTour(id);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Tour Deleted Successfully",
    data: null,
  });
});

const getNextSchedule = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const result = await tourServices.getNextSchedule(id);

  sendSuccessResponse(res, {
    statusCode: 200,
    message: "Next Schedule Fetch Successfully",
    data: result,
  });
});

export const tourControllers = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
