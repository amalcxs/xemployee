import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";
import { response } from "../lib/response.js";
import { logger } from "../lib/logger.js";
import { CONSTANTS } from "../config/index.js";

export const errorHandler = (
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) => {
  // Log the error
  logger.error({
    err: error,
    req: {
      method: request.method,
      url: request.url,
      ip: request.ip,
    },
  });

  // Handle Zod validation errors
  if (error instanceof ZodError) {
    const zodError = error as ZodError;
    const errorDetails = zodError.issues.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    return reply
      .status(400)
      .send(response.error("Validation failed", errorDetails));
  }

  // Handle specific Fastify validation errors (e.g. from schema)
  if (error.validation) {
    const errorDetails = error.validation.map((err) => ({
      field: err.instancePath.replace(/^\//, "") || err.keyword,
      message: err.message || "Invalid value",
    }));

    return reply
      .status(400)
      .send(response.error("Validation failed", errorDetails));
  }

  // Default Fastify or generic error handling
  const statusCode = error.statusCode || 500;
  const isServerErr = statusCode >= 500;

  const userMessage = isServerErr ? "An internal server error occurred" : error.message;

  return reply.status(statusCode).send(
    response.error(userMessage, [
      {
        code: error.code || CONSTANTS.ERROR_CODES.INTERNAL_SERVER_ERROR,
        message: isServerErr && process.env.NODE_ENV !== "development" ? undefined : error.message,
      },
    ])
  );
};
