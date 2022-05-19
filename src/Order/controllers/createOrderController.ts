import { NextFunction, Request, Response } from "express";
import { createNewProjectService } from "../services/createNewOrderService";
import { ApplicationError } from "../../shared/customErrors/AplicationErrors";
import Logger from "../../shared/logger/appLogger";

export const cretaeOrderController = async (
  req: Request<
    {},
    {},
    {
      orderItems: [];
      shippingAddress: [];
      paymentMethod: string;
      taxPrice: Number;
      itemsPrice: [];
      shippingPrice: Number;
      totalPrice: Number;
    }
  >,
  res: Response,
  next: NextFunction
) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  try {
    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      return;
    } else {
      const newOrder = await createNewProjectService({
        user:req.userId,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
      res.status(201).json({ data: newOrder });
    }
  } catch (error: any) {
    Logger.error("error on create order controller", {
      instance: "controller",
      service: "cretaeOrderController",
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
