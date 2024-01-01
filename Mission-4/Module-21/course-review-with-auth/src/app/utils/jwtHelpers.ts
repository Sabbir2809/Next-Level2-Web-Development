import jwt, { JwtPayload } from "jsonwebtoken";

export const createToken = (
  JwtPayload: { _id: string; role: string; email: string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(JwtPayload, secret, { expiresIn });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  createToken,
  verifyToken,
};
