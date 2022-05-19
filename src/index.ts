import dotenv from "dotenv";
import { createDbConnection } from "./config/database";
import app from "./app";

dotenv.config();

createDbConnection(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT, () =>
  console.log("🚀server started on port", process.env.PORT)
);
