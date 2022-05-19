import { Router } from "express";
import { cretaeOrderController } from '../controllers/createOrderController';
import { getOrderByIdController } from '../controllers/getOrderByIdController';
import { userTokenValidation } from '../../User/middlewares/userTokenValidation';


const routerOrder = Router();

routerOrder.route("/orders/").get(userTokenValidation,getOrderByIdController);
routerOrder.route("/orders").post(cretaeOrderController);


export default routerOrder;
