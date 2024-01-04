import express from "express";
import { userControllers } from "../controllers/user.controller";
import checkAuth from "../models/checkAuth";
const router = express.Router();

router.post("/create-user", userControllers.createUser);
router.get("/", checkAuth("admin"), userControllers.getAllUsers);
router.get("/:id", userControllers.getSingleUser);
router.patch("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
