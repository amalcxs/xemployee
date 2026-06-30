// Auth Response Interface
// Placeholder - implementation pending

import type { AuthUser } from "./auth-user.interface.js";

/**
 * The response shape returned after successful login or token refresh.
 */
export interface AuthResponse {
  user: AuthUser;
  accessToken: string;
  expiresIn: number; // seconds
}

/**
 * The response shape returned after successful registration.
 */
export interface RegisterResponse {
  user: AuthUser;
  message: string;
}
