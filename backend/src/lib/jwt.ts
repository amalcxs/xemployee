import jwt from "jsonwebtoken";
import { env } from "../config/index.js";

export interface TokenPayload {
  userId: string;
  email: string;
  [key: string]: any;
}

export const jwtUtils = {
  sign(payload: TokenPayload, expiresIn: string | number): string {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: expiresIn as any,
    });
  },

  verify(token: string): TokenPayload {
    return jwt.verify(token, env.JWT_SECRET) as TokenPayload;
  },
};
