# Documentation: Template `template_00_kb_procedure.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Procedure documents**. These documents are stored within a mode's `kb/procedures/` directory and detail specific, step-by-step operational workflows, decision-making logic, or standard operating procedures (SOPs) that the mode itself executes.

They are the "how-to" guides for a mode's internal processes and are critical for ensuring consistent and reliable behavior. Examples include a Manager mode's main squad orchestration flow or a complex analysis sequence for a specialist Squad Member.

## 2. Usage

1.  **Copy Template:** When creating a new procedural document for a mode's KB:
    *   Copy `.roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.md` to the relevant mode's `kb/procedures/` directory (e.g., `.roo/commander/modes/manager-data-product/kb/procedures/`).
2.  **Rename File:** Rename the copied file descriptively, often using a numbered prefix and a short name indicating its content (e.g., `01-main-orchestration-flow.md`, `02-error-analysis-protocol.md`).
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block of the new procedure file.
    *   `id`: Unique ID for this KB procedure, including mode slug and version (e.g., `KB-PROC-MDP-MAIN-ORCH-FLOW-V1`).
    *   `title`: `"[Mode Name]: Procedure - [Descriptive Title]"`.
    *   `scope`: Describe what process this procedure details for the specific mode.
    *   `target_audience`: **MUST** be the slug of the mode this procedure is for.
    *   `tags`: Include `"kb"`, `"procedure"`, `"[mode_slug_tag]"`, and keywords for the procedure's content.
    *   `related_context`: Link to the mode's `.mode.md`, its KB `README.md`, and any workspace rules or other KB articles it implements or relies upon.
4.  **Define Procedure Content in Markdown:**
    *   Replace all bracketed placeholders like `[Mode Name]` and `[mode_slug]` with actual values.
    *   **Crucially, customize Section 4 ("Procedural Steps")** with the detailed, step-by-step logic for this specific procedure.
    *   Fill in other sections (Objective, Trigger, Prerequisites, Artifact Management, Error Handling, Postconditions) with information relevant to this procedure.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `KB-PROC-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]`.
*   **`title` (String, Required):** Title: `"[Mode Name]: Procedure - [Descriptive Title]"`.
*   **`context_type` (String, Fixed: `"kb_procedure"`).**
*   **`scope` (String, Required):** Describes the scope of this specific procedure for the mode.
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
*   **`granularity` (String, Fixed: `"detailed_procedure"`).**
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Document version.
*   **`tags` (Array of Strings, Required):** **MUST** include `"kb"`, `"procedure"`, `"[mode_slug_tag]"`. Add content-specific tags.
*   `related_context` (Array of Strings, Optional): Links to relevant mode files, rules, or other KB articles.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.README.md"`

### Procedure Specific Fields (Optional in TOML)

*   `trigger_condition` (String, Optional): When the mode executes this procedure.
*   `primary_input` (String, Optional): Main input for the procedure.
*   `primary_output_goal` (String, Optional): Main deliverable or end state.
*   `estimated_complexity` (String, Optional): (e.g., `"low"`, `"medium"`, `"high"`).

## 4. Markdown Body Structure

*   `# [Mode Name]: Procedure - {{ title }}`: Main title.
*   `## 1. Objective`: Purpose of this specific procedure.
*   `## 2. Trigger / When to Use`: Conditions for executing this procedure.
*   `## 3. Prerequisites`: What's needed before starting.
*   `## 4. Procedural Steps`: **The core, detailed step-by-step instructions for the mode.**
*   `## 5. Artifact Management (If Applicable)`: How files are handled.
*   `## 6. Error Handling / Exceptional Cases`: Specific error handling for this procedure.
*   `## 7. Postconditions / Expected Outcome`: The state after successful execution.

This template provides a robust framework for documenting any mode's internal operational procedures in a clear, consistent, and actionable manner.