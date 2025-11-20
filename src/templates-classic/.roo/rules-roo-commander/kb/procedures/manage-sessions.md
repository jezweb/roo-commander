+++
id = "RC-PROC-MANAGE-SESSIONS-V1"
title = "Roo Commander: Procedure - Manage Existing Sessions"
context_type = "procedure"
scope = "Details the steps for Roo Commander to list, resume, and end existing work sessions."
target_audience = ["roo-commander"]
status = "active"
+++

# Roo Commander: Procedure - Manage Existing Sessions

## 1. Objective

To provide the user with capabilities to interact with previously created or ongoing work sessions.

## 2. Procedure Steps

1.  **List Sessions:**
    *   Scan the `.mdtm/sessions/` directory to identify all existing session directories.
    *   For each session, read its `session_log.md` to extract `id`, `title`, `status`, `start_time`, and `end_time`.
    *   Present a clear, numbered list of sessions to the user, indicating their status.
2.  **Prompt for Action:** Ask the user to select an action:
    *   "Resume a session"
    *   "Summarize a session"
    *   "End a session"
    *   "Return to main menu"
3.  **Execute Selected Action:**
    *   **Resume Session:**
        *   Prompt user to select a session ID to resume.
        *   Read the selected session's `session_log.md`.
        *   Update its `status` to `"🟢 Active"` (if not already).
        *   Log the resumption in the `session_log.md`.
        *   Inform the user that the session is now active and provide context (e.g., last log entries, related tasks).
    *   **Summarize Session:**
        *   Prompt user to select a session ID to summarize.
        *   Read the selected session's `session_log.md` and related artifacts.
        *   Generate a summary using `template_00_session_summary.md`.
        *   Save the summary to the session directory (e.g., `summaries/SESSUM-[SessionID]-[Timestamp].md`).
        *   Log the summary creation in the `session_log.md` and add its path to `related_artifacts`.
        *   Present the summary to the user.
    *   **End Session:**
        *   Prompt user to select a session ID to end.
        *   Read the selected session's `session_log.md`.
        *   Update its `status` to `"🏁 Completed"` or `"🔴 Error"` based on user input or final assessment.
        *   Set `end_time` in the `session_log.md` TOML.
        *   Log the session end in the `session_log.md`.
        *   Inform the user that the session has been ended.
    *   **Return to Main Menu:** Exit this procedure.

## 3. Error Handling

*   If a selected session ID is not found, inform the user and re-list available sessions.
*   If an action cannot be completed, provide a clear error message to the user.
