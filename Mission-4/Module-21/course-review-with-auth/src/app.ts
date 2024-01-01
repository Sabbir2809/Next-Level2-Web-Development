import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routers/router";

// express app
const app: Application = express();

// application middlewares
app.use(express.json());
app.use(cors());

// application routes
app.use("/api", router);

// Health Check API Endpoint
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "Assignment-4: course-review-with-auth, All is Well" });
});

// catch all routes
app.use(notFound);
// global error handler
app.use(globalErrorHandler);

export default app;
