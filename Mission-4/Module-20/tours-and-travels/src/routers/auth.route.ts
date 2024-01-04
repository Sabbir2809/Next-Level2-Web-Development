import express from "express";
import { authControllers } from "../controllers/auth.controller";
import checkAuth from "../middlewares/checkAuth";

const router = express.Router();

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);
router.patch("/change-password", checkAuth("admin", "user"), authControllers.changePassword);
router.get("/refresh-token", authControllers.refreshToken);

export const authRoutes = router;
