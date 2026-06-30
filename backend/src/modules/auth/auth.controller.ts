// Auth Module Controller
// Placeholder - no request handling implemented

import type { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "./auth.service.js";

const authService = new AuthService();

/**
 * AuthController handles HTTP request/response for the auth module.
 * Controllers remain thin - all business logic belongs in AuthService.
 * Implementation pending.
 */
export class AuthController {
  private readonly service: AuthService;

  constructor(service: AuthService = authService) {
    this.service = service;
  }

  /**
   * POST /auth/register
   * Implementation pending.
   */
  async register(_request: FastifyRequest, _reply: FastifyReply): Promise<void> {
    // TODO: Validate body → call service.register → return response
  }

  /**
   * POST /auth/login
   * Implementation pending.
   */
  async login(_request: FastifyRequest, _reply: FastifyReply): Promise<void> {
    // TODO: Validate body → call service.login → set cookie → return response
  }

  /**
   * POST /auth/refresh-token
   * Implementation pending.
   */
  async refreshToken(_request: FastifyRequest, _reply: FastifyReply): Promise<void> {
    // TODO: Read token from cookie/body → call service.refreshToken → return response
  }

  /**
   * POST /auth/logout
   * Implementation pending.
   */
  async logout(_request: FastifyRequest, _reply: FastifyReply): Promise<void> {
    // TODO: Read token → call service.logout → clear cookie → return response
  }

  /**
   * POST /auth/forgot-password
   * Implementation pending.
   */
  async forgotPassword(_request: FastifyRequest, _reply: FastifyReply): Promise<void> {
    // TODO: Validate body → call service.forgotPassword → return response
  }

  /**
   * POST /auth/reset-password
   * Implementation pending.
   */
  async resetPassword(_request: FastifyRequest, _reply: FastifyReply): Promise<void> {
    // TODO: Validate body → call service.resetPassword → return response
  }

  /**
   * GET /auth/me
   * Implementation pending.
   */
  async getMe(_request: FastifyRequest, _reply: FastifyReply): Promise<void> {
    // TODO: Verify token → call service.getMe → return response
  }
}
