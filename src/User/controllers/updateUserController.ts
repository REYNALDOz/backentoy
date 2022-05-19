import { Request, Response } from "express";
import { UserModel } from '../entity/models/UserModel';


export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const newUserInfo = req.body;
    const userRole = await UserModel.findOneAndUpdate(
      { _id: userId },
      newUserInfo
    );
    res.status(200).json({ newUserInfo });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
