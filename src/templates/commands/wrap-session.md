---
description: Update SESSION.md and create git checkpoint before ending session
argument-hint: none
workflow-stage: execution
part-of: project-workflow lifecycle
---

# Wrap Session

Save current session progress to SESSION.md and create git checkpoint before clearing context or ending work.

---

## Your Task

Follow these steps to update SESSION.md and create a checkpoint commit.

### Step 1: Read Current SESSION.md

Use Read tool to load SESSION.md from project root.

Extract:
- Current phase number and name
- Current stage (Implementation/Verification/Debugging)
- Progress for current phase (completed and pending tasks)
- Known issues
- Last checkpoint hash

### Step 2: Determine What to Update

Assess what has been accomplished since last checkpoint:

**If phase is complete**:
- Move phase from "In Progress" to "Completed"
- Add completion date
- Add summary of what was accomplished
- List all files created/modified
- Add verification results (what was tested)

**If phase is in progress**:
- Update progress checklist (mark completed tasks with ✅)
- Update "Current Stage" if changed
- Add/update known issues if any
- Update key files list if needed

**If blocked or paused**:
- Document the blocker
- Explain what's needed to unblock
- Update status to 🚫 (blocked)

### Step 3: Define Next Action

Write a concrete, specific "Next Action" for resuming work.

**Requirements**:
- File path (where work continues)
- Line number (if applicable)
- Specific task (what needs to be done)

**Good examples**:
- "Implement PATCH /api/tasks/:id in src/routes/tasks.ts:47, handle validation and ownership check"
- "Create Chat.tsx component in src/components/ using useChat hook from ai-sdk-ui skill"
- "Debug TypeError in src/lib/database.ts:45, check D1 binding configuration"

**Bad examples** (too vague):
- "Continue working on API"
- "Fix the bug"
- "Add more features"

### Step 4: Update SESSION.md

Use Edit tool to update SESSION.md with progress since last checkpoint.

**What to update**:
1. Current Stage (if changed)
2. Progress section for current phase (mark completed tasks)
3. Known Issues (add/remove as needed)
4. Next Action (concrete and specific)
5. Key Files (add new files if created)

**If phase complete**:
1. Change phase emoji from 🔄 to ✅
2. Add completion date
3. Add summary paragraph
4. Add "Files Created" or "Files Modified" list
5. Add verification results
6. Move to next phase (change "Current Phase" at top)

### Step 5: Create Git Checkpoint

Use Bash tool to create checkpoint commit with structured message.

**Commit message format**:

```
checkpoint: Phase [N] [Status] - [Brief Description]

Phase: [N] - [Phase Name]
Status: [Complete/In Progress/Paused/Blocked]
Session: [What was accomplished this session]

Files Changed:
- path/to/file.ts (what changed)
- path/to/file.md (what changed)

[If phase complete:]
Verification:
- ✅ [verification item 1]
- ✅ [verification item 2]

Next: [Concrete next action or next phase]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Examples**:

**Phase complete**:
```bash
git add -A && git commit -m "$(cat <<'EOF'
checkpoint: Phase 3 Complete - Tasks API

Phase: 3 - Tasks API
Status: Complete
Session: Completed all CRUD endpoints and verified functionality

Files Changed:
- src/routes/tasks.ts (all CRUD operations)
- src/lib/schemas.ts (task validation)
- src/middleware/validate.ts (validation middleware)

Verification:
- ✅ GET /api/tasks returns 200
- ✅ POST creates task with validation
- ✅ PATCH updates existing task
- ✅ DELETE removes task
- ✅ Invalid data returns 400

Next: Phase 4 - Start building Task List UI component

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

**Phase in progress**:
```bash
git add -A && git commit -m "$(cat <<'EOF'
checkpoint: Phase 3 In Progress - GET and POST endpoints

Phase: 3 - Tasks API
Status: In Progress
Session: Implemented GET and POST endpoints, need PATCH/DELETE

Files Changed:
- src/routes/tasks.ts (GET, POST endpoints)
- src/lib/schemas.ts (task schema)

Next: Implement PATCH /api/tasks/:id in src/routes/tasks.ts:47

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Step 6: Update SESSION.md with Checkpoint Hash

After commit succeeds:
1. Run `git log --oneline -1` to get commit hash
2. Use Edit tool to update "Last Checkpoint" in SESSION.md with new hash and date
3. Commit this update: `git add SESSION.md && git commit -m "Update SESSION.md with checkpoint hash"`

### Step 7: Confirm Success

Output summary to user:

```
✅ Session wrapped successfully!

Checkpoint: [commit hash] ([date])
Phase: [N] - [Name] ([Status])
Next Action: [specific next action]

Progress saved. You can now:
- Clear context (/compact)
- End session
- Continue to next task
```

---

## Error Handling

**SESSION.md doesn't exist**:
- Output: "❌ No SESSION.md found. This command requires SESSION.md for session tracking."
- Suggest: "Create SESSION.md manually or use project-planning to set up session management."
- Stop here

**No changes to commit**:
- Output: "⚠️ No changes detected since last checkpoint."
- Ask: "Would you like to update SESSION.md anyway? (y/n)"
- If yes: Update SESSION.md only (no git commit)
- If no: "Session state unchanged. No action taken."

**Git commit fails**:
- Output: "❌ Git commit failed: [error message]"
- Suggest: "Check git status and resolve any issues."
- SESSION.md changes are saved but not committed

**Vague Next Action**:
- If Next Action is missing or too vague, prompt user:
  ```
  ⚠️ Next Action needs to be more specific.

  Current: "[vague action]"

  Please provide:
  - File path: [which file]
  - Line: [approximate line number]
  - Task: [specific action]

  What should the Next Action be?
  ```

---

## Best Practices

### DO

✅ **Update SESSION.md with concrete progress** (specific tasks completed)
✅ **Make Next Action specific** (file + line + task)
✅ **List files changed** in commit message
✅ **Add verification results** when phase completes
✅ **Commit all changes** before ending session
✅ **Update checkpoint hash** in SESSION.md after commit

### DON'T

❌ **Don't write vague Next Actions** ("continue working on X")
❌ **Don't skip git commit** (checkpoints are essential)
❌ **Don't forget to update Stage** if moved from Implementation → Verification → Debugging
❌ **Don't commit broken code** (fix errors first or document blockers)
❌ **Don't batch multiple phases** in one checkpoint (one phase per commit)

---

## Quick Reference

**Typical workflow**:
1. Read SESSION.md
2. Assess progress (what was done?)
3. Update SESSION.md (mark tasks complete, update Next Action)
4. Create git checkpoint with structured message
5. Update SESSION.md with checkpoint hash
6. Confirm to user

**Commit message structure**:
- First line: "checkpoint: Phase [N] [Status] - [Description]"
- Body: Phase, Status, Session, Files Changed, Verification (if complete), Next

**Next Action format**:
- "Do [specific task] in [file]:[line]"
- Must be actionable when resuming

---

*This command is part of Roo Commander v9.0.0 - Use /continue-session to resume work after wrapping*
