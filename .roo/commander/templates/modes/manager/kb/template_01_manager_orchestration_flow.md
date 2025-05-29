+++
# --- Basic Metadata (Required for Manager Orchestration Flow KB Procedure) ---
id = "KB-PROC-[manager_slug_uppercase]-MAIN-ORCH-FLOW-V[Version]" # Placeholder: e.g., KB-PROC-MDP-MAIN-ORCH-FLOW-V1
title = "[Manager Mode Name]: Main Orchestration Flow Procedure for [Managed Domain]" # Placeholder
context_type = "kb_procedure" # Fixed type for KB procedure files
scope = "Details the primary end-to-end workflow for the '[Manager Mode Name]' (`[manager_slug]`) mode to orchestrate its '[squad_name]' squad and fulfill its main MDTM task of [overall_goal_of_manager]." # Placeholder
target_audience = ["[manager_slug]"] # Placeholder: The Manager mode itself
granularity = "detailed_procedure"
status = "draft" # Default for a new procedure
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this procedure document instance
tags = ["kb", "procedure", "manager", "[manager_slug_tag]", "orchestration", "workflow", "squad-management", "mdtm", "[domain_tag]"] # Placeholder: Add specific tags
related_context = [
    ".roo/commander/modes/[manager_slug]/[manager_slug].mode.md", # Placeholder: Link to the Manager's mode definition
    ".roo/rules-[manager_slug]/01-[manager_slug]-squad-orchestration.md", # Placeholder: Link to its squad orchestration rule
    ".roo/commander/modes/[manager_slug]/kb/reference/00-[squad_name_lc]-squad-composition.md", # Placeholder: CRITICAL - Link to its squad definition
    ".roo/rules/02-mdtm-task-standard.md", # Workspace MDTM standard
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md" # Generic task template it uses for sub-tasks
]
template_schema_doc = ".roo/commander/templates/modes/manager/kb/template_01_manager_orchestration_flow.README.md"

# --- Procedure Specific Fields (Optional - for the instance, fill as needed) ---
# estimated_duration_of_flow = "[e.g., Varies, typically X-Y squad member cycles. Or remove field.]" # Placeholder or remove
# key_decision_points_in_flow = ["[List any major decision points this manager makes during orchestration. Or remove array field.]"] # Placeholder or remove
+++

# [Manager Mode Name]: Main Orchestration Flow Procedure for [Managed Domain]

## 1. Objective 🎯

This document outlines the step-by-step procedure that the **`[Manager Mode Name]`** (`[manager_slug]`) mode **MUST** follow to manage its specialist `[squad_name]` squad and achieve the overall goal defined in its primary MDTM task (received from its coordinator, e.g., `👑 Roo Commander`). This flow focuses on the sequential delegation of MDTM sub-tasks to squad members and the management of artifacts to produce the `[primary_workflow_deliverable_of_manager]`.

## 2. Prerequisites 🔑

*   The `[Manager Mode Name]` has received a primary MDTM task from its coordinator.
*   The `[Manager Mode Name]` has read and understood its primary MDTM task, including overall objectives, acceptance criteria, and any initial `input_artifacts`.
*   The `[Manager Mode Name]` has access to its KB, especially `[.roo/commander/modes/[manager_slug]/kb/reference/00-[squad_name_lc]-squad-composition.md]` (replace placeholders).
*   An active `RooComSessionID` and `[ActiveSessionPath]` (e.g., `[.roo/commander/sessions/[SESSION_ID]/]`) are known (typically referenced in the primary MDTM task).
*   The target `[ProductNameOrIdentifier]` for the workflow (used for artifact naming/paths) is known.

## 3. Orchestration Workflow Steps ⚙️

*(This section **MUST** be customized based on the specific squad and workflow managed by THIS Manager. The following is a generic sequence; the actual squad members, their order, specific sub-task details, and artifact names will come from this Manager's `kb/reference/00-[squad_name_lc]-squad-composition.md` file and the nature of its domain.)*

1.  **Phase 0: Initialization & Planning**
    1.  Log in your primary MDTM task file: "Starting orchestration for primary task `[Your Primary MDTM Task ID]`. Session ID: `[Active RooComSessionID]` for `[ProductNameOrIdentifier]`."
    2.  Consult your `[.roo/commander/modes/[manager_slug]/kb/reference/00-[squad_name_lc]-squad-composition.md]` to identify the full list and sequence of your squad members and their expected primary output artifacts.
    3.  Update the checklist in your primary MDTM task to reflect the planned sequence of squad member delegations (e.g., "- [ ] Phase 1: Delegate to `[SquadMemberA_slug]` for `[OutputA_filename]`).

2.  **Phase 1: Delegate to `[First Squad Member Slug]` (e.g., `data-product-strategist`)**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Title]`: "[Action for Phase 1, e.g., Define Product Strategy] for `[ProductNameOrIdentifier]` PoC"
        *   `[SubTask_Type]`: "[Type of task, e.g., `📊 DataProductDesignPhase`]"
        *   `[SubTask_Input_Artifacts]`: [List `.roo/` anchored paths to initial inputs from your primary MDTM task or session context].
        *   `[Target_Output_Artifact_Path]`: `[ActiveSessionPath]/artifacts/[output_subdir]/[ProductNameOrIdentifier]/[output_filename_phase1_v1.md]` (Be specific based on squad composition doc).
        *   `[SubTask_Description]`, `[SubTask_Acceptance_Criteria]`, `[SubTask_Checklist]`: Provide detailed instructions for the `[First Squad Member Slug]`, referencing the overall goal and the specific output template they should use (e.g., `[.roo/commander/templates/design_artifacts/some_template.md]`).
    2.  **Create & Delegate MDTM Sub-Task:** Follow `[.roo/rules/02-mdtm-task-standard.md]` to create and delegate the sub-task to `[First Squad Member Slug]`. Ensure `parent_task_id` is your primary MDTM task ID, and `coordinator` is `[manager_slug]`.
    3.  **Monitor & Process Completion:** Await "🟢 Done". Verify output artifact at `[SubTask_Output_Artifact_Path]`. Log completion and artifact path in your primary MDTM task. Let `[Phase1OutputDocPath]` be this path.

3.  **Phase 2: Delegate to `[Second Squad Member Slug]` (e.g., `data-product-ideator`)**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Title]`: "[Action for Phase 2] for `[ProductNameOrIdentifier]`"
        *   `[SubTask_Type]`: "[Type]"
        *   `[SubTask_Input_Artifacts]`: **MUST** include `["[Phase1OutputDocPath]"]` and any other necessary context.
        *   `[Target_Output_Artifact_Path]`: `[ActiveSessionPath]/artifacts/[output_subdir]/[ProductNameOrIdentifier]/[output_filename_phase2_v1.md]`
        *   `[SubTask_Description]`, `[SubTask_Acceptance_Criteria]`, `[SubTask_Checklist]`: Detailed instructions.
    2.  **Create & Delegate MDTM Sub-Task:** As above.
    3.  **Monitor & Process Completion:** As above. Let `[Phase2OutputDocPath]` be this path.

4.  **(Repeat for all intermediate squad members / phases as defined in this Manager's squad composition)**

5.  **Phase N: Delegate to `[Last Squad Member Slug]` (e.g., `data-product-poc-documenter`)**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Input_Artifacts]`: Will include outputs from all relevant previous phases (e.g., `["[Phase1OutputDocPath]", "[Phase2OutputDocPath]", ..., "[PhaseN-1OutputDocPath]"]`).
        *   `[Target_Output_Artifact_Path]`: `[ActiveSessionPath]/artifacts/[output_subdir]/[ProductNameOrIdentifier]/[final_consolidated_deliverable_filename_v1.md]` (e.g., `data_product_poc_plan_v1.md`).
        *   `[SubTask_Description]`, `[SubTask_Acceptance_Criteria]`, `[SubTask_Checklist]`: Detailed instructions for consolidation.
    2.  **Create & Delegate MDTM Sub-Task:** As above.
    3.  **Monitor & Process Completion:** As above. Let `[FinalDeliverablePath]` be this path.

6.  **Phase N+1: Finalization & Reporting**
    1.  Verify all squad sub-tasks are "🟢 Done" and the `[FinalDeliverablePath]` is correctly produced and accessible.
    2.  Update your primary MDTM task (received from your coordinator):
        *   List `[FinalDeliverablePath]` in your `output_artifacts` TOML field.
        *   Ensure all your checklist items (Phases 1-N) are marked "✅".
        *   Write a final summary in your primary task's log: "All phases for `[ProductNameOrIdentifier]` completed. Final deliverable available at `[FinalDeliverablePath]`."
        *   Set your primary task `status` to "🟢 Done".
        *   Update `last_updated` timestamp.
    3.  Report completion of your primary MDTM task to your coordinator (e.g., `👑 Roo Commander`).

## 4. Artifact Management Summary 📂

*   This Manager (`[manager_slug]`) is responsible for defining the target paths for all key artifacts produced by its squad. These paths **MUST** be within the active session's `artifacts/` directory (e.g., `[ActiveSessionPath]/artifacts/[output_subdir]/[ProductNameOrIdentifier]/[artifact_name].md`).
*   The path to each significant output artifact from a squad member **MUST** be recorded in that squad member's completed MDTM sub-task (`output_artifacts` field).
*   This Manager **MUST** ensure these paths are correctly passed as `input_artifacts` to subsequent squad members.
*   The path to the final, overall deliverable **MUST** be recorded in this Manager's primary MDTM task (`output_artifacts` field).
*   All path references **MUST** be workspace-root-relative, starting with `.roo/`.

## 5. Error Handling within Orchestration ⚠️

*   If a squad member reports "🔴 Error" or "⚪ Blocked" on their sub-task:
    1.  Log the issue in your primary MDTM task.
    2.  Analyze the sub-task's log for details.
    3.  Attempt to resolve (e.g., provide clarification to the squad member, adjust sub-task scope if minor and within your authority).
    4.  If resolution requires significant deviation or is outside your capability, update your primary MDTM task status to "⚪ Blocked" or "🔴 Error" and escalate the issue to your coordinator (e.g., `👑 Roo Commander`), providing details of the problematic sub-task and squad member, as per `[.roo/commander/docs/standards/09-error-handling-and-reporting-standard.md](.roo/commander/docs/standards/09-error-handling-and-reporting-standard.md)`.

This procedure provides the core operational logic for the `[Manager Mode Name]` to fulfill its orchestration duties for the `[Managed Domain]`.