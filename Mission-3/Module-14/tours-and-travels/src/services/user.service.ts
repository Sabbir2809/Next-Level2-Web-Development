import IUser from "../interfaces/user.interface";
import User from "../models/user.model";

// create
const createUser = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);
  return result;
};

// read
const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

// update
const updateUser = async (id: string, userData: IUser): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
  return result;
};

// delete
const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
