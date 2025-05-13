# Procedure: Initiate Manager Delegation

## 1. Objective

To guide `roo-commander` in handling a user's request to start a new design or workflow session that requires delegation to a specialized "Manager" mode. This involves selecting the appropriate Manager, ensuring an active work session, creating a top-level MDTM task for the Manager, and delegating control.

## 2. Trigger

This procedure is triggered when the user selects the option corresponding to "Start New Design / Workflow Session..." (or similar) from `roo-commander`'s initial options prompt (`kb/prompts/00-initial-options.md`).

## 3. Prerequisites

*   `roo-commander` has access to its KB, particularly `reference/00-available-managers-summary.md`.
*   `roo-commander` has access to the standard MDTM task template (`.roo/commander/templates/tasks/template_00_mdtm_task_generic.md`).
*   Workspace rules for session management (`.roo/rules/03-session-management-standard.md`) and MDTM tasks (`.roo/rules/02-mdtm-task-standard.md`) are in effect.

## 4. Procedure Steps

1.  **Acknowledge User Intent & Consult Available Managers:**
    *   Acknowledge the user's choice to start a new design/workflow.
    *   Read the content of `kb/reference/00-available-managers-summary.md`. This file maps user-friendly workflow descriptions to Manager mode slugs.
    *   *(Self-correction: If `00-available-managers-summary.md` is empty or only contains one relevant manager, proceed directly to step 4.2 with that manager. Otherwise, proceed to step 4.1)*

2.  **Present Manager Workflow Options (If Multiple Relevant Managers Exist):**
    *   Construct an `ask_followup_question` prompt:
        *   **Question:** "Great! Which specific type of design or workflow session would you like to initiate?"
        *   **Suggestions:** Populate these dynamically from the parsed content of `kb/reference/00-available-managers-summary.md`. Each suggestion should be the user-friendly workflow description.
    *   Await user selection. Let the chosen workflow description be `[Selected Workflow Description]`.
    *   From `kb/reference/00-available-managers-summary.md`, determine the `[Target Manager Slug]` corresponding to `[Selected Workflow Description]`.
    *   *(If only one manager is listed in the summary, this step can be skipped, and the `[Target Manager Slug]` is known).*

3.  **Ensure Active Work Session:**
    *   Check if there is a current active `RooComSessionID`.
    *   **If NO active session:**
        *   Inform the user: "To start the '[Selected Workflow Description]' workflow, we first need to begin a new work session."
        *   Invoke the "Start New Session (Standalone)" sub-procedure detailed within `kb/procedures/02-handle-session-mgmt-commands.md`. This will prompt the user for a session goal, create the session directory and `session_log.md`, and set the active `RooComSessionID`.
        *   If session creation fails or is cancelled by the user, report this and **end this procedure.**
    *   **If an active session EXISTS:**
        *   Confirm with the user: "Shall we use the current active session ('[Active Session Title]', ID: `[Active RooComSessionID]`) for this new '[Selected Workflow Description]' workflow, or start a new dedicated session?"
        *   Present options: "Use current session", "Start a new session for this workflow".
        *   If "Start a new session", invoke the "Start New Session (Standalone)" sub-procedure from `kb/procedures/02-handle-session-mgmt-commands.md`. If it fails/cancelled, **end this procedure.**
    *   At the end of this step, an active `RooComSessionID` and `[Active Session Path]` (e.g., `.roo/commander/sessions/[Active RooComSessionID]/`) **MUST** be established.

4.  **Create Top-Level MDTM Task for the Manager:**
    *   **Task Goal:** The overall objective is to complete the `[Selected Workflow Description]` (e.g., "Design Data Product PoC for [User's Project Idea]").
    *   **Determine MDTM Task Path & ID:**
        *   `[MDTM_Task_ID] = TASK-[TargetManagerSlugPrefix]-[YYYYMMDD-HHMMSS]` (e.g., `TASK-MDP-[Timestamp]`)
        *   `[MDTM_Task_Path] = .roo/commander/tasks/[TargetManagerSlug]/[MDTM_Task_ID].md` (Ensure `[TargetManagerSlug]` directory exists or can be created).
    *   **Prepare MDTM Task Content (using `template_00_mdtm_task_generic.md`):**
        *   `id`: `[MDTM_Task_ID]`
        *   `title`: "Orchestrate: [Selected Workflow Description] - Session: `[Active RooComSessionID]`"
        *   `status`: "🟡 To Do"
        *   `type`: "⚙️ ManagedWorkflow" (or a more specific type if defined)
        *   `priority`: "🟧 High" (typically)
        *   `created_date`: Current timestamp.
        *   `updated_date`: Current timestamp.
        *   `assigned_to`: `[Target Manager Slug]`
        *   `coordinator`: `"roo-commander"`
        *   `input_artifacts`: (Initially empty, or could link to the session log path if useful for the manager) `["[Active Session Path]/session_log.md"]`
        *   `related_docs`: `["[Active Session Path]/session_log.md"]`
        *   `tags`: `["mdtm", "manager-task", "[Target Manager Slug]", "session-" + [Active RooComSessionID]]`
        *   **Markdown Body - Description:** "Your objective is to manage and complete the '[Selected Workflow Description]' workflow. Please break this down into sub-tasks for your specialist squad, manage their execution, and ensure all final artifacts are produced and linked. All work should be performed in the context of session `[Active RooComSessionID]` located at `[Active Session Path]`. Refer to your KB for your specific orchestration procedures."
        *   **Markdown Body - Acceptance Criteria:**
            *   "- [ ] All squad sub-tasks are completed successfully."
            *   "- [ ] Final deliverable(s) for the '[Selected Workflow Description]' are produced and stored in session artifacts."
            *   "- [ ] This MDTM task is updated to '🟢 Done' with `output_artifacts` field populated."
        *   **Markdown Body - Checklist:** (Initially minimal, the Manager will populate its own detailed checklist here)
            *   "- [ ] Review overall goal and plan squad sub-tasks."
            *   "- [ ] Report completion to `roo-commander`."
    *   **Save MDTM Task File:** Use appropriate file system tools to write this content to `[MDTM_Task_Path]`.

5.  **Log MDTM Task Creation in Session Log:**
    *   Append an entry to the active `[Active Session Path]/session_log.md`:
        *   `"[Timestamp] - roo-commander: Created top-level MDTM task [MDTM_Task_ID] for [Target Manager Slug] to manage '[Selected Workflow Description]'. Path: [MDTM_Task_Path]"`
    *   Update the `related_tasks` array in the TOML frontmatter of `session_log.md` to include `[MDTM_Task_ID]`.

6.  **Delegate to Manager Mode:**
    *   Construct a `new_task` message for the `[Target Manager Slug]`:
        *   **Message:** "Please begin processing your assigned MDTM task: `[MDTM_Task_Path]`. This task is part of session `[Active RooComSessionID]`. Refer to the task file for all details and manage your squad accordingly."
    *   Execute the `new_task` tool call.

7.  **Inform User:**
    *   Report to the user: "Okay, I've initiated the '[Selected Workflow Description]' workflow. The `[Target Manager Slug]` mode will now take the lead and will guide you through the process. All activities will be logged under session `[Active RooComSessionID]`."
    *   `roo-commander` now enters a monitoring state for this top-level MDTM task, awaiting completion or error reports from the `[Target Manager Slug]`.

## 5. Error Handling

*   If `kb/reference/00-available-managers-summary.md` cannot be read or is empty, inform the user that no managed workflows are currently configured and revert to initial options.
*   If session creation fails (as per `procedures/02-handle-session-mgmt-commands.md`), report to user and stop.
*   If MDTM task file creation fails, log error, inform user, and stop.
*   If delegation via `new_task` to the Manager fails, log error, inform user, and potentially mark the created MDTM task as "🔴 Error" or "⚪ Blocked".

## 6. Postconditions

*   An active work session is established.
*   A top-level MDTM task has been created and assigned to the appropriate Manager mode.
*   The Manager mode has been activated to begin processing its assigned MDTM task.
*   The user has been informed of the delegation.
*   `roo-commander` is now monitoring the top-level MDTM task.