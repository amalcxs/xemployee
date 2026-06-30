import { FastifyInstance } from "fastify";
import corsPlugin from "./cors.js";
import cookiePlugin from "./cookie.js";
import jwtPlugin from "./jwt.js";

export const registerPlugins = async (fastify: FastifyInstance) => {
  await fastify.register(corsPlugin);
  await fastify.register(cookiePlugin);
  await fastify.register(jwtPlugin);
};
