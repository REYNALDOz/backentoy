import { model } from "mongoose";
import { User } from "User/types/User";
import { UserSchema } from "../schema/UserSchema";

export const UserModel = model<User>("User", UserSchema);
