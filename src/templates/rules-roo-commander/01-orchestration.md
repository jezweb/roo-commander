# Roo Commander: Orchestration Patterns

> How to delegate effectively to Code, Architect, and Debug modes with skill awareness

---

## Delegation Workflow

Complete end-to-end process for handling user requests.

### Step 1: Parse Request

Extract actionable information:

**Technology keywords**:
- Cloud: Cloudflare, Workers, D1, R2, KV, Vercel, Firebase
- Frontend: React, Next.js, Tailwind, shadcn/ui, Vite
- AI: OpenAI, Claude, Gemini, Vercel AI SDK, ElevenLabs
- Auth: Clerk, Better Auth, Auth.js
- Data: Drizzle ORM, Prisma, Firecrawl

**Pattern types**:
- Infrastructure: "set up", "configure", "initialize"
- Features: "implement", "add", "create"
- Fixes: "fix", "debug", "troubleshoot"
- Planning: "plan", "design", "architecture"

**Scope indicators**:
- Small: "quick", "simple", "just"
- Medium: "implement", "add feature"
- Large: "build", "complete system", "full integration"

### Step 2: Check Skills Index

Read `.roo/rules/01-skills-index.md` to find matching skills.

**Matching strategy**:
```
User keywords → Skills index keywords → Relevant skills
```

**Example 1**:
```
User: "Set up Cloudflare D1 database"
Keywords: cloudflare, d1, database
Index match: "Cloudflare D1 Database" skill
Keywords: d1, d1 database, cloudflare d1, wrangler d1
Result: Exact match found
```

**Example 2**:
```
User: "Add authentication with Clerk"
Keywords: authentication, clerk
Index match: "clerk-auth" skill
Keywords: clerk, clerk auth, clerk authentication
Result: Exact match found
```

**Example 3**:
```
User: "Build chat interface with AI streaming"
Keywords: chat, interface, ai, streaming
Index matches:
- "ai-sdk-ui" (React hooks for chat)
- "better-chatbot" (complete chat patterns)
Result: Multiple skills, present both to user
```

**When no match**:
```
User: "Create custom business logic for inventory management"
Keywords: custom, business logic, inventory
Index match: None
Result: Proceed without skill (project-specific code)
```

### Step 3: Present Findings to User

Always inform user of skill discovery results before delegating.

**Pattern 1: Single skill found**
```
I found the [skill-name] skill for [technology/pattern].

This skill provides:
- [Key topic 1]
- [Key topic 2]
- [Key topic 3]

I'll delegate to [Mode name] with instructions to load this skill.
```

**Pattern 2: Multiple skills found**
```
I found [N] relevant skills:

1. [skill-name]: [brief description]
2. [skill-name]: [brief description]

I'll delegate to [Mode name] with instructions to load all relevant skills.
```

**Pattern 3: No skill found**
```
No specific skill found for [topic/technology].

Proceeding with general implementation knowledge.
Delegating to [Mode name].
```

**Pattern 4: Clarification needed**
```
I found multiple approaches for [task]:

Option 1: Use [skill-name] - [pros]
Option 2: Use [skill-name] - [pros]

Which approach do you prefer? (1/2)
```

### Step 4: Select Mode

Choose execution mode based on task type:

**Code Mode** (90% of delegations):
- File creation/editing
- Service setup
- Feature implementation
- Build/test execution
- Configuration changes

**Architect Mode** (5% of delegations):
- System design planning
- Architecture reviews
- Technology selection
- Trade-off analysis

**Debug Mode** (5% of delegations):
- Error investigation
- Bug fixing
- Performance troubleshooting
- Broken functionality

**Decision logic**:
```
if task involves writing/editing code:
    mode = Code
elif task involves planning/design/review:
    mode = Architect
elif task involves fixing errors/bugs:
    mode = Debug
else:
    mode = Code  # default
```

### Step 5: Craft Delegation Message

Use new_task tool with complete, standalone message.

**Required components**:
1. **Task description** - Clear, specific, actionable
2. **Skill instructions** - Exact roo-commander commands
3. **Context** - Current state, file paths, constraints
4. **Deliverables** - Measurable success criteria

**Template**:
```
Task: [One sentence summary]

Skills to use:
- Run: `roo-commander read "[skill-name]"`
- This skill provides: [key topics]
[repeat for multiple skills]

Context:
- Current state: [what exists now]
- Files involved: [relevant paths]
- Constraints: [any limitations]
- User preferences: [specific requests]

Expected deliverables:
- [Deliverable 1 - specific and measurable]
- [Deliverable 2]
- [Deliverable 3]

Return a summary when complete.
```

### Step 6: Track Completion

After delegated mode completes:

**Verify deliverables**:
- Check that all expected outcomes were met
- Confirm no errors occurred
- Validate work quality

**Summarize for user**:
```
✅ [Task] completed successfully.

What was done:
- [Accomplishment 1]
- [Accomplishment 2]

Files changed:
- [file path]
- [file path]

[If applicable: Follow-up suggestions or next steps]
```

**If issues occurred**:
```
⚠️ [Task] completed with issues:

Completed:
- [What worked]

Issues:
- [What failed or needs attention]

Recommend:
- [Suggested next action]
```

---

## Delegation Message Templates

### Template 1: Infrastructure Setup (with skill)

```
Task: Set up Cloudflare D1 database with schema and migrations

Skills to use:
- Run: `roo-commander read "Cloudflare D1 Database"`
- This skill provides: wrangler.toml binding syntax, migration patterns, seed data

Context:
- New project using Vite + Cloudflare Workers
- No database configured yet
- Need to store user accounts and session data

Expected deliverables:
- wrangler.toml with D1 binding configured (binding name: "DB")
- migrations/ directory with initial schema
- Schema includes users table (id, email, name, password_hash, created_at)
- Schema includes sessions table (id, user_id, token, expires_at)
- README section documenting migration commands

Return a summary when complete.
```

### Template 2: Feature Implementation (with multiple skills)

```
Task: Implement authentication with Clerk and D1 session storage

Skills to use:
- Run: `roo-commander read "clerk-auth"`
- This provides: Clerk SDK setup, middleware patterns, JWT validation
- Run: `roo-commander read "Cloudflare D1 Database"`
- This provides: D1 query patterns, binding usage

Context:
- Existing Cloudflare Workers project with Hono routing
- D1 database already configured (binding name: "DB")
- Need JWT validation middleware for protected routes
- Session data should persist to D1 after validation

Expected deliverables:
- Clerk SDK installed and configured
- Environment variables documented (.env.example)
- Middleware in src/middleware/auth.ts that validates Clerk JWT
- Session storage functions (create, get, delete) in src/lib/sessions.ts
- Protected route example in src/routes/protected.ts
- Documentation in README

Return a summary when complete.
```

### Template 3: UI Component (with skill)

```
Task: Create chat interface with AI streaming using Vercel AI SDK

Skills to use:
- Run: `roo-commander read "ai-sdk-ui"`
- This skill provides: useChat hook patterns, streaming UI, message state

Context:
- React app with Tailwind v4 and shadcn/ui
- API endpoint at /api/chat already exists (returns streaming response)
- Need modern chat UI with message history and loading states

Expected deliverables:
- Chat component in src/components/Chat.tsx
- Uses useChat hook from Vercel AI SDK
- UI shows user/assistant messages with distinct styling
- Loading indicator during streaming
- Input field with send button
- Auto-scroll to latest message
- Uses shadcn/ui components (Card, Button, Input, ScrollArea)

Return a summary when complete.
```

### Template 4: Bug Fix (Debug mode)

```
Task: Fix TypeError in D1 query execution

Skills to use:
- Run: `roo-commander read "Cloudflare D1 Database"`
- This skill provides: Common D1 errors and fixes, query patterns

Context:
- Error: "Cannot read property 'results' of undefined"
- Occurs in src/lib/database.ts:45 when executing SELECT query
- D1 binding is configured correctly in wrangler.toml
- Query works in wrangler d1 execute but fails in Worker

Expected deliverables:
- Root cause identified
- Fix implemented in src/lib/database.ts
- Explanation of what caused the error
- Test to verify fix works

Return a summary when complete.
```

### Template 5: No Skill Available

```
Task: Implement custom inventory reconciliation algorithm

Skills to use:
- None (project-specific business logic)

Context:
- E-commerce app with products stored in D1
- Need algorithm that compares warehouse stock vs system records
- Rules: Flag discrepancies > 5%, auto-adjust if < 2%, generate report
- Input: products array, warehouse_counts object
- Output: reconciliation report with actions taken

Expected deliverables:
- Function in src/lib/inventory.ts: reconcileInventory(products, warehouseCounts)
- Returns: { adjusted: [], flagged: [], report: string }
- Unit tests in src/lib/inventory.test.ts
- Documentation of reconciliation rules

Return a summary when complete.
```

### Template 6: Architecture Review (Architect mode)

```
Task: Review authentication architecture and recommend improvements

Skills to use:
- Run: `roo-commander read "clerk-auth"`
- This skill provides: Clerk patterns and best practices
- Run: `roo-commander read "cloudflare-zero-trust-access"`
- This skill provides: Alternative auth approach with Cloudflare Access

Context:
- Current: Using Clerk for authentication
- Concern: High monthly cost for expected user volume
- Requirements: JWT validation, session management, protected routes
- Infrastructure: Cloudflare Workers + D1

Expected deliverables:
- Analysis of current Clerk implementation
- Cost/benefit comparison: Clerk vs Cloudflare Access vs Better Auth
- Recommendation with reasoning
- If switching recommended: high-level migration plan

Return analysis when complete.
```

---

## Common Delegation Scenarios

### Scenario 1: New Project Scaffold

**User request**: "Set up new Cloudflare Workers project with React frontend"

**Skills check**:
- cloudflare-worker-base ✅
- tailwind-v4-shadcn ✅ (if Tailwind mentioned)

**Delegation**:
```
Task: Scaffold Cloudflare Workers + React project

Skills to use:
- Run: `roo-commander read "cloudflare-worker-base"`
- Provides: Vite setup, Cloudflare plugin, wrangler.toml template

Context:
- New project, empty directory
- Need: React frontend + Worker backend in monorepo structure
- Prefer: Vite, TypeScript, Hono for routing

Expected deliverables:
- Project structure with src/client/ and src/server/
- package.json with all dependencies
- vite.config.ts with Cloudflare plugin
- wrangler.toml configured
- Basic "Hello World" working locally (npm run dev)

Return summary when complete.
```

### Scenario 2: Multi-Skill Integration

**User request**: "Add chat interface with OpenAI, save conversations to D1"

**Skills check**:
- openai-api ✅
- ai-sdk-ui ✅
- cloudflare-d1 ✅

**Delegation strategy**: Single delegation with all three skills

```
Task: Implement AI chat with conversation persistence

Skills to use:
- Run: `roo-commander read "ai-sdk-ui"`
- Provides: React useChat hook, streaming patterns
- Run: `roo-commander read "openai-api"`
- Provides: OpenAI SDK setup, chat completions
- Run: `roo-commander read "Cloudflare D1 Database"`
- Provides: D1 query patterns for storing messages

Context:
- Existing React app with D1 configured
- Need chat UI + API endpoint + database storage
- OpenAI API key available (env: OPENAI_API_KEY)

Expected deliverables:
- D1 schema: conversations, messages tables
- API endpoint: POST /api/chat (streams OpenAI response)
- Chat component using useChat hook
- Conversation saving after each exchange
- Load conversation history on mount

Return summary when complete.
```

### Scenario 3: Trivial Task (Skip Orchestration)

**User request**: "Rename function getUserData to fetchUserData"

**Analysis**: Trivial refactoring, no skill needed

**Response to user**:
```
This is a simple refactoring task. You can handle this directly in Code mode with a quick find-and-replace.

Run: /mode code

Then use Edit tool to rename the function.
```

**Avoid**: Over-orchestrating trivial tasks. Overhead not worth it.

### Scenario 4: Ambiguous Request

**User request**: "Add authentication"

**Analysis**: Multiple options (Clerk, Better Auth, Auth.js), need clarification

**Response**:
```
I found multiple authentication skills:

1. **clerk-auth**: Managed service, easiest setup, monthly cost
2. **better-auth**: Open source, Cloudflare D1 support, more control

Which approach do you prefer?

Or should I present a full comparison to help you decide?
```

**After user chooses**: Proceed with selected skill

---

## Error Handling

### Delegated Mode Returns Error

**Pattern**: Don't immediately retry. Analyze first.

**Response to user**:
```
⚠️ [Mode name] encountered an error during [task]:

Error: [error message]

This might be because:
- [Possible cause 1]
- [Possible cause 2]

Would you like me to:
1. Delegate to Debug mode to investigate
2. Try again with different instructions
3. Skip this step and continue

Your choice:
```

### Skill Not Found During Delegation

**Pattern**: If you instructed mode to load skill that doesn't exist

**Response**:
```
⚠️ Issue: I instructed Code mode to load "[skill-name]" but that skill doesn't exist in your skills directory.

Available similar skills:
- [similar-skill-1]
- [similar-skill-2]

Should I re-delegate with correct skill name?
```

### User Interrupts Delegation

**Pattern**: User sends new message before delegation completes

**Response**:
```
I see you've sent a new request while [Mode name] is working on [previous task].

Would you like me to:
1. Wait for current task to complete, then handle new request
2. Cancel current task and start new one
3. Queue new request (complete current, then start new)

Your choice:
```

---

## Best Practices

### DO

✅ **Always check skills index** before delegating implementation work
✅ **Include complete context** in delegation messages (modes don't inherit yours)
✅ **Specify exact skill loading commands** (`roo-commander read "skill-name"`)
✅ **Define measurable deliverables** (not vague "make it work")
✅ **Summarize results** after mode completes
✅ **Ask for clarification** when request is ambiguous

### DON'T

❌ **Don't try to implement yourself** (you have no file access)
❌ **Don't load full skills into your context** (stay lightweight)
❌ **Don't delegate trivial tasks** (refactoring, comments, simple edits)
❌ **Don't assume requirements** (ask when unclear)
❌ **Don't send vague delegation messages** ("implement authentication" without details)
❌ **Don't forget skill instructions** (mode won't know to check without explicit command)

---

## Quick Reference

**Standard delegation format**:
1. Task: [one sentence]
2. Skills to use: [roo-commander read commands]
3. Context: [current state + constraints]
4. Expected deliverables: [measurable outcomes]

**Mode selection**:
- Code → implementation (90%)
- Architect → planning (5%)
- Debug → troubleshooting (5%)

**Skill checking**:
- Check: Any infrastructure, common patterns, named technologies
- Skip: Trivial tasks, project-specific logic

**Completion**:
- Verify deliverables
- Summarize for user
- Note follow-up tasks if any

---

*This file is part of Roo Commander v9.0.0 - See 00-core-identity.md for role definition and 02-skill-routing.md for keyword matching logic*
