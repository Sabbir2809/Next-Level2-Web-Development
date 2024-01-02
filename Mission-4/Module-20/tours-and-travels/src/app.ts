import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import globalRouter from "./routers/router";

// express app instance
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1", globalRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    message: "Welcome to Tours & Travels World",
  });
});
// catch all routes
// app.all("*", notFound);
app.use(notFound);
// global error handler
app.use(globalErrorHandler);

export default app;
