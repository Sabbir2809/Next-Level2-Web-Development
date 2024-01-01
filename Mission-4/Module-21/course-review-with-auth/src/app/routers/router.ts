import express from "express";
import { CategoryRoutes } from "../modules/category/category.route";
import { CourseRoutes } from "../modules/course/course.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { UserAuthRoutes } from "../modules/userAuth/userAuth.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/categories",
    route: CategoryRoutes,
  },
  {
    path: "/",
    route: CourseRoutes,
  },
  {
    path: "/reviews",
    route: ReviewRoutes,
  },
  {
    path: "/auth",
    route: UserAuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
