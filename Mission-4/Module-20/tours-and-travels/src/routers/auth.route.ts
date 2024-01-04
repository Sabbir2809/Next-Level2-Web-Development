import express from "express";
import { authControllers } from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);

export const authRoutes = router;
