+++
# --- Basic Metadata (Required for Manager Orchestration Flow KB Procedure) ---
id = "KB-PROC-[MANAGER_SLUG_UPPERCASE]-MAIN-ORCH-FLOW-V[Version]" # e.g., KB-PROC-MDP-MAIN-ORCH-FLOW-V1
title = "[Manager Mode Name]: Main Orchestration Flow Procedure"
context_type = "kb_procedure" # Fixed type for KB procedure files
scope = "Details the primary end-to-end workflow for the '[Manager Mode Name]' ([manager_slug]) mode to orchestrate its squad and fulfill its main MDTM task."
target_audience = ["[manager_slug]"] # The Manager mode itself
granularity = "detailed_procedure"
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this procedure document when instantiated
tags = ["kb", "procedure", "manager", "[manager_slug_tag]", "orchestration", "workflow", "squad-management", "mdtm"]
related_context = [
    ".roo/commander/modes/[manager_slug]/[manager_slug].mode.md", # Link to the Manager's mode definition
    ".roo/commander/modes/[manager_slug]/kb/reference/00-squad-composition.md", # CRITICAL: Link to its squad definition
    ".roo/rules/02-mdtm-task-standard.md", # Workspace MDTM standard
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md" # Generic task template it uses for sub-tasks
]
template_schema_doc = ".roo/commander/templates/modes/kb/template_01_manager_orchestration_flow.README.md" # Path to its own schema

# --- Procedure Specific Fields (Optional) ---
# estimated_duration_of_flow = "[e.g., Varies, typically X-Y squad member cycles]"
# key_decision_points_in_flow = ["[List any major decision points this manager makes during orchestration]"]
+++

# [Manager Mode Name]: Main Orchestration Flow Procedure

## 1. Objective

This document outlines the step-by-step procedure that the **`[Manager Mode Name]`** (`[manager_slug]`) **MUST** follow to manage its specialist squad and achieve the overall goal defined in its primary MDTM task (received from its coordinator, e.g., `roo-commander`). This flow focuses on the sequential delegation of MDTM sub-tasks to squad members and the management of artifacts.

## 2. Prerequisites

*   The `[Manager Mode Name]` has received a primary MDTM task from its coordinator.
*   The `[Manager Mode Name]` has read and understood its primary MDTM task, including overall objectives, acceptance criteria, and any initial `input_artifacts`.
*   The `[Manager Mode Name]` has access to its KB, especially `kb/reference/00-squad-composition.md` (or the correctly named squad composition file for its specific squad).
*   An active `RooComSessionID` and `[Active Session Path]` are known (typically referenced in the primary MDTM task).

## 3. Orchestration Workflow Steps

*(This section MUST be customized based on the specific squad and workflow managed by THIS Manager. The following is a generic sequence; the actual squad members and their order will come from this Manager's `kb/reference/00-[squad_name]-squad-composition.md` file.)*

1.  **Phase 0: Initialization & Planning**
    1.  Log in your primary MDTM task file: "Starting orchestration for primary task `[Your Primary MDTM Task ID]`."
    2.  Consult your `kb/reference/00-[squad_name]-squad-composition.md` to identify the full list and sequence of your squad members and their expected primary output artifacts.
    3.  Update the checklist in your primary MDTM task to reflect the planned sequence of squad member delegations (e.g., "- [ ] Phase 1: Delegate to `[SquadMemberA_slug]` for `[OutputA]`").

2.  **Phase 1: Delegate to `[First Squad Member Slug]` (e.g., `data-product-strategist`)**
    1.  **Prepare Sub-Task:**
        *   Define `[SubTask_Title]` (e.g., "Define Product Strategy for [Project/PoC Name]").
        *   Define `[SubTask_Type]` (e.g., `"📊 DataProductDesignPhase"`).
        *   Identify `[SubTask_Input_Artifacts]` (from your primary MDTM task or session context).
        *   Define target `[SubTask_Output_Artifact_Path]` (e.g., `[Active Session Path]/artifacts/design_outputs/[ProductName]/product_strategy.md`).
        *   Create detailed `[SubTask_Description]`, `[SubTask_Acceptance_Criteria]`, and `[SubTask_Checklist]` for the `[First Squad Member Slug]`.
    2.  **Create & Delegate MDTM Sub-Task:** Follow `.roo/rules/02-mdtm-task-standard.md` to create and delegate the sub-task to `[First Squad Member Slug]`. Ensure `parent_task_id` is your primary MDTM task ID.
    3.  **Monitor & Process Completion:** Await completion. Verify output artifact at `[SubTask_Output_Artifact_Path]`. Log completion and artifact path in your primary MDTM task.

3.  **Phase 2: Delegate to `[Second Squad Member Slug]` (e.g., `data-product-ideator`)**
    1.  **Prepare Sub-Task:**
        *   Define `[SubTask_Title]`.
        *   Define `[SubTask_Type]`.
        *   `[SubTask_Input_Artifacts]` **MUST** include the `[SubTask_Output_Artifact_Path]` from Phase 1.
        *   Define target `[SubTask_Output_Artifact_Path]` for this phase's deliverable.
        *   Create detailed `[SubTask_Description]`, `[SubTask_Acceptance_Criteria]`, and `[SubTask_Checklist]`.
    2.  **Create & Delegate MDTM Sub-Task:** As above.
    3.  **Monitor & Process Completion:** As above.

4.  **Phase N: Delegate to `[Last Squad Member Slug]` (e.g., `data-product-poc-documenter`)**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Input_Artifacts]` will include outputs from all relevant previous phases.
        *   The target `[SubTask_Output_Artifact_Path]` will be the final consolidated deliverable (e.g., `data_product_poc_plan.md`).
    2.  **Create & Delegate MDTM Sub-Task:** As above.
    3.  **Monitor & Process Completion:** As above.

5.  **Phase N+1: Finalization & Reporting**
    1.  Verify all squad sub-tasks are "🟢 Done" and all expected output artifacts are created and correctly linked.
    2.  Update your primary MDTM task:
        *   List the path to the final consolidated deliverable (e.g., the PoC Plan) in your `output_artifacts` TOML field.
        *   Ensure all checklist items in your primary task are marked complete.
        *   Write a final summary in your primary task's log.
        *   Set your primary task `status` to "🟢 Done".
        *   Update `updated_date`.
    3.  Report completion of your primary MDTM task to your coordinator (e.g., `roo-commander`).

## 4. Artifact Management Summary

*   This Manager is responsible for defining the target paths for all key design artifacts produced by its squad. These paths should be within the active session's `artifacts/` directory (e.g., `artifacts/design_outputs/[ProductName]/[artifact_name].md`).
*   The path to each significant output artifact from a squad member **MUST** be recorded in that squad member's completed MDTM sub-task (`output_artifacts` field).
*   This Manager **MUST** ensure these paths are correctly passed as `input_artifacts` to subsequent squad members.
*   The path to the final, overall deliverable (e.g., the complete PoC Plan) **MUST** be recorded in this Manager's primary MDTM task (`output_artifacts` field).

## 5. Error Handling within Orchestration

*   If a squad member reports "🔴 Error" or "⚪ Blocked" on their sub-task:
    1.  Log the issue in your primary MDTM task.
    2.  Analyze the sub-task's log for details.
    3.  Attempt to resolve (e.g., provide clarification to the squad member, adjust sub-task scope if minor and within your authority).
    4.  If resolution requires significant deviation or is outside your capability, update your primary MDTM task status to "⚪ Blocked" or "🔴 Error" and escalate the issue to your coordinator (e.g., `roo-commander`), providing details of the problematic sub-task and squad member.

This procedure provides the core operational logic for the `[Manager Mode Name]` to fulfill its orchestration duties.