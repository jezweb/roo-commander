# Documentation: Template `template_00_sop_generic.md`

## 1. Purpose

This template defines the standard structure for creating **Standard Operating Procedure (SOP) documents**. SOPs are detailed, step-by-step instructions designed to ensure that complex or critical tasks are performed consistently and correctly every time.

They are used within the Roo Commander V8 ecosystem to document repeatable processes, such as build and release procedures, environment setup, specific maintenance tasks, or complex data handling workflows. An SOP can be followed by a human developer or serve as the specification for an AI mode designed to automate that process.

## 2. Usage

1.  **Identify Need for SOP:** When a repeatable, multi-step process needs to be standardized.
2.  **Copy Template:**
    *   Copy `[.roo/commander/templates/processes/template_00_sop_generic.md](.roo/commander/templates/processes/template_00_sop_generic.md)` into the `[.roo/commander/processes/](.roo/commander/processes/)` directory (or a relevant subdirectory).
3.  **Rename File:** Rename it descriptively, often using a numbered prefix and indicating the process (e.g., `01_sop_build_and_github_release.md`).
4.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique ID for this SOP document.
    *   `title`: `SOP: [Descriptive Title of the SOP]`.
    *   Define `objective_summary`, `primary_audience`, `frequency_of_execution`, `key_inputs_for_sop`, `key_outputs_of_sop`, and optionally `process_owner`, `related_workspace_rules`, `related_tools_or_scripts`.
    *   Add relevant `tags`.
5.  **Detail Procedure in Markdown Body:**
    *   Replace all bracketed placeholders.
    *   **Crucially, customize Section 4 ("Procedural Steps")** with the detailed, sequential actions for this specific SOP. Include tools, commands, verification steps, and troubleshooting for each step.
    *   Fill in other sections (Purpose & Objective, Prerequisites, Roles, Expected Outcomes, Error Handling, Maintenance) with information relevant to this SOP.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `SOP-[DomainShortCode]-[ProcedureNameShort]-V[Version]`.
*   **`title` (String, Required):** Title: `"SOP: [Descriptive Title]"`.
*   **`status` (String, Required):** Lifecycle status (e.g., `"draft"`, `"active"`, `"under-review"`, `"deprecated"`).
*   **`created_date` (String, Required):** Date.
*   **`updated_date` (String, Required):** Date.
*   **`version` (String, Required):** Version of this SOP document.
*   **`tags` (Array of Strings, Required):** Include `"sop"`, `"procedure"`, `"standard-operating-procedure"`, and tags for the domain/process.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/processes/template_00_sop_generic.README.md"`

### SOP Context & Ownership (TOML)

*   `process_owner` (String, Optional): Role/Team responsible for this SOP.
*   `primary_audience` (String, Optional): Who primarily follows this SOP.
*   `related_workspace_rules` (Array of Strings, Optional): Workspace rules this SOP adheres to.
*   `related_tools_or_scripts` (Array of Strings, Optional): Key tools/scripts used.

### SOP Specifics (TOML)

*   `objective_summary` (String, Optional but Recommended, Multiline): One-sentence summary.
*   `frequency_of_execution` (String, Optional): How often it's performed.
*   `estimated_duration` (String, Optional): Typical time to complete.
*   `key_inputs_for_sop` (Array of Strings, Optional): Main inputs needed.
*   `key_outputs_of_sop` (Array of Strings, Optional): Main outputs produced.

## 4. Markdown Body Structure

*   `# SOP: {{ title }}`: Main title.
*   `## 1. Purpose & Objective`: What the SOP achieves, its scope, audience, frequency.
*   `## 2. Prerequisites`: What's needed before starting.
*   `## 3. Roles & Responsibilities (Optional)`: Who does what if multi-role.
*   `## 4. Procedural Steps`: **The core detailed, step-by-step instructions.**
*   `## 5. Expected Outcomes / Deliverables`: Tangible results.
*   `## 6. Error Handling & Escalation (General for this SOP)`: How to handle issues.
*   `## 7. SOP Maintenance & Review`: Ownership and review cycle.

This template provides a robust framework for documenting any standard operating procedure, ensuring clarity, consistency, and repeatability.