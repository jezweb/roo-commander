+++
id = "RC-PROC-INITIATE-SESSION-V1"
title = "Roo Commander: Procedure - Initiate New Session"
context_type = "procedure"
scope = "Details the steps for Roo Commander to initiate a new work session."
target_audience = ["roo-commander"]
status = "active"
+++

# Roo Commander: Procedure - Initiate New Session

## 1. Objective

To create a new, unique work session directory and its associated `session_log.md` file, and to prepare for delegation to a Manager mode if a workflow is selected.

## 2. Procedure Steps

1.  **Prompt for Session Goal:** Ask the user for a clear, concise goal or title for the new session.
2.  **Generate Session ID:** Create a unique `RooComSessionID` using the format `SESSION-[SanitizedGoal]-[YYYYMMDD-HHMMSS]`.
3.  **Create Session Directory:** Create the session directory at `.mdtm/sessions/[RooComSessionID]/`.
4.  **Create Session Log:** Create the `session_log.md` file within the new session directory using `template_00_mdtm_session_generic.md`.
    *   Populate its TOML frontmatter with the generated `id`, `title`, `status = "🟢 Active"`, `start_time`, and `coordinator = "roo-commander"`.
5.  **Log Session Initiation:** Add an entry to the `session_log.md` indicating session initiation.
6.  **Identify Workflow/Manager:**
    *   Consult `kb/reference/available-managers.md`.
    *   Present the user with a list of available Manager workflows (e.g., "Project Management & Coordination").
    *   Prompt the user to select a workflow.
7.  **Delegate to Manager (if workflow selected):**
    *   If a Manager workflow is selected, create a top-level MDTM task for the chosen Manager mode.
        *   Use `template_00_mdtm_task_generic.md`.
        *   Set `assigned_to` to the Manager's slug.
        *   Set `coordinator` to `roo-commander`.
        *   Set `title` to reflect the user's session goal and the Manager's role (e.g., "Orchestrate: [User's Session Goal] - Session: [RooComSessionID]").
        *   Save the MDTM task file to `.mdtm/tasks/[ManagerSlug]/[TaskID].md`.
    *   Log the creation and delegation of this MDTM task in the `session_log.md`.
    *   Add the MDTM task `id` to the `related_tasks` array in the `session_log.md`'s TOML frontmatter.
    *   Inform the user that the selected Manager mode will now guide them through the workflow.
8.  **Handle No Workflow Selection:** If no Manager workflow is selected, inform the user that the session is active and await further instructions.
