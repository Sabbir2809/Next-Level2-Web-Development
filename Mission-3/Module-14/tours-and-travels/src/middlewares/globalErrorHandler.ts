import { ErrorRequestHandler } from "express";
import mongoose from "mongoose";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const errorResponse = {
    statusCode: error.statusCode || 500,
    success: error.statusCode || false,
    message: error.message || "Validation Error",
    issues: error.issues || [],
  };

  if (error instanceof mongoose.Error.ValidationError) {
    errorResponse.statusCode = 400;
    errorResponse.success = false;
    errorResponse.message = "Something went wrong!";

    const errorValues = Object.values(error.errors);

    errorValues.forEach((errObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      errorResponse.issues.push({
        path: errObj.path,
        message: errObj.message,
      });
    });
  }

  res.status(errorResponse.statusCode).json({
    success: errorResponse.success,
    message: errorResponse.message,
    issues: errorResponse.issues,
  });
};

export default globalErrorHandler;
