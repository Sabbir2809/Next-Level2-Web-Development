import { Request, Response } from "express";
import { tourServices } from "../services/tour.service";

const createTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body;
    const result = await tourServices.createTour(tourData);

    res.status(201).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

const getAllTours = async (req: Request, res: Response) => {
  try {
    const result = await tourServices.getAllTours();

    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourServices.getSingleTour(id);

    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

const updateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const tourData = req.body;
    const result = await tourServices.updateTour(id, tourData);

    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

const deleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await tourServices.deleteTour(id);

    res.status(200).json({
      status: true,
      message: "Tour Deleted Successfully",
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

export const tourControllers = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
};
