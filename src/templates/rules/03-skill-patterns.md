# Skill-Aware Development Patterns

> Always check for existing skills before implementing common patterns from scratch

**Philosophy**: Skills contain production-tested patterns, known issue prevention, and token-efficient documentation. Using skills saves time and prevents errors.

---

## When to Check Skills

### Auto-Trigger Scenarios (MUST Check)

Check skills index **before**:
- Scaffolding new projects
- Setting up frameworks (Tailwind, React, Next.js, Vite, etc.)
- Integrating third-party services (Auth, AI, databases, CMS)
- Implementing common patterns (forms, validation, API clients, chat UIs)
- Configuring build tools or deployment workflows
- Setting up Cloudflare services (Workers, D1, R2, KV, etc.)

### Keyword Triggers

User mentions these → check skills immediately:

**Technology Names**:
- Cloudflare, Workers, D1, R2, KV, Durable Objects, Hyperdrive, Vectorize
- OpenAI, Claude, Gemini, Anthropic, ElevenLabs
- Tailwind, shadcn/ui, Radix UI, Base UI, Auto-Animate
- Next.js, React, Vite, Hono, TanStack
- Clerk, Better Auth, Auth.js
- Drizzle ORM, Prisma

**Service Types**:
- "database", "SQL", "SQLite", "Postgres"
- "authentication", "auth", "login", "user management"
- "AI", "LLM", "chatbot", "chat interface", "streaming"
- "scraping", "web scraping", "data extraction"
- "CMS", "content management"
- "forms", "validation"

**Common Patterns**:
- "form validation", "file upload", "image handling"
- "streaming", "real-time", "WebSocket"
- "API client", "fetch wrapper", "HTTP client"
- "routing", "middleware", "error handling"

---

## Skills Discovery Workflow

Follow this 5-step process:

### Step 1: Parse User Request
Extract technology keywords and pattern types from user message.

Example: "Set up Cloudflare D1 database with Drizzle ORM"
→ Keywords: `cloudflare`, `d1`, `database`, `drizzle`, `orm`

### Step 2: Check Skills Index
Read `.roo/rules/01-skills-index.md` and search for matching keywords.

Command:
```bash
# Option A: Read entire index
cat .roo/rules/01-skills-index.md

# Option B: Search for specific terms
roo-commander search d1
roo-commander search database
```

### Step 3: Match Keywords
Look for skills where keywords field matches extracted terms.

Example match:
```
Cloudflare D1 Database
Keywords: d1, d1 database, cloudflare d1, wrangler d1, d1 migrations, sqlite workers

drizzle-orm-d1
Keywords: drizzle orm, drizzle d1, type-safe sql, drizzle schema, drizzle migrations
```

### Step 4: Load Skill
Run `roo-commander read <skill-name>` to get full skill content.

```bash
roo-commander read "Cloudflare D1 Database"
roo-commander read drizzle-orm-d1
```

Output: Full SKILL.md markdown with patterns, examples, gotchas, templates.

### Step 5: Apply Knowledge
Use skill patterns, templates, and known issue prevention in implementation.

**What to extract from skill**:
- Configuration syntax (wrangler.toml, package.json)
- API patterns and best practices
- Template files (copy-paste ready code)
- Known gotchas and error prevention
- Official documentation links

---

## Multi-Skill Coordination

Some requests require multiple skills working together.

### Example: "Set up auth with database"

**Skills needed**:
1. Authentication: `better-auth` or `clerk-auth`
2. Database: `cloudflare-d1` + `drizzle-orm-d1`

**Sequence**:
1. Load database skill first (foundation)
2. Set up D1 database and schema
3. Load auth skill second (depends on database)
4. Configure auth with database adapter
5. Integrate patterns from both skills

### Pattern: Dependency Order

**Database before everything**: D1, KV, R2 setup first
**Auth after database**: Needs database schema
**UI after API**: API endpoints before components
**Deployment last**: After all features work

---

## Decision Tree: Skills vs Manual Implementation

### Use Skills When:

**Technology is listed** in skills index
- Check: `roo-commander list | grep -i <technology>`
- If match found → load skill

**Setting up new service/framework**
- Cloudflare Workers, D1, R2, KV
- Tailwind v4, shadcn/ui, Next.js
- OpenAI API, Claude API, Gemini API
- → Always use skill (prevents known errors)

**User mentions specific technology by name**
- "Set up Cloudflare D1" → use cloudflare-d1 skill
- "Integrate Clerk auth" → use clerk-auth skill
- "Add Tailwind v4" → use tailwind-v4-shadcn skill

**Common pattern with known gotchas**
- Forms + validation → react-hook-form-zod skill
- Chat UI → ai-sdk-ui or better-chatbot skill
- Web scraping → firecrawl-scraper skill

**Production-critical code**
- Authentication, payments, data handling
- → Use skills (battle-tested patterns)

### Manual Implementation When:

**Simple utility functions**
- Formatters, helpers, string manipulation
- < 20 lines of code
- No external dependencies

**Project-specific business logic**
- Unique algorithms
- Custom workflows
- Domain-specific rules

**No matching skill exists**
- Check: `roo-commander search <keyword>`
- If no results → implement manually

**Trivial tasks**
- Variable renaming
- Comment additions
- Simple refactoring

---

## Anti-Patterns to Avoid

### DON'T Implement These Without Skills:

**Cloudflare Workers** → Use `cloudflare-worker-base` skill
- Why: Vite plugin configuration, bindings syntax, static assets setup
- Without skill: Trial-and-error with wrangler.toml, broken builds

**Tailwind v4** → Use `tailwind-v4-shadcn` skill
- Why: Breaking changes from v3 (@apply removed, PostCSS → Vite plugin, theme structure changed)
- Without skill: Broken build, wasted hours debugging

**Cloudflare D1** → Use `cloudflare-d1` skill
- Why: Migration patterns, binding syntax, Drizzle integration, seed data
- Without skill: 30+ minutes of guessing, multiple errors

**Claude/OpenAI APIs** → Use `claude-api`, `openai-api`, `google-gemini-api` skills
- Why: Correct SDK versions, streaming patterns, error handling
- Without skill: Deprecated SDK usage, broken streaming

**shadcn/ui Components** → Use `tailwind-v4-shadcn` skill
- Why: Installation commands, theme setup, Radix integration
- Without skill: Component installation errors, theme conflicts

**Authentication** → Use `clerk-auth` or `better-auth` skill
- Why: JWT validation, middleware patterns, database integration
- Without skill: Security vulnerabilities, token validation errors

**Chat Interfaces** → Use `ai-sdk-ui` or `better-chatbot` skill
- Why: Streaming UI patterns, tool calling, message state management
- Without skill: Janky UX, memory leaks, broken streaming

---

## Examples of Skill-Aware Implementation

### Example 1: Cloudflare D1 Database Setup

**Without skill** (trial and error):
```
1. Guess wrangler.toml binding syntax (wrong format)
2. Try CREATE TABLE manually (no migration strategy)
3. Write raw SQL queries (no type safety)
4. Miss seed data pattern
5. Encounter "statement too long" error (no batching)
→ Result: 30 minutes, 5+ errors, suboptimal implementation
```

**With cloudflare-d1 skill**:
```bash
roo-commander read "Cloudflare D1 Database"
```
```
1. Copy binding syntax from skill (proven correct)
2. Use migration pattern with wrangler d1 migrations
3. Integrate Drizzle ORM for type safety
4. Apply seed data pattern from templates
5. Use batch API for large inserts (from gotchas section)
→ Result: 5 minutes, zero errors, production-ready code
```

**Time saved**: 25 minutes
**Errors prevented**: 5+
**Code quality**: Battle-tested patterns

---

### Example 2: Tailwind v4 + shadcn/ui

**Without skill** (breaking changes):
```
1. Install Tailwind v4 (npm install tailwindcss)
2. Use @apply directive (REMOVED in v4 - build breaks!)
3. Configure PostCSS (WRONG - v4 uses Vite plugin)
4. Put theme variables in @layer base (WRONG location)
→ Result: Broken build, 1+ hour debugging, frustration
```

**With tailwind-v4-shadcn skill**:
```bash
roo-commander read "Tailwind v4"
```
```
1. Install @tailwindcss/vite (not PostCSS)
2. Use @theme inline for color mapping (correct pattern)
3. Put :root variables OUTSIDE @layer base
4. Use semantic colors (bg-primary, text-foreground)
→ Result: Works first time, no debugging needed
```

**Time saved**: 60+ minutes
**Errors prevented**: Build failures, theme bugs
**Code quality**: Follows v4 best practices

---

### Example 3: OpenAI Chat Completion

**Without skill** (deprecated SDK):
```
1. Use old openai@3.x SDK (deprecated!)
2. Miss streaming pattern
3. No error handling
4. Wrong content type for function calling
→ Result: Works initially, breaks in production
```

**With openai-api skill**:
```bash
roo-commander read "openai-api"
```
```
1. Use current openai@5.x SDK
2. Streaming pattern with proper async iteration
3. Comprehensive error handling (rate limits, timeouts)
4. Correct function calling schema
→ Result: Production-ready from day 1
```

**Errors prevented**: Runtime failures, API breaking changes
**Code quality**: Follows OpenAI official patterns

---

## Token Efficiency

Skills are token-optimized for AI context:

**Typical skill size**: 200-1,500 lines (500-line average)
**Content**: Condensed documentation, essential examples only, highlighted gotchas

### Token Comparison: Skill vs Web Search

**Using a skill** (cloudflare-d1):
- Load skill: 500 tokens
- Contains: Complete setup, migration patterns, Drizzle integration, gotchas
- One load: All info in context
- Result: Correct implementation first try

**Without skill** (web search):
- Query 1: "cloudflare d1 setup" → 800 tokens
- Query 2: "d1 migrations wrangler" → 600 tokens
- Query 3: "d1 drizzle orm" → 700 tokens
- Query 4: "d1 batch insert error" → 500 tokens
- Trial-and-error iterations: 2,000+ tokens
- Result: Multiple attempts, still missing gotchas

**Token savings**: 60-87% (measured in Claude Code production usage)

---

## Skill Update Workflow

Skills are maintained separately from Roo Commander CLI.

### When skills get updated:

1. **Update skills repository**:
   ```bash
   cd ~/.claude/skills
   git pull
   ```

2. **Regenerate index**:
   ```bash
   roo-commander sync-index
   ```

3. **New index available**: `.roo/rules/01-skills-index.md` refreshed with latest skills

### Frequency:
- Check for updates: Weekly or monthly
- After major tool releases (Tailwind v4, Next.js 16, etc.)
- When encountering errors (skill might have fix)

---

## Integration with Built-In Modes

These patterns apply to **ALL Roo Code modes**, not just Roo Commander:

**Code mode**: Check skills before implementing features
**Architect mode**: Reference skills for system design patterns
**Debug mode**: Check skills for known errors and fixes
**Roo Commander mode**: Automatically checks skills as part of orchestration

### Example: Code Mode Usage

```
User (in Code mode): "Set up Cloudflare D1 database"

Code mode workflow:
1. Check: .roo/rules/01-skills-index.md → find "Cloudflare D1 Database"
2. Load: roo-commander read "Cloudflare D1 Database"
3. Implement: Using patterns from skill
4. Verify: Against verification criteria in skill
```

**Result**: Code mode becomes skill-aware without needing Roo Commander orchestration.

---

## Quick Reference

**Always check skills before**:
- Scaffolding projects
- Setting up frameworks
- Integrating services
- Implementing common patterns

**Commands**:
```bash
roo-commander list              # Browse all skills
roo-commander search <keyword>  # Find relevant skills
roo-commander read <skill>      # Load skill content
```

**Decision**:
- Technology in index → use skill
- Common pattern → check for skill
- Trivial task → manual implementation
- Production code → use skill

---

*This file is part of Roo Commander v9.0.0 - See .roo/rules/02-cli-usage.md for CLI command reference*
