export const CONSTANTS = {
  API_PREFIX: "/api",
  COOKIE_NAME: "refresh_token",
  JWT: {
    ACCESS_TOKEN_EXPIRE: "15m", // 15 minutes
    REFRESH_TOKEN_EXPIRE: "7d", // 7 days
    REFRESH_TOKEN_COOKIE_EXPIRE: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  },
  ERROR_CODES: {
    BAD_REQUEST: "BAD_REQUEST",
    UNAUTHORIZED: "UNAUTHORIZED",
    FORBIDDEN: "FORBIDDEN",
    NOT_FOUND: "NOT_FOUND",
    CONFLICT: "CONFLICT",
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  },
} as const;
