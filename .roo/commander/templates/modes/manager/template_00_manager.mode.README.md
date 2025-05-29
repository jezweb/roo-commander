# Documentation: Template `template_00_manager.mode.md`

## 1. Purpose

This template defines the standard structure for creating the `.mode.md` file for **Manager modes** within the Roo Commander ecosystem. Manager modes (e.g., `🧑‍💼 Data Product Manager` (`manager-data-product`)) act as domain-specific orchestrators. They receive a high-level objective (as an MDTM task) from a top-level coordinator (like `👑 Roo Commander`) and are responsible for breaking down that objective into a sequence of sub-tasks, which they then delegate to a "squad" of specialist worker modes.

This template ensures Manager mode definitions are consistent and provide all necessary information for the Roo Code system (for `.roomodes` generation) and for human developers.

## 2. Usage

1.  **Copy Template:** When creating a new Manager mode:
    *   Copy `[.roo/commander/templates/modes/manager/template_00_manager.mode.md](.roo/commander/templates/modes/manager/template_00_manager.mode.md)` to the new mode's directory (e.g., `[.roo/commander/modes/manager-new-workflow/manager-new-workflow.mode.md]`).
2.  **Populate TOML Frontmatter:**
    *   Replace all placeholders like `[manager-mode-slug]` and `[Manager Mode Name]` with actual values.
    *   The `id` field should be the mode's unique slug.
    *   The `name` field is for the display name in Roo Code.
    *   The `roleDefinition` should be a concise statement of its core identity, domain, and orchestration purpose. Customize `[specific-domain-of-management]` and `[primary_workflow_deliverable]`.
    *   The `groups` field defines tool access (defaults to all).
    *   `classification` **MUST be `"manager"`**.
    *   `custom_instructions_dir` **MUST be the full workspace-relative path** to the mode's KB, e.g., `".roo/commander/modes/[manager-mode-slug]/kb/"`.
    *   Fill in other metadata fields (`domain`, `summary`, `tags`, `categories`, `delegate_to` (listing its squad members), `reports_to`, `created_date`, `last_updated`) as appropriate.
3.  **Customize Markdown Body (Mode Documentation):**
    *   Fill in the sections under `# [Manager Mode Name] - Mode Documentation` to clearly describe the mode for human developers, replacing placeholders.

## 3. TOML Frontmatter Schema (for an instance created from this template)

### 3.1. Fields Directly Used for `.roomodes` Generation:

*   **`name` (String, Required):** Display name (e.g., `"🧑‍💼 Data Product Manager"`). *Maps to `.roomodes` `name`.*
*   **`roleDefinition` (String, Required, Multiline):** Core identity, domain, and orchestration purpose. *Maps to `.roomodes` `roleDefinition`.*
*   **`groups` (Array of Strings, Required):** Tool access. *Maps to `.roomodes` `groups`.*

### 3.2. Workspace Internal Metadata Fields (for the `.mode.md` file itself):

*   **`id` (String, Required):** Workspace internal slug (e.g., `"manager-data-product"`).
*   **`version` (String, Required):** Version of this mode definition file.
*   **`classification` (String, Required):** **MUST be `"manager"`**.
*   **`domain` (String, Required):** Specific workflow or area this Manager orchestrates.
*   **`summary` (String, Required):** One-sentence summary.
*   **`created_date` (String, Required):** Date of mode definition creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `{{YYYYMMDD}}`
*   **`last_updated` (String, Required):** Timestamp of last significant update to the mode definition (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `{{TIMESTAMP_ISO_Z}}`
*   **`[metadata]` (Table, Optional):**
    *   `tags` (Array of Strings, Required): Include domain tag, `"manager"`, `"orchestrator"`, `"squad-lead"`.
    *   `categories` (Array of Strings, Required).
    *   `delegate_to` (Array of Strings, Required): List of slugs for its Squad Member modes.
    *   `reports_to` (String, Required): Slug of its coordinator (e.g., `"roo-commander"`).
    *   `squad_name` (String, Optional): Not typically applicable for the manager itself.
    *   `primary_output_description` (String, Optional): The manager's output is the result of its squad's work, described by its MDTM task.
    *   `primary_output_template` (String, Optional): Not applicable for the manager itself.
*   **`custom_instructions_dir` (String, Required):**
    *   **Full workspace-relative path** to the mode's own Knowledge Base directory.
    *   *Placeholder in template:* `".roo/commander/modes/[manager-mode-slug]/kb/"`
*   **`template_schema_doc` (String, Required):**
    *   Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/manager/template_00_manager.README.md"`

## 4. Markdown Body Structure (Human-Readable Documentation)

*   `# [Manager Mode Name] - Mode Documentation`: Main title.
*   `## 1. Description & Purpose`
*   `## 2. Core Responsibilities & Capabilities`
*   `## 3. Key Inputs & Triggers`
*   `## 4. Primary Outputs & Deliverables`
*   `## 5. Workflow & Interactions` (summarizing its KB procedure and squad)
*   `## 6. Key Knowledge Base (KB) & Rule Components`
*   `## 7. Limitations`
*   `## 8. Design Rationale / Notes (Optional)`
*   `## 9. External Resources / Links (Optional)`

This template structure ensures that Manager modes are defined in a way that is directly consumable by the Roo Code system (for `.roomodes`) while also providing comprehensive documentation for human developers and clearly outlining their orchestration role.