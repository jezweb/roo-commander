# Documentation: Template `template_00_squad.mode.md`

## 1. Purpose

This template defines the standard structure for creating the `.mode.md` file for **Squad Member modes** within the Roo Commander ecosystem. Squad Member modes are specialist worker AIs designed to perform a specific, well-defined task as part of a larger workflow orchestrated by a "Manager" mode (e.g., `🧑‍💼 Data Product Manager`). They are the "doers" within a squad, each contributing a specific piece to the overall goal.

This template ensures that Squad Member mode definitions are consistent and provide all necessary information for both the Roo Code system (to generate the `.roomodes` entry) and for human developers.

## 2. Usage

1.  **Copy Template:** When creating a new Squad Member mode (e.g., `data-product-strategist`):
    *   Copy `[.roo/commander/templates/modes/squad/template_00_squad.mode.md](.roo/commander/templates/modes/squad/template_00_squad.mode.md)` to the new mode's directory (e.g., `[.roo/commander/modes/data-product-strategist/data-product-strategist.mode.md]`).
2.  **Populate TOML Frontmatter:**
    *   Replace all placeholders like `[squad-member-mode-slug]`, `[Squad Member Mode Name]`, `[Squad Name]`, `[manager-mode-slug]`, etc., with actual values.
    *   The `id` field should be the mode's unique slug.
    *   The `name` field is for the display name in Roo Code.
    *   The `roleDefinition` should be a concise statement of its core identity, squad context, reporting line, core function, and main deliverable.
    *   The `groups` field defines tool access (defaults to all).
    *   `classification` **MUST be `"squad"`**.
    *   `custom_instructions_dir` **MUST be the full workspace-relative path** to the mode's KB, e.g., `".roo/commander/modes/[squad-member-mode-slug]/kb/"`.
    *   Fill in other metadata fields (`domain`, `summary`, `tags`, `categories`, `squad_name`, `primary_output_description`, `primary_output_template`, `reports_to`, `created_date`, `last_updated`) as appropriate.
3.  **Customize Markdown Body (Mode Documentation):**
    *   Fill in the sections under `# [Squad Member Mode Name] - Mode Documentation` to clearly describe the mode for human developers, replacing placeholders.

## 3. TOML Frontmatter Schema (for an instance created from this template)

### 3.1. Fields Directly Used for `.roomodes` Generation:

*   **`name` (String, Required):** Display name (e.g., `"📊 Data Product Strategist"`). *Maps to `.roomodes` `name`.*
*   **`roleDefinition` (String, Required, Multiline):** Core identity, expertise, squad context, and reporting structure. *Maps to `.roomodes` `roleDefinition`.*
*   **`groups` (Array of Strings, Required):** Tool access. *Maps to `.roomodes` `groups`.*

### 3.2. Workspace Internal Metadata Fields (for the `.mode.md` file itself):

*   **`id` (String, Required):** Workspace internal slug (e.g., `"data-product-strategist"`).
*   **`version` (String, Required):** Version of this mode definition file.
*   **`classification` (String, Required):** **MUST be `"squad"`**.
*   **`domain` (String, Required):** Specific area of expertise.
*   **`summary` (String, Required):** One-sentence summary.
*   **`created_date` (String, Required):** Date of mode definition creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `{{YYYYMMDD}}`
*   **`last_updated` (String, Required):** Timestamp of last significant update to the mode definition (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `{{TIMESTAMP_ISO_Z}}`
*   **`[metadata]` (Table, Optional):**
    *   `tags` (Array of Strings, Required): Include `"squad"`, domain tag, skill tag.
    *   `categories` (Array of Strings, Required): e.g., "Data Product Design Squad".
    *   `squad_name` (String, Required): Name of the squad this member belongs to.
    *   `primary_output_description` (String, Required): Description of its main deliverable.
    *   `primary_output_template` (String, Optional): Path to its primary output template file, if applicable (using `.roo/` anchor).
    *   `delegate_to` (Array of Strings, Optional): Typically empty for squad members.
    *   `reports_to` (String, Required): Slug of its Manager mode.
*   **`custom_instructions_dir` (String, Required):**
    *   **Full workspace-relative path** to the mode's own Knowledge Base directory.
    *   *Placeholder in template:* `".roo/commander/modes/[squad-member-mode-slug]/kb/"`
*   **`template_schema_doc` (String, Required):**
    *   Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/squad/template_00_squad.README.md"`

## 4. Markdown Body Structure (Human-Readable Documentation)

*   `# [Squad Member Mode Name] - Mode Documentation`: Main title.
*   `## 1. Description & Purpose`
*   `## 2. Core Responsibilities & Capabilities`
*   `## 3. Key Inputs & Triggers`
*   `## 4. Primary Outputs & Deliverables`
*   `## 5. Workflow & Interactions` (how it fits within its squad)
*   `## 6. Key Knowledge Base (KB) & Rule Components`
*   `## 7. Limitations`
*   `## 8. Design Rationale / Notes (Optional)`
*   `## 9. External Resources / Links (Optional)`

This template structure ensures that Squad Member modes are defined in a way that is directly consumable by the Roo Code system (for `.roomodes`) while also providing comprehensive documentation for human developers, clearly outlining their specialized role within a managed squad.