import ITour from "../interfaces/tour.interface";
import Tour from "../models/tour.model";

// create
const createTour = async (tourData: ITour): Promise<ITour> => {
  const result = await Tour.create(tourData);
  return result;
};

// read
const getAllTours = async (): Promise<ITour[]> => {
  const result = await Tour.find();
  return result;
};

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id);
  return result;
};

// update
const updateTour = async (id: string, tourData: ITour): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, tourData, { new: true, runValidators: true });
  return result;
};

// delete
const deleteTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};

export const tourServices = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
};
