# Changelog

All notable changes to Roo Commander will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [9.1.0] - 2025-11-13

### ✨ Features

**Global Installation Support (MAJOR FEATURE)**

- **New Default**: `roocommander init` now installs globally by default - mode appears in ALL projects
- **Project Mode**: Use `--project` flag for project-scoped installation (old behavior)
- **Crown Emoji**: Changed from 🎯 to 👑 for Roo Commander mode

**Installation Modes**:

```bash
# Global (default) - Install once, use everywhere
roocommander init
→ Writes to ~/.config/Code/.../custom_modes.yaml
→ Copies rules to ~/.roo/rules-roo-commander/
→ Mode appears in ALL Roo Code projects

# Project-scoped - Install per project
roocommander init --project
→ Writes to ./.roomodes in current directory
→ Copies rules to ./.roo/
→ Mode appears only in this project
```

**Why Global?**
- Install once, available everywhere
- No need to run `init` in every project
- Cleaner project directories (no `.roomodes` file unless needed)
- Can still override per-project with `--project` flag

**Changes**:
- `src/commands/init.ts`: Complete rewrite to support both global and project modes
- `src/installer/global-installer.ts`: New module with cross-platform global installation
- `src/cli.ts`: Added `--project` flag to init command
- `src/templates/.roomodes-entry.yaml`: Changed emoji from 🎯 to 👑

**Migration**:
```bash
# Upgrade CLI
npm install -g roocommander@latest

# Install globally (recommended)
roocommander init

# Reload VS Code
# Cmd/Ctrl+Shift+P → Developer: Reload Window

# Mode now appears in all projects!
```

**Breaking Changes**: None - `--project` flag preserves old behavior

---

## [9.0.4] - 2025-11-11

### 🐛 Fixed

**CRITICAL: Mode Still Not Appearing (Final Fix)**

- **Issue**: Two remaining schema violations preventing mode from appearing in Roo Code extension
- **Impact**: Mode would not load even after v9.0.3 emoji fix
- **Root Causes**:
  1. **Missing `whenToUse` field** - Required for Orchestrator mode to know when to suggest the mode
  2. **Invalid `customInstructions` format** - Was array of file paths, should be inline string or omitted entirely

**What Was Wrong**:
```yaml
# ❌ INVALID (v9.0.0-9.0.3)
customModes:
  - slug: roo-commander
    name: 🎯 Roo Commander
    # Missing: whenToUse field
    customInstructions:  # ❌ File paths not supported
      - .roo/rules/01-skills-index.md
      - .roo/rules/02-cli-usage.md

# ✅ VALID (v9.0.4)
customModes:
  - slug: roo-commander
    name: 🎯 Roo Commander
    whenToUse: Use this mode when starting new features...  # ✅ Added
    # customInstructions removed - using .roo/rules-roo-commander/ files instead
```

**Why This Matters**:
- `whenToUse` tells Roo Code's Orchestrator mode when to suggest this mode
- `customInstructions` expects inline content, NOT file paths
- File-based instructions work via `.roo/rules-roo-commander/` directory (loaded automatically)

**Changes**:
- `src/templates/.roomodes-entry.yaml`: Added `whenToUse` field, removed invalid `customInstructions` array
- All mode-specific instructions remain in `.roo/rules-roo-commander/` (correct approach)

**Migration**: All users MUST upgrade and reinstall:
```bash
npm install -g roocommander@latest
cd your-project
roocommander init --force
# Reload VS Code: Cmd/Ctrl+Shift+P → Developer: Reload Window
```

**Verification**: Mode should now appear in `/mode` selector after VS Code reload.

---

## [9.0.3] - 2025-11-10

### 🐛 Fixed

**CRITICAL: Mode Not Appearing in Roo Code Extension**

- **Issue**: `.roomodes` template had invalid `emoji` field causing Roo Code to reject the mode
- **Impact**: Mode would not appear in mode selector even after correct installation and VS Code reload
- **Root Cause**: Template used non-existent `emoji:` property instead of including emoji in `name` field
- **Fix**: Removed `emoji: 🎯` line and changed `name: Roo Commander` to `name: 🎯 Roo Commander`

**What Was Wrong**:
```yaml
# ❌ INVALID (v9.0.0-9.0.2)
- slug: roo-commander
  name: Roo Commander
  emoji: 🎯  # <-- Not a valid Roo Code property!

# ✅ VALID (v9.0.3)
- slug: roo-commander
  name: 🎯 Roo Commander  # Emoji in name field
```

**Why This Matters**:
- Roo Code extension parses `.roomodes` and rejects modes with invalid properties
- Invalid `emoji` field caused silent failure - no error message, mode just didn't load
- This affected ALL users in v9.0.0, v9.0.1, and v9.0.2

**Changes**:
- `src/templates/.roomodes-entry.yaml`: Removed `emoji:` field (line 15), added emoji to `name` field (line 14)

**Migration**: All users MUST upgrade and reinstall:
```bash
npm install -g roocommander@latest
cd your-project
roocommander init --force
# Reload VS Code: Cmd/Ctrl+Shift+P → Developer: Reload Window
```

**Manual Fix** (for users who can't wait for upgrade):
1. Edit `.roomodes` in your project root
2. Find: `name: Roo Commander` and `emoji: 🎯`
3. Change to: `name: 🎯 Roo Commander` (remove the emoji line)
4. Save and reload VS Code

---

## [9.0.2] - 2025-11-10

### 🐛 Fixed

**Critical Fix**: Invalid `groups` value in .roomodes template

- **Issue**: Template used `groups: [workflow]` which is NOT a valid Roo Code tool group
- **Impact**: Mode may not load correctly in Roo Code extension or fail silently
- **Root Cause**: Used non-existent "workflow" group instead of official values
- **Fix**: Changed to `groups: [read, mcp]` (allows reading skills index and MCP access)
- **Valid Groups**: `read`, `edit`, `browser`, `command`, `mcp` (per official Roo Code docs)

**Documentation Improvements**:
- Fixed CLI command name in 3 locations (changed hyphenated `roo-commander` to `roocommander`)
  - `src/installer/github-cloner.ts:110` - Help text
  - `src/cli.ts:104` - Error message
  - `src/commands/init.ts:40` - Reinstall message
- Added prominent VS Code reload warning to init output (yellow warning + first step)
- Updated README version footer to 9.0.2

**Changes**:
- `src/templates/.roomodes-entry.yaml`: Changed `groups: [workflow]` → `groups: [read, mcp]`
- `src/commands/init.ts`: Added reload VS Code warning in output
- `src/installer/github-cloner.ts`: Fixed command name
- `src/cli.ts`: Fixed command name
- `README.md`: Updated version footer

**Why This Matters**:
- Invalid groups value could cause mode to be rejected by Roo Code extension
- Users won't see mode if they don't reload VS Code (root cause of v9.0.0/9.0.1 confusion)
- Wrong CLI command names cause copy/paste errors

**Migration**: Users should upgrade immediately:
```bash
npm install -g roocommander@latest
roocommander init --force
# Reload VS Code
```

---

## [9.0.1] - 2025-11-10

### 🐛 Fixed

**Critical Bug**: Roo Commander mode not appearing in VS Code Roo Code extension

- **Issue**: `.roomodes` file created by `roocommander init` had invalid YAML structure (bare array instead of `customModes: [array]`)
- **Impact**: Roo Code extension couldn't parse `.roomodes`, so custom mode never loaded in mode selector
- **Root Cause**: Template file (`src/templates/.roomodes-entry.yaml`) was missing `customModes:` wrapper key
- **Fix**:
  - Updated template to use proper `customModes: [array]` structure (line 12)
  - Updated installer parsing logic to handle `customModes` wrapper (line 210-217)
  - Updated merging logic to preserve `customModes` structure (line 223-266)
  - Added validation to ensure `customModes` key exists and is an array

**Changes**:
- `src/templates/.roomodes-entry.yaml`: Added `customModes:` wrapper, indented mode definition
- `src/installer/template-installer.ts`: Fixed parsing/merging to handle wrapped structure
- `README.md`: Added note about reloading VS Code after `roocommander init`

**Migration**: Users who ran `roocommander init` with v9.0.0 should:
1. Upgrade: `npm install -g roocommander@latest`
2. Reinstall: `roocommander init --force` (overwrites broken `.roomodes`)
3. Reload VS Code: Command Palette → "Developer: Reload Window"

---

## [9.0.0] - 2025-11-09

**Complete rebuild** for Roo Code VS Code extension integration.

### ⚠️ Breaking Changes

**Version 9.0.0 is a complete rewrite** and is **NOT compatible** with v0.1.x or v8.1 or earlier.

- **Package name change**: Previously published as `roocommander` v0.1.x (incomplete prototype), now republished with complete rebuild
- **New Target**: Built for Roo Code VS Code extension (not Claude Code CLI)
- **Architecture Change**: Three-component system (CLI + Custom Instructions + Mode)
- **No Backward Compatibility**: Skills, commands, and structure completely redesigned from v0.1.x

**Migration from v0.1.x**: Not supported. v0.1.x was an incomplete prototype. v9.0.0 is a production-ready complete rebuild for a different platform (Roo Code).

**Migration from v8.1**: Not supported. This is a new product for a different platform.

---

### ✨ Added

#### CLI Tool (`@jezweb/roo-commander`)

**Commands**:
- `list` - Display all available skills (compact or verbose)
- `read <skill-name>` - Output skill content with fuzzy matching
- `search <keyword>` - Search skills by keyword with relevance scoring
- `generate-index` - Create categorized skills index markdown
- `sync-index` - Alias for generate-index
- `init` - Initialize Roo Commander in project (complete setup)

**Features**:
- Fuzzy skill name matching ("cloudflare d1" → "Cloudflare D1 Database")
- Keyword-based search with scoring (name > keyword > description)
- Categorized index generation (7 categories: AI, Cloudflare, Frontend, Auth, Forms, Data, CMS, Planning, Other)
- GitHub skills repository cloning (`git clone --depth 1` for speed)
- Template installation (.roo/ directory structure)
- .roomodes file merging (preserves existing modes)
- Idempotent operations (safe to run multiple times)
- Progress spinners for long operations (ora)
- Colored output (chalk)

#### Custom Instructions

**Files Created by `roo-commander init`**:
- `.roo/rules/01-skills-index.md` - Categorized skills index (auto-generated)
- `.roo/rules/02-cli-usage.md` - CLI command reference (341 lines)
- `.roo/rules/03-skill-patterns.md` - When and how to use skills (408 lines)

**Content**:
- Complete CLI usage guide for AI agents
- Skill discovery workflow (when to check, how to load)
- Decision trees (skills vs manual implementation)
- Anti-patterns to avoid

#### Slash Commands (9 Total)

**Session Management**:
- `/wrap-session` - Update SESSION.md and create git checkpoint (272 lines)
- `/continue-session` - Resume from SESSION.md after context clear (312 lines)
- `/list-skills` - Show available skills via CLI (200 lines)
- `/load-skill <name>` - Load specific skill into context (286 lines)

**Planning**:
- `/explore-idea` - Research and validate project idea (361 lines)
- `/plan-project` - Create IMPLEMENTATION_PHASES.md (497 lines)
- `/plan-feature` - Plan feature addition to existing project (470 lines)

**Release**:
- `/github-release <version>` - Create GitHub release (437 lines)
- `/release <version>` - Complete release checklist (527 lines)

**Features**:
- YAML frontmatter (description + argument-hint)
- Step-by-step instructions for AI agents
- Manual workflows (no automation, user approval required)
- Comprehensive error handling
- Markdown formatting with code blocks

#### Roo Commander Mode

**Mode Configuration** (`.roomodes` entry):
- Slug: `roo-commander`
- Tool groups: `workflow` only (no read/edit/command access)
- Forces delegation pattern (orchestrator, not executor)

**Custom Instructions** (`.roo/rules-roo-commander/`):
- `00-core-identity.md` - Role definition and responsibilities (343 lines)
- `01-orchestration.md` - Delegation patterns and message templates (598 lines)
- `02-skill-routing.md` - Keyword-based skill discovery (504 lines)

**Features**:
- Automatic skill discovery before implementation
- Keyword matching (40+ technologies mapped to skills)
- Delegation to Code/Architect/Debug modes with complete context
- Multi-skill coordination patterns (D1+Drizzle, Auth+DB, Chat+AI+DB)
- Decision trees for new projects, features, and debugging

#### Skill Parser

**Features**:
- YAML frontmatter parsing (name, description, keywords, technologies, category)
- Template file discovery
- Graceful error handling (skips malformed skills, logs warnings)
- Broken symlink handling
- Support for 60+ skills

**Validation**:
- Required fields check (name, description, keywords)
- Type validation (strings, arrays)
- Template file existence verification

#### Index Generator

**Features**:
- Skill categorization by domain (AI, Cloudflare, Frontend, etc.)
- Keyword matching for auto-categorization
- Markdown generation with emoji icons
- Usage instructions included in index
- Category summary statistics

**Categories** (7 total):
- 🤖 AI & LLM Integration (29 skills)
- ☁️ Cloudflare Platform (15 skills)
- ⚛️ Frontend Stack (11 skills)
- 🔐 Authentication (3 skills)
- 📝 Forms & Validation (2 skills)
- 📊 Data & Scraping (3 skills)
- 📄 Content Management (3 skills)
- 📋 Project Planning (1 skill)

#### Template Installer

**Features**:
- Directory structure creation (.roo/rules, .roo/rules-roo-commander, .roo/commands)
- Recursive file copying
- .roomodes file merging (YAML parse/modify/write)
- Idempotent operation (checks if already installed)
- Force reinstall option

**Files Installed** (15 total):
- 2 custom instruction files (.roo/rules/)
- 3 mode rule files (.roo/rules-roo-commander/)
- 9 slash command files (.roo/commands/)
- 1 .roomodes entry (merged)

#### GitHub Cloner

**Features**:
- Skills repository cloning from GitHub
- `--depth 1` for fast clone (only latest commit)
- Skills directory validation (checks for SKILL.md files)
- User permission prompt before cloning
- Error handling (missing git, network issues, permissions)

---

### 🔧 Changed

**Everything**. Version 9.0.0 is a complete rewrite for Roo Code integration.

**Architecture**:
- **Old (v8.1)**: Single CLI tool for Claude Code
- **New (v9.0)**: Three-component system (CLI + Custom Instructions + Mode) for Roo Code

**Target Platform**:
- **Old**: Claude Code CLI (desktop application)
- **New**: Roo Code VS Code Extension (web-based IDE)

**Skills Source**:
- **Old**: Bundled with CLI
- **New**: Cloned from GitHub (jezweb/claude-skills) or custom directory

**Command Structure**:
- **Old**: Monolithic command handlers
- **New**: Modular commands with shared utilities

---

### 📚 Documentation

**Added**:
- `README.md` - Complete project overview (450+ lines)
- `CHANGELOG.md` - This file
- `docs/ARCHITECTURE.md` - System design (planned)
- `docs/CLI_REFERENCE.md` - Complete CLI documentation (planned)
- `docs/MARKETPLACE.md` - Packaging and submission guide (planned)

**Updated**:
- `docs/IMPLEMENTATION_PHASES.md` - 12 phases for v9.0 development
- `docs/PROJECT_BRIEF.md` - Complete project specification
- `SESSION.md` - Session tracking for phased development

---

### 🐛 Fixed

Not applicable (new project, no bugs from previous version).

---

### 🗑️ Removed

**From v8.1**:
- Claude Code-specific features (TodoWrite, Explore subagent)
- Bundled skills (now cloned from GitHub)
- Automation features (all workflows manual with user approval)
- Old command structure

---

### 🔒 Security

- Skills cloned from GitHub (not bundled, always latest)
- No secrets embedded in code
- User approval required for all file operations
- Idempotent operations (safe to run multiple times)

---

### 📦 Dependencies

**Production**:
- `commander` (^13.0.0) - CLI framework
- `chalk` (^5.3.0) - Terminal colors
- `ora` (^8.1.1) - Progress spinners
- `gray-matter` (^4.0.3) - YAML frontmatter parsing
- `fs-extra` (^11.2.0) - File operations
- `yaml` (^2.6.1) - YAML parsing for .roomodes

**Development**:
- `typescript` (^5.7.2)
- `@types/node` (^22.10.2)
- `@types/fs-extra` (^11.0.4)

---

## [8.1.0] - 2024-XX-XX (Legacy)

Last version for Claude Code CLI. No longer maintained.

See git history for v8.1 features.

---

## Version History

- **9.0.0** (2025-11-09) - Complete rebuild for Roo Code integration
- **0.1.17** (2025-05-05) - Last prototype version (deprecated, incomplete)
- **8.1.0** (2024-XX-XX) - Last Claude Code version (deprecated)

---

## Migration Guides

### From v0.1.x to v9.0

**Not supported**. v0.1.x was an incomplete prototype. v9.0.0 is a production-ready complete rebuild.

**Recommendation**: Upgrade to v9.0.0:
1. Uninstall old version: `npm uninstall -g roocommander`
2. Install new version: `npm install -g roocommander`
3. Run: `roocommander init` in your project
4. Install Roo Commander mode from marketplace (or use manual init)

### From v8.1 to v9.0

**Not supported**. Version 9.0.0 is a complete rewrite for a different platform (Roo Code instead of Claude Code).

**Recommendation**: Start fresh with v9.0.0:
1. Uninstall v8.1: `npm uninstall -g roo-commander`
2. Install v9.0: `npm install -g roocommander`
3. Run: `roocommander init` in your project
4. Install Roo Commander mode from marketplace

---

## Upcoming

### [9.1.0] - Planned

**Enhancements**:
- Interactive prompts (readline) for init command
- Skills update checker (compare local vs GitHub)
- Custom skills directory management
- Skill templates (create your own skills)

**Documentation**:
- Video tutorials
- Skill authoring guide
- Contributing guidelines

**Marketplace**:
- First marketplace release
- Community feedback iteration

---

## Links

- **GitHub**: https://github.com/jezweb/roo-commander
- **npm**: https://www.npmjs.com/package/roocommander
- **Skills Repo**: https://github.com/jezweb/claude-skills
