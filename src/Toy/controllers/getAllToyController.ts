import { NextFunction, Request, Response } from "express";
import { ToyModel } from '../entity/models/ToyModel';


export const getAllToyController = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const users = await ToyModel.find({});
  res.status(200).json({ users });
};
