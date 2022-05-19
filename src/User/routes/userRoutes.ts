import { Router } from "express";
import { createUserCrontoller } from "../controllers/createUserController";
import { bodyRequestValidator } from "../../shared/validators/bodyRequestValidators";
import {
  signUpUserSchema,
  loginUserSchema,
} from "../utils/userSchemaValidator";
import { getAllUsers } from "../controllers/getAllUserController";
import { getUserById } from "../controllers/getUserByIdController";
import { updateUser } from "../controllers/updateUserController";
import { deleteUser } from "../controllers/deleteUserController";
import { LoginUserController } from "../controllers/loginUserController";
import { validateToken } from '../utils/tokenManager';
import { userTokenValidation } from '../middlewares/userTokenValidation';

const routerUser: Router = Router();

routerUser
  .route("/singup")
  .post(bodyRequestValidator(signUpUserSchema), createUserCrontoller);

routerUser
  .route("/login")
  .post(bodyRequestValidator(loginUserSchema), LoginUserController);

routerUser.route("/users").get(userTokenValidation, getAllUsers);
//routerUser.route("/users/id").get(userTokenValidation, getUserById);
routerUser.route("/users/profile").get(userTokenValidation,getUserById);
routerUser.route("/users/profile/").put(userTokenValidation, updateUser);

//routerUser.route("/users/:id").delete(deleteUser);

export default routerUser;
