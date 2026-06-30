// Auth Module Schema (Fastify route schemas)
// Placeholder - implementation pending

export const registerSchema = {
  tags: ["Auth"],
  summary: "Register a new user",
  body: {},
  response: {},
};

export const loginSchema = {
  tags: ["Auth"],
  summary: "Login with email and password",
  body: {},
  response: {},
};

export const refreshTokenSchema = {
  tags: ["Auth"],
  summary: "Refresh access token",
  body: {},
  response: {},
};

export const forgotPasswordSchema = {
  tags: ["Auth"],
  summary: "Request a password reset email",
  body: {},
  response: {},
};

export const resetPasswordSchema = {
  tags: ["Auth"],
  summary: "Reset password using token",
  body: {},
  response: {},
};

export const logoutSchema = {
  tags: ["Auth"],
  summary: "Logout and revoke refresh token",
  response: {},
};

export const meSchema = {
  tags: ["Auth"],
  summary: "Get current authenticated user",
  response: {},
};
