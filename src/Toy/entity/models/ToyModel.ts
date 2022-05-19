import { model } from "mongoose";
import { Toy } from "../../types/Toy";
import { ToySchema } from "../schema/ToySchema";

export const ToyModel = model<Toy>("Toy", ToySchema);
