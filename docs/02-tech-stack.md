# AI Employee

# Technology Stack

## Document: 02-tech-stack.md

**Version:** 1.0

**Status:** Approved

---

# 1. Purpose

This document defines the official technology stack for AI Employee.

The selected technologies prioritize:

* Long-term scalability
* Type safety
* Developer productivity
* Performance
* Security
* Cloud-native deployment
* Cost efficiency
* Enterprise readiness

Technology changes should only occur when there is a significant technical or business justification.

---

# 2. Frontend

The frontend is responsible for the SaaS user interface.

## Core Framework

* React 19
* TypeScript
* Vite

### Why?

* Fast development experience
* Excellent TypeScript support
* Large ecosystem
* Easy deployment
* High performance
* Excellent compatibility with modern libraries

---

## UI Framework

* Tailwind CSS
* Shadcn UI

### Why?

* Fully customizable
* No vendor lock-in
* Modern design system
* Accessible components
* Easy theming
* Lightweight compared to traditional UI libraries

---

## Routing

* React Router

### Why?

* Stable
* Mature
* Flexible nested routing
* Works well with Vite

---

## State Management

* Zustand

### Why?

* Minimal boilerplate
* Excellent TypeScript support
* Easy to maintain
* Suitable for medium and large applications

---

## Server State

* TanStack Query

### Why?

* API caching
* Automatic refetching
* Optimistic updates
* Retry support
* Loading and error state management

---

## Forms

* React Hook Form
* Zod

### Why?

* Excellent performance
* Strong validation
* Shared validation schemas with backend

---

## HTTP Client

* Axios

### Why?

* Request interceptors
* JWT handling
* Error handling
* File uploads
* Retry support

---

## Charts

* Recharts

### Why?

* Lightweight
* React-native API
* Responsive
* Ideal for analytics dashboards

---

## Icons

* Lucide React

### Why?

* Lightweight
* Consistent
* Tree-shakable

---

# 3. Backend

The backend contains all business logic.

## Runtime

* Node.js LTS

### Why?

* Mature ecosystem
* Excellent async performance
* Large package ecosystem

---

## Framework

* Fastify

### Why?

* High performance
* Schema validation
* Plugin architecture
* Low overhead
* Better throughput than Express

---

## Language

* TypeScript

### Why?

* Type safety
* Better maintainability
* Improved developer experience
* Shared types with frontend

---

## Validation

* Zod

### Why?

* Runtime validation
* Shared schemas
* Type inference

---

## ORM

* Prisma

### Why?

* Excellent developer experience
* Database migrations
* Type-safe queries
* Strong PostgreSQL support

---

## API Documentation

* OpenAPI (Swagger)

### Why?

* Interactive documentation
* Easier frontend integration
* Third-party developer support

---

# 4. Database

## Primary Database

* PostgreSQL

### Why?

* ACID compliant
* Excellent relational support
* JSON columns
* Full-text search
* Strong indexing
* pgvector support
* Reliable for SaaS applications

---

## ORM

* Prisma

---

## Cache & Queue

* Redis

### Why?

* Fast in-memory caching
* Session storage
* Background queues
* Rate limiting
* Temporary data

---

## Vector Search

* pgvector

### Why?

* Native PostgreSQL extension
* Lower operational cost
* No additional vector database required
* Excellent semantic search performance

---

# 5. AI Layer

## AI Provider

* OpenAI

### Models

* GPT-5
* GPT-5 Mini
* GPT-5 Nano (future lightweight tasks)

### Features Used

* Responses API
* Tool Calling
* Structured Outputs
* Vision
* Audio Understanding
* Embeddings

### Why?

* Best developer ecosystem
* Reliable APIs
* Strong reasoning
* Multimodal capabilities

---

# 6. Automation

## Workflow Engine

* n8n

### Responsibilities

* Workflow orchestration
* Third-party integrations
* Scheduled jobs
* Webhooks
* Background automations

### Important Rule

Business logic must never live inside n8n.

Business logic belongs in the backend.

---

# 7. Storage

## Object Storage

* Cloudflare R2

### Stores

* Images
* Videos
* Audio
* PDFs
* Documents
* Product catalogs

### Why?

* S3 compatible
* No egress fees
* Lower storage cost
* High durability

---

# 8. Authentication

Authentication uses:

* JWT Access Tokens
* Refresh Tokens
* Google OAuth
* Email & Password

Future support:

* Microsoft OAuth
* GitHub OAuth
* Magic Links

---

# 9. Search

Search capabilities include:

* PostgreSQL Full Text Search
* pgvector Semantic Search
* Hybrid Search
* Metadata Filtering

---

# 10. File Processing

Supported file types:

* PDF
* DOCX
* XLSX
* CSV
* Images
* Audio
* Video
* PowerPoint

Future capabilities:

* OCR
* Automatic document chunking
* AI metadata extraction

---

# 11. External Integrations

The platform should support:

Communication

* WhatsApp Business
* Telegram
* Instagram
* Facebook Messenger
* Website Chat
* Email

Commerce

* Shopify
* WooCommerce

CRM

* HubSpot
* Zoho
* Salesforce

Payments

* Stripe
* Razorpay

Scheduling

* Google Calendar

Storage

* Google Drive
* Dropbox

Documentation

* Notion
* Confluence

Shipping

* Shiprocket
* Delhivery
* FedEx
* DHL

---

# 12. Observability

Logging

* Pino

Monitoring

* OpenTelemetry (future)

Error Tracking

* Sentry (future)

Metrics

* Prometheus (future)

Dashboards

* Grafana (future)

---

# 13. Development Tools

Code Editor

* Cursor

Version Control

* Git

Package Manager

* pnpm

Monorepo

* Turborepo (planned)

Formatting

* Prettier

Linting

* ESLint

Git Hooks

* Husky

Commit Standards

* Conventional Commits

---

# 14. Testing

Frontend

* Vitest
* React Testing Library

Backend

* Vitest

API

* Supertest

End-to-End

* Playwright

---

# 15. Deployment

Frontend

* Vercel

Backend

* Railway

Database

* PostgreSQL (Supabase or Railway)

Redis

* Upstash Redis

Object Storage

* Cloudflare R2

Workflow Engine

* Self-hosted n8n

Domain

* Cloudflare DNS

SSL

* Cloudflare

---

# 16. Guiding Principles

The technology stack follows these principles:

* TypeScript everywhere.
* API-first architecture.
* Modular services.
* Multi-tenant from day one.
* Cloud-native deployment.
* Secure by default.
* Horizontal scalability.
* Replaceable integrations.
* Open standards.
* Developer-friendly tooling.

---

# 17. Technology Rules

The following decisions are considered project standards:

* React is the only frontend framework.
* Fastify is the only backend framework.
* PostgreSQL is the only primary database.
* Prisma is the only ORM.
* Redis is the only caching layer.
* OpenAI powers AI capabilities.
* n8n handles workflow automation.
* Cloudflare R2 stores files.
* All code is written in TypeScript.
* All APIs use REST in the MVP (GraphQL may be evaluated later).
* Every new technology introduced must provide a clear architectural or business advantage before adoption.
