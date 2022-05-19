import { NextFunction, Request, Response } from "express";
import { getOneOrderByIdService } from '../services/getOneOrderByIdService';

export const getOrderByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const order = await getOneOrderByIdService(id);
    res.status(200).json({ order });
  } catch (error) {
    next(error);
  }
};
