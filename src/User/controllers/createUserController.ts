import { Request, Response, NextFunction } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationErrors";
import { CreateUser } from "../types/User";
import { authCreateUserAccountService } from "../services/authCreateUserAccountService";

export const createUserCrontoller = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await authCreateUserAccountService(req.body);
    res
      .status(200)
      //.json({ success: `true, verifique su email para activar su cuenta` });
      .json({ success: `user created` });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};