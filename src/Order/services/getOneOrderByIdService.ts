import Logger from "../../shared/logger/appLogger";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";
import { Order } from '../types/Order';
import { OrderModel } from '../entity/models/OrderModel';
export const getOneOrderByIdService = async (
  id: string
): Promise<Order | null> => {
  try {
    const order: Order[] = await findOneResourceById(OrderModel)(id);
    return order[0];
  } catch (error: any) {
    Logger.error(`error getting order with id ${id}`, {
      service: "getOneUserByIdService",
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
