# Documentation: Template `template_00_mode_kb_readme.md`

## 1. Purpose

This template defines the standard structure for the main **`README.md` (Knowledge Base Index) file** that resides at the root of each AI mode's dedicated Knowledge Base (KB) directory (e.g., `.roo/commander/modes/[mode_slug]/kb/README.md`).

The purpose of this KB Index is to:
*   Provide an overview of the specific mode's KB.
*   Explain how the mode itself is intended to use its KB.
*   List and describe the standard subdirectories (`prompts`, `procedures`, `reference`, `examples`, `skills`, `wisdom`) and any key documents within them.
*   Serve as the primary entry point for both the AI mode when it consults its KB and for human developers maintaining the mode's knowledge.

## 2. Usage

1.  **Copy Template:** When setting up the Knowledge Base for a new AI mode:
    *   Copy `.roo/commander/templates/modes/kb/template_00_mode_kb_readme.md` to the mode's KB root directory and rename it to `README.md` (e.g., `.roo/commander/modes/data-product-strategist/kb/README.md`).
2.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block of the new `README.md` file.
    *   The `id` should be unique and indicate it's a KB index for that mode (e.g., `KB-INDEX-DATA-PRODUCT-STRATEGIST`).
    *   The `title` should clearly state "Knowledge Base (KB) Index for [Mode Name]".
    *   The `scope` should describe its purpose for that specific mode.
    *   `target_audience` must include the mode's slug.
    *   Update `tags` to include the mode's slug tag.
    *   Update `related_context` to point to the mode's `.mode.md` file and its KB lookup rule.
    *   Set `last_updated` to the current date.
3.  **Customize Markdown Body:**
    *   Replace all bracketed placeholders like `[Mode Name]` and `[mode_slug]` with the actual values for the mode.
    *   In Section 3 ("KB Structure & Key Documents Overview"), list any *actually existing* key files within each standard subdirectory of that mode's KB. If a subdirectory (e.g., `prompts/`) is not used by that specific mode, it can be noted as "Not currently used" or the bullet points for key files under it can be omitted.
    *   Ensure the descriptions accurately reflect how that specific mode will use its KB components.

## 3. TOML Frontmatter Schema

The following fields are defined within the `+++` delimiters for a mode's KB `README.md` file:

*   **`id` (String, Required):**
    *   A unique identifier for the KB Index document.
    *   Convention: `KB-INDEX-[mode_slug_uppercase]` (e.g., `"KB-INDEX-ROO-COMMANDER"`).
*   **`title` (String, Required):**
    *   Human-readable title, e.g., `"Knowledge Base (KB) Index for Roo Commander V8"`.
*   **`context_type` (String, Fixed: `"kb_index"`):**
    *   Indicates the document type.
*   **`scope` (String, Required):**
    *   Describes the purpose of this KB for the specific mode.
*   **`target_audience` (Array of Strings, Required):**
    *   **MUST** include the slug of the mode this KB belongs to. May also include roles like `"developers_maintaining_mode"`.
*   **`granularity` (String, Fixed: `"overview"`):**
    *   Indicates this document provides an overview.
*   **`status` (String, Required):**
    *   Lifecycle status (typically `"active"` if the mode is active).
*   **`last_updated` (String, Required):**
    *   Date of the last significant update.
*   **`version` (String, Required):**
    *   Version number of this KB index structure (e.g., `"1.0"`).
*   **`tags` (Array of Strings, Required):**
    *   Keywords. **MUST** include `"kb"`, `"index"`, `"readme"`, and a tag for the mode's slug (e.g., `"roo-commander"`).
*   `related_context` (Array of Strings, Required):
    *   **MUST** include paths to the mode's own `.mode.md` definition file and its specific KB lookup rule (e.g., `.roo/commander/modes/[mode_slug]/rules-[mode_slug]/99-[mode_slug_lc]-kb-lookup.md`).
*   **`template_schema_doc` (String, Required):**
    *   Path to this schema documentation file.
    *   Value: `".roo/commander/templates/modes/kb/template_00_mode_kb_readme.README.md"`

### KB Specific Fields (Optional)

*These can be added to the TOML for quick reference by the mode or tools.*
*   `primary_operational_procedure` (String, Optional): Path within this KB to the mode's most important procedural document (e.g., `"kb/procedures/01-main-flow.md"`).
*   `key_reference_document` (String, Optional): Path within this KB to a critical reference document.

## 4. Markdown Body Structure

The Markdown body provides a human-readable and AI-parsable guide to the mode's KB:

*   `# Knowledge Base (KB) Index for {{ title }}`: Main title.
*   `## 1. Purpose of this Knowledge Base`: Explains why this KB exists for the specific mode.
*   `## 2. How [Mode Name] Uses This KB`: Describes the mode's interaction with its KB, referencing its KB lookup rule.
*   `## 3. KB Structure & Key Documents Overview`: This is the core section.
    *   Lists each standard subdirectory (`README.md`, `prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`).
    *   For each subdirectory, briefly states its purpose and lists any *key, existing* documents within it that are critical for the mode's operation.
*   `## 4. Maintaining This KB`: Brief notes on keeping the KB and this index current.

This template ensures that every mode's Knowledge Base is introduced and indexed in a consistent manner, aiding both AI navigation and human understanding.