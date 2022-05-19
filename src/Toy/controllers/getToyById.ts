import { NextFunction, Request, Response } from "express";
import { getOneUserByIdService } from '../../User/services/getOneUserByIdService';
import { getOneToyByIdService } from '../services/getOneToyByIdService';


export const getToyByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const user = await getOneToyByIdService(id);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
