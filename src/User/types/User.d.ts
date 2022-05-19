import { Types } from "mongoose";

export interface User {
  id: Types.ObjectId;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  isAdmin:boolean;
  validate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type UserIdType = {
  _id: Types.ObjectId;
};

export type CreateUser = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  isAdmin:booolean;
  validate: boolean;
};

export type LoginUser = {
  email: string;
  password: string;
};