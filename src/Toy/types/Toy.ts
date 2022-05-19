import { Types } from "mongoose";
import { Review } from "../../Review/types/Review";

export interface Toy {
  id: Types.ObjectId;
  name: string;
  image: string;
  description: string;
  rating: Number;
  reviews: [Review];
  numReviews: Number;
  price: Number;
  countInStock: Number;
}

export type ToyIdType = {
  _id: Types.ObjectId;
};

export type CreateToyReview = {
  name: string;
  image: string;
  description: string;
  rating: Number;
  numReviews: Number;
  price: Number;
  countInStock: Number;
};

export type CreateToy = {
  name: string;
  image: string;
  description: string;
  price: Number;
  countInStock: Number;
  user:string
};