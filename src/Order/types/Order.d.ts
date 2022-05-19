import { Types } from "mongoose";
import { Review } from "../../Review/types/Review";
import { UserIdType } from "../../User/types/User";

export interface Order {
  id: Types.ObjectId;
  user: UserIdType;
  orderItems: [];
  shippingAddress: [];
  paymentMethod: string;
  paymentResult: [];
  itemsPrice:[];
  taxPrice: Number;
  shippingPrice: Number;
  totalPrice: Number;
  isPaid: Boolean;
  paiAt: Date;
  isDelivery: Boolean;
  deliveryAt:Date;

}

export type OrderIdType = {
  _id: Types.ObjectId;
};

export type CreateOrder = {
  orderItems: [];
  shippingAddress: [];
  paymentMethod: string;
  itemsPrice:[];
  taxPrice: Number;
  shippingPrice: Number;
  totalPrice: Number;
  user:string;
};
