// Auth Module Types
// Placeholder - implementation pending

export type AuthTokenPair = {
  accessToken: string;
  refreshToken: string;
};

export type AuthContext = {
  userId: string;
  workspaceId?: string;
};
