import { CreateToy, Toy } from "../types/Toy";
import Logger from "../../shared/logger/appLogger";
import { createResource } from "../../shared/factory/createResource";
import { ToyModel } from "../entity/models/ToyModel";
export const toyCreateService = async (
  userRequest: CreateToy
): Promise<Toy> => {
  try {
    const newToy = await createResource(ToyModel)(userRequest);
    return newToy as Toy;
  } catch (error: any) {
    Logger.error("Error creating user account", {
      instance: "services",
      fn: "authCreateUserAccountService",
      trace: error.message,
    });
    throw new Error("Error creating user account");
  }
};
