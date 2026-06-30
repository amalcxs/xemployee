// JWT Payload Interface
// Placeholder - implementation pending

/**
 * The payload encoded inside a JWT access token.
 */
export interface JwtPayload {
  sub: string;       // User ID
  email: string;
  iat?: number;      // Issued at
  exp?: number;      // Expiry
}
