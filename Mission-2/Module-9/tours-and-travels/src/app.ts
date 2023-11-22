import cors from "cors";
import express, { Application, Request, Response } from "express";
import { reviewRoutes } from "./routers/review.route";
import { tourRoutes } from "./routers/tour.route";
import { userRoutes } from "./routers/user.route";
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/reviews", reviewRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    message: "Welcome to Tours & Travels World",
  });
});

export default app;
