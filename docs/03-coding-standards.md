# AI Employee

# Coding Standards & Engineering Guidelines

## Document: 03-coding-standards.md

**Version:** 1.0

**Status:** Approved

---

# 1. Purpose

This document defines the engineering standards for the AI Employee platform.

Every developer, AI coding assistant, and automated code generation tool must follow these standards to ensure consistency, maintainability, scalability, and production readiness.

These rules are mandatory.

---

# 2. Core Engineering Principles

Every feature must follow these principles:

* Simplicity over complexity.
* Readable code over clever code.
* Composition over inheritance.
* Reusable components.
* Single Responsibility Principle.
* Separation of concerns.
* Feature-first architecture.
* Security by default.
* Performance by default.
* Type safety everywhere.

---

# 3. Language Standards

The entire project must use:

* TypeScript only.

JavaScript files are not permitted.

TypeScript must always use:

```json
{
  "strict": true
}
```

The `any` type is prohibited unless absolutely unavoidable.

Prefer:

* unknown
* generics
* proper interfaces
* discriminated unions

---

# 4. Naming Conventions

Variables

camelCase

Functions

camelCase

Components

PascalCase

Interfaces

PascalCase

Enums

PascalCase

Files

kebab-case

Folders

kebab-case

Constants

UPPER_SNAKE_CASE

Environment Variables

UPPER_SNAKE_CASE

Database tables

snake_case

Database columns

snake_case

---

# 5. Folder Organization

Every feature should have its own folder.

Never place unrelated code together.

Example:

```
authentication/

controllers/

services/

schemas/

types/

routes/

middleware/
```

Business logic must never exist inside route handlers.

---

# 6. Backend Architecture

The backend follows a layered architecture.

Request

↓

Route

↓

Controller

↓

Service

↓

Repository (Prisma)

↓

Database

Controllers should remain thin.

Services contain business logic.

Repositories interact with the database.

---

# 7. Frontend Architecture

Pages should remain lightweight.

Business logic belongs inside:

* hooks
* services
* stores

Reusable UI belongs inside components.

No page should exceed approximately 300 lines.

---

# 8. Component Guidelines

Components should:

* Be reusable.
* Accept typed props.
* Avoid business logic.
* Avoid direct API calls.
* Be composable.
* Be accessible.

---

# 9. API Design

REST API only for MVP.

Use plural resource names.

Examples:

```
/users

/workspaces

/customers

/products

/orders
```

Avoid action-based URLs.

Good

```
POST /orders
```

Bad

```
POST /create-order
```

---

# 10. API Response Format

Successful response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

Error response

```json
{
  "success": false,
  "message": "Invalid credentials",
  "errors": []
}
```

Every API must follow this structure.

---

# 11. Validation

Never trust frontend data.

Validate every request.

Frontend

↓

Zod

↓

Backend

↓

Zod

↓

Database

Validation occurs at multiple layers.

---

# 12. Error Handling

Every error must be handled.

Never expose stack traces.

Log internal errors.

Return user-friendly messages.

Example:

Good

```
Unable to process your request.
```

Bad

```
TypeError at line 57...
```

---

# 13. Authentication Rules

Passwords:

bcrypt hashing only.

JWT:

Short-lived Access Token.

Refresh Token.

Never store passwords.

Never expose tokens in logs.

Use secure HTTP-only cookies when possible.

---

# 14. Security Standards

Always:

Validate inputs.

Sanitize outputs.

Rate limit APIs.

Use HTTPS.

Use CORS correctly.

Store secrets in environment variables.

Encrypt sensitive data.

Never hardcode credentials.

---

# 15. Database Standards

Use Prisma only.

Never write raw SQL unless required.

Always:

Use transactions.

Use indexes.

Use foreign keys.

Soft delete where appropriate.

Never duplicate data unnecessarily.

---

# 16. Logging

Every important action should be logged.

Examples:

Authentication

Workspace creation

Payment

Order

AI request

Workflow execution

Error

Webhook

Logs must never contain:

Passwords

Tokens

API keys

Sensitive customer data

---

# 17. AI Coding Standards

AI responses must always:

Return structured output.

Use JSON schema where applicable.

Validate tool outputs.

Log AI latency.

Track token usage.

Store conversation summaries.

---

# 18. Workflow Standards

Business logic belongs in the backend.

n8n performs automation only.

AI performs reasoning only.

External systems perform specialized tasks.

Responsibilities must never overlap.

---

# 19. Performance Standards

Optimize for:

Low latency.

Minimal API calls.

Efficient database queries.

Caching.

Pagination.

Lazy loading.

Background jobs.

Avoid N+1 database queries.

---

# 20. Code Comments

Write comments only when explaining intent.

Avoid commenting obvious code.

Good comments explain "why", not "what".

---

# 21. Git Standards

Branch naming

```
feature/authentication

feature/workspace

feature/dashboard
```

Commit format

```
feat:

fix:

refactor:

docs:

test:

chore:
```

Every feature should have multiple small commits instead of one large commit.

---

# 22. Testing Standards

Every feature should include:

Unit tests.

Integration tests.

Manual testing checklist.

Critical APIs require automated tests.

---

# 23. Cursor AI Rules

Cursor must:

Never generate duplicate code.

Never ignore TypeScript errors.

Never disable linting.

Never bypass validation.

Never hardcode secrets.

Always generate reusable components.

Always prefer composition.

Always maintain folder structure.

Always generate production-ready code.

---

# 24. Documentation Standards

Every major feature must include:

Purpose.

Architecture.

API endpoints.

Database changes.

Environment variables.

Future improvements.

---

# 25. Engineering Philosophy

The project should always prioritize:

Maintainability over shortcuts.

Scalability over quick fixes.

Security over convenience.

Consistency over personal preference.

Readable code over clever code.

Every pull request, feature, and generated file should be reviewed against this document before being accepted into the codebase.
