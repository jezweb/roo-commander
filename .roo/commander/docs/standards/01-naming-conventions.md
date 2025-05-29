+++
# --- Basic Metadata ---
id = "STANDARD-NAMING-CONVENTIONS-V3" # Updated version
title = "Standard: Naming, Path Referencing, and Content Conventions"
context_type = "standards_document"
scope = "Defines all standard naming conventions for files, folders, TOML IDs; the mandatory convention for referencing file paths; and conventions for tags, status fields, placeholders, and emoji usage across the Roo Commander workspace."
target_audience = ["all"] # Developers, AI Modes, System Architects
granularity = "standard"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "3.0" # Incremented due to significant additions
tags = ["standards", "conventions", "naming", "paths", "ids", "tags", "status", "placeholders", "emoji", "core"]
related_context = [
    ".roo/commander/docs/standards/00-directory-structure.md",
    ".roo/commander/docs/standards/02-toml-md-document-format.md"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
+++

# Standard: Naming, Path Referencing, and Content Conventions

## 1. Objective

To establish clear, consistent, and descriptive conventions for naming entities (files, folders, IDs), referencing file paths, and formatting common content elements (tags, status fields, placeholders, emojis) within the Roo Commander workspace. Adherence to these conventions is vital for maintainability, discoverability, interoperability, and ease of understanding for both human developers and AI modes.

## 2. Guiding Principles

*   **Clarity over Brevity (Generally):** Names should be descriptive.
*   **Consistency:** Use the same patterns across similar entity types.
*   **Machine-Friendliness (for slugs/IDs):** Use formats easy for systems to parse.
*   **Human Readability (for titles/tags):** Use formats easy for humans to read.
*   **Unambiguity:** Avoid acronyms unless universally understood and defined (e.g., MDTM, PoC, KB, ID, AI, UX, UI, API, URL, CRUD, TOML, JSON, NPM, CLI, OS, MCP). Prefer full words.

## 3. File Path Referencing (CRITICAL STANDARD)

**3.1. Mandatory Workspace-Root-Relative Paths:**
*   All internal file and directory path references within TOML frontmatter (e.g., in fields like `related_context`, `template_schema_doc`, `input_artifacts`, `output_artifacts`, `custom_instructions_dir`) and within Markdown content (e.g., Markdown links `[]()`) **MUST** be specified as **workspace-root-relative paths, anchored to the `.roo/` directory.**
*   This means paths **MUST** always begin with `.roo/`.

**3.2. Examples of Correct Path Referencing:**
*   `.roo/commander/modes/manager-data-product/manager-data-product.mode.md`
*   `.roo/rules/01-standard-toml-md-format.md`
*   `.roo/commander/templates/tasks/template_00_mdtm_task_generic.md`
*   `.roo/commander/sessions/SESSION-Example-20250720-100000/artifacts/notes/NOTE-MyNote-20250720-100500.md`

**3.3. Forbidden Path Navigation:**
*   Paths **MUST NOT** use relative navigation like `../` or `./` (unless `./` refers to the workspace root itself, which is less clear than starting with `.roo/`). The use of `../` is strictly forbidden in path references stored in files.
*   The only exception for `./` is if a script or tool running *from* a specific directory needs to reference a file *within that same directory* for its immediate operation, but stored references should still prefer the `.roo/` anchor.

**3.4. Rationale for Strict Path Referencing:**
*   **Unambiguity:** Ensures a single, clear way to locate any file from any other file.
*   **AI & Tooling Reliability:** Provides stable and easily parsable paths for AI modes and automated tools, significantly reducing errors in file resolution.
*   **Maintainability:** If a referencing document is moved, its links to other workspace files (using `.roo/` anchored paths) remain valid. If a target document is moved, only direct references to it need updating.
*   **Portability:** If the entire `.roo/` structure is moved to a different parent directory, internal links remain consistent.

## 4. Specific Naming Conventions

### 4.1. Directory Names
*   **Format:** `kebab-case` (all lowercase, words separated by hyphens) or `snake_case` (all lowercase, words separated by underscores). Prefer `kebab-case` for new top-level directories if no strong convention exists.
*   **Content:** Descriptive of the contents.
*   **Examples:** `commander/`, `modes/`, `data-product-strategist/`, `kb/`, `squad_designs/`, `build_release/`.

### 4.2. Mode Slugs (Mode `id` in `.mode.md` TOML & Directory Name)
*   **Format:** `kebab-case`.
*   **Content:** Descriptive. Prefer full words.
*   **Prefixes (Recommended):** `manager-[domain]`, `data-product-[specialization]`, `util-[function]`, `agent-[purpose]`, `spec-[technology]`.
*   **Examples:** `roo-commander`, `manager-data-product`, `data-product-strategist`.
*   The mode's directory name **MUST** match its `id` (slug).

### 4.3. File Names (General `.md` files, scripts, etc.)
*   **Format:** `kebab-case` or `snake_case`. Prefer `snake_case` for scripts (`.js`, `.py`) and `kebab-case` for `.md` files if no other specific convention applies.
*   **Prefixes (Recommended for specific types):**
    *   `00_`, `01_` for ordered documents within a directory.
    *   See specific conventions for MDTM Tasks, Session Artifacts, etc., below.
*   **Extension:** Use appropriate extension (`.md`, `.js`, `.json`, `.py`, `.toml`, `.xml`).

### 4.4. TOML `id` Fields (Unique Identifiers within Documents)
*   **Format:** `ALL-UPPERCASE_SEPARATED_BY_HYPHENS_OR_UNDERSCORES-V[VersionNumberIfApplicable]`
*   **Content:** Should be unique within its category/type. Often includes a type prefix.
*   **Examples:**
    *   Workspace Rule: `WORKSPACE-RULE-NAMING-CONVENTIONS-V3`
    *   Mode Definition: `manager-data-product` (matches slug)
    *   KB Article: `KB-PROC-MDP-MAIN-ORCH-FLOW-V1`
    *   MDTM Task: `TASK-MDP-20250720100000`
    *   Session Log: `SESSION-DataProductPoC-20250720100000`
    *   Planning Document: `SQUAD-CONCEPT-WSMAINT-V1` (or with date)

### 4.5. TOML `title` Fields
*   **Format:** Title Case. Human-readable and descriptive.
*   **Examples:** `"Standard: Naming, Path Referencing, and Content Conventions"`, `"Roo Commander: Rule - Core Operational Principles & KB Usage"`.

### 4.6. MDTM Task Files
*   **Filename Format:** `TASK-[TEAM_OR_MODE_PREFIX_CAPS]-[YYYYMMDD-HHMMSS].md`
    *   `[TEAM_OR_MODE_PREFIX_CAPS]`: Short, uppercase prefix for the assignee or project (e.g., `MDP`, `DPSTRAT`).
*   **Location:** `.roo/commander/tasks/` (subdirectories encouraged).
*   **TOML `id`:** Matches filename core (e.g., `TASK-DPSTRAT-20250720100500`).

### 4.7. Session Log Files & Directories
*   **Directory Format:** `SESSION-[SanitizedGoal]-[YYYYMMDD-HHMMSS]`
*   **Location:** `.roo/commander/sessions/`
*   **Log Filename:** `session_log.md` (inside session directory).
*   **TOML `id` (in `session_log.md`):** Matches session directory name.

### 4.8. Session Artifact Files
*   **Filename Format:** `[TYPE_PREFIX_CAPS]-[Topic_Kebab_Case]-[YYMMDDHHMMSS].[ext]`
    *   `[TYPE_PREFIX_CAPS]`: `NOTE`, `LEARNING`, `QUESTION`, `SNIPPET`, `DESIGN` (for design outputs), `RESEARCH`, `BLOCKER`, `CONTEXT`, `DEFERRED`, `DOC`, `ENV`, `FEATURE`, `FDBK`, `SUMMARY`.
*   **Location:** Within `[SessionDirectory]/artifacts/[artifact_type_subdir]/`.

## 5. Content Conventions

### 5.1. Tags (TOML `tags` array)
*   **Format:** All lowercase, `kebab-case`.
*   **Content:** Descriptive keywords for discoverability and categorization.
*   **Mandatory Tags (Examples):**
    *   MDTM Tasks: `"mdtm"`, `"[assignee_slug_tag]"`, `"[domain_tag]"`
    *   KB Articles: `"kb"`, `"[article_type_tag e.g., procedure, skill]"`, `"[mode_slug_tag]"`
    *   Mode Definitions: `"[classification_tag e.g., manager, squad]"`, `"[domain_tag]"`
    *   Rules/Standards: `"rules"`, `"standard"`, `"[scope_tag e.g., workspace, mode-specific]"`
*   **Strategy:** Encourage consistent use of tags for classification, domain, and key concepts.

### 5.2. Status Fields (TOML `status`)
*   **Format:** String, often with a leading emoji for visual distinction.
*   **Standard Sets (Define per document type in its template README):**
    *   **MDTM Tasks:** `"🟡 To Do"`, `"🔵 In Progress"`, `"🟢 Done"`, `"🔴 Error"`, `"⚪ Blocked"`, `"🟣 Review"`.
    *   **Planning Documents (Concept, Roles, Workflow, Blueprint, Proposal):** `"draft"`, `"proposed"`, `"under-review"`, `"approved"`, `"rejected"`, `"archived"`.
    *   **KB Articles, Rules, Standards, Templates, Mode Definitions:** `"draft"`, `"active"`, `"deprecated"`, `"superseded"`.
    *   **Session Logs:** `"🟢 Active"`, `"⏸️ Paused"`, `"🏁 Completed"`, `"🔴 Error"`.
*   Consistency within document types is key.

### 5.3. Placeholder Conventions (in Templates)
*   **Automated Placeholders (Agent/Script Filled at Instantiation):**
    *   Format: `{{VARIABLE_NAME_UPPERCASE}}`
    *   Examples: `{{YYYYMMDD}}`, `{{MODE_SLUG}}`, `{{TIMESTAMP_ISO_Z}}`, `{{SESSION_ID}}`.
    *   Usage: For values the creating AI agent or script can determine automatically.
*   **Contextual Placeholders (User/Agent Filled based on Context/Input *after* Instantiation):**
    *   Format: `[Descriptive Placeholder Text in Title Case or as a Question]`
    *   Examples: `"[Full Name of New Squad Unit]"`, `"[Brief description of the core domain this unit will address]"`, `"[What is the primary goal of this SOP?]"`.
*   **Guidance for Optional Fields in Placeholders:**
    *   For optional fields where removal of the field is an option if no data is provided: `"[Describe value or remove field if not applicable]"`.
*   **Template READMEs MUST** document the meaning and expected filling mechanism for placeholders used in that template.

### 5.4. Emoji Usage (Optional but Encouraged for Readability)
*   **Mode Names:** Use a consistent, relevant emoji at the start of the `name` field (e.g., `👑 Roo Commander`, `🧑‍💼 Data Product Manager`, `📊 Data Product Strategist`).
*   **Section Headers (in some documents):** May use emojis for quick visual identification (e.g., 🎯 Objective, 🚀 Mission, 🤔 Problem, ✨ Capabilities, 💡 Learning).
*   **Status Fields:** Emojis are part of the standard status values (e.g., `🟢 Done`).
*   **Documentation:** A central list of preferred emojis for common concepts could be maintained (e.g., in a "Style Guide" or this document's appendix if it grows). For now, observe existing conventions.

## 6. Versioning of Standards & Rules
*   Rule and Standard documents themselves **MUST** have a `version` field in their TOML frontmatter (e.g., `"1.0"`, `"2.0"`).
*   Increment appropriately based on Semantic Versioning principles (MAJOR for breaking changes, MINOR for additions, PATCH for fixes).
*   Update `last_updated` field with each modification.

## 7. Rationale
Consistent naming, path referencing, and content conventions are crucial for:
*   **Discoverability:** Easily finding files and information.
*   **Automation:** Enabling AI modes and scripts to reliably parse, create, and modify files.
*   **Maintainability:** Making the system easier to understand, debug, and evolve.
*   **Clarity:** Reducing ambiguity for both AI and human developers.

**This standard MUST be applied to all new files and used as a guideline when refactoring existing components.**