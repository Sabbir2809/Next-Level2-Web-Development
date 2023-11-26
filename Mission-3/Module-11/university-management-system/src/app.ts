import cors from "cors";
import express, { Application } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { StudentRoutes } from "./app/modules/student/student.route";
import { userRoutes } from "./app/modules/user/user.route";
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", userRoutes);

app.use(globalErrorHandler);

export default app;
