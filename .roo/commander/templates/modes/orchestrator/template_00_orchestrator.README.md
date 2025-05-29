# Documentation: Template `template_00_orchestrator.mode.md`

## 1. Purpose

This template defines the standard structure for creating the `.mode.md` file for **Orchestrator modes** within the Roo Commander ecosystem. Orchestrator modes (like `👑 Roo Commander` (`roo-commander`)) are the primary user-facing AI agents responsible for initial interaction, managing work sessions, and delegating entire complex workflows to specialized "Manager" modes.

This template ensures that Orchestrator mode definitions are consistent and provide all necessary information for both the Roo Code system (to generate the `.roomodes` entry) and for human developers.

## 2. Usage

1.  **Copy Template:** When creating or defining an Orchestrator mode:
    *   Copy `[.roo/commander/templates/modes/orchestrator/template_00_orchestrator.mode.md](.roo/commander/templates/modes/orchestrator/template_00_orchestrator.mode.md)` to the mode's directory (e.g., `[.roo/commander/modes/roo-commander/roo-commander.mode.md]`).
2.  **Populate TOML Frontmatter:**
    *   Replace all placeholders like `[orchestrator-mode-slug]` and `[Orchestrator Mode Name]` with actual values.
    *   The `id` field should be the mode's unique slug.
    *   The `name` field is for the display name in Roo Code.
    *   The `roleDefinition` should be a concise statement of its core identity and purpose.
    *   The `groups` field defines tool access (defaults to all).
    *   `classification` **MUST be `"orchestrator"`**.
    *   `custom_instructions_dir` **MUST be the full workspace-relative path** to the mode's KB, e.g., `".roo/commander/modes/[orchestrator-mode-slug]/kb/"`.
    *   Fill in other metadata fields (`domain`, `summary`, `tags`, `categories`, `delegate_to`, `reports_to`, `created_date`, `last_updated`) as appropriate.
3.  **Customize Markdown Body (Mode Documentation):**
    *   Fill in the sections under `# [Orchestrator Mode Name] - Mode Documentation` to clearly describe the mode for human developers, replacing placeholders.

## 3. TOML Frontmatter Schema (for an instance created from this template)

### 3.1. Fields Directly Used for `.roomodes` Generation:

*   **`name` (String, Required):**
    *   The human-friendly display name for the mode (e.g., `"👑 Roo Commander"`).
    *   *Maps to `.roomodes` property: `name`.*
*   **`roleDefinition` (String, Required, Multiline):**
    *   The core identity, expertise, and primary function of the mode. The first sentence is particularly important.
    *   *Maps to `.roomodes` property: `roleDefinition`.*
*   **`groups` (Array of Strings, Required):**
    *   Defines toolsets available to the mode (e.g., `["read", "edit", "browser", "command", "mcp"]`).
    *   *Maps to `.roomodes` property: `groups`.*

### 3.2. Workspace Internal Metadata Fields (for the `.mode.md` file itself):

*   **`id` (String, Required):** Unique slug for this mode (e.g., `"roo-commander"`).
*   **`version` (String, Required):** Version of this mode definition file (e.g., `"1.0.0"`).
*   **`classification` (String, Required):** **MUST be `"orchestrator"`**.
*   **`domain` (String, Required):** Primary operational domain (e.g., `"system-orchestration"`).
*   **`summary` (String, Required):** A concise one-sentence summary of the mode's role.
*   **`created_date` (String, Required):** Date of mode definition creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `{{YYYYMMDD}}`
*   **`last_updated` (String, Required):** Timestamp of last significant update to the mode definition (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `{{TIMESTAMP_ISO_Z}}`
*   **`[metadata]` (Table, Optional):**
    *   `tags` (Array of Strings, Required): Keywords for discoverability.
    *   `categories` (Array of Strings, Required): Broader functional grouping.
    *   `delegate_to` (Array of Strings, Required): List of slugs for Manager modes it can delegate to.
    *   `reports_to` (String, Required): Typically `"user"`.
    *   `squad_name` (String, Optional): Not typically applicable to orchestrators.
    *   `primary_output_description` (String, Optional): Not typically applicable to orchestrators.
    *   `primary_output_template` (String, Optional): Not typically applicable to orchestrators.
*   **`custom_instructions_dir` (String, Required):**
    *   **Full workspace-relative path** to the mode's own Knowledge Base directory.
    *   *Placeholder in template:* `".roo/commander/modes/[orchestrator-mode-slug]/kb/"`
*   **`template_schema_doc` (String, Required):**
    *   Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/orchestrator/template_00_orchestrator.README.md"`

## 4. Markdown Body Structure (Human-Readable Documentation)

The Markdown section of the `.mode.md` file serves as its own documentation for developers:

*   `# [Orchestrator Mode Name] - Mode Documentation`: Main title.
*   `## 1. Description & Purpose`
*   `## 2. Core Responsibilities & Capabilities`
*   `## 3. Key Inputs & Triggers`
*   `## 4. Primary Outputs & Deliverables`
*   `## 5. Workflow & Interactions`
*   `## 6. Key Knowledge Base (KB) & Rule Components`
*   `## 7. Limitations`
*   `## 8. Design Rationale / Notes (Optional)`
*   `## 9. External Resources / Links (Optional)`

This template structure ensures that Orchestrator modes are defined in a way that is directly consumable by the Roo Code system (for `.roomodes`) while also providing comprehensive documentation for human developers.