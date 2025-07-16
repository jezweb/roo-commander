# Schema Documentation: MDTM Session Log

This document outlines the TOML schema used for MDTM Session Log files, typically named `session_log.md` within a session-specific directory (e.g., `.roo/commander/sessions/[SESSION_ID]/`).

## Purpose

To provide a structured, persistent record of a user's interaction focused on achieving a particular objective, complementing MDTM tasks by linking related activities, artifacts, and decisions.

## TOML Frontmatter Schema

The following fields are defined within the `+++` TOML block:

*   **`id`** (String, Required)
    *   Unique identifier for the session.
    *   Format: Typically "SESSION-YYYYMMDD-HHMMSS".
    *   *Must be generated at runtime.*

*   **`title`** (String, Required)
    *   User-defined goal or auto-generated title describing the session's objective.
    *   *Must be defined at runtime.*

*   **`status`** (String, Required)
    *   Current status of the session.
    *   Allowed values: `"🟢 Active"`, `"⏸️ Paused"`, `"🏁 Completed"`, `"🔴 Error"`.
    *   *Default: `"🟢 Active"`.*

*   **`start_time`** (Datetime, Required)
    *   Timestamp indicating when the session log file was created.
    *   Format: ISO 8601 or similar standard datetime string.
    *   *Must be generated at runtime.*

*   **`end_time`** (Datetime, Optional)
    *   Timestamp indicating when the session was marked as Paused or Completed.
    *   Format: ISO 8601 or similar standard datetime string.
    *   *Set at runtime when applicable.*

*   **`coordinator`** (String, Required)
    *   The slug of the Coordinator mode (e.g., "prime-coordinator", "roo-commander") that initiated and manages this session.
    *   *Must be set at runtime.*

*   **`related_tasks`** (Array of Strings, Optional)
    *   A list of formal MDTM Task IDs (e.g., "TASK-...") that were spawned or are relevant to this session.

*   **`related_artifacts`** (Array of Strings, Optional)
    *   A list of file paths relative to the session's root directory (e.g., `note/NOTE-initial_plan-2506050100.md`, `summary/SUMMARY-final_report-2506050200.md`) for files created or used during the session.

*   **`tags`** (Array of Strings, Optional)
    *   Keywords relevant to the session's goal or content (e.g., "session", "log", "refactoring", "mode-creation").

## Markdown Body Structure

*   **`# Session Log`**: Main heading.
*   **`## Log Entries`**: Sub-heading for chronologically ordered log entries.
    *   Log entries are typically appended using Markdown list items (`- [Timestamp] Event description`).

## Related Context

*   `/.roo/rules/03-session-management-standard.md`: Defines the standard Session Management workflow and logging procedures.
