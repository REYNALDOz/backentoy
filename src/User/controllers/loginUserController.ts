import { NextFunction, Request, Response } from "express";
//import { sendEmail } from '../../shared/service/sendEmailServiceSendGrid';

import { LoginUser } from "../types/User";
import { authLoginService } from '../services/authLoginService';

export const LoginUserController = async (
  req: Request<{}, {}, LoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await authLoginService(req.body);
    res.status(200).json({
      token,
    });
  } catch (error) {
    next(error);
  }
};
