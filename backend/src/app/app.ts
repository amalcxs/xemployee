import fastify from "fastify";
import { logger } from "../lib/logger.js";
import { registerPlugins } from "../plugins/index.js";
import { errorHandler } from "../middleware/error-handler.js";
import { notFoundHandler } from "../middleware/not-found.js";
import { registerRoutes } from "./routes.js";

export const buildApp = async () => {
  const app = fastify({
    loggerInstance: logger as any,
    disableRequestLogging: true,
  });

  // Register global plugins (CORS, Cookie, JWT decorators)
  await registerPlugins(app);

  // Set global error and 404 handlers
  app.setErrorHandler(errorHandler);
  app.setNotFoundHandler(notFoundHandler);

  // Register routes
  await app.register(registerRoutes);

  return app;
};

export default buildApp;
