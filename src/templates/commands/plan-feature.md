---
description: Plan a new feature addition to existing project
argument-hint: none
---

# Plan Feature

Create implementation phases for adding a new feature to an existing project.

---

## Your Task

Guide the user through planning a new feature with phases that integrate into existing IMPLEMENTATION_PHASES.md.

### Step 1: Understand the Feature

Ask user for feature details:

```
✨ Feature Planning

Let's plan this new feature addition.

Please describe:
1. Feature name
2. What does it do? (user perspective)
3. Which existing features does it interact with?
4. Any new technologies/services needed?
5. Estimated complexity (simple/medium/complex)
```

Wait for user response.

### Step 2: Check Current Project State

Read existing planning docs to understand context:

```bash
# Check if IMPLEMENTATION_PHASES.md exists
ls docs/IMPLEMENTATION_PHASES.md

# Read current phases
cat docs/IMPLEMENTATION_PHASES.md
```

If IMPLEMENTATION_PHASES.md doesn't exist:
```
⚠️ No IMPLEMENTATION_PHASES.md found.

This command is for adding features to existing planned projects.

For new projects, use: /plan-project

Should I help you create a project plan first?
```

### Step 3: Identify Dependencies

Analyze what the feature needs:

```
🔗 Feature Dependencies

This feature will need:

Existing systems:
• [Existing feature/service 1]
• [Existing feature/service 2]

New additions:
• [New service/API]
• [New database tables]
• [New UI components]

Skills to check:
• [skill-name] - for [technology]
• [skill-name] - for [pattern]

Run: /load-skill [name] to load relevant skills
```

### Step 3: Check for Relevant Skills

Search for skills related to the feature:

```bash
roo-commander search <keyword>
```

Present findings:

```
🎯 Relevant Skills:

• [skill-name]: [what it provides]
• [skill-name]: [what it provides]

These will help implement this feature efficiently.
```

### Step 4: Break Feature Into Phases

Create phases for the feature:

**Typical feature breakdown**:

**Phase A: Data Layer** (if new data needed)
- Database schema changes
- Migrations
- Data access functions

**Phase B: API Layer** (if new endpoints)
- Route handlers
- Validation
- Business logic

**Phase C: UI Layer**
- Components
- State management
- User interactions

**Phase D: Integration**
- Connect UI to API
- Testing
- Error handling

Present breakdown:

```
📋 Feature Implementation Phases

Phase [N]: [Feature Name] - Data Layer (2-3 hours)
- Add database tables for [feature]
- Create migration scripts
- Implement data access functions
- Verify: Database queries work

Phase [N+1]: [Feature Name] - API Layer (2-3 hours)
- Implement API endpoints
- Add validation schemas
- Handle business logic
- Verify: API returns correct data

Phase [N+2]: [Feature Name] - UI Layer (3-4 hours)
- Create UI components
- Add state management
- Implement user interactions
- Verify: UI displays and functions correctly

Phase [N+3]: [Feature Name] - Integration (1-2 hours)
- Connect UI to API
- Add error handling
- Test end-to-end
- Verify: Feature works completely

Total: 4 phases, 8-12 hours estimated

Does this breakdown make sense?
```

### Step 5: Determine Insertion Point

Identify where in existing phases to insert:

```
📍 Phase Insertion Point

Current phases in IMPLEMENTATION_PHASES.md:
- Phase 1: [Name] ✅
- Phase 2: [Name] ✅
- Phase 3: [Name] ✅
- Phase 4: [Name] ⏸️
- Phase 5: [Name] ⏸️

Recommended insertion: After Phase 3 (completed phases)

New structure:
- Phase 1-3: [existing, completed]
- Phase 4: [Feature Name] - Data Layer ← NEW
- Phase 5: [Feature Name] - API Layer ← NEW
- Phase 6: [Feature Name] - UI Layer ← NEW
- Phase 7: [Feature Name] - Integration ← NEW
- Phase 8: [Old Phase 4, renumbered]
- Phase 9: [Old Phase 5, renumbered]

This means renumbering old Phases 4-5 to 8-9.

Proceed with this structure?
```

### Step 6: Create Phase Templates

Generate phase content using the standard template:

````markdown
## Phase [N]: [Feature Name] - Data Layer

**Type**: Infrastructure
**Estimated**: 2-3 hours (~2-3 minutes human time)
**Files**: src/schema.ts, migrations/[timestamp]_add_[feature].sql

### Objective

Add database schema and data access functions for [feature].

### Skills to Use

- Load: `roo-commander read "[skill-name]"`
- This skill provides: [what it covers]

### Critical Dependencies

**Internal**: Phase [N-1] must be complete (database connection configured)
**External**: [Any external services]

### Tasks

- [ ] Add table definitions to schema
- [ ] Create migration script
- [ ] Implement data access functions (create, read, update, delete)
- [ ] Add TypeScript types
- [ ] Test queries manually

### Verification Criteria

- [ ] Migration runs successfully
- [ ] Schema matches requirements
- [ ] Data access functions return correct types
- [ ] Manual testing shows expected data

### Exit Criteria

Database layer complete and tested, ready for API implementation.

---

## Phase [N+1]: [Feature Name] - API Layer

[... similar structure ...]

---

[... Repeat for all phases ...]
````

### Step 7: Manual Integration Instructions

Since Roo Code can't auto-insert, provide clear instructions:

```
📝 Manual Integration Steps

1. Open docs/IMPLEMENTATION_PHASES.md

2. Find the insertion point (after Phase 3)

3. Copy the new phase templates below

4. Paste after Phase 3

5. Renumber old phases:
   - Old Phase 4 → New Phase 8
   - Old Phase 5 → New Phase 9
   - Update all internal references (dependencies, etc.)

6. Update the Quick Reference table at the top

7. Save the file

New Phase Templates:
[Paste full phase templates here]
```

Provide the complete formatted phase text for copy-paste.

### Step 8: Update SESSION.md

Instruct user to update SESSION.md:

```
📝 Update SESSION.md

Add new phase entries:

## Phase 4: [Feature Name] - Data Layer ⏸️
**Spec**: `docs/IMPLEMENTATION_PHASES.md#phase-4-data-layer`

## Phase 5: [Feature Name] - API Layer ⏸️
**Spec**: `docs/IMPLEMENTATION_PHASES.md#phase-5-api-layer`

[... etc ...]

And renumber existing phases:
- Old Phase 4 → Phase 8
- Old Phase 5 → Phase 9

Update "Current Phase" if needed.
```

### Step 9: Confirm and Provide Next Steps

Output summary:

```
✅ Feature Planning Complete!

New Phases Created:
• Phase [N]: [Feature Name] - Data Layer (2-3h)
• Phase [N+1]: [Feature Name] - API Layer (2-3h)
• Phase [N+2]: [Feature Name] - UI Layer (3-4h)
• Phase [N+3]: [Feature Name] - Integration (1-2h)

Total: 8-12 hours estimated

🚀 Next Steps:

1. Manually insert phases into IMPLEMENTATION_PHASES.md (instructions above)
2. Update SESSION.md with new phase entries
3. Load relevant skills:
   - /load-skill "[skill-name]"
4. Start Phase [N]: [Feature Name] - Data Layer
5. Use /wrap-session after each phase

Ready to start implementation?
```

---

## Phase Template (for copy-paste)

When generating phases, use this exact structure:

```markdown
## Phase [N]: [Feature Name] - [Layer Name]

**Type**: [Infrastructure|API|UI|Feature|Integration]
**Estimated**: [X-Y hours] (~[X-Y minutes] human time)
**Files**: [list files to create/modify]

### Objective

[1-2 sentences describing what this phase accomplishes]

### Skills to Use

- Load: `roo-commander read "[skill-name]"`
- This skill provides: [key topics]

### Critical Dependencies

**Internal**: [what must be complete from previous phases]
**External**: [external services, APIs required]

**Configuration**: [any config files, env vars needed]

### Tasks

- [ ] [Specific task 1]
- [ ] [Specific task 2]
- [ ] [Specific task 3]
- [ ] [Specific task 4]

### Verification Criteria

- [ ] [Testable outcome 1]
- [ ] [Testable outcome 2]
- [ ] [Testable outcome 3]

### Exit Criteria

[What must be complete before next phase]

### Gotchas & Known Issues

**[Potential Issue]**: [Description]
- Solution: [how to prevent/fix]

---
```

---

## Error Handling

**No IMPLEMENTATION_PHASES.md**:
```
❌ IMPLEMENTATION_PHASES.md not found.

This command adds features to existing planned projects.

For new projects: /plan-project

Would you like to create a project plan first? (y/n)
```

**Vague feature description**:
```
⚠️ Need more details to create meaningful phases.

Instead of: "Add search"
Better: "Add full-text search with filters, saved searches, and search history"

Can you provide:
- What exactly will users be able to do?
- What data is being searched?
- Any special requirements (real-time, filters, etc.)?
```

**Feature too large**:
```
⚠️ This feature seems quite large (15+ hours estimated).

Current scope:
- [Component 1]
- [Component 2]
- [Component 3]
- [...]

Suggestion: Break into smaller features
- Feature A: [core functionality] (4-6h)
- Feature B: [advanced functionality] (6-8h)

Plan these separately?
```

---

## Best Practices

### DO

✅ **Analyze existing phases** (understand project structure)
✅ **Insert logically** (respect dependencies)
✅ **Provide complete templates** (ready for copy-paste)
✅ **Explain renumbering** (clear instructions)
✅ **Check for skills** (don't reinvent)
✅ **Break into layers** (data → API → UI → integration)

### DON'T

❌ **Don't skip dependency analysis** (causes errors)
❌ **Don't insert in wrong order** (breaks flow)
❌ **Don't create massive phases** (keep 2-4 hours)
❌ **Don't forget renumbering** (breaks references)
❌ **Don't ignore existing patterns** (stay consistent)

---

## Quick Reference

**Feature breakdown pattern**:
1. Data Layer - Schema, migrations, access functions
2. API Layer - Endpoints, validation, logic
3. UI Layer - Components, state, interactions
4. Integration - Connect pieces, test, error handling

**Insertion strategy**:
- Insert after completed phases
- Before pending phases
- Renumber everything after insertion point

**Required updates**:
1. IMPLEMENTATION_PHASES.md (insert phases, renumber)
2. SESSION.md (add phase entries, renumber)
3. Quick Reference table (update phase count)

---

*This command is part of Roo Commander v9.0.0 - Use after /plan-project for adding features*
