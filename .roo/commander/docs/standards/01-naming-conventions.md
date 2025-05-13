+++
# --- Basic Metadata ---
id = "STANDARD-NAMING-CONVENTIONS-V2" # Updated version
title = "Standard: Naming & Path Referencing Conventions for Roo Commander V8" # Updated title
context_type = "standards_document"
scope = "Defines all standard naming conventions for files, folders, TOML IDs, tags, and the mandatory convention for referencing file paths across the Roo Commander V8 workspace."
target_audience = ["all"] # Developers, AI Modes, System Architects
granularity = "standard"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "2.0" # Incremented due to significant path referencing addition
tags = ["standards", "conventions", "naming", "paths", "file-structure", "ids", "tags", "core"]
related_context = [
    ".roo/commander/docs/standards/00-directory-structure.md"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md" # Assuming a template for standards docs
+++

# Standard: Naming & Path Referencing Conventions for Roo Commander V8

## 1. Objective

To establish clear, consistent, and descriptive naming conventions for all key entities and a mandatory standard for file path referencing within the Roo Commander V8 workspace. Adherence to these conventions is vital for maintainability, discoverability, interoperability, and ease of understanding for both human developers and AI modes.

## 2. Guiding Principles for Naming

*   **Clarity over Brevity (Generally):** Names should be descriptive enough to convey meaning without requiring external lookup.
*   **Consistency:** Use the same patterns and conventions across similar types of entities.
*   **Avoid Ambiguous Acronyms:** Spell out terms where possible. If an acronym is well-established and unambiguous (e.g., "MDTM", "PoC", "KB", "ID", "AI", "UX", "UI", "API", "URL", "CRUD"), it may be used. All other acronyms should be explicitly defined if their use is unavoidable. Prefer full words.
*   **Machine-Friendliness (for slugs/IDs):** Use formats easy for systems to parse (e.g., kebab-case, no spaces).
*   **Human Readability (for titles/tags):** Use formats easy for humans to read.

## 3. Standard: File Path Referencing (CRITICAL)

**3.1. Mandatory Workspace-Root-Relative Paths:**
*   All file and directory path references within TOML frontmatter (e.g., in fields like `related_context`, `template_schema_doc`, `input_artifacts`, `output_artifacts`) and within Markdown content (e.g., Markdown links `[]()`) **MUST** be specified as **workspace-root-relative paths, anchored to the `.roo/` directory.**
*   This means paths should always begin with `.roo/`.

**3.2. Examples of Correct Path Referencing:**
*   `.roo/commander/modes/manager-data-product/manager-data-product.mode.md`
*   `.roo/rules/01-standard-toml-md-format.md`
*   `.roo/commander/templates/tasks/template_00_mdtm_task_generic.md`
*   `.roo/commander/sessions/SESSION-Example-20250719-100000/artifacts/notes/NOTE-MyNote-20250719-100500.md`

**3.3. Forbidden Path Navigation:**
*   Paths **MUST NOT** use relative navigation like `../` or `./` (unless `./` refers to the workspace root itself, which is less clear than starting with `.roo/`). The use of `../` is strictly forbidden in path references stored in files.
*   The only exception for `./` is if a script or tool running *from* a specific directory needs to reference a file *within that same directory* for its immediate operation, but stored references should still prefer the `.roo/` anchor.

**3.4. Rationale for Strict Path Referencing:**
*   **Unambiguity:** Ensures a single, clear way to locate any file from any other file.
*   **AI & Tooling Reliability:** Provides stable and easily parsable paths for AI modes and automated tools, significantly reducing errors in file resolution.
*   **Maintainability:** If a referencing document is moved, its links to other workspace files (using `.roo/` anchored paths) remain valid. If a target document is moved, only direct references to it need updating.
*   **Portability:** If the entire `.roo/` structure is moved to a different parent directory, internal links remain consistent.

## 4. Specific Naming Conventions

*(This section details conventions for different entity types, as previously drafted, ensuring all example paths now adhere to the `.roo/` anchored standard where applicable for cross-references.)*

### 4.1. Mode Slugs (Mode `id` in `.mode.md`)
*   **Format:** `kebab-case` (all lowercase, words separated by hyphens).
*   **Content:** Descriptive. Prefer full words.
*   **Prefixes (Recommended):** `manager-[domain]`, `data-product-[specialization]`, `util-[function]`.
*   **Examples:** `roo-commander`, `manager-data-product`, `data-product-strategist`.

### 4.2. Mode Definition Files
*   **Format:** `[mode_slug].mode.md`
*   **Location:** `.roo/commander/modes/[mode_slug]/[mode_slug].mode.md`
*   **Example:** `.roo/commander/modes/manager-data-product/manager-data-product.mode.md`

### 4.3. Mode-Specific Rule Files
*   **Format:** `[NN]-[mode_slug_lc]-[rule_description].md` (e.g., `00-manager-data-product-core-principles.md`).
*   **Location:** `.roo/rules-[mode_slug]/`
*   **Example:** `.roo/rules-manager-data-product/00-manager-data-product-core-principles.md`

### 4.4. Mode Knowledge Base (KB) Files
*   **KB Root File:** `README.md`
*   **Location:** `.roo/commander/modes/[mode_slug]/kb/README.md`
*   **KB Subdirectory Names:** `prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/` (all lowercase).
*   **KB Content Files:** `[NN]-[descriptive-name].md` (kebab-case).
*   **Examples:**
    *   `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md`
    *   `.roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md`

### 4.5. TOML IDs (within frontmatter)
*   **Format:** `ALL-UPPERCASE_SEPARATED_BY_HYPHENS_OR_UNDERSCORES-V[Version]`
*   **Content:** Unique within its category. Include type prefix and version.
*   **Examples:** `WORKSPACE-RULE-NAMING-CONVENTIONS-V2`, `MDP-RULE-SQUAD-ORCH-V1`.

### 4.6. File Titles (in TOML `title` field)
*   **Format:** Title Case. Human-readable and descriptive.
*   **Examples:** `"Standard: Naming & Path Referencing Conventions for Roo Commander V8"`.

### 4.7. MDTM Task Files
*   **Filename Format:** `TASK-[TEAM_PREFIX_CAPS]-[YYYYMMDD-HHMMSS].md`
*   **Location:** `.roo/commander/tasks/` (subdirectories for organization encouraged).
*   **TOML `id`:** Matches filename core.

### 4.8. Session Log Files & Directories
*   **Directory Format:** `SESSION-[SanitizedGoal]-[YYYYMMDD-HHMMSS]`
*   **Location:** `.roo/commander/sessions/`
*   **Log Filename:** `session_log.md` (inside session directory).
*   **TOML `id` (in `session_log.md`):** Matches session directory name.

### 4.9. Session Artifact Files
*   **Filename Format:** `[TYPE_PREFIX_CAPS]-[Topic_Kebab]-[YYMMDDHHMMSS].[ext]`
*   **Location:** Within `[SessionDirectory]/artifacts/[artifact_type_subdir]/`.

### 4.10. Tags (in TOML `tags` array)
*   **Format:** `kebab-case` (all lowercase).
*   **Content:** Descriptive keywords.

### 4.11. Template Files
*   **Location:** `.roo/commander/templates/` (with archetype/type subdirectories).
*   **Filename Format:** `template_[NN]_[type]_[description].md`.

## 5. Versioning of Standards & Rules
*   Rule and Standard documents themselves **MUST** have a `version` field in their TOML frontmatter (e.g., `"1.0"`, `"1.1"`, `"2.0"`).
*   Increment appropriately based on Semantic Versioning principles (MAJOR for breaking changes, MINOR for additions, PATCH for fixes).
*   Update `last_updated` field with each modification.

## 6. Rationale for Naming Conventions
Consistent naming and path referencing are crucial for:
*   **Discoverability, Automation, Maintainability, Clarity for AI & Humans.**

This standard **MUST** be applied to all new files and used as a guideline when refactoring.