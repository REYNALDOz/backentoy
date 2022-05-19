import { LoginUser } from "../types/User";
import { createAuthToken } from "../utils/tokenManager";
import { validatePassword } from "../utils/passwordManager";
import { getOneUserByEmail } from "./getOneUserByEmail";

export type TokenResponse = {
  token: string;
};

export const authLoginService = async (
  userRequest: LoginUser
): Promise<TokenResponse> => {
  try {
    const user = await getOneUserByEmail(userRequest.email);

    if (!user) throw new Error("user email or password is incorrect");

    const auth = await validatePassword(userRequest.password, user.password);

    if (!auth) throw new Error("user email or password is incorrect");
    const token = createAuthToken({ id: user.id });
    //const refreshToken = await authCreateRefreshToken(user.id);

    return {
      token,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};
