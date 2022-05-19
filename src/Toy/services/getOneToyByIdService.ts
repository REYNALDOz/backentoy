
import Logger from "../../shared/logger/appLogger";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";
import { Toy } from '../types/Toy';
import { ToyModel } from '../entity/models/ToyModel';

export const getOneToyByIdService = async (
  id: string
): Promise<Toy | null> => {
  try {
    const toy: Toy[] = await findOneResourceById(ToyModel)(id);
    return toy[0];
  } catch (error: any) {
    Logger.error(`error getting user with id ${id}`, {
      service: "getOneToyByIdService",
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
