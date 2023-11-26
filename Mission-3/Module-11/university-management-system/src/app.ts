import cors from "cors";
import express, { Application } from "express";
import { StudentRoutes } from "./app/modules/student/student.route";
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/students", StudentRoutes);

export default app;
