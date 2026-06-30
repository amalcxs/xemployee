import { FastifyInstance } from "fastify";
import cookie from "@fastify/cookie";
import { env } from "../config/index.js";

export const cookiePlugin = async (fastify: FastifyInstance) => {
  await fastify.register(cookie, {
    secret: env.JWT_SECRET,
  });
};
export default cookiePlugin;
