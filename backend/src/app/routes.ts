import { FastifyInstance } from "fastify";
import { response } from "../lib/response.js";

export const registerRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", async (request, reply) => {
    return reply.send(response.success("AI Employee Backend Running"));
  });
};

export default registerRoutes;
