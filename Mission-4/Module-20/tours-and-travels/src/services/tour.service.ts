import { filter } from "../helpers/filterHelper";
import { ITour } from "../interfaces/tour.interface";
import Tour from "../models/tour.model";

// create
const createTour = async (tourData: ITour): Promise<ITour> => {
  const result = await Tour.create(tourData);
  return result;
};

// read
const getAllTours = async (query: any): Promise<ITour[]> => {
  // copying query
  const queryObj = { ...query };

  const result = await filter(
    Tour.find({
      price: { $gt: query.price },
    }),
    queryObj
  );
  return result;
};

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id).populate("reviews");
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

// getNextSchedule
const getNextSchedule = async (id: string): Promise<any | null> => {
  const tour = await Tour.findByIdAndDelete(id);
  const nextSchedule = tour?.getNextNearestStartDateAndEndDate();

  return { tour, nextSchedule };
};

export const tourServices = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
