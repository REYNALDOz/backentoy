import { Types } from "mongoose";

export interface UserRole {
  id: Types.ObjectId;
  roleName: string;
}
