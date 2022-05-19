import { Schema } from "mongoose";
import { ReviewSchema } from "../../../Review/entity/schema/ReviewSchema";

export const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "an user is required to create a review"],
      ref: "User",
    },
    itemPrice: {
      type: Schema.Types.ObjectId,
      required: [true, "item Price is required to create a review"],
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        toy: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Toy",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
      default: "Paypal",
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      updateTime: { type: String },
      emailAddress: { type: String },
    },

    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paiAt: {
      type: Date,
    },
    isDelivery: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveryAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
