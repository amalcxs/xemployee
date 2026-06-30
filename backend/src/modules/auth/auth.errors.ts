// Auth Module Errors
// Placeholder - implementation pending

export class AuthError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly statusCode: number = 401
  ) {
    super(message);
    this.name = "AuthError";
  }
}

export class InvalidCredentialsError extends AuthError {
  constructor() {
    super("INVALID_CREDENTIALS", "Invalid email or password", 401);
  }
}

export class TokenExpiredError extends AuthError {
  constructor() {
    super("TOKEN_EXPIRED", "Token has expired", 401);
  }
}

export class TokenInvalidError extends AuthError {
  constructor() {
    super("TOKEN_INVALID", "Token is invalid", 401);
  }
}

export class EmailAlreadyExistsError extends AuthError {
  constructor() {
    super("EMAIL_ALREADY_EXISTS", "An account with this email already exists", 409);
  }
}

export class UserNotFoundError extends AuthError {
  constructor() {
    super("USER_NOT_FOUND", "User not found", 404);
  }
}

export class AccountInactiveError extends AuthError {
  constructor() {
    super("ACCOUNT_INACTIVE", "Account is inactive or suspended", 403);
  }
}

export class EmailNotVerifiedError extends AuthError {
  constructor() {
    super("EMAIL_NOT_VERIFIED", "Email address has not been verified", 403);
  }
}
