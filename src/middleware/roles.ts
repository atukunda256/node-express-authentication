import { NextFunction, Response } from "express";
import { CustomRequest } from "./auth";

export enum UserRole {
  Admin = "admin",
  User = "user",
}

// Middleware to check if user is admin
export const isAdmin = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user && req.user.role === UserRole.Admin) {
    return next(); // User is admin, allow access
  } else {
    return res.status(403).json({ message: "Unauthorized" }); // User is not admin, deny access
  }
};
