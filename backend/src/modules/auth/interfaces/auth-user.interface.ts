// AuthUser Interface
// Placeholder - implementation pending

/**
 * Represents the authenticated user attached to the request context.
 */
export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName?: string;
  status: string;
  emailVerified: boolean;
}
