import { NextFunction, Request, Response } from "express";
import { Toy } from '../types/Toy';
import { ApplicationError } from '../../shared/customErrors/AplicationErrors';
import Logger from '../../shared/logger/appLogger';
import { createNewToytService } from '../services/createNewToyService';

export const createToyController = async (
  req: Request<{}, {}, { name: string; image: string; description:string, price: number, countInStock:number }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name, price, description, image, countInStock } = req.body;
  try {
    const newToy: Toy = await createNewToytService({
      name,
      image,
      description,
      price,
      countInStock,
      user: req.userId,
    });
    res.status(201).json({ data: newToy });
  } catch (error: any) {
    Logger.error("error on create toy controller", {
      instance: "controller",
      service: "createToyController",
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
