import { FastifyInstance } from "fastify";
import { jwtUtils } from "../lib/jwt.js";

declare module "fastify" {
  interface FastifyInstance {
    jwt: typeof jwtUtils;
  }
}

export const jwtPlugin = async (fastify: FastifyInstance) => {
  fastify.decorate("jwt", jwtUtils);
};

// Prevent Fastify from encapsulating the decorator
// @ts-ignore
jwtPlugin[Symbol.for("skip-override")] = true;

export default jwtPlugin;
