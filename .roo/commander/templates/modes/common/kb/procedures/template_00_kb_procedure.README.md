# Documentation: Template `template_00_kb_procedure.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Procedure documents**. These documents are stored within a mode's `kb/procedures/` directory and detail specific, step-by-step operational workflows, decision-making logic, or standard operating procedures (SOPs) that the mode itself executes.

They are the "how-to" guides for a mode's internal processes and are critical for ensuring consistent and reliable behavior. These procedures often elaborate on or are directly invoked by the mode's specific rules found in `[.roo/rules-[mode_slug]/]`. Examples include a Manager mode's main squad orchestration flow or a complex analysis sequence for a specialist Squad Member.

## 2. Usage

1.  **Copy Template:** When creating a new procedural document for a mode's KB by an agent like `meta-kb-editor` or a human developer:
    *   Copy `[.roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.md](.roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.md)` to the relevant mode's `kb/procedures/` directory (e.g., `[.roo/commander/modes/manager-data-product/kb/procedures/]`).
2.  **Rename File:** Rename the copied file descriptively, often using a numbered prefix and a short name indicating its content (e.g., `01-main-orchestration-flow.md`, `02-error-analysis-protocol.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[mode_slug_uppercase]`, `[Mode Name]`, `[mode_slug]`, `[ShortName]`, `[procedure_domain_tag]`) with values specific to the mode and the procedure.
    *   The `id` should be unique (e.g., `KB-PROC-MDP-MAIN-ORCH-FLOW-V1`).
    *   `target_audience` **MUST** include the mode's slug.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Fill in optional "Procedure Specific Fields" (`trigger_condition`, `primary_input`, etc.) if applicable, or remove them.
4.  **Define Procedure Content in Markdown (of the instance file):**
    *   Replace all `[Mode Name]` and `[mode_slug]` placeholders.
    *   **Crucially, customize Section 4 ("Procedural Steps")** with the detailed, step-by-step logic for this specific procedure, ensuring clarity for AI execution.
    *   Fill in other sections (Objective, Trigger, Prerequisites, Artifact Management, Error Handling, Postconditions) with information relevant to this procedure. Ensure all file paths use the `.roo/` anchor.

## 3. TOML Frontmatter Schema (for an instance of `template_00_kb_procedure.md`)

*   **`id` (String, Required):** Unique ID for the KB Procedure document.
    *   *Convention:* `KB-PROC-[mode_slug_uppercase]-[ShortName]-V[Version]`
    *   *Placeholder in template:* `"KB-PROC-[mode_slug_uppercase]-[ShortName]-V[Version]"`
*   **`title` (String, Required):** Title of the procedure article.
    *   *Placeholder in template:* `"[Mode Name]: Procedure - [Descriptive Title of the Procedure]"`
*   **`context_type` (String, Fixed: `"kb_procedure"`).**
*   **`scope` (String, Required):** Describes the procedure and its outcome for the mode.
    *   *Placeholder in template:* `"Details a specific operational procedure or workflow for the '[Mode Name]' (`[mode_slug]`) mode to [achieve specific outcome]."`
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
    *   *Placeholder in template:* `["[mode_slug]"]`
*   **`granularity` (String, Required):** Describes the nature of the procedure.
    *   *Options:* `"detailed_procedure"`, `"high_level_workflow_overview"`
    *   *Placeholder in template:* `"detailed_procedure"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"active"`, `"deprecated"`
*   **`created_date` (String, Required):** Date of procedure article creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this procedure document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"kb"`, `"procedure"`, `"workflow"`, `"sop"`, `"[mode_slug_tag]"`. Add content-specific tags.
    *   *Placeholder in template:* `["kb", "procedure", "workflow", "sop", "[mode_slug_tag]", "[procedure_domain_tag]"]`
*   `related_context` (Array of Strings, Optional): Links to relevant mode files, rules, or other KB articles.
    *   *Placeholders in template show examples.*
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.README.md"`

### Procedure Specific Fields (Optional in the instance's TOML)

*   `trigger_condition` (String, Optional): When or under what circumstances the mode executes this procedure.
    *   *Placeholder in template:* `"[When or under what circumstances does the mode execute this procedure? Or remove field.]"`
*   `primary_input` (String, Optional): Main input or starting state for this procedure.
    *   *Placeholder in template:* `"[What is the main input or starting state for this procedure? e.g., 'Assigned MDTM Task'. Or remove field.]"`
*   `primary_output_goal` (String, Optional): Main deliverable or end state this procedure aims to achieve.
    *   *Placeholder in template:* `"[What is the main deliverable or end state this procedure aims to achieve? Or remove field.]"`
*   `estimated_complexity` (String, Optional): Complexity of the procedure.
    *   *Options:* `"low"`, `"medium"`, `"high"`
    *   *Placeholder in template:* `"medium"`

## 4. Markdown Body Structure (for an instance of `template_00_kb_procedure.md`)

*   `# [Mode Name]: Procedure - {{ title }}`: Main title.
*   `## 1. Objective 🎯`: Purpose of this specific procedure for the mode.
*   `## 2. Trigger / When to Use ⚡`: Conditions for executing this procedure.
*   `## 3. Prerequisites 🔑`: What's needed before starting.
*   `## 4. Procedural Steps ⚙️`: **The core, detailed step-by-step instructions for the mode.**
*   `## 5. Artifact Management (If Applicable) 📂`: How files are handled.
*   `## 6. Error Handling / Exceptional Cases ⚠️`: Specific error handling for this procedure.
*   `## 7. Postconditions / Expected Outcome ✅`: The state after successful execution.

This template provides a robust framework for documenting any mode's internal operational procedures in a clear, consistent, and actionable manner, ensuring they can be reliably interpreted and executed by the AI mode.