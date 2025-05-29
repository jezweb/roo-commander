# Documentation: Template `template_01_manager_orchestration_flow.md`

## 1. Purpose

This template defines the standard structure for a **Manager Mode's Main Orchestration Flow Procedure document**. This is a critical Knowledge Base (KB) file, typically named `01-main-orchestration-flow.md` (or similar, e.g., `01-[manager_slug_lc]-main-orchestration-flow.md`) and located in a Manager mode's `kb/procedures/` directory.

Its purpose is to detail the primary end-to-end workflow that the specific Manager mode (e.g., `🧑‍💼 Data Product Manager`) follows to:
*   Break down its high-level assigned MDTM task (received from an Orchestrator like `👑 Roo Commander`).
*   Plan and sequence MDTM sub-tasks for its specialist squad members.
*   Manage the delegation of these sub-tasks.
*   Oversee the flow of artifacts between squad members.
*   Handle progress monitoring and basic issue resolution within its squad.
*   Finalize its own MDTM task and report completion.

This document is the core "business logic" for how a Manager mode operates its specific domain workflow, and it is typically invoked by the Manager's `01-[manager_slug]-squad-orchestration.md` rule.

## 2. Usage

1.  **Copy Template:** When creating the main orchestration procedure for a new Manager mode by an agent like `meta-kb-editor` or a human developer:
    *   Copy `[.roo/commander/templates/modes/manager/kb/template_01_manager_orchestration_flow.md](.roo/commander/templates/modes/manager/kb/template_01_manager_orchestration_flow.md)` to the Manager's `kb/procedures/` directory.
2.  **Rename File:** Rename it appropriately, e.g., `01-main-data-product-orchestration-flow.md`.
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[manager_slug_uppercase]`, `[Manager Mode Name]`, `[manager_slug]`, `[Managed Domain]`, `[squad_name]`, `[overall_goal_of_manager]`, `[primary_workflow_deliverable_of_manager]`, `[domain_tag]`) with values specific to THIS Manager mode and the workflow it manages.
    *   The `id` should be unique (e.g., `KB-PROC-MDP-MAIN-ORCH-FLOW-V1`).
    *   `target_audience` **MUST** be the Manager's slug.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Ensure `related_context` links to the correct Manager's `.mode.md`, its squad orchestration rule, its squad composition reference, and relevant workspace standards.
4.  **Customize Markdown Body (of the instance file):**
    *   Replace all bracketed placeholders like `[Manager Mode Name]`, `[manager_slug]`, `[squad_name]`, `[First Squad Member Slug]`, `[ProductNameOrIdentifier]`, `[ActiveSessionPath]`, `[output_subdir]`, etc., with values specific to THIS Manager mode and its domain.
    *   **Crucially, Section 3 ("Orchestration Workflow Steps") MUST be detailed extensively.** While the template provides a generic phased structure, the actual number of phases, the specific squad members involved in each phase (from this Manager's squad composition document), their sequence, and the exact nature of their sub-tasks and artifacts **MUST be customized** based on this Manager's domain.
    *   Ensure all file paths use the `.roo/` anchor.

## 3. TOML Frontmatter Schema (for an instance of `template_01_manager_orchestration_flow.md`)

*   **`id` (String, Required):** Unique ID.
    *   *Convention:* `KB-PROC-[manager_slug_uppercase]-MAIN-ORCH-FLOW-V[Version]`
    *   *Placeholder in template:* `"KB-PROC-[manager_slug_uppercase]-MAIN-ORCH-FLOW-V[Version]"`
*   **`title` (String, Required):** Title of the procedure.
    *   *Placeholder in template:* `"[Manager Mode Name]: Main Orchestration Flow Procedure for [Managed Domain]"`
*   **`context_type` (String, Fixed: `"kb_procedure"`).**
*   **`scope` (String, Required):** Describes the procedure for the Manager.
    *   *Placeholder in template:* `"Details the primary end-to-end workflow for the '[Manager Mode Name]' (`[manager_slug]`) mode to orchestrate its '[squad_name]' squad and fulfill its main MDTM task of [overall_goal_of_manager]."`
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the Manager mode.
    *   *Placeholder in template:* `["[manager_slug]"]`
*   **`granularity` (String, Fixed: `"detailed_procedure"`).**
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
*   **`created_date` (String, Required):** Date of creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Document version instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"kb"`, `"procedure"`, `"manager"`, `"[manager_slug_tag]"`, `"orchestration"`, `"workflow"`, `"squad-management"`, `"mdtm"`. Add a domain-specific tag.
    *   *Placeholder in template:* `["kb", "procedure", "manager", "[manager_slug_tag]", "orchestration", "workflow", "squad-management", "mdtm", "[domain_tag]"]`
*   `related_context` (Array of Strings, Required): Key related documents as listed in the template, with placeholders for mode-specific paths.
*   **`template_schema_doc` (String, Required):** Path to this schema doc.
    *   *Value:* `".roo/commander/templates/modes/manager/kb/template_01_manager_orchestration_flow.README.md"`

### Procedure Specific Fields (Optional in the instance's TOML)

*   `estimated_duration_of_flow` (String, Optional): High-level estimate.
    *   *Placeholder in template:* `"[e.g., Varies, typically X-Y squad member cycles. Or remove field.]"`
*   `key_decision_points_in_flow` (Array of Strings, Optional): Any major forks or decisions the Manager makes.
    *   *Placeholder in template:* `["[List any major decision points this manager makes during orchestration. Or remove array field.]"]`

## 4. Markdown Body Structure (for an instance of `template_01_manager_orchestration_flow.md`)

*   `# [Manager Mode Name]: Main Orchestration Flow Procedure for [Managed Domain]`: Main title.
*   `## 1. Objective 🎯`: Purpose of this orchestration flow for the specific Manager.
*   `## 2. Prerequisites 🔑`: What the Manager needs before starting this flow.
*   `## 3. Orchestration Workflow Steps ⚙️`: **The core, highly customized section.** Details, phase by phase, how the Manager delegates to its specific squad members.
*   `## 4. Artifact Management Summary 📂`: How this Manager ensures artifacts are created, stored, and passed correctly.
*   `## 5. Error Handling within Orchestration ⚠️`: How the Manager handles issues reported by its squad.

This template provides a robust framework for defining the primary operational logic of any Manager mode, ensuring it systematically orchestrates its squad using MDTM and adheres to workspace standards.