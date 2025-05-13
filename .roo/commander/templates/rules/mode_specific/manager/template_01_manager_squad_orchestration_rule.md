+++
# --- Basic Metadata (Required for Manager Squad Orchestration Rule) ---
id = "[MANAGER_SLUG_UPPERCASE]-RULE-SQUAD-ORCH-V[Version]" # e.g., MDP-RULE-SQUAD-ORCH-V1
title = "[Manager Mode Name]: Rule - Squad Orchestration & MDTM Sub-Task Management"
context_type = "rules" # Fixed for rule documents
scope = "Defines the procedure for the '[Manager Mode Name]' ([manager_slug]) mode to orchestrate its specialist squad using MDTM sub-tasks."
target_audience = ["[manager_slug]"] # MUST be the slug of the Manager mode this rule applies to
granularity = "procedure"
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Initial version of this rule document when instantiated
tags = ["rules", "mode-specific", "[manager_slug_tag]", "manager", "squad-orchestration", "mdtm", "workflow"]
related_context = [
    ".roo/commander/modes/[manager_slug]/[manager_slug].mode.md", # Link to the Manager's mode definition
    ".roo/commander/modes/[manager_slug]/kb/procedures/01-main-orchestration-flow.md", # Link to its detailed KB flow
    ".roo/commander/modes/[manager_slug]/kb/reference/00-squad-composition.md", # Link to its squad definition
    ".roo/rules/02-mdtm-task-standard.md", # Workspace MDTM standard
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md" # Generic task template it uses
]
template_schema_doc = ".roo/commander/templates/rules/template_01_manager_squad_orchestration_rule.README.md" # Path to its own schema

# --- Rule Specific Fields (Optional) ---
# enforcement_level = "critical"
# rationale_summary = "Ensures consistent and effective MDTM-based orchestration of the specialist squad by the Manager mode."
# primary_input_source = "MDTM Task from Orchestrator (e.g., roo-commander)"
# primary_output_goal = "Completed primary MDTM task with consolidated squad deliverables."
+++

# [Manager Mode Name]: Rule - Squad Orchestration & MDTM Sub-Task Management

## 1. Objective

To define the standard procedure that the **`[Manager Mode Name]`** (`[manager_slug]`) mode **MUST** follow to:
*   Interpret its primary assigned MDTM task (received from its coordinator, e.g., `roo-commander`).
*   Plan and sequence the necessary work for its specialist squad members.
*   Create, delegate, and monitor MDTM sub-tasks for each squad member.
*   Manage the flow of artifacts between squad members.
*   Update its primary MDTM task with overall progress and final deliverables.
*   Report completion or critical issues back to its coordinator.

## 2. Scope & Applicability

*   **Scope:** This rule governs the core orchestration logic of the `[Manager Mode Name]` as it pertains to managing its designated squad and fulfilling its primary MDTM task.
*   **Applies To:** This rule applies exclusively to the `[Manager Mode Name]` (`[manager_slug]`) mode.

## 3. Orchestration Procedure

1.  **Ingest & Plan Primary MDTM Task:**
    *   Thoroughly read and understand your assigned primary MDTM task (e.g., from `roo-commander`). Note its `id`, `title`, `description`, `acceptance_criteria`, and any `input_artifacts`.
    *   Consult your KB `procedures/01-main-orchestration-flow.md` and `reference/00-squad-composition.md` to determine the full sequence of squad activities and the specific squad member responsible for each phase/output.
    *   Update the checklist in your *own* primary MDTM task to reflect these planned high-level phases (e.g., "- [ ] Phase 1: Delegate to [SquadMemberA]", "- [ ] Phase 2: Delegate to [SquadMemberB]").

2.  **Iterative Squad Sub-Task Delegation (Loop through phases defined in KB):**
    *   For each phase/step in your orchestrated workflow:
        1.  **Identify Squad Member:** Determine the correct squad member slug (e.g., `data-product-strategist`) for the current phase from your KB (`reference/00-squad-composition.md`).
        2.  **Determine Sub-Task Details:**
            *   `[SubTask_ID] = TASK-[SquadMemberPrefix]-[Timestamp]`
            *   `[SubTask_Path] = .roo/commander/tasks/[manager_slug]/[SubTask_ID].md` (or other organized path)
            *   `title`: Clearly define the objective for this squad member for this phase (e.g., "Define Product Strategy for PoC X").
            *   `type`: Specific to the phase (e.g., `"📊 DataProductDesignPhase"`).
            *   `input_artifacts`: Paths to outputs from the *previous* squad member's completed sub-task, or initial inputs from your primary task.
            *   `output_artifacts` (target): Define the expected primary output artifact name and its target location (e.g., `artifacts/design_outputs/[ProductName]/product_strategy.md` within the active session).
            *   `description`, `acceptance_criteria`, `checklist`: Provide detailed instructions for the squad member.
        3.  **Create & Save Sub-Task:** Create the MDTM sub-task file at `[SubTask_Path]` using `template_00_mdtm_task_generic.md`, populating all fields. Set `coordinator` to your `manager_slug` and `parent_task_id` to your primary MDTM task ID.
        4.  **Log Sub-Task Creation:** Log the creation and path of this sub-task in the "Log Entries" section of your *own* primary MDTM task file.
        5.  **Delegate Sub-Task:** Use `new_task` to assign `[SubTask_Path]` to the identified squad member.
        6.  **Monitor Sub-Task:** Await completion (squad member updates its MDTM task to "🟢 Done" and reports back). Periodically check the sub-task file if needed.
        7.  **Process Sub-Task Completion:**
            *   Verify the squad member's MDTM sub-task is "🟢 Done" and `output_artifacts` are correctly listed and created.
            *   Log the completion in your primary MDTM task file.
            *   Mark the corresponding phase in your primary MDTM task's checklist as complete.
            *   Prepare inputs for the *next* squad member in the sequence.

3.  **Manage Artifact Flow:**
    *   Ensure the `output_artifacts` from one completed sub-task are correctly referenced as `input_artifacts` for the subsequent sub-task.

4.  **Handle Squad Member Issues:**
    *   If a squad member reports "🔴 Error" or "⚪ Blocked" on their sub-task:
        *   Analyze the issue based on their MDTM task log.
        *   Attempt to resolve (provide clarification, adjust sub-task scope if minor).
        *   If unresolvable by you, update your primary MDTM task status to "⚪ Blocked" or "🔴 Error" and report the situation to your coordinator (`roo-commander`).

5.  **Update & Complete Primary MDTM Task:**
    *   Once all squad sub-tasks in your orchestrated flow are "🟢 Done" and the final consolidated deliverable (e.g., the PoC Plan) is produced by the last squad member:
        *   Ensure the path to this final deliverable is listed in the `output_artifacts` of your primary MDTM task.
        *   Update the `status` of your primary MDTM task to "🟢 Done".
        *   Update `updated_date`.
        *   Add a final summary to your primary MDTM task's log.
    *   Report completion of your primary MDTM task to your coordinator (`roo-commander`).

## 4. Rationale

*   Provides a standard, repeatable procedure for how Manager modes orchestrate their specialist squads.
*   Ensures all work is tracked via MDTM at both the Manager and Squad Member levels.
*   Facilitates clear handoffs and management of dependencies between squad members.
*   Centralizes the orchestration logic for a specific domain within the Manager mode, keeping `roo-commander` lean.

**This rule is the blueprint for how `[Manager Mode Name]` executes its core function of workflow and squad management.**