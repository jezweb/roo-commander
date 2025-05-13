# Documentation: Template `template_01_manager_orchestration_flow.md`

## 1. Purpose

This template defines the standard structure for a **Manager Mode's Main Orchestration Flow Procedure document**. This is a critical Knowledge Base (KB) file, typically named `01-main-orchestration-flow.md` (or similar, e.g., `01-[manager_slug_lc]-main-orchestration-flow.md`) and located in a Manager mode's `kb/procedures/` directory.

Its purpose is to detail the primary end-to-end workflow that the specific Manager mode (e.g., `manager-data-product`) follows to:
*   Break down its high-level assigned MDTM task (received from an Orchestrator like `roo-commander`).
*   Plan and sequence MDTM sub-tasks for its specialist squad members.
*   Manage the delegation of these sub-tasks.
*   Oversee the flow of artifacts between squad members.
*   Handle progress monitoring and basic issue resolution within its squad.
*   Finalize its own MDTM task and report completion.

This document is the core "business logic" for how a Manager mode operates its specific domain workflow.

## 2. Usage

1.  **Copy Template:** When creating the main orchestration procedure for a new Manager mode:
    *   Copy `.roo/commander/templates/modes/kb/template_01_manager_orchestration_flow.md` to the Manager's `kb/procedures/` directory.
2.  **Rename File:** Rename it appropriately, e.g., `01-manager-data-product-main-orchestration-flow.md` or `01-main-dp-orchestration-flow.md`.
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique, e.g., `KB-PROC-MDP-MAIN-ORCH-FLOW-V1`.
    *   `title`: `"[Manager Mode Name]: Main Orchestration Flow Procedure"`.
    *   `target_audience`: **MUST** be the Manager's slug.
    *   `tags`: Include `"[manager_slug_tag]"`, `"manager"`, `"orchestration"`, `"workflow"`.
    *   `related_context`: Link to the Manager's `.mode.md`, its squad composition reference, workspace MDTM standard, and the generic MDTM task template.
4.  **Customize Markdown Body:**
    *   Replace all bracketed placeholders like `[Manager Mode Name]`, `[manager_slug]`, `[squad_name]`, `[First Squad Member Slug]`, `[ProductName]`, etc., with values specific to THIS Manager mode and the workflow it manages.
    *   **Crucially, Section 3 ("Orchestration Workflow Steps") MUST be detailed extensively.** While the template provides a generic phased structure, the actual number of phases, the specific squad members involved in each phase, their sequence, and the exact nature of their sub-tasks and artifacts **MUST be customized** based on this Manager's domain and the squad it directs (as defined in its `kb/reference/00-[squad_name]-squad-composition.md`).

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `KB-PROC-[MANAGER_SLUG_UPPERCASE]-MAIN-ORCH-FLOW-V[Version]`.
*   **`title` (String, Required):** Title: `"[Manager Mode Name]: Main Orchestration Flow Procedure"`.
*   **`context_type` (String, Fixed: `"kb_procedure"`).**
*   **`scope` (String, Required):** Describes that this document details the Manager's primary workflow.
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the Manager mode.
*   **`granularity` (String, Fixed: `"detailed_procedure"`).**
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Document version.
*   **`tags` (Array of Strings, Required):** **MUST** include `"kb"`, `"procedure"`, `"manager"`, `"[manager_slug_tag]"`, `"orchestration"`, `"workflow"`, `"squad-management"`, `"mdtm"`.
*   `related_context` (Array of Strings, Required): Key related documents as listed in the template.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/modes/kb/template_01_manager_orchestration_flow.README.md"`

### Procedure Specific Fields (Optional)

*   `estimated_duration_of_flow` (String, Optional): High-level estimate.
*   `key_decision_points_in_flow` (Array of Strings, Optional): Any major forks or decisions the Manager makes.

## 4. Markdown Body Structure

*   `# [Manager Mode Name]: Main Orchestration Flow Procedure`: Main title.
*   `## 1. Objective`: Purpose of this orchestration flow for the specific Manager.
*   `## 2. Prerequisites`: What the Manager needs before starting this flow.
*   `## 3. Orchestration Workflow Steps`: **This is the core, highly customized section.** It details, phase by phase:
    *   Initialization and planning.
    *   Iterative delegation to squad members (identifying member, preparing sub-task details, creating/delegating MDTM sub-task, monitoring, processing completion).
    *   This section will be unique for each Manager based on its domain and squad.
*   `## 4. Artifact Management Summary`: How this Manager ensures artifacts are created, stored, and passed correctly.
*   `## 5. Error Handling within Orchestration`: How the Manager handles issues reported by its squad.

This template provides a robust framework for defining the primary operational logic of any Manager mode, ensuring it systematically orchestrates its squad using MDTM.