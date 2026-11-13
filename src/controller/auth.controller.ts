import { NextFunction } from "express";
import { adminRegistration } from "../services/auth.service";

export const registerAdmin = async ({ req, res }: any, next: NextFunction) => {
  try {
    console.log("Request log: ", req.body);

    const createAdmin = await adminRegistration(req.body ?? {});

    if (createAdmin)
      return res.status(201).json({
        success: true,
        message: "Admin created successfully",
        createAdmin,
      });
  } catch (error) {
    next(error);
  }
};
