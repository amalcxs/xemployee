import { FastifyRequest, FastifyReply } from "fastify";
import { response } from "../lib/response.js";
import { CONSTANTS } from "../config/index.js";

export const notFoundHandler = (request: FastifyRequest, reply: FastifyReply) => {
  return reply.status(404).send(
    response.error("Route not found", [
      {
        code: CONSTANTS.ERROR_CODES.NOT_FOUND,
        path: request.url,
        method: request.method,
      },
    ])
  );
};
