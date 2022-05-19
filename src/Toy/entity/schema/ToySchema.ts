import { Schema } from "mongoose";
import { ReviewSchema } from "../../../Review/entity/schema/ReviewSchema";

export const ToySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    reviews: [ReviewSchema],
    rating: {
      type: Number,
      required: [true, "rating is required"],
      default: 0,
    },

    numReviews: {
      type: Number,
      required: [true, "numReviews is required"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
      default: 0,
    },
    countInStock: {
      type: Number,
      required: [true, "countInStock is required"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
