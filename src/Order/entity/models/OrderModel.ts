import { model } from "mongoose";
import { Order } from "../../types/Order";
import { OrderSchema } from "../schema/OrderSchema";

export const OrderModel = model<Order>("Order", OrderSchema);
