# AI Employee

# Database Design

## Document: 05-database-design.md

**Version:** 1.0

**Status:** Approved

---

# 1. Purpose

This document defines the complete database architecture for AI Employee.

The database is designed to support:

* Multi-tenancy
* AI conversations
* Knowledge base
* Commerce
* CRM
* Payments
* Appointments
* Analytics
* Billing
* Integrations
* Workflow automation

Although only a subset of tables will be implemented during the MVP, the schema is designed for long-term scalability to avoid major redesigns.

---

# 2. Database Technology

Primary Database

* PostgreSQL

ORM

* Prisma

Cache

* Redis

Vector Search

* pgvector

File Storage

* Cloudflare R2

---

# 3. Database Design Principles

* Every record belongs to a workspace unless it is a global system entity.
* UUID is used as the primary key for every table.
* Foreign keys enforce referential integrity.
* `created_at` and `updated_at` exist on all business tables.
* Soft deletes are used where recovery is required.
* Sensitive data is encrypted.
* Audit logs are immutable.
* Multi-tenant isolation is enforced at the application layer and database queries.

---

# 4. Core Entities

## Authentication Module

### users

Stores platform users.

Fields

* id
* name
* email
* password_hash
* avatar_url
* email_verified
* is_active
* last_login_at
* created_at
* updated_at

---

### refresh_tokens

Stores active refresh tokens.

Fields

* id
* user_id
* token
* expires_at
* revoked_at
* created_at

---

### oauth_accounts

Stores OAuth providers.

Fields

* id
* user_id
* provider
* provider_user_id
* access_token
* refresh_token
* expires_at

---

### password_resets

Stores password reset requests.

---

### email_verifications

Stores email verification tokens.

---

# 5. Workspace Module

### workspaces

Stores each business account.

Fields

* id
* name
* slug
* logo_url
* industry
* timezone
* currency
* owner_id
* created_at
* updated_at

---

### workspace_members

Stores users belonging to workspaces.

Fields

* id
* workspace_id
* user_id
* role
* invited_by
* joined_at

---

### roles

Custom workspace roles.

Examples

* Owner
* Admin
* Sales
* Support
* Viewer

---

### permissions

System permissions.

Examples

* Manage Products
* Manage Billing
* View Analytics
* Manage Users

---

### role_permissions

Maps permissions to roles.

---

# 6. Business Profile

### business_profiles

Stores company information.

* GST
* Tax Number
* Phone
* Email
* Website
* Social Links
* Company Description

---

### business_locations

Multiple branches.

---

### business_hours

Working hours.

---

### holidays

Business holidays.

---

# 7. Customers

### customers

Stores customer information.

Fields

* id
* workspace_id
* name
* phone
* email
* preferred_language
* status
* created_at

---

### customer_addresses

Stores multiple addresses.

---

### customer_tags

Customer segmentation.

Examples

* VIP
* Wholesale
* Retail
* Lead

---

### customer_notes

Internal notes.

---

### customer_preferences

Stores preferences.

Examples

* Preferred language
* Preferred payment method
* Preferred communication channel

---

# 8. Conversation System

### conversations

Stores each conversation.

Fields

* id
* workspace_id
* customer_id
* channel
* status
* assigned_agent
* started_at
* closed_at

---

### messages

Stores every message.

Supports:

* Text
* Image
* Audio
* Video
* Document
* Interactive replies

---

### message_attachments

Stores uploaded files.

---

### conversation_events

System events.

Examples

* AI responded
* Human joined
* Payment completed
* Appointment booked

---

### conversation_labels

Conversation tags.

---

### conversation_summaries

AI-generated summaries.

---

# 9. AI Module

### ai_agents

AI employee configuration.

---

### ai_settings

Prompt settings.

Language.

Tone.

Creativity.

Escalation rules.

---

### ai_memory

Long-term memory.

---

### prompt_templates

Reusable prompts.

---

### tool_execution_logs

Stores every AI tool call.

---

# 10. Knowledge Base

### knowledge_sources

Examples

* Website
* PDF
* Google Drive
* Notion

---

### documents

Uploaded files.

---

### document_chunks

Chunks created during ingestion.

---

### embeddings

Vector embeddings.

Stored using pgvector.

---

### faqs

Frequently asked questions.

---

# 11. Communication Channels

### whatsapp_accounts

---

### telegram_accounts

---

### instagram_accounts

---

### messenger_accounts

---

### webchat_widgets

---

# 12. Commerce

### categories

---

### products

Fields

* id
* workspace_id
* sku
* name
* description
* price
* stock
* images
* status

---

### product_variants

---

### inventory

---

### inventory_transactions

---

### orders

Fields

* id
* customer_id
* order_number
* status
* total
* payment_status

---

### order_items

---

### shipments

---

### shipment_tracking

---

### invoices

---

### invoice_items

---

### payments

---

### refunds

---

### return_requests

---

### coupons

---

# 13. Appointment Module

### appointments

---

### appointment_slots

---

### calendar_integrations

---

# 14. CRM

### crm_contacts

---

### crm_sync_logs

---

# 15. Workflow Engine

### workflows

Stores automation definitions.

---

### workflow_runs

Execution history.

---

### webhook_logs

Incoming and outgoing webhooks.

---

### scheduled_jobs

Scheduled automation tasks.

---

# 16. Integrations

### integrations

Connected applications.

Examples

* Shopify
* WooCommerce
* Stripe
* Razorpay
* Google Calendar
* HubSpot

---

### integration_tokens

Encrypted credentials.

---

### api_keys

Workspace API keys.

---

# 17. Billing

### plans

Subscription plans.

---

### subscriptions

Workspace subscriptions.

---

### invoices_billing

Billing invoices.

---

### transactions

Payment transactions.

---

### usage_records

Feature usage.

---

# 18. Notifications

### notifications

---

### notification_templates

---

### notification_logs

---

# 19. Analytics

### analytics_events

Stores all user and AI events.

---

### ai_metrics

AI response metrics.

Examples

* Tokens
* Latency
* Cost
* Success Rate

---

### usage_metrics

Workspace usage.

---

# 20. Audit & Security

### audit_logs

Immutable audit history.

---

### activity_logs

User activity.

---

### feature_flags

Future feature rollout.

---

### system_settings

Global settings.

---

# 21. Relationships

User

↓

Workspace

↓

Workspace Members

↓

Business Profile

↓

Customers

↓

Conversations

↓

Messages

↓

AI Memory

↓

Orders

↓

Payments

↓

Analytics

Every business entity references a workspace to ensure strict tenant isolation.

---

# 22. Phase 1 Tables

Only the following tables will be implemented initially:

* users
* refresh_tokens
* workspaces
* workspace_members

These are sufficient to support authentication and workspace management.

---

# 23. Phase 2 Tables

Business setup and communication:

* business_profiles
* business_locations
* business_hours
* customers
* conversations
* messages
* whatsapp_accounts
* knowledge_sources
* documents
* document_chunks
* embeddings

---

# 24. Phase 3 Tables

AI and commerce:

* ai_agents
* ai_settings
* ai_memory
* products
* categories
* inventory
* orders
* payments
* appointments
* integrations

---

# 25. Phase 4 Tables

Enterprise capabilities:

* subscriptions
* invoices_billing
* analytics_events
* usage_metrics
* audit_logs
* workflow_runs
* webhook_logs
* feature_flags

---

# 26. Database Standards

* UUID primary keys for all tables.
* Foreign key constraints enabled.
* Index frequently queried columns.
* Soft delete where appropriate.
* Encrypt secrets and tokens.
* Store timestamps in UTC.
* Use transactions for multi-step operations.
* Avoid duplicate data.
* Normalize core business entities while allowing JSON columns for flexible metadata when appropriate.

---

# 27. Long-Term Scalability

The schema is designed to support:

* Millions of conversations.
* Thousands of workspaces.
* Multiple AI employees per workspace.
* Multi-channel communication.
* Horizontal scaling.
* Future microservice extraction if needed.

The database design should remain backward compatible as new modules are introduced, minimizing disruptive schema changes.
