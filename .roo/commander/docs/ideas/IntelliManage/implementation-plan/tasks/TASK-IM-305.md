+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-305"
title = "Implement basic Reporting capability (CLE Query -> LLM Summarization/Formatting -> Output)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "▶️ Medium" # Reporting is valuable but builds on core data
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["ai", "llm", "reporting", "summarization", "visualization", "cle", "scrum", "kanban"]
related_docs = ["DOC-AI-SPEC-001", "DOC-METHODOLOGY-GUIDE-001", "TASK-IM-301"]
depends_on = ["TASK-IM-301", "TASK-IM-104", "TASK-IM-201"] # Depends on AI interface, CLE base, methodology reading
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement basic Reporting capability (CLE Query -> LLM Summarization/Formatting -> Output)

## Description ✍️

Implement the AI Engine capability to generate basic project reports based on user requests or coordinator triggers. This involves:
1.  Receiving a report request (e.g., report type, project slug, filter options) via the interface defined in `TASK-IM-301` (e.g., `generateReport(reportType, options)`).
2.  Determining the project's methodology via the CLE (`getProjectConfig`).
3.  Querying the Core Logic Engine (CLE) using `findArtifacts` to retrieve the necessary artifact data based on the report type and options (e.g., tasks in a specific sprint, tasks per status).
4.  Processing the retrieved data and potentially using an LLM to summarize or format it into a human-readable report (e.g., Markdown text, potentially Mermaid syntax for simple charts).
5.  Returning the generated report content back to the caller (coordinator).

Initial focus on basic reports like:
*   Text-based Kanban board view.
*   Simple Sprint Summary (completed/remaining tasks).
*   (Optional) Textual Burndown/CFD data points.

## Acceptance Criteria ✅

*   - [ ] AI Engine exposes a method (e.g., `generateReport`) as defined in `TASK-IM-301`.
*   - [ ] The method accepts report type, project slug, and relevant filter options.
*   - [ ] The method correctly fetches the project's methodology via CLE.
*   - [ ] The method formulates appropriate CLE `findArtifacts` queries based on the report type and options.
*   - [ ] Logic exists to process the artifact data retrieved from CLE.
*   - [ ] Logic exists (potentially using LLM) to format the data into a text-based Kanban board view (columns based on status).
*   - [ ] Logic exists (potentially using LLM) to format the data into a simple Sprint Summary (listing completed/remaining items for a given sprint ID).
*   - [ ] (Optional) Logic exists to calculate and format basic Burndown or CFD data points.
*   - [ ] The method returns the generated report as a string (e.g., Markdown).
*   - [ ] The method handles cases where no relevant data is found for the report.
*   - [ ] The method handles errors during CLE query or LLM processing.
*   - [ ] Unit tests cover the report generation logic for Kanban board and Sprint Summary using mock CLE data.

## Implementation Notes / Details 📝

*   **Report Types:** Define constants or enums for the supported `reportType` values (e.g., `KANBAN_BOARD`, `SPRINT_SUMMARY`, `BURNDOWN_DATA`).
*   **CLE Queries:** Construct queries carefully based on the report needed.
    *   Kanban Board: Need all relevant tasks grouped by status.
    *   Sprint Summary: Need tasks filtered by `sprint_id`, grouped by status (especially "Done" vs. others).
    *   Burndown/CFD: Need historical status change data (requires logging timestamps, potentially out of scope for v1 basic reporting).
*   **LLM Use:** LLMs can be helpful for summarizing lists of tasks or formatting output nicely, but simple reports like Kanban boards might be achievable with direct formatting logic. Evaluate the trade-off. If using LLM, provide the structured data from CLE as context.
*   **Formatting:** Use Markdown for textual reports. Consider using Mermaid syntax (`graph TD`, `gantt`, etc.) embedded in the Markdown for simple visualizations that render in compatible viewers.
*   **Methodology Awareness:** The report generation should adapt. Don't offer a Sprint Summary for a Kanban project. The Kanban board should use standard or custom statuses based on the project config.

## Subtasks / Checklist ☑️

*   - [ ] Implement the `generateReport` interface method in the AI Engine.
*   - [ ] Implement logic to fetch project methodology via CLE.
*   - [ ] Implement logic to formulate CLE queries for Kanban board data.
*   - [ ] Implement logic to format data into a text/Markdown Kanban board view.
*   - [ ] Implement logic to formulate CLE queries for Sprint Summary data (filter by `sprint_id`).
*   - [ ] Implement logic to format data into a text/Markdown Sprint Summary.
*   - [ ] (Optional) Design/Implement logic for Burndown/CFD data point calculation/formatting.
*   - [ ] Implement error handling for CLE queries and LLM calls (if used).
*   - [ ] Implement handling for empty result sets.
*   - [ ] Write unit tests for Kanban board generation (mocking CLE).
*   - [ ] Write unit tests for Sprint Summary generation (mocking CLE).
*   - [ ] (Optional) Write unit tests for Burndown/CFD data generation.