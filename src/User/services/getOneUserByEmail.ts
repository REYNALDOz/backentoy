
import { UserModel } from "../entity/models/UserModel";
import { User } from "../types/User";
import { findOneResourceByField } from '../../shared/factory/findOnerResourceByFiel';

export const getOneUserByEmail = async (
  email: string
): Promise<User | null> => {
  try {
    const user: User | null = await findOneResourceByField(UserModel)({
      email,
    });

    return user;
  } catch (error: any) {
    throw new Error(`error getting the user with email${email}`);
  }
};
