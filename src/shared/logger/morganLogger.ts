import morgan, { StreamOptions } from "morgan";

import Logger from "./appLogger";

const stream: StreamOptions = {
  write: (message) => {
    Logger.http(message);
    Logger.error(message);
  },
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",

  { stream }
);

export default morganMiddleware;
