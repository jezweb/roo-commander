# Template: 39_session_feedback_item.md - Session Feedback Item

## 1. Purpose

This template is for capturing specific items of feedback received (from the user or other modes) or observations made during an active user interaction session. This could relate to the AI's performance, usability of tools, clarity of communication, or any other aspect of the interaction.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this feedback item.
    *   *Format:* `FEEDBACK-[Topic]-[YYMMDDHHMMSS]`
    *   *Example:* `FEEDBACK-ToolOutputClarity-240101210000`
*   `title` (String, Required): A concise title for the feedback item.
    *   *Example:* `"Feedback on Clarity of 'search_files' Tool Output"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this feedback belongs to.
*   `feedback_type` (String, Optional): Type of feedback.
    *   *Options:* `"Positive"`, `"Negative"`, `"Suggestion"`, `"Observation"`, `"Bug Report"`
*   `source_of_feedback` (String, Optional): Who provided the feedback (e.g., "User", "Mode:prime-coordinator", "Self-Observation").
*   `related_component_or_feature` (String, Optional): Specific tool, mode, or feature the feedback pertains to.
*   `tags` (Array of Strings, Optional): Keywords (e.g., "feedback", "usability", "tooling", "suggestion").

## 3. Markdown Body Structure

*   **`## Feedback / Observation Details`**:
    *   The full text or detailed description of the feedback or observation.
*   **`## Context / Scenario`**:
    *   Describe the situation or context in which the feedback was given or the observation was made.
*   **`## Suggested Action / Improvement (If Applicable)`**:
    *   Any proposed actions, solutions, or improvements based on the feedback.
*   **`## Follow-up Status (Optional)`**:
    *   Track if any action has been taken on this feedback item (e.g., "Logged as issue #123", "Discussed with team", "No action needed").

## 4. Usage Guidelines

*   Use this to log distinct pieces of feedback or important observations made during a session.
*   Store these artifacts in the `artifacts/feedback/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact.
*   This helps in systematically collecting and potentially acting upon feedback to improve the system or processes.