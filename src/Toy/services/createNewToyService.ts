import { createResource } from "../../shared/factory/createResource";
import logger from "../../shared/logger/appLogger";
import { CreateToy, Toy } from "../types/Toy";
import { ToyModel } from "../entity/models/ToyModel";

export const createNewToytService = async (
  toyRequest: CreateToy
): Promise<Toy> => {
  try {
    const toy = await createResource(ToyModel)(toyRequest);
    return toy as Toy;
  } catch (error: any) {
    logger.error("error creating a new project service", {
      instance: "services",
      service: "createNewProjectService",
      trace: error.message ? error.message : "",
    });
    throw new Error(`Error creating a new project ${error.message}`);
  }
};
