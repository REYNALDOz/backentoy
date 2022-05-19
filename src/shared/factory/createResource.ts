import { Model as ModelType } from "mongoose";
import { UserRole } from "../../UserRole/types/UserRoleId";
import { User } from "../../User/types/User";
import { Toy } from "../../Toy/types/Toy";
import { Order } from '../../Order/types/Order';

export const createResource =
  <K extends ModelType<User> | ModelType<UserRole> | ModelType<Toy> | ModelType<Order>>(
    Model: K
  ) =>
  async <T>(resource: T): Promise<User | UserRole | Toy | Order> => {
    const newResource = new Model(resource);
    return await newResource.save();
  };
