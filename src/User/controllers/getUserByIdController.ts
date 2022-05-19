import { NextFunction, Request, Response } from "express";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";
import { getOneUserByIdService } from "../services/getOneUserByIdService";

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const  id  = req.userId;
  try {
    const user = await getOneUserByIdService(id);
    res.status(200).json({  user });
  } catch (error) {
    next(error);
  }
};
