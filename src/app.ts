import express, { Request, Response, NextFunction } from "express";
import routerUser from "./User/routes/userRoutes";
import cors from 'cors'
import routerToy from './Toy/routes/toyRoutes';
import routerOrder from './Order/routes/orderRoutes';
const app = express();

app.use(express.json());
app.use(cors())

app.use(routerUser);
app.use(routerToy);
app.use(routerOrder);

app.use(function (err: any, _req: Request, res: Response, next: NextFunction) {
  console.error(err.message);
  console.log(err.statusCode);
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;
