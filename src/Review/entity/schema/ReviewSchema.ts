import { Schema } from "mongoose";
export const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    rating: {
      type: String,
      required: [true, "rating is required"],
    },
    comment: {
      type: String,
      required: [true, "comment is required"],
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "an user is required to create a review"],
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
