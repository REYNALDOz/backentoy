import { model } from "mongoose";
import { Review } from "Review/types/Review";
import { ReviewSchema } from "../schema/ReviewSchema";

export const ReviewModel = model<Review>("Review", ReviewSchema);
