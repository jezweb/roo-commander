---
description: Create implementation phases and planning docs for new project
argument-hint: none
workflow-stage: planning
part-of: project-workflow lifecycle
---

# Plan Project

Create structured implementation phases and planning documentation for a new project.

---

## Your Task

Guide the user through creating IMPLEMENTATION_PHASES.md and other planning documents with context-safe phases.

### Step 1: Gather Project Information

Ask user for project details:

```
📋 Project Planning

Let's create implementation phases for your project.

Please provide:
1. Project name
2. Brief description (1-2 sentences)
3. Tech stack (e.g., React + Cloudflare Workers + D1)
4. Key features (list 3-10 main features)
5. Estimated timeline (if known)
```

Wait for user response.

### Step 2: Check for Relevant Skills

Based on tech stack, identify relevant skills:

Run: `roocommander search <technology>`

Example:
- If "Cloudflare D1" mentioned: search `d1 database`
- If "authentication" mentioned: search `auth`
- If "React" mentioned: search `react`

Present findings:

```
🎯 Relevant Skills for This Project:

• [skill-name]: [what it covers]
• [skill-name]: [what it covers]
• [skill-name]: [what it covers]

These skills will help during implementation.
I'll reference them in the phases.
```

### Step 3: Break Down Into Phases

Analyze features and create logical phases:

**Phase breakdown principles**:
- Each phase: 2-4 hours estimated work (manageable)
- Dependencies flow naturally (setup → infrastructure → features → polish)
- Each phase has clear deliverables and verification criteria

**Standard phase structure for most projects**:

**Phase 1: Project Setup** (Infrastructure)
- Initialize project (package.json, tsconfig.json)
- Set up build tool (Vite, etc.)
- Configure basic structure
- Verify: `npm run dev` works

**Phase 2: [Infrastructure]** (e.g., Database, Auth, Core Services)
- Set up database/storage
- Configure bindings
- Create schema
- Verify: Connections work

**Phase 3-N: [Features]** (One phase per major feature)
- Implement feature X
- Add UI components
- Connect to backend
- Verify: Feature works end-to-end

**Final Phase: Polish & Deploy**
- Error handling
- Loading states
- Documentation
- Deployment
- Verify: Production-ready

Present proposed phases to user:

```
📑 Proposed Implementation Phases:

Phase 1: Project Setup (2-3 hours)
- [tasks...]

Phase 2: [Infrastructure Name] (3-4 hours)
- [tasks...]

Phase 3: [Feature Name] (2-3 hours)
- [tasks...]

[... more phases ...]

Total: [N] phases, estimated [X-Y] hours

Does this breakdown make sense? Any adjustments needed?
```

### Step 4: Create IMPLEMENTATION_PHASES.md

Use this template structure to create the file:

````markdown
# Implementation Phases

> [Project Name] - [Brief Description]

**Total Estimated Time**: [X-Y hours] (~[X-Y minutes] human time with AI assistance)
**Tech Stack**: [list technologies]
**Relevant Skills**: [list skill names]

---

## Quick Reference

| Phase | Name | Type | Est. Time | Status |
|-------|------|------|-----------|--------|
| 1 | Project Setup | Infrastructure | 2-3h | ⏸️ |
| 2 | [Name] | [Type] | [X-Yh] | ⏸️ |
| 3 | [Name] | [Type] | [X-Yh] | ⏸️ |

**Status Key**: ⏸️ Pending | 🔄 In Progress | ✅ Complete | 🚫 Blocked

---

## Phase 1: Project Setup

**Type**: Infrastructure
**Estimated**: 2-3 hours (~2-3 minutes human time)
**Files**: package.json, tsconfig.json, vite.config.ts, src/index.ts

### Objective

Initialize project with [tech stack] and verify basic build/dev workflow.

### Tasks

- [ ] Initialize npm project (`npm init`)
- [ ] Install dependencies ([list key packages])
- [ ] Configure TypeScript (tsconfig.json)
- [ ] Set up build tool (Vite, Webpack, etc.)
- [ ] Create basic project structure
- [ ] Add .gitignore
- [ ] Verify build and dev server work

### Verification Criteria

- [ ] `npm run dev` starts dev server successfully
- [ ] `npm run build` completes without errors
- [ ] TypeScript types resolve correctly
- [ ] Basic "Hello World" displays

### Exit Criteria

Project scaffold complete, build working, ready for feature implementation.

---

## Phase 2: [Infrastructure/Feature Name]

**Type**: [Infrastructure/API/UI/Integration]
**Estimated**: [X-Y hours]
**Files**: [list key files to create/modify]

### Objective

[What this phase accomplishes in 1-2 sentences]

### Skills to Use

- Load: `roocommander read "[skill-name]"`
- This skill provides: [what it covers]

### Tasks

- [ ] [Specific task 1]
- [ ] [Specific task 2]
- [ ] [Specific task 3]

### Verification Criteria

- [ ] [Testable outcome 1]
- [ ] [Testable outcome 2]
- [ ] [Testable outcome 3]

### Exit Criteria

[What must be complete before moving to next phase]

---

[... Repeat for all phases ...]

---

## Dependencies Graph

```
Phase 1 (Setup)
    ↓
Phase 2 (Infrastructure)
    ↓
Phase 3 (Feature A) ← depends on Phase 2
    ↓
Phase 4 (Feature B) ← depends on Phase 3
    ↓
Phase 5 (Polish & Deploy)
```

---

## Notes

**Skill Usage**: Check `.roo/rules/01-skills-index.md` before each phase to confirm relevant skills.

**Context Management**: Each phase designed to fit in one session. Use `/wrap-session` at phase completion.

**Flexibility**: Phases can be adjusted as implementation progresses. Update this document if scope changes.
````

Create this file at: `docs/IMPLEMENTATION_PHASES.md`

### Step 5: Create Supporting Docs (Optional)

Ask user if they want additional planning docs:

```
📚 Additional Planning Documents

Would you like me to create:

1. **ARCHITECTURE.md** - System design, data flow, technology choices
2. **DATABASE_SCHEMA.md** - Database tables, relationships, indexes
3. **API_ENDPOINTS.md** - API routes, request/response formats
4. **UI_COMPONENTS.md** - Component hierarchy, props, state

Which would be helpful? (Enter numbers or 'none')
```

If user requests any, create them with appropriate template structures.

### Step 6: Create SESSION.md

Create session tracking file:

```markdown
# Session State

**Current Phase**: Phase 1
**Current Stage**: Planning
**Last Checkpoint**: [initial] ([date])
**Planning Docs**: `docs/IMPLEMENTATION_PHASES.md`

---

## Phase 1: Project Setup ⏸️
**Spec**: `docs/IMPLEMENTATION_PHASES.md#phase-1-project-setup`

## Phase 2: [Name] ⏸️
**Spec**: `docs/IMPLEMENTATION_PHASES.md#phase-2-[name]`

[... list all phases ...]
```

Save as: `SESSION.md` in project root

### Step 7: Initialize Git (if not already)

Check if git initialized:

```bash
git status
```

If not initialized:

```bash
git init
git add .
git commit -m "$(cat <<'EOF'
Initial project planning

Generated planning documentation:
- IMPLEMENTATION_PHASES.md ([N] phases, ~[X-Y] hours)
- SESSION.md (session tracking)
[- Other docs if created]

Next: Start Phase 1 - [Phase Name]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Step 8: Confirm and Provide Next Steps

Output summary:

```
✅ Project Planning Complete!

Created:
• docs/IMPLEMENTATION_PHASES.md ([N] phases)
• SESSION.md (session tracking)
[• Other docs]

Total Estimated: [X-Y] hours (~[X-Y] minutes with AI)

📋 Phase Summary:
1. Project Setup - [brief]
2. [Phase Name] - [brief]
3. [Phase Name] - [brief]
[...]

🚀 Next Steps:

1. Review IMPLEMENTATION_PHASES.md
2. Load relevant skills before starting Phase 1:
   - /load-skill "[skill-name]"
   - /load-skill "[skill-name]"
3. Start Phase 1: [Phase Name]
4. Use /wrap-session after completing each phase

Ready to start Phase 1?
```

---

## IMPLEMENTATION_PHASES.md Template

When creating phases, use this detailed template for each phase:

```markdown
## Phase [N]: [Name]

**Type**: [Infrastructure|API|UI|Feature|Integration|Testing|Deploy]
**Estimated**: [X-Y hours] (~[X-Y minutes] human time)
**Files**: [list key files]

### Objective

[1-2 sentence description of what this phase accomplishes]

### Skills to Use

- Load: `roocommander read "[skill-name]"`
- This skill provides: [key topics from skill]

### Critical Dependencies

**Internal**: [what from previous phases is required]
**External**: [external services, APIs needed]

### Tasks

- [ ] [Specific, actionable task 1]
- [ ] [Specific, actionable task 2]
- [ ] [Specific, actionable task 3]
- [ ] [...]

### Verification Criteria

- [ ] [Testable outcome 1]
- [ ] [Testable outcome 2]
- [ ] [Testable outcome 3]

### Exit Criteria

[What must be complete and verified before moving to next phase]

### Gotchas & Known Issues

**[Known Issue]**: [Description]
- Why it happens: [explanation]
- How to prevent: [solution]

---
```

---

## Error Handling

**Vague feature list**:
```
⚠️ Need more specific features to create meaningful phases.

Instead of: "Add user management"
Better: "User registration with email, login with JWT, profile editing"

Can you provide more details about:
- [Feature 1]: What exactly does it include?
- [Feature 2]: What's the scope?
```

**Unrealistic timeline**:
```
⚠️ Estimated timeline might be tight.

Your request: [X] hours
My estimate: [Y] hours (based on feature scope)

Difference due to:
- [Reason 1]
- [Reason 2]

Options:
1. Extend timeline to [Y] hours
2. Reduce scope to fit [X] hours (remove [features])
3. Proceed with [X] and adjust as needed

Your choice?
```

**Too many phases**:
```
⚠️ Current breakdown has [15+] phases.

This might be:
- Hard to track
- Context-heavy between phases

Suggestion: Combine related phases
- Phases [3, 4, 5] → Single "User Management" phase
- Phases [7, 8] → Single "Chat Interface" phase

Should I consolidate?
```

---

## Best Practices

### DO

✅ **Create context-safe phases** (2-4 hours each)
✅ **Include verification criteria** (testable outcomes)
✅ **Reference relevant skills** (prevents forgetting)
✅ **Define clear exit criteria** (know when phase is done)
✅ **Show dependencies** (prevents out-of-order work)
✅ **Be realistic with estimates** (better to overestimate)

### DON'T

❌ **Don't create massive phases** (>6 hours causes context issues)
❌ **Don't skip verification criteria** (how do you know it works?)
❌ **Don't forget dependencies** (causes errors later)
❌ **Don't ignore skills** (reinventing wheel)
❌ **Don't make phases too granular** (<1 hour is overhead)

---

## Quick Reference

**Standard phase types**:
- Infrastructure: Setup, config, services
- API: Endpoints, logic, validation
- UI: Components, pages, styling
- Feature: Complete user-facing functionality
- Integration: Connecting systems
- Testing: Test suite, validation
- Deploy: Production readiness

**Typical project structure**:
1. Setup (infrastructure)
2. Database/Core Services (infrastructure)
3-N. Features (one phase each)
N+1. Polish & Deploy

**File locations**:
- `docs/IMPLEMENTATION_PHASES.md` - Main planning doc
- `SESSION.md` - Session tracking (project root)
- `docs/ARCHITECTURE.md` - Optional system design
- `docs/DATABASE_SCHEMA.md` - Optional schema doc

---

*This command is part of Roo Commander v9.0.0 - Use /wrap-session after completing each phase*
