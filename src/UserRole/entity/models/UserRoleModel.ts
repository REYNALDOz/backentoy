import { model } from "mongoose";
import { UserRole } from "../../types/UserRoleId";
import { UserRoleSchema } from "../schema/UserRoleSchema";

export const UserRoleModel = model<UserRole>("UserRole", UserRoleSchema);
