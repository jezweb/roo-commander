# Standard: Naming & Path Referencing Conventions for Roo Commander V8

## 1. Objective

To establish clear, consistent, and descriptive naming and path referencing conventions for all key entities within the Roo Commander V8 workspace. This includes mode slugs, file names, TOML IDs, tags, internal document links, and other identifiable components. Adherence to these conventions is vital for maintainability, discoverability, AI parsing accuracy, and ease of understanding for both human developers and AI modes.

## 2. Guiding Principles for Naming & Paths

*   **Clarity over Brevity (Generally):** Names and paths should be descriptive enough to convey meaning without requiring external lookup.
*   **Consistency:** Use the same patterns and conventions across similar types of entities and references.
*   **Avoid Ambiguous Acronyms:** Spell out terms unless an acronym is universally understood (e.g., MDTM, PoC, KB, ID, AI, API, UI, UX) and ideally listed in a project glossary if one exists. For new or internal acronyms, prefer full names initially.
*   **Machine-Friendliness (for slugs/IDs/paths):** Use formats that are easy for systems to parse (e.g., kebab-case, snake_case, no spaces in critical identifiers or paths).
*   **Human Readability (for titles/tags/docs):** Use formats that are easy for humans to read and understand.
*   **Unambiguity for AI:** Structure names and paths to minimize potential misinterpretation by AI modes.

## 3. Specific Naming Conventions

*(This section remains largely as we discussed before, focusing on names of entities)*

### 3.1. Mode Slugs (Mode `id` in `.mode.md`)
*   **Format:** `kebab-case` (all lowercase, words separated by hyphens).
*   **Content:** Clearly indicate role and primary domain.
*   **Prefixes (Recommended):**
    *   Orchestrator: e.g., `roo-commander`
    *   Managers: `manager-[domain]` (e.g., `manager-data-product`)
    *   Squad Members: `[squad_name_prefix]-[specialization]` (e.g., `data-product-strategist`)
    *   Utility/Service: `util-[function]` or `service-[function]`
*   **Examples:** `roo-commander`, `manager-data-product`, `data-product-strategist`

### 3.2. Mode Definition Files
*   **Format:** `[mode_slug].mode.md`
*   **Location:** `.roo/commander/modes/[mode_slug]/[mode_slug].mode.md`

### 3.3. Mode-Specific Rule Files
*   **Format:** `[NN]-[mode_slug_lc_parts_hyphenated]-[rule_description_kebab_case].md`
    *   `NN`: Two-digit number for ordering (e.g., `00-`, `01-`).
    *   `[mode_slug_lc_parts_hyphenated]`: e.g., `manager-data-product` (not an acronym).
*   **Location:** `.roo/rules-[mode_slug]/`
*   **Examples:**
    *   `.roo/rules-roo-commander/00-roo-commander-core-principles.md`
    *   `.roo/rules-manager-data-product/01-manager-data-product-squad-orchestration.md`

### 3.4. Mode Knowledge Base (KB) Files
*   **KB Root File:** `README.md` (in `.roo/commander/modes/[mode_slug]/kb/README.md`)
*   **KB Subdirectory Names:** `prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/` (all lowercase).
*   **KB Content Files:** `[NN]-[descriptive-name-kebab-case].[ext]` (typically `.md`).
*   **Examples:**
    *   `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md`
    *   `.roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md`

### 3.5. TOML IDs (within frontmatter)
*   **Format:** `ALL-UPPERCASE_SNAKE_CASE_OR_KEBAB-CASE-V[Version]`
*   **Content:** Unique within its category, often prefixed by type.
*   **Examples:** `WORKSPACE-RULE-TOML-MD-FORMAT-V1`, `MDP-RULE-SQUAD-ORCH-V1`, `KB-INDEX-ROO-COMMANDER`, `TASK-MDP-20250716-103000`.

### 3.6. File Titles (in TOML `title` field)
*   **Format:** Title Case. Human-readable and descriptive.
*   **Examples:** `"Workspace Standard: TOML+Markdown Document Format"`, `"Manager Data Product: Rule - Core Operational Principles & KB Usage"`.

### 3.7. MDTM Task Files
*   **Filename Format:** `TASK-[TEAM_PREFIX_CAPS]-[YYYYMMDD-HHMMSS].md`
    *   `[TEAM_PREFIX_CAPS]`: Short, uppercase prefix for assigned mode/team (e.g., `RC`, `MDP`, `DPSTRAT`).
*   **Location:** `.roo/commander/tasks/` (potentially within organizational subdirectories).

### 3.8. Session Log Files & Directories
*   **Directory Format:** `SESSION-[SanitizedGoal_PascalCase]-[YYYYMMDD-HHMMSS]`
*   **Log Filename:** `session_log.md`.

### 3.9. Session Artifact Files
*   **Filename Format:** `[TYPE_PREFIX_CAPS]-[Topic_PascalCase_Or_Kebab-case]-[YYMMDDHHMMSS].[ext]`
    *   `[TYPE_PREFIX_CAPS]`: e.g., `NOTE`, `LEARNING`, `STRATEGY`.
*   **Location:** Within `[SessionDirectory]/artifacts/[type_subdir]/`.

### 3.10. Tags (in TOML `tags` array)
*   **Format:** `kebab-case` (all lowercase).
*   **Content:** Descriptive keywords. Include type-specific tags.

### 3.11. Template Files
*   **Location:** `.roo/commander/templates/` with archetype/type subdirectories.
*   **Filename Format:** `template_[NN]_[archetype_or_type]_[description_snake_case].[ext]`
*   **Examples:** `template_00_orchestrator_mode.mode.md`, `template_00_mdtm_task_generic.md`.

## 4. Path Referencing Conventions (CRITICAL)

To ensure clarity, maintainability, and correct interpretation by AI modes and tools, all file path references within documents **MUST** adhere to the following:

*   **4.1. Use Workspace-Root-Relative Paths:**
    *   All file and directory paths specified within TOML frontmatter (e.g., in `related_context`, `template_schema_doc`, `input_artifacts`, `output_artifacts` arrays) and within Markdown content (e.g., in links `[]()`) **MUST** be relative to the workspace root and **MUST** start with `.roo/`.
    *   **Correct Example:** `.roo/commander/templates/tasks/template_00_mdtm_task_generic.md`
    *   **Correct Example:** `[Link to MDTM Standard](.roo/rules/02-mdtm-task-standard.md)`

*   **4.2. Forbidden Navigation:**
    *   Paths **MUST NOT** use `../` to navigate up the directory tree from the file containing the reference. This creates ambiguity and fragility. Always start paths from the `.roo/` root.
    *   **Incorrect Example:** `../../templates/tasks/some_template.md` (Avoid this)

*   **4.3. Exception for Internal KB Cross-References (Use with Caution):**
    *   Within a specific mode's Knowledge Base files (i.e., files located under `.roo/commander/modes/[mode_slug]/kb/`), links to *other files within that same mode's KB* **MAY** use paths relative to that mode's KB root.
    *   **Example (inside `.roo/commander/modes/manager-data-product/kb/README.md`):**
        *   Permissible: `[Main Orchestration Flow](procedures/01-main-data-product-orchestration-flow.md)`
    *   **Rationale:** The mode itself is the primary consumer and understands its own KB structure.
    *   **Best Practice for Robustness:** Even for internal KB links, using the full workspace-root-relative path (e.g., `.roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md`) is never wrong and is safer if these KB files might be processed by external tools or for easier human navigation when reading the raw file. **Prefer full `.roo/` anchored paths where ambiguity might arise.**

*   **4.4. Verification:**
    *   Before finalizing any document containing file paths, double-check that all paths adhere to this workspace-root-relative standard (starting with `.roo/`), especially for any paths intended for AI mode consumption.

## 5. Versioning of Standards

*   This Naming Conventions document (and other standards) will have a version number in its TOML `id` and `version` fields.
*   Significant changes to conventions will result in a new version of this document.

## 6. Rationale for Conventions

Consistent naming and path referencing are crucial for:
*   **Discoverability:** Easy location of files and understanding of their purpose.
*   **Automation & AI Processing:** Reliable parsing and processing by AI modes and scripts.
*   **Maintainability:** Reducing ambiguity and cognitive load for developers.
*   **System Stability:** Minimizing errors due to incorrect path resolution or inconsistent naming.

This standard should be applied to all new files created and used as a guideline when refactoring or interacting with existing files.