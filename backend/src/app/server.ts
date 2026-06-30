import { buildApp } from "./app.js";
import { env } from "../config/index.js";
import { logger } from "../lib/logger.js";

export const startServer = async () => {
  try {
    const app = await buildApp();
    await app.listen({ port: env.PORT, host: env.HOST });
    logger.info(`🚀 AI Employee Backend listening on http://${env.HOST}:${env.PORT}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};
