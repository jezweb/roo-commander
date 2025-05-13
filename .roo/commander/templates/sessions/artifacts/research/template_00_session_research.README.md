# Template: 35_session_research.md - Session Research Log

## 1. Purpose

This template is for documenting research activities undertaken during an active user interaction session. This includes search queries, sources consulted (URLs, file paths), key findings, and any conclusions drawn from the research. It helps track the information gathering process.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this research artifact.
    *   *Format:* `RESEARCH-[Topic]-[YYMMDDHHMMSS]`
    *   *Example:* `RESEARCH-AuthLibraries-240101170000`
*   `title` (String, Required): A descriptive title for the research activity.
    *   *Example:* `"Research on Authentication Libraries for Node.js"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this research belongs to.
*   `research_goal` (String, Optional): The specific question or goal of the research.
*   `keywords_used` (Array of Strings, Optional): Search terms or keywords used.
*   `sources_checked` (Array of Tables, Optional): List of sources consulted. Each table has:
    *   `source_name` (String, Required): Name or title of the source.
    *   `source_location` (String, Required): URL or path to the source.
    *   `notes` (String, Optional): Brief notes about the source's relevance or content.
*   `tags` (Array of Strings, Optional): Keywords (e.g., "research", "authentication", "nodejs", "libraries").

## 3. Markdown Body Structure

*   **`## Research Goal / Question`**:
    *   Elaborate on `research_goal`.
*   **`## Search Queries / Keywords Used`**:
    *   List specific search queries if applicable.
*   **`## Sources Consulted & Key Findings`**:
    *   For each significant source in `sources_checked`, provide a more detailed summary of findings.
    *   Use bullet points for clarity.
*   **`## Summary of Conclusions / Answers`**:
    *   Summarize the overall findings and how they address the research goal.
*   **`## Relevance to Session / Next Steps`**:
    *   Explain how this research impacts the current session and any subsequent actions.

## 4. Usage Guidelines

*   Use this to log structured research efforts during a session.
*   Store these artifacts in the `artifacts/research/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact.
*   This provides a traceable record of information gathering.