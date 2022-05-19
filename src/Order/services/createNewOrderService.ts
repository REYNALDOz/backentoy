import { createResource } from "../../shared/factory/createResource";
import logger from "../../shared/logger/appLogger";



import { CreateOrder, Order } from '../types/Order';
import { OrderModel } from '../entity/models/OrderModel';

export const createNewProjectService = async (
  orderRequest: CreateOrder
): Promise<Order> => {
  try {
    const order = await createResource(OrderModel)(orderRequest);
    return order as Order;
  } catch (error: any) {
    logger.error("error creating a new order service", {
      instance: "services",
      service: "createNewProjectService",
      trace: error.message ? error.message : "",
    });
    throw new Error(`Error creating a new order ${error.message}`);
  }
};
