import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: `Route Not Found! for ${req.originalUrl}`,
  });
};
export default notFound;
