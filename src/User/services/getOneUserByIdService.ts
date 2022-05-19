import { User } from "../types/User";
import Logger from "../../shared/logger/appLogger";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";
import { UserModel } from "../entity/models/UserModel";
export const getOneUserByIdService = async (
  id: string
): Promise<User | null> => {
  try {
    const user: User[] = await findOneResourceById(UserModel)(id);
    return user[0];
  } catch (error: any) {
    Logger.error(`error getting user with id ${id}`, {
      service: "getOneUserByIdService",
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
