import { Types } from "mongoose";
import { User } from 'User/types/User';

export interface Review {
  id: Types.ObjectId;
  name: string;
  rating: Number;
  comment: string;
  user: UserIdType;
}

export type ReviewIdType = {
  _id: Types.ObjectId;
};

export type CreateReview = {
  id: Types.ObjectId;
  name: string;
  rating: Number;
  comment: string;
  user:string;
};
