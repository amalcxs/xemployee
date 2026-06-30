// Auth Module Plugin (Fastify Plugin)
// Placeholder - no plugin logic implemented

import type { FastifyInstance } from "fastify";

/**
 * Fastify plugin that encapsulates the auth module.
 * Registers routes, hooks, and decorators scoped to auth.
 * Implementation pending.
 */
export const authPlugin = async (_fastify: FastifyInstance): Promise<void> => {
  // TODO: Register auth-scoped decorators
  // TODO: Register auth routes with prefix
};

// Allow the plugin to be accessed across the Fastify scope boundary
// @ts-ignore
authPlugin[Symbol.for("skip-override")] = true;

export default authPlugin;
