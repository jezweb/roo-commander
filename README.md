# Roo Commander v9.0.0

> Bridge your Claude Code skills to Roo Code with intelligent orchestration

**Roo Commander** is a three-component system that brings Claude Code's 60+ production-tested skills to Roo Code VS Code extension through a CLI tool, custom instructions, and an orchestrator mode.

---

## 🎯 What It Does

Roo Commander makes your Roo Code AI agent **skill-aware**:

1. **Automatic Skill Discovery** - Before implementing features, checks if relevant skills exist
2. **CLI Integration** - List, search, and load skills directly from Roo Code
3. **Orchestrator Mode** - Lightweight mode that delegates to Code/Architect/Debug with skill context
4. **Session Management** - Track progress through phases with /wrap-session and /continue-session
5. **Project Planning** - Generate IMPLEMENTATION_PHASES.md with /plan-project

**Why?** Skills contain production-tested patterns, known issue prevention, and token-efficient documentation. Using skills saves 60-87% tokens vs web search + trial-and-error.

---

## 🚀 Quick Start

### 1. Install CLI

```bash
npm install -g roocommander
```

### 2. Install Roo Commander Mode

**Option A: From Marketplace** (Coming Soon)
- Open Roo Code Marketplace in VS Code
- Search "Roo Commander"
- Click Install

**Option B: Manual Init**
```bash
cd your-project
roocommander init
```

This creates:
- `.roo/rules/` - Custom instructions (skills index, CLI usage, patterns)
- `.roo/rules-roo-commander/` - Mode-specific rules
- `.roo/commands/` - 9 slash commands
- `.roomodes` - Roo Commander mode entry

**⚠️ Important**: After running `roocommander init`, **reload VS Code** (Command Palette → "Developer: Reload Window") to see Roo Commander in the mode selector.

### 3. Use Roo Commander

In Roo Code:

```
/mode roo-commander

"I want to build a chat interface with OpenAI and save conversations to D1"

// Roo Commander will:
// 1. Check skills index for "chat", "openai", "d1"
// 2. Find: ai-sdk-ui, openai-api, cloudflare-d1
// 3. Delegate to Code mode with skill loading instructions
```

---

## 📦 What's Included

### CLI Commands

```bash
roocommander list              # Show all 60+ skills
roocommander search ai         # Search by keyword
roocommander read "skill-name" # Load skill content
roocommander generate-index    # Create skills index
roocommander init              # Set up Roo Commander
```

### Slash Commands (9 total)

**Session Management**:
- `/wrap-session` - Save progress, create git checkpoint
- `/continue-session` - Resume from SESSION.md
- `/list-skills` - Browse available skills
- `/load-skill <name>` - Load specific skill

**Planning**:
- `/explore-idea` - Research and validate project idea
- `/plan-project` - Create IMPLEMENTATION_PHASES.md
- `/plan-feature` - Add feature to existing project

**Release**:
- `/github-release <version>` - Create GitHub release
- `/release <version>` - Complete release checklist

### Roo Commander Mode

Lightweight orchestrator that:
- Analyzes user requests
- Checks `.roo/rules/01-skills-index.md` for relevant skills
- Delegates to Code/Architect/Debug modes with skill instructions
- Tracks completion

**When to use**:
- Starting new features (auto skill discovery)
- Complex multi-step workflows
- Unsure which skill to use

**When to bypass**:
- Simple edits (use Code mode directly)
- Already know which skill (load it manually)

---

## 💡 Example Workflows

### Workflow 1: New Cloudflare Workers Project

```
/mode roo-commander

"Set up a new Cloudflare Workers project with D1 database and Tailwind v4"

// Roo Commander response:
Found 3 relevant skills:
• cloudflare-worker-base: Project scaffolding
• cloudflare-d1: Database setup
• Tailwind v4 + shadcn/ui Stack: Frontend styling

Delegating to Code mode with instructions to load these skills...

[Code mode receives message]:
Task: Scaffold Cloudflare Workers project with D1 and Tailwind v4

Skills to use:
- Run: `roocommander read "cloudflare-worker-base"`
- Run: `roocommander read "Cloudflare D1 Database"`
- Run: `roocommander read "Tailwind v4 + shadcn/ui Stack"`

[Implementation follows skill patterns]
```

### Workflow 2: Adding Authentication

```
/mode code  // Already in Code mode

// Load skill before implementing
/load-skill clerk-auth

"Add Clerk authentication with session storage in D1"

[Code mode uses skill patterns to implement correctly]
```

### Workflow 3: Project Planning

```
/plan-project

// Guided workflow:
Project name: Task Manager
Tech stack: React, Cloudflare Workers, D1
Features: User auth, task CRUD, filtering

// Creates:
• docs/IMPLEMENTATION_PHASES.md (8 phases, 20-24 hours)
• SESSION.md (session tracking)

// Start Phase 1
[Load relevant skills and begin implementation]
```

---

## 🏗️ Architecture

**Three-Component System**:

```
┌─────────────────────────────────────────────────────┐
│ 1. CLI Tool (roocommander)                         │
│    - List/search/read skills                        │
│    - Generate skills index                          │
│    - Initialize project                             │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 2. Custom Instructions (.roo/rules/)               │
│    - 01-skills-index.md (categorized skills)        │
│    - 02-cli-usage.md (CLI command reference)        │
│    - 03-skill-patterns.md (when to check skills)    │
│    - 9 slash commands (.roo/commands/)              │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 3. Roo Commander Mode (.roomodes entry)            │
│    - Orchestrates skill discovery                   │
│    - Delegates to Code/Architect/Debug              │
│    - Workflow tools only (no file access)           │
└─────────────────────────────────────────────────────┘
```

**Data Flow**:

```mermaid
flowchart TB
    A[User: "Add D1 database"] --> B[Roo Commander Mode]
    B --> C[Check .roo/rules/01-skills-index.md]
    C --> D{Match keywords?}
    D -->|Yes| E[Found: cloudflare-d1, drizzle-orm-d1]
    E --> F[Delegate to Code mode]
    F --> G[Include: roocommander read "Cloudflare D1 Database"]
    G --> H[Code mode loads skill]
    H --> I[Implementation using skill patterns]
```

See `docs/ARCHITECTURE.md` for complete system design.

---

## 📚 Documentation

- **[CLI Reference](docs/CLI_REFERENCE.md)** - Complete command documentation
- **[Architecture](docs/ARCHITECTURE.md)** - System design and data flow
- **[Marketplace Guide](docs/MARKETPLACE.md)** - Packaging and submission
- **[Changelog](CHANGELOG.md)** - Version history

---

## 🎨 Skills Available

**60+ Production-Tested Skills** organized by category:

### 🤖 AI & LLM Integration (29 skills)
OpenAI, Claude, Gemini, Vercel AI SDK, ElevenLabs agents, chatbots

### ☁️ Cloudflare Platform (15 skills)
Workers, D1, R2, KV, Durable Objects, Workflows, AI, Vectorize, Queues

### ⚛️ Frontend Stack (11 skills)
React, Next.js, Tailwind v4, shadcn/ui, TanStack Query/Router/Table, Zustand

### 🔐 Authentication (3 skills)
Clerk, Better Auth, Auth.js

### 📝 Forms & Validation (2 skills)
React Hook Form + Zod patterns

### 📊 Data & Scraping (3 skills)
Drizzle ORM, Firecrawl, WordPress plugins

### 📄 Content Management (3 skills)
TinaCMS, Sveltia CMS, Content Collections

### 📋 Project Planning (1 skill)
IMPLEMENTATION_PHASES.md generation

See `.roo/rules/01-skills-index.md` for complete list with descriptions and keywords.

---

## 🔧 CLI Reference

### list

Show all available skills.

```bash
roocommander list              # Compact list
roocommander list --verbose    # With descriptions
roocommander list --source ~/custom/skills  # Custom directory
```

**Output**: Table of skill names, descriptions, keywords

### search

Find skills by keyword.

```bash
roocommander search database
roocommander search cloudflare
roocommander search auth --verbose
```

**Scoring**: Name match > keyword match > description match

### read

Output skill content.

```bash
roocommander read "Cloudflare D1 Database"
roocommander read clerk-auth --raw  # Plain markdown
```

**Fuzzy matching**: "cloudflare d1" matches "Cloudflare D1 Database"

### generate-index

Create categorized skills index.

```bash
roocommander generate-index
roocommander generate-index --output custom/path.md
```

**Output**: `.roo/rules/01-skills-index.md` with 7 categories

### init

Initialize Roo Commander in project.

```bash
roocommander init              # Interactive setup
roocommander init --force      # Reinstall
roocommander init --source ~/custom/skills  # Custom directory
```

**Creates**: Complete `.roo/` structure, skills index, .roomodes entry

See `docs/CLI_REFERENCE.md` for complete documentation.

---

## 🧪 Testing

### Manual Testing Checklist

**CLI Commands**:
- [ ] `roocommander list` shows skills
- [ ] `roocommander search cloudflare` finds 15 skills
- [ ] `roocommander read "Cloudflare D1 Database"` outputs content
- [ ] `roocommander generate-index` creates index file
- [ ] `roocommander init` sets up project

**Slash Commands** (in Roo Code):
- [ ] `/list-skills` runs CLI and formats output
- [ ] `/load-skill "clerk-auth"` loads skill content
- [ ] `/wrap-session` creates git checkpoint
- [ ] `/continue-session` resumes from SESSION.md
- [ ] `/plan-project` generates IMPLEMENTATION_PHASES.md

**Roo Commander Mode**:
- [ ] Mode appears in `/mode` list
- [ ] Skill routing works (user mentions "database" → suggests D1/KV/R2)
- [ ] Delegation includes skill loading commands
- [ ] Completion tracking works

---

## 🛠️ Development

### Setup

```bash
git clone https://github.com/jezweb/roo-commander.git
cd roo-commander
npm install
npm run build
npm link  # Test globally
```

### Project Structure

```
roo-commander/
├── src/
│   ├── commands/         # CLI command handlers
│   │   ├── list.ts
│   │   ├── read.ts
│   │   ├── search.ts
│   │   ├── generate-index.ts
│   │   ├── sync-index.ts
│   │   └── init.ts
│   ├── parser/           # Skill YAML parsing
│   │   └── skill-parser.ts
│   ├── generator/        # Index generation
│   │   └── index-generator.ts
│   ├── installer/        # Template installation
│   │   ├── github-cloner.ts
│   │   └── template-installer.ts
│   ├── templates/        # Template files
│   │   ├── .roomodes-entry.yaml
│   │   ├── rules/        # 02-cli-usage.md, 03-skill-patterns.md
│   │   ├── rules-roo-commander/  # Mode rules (3 files)
│   │   └── commands/     # Slash commands (9 files)
│   ├── types.ts          # TypeScript types
│   ├── cli.ts            # CLI entry point
│   └── index.ts          # Package entry
├── docs/                 # Documentation
├── package.json
└── tsconfig.json
```

---

## 📝 License

MIT © 2025 Jeremy Dawes / Jezweb

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Add tests if applicable
5. Submit PR with description

---

## 🔗 Links

- **GitHub**: https://github.com/jezweb/roo-commander
- **npm**: https://www.npmjs.com/package/roocommander
- **Skills Repository**: https://github.com/jezweb/claude-skills
- **Roo Code**: [VS Code Extension]
- **Claude Code**: https://docs.claude.com/claude-code

---

## 📞 Support

- **Issues**: https://github.com/jezweb/roo-commander/issues
- **Discussions**: https://github.com/jezweb/roo-commander/discussions
- **Email**: jeremy@jezweb.net

---

## 🎉 Acknowledgments

- **Anthropic** - Claude Code and skills ecosystem
- **Roo Code Team** - VS Code extension
- **Jezweb Skills** - 60+ production-tested skills

---

**Version**: 9.0.4 (Fixed missing whenToUse field and invalid customInstructions)
**Last Updated**: 2025-11-11
