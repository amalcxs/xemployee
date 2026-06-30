import { FastifyRequest, FastifyReply } from "fastify";
import { TokenPayload } from "../lib/jwt.js";

declare module "fastify" {
  interface FastifyRequest {
    user?: TokenPayload;
  }
}

/**
 * Authentication middleware stub.
 * Placed in preHandler hook for routes requiring authentication.
 */
export const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
  // No authentication logic is implemented for the foundation.
  return;
};
