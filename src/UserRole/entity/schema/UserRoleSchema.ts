import { Schema } from "mongoose";
import { UserRole } from "../../types/UserRoleId";

export const UserRoleSchema = new Schema<UserRole>({
  roleName: { String, required: [true, "Role name is required"] },
});
