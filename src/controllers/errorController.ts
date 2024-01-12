import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ERROR 💥", err);
  res.status(400).json({
    status: "error",
    message: err.message,
  });
};
