# Documentation: Template `template_01_manager_squad_orchestration_rule.md`

## 1. Purpose

This template defines the standard structure for creating a **Manager Squad Orchestration Rule document**. This type of mode-specific rule is essential for any "Manager" archetype mode (e.g., `manager-data-product`) as it details the core logic for how the Manager:
1.  Receives a high-level MDTM task from its coordinator (e.g., `roo-commander`).
2.  Plans the sequence of operations for its specialist "squad" members.
3.  Creates, delegates, and monitors MDTM sub-tasks for each squad member.
4.  Manages the flow of artifacts (inputs/outputs) between squad members.
5.  Reports overall progress and completion back to its coordinator.

This rule is typically named `01-[manager_slug]-squad-orchestration.md` and stored in the Manager's specific rule directory (e.g., `.roo/rules-manager-data-product/`).

## 2. Usage

1.  **Copy Template:** When defining the squad orchestration logic for a new Manager mode:
    *   Copy `.roo/commander/templates/rules/template_01_manager_squad_orchestration_rule.md` to the Manager's rule directory (e.g., `.roo/rules-manager-data-product/`).
2.  **Rename File:** Rename the copied file to `01-[manager_slug]-squad-orchestration.md` (e.g., `01-manager-data-product-squad-orchestration.md`). The `01-` prefix suggests it's a primary operational rule after core principles.
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique, e.g., `MDP-RULE-SQUAD-ORCH-V1`.
    *   `title`: `"[Manager Mode Name]: Rule - Squad Orchestration & MDTM Sub-Task Management"`.
    *   `target_audience`: **MUST** be the Manager's slug.
    *   `tags`: Include `"[manager_slug_tag]"`, `"manager"`, `"squad-orchestration"`, `"mdtm"`.
    *   `related_context`: Link to the Manager's `.mode.md`, its core KB orchestration procedure, its squad composition reference, the workspace MDTM standard, and the generic MDTM task template.
4.  **Customize Markdown Body:**
    *   Replace all bracketed placeholders like `[Manager Mode Name]` and `[manager_slug]`.
    *   The "Orchestration Procedure" (Section 3) provides a generic framework. While the core steps (Ingest, Plan, Delegate Sub-Tasks, Monitor, Complete) will be common, the specifics of the *sequence* of squad members and the *nature* of their sub-tasks will be detailed in the Manager's KB (`kb/procedures/01-main-orchestration-flow.md`) and referenced here. This rule defines *that it must follow its KB procedure*.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `[MANAGER_SLUG_UPPERCASE]-RULE-SQUAD-ORCH-V[Version]`.
*   **`title` (String, Required):** Title: `"[Manager Mode Name]: Rule - Squad Orchestration & MDTM Sub-Task Management"`.
*   **`context_type` (String, Fixed: `"rules"`).**
*   **`scope` (String, Required):** Describes that this rule governs how the specific Manager orchestrates its squad using MDTM.
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the Manager mode.
*   **`granularity` (String, Fixed: `"procedure"`).**
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Rule document version.
*   **`tags` (Array of Strings, Required):** **MUST** include `"rules"`, `"mode-specific"`, `"[manager_slug_tag]"`, `"manager"`, `"squad-orchestration"`, `"mdtm"`, `"workflow"`.
*   `related_context` (Array of Strings, Required): Key related documents as listed in the template.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/rules/template_01_manager_squad_orchestration_rule.README.md"`

### Rule Specific Fields (Optional)

*   `enforcement_level` (String, Optional): (e.g., `"critical"`).
*   `primary_input_source` (String, Optional): Typically "MDTM Task from Orchestrator".
*   `primary_output_goal` (String, Optional): Typically "Completed primary MDTM task with consolidated squad deliverables."

## 4. Markdown Body Structure

*   `# [Manager Mode Name]: Rule - Squad Orchestration & MDTM Sub-Task Management`: Main title.
*   `## 1. Objective`: Purpose of this rule for the specific Manager mode.
*   `## 2. Scope & Applicability`: Defines when this rule applies to the Manager.
*   `## 3. Orchestration Procedure`: The core step-by-step logic for how the Manager ingests its primary task, plans its squad's work, creates/delegates MDTM sub-tasks, monitors progress, manages artifact flow, handles issues, and reports completion. This section emphasizes reliance on its specific KB procedure for the domain-specific flow.
*   `## 4. Rationale`: Why this structured approach to squad orchestration is important.

This template ensures that all Manager modes have a consistent, documented internal process for their primary function of managing a specialist squad via MDTM.