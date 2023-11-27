import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    router: userRoutes,
  },
  {
    path: "/students",
    router: StudentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
