# Roo Commander: Skill Routing

> Keyword-based skill discovery and multi-skill coordination patterns

---

## Workflow Commands vs Skills (CRITICAL)

**Before routing to skills, check if request is lifecycle-related.**

### The Distinction

**Workflow Commands** (meta-level orchestration):
- `/explore-idea`, `/plan-project`, `/plan-feature`, `/wrap-session`, `/continue-session`, `/release`, `/workflow`
- Manage project lifecycle stages
- NOT in skills index (they're not technical patterns)
- Handle BEFORE delegating to Code mode

**Skills** (technical implementation patterns):
- `cloudflare-d1`, `clerk-auth`, `tailwind-v4-shadcn`, etc.
- Technical configurations and code patterns
- IN skills index
- Loaded BY Code mode during delegation

### Decision Flow

```
User Request
    ↓
Is this lifecycle-related? → Check 03-workflow-orchestration.md
    ├─ YES: Suggest workflow command, don't delegate yet
    └─ NO: Continue to skill routing below
         ↓
Is this feature implementation? → Continue to Keyword Matching
```

**Examples:**

| User Request | Type | Action |
|--------------|------|--------|
| "I want to build a chat app" | Lifecycle | Suggest `/explore-idea` or `/plan-project` |
| "Add Cloudflare D1 database" | Implementation | Search skills → delegate with `cloudflare-d1` skill |
| "Save my progress" | Lifecycle | Suggest `/wrap-session` |
| "Set up Clerk authentication" | Implementation | Search skills → delegate with `clerk-auth` skill |

**See 03-workflow-orchestration.md for full lifecycle recognition patterns.**

---

## Routing Philosophy

**Goal**: Automatically identify relevant skills from user requests by matching keywords and patterns.

**Principle**: Skills index (`.roo/rules/01-skills-index.md`) is your source of truth. Always read it before delegating implementation work.

**Efficiency**: Skills are organized by category with keyword lists. Match user keywords → index keywords → relevant skills.

---

## Keyword Matching Algorithm

### Step-by-Step Process

**1. Extract keywords from user request**

Identify:
- **Technology names**: Cloudflare, OpenAI, Clerk, Tailwind, React, Next.js
- **Service types**: database, authentication, storage, ai, chat, scraping
- **Patterns**: forms, validation, routing, middleware, streaming
- **Actions**: setup, configure, implement, integrate, deploy

**2. Read skills index**

```
Read: .roo/rules/01-skills-index.md
Parse: Skills categorized by domain
Extract: Skill name, description, keywords for each skill
```

**3. Match keywords**

For each skill in index:
- Check if user keyword matches skill name (exact or partial)
- Check if user keyword appears in skill keywords list
- Check if user keyword appears in skill description

**4. Score matches**

Scoring priority:
- **High**: Exact match in skill name or keywords list
- **Medium**: Partial match in skill name
- **Low**: Match in description only

**5. Return top matches**

- 1 skill → Proceed with that skill
- 2-3 skills → Use all relevant skills
- 4+ skills → Ask user which to prioritize
- 0 skills → Proceed without skill

---

## Routing Tables

Pre-defined mappings for common requests.

### Authentication & User Management

**User keywords** → **Skills**

| User says | Skill(s) |
|-----------|----------|
| "authentication", "auth", "login", "sign up" | clerk-auth, better-auth |
| "clerk" | clerk-auth |
| "better auth" | better-auth |
| "user management", "user accounts" | clerk-auth, better-auth |
| "JWT", "token validation" | clerk-auth, cloudflare-zero-trust-access |
| "session", "session storage" | better-auth + cloudflare-d1 |

**Selection logic**:
- "clerk" → clerk-auth (specific tool mentioned)
- "auth" + no preference → present both options
- "auth" + "cloudflare" → better-auth (Cloudflare integration)

### Cloudflare Services

**User keywords** → **Skills**

| User says | Skill(s) |
|-----------|----------|
| "cloudflare workers", "workers" | cloudflare-worker-base |
| "d1", "d1 database", "sqlite workers" | cloudflare-d1, drizzle-orm-d1 |
| "r2", "object storage", "s3 compatible" | cloudflare-r2 |
| "kv", "key-value storage" | cloudflare-kv |
| "durable objects" | cloudflare-durable-objects |
| "workers ai", "ai binding" | cloudflare-workers-ai |
| "vectorize", "vector database" | cloudflare-vectorize |
| "queues", "message queue" | cloudflare-queues |
| "workflows", "durable execution" | cloudflare-workflows |
| "cron", "scheduled workers" | cloudflare-cron-triggers |
| "browser rendering", "puppeteer", "playwright" | cloudflare-browser-rendering |
| "turnstile", "captcha" | cloudflare-turnstile |
| "email", "send email", "receive email" | cloudflare-email-routing |

**Multi-skill patterns**:
- "d1 database" → cloudflare-d1 + drizzle-orm-d1 (database + ORM)
- "workers + auth" → cloudflare-worker-base + clerk-auth
- "workers + ai" → cloudflare-worker-base + cloudflare-workers-ai

### AI & LLM Integration

**User keywords** → **Skills**

| User says | Skill(s) |
|-----------|----------|
| "openai", "gpt", "chat completions" | openai-api |
| "openai assistants", "assistants api" | openai-assistants |
| "openai responses" | openai-responses |
| "openai agents" | openai-agents |
| "claude", "anthropic", "claude api" | claude-api |
| "claude agents" | claude-agent-sdk |
| "gemini", "google ai" | google-gemini-api |
| "gemini embeddings" | google-gemini-embeddings |
| "vercel ai sdk", "ai sdk" | ai-sdk-core, ai-sdk-ui |
| "chat interface", "chat ui" | ai-sdk-ui, better-chatbot |
| "streaming ui", "ai streaming" | ai-sdk-ui |
| "elevenlabs", "voice agents" | elevenlabs-agents |

**Selection logic**:
- "openai" → check context for "chat" vs "assistants" vs "agents"
- "chat interface" → ai-sdk-ui (if React) or better-chatbot (if complex patterns)
- "ai sdk" + "backend" → ai-sdk-core
- "ai sdk" + "frontend" → ai-sdk-ui

### Frontend & UI

**User keywords** → **Skills**

| User says | Skill(s) |
|-----------|----------|
| "tailwind v4", "tailwind 4" | tailwind-v4-shadcn |
| "shadcn/ui", "shadcn" | tailwind-v4-shadcn |
| "react", "react app" | (check if Cloudflare → cloudflare-worker-base) |
| "next.js", "nextjs" | nextjs, cloudflare-nextjs |
| "forms", "form validation" | react-hook-form-zod |
| "react hook form", "zod" | react-hook-form-zod |
| "tanstack query", "react query" | tanstack-query |
| "tanstack router" | tanstack-router |
| "tanstack table", "data table" | tanstack-table |
| "zustand", "state management" | zustand-state-management |
| "hono", "hono routing" | hono-routing |
| "base ui", "unstyled components" | base-ui-react |
| "auto animate", "animations" | auto-animate |

**Selection logic**:
- "tailwind" → Always suggest tailwind-v4-shadcn (v4 has breaking changes)
- "forms" → react-hook-form-zod (most common pattern)
- "next.js" + "cloudflare" → cloudflare-nextjs

### Data & Backend

**User keywords** → **Skills**

| User says | Skill(s) |
|-----------|----------|
| "drizzle orm", "drizzle" | drizzle-orm-d1 |
| "database schema", "sql schema" | cloudflare-d1, drizzle-orm-d1 |
| "web scraping", "scrape website" | firecrawl-scraper |
| "firecrawl" | firecrawl-scraper |
| "wordpress plugin" | wordpress-plugin-core |

### Content Management

**User keywords** → **Skills**

| User says | Skill(s) |
|-----------|----------|
| "cms", "content management" | tinacms, sveltia-cms |
| "tinacms", "tina cms" | tinacms |
| "sveltia", "sveltia cms" | sveltia-cms |
| "git-backed cms" | tinacms, sveltia-cms |
| "content collections" | content-collections |

**Selection logic**:
- "cms" + no preference → Ask: "TinaCMS (feature-rich) or Sveltia CMS (lightweight)?"

### Project Setup

**User keywords** → **Skills**

| User says | Skill(s) |
|-----------|----------|
| "new project", "scaffold", "setup" | project-planning |
| "project planning", "planning docs" | project-planning |
| "full stack", "cloudflare full stack" | cloudflare-full-stack-scaffold |

---

## Multi-Skill Coordination

Some requests require multiple skills working together.

### Pattern 1: Database + ORM

**User request**: "Set up D1 database with Drizzle ORM"

**Skills needed**:
1. cloudflare-d1 (database setup)
2. drizzle-orm-d1 (ORM integration)

**Coordination strategy**: Single delegation with both skills

```
Task: Set up Cloudflare D1 database with Drizzle ORM

Skills to use:
- Run: `roocommander read "Cloudflare D1 Database"`
- Run: `roocommander read "drizzle-orm-d1"`

[rest of delegation message]
```

### Pattern 2: Auth + Database

**User request**: "Add authentication with Clerk, store sessions in D1"

**Skills needed**:
1. clerk-auth (authentication)
2. cloudflare-d1 (database for sessions)

**Coordination strategy**: Sequential or combined

**Option A - Combined** (faster):
```
Task: Implement Clerk auth with D1 session storage

Skills to use:
- Run: `roocommander read "clerk-auth"`
- Run: `roocommander read "Cloudflare D1 Database"`

[complete implementation]
```

**Option B - Sequential** (if complex):
1. First: Set up D1 database schema
2. Then: Implement Clerk auth with session storage

### Pattern 3: Frontend + Backend + AI

**User request**: "Build chat interface with OpenAI, save to D1"

**Skills needed**:
1. ai-sdk-ui (chat interface)
2. openai-api (OpenAI integration)
3. cloudflare-d1 (database storage)

**Coordination strategy**: Single comprehensive delegation

```
Task: Build chat interface with OpenAI and conversation persistence

Skills to use:
- Run: `roocommander read "ai-sdk-ui"`
- Run: `roocommander read "openai-api"`
- Run: `roocommander read "Cloudflare D1 Database"`

[complete implementation covering all three]
```

### Pattern 4: Scaffold + Services

**User request**: "New Cloudflare project with D1, auth, and Tailwind"

**Skills needed**:
1. cloudflare-worker-base (scaffold)
2. cloudflare-d1 (database)
3. clerk-auth (authentication)
4. tailwind-v4-shadcn (styling)

**Coordination strategy**: Break into phases, delegate sequentially

**Phase 1**: Scaffold + Tailwind
```
Task: Scaffold Cloudflare Workers project with Tailwind v4

Skills to use:
- Run: `roocommander read "cloudflare-worker-base"`
- Run: `roocommander read "Tailwind v4 + shadcn/ui Stack"`

[scaffold project]
```

**Phase 2**: Database + Auth
```
Task: Add D1 database and Clerk authentication

Skills to use:
- Run: `roocommander read "Cloudflare D1 Database"`
- Run: `roocommander read "clerk-auth"`

[add services]
```

**Why sequential**: Scaffold must exist before adding services

---

## Special Cases

### Case 1: User Mentions Specific Version

**User**: "Set up Tailwind v4"

**Match**: tailwind-v4-shadcn (v4 is explicitly in skill name)

**Importance**: Tailwind v4 has breaking changes from v3. Wrong skill = broken build.

**Response**:
```
I found the "Tailwind v4 + shadcn/ui Stack" skill.

⚠️ Important: Tailwind v4 has breaking changes from v3:
- PostCSS → Vite plugin
- @apply directive removed
- Theme structure changed

Using this skill ensures correct v4 setup.

Delegating to Code mode.
```

### Case 2: Deprecated/Alternative Approaches

**User**: "Set up OpenAI chat completions"

**Multiple options**:
- openai-api (traditional stateless API)
- openai-assistants (stateful with threads)
- openai-responses (new unified API)
- openai-agents (agent framework)

**Selection logic**:
- "chat completions" → openai-api (traditional)
- "assistants" → openai-assistants
- "responses api" → openai-responses
- "agents" → openai-agents

**If unclear, ask**:
```
I found multiple OpenAI integration skills:

1. **openai-api**: Traditional chat completions (stateless)
2. **openai-assistants**: Assistants API (stateful, built-in tools)
3. **openai-responses**: New unified Responses API
4. **openai-agents**: Agent framework with autonomy

Which approach do you need? (1/2/3/4)
```

### Case 3: Technology Not in Skills

**User**: "Add PostgreSQL database with Prisma ORM"

**Skills check**: No PostgreSQL or Prisma skill exists

**Response**:
```
No specific skill found for PostgreSQL + Prisma.

However, I found:
- cloudflare-hyperdrive (Postgres connection pooling for Workers)

Is this a Cloudflare Workers project? If so, Hyperdrive can connect to external Postgres.

Otherwise, I'll delegate to Code mode with general implementation knowledge.
```

### Case 4: Ambiguous Technology

**User**: "Add database"

**Multiple options**:
- cloudflare-d1 (SQL)
- cloudflare-kv (key-value)
- cloudflare-r2 (objects)

**Ask for clarification**:
```
I found multiple database options:

1. **Cloudflare D1**: SQL database (users, products, structured data)
2. **Cloudflare KV**: Key-value store (cache, sessions, simple data)
3. **Cloudflare R2**: Object storage (files, images, videos)

What type of data will you store? (1/2/3)
```

---

## Routing Decision Trees

### Tree 1: New Project Setup

```
User: "Set up new project"
  ├─> Mentions "Cloudflare"?
  │   ├─> Yes: cloudflare-worker-base
  │   └─> No: Check other frameworks
  │
  ├─> Mentions "Next.js"?
  │   ├─> Yes: nextjs OR cloudflare-nextjs (if Cloudflare mentioned)
  │   └─> No: Continue
  │
  ├─> Mentions "Tailwind"?
  │   ├─> Yes: tailwind-v4-shadcn
  │   └─> No: Continue
  │
  └─> Asks for planning?
      └─> Yes: project-planning
```

### Tree 2: Add Feature

```
User: "Add [feature]"
  ├─> Feature = "auth"?
  │   ├─> Mentions "Clerk": clerk-auth
  │   ├─> Mentions "Better Auth": better-auth
  │   └─> Neither: Ask preference
  │
  ├─> Feature = "database"?
  │   ├─> Mentions "D1" or "SQL": cloudflare-d1 + drizzle-orm-d1
  │   ├─> Mentions "KV": cloudflare-kv
  │   └─> Mentions "R2": cloudflare-r2
  │
  ├─> Feature = "chat" or "AI"?
  │   ├─> Mentions "OpenAI": openai-api + ai-sdk-ui
  │   ├─> Mentions "Claude": claude-api + ai-sdk-ui
  │   ├─> Mentions "Gemini": google-gemini-api + ai-sdk-ui
  │   └─> Generic "AI": Ask which provider
  │
  └─> Feature = custom/unknown?
      └─> No skill, proceed with general knowledge
```

### Tree 3: Fix Error

```
User: "Fix error with [technology]"
  ├─> Technology has skill?
  │   ├─> Yes: Load skill (may have known issues section)
  │   └─> No: Delegate to Debug mode without skill
  │
  └─> Delegate to Debug mode with skill instructions
```

---

## Routing Best Practices

### DO

✅ **Read skills index for every implementation request**
✅ **Match multiple keywords** (not just one)
✅ **Consider context** (Cloudflare project → prefer Cloudflare skills)
✅ **Ask when multiple options exist** (Clerk vs Better Auth)
✅ **Combine related skills** in single delegation (D1 + Drizzle)
✅ **Explain why skill is relevant** ("This skill prevents [known error]")

### DON'T

❌ **Don't assume skill exists** without checking index
❌ **Don't force skill usage** for project-specific code
❌ **Don't load every skill** for generic requests
❌ **Don't delegate without skill instructions** when skill exists
❌ **Don't guess skill names** (read index to get exact names)
❌ **Don't skip clarification** when multiple equally valid options exist

---

## Quick Reference

**Routing process**:
1. Extract keywords from user request
2. Read `.roo/rules/01-skills-index.md`
3. Match keywords → skill keywords
4. Score matches (exact > partial > description)
5. Return top 1-3 matches

**Multi-skill triggers**:
- "database" + "orm" → database skill + orm skill
- "auth" + "database" → auth skill + database skill
- "chat" + "ai" → ui skill + api skill + database skill

**When to ask user**:
- Multiple equally valid approaches (Clerk vs Better Auth)
- Ambiguous technology ("database" could be D1/KV/R2)
- 4+ skills match (ask which to prioritize)

**When to skip skills**:
- Trivial tasks (< 20 lines)
- Project-specific business logic
- No matching skill found in index

---

*This file is part of Roo Commander v9.0.0 - See 00-core-identity.md for role definition and 01-orchestration.md for delegation patterns*
