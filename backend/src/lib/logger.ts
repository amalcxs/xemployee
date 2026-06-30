import pino from "pino";
import { env } from "../config/index.js";

export const logger = pino({
  level: env.NODE_ENV === "development" ? "debug" : "info",
  redact: {
    paths: ["req.headers.authorization", "password", "passwordHash", "token", "tokenHash"],
    censor: "[REDACTED]",
  },
});
