import { Request, Response } from "express";
import { userServices } from "../services/user.service";

// create
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await userServices.createUser(userData);

    res.status(201).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// read all user
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();

    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// read single user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userServices.getSingleUser(id);

    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// update single user
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    const result = await userServices.updateUser(id, userData);

    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// update single user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await userServices.deleteUser(id);

    res.status(200).json({
      status: true,
      message: "User Deleted Successfully",
    });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.message });
  }
};

export const userControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
