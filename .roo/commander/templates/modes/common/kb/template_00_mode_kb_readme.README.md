# Documentation: Template `template_00_mode_kb_readme.md`

## 1. Purpose

This template defines the standard structure for the main **`README.md` (Knowledge Base Index) file** that resides at the root of each AI mode's dedicated Knowledge Base (KB) directory (e.g., `[.roo/commander/modes/[mode_slug]/kb/README.md]`).

The purpose of this KB Index is to:
*   Provide an overview of the specific mode's KB.
*   Explain how the mode itself is intended to use its KB, in conjunction with its mode-specific rules.
*   List and describe the standard subdirectories (`prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`) and guide the population of links to key documents within them for that specific mode.
*   Serve as the primary entry point for both the AI mode when it consults its KB and for human developers maintaining the mode's knowledge.

## 2. Usage

1.  **Copy Template:** When setting up the Knowledge Base for a new AI mode by an agent like `meta-mode-developer` or a human developer:
    *   Copy `[.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md](.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md)` to the mode's KB root directory: `[.roo/commander/modes/[mode_slug]/kb/]`.
    *   Rename the copied file to exactly `README.md`.
2.  **Populate TOML Frontmatter (of the instance `README.md`):**
    *   Replace all placeholders (e.g., `[mode_slug_uppercase]`, `[Mode Name]`, `[mode_slug]`) with values specific to the mode whose KB this `README.md` belongs to.
    *   The `id` should be unique (e.g., `KB-INDEX-DATA-PRODUCT-STRATEGIST`).
    *   `target_audience` **MUST** include the mode's slug.
    *   `related_context` **MUST** link to the mode's `.mode.md` file and its Core Principles rule (`[.roo/rules-[mode_slug]/00-[mode_slug]-core-principles.md]`).
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
3.  **Customize Markdown Body (of the instance `README.md`):**
    *   Replace all `[Mode Name]` and `[mode_slug]` placeholders.
    *   **Crucially, in Section 3 ("KB Structure & Key Documents Overview"), list any *actually existing or planned key files* within each standard subdirectory of *that mode's specific KB*.** This section is intended to be populated and maintained as the mode's KB grows. Links should be relative from within the `kb/` directory (e.g., `[./skills/my_skill.md](./skills/my_skill.md)`).

## 3. TOML Frontmatter Schema (for an instance of `template_00_mode_kb_readme.md`)

*   **`id` (String, Required):** Unique ID for the KB Index document.
    *   *Convention:* `KB-INDEX-[mode_slug_uppercase]`
    *   *Placeholder in template:* `"KB-INDEX-[mode_slug_uppercase]"`
*   **`title` (String, Required):** Human-readable title.
    *   *Placeholder in template:* `"Knowledge Base (KB) Index for [Mode Name]"`
*   **`context_type` (String, Fixed: `"kb_index"`).**
*   **`scope` (String, Required):** Describes the purpose of this KB for the specific mode.
    *   *Placeholder in template:* `"Index and overview of the Knowledge Base for the '[Mode Name]' (`[mode_slug]`) mode."`
*   **`target_audience` (Array of Strings, Required):** **MUST** include the slug of the mode this KB belongs to, and typically `"developers_maintaining_mode"`.
    *   *Placeholder in template:* `["[mode_slug]", "developers_maintaining_mode"]`
*   **`granularity` (String, Fixed: `"overview"`).**
*   **`status` (String, Required):** Lifecycle status (typically `"active"`).
*   **`created_date` (String, Required):** Date of KB README creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this KB index document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"kb"`, `"index"`, `"readme"`, and a tag for the mode's slug.
    *   *Placeholder in template:* `["kb", "index", "readme", "[mode_slug_tag]"]`
*   **`related_context` (Array of Strings, Required):**
    *   **MUST** include paths to the mode's own `.mode.md` definition file and its Core Principles & KB Usage rule (`[.roo/rules-[mode_slug]/00-[mode_slug]-core-principles.md]`).
    *   *Placeholders in template reflect this.*
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.README.md"`

### KB Specific Fields (Optional in the instance's TOML)
*These can be added to the TOML of an instance for quick reference by the mode or tools.*
*   `primary_operational_procedure` (String, Optional): Path within this KB to the mode's most important procedural document (e.g., `"kb/procedures/01-main-flow.md"`).
*   `key_reference_document` (String, Optional): Path within this KB to a critical reference document.
*   `key_skill_article` (String, Optional): Path within this KB to a critical skill document.

## 4. Markdown Body Structure (for an instance of `template_00_mode_kb_readme.md`)

*   `# Knowledge Base (KB) Index for {{ title }}`: Main title.
*   `## 1. Purpose of this Knowledge Base`: Explains why this KB exists for the specific mode.
*   `## 2. How [Mode Name] Uses This KB`: Describes the mode's interaction with its KB, referencing its Core Principles rule.
*   `## 3. KB Structure & Key Documents Overview`: **This is the core section to be customized for each mode.**
    *   Lists each standard subdirectory (`README.md`, `prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`).
    *   For each subdirectory, briefly states its purpose and provides placeholders or actual links (relative from within `kb/`) to key, existing documents within it that are critical for that mode's operation.
*   `## 4. Maintaining This KB`: Brief notes on keeping the KB and this index current.

This template ensures that every mode's Knowledge Base is introduced and indexed in a consistent manner, aiding both AI navigation (as directed by rules) and human understanding.