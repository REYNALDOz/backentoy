import { NextFunction, Request, Response } from "express";
import { UserModel } from "../entity/models/UserModel";

export const getAllUsers = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const users = await UserModel.find({});
  res.status(200).json({ users });
};
