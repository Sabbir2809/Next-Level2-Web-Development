import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    success: false,
    error: error.message,
  });
};
export default globalErrorHandler;
