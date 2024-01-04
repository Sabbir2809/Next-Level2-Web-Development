import express from "express";
import { authRoutes } from "./auth.route";
import { bookingRoutes } from "./booking.route";
import { reviewRoutes } from "./review.route";
import { tourRoutes } from "./tour.route";
import { userRoutes } from "./user.route";

const globalRouter = express.Router();

const routes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/tours",
    route: tourRoutes,
  },
  {
    path: "/reviews",
    route: reviewRoutes,
  },
  {
    path: "/bookings",
    route: bookingRoutes,
  },
];

routes.forEach((route) => {
  globalRouter.use(route.path, route.route);
});

export default globalRouter;
