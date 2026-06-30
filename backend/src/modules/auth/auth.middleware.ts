// Auth Module Middleware
// Placeholder - implementation pending

import type { FastifyRequest, FastifyReply } from "fastify";

/**
 * Middleware to verify the access token on protected routes.
 * Implementation pending.
 */
export const verifyAccessToken = async (
  _request: FastifyRequest,
  _reply: FastifyReply
): Promise<void> => {
  // TODO: Verify JWT access token
  // TODO: Attach decoded user to request
};

/**
 * Middleware to verify the refresh token.
 * Implementation pending.
 */
export const verifyRefreshToken = async (
  _request: FastifyRequest,
  _reply: FastifyReply
): Promise<void> => {
  // TODO: Verify refresh token from cookie or body
  // TODO: Check token is not revoked
};
