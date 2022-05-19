import { CreateUser } from "../types/User";
import { authCreateUserService } from "./authCreateUserService";
import Logger from "../../shared/logger/appLogger";
import { authSendValidationUserEmail } from "./authSendUserValidationSendEmail";
export const authCreateUserAccountService = async (
  userRequest: CreateUser
): Promise<void> => {
  try {
    const newUser = await authCreateUserService(userRequest);
    //await authSendValidationUserEmail(newUser.id, newUser.email);
  } catch (error: any) {
    Logger.error("Error creating user account", {
      instance: "services",
      fn: "authCreateUserAccountService",
      trace: error.message,
    });
    throw new Error("Error creating user account");
  }
};
