# AI Employee

# Folder Structure

## Document: 04-folder-structure.md

**Version:** 1.0

**Status:** Approved

---

# 1. Purpose

This document defines the official folder and project structure for AI Employee.

The objectives are:

* Maintainability
* Scalability
* Modular development
* Feature isolation
* Easy onboarding
* Production readiness

Every new feature must follow this structure.

---

# 2. Monorepo Structure

```text
ai-employee/

├── frontend/
├── backend/
├── shared/
├── n8n/
├── docker/
├── docs/
├── scripts/
├── .github/
├── .vscode/
├── .env.example
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

---

# 3. Frontend Structure

```text
frontend/

├── public/
│
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── forms/
│   │   └── ui/
│   │
│   ├── features/
│   │   ├── authentication/
│   │   ├── workspace/
│   │   ├── dashboard/
│   │   ├── settings/
│   │   ├── team/
│   │   ├── profile/
│   │   ├── billing/
│   │   ├── ai/
│   │   ├── conversations/
│   │   ├── customers/
│   │   ├── products/
│   │   ├── orders/
│   │   ├── appointments/
│   │   ├── analytics/
│   │   ├── integrations/
│   │   └── knowledge/
│   │
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── store/
│   ├── routes/
│   ├── layouts/
│   ├── contexts/
│   ├── types/
│   ├── utils/
│   ├── constants/
│   ├── styles/
│   ├── config/
│   ├── providers/
│   ├── App.tsx
│   └── main.tsx
│
├── tests/
├── vite.config.ts
└── tsconfig.json
```

---

# 4. Feature Structure (Frontend)

Every feature follows the same pattern.

Example:

```text
features/

authentication/

├── api/
├── components/
├── hooks/
├── pages/
├── schemas/
├── services/
├── store/
├── types/
├── utils/
└── index.ts
```

This keeps every feature self-contained.

---

# 5. Backend Structure

```text
backend/

├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── src/
│
│   ├── app/
│   ├── config/
│   ├── plugins/
│   ├── middleware/
│   ├── utils/
│   ├── constants/
│   ├── types/
│   ├── database/
│   ├── services/
│   ├── jobs/
│   ├── queues/
│   ├── events/
│   ├── websocket/
│   │
│   ├── modules/
│   │
│   │   ├── authentication/
│   │   ├── users/
│   │   ├── workspace/
│   │   ├── team/
│   │   ├── customers/
│   │   ├── conversations/
│   │   ├── messages/
│   │   ├── ai/
│   │   ├── knowledge/
│   │   ├── products/
│   │   ├── inventory/
│   │   ├── orders/
│   │   ├── payments/
│   │   ├── appointments/
│   │   ├── billing/
│   │   ├── integrations/
│   │   ├── analytics/
│   │   ├── notifications/
│   │   ├── workflows/
│   │   └── audit/
│   │
│   ├── server.ts
│   └── app.ts
│
├── tests/
└── tsconfig.json
```

---

# 6. Backend Module Structure

Every module follows exactly the same layout.

```text
authentication/

├── controller.ts
├── service.ts
├── repository.ts
├── routes.ts
├── schema.ts
├── dto.ts
├── types.ts
├── constants.ts
├── middleware.ts
├── utils.ts
└── index.ts
```

Rules:

* Controllers handle HTTP requests.
* Services contain business logic.
* Repositories access the database.
* Schemas contain Zod validation.
* DTOs define request and response models.

---

# 7. Shared Package

```text
shared/

├── types/
├── schemas/
├── constants/
├── enums/
├── interfaces/
├── utils/
└── package.json
```

Shared code is used by both frontend and backend.

Examples:

* API types
* Zod schemas
* Enums
* Constants

---

# 8. n8n Structure

```text
n8n/

├── workflows/
├── credentials/
├── templates/
├── backups/
└── README.md
```

Each workflow belongs in its own JSON file with clear naming.

Example:

```text
whatsapp-customer-support.json
order-management.json
payment-reminders.json
appointment-booking.json
```

---

# 9. Documentation Structure

```text
docs/

00-product-vision.md
01-system-architecture.md
02-tech-stack.md
03-coding-standards.md
04-folder-structure.md
05-database-design.md
06-api-design.md
07-design-system.md
08-security-architecture.md

phase-01/
phase-02/
phase-03/
phase-04/
```

Each sprint gets its own documentation folder.

---

# 10. Scripts

```text
scripts/

seed.ts
backup.ts
cleanup.ts
migration.ts
generate-types.ts
```

Scripts should never contain business logic.

---

# 11. Docker

```text
docker/

frontend/
backend/
postgres/
redis/
n8n/
```

Every service has its own Docker configuration.

---

# 12. GitHub

```text
.github/

workflows/
ISSUE_TEMPLATE/
PULL_REQUEST_TEMPLATE.md
CODEOWNERS
```

GitHub Actions handle:

* Linting
* Testing
* Build
* Deployment

---

# 13. Naming Conventions

Folders:

* kebab-case

Files:

* kebab-case (except React components)

React Components:

* PascalCase.tsx

Variables:

* camelCase

Constants:

* UPPER_SNAKE_CASE

Interfaces:

* PascalCase

Enums:

* PascalCase

---

# 14. Import Order

Imports should always follow this order:

1. Node modules
2. External packages
3. Shared package
4. Internal modules
5. Components
6. Types
7. Styles

Never use circular imports.

---

# 15. File Size Guidelines

To keep the codebase maintainable:

* Component: < 250 lines
* Page: < 300 lines
* Controller: < 150 lines
* Service: < 300 lines
* Repository: < 200 lines

If a file grows beyond these limits, refactor it.

---

# 16. Feature Isolation

Every feature should be independently maintainable.

Authentication must not depend directly on Orders.

Orders must not depend directly on Billing.

Modules communicate through services or well-defined interfaces.

Avoid tightly coupled code.

---

# 17. Future Scalability

This structure supports:

* Large engineering teams
* Multiple AI agents
* Plugin architecture
* White-label deployments
* Enterprise features
* Microservice extraction in the future without major restructuring

The project begins as a modular monolith, allowing rapid development while remaining ready for future decomposition into microservices if business requirements demand it.
