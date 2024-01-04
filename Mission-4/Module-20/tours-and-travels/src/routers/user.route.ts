import express from "express";
import { userControllers } from "../controllers/user.controller";
import checkAuth from "../middlewares/checkAuth";
const router = express.Router();

router.post("/create-user", checkAuth("admin"), userControllers.createUser);
router.get("/", checkAuth("admin"), userControllers.getAllUsers);
router.get("/:id", userControllers.getSingleUser);
router.patch("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
