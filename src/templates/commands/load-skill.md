---
description: Load a specific skill into context
argument-hint: <skill-name>
---

# Load Skill

Load a specific skill's full content into context for implementation using the roocommander CLI.

---

## Your Task

Use the roocommander CLI to load a skill's SKILL.md content and parse it for use in implementation.

### Step 1: Parse Skill Name

Extract skill name from user command.

**Command format**: `/load-skill <skill-name>`

**Examples**:
- `/load-skill "Cloudflare D1 Database"`
- `/load-skill clerk-auth`
- `/load-skill tailwind-v4-shadcn`

**If no skill name provided**:
- Output: "❌ Please provide a skill name."
- Suggest: "Use /list-skills to see available skills."
- Example: `/load-skill "Cloudflare D1 Database"`
- Stop here

### Step 2: Check CLI Installation

Verify roocommander is installed:

```bash
which roocommander
```

**If not found**:
- Output: "❌ roocommander CLI not installed."
- Instruct: "Install with: `npm install -g @jezweb/roocommander`"
- Stop here

**If found**:
- Continue to Step 3

### Step 3: Run Read Command

Execute roocommander read command:

```bash
roocommander read "<skill-name>"
```

**Command options**:
- `--raw`: Output plain markdown (no formatting)
- `--source <path>`: Use custom skills directory

**Fuzzy matching**:
- CLI supports case-insensitive partial matching
- "cloudflare d1" matches "Cloudflare D1 Database"
- "tailwind" matches "Tailwind v4 + shadcn/ui Stack"

**Expected output**: Full SKILL.md markdown content

### Step 4: Parse Skill Content

Read the command output and extract key sections:

**Look for**:
- **Overview**: What the skill covers
- **Setup**: Installation and configuration
- **Patterns**: Common usage patterns
- **Templates**: Available template files
- **Gotchas**: Known issues and fixes
- **Examples**: Working code examples
- **Documentation**: Official doc links

### Step 5: Present Skill to User

Format the loaded skill for user:

```
📄 Loaded Skill: [Skill Name]

[Full SKILL.md content from CLI]

───────────────────────────────────────────────

✅ Skill loaded into context.

Key topics covered:
• [Topic 1]
• [Topic 2]
• [Topic 3]

Ready to implement using this skill's patterns.
```

### Step 6: Offer Implementation Options

After loading, ask user:

```
What would you like to do with this skill?

1. Start implementing - use skill patterns for current task
2. Review templates - list available template files
3. Search for specific topic within skill
4. Load another skill - combine with this one

Your choice (1/2/3/4):
```

**If choice 1 (Implement)**:
- Ask: "What would you like to implement using this skill?"
- Use skill patterns in implementation
- Reference specific examples from skill

**If choice 2 (Templates)**:
- Parse skill metadata for templates list
- Output: "Available templates: [list template files]"
- Offer to show template content if needed

**If choice 3 (Search topic)**:
- Ask: "What topic are you looking for?"
- Search skill content for keyword
- Show relevant sections

**If choice 4 (Load another)**:
- Ask: "Which additional skill should I load?"
- Run `/load-skill` again for second skill
- Keep both in context for combined implementation

---

## Error Handling

**CLI not installed**:
```
❌ roocommander CLI not found.

Install it with:
npm install -g @jezweb/roocommander

Or use npx (no installation):
npx @jezweb/roocommander read "<skill-name>"
```

**Skill not found**:
```
❌ Skill "[skill-name]" not found.

This might mean:
1. Skill name is incorrect (check spelling)
2. Skill doesn't exist in skills directory

Try:
1. List all skills: /list-skills
2. Search for similar: roocommander search <keyword>
3. Check skills index: .roo/rules/01-skills-index.md

Similar skills found:
• [similar-skill-1]
• [similar-skill-2]
```

**Multiple matches** (CLI handles fuzzy matching):
- CLI will match closest name automatically
- If ambiguous, suggest being more specific
- Example: "tailwind" might match multiple, use "tailwind v4" instead

**Skills directory not found**:
```
❌ Skills directory not found at ~/.claude/skills/

Setup skills:
1. Clone: git clone https://github.com/jezweb/claude-skills ~/.claude/skills
2. Or specify custom path: roocommander read "<skill>" --source /path/to/skills
```

**Command fails**:
```
❌ roocommander read command failed: [error message]

Debug:
1. Check installation: which roocommander
2. Check version: roocommander --version
3. Try list command: roocommander list
4. Check skill exists: ls ~/.claude/skills/[skill-name]/
```

---

## Multi-Skill Loading

Some implementations require multiple skills working together.

**Common combinations**:

**Database + ORM**:
```
/load-skill "Cloudflare D1 Database"
/load-skill drizzle-orm-d1
```

**Auth + Database**:
```
/load-skill clerk-auth
/load-skill "Cloudflare D1 Database"
```

**Chat Interface + AI + Database**:
```
/load-skill ai-sdk-ui
/load-skill openai-api
/load-skill "Cloudflare D1 Database"
```

**Frontend Setup**:
```
/load-skill "Tailwind v4 + shadcn/ui Stack"
/load-skill react-hook-form-zod
```

**Strategy**: Load all related skills before starting implementation. They work together and reference each other.

---

## Best Practices

### DO

✅ **Always verify CLI is installed** (prevents errors)
✅ **Use exact skill names when possible** (faster matching)
✅ **Load related skills together** (D1 + Drizzle, Auth + DB)
✅ **Parse skill structure** (find setup, patterns, gotchas)
✅ **Reference specific sections** during implementation
✅ **Keep skill in context** while implementing feature

### DON'T

❌ **Don't guess skill names** (use /list-skills or index)
❌ **Don't skip error handling** (skill might not exist)
❌ **Don't load too many skills** (causes context bloat - only load what's needed)
❌ **Don't ignore gotchas section** (prevents known errors)
❌ **Don't forget templates** (ready-to-use code files)

---

## Quick Reference

**Basic usage**:
```bash
roocommander read "<skill-name>"
```

**With custom path**:
```bash
roocommander read "<skill-name>" --source /path/to/skills
```

**Raw output (no formatting)**:
```bash
roocommander read "<skill-name>" --raw
```

**Common skill names**:
- "Cloudflare D1 Database"
- "cloudflare-worker-base"
- "clerk-auth"
- "Tailwind v4 + shadcn/ui Stack"
- "openai-api"
- "ai-sdk-ui"
- "drizzle-orm-d1"

**Finding skills**:
- List all: `/list-skills`
- Search: `roocommander search <keyword>`
- Index: `.roo/rules/01-skills-index.md`

---

*This command is part of Roo Commander v9.0.0 - Use /list-skills to browse available skills first*
