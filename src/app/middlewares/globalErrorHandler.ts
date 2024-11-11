import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Default to 500 for server errors if status is not set
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err.message || "Something went wrong",
  });
};

export default globalErrorHandler;
