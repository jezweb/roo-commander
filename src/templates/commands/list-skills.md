---
description: Show all available skills from skills directory
argument-hint: none
---

# List Skills

Display all available skills with descriptions and keywords using the roo-commander CLI.

---

## Your Task

Use the roo-commander CLI to list all available skills and present them to the user in a readable format.

### Step 1: Check CLI Installation

Verify roo-commander is installed:

```bash
which roo-commander
```

**If not found**:
- Output: "❌ roo-commander CLI not installed."
- Instruct user: "Install with: `npm install -g @jezweb/roo-commander`"
- Stop here

**If found**:
- Continue to Step 2

### Step 2: Run List Command

Execute the roo-commander list command:

```bash
roo-commander list --verbose
```

**Command options**:
- `--verbose` or `-v`: Show full descriptions and details
- `--source <path>`: Use custom skills directory (if not ~/.claude/skills/)

**Expected output format**:
```
📚 Available Skills (62)
Source: /home/user/.claude/skills

  skill-name
    Brief description...
    Keywords: keyword1, keyword2, keyword3
    📄 N template files
```

### Step 3: Capture and Format Output

Read the command output and present it to the user.

**Format for user**:
```
📚 Available Skills ([total count])

Skills are organized by category in the skills index.
Use /load-skill [name] to load a specific skill into context.

[Output from roo-commander list --verbose]

───────────────────────────────────────────────

💡 Tip: Use roo-commander search <keyword> to find skills by technology:
   - roo-commander search cloudflare
   - roo-commander search authentication
   - roo-commander search chat

Or read the full skills index: .roo/rules/01-skills-index.md
```

### Step 4: Offer Quick Actions

After displaying list, ask user:

```
What would you like to do?

1. Load a specific skill (I'll use /load-skill)
2. Search for skills by keyword
3. Read the full skills index (.roo/rules/01-skills-index.md)
4. Nothing - just wanted to see what's available

Your choice (1/2/3/4):
```

**If choice 1**:
- Ask: "Which skill would you like to load? (Enter name)"
- When user provides name, use /load-skill command or run `roo-commander read <skill>`

**If choice 2**:
- Ask: "What keyword should I search for?"
- Run: `roo-commander search <keyword>`
- Display results

**If choice 3**:
- Read: `.roo/rules/01-skills-index.md`
- Display categorized index

**If choice 4**:
- Output: "Skills list displayed. Use /load-skill when ready to use one."

---

## Error Handling

**CLI not installed**:
```
❌ roo-commander CLI not found.

Install it with:
npm install -g @jezweb/roo-commander

Or use npx (no installation):
npx @jezweb/roo-commander list
```

**Skills directory not found**:
```
❌ Skills directory not found at ~/.claude/skills/

This means:
1. You haven't set up skills yet, OR
2. Skills are in a custom location

If custom location, run:
roo-commander list --source /path/to/skills
```

**Empty output**:
```
⚠️ No skills found in skills directory.

Check:
1. Does ~/.claude/skills/ exist?
2. Does it contain skill folders with SKILL.md files?
3. Are folder permissions correct?

Debug with:
ls -la ~/.claude/skills/
find ~/.claude/skills/ -name "SKILL.md"
```

**Command fails**:
```
❌ roo-commander list command failed: [error message]

Try:
1. Check installation: which roo-commander
2. Check version: roo-commander --version
3. Check skills directory: ls ~/.claude/skills/
```

---

## Best Practices

### DO

✅ **Always check CLI installation first** (prevents confusing errors)
✅ **Use --verbose flag** (shows full information)
✅ **Present output clearly** (formatted for readability)
✅ **Offer next actions** (load skill, search, read index)
✅ **Include usage tips** (how to search, how to load)

### DON'T

❌ **Don't assume CLI is installed** (verify first)
❌ **Don't skip error handling** (skills directory might not exist)
❌ **Don't just dump raw output** (format for user)
❌ **Don't forget to mention alternatives** (skills index, search)

---

## Quick Reference

**Command**:
```bash
roo-commander list --verbose
```

**Alternative with custom path**:
```bash
roo-commander list --source /path/to/skills --verbose
```

**Follow-up actions**:
- Load skill: `/load-skill [name]` or `roo-commander read [name]`
- Search: `roo-commander search [keyword]`
- Read index: `.roo/rules/01-skills-index.md`

---

*This command is part of Roo Commander v9.0.0 - Use /load-skill to load a specific skill after listing*
