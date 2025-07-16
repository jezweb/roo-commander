# Template: template_00_session_summary.md - Session Summary

## 1. Purpose

This template is for creating a concise summary of a user interaction session or a specific period within a session. It helps in quickly grasping the key outcomes, learnings, and next steps without needing to review the entire session log.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this summary artifact.
    *   *Format:* `SESSUM-[SummarizedSessionID]-[YYMMDDHHMMSS]`
    *   *Example:* `SESSUM-SESSION-InitialAuthDesign-2312200900-231220173000`
*   `session_id` (String, Required): The `RooComSessionID` of the session this summary belongs to.
*   `title` (String, Required): A brief, descriptive title for the summary.
    *   *Example:* `"Summary of Initial Authentication Design Session"`
*   `created_date` (String, Required, Timestamp): Timestamp of summary creation.
*   `summary_of_session_id` (String, Required): The ID of the session being summarized.
*   `summary_start_time` (Datetime, Required): The start time of the period being summarized.
*   `summary_end_time` (Datetime, Required): The end time of the period being summarized.
*   `key_outcomes` (Array of Strings, Optional): List of key outcomes or achievements.
*   `key_learnings` (Array of Strings, Optional): List of key learnings or insights.
*   `next_steps` (Array of Strings, Optional): List of recommended next steps or actions.
*   `related_tasks` (Array of Strings, Optional): List of MDTM Task IDs completed or significantly progressed.
*   `related_artifacts` (Array of Strings, Optional): List of relative paths to key artifacts produced.
    *   *Example:* `[".mdtm/sessions/SESSION-InitialAuthDesign-2312200900/summaries/SESSUM-SESSION-InitialAuthDesign-2312200900-231220173000.md"]`
*   `tags` (Array of Strings, Optional): Keywords for discoverability.

## 3. Markdown Body Structure

*   **`## Overview`**:
    *   Concise overview of the session's purpose and the period being summarized.
*   **`## Key Outcomes & Achievements`**:
    *   Summarize the main results, decisions, or accomplishments.
*   **`## Key Learnings & Insights`**:
    *   Highlight any significant learnings, challenges overcome, or insights gained.
*   **`## Next Steps & Recommendations`**:
    *   Outline clear, actionable next steps or recommendations.
*   **`## Related Tasks & Artifacts`**:
    *   Reference specific MDTM tasks and key artifacts produced.

## 4. Usage Guidelines

*   Use this template to provide a high-level overview of a session's progress or completion.
*   Store these summaries in a `summaries/` subdirectory within the original session's directory (e.g., `.mdtm/sessions/[OriginalSessionID]/summaries/[SummaryID].md`).
*   The `session_log.md` for the session should reference this summary artifact in its `related_artifacts` field.
