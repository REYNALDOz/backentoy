import jwt, { UserIDJwtPayload } from "jsonwebtoken";

export const createAuthToken = (payload: {}, secret?: string): string => {
  return jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}${secret}`, {
    expiresIn: "10m",
  });
};

export const validateToken = (token: string, secret?: string) => {
  return jwt.verify(
    token,
    `${process.env.JWT_AUTH_SECRET}${secret}`
  ) as UserIDJwtPayload;
};
