# Template: template_00_session_blocker.md - Session Blocker/Issue Log

## 1. Purpose

This template is for documenting specific blockers or issues encountered during an active user interaction session that are impeding progress. It helps in tracking these impediments, their status, and any steps taken or planned for resolution.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this blocker artifact.
    *   *Format:* `BLOCKER-[BriefDescription]-[YYMMDDHHMMSS]`
    *   *Example:* `BLOCKER-StagingEnvDown-240101180000`
*   `title` (String, Required): A concise title for the blocker/issue.
    *   *Example:* `"Staging Environment Unresponsive"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this blocker belongs to.
*   `status` (String, Required): Current status of the blocker.
    *   *Options:* `"🔴 Open"`, `"🟡 In Progress"`, `"🟢 Resolved"`, `"⚪ On Hold"`
*   `severity` (String, Optional): Severity of the blocker.
    *   *Options:* `"High"`, `"Medium"`, `"Low"`
*   `impact_description` (String, Optional): How this blocker is affecting the session's goals.
*   `resolution_steps_taken` (Array of Strings, Optional): Steps already taken to resolve.
*   `next_action_for_resolution` (String, Optional): The immediate next step planned.
*   `tags` (Array of Strings, Optional): Keywords (e.g., "blocker", "environment", "dependency", "bug").

## 3. Markdown Body Structure

*   **`## Blocker / Issue Description`**:
    *   Detailed description of the blocker. What is happening? What is expected?
*   **`## Impact on Session Goals`**:
    *   Elaborate on `impact_description`.
*   **`## Steps Taken / Investigation`**:
    *   Detail `resolution_steps_taken`.
*   **`## Proposed Solution / Next Actions`**:
    *   Elaborate on `next_action_for_resolution`.
    *   If resolved, describe the final solution.
*   **`## Resolution Details (If Resolved)`**:
    *   Date resolved, who resolved it, how it was resolved.

## 4. Usage Guidelines

*   Use this to formally track any significant impediment during a session.
*   Store these artifacts in the `artifacts/blockers/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact, and its status updates.
*   This helps in managing and escalating issues effectively.