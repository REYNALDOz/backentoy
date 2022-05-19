import { Router } from "express";
import { getAllToyController } from '../controllers/getAllToyController';
import { getToyByIdController } from '../controllers/getToyById';
import { createToyController } from '../controllers/createToyController';

const routerToy = Router();

routerToy
  .route("/toy")
  .get(getAllToyController)

 /*  .post(
    userTokenValidation,
    bodyRequestValidator(createProjectSchema),
    createProjectController
  ); */

routerToy.route("/toy/:id").get(getToyByIdController);
routerToy.route("/toy").post(createToyController);

/* router
  .route("/projects/:projectId")
  .put(
    userTokenValidation,
    bodyRequestValidator(editProjectValidateSchema),
    projectController.editOneProject
  )
  .delete(userTokenValidation, projectController.deleteOneProject);
 */




export default routerToy;
