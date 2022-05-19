import { CreateUser, User } from "../types/User";
import { encryptPassword } from "../utils/passwordManager";
import { UserModel } from "../entity/models/UserModel";
import { createResource } from "../../shared/factory/createResource";
export const authCreateUserService = async (
  userRequest: CreateUser
): Promise<User> => {
  try {
    userRequest["password"] = await encryptPassword(userRequest.password);
    const user = await createResource(UserModel)(userRequest);
    return user as User;
  } catch (error: any) {
    console.log(error);
    throw new Error(`error creating user with email ${userRequest.email}`);
  }
};
