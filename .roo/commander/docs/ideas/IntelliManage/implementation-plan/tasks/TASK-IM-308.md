+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-308"
title = "Implement AI logic to read methodology from config via CLE for reporting"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "▶️ Medium" # Needed for context-aware reporting
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["ai", "reporting", "methodology", "config", "cle", "scrum", "kanban", "custom"]
related_docs = ["DOC-AI-SPEC-001", "DOC-METHODOLOGY-GUIDE-001", "TASK-IM-301", "TASK-IM-305", "TASK-IM-201"]
depends_on = ["TASK-IM-301", "TASK-IM-305", "TASK-IM-201"] # Depends on AI interface, reporting base, and CLE methodology reading
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement AI logic to read methodology from config via CLE for reporting

## Description ✍️

Enhance the AI Engine's reporting capability (`TASK-IM-305`) to be methodology-aware. This involves:
1.  Before generating a report, using the Core Logic Engine (CLE) interface (`getProjectConfig` or similar, from `TASK-IM-201`) to determine the `methodology` ("Scrum", "Kanban", "Custom", "None") set for the target project.
2.  Adapting the report generation logic based on the determined methodology:
    *   Offering or prioritizing methodology-specific reports (e.g., Sprint Summary for Scrum, Kanban Board/CFD for Kanban).
    *   Using the correct set of status values (standard or custom) when generating reports like the Kanban board view.
    *   Potentially tailoring LLM prompts for summarization based on the methodology context.

## Acceptance Criteria ✅

*   - [ ] The `generateReport` method (or its internal logic) calls the CLE to get the project's configured `methodology` before proceeding.
*   - [ ] Report generation logic branches based on the retrieved methodology.
*   - [ ] For "Scrum", reports like "Sprint Summary" are generated correctly using `sprint_id` filters.
*   - [ ] For "Kanban", reports like "Kanban Board" are generated using the appropriate standard or custom statuses.
*   - [ ] For "Custom", reports like "Kanban Board" use the `custom_statuses` list retrieved from the config via CLE.
*   - [ ] Methodology-inappropriate reports are handled gracefully (e.g., attempting to generate a Sprint Summary for a Kanban project returns an informative message or adapts).
*   - [ ] LLM prompts used for summarization (if any) potentially include the methodology context.
*   - [ ] Unit tests (`TASK-IM-305` tests) are updated or added to verify methodology-aware reporting behavior using mock CLE config data.

## Implementation Notes / Details 📝

*   Integrate the call to fetch project configuration early in the `generateReport` flow.
*   Use conditional logic (e.g., switch statement, if-else blocks) based on the methodology value.
*   For Kanban/Custom board reports, ensure the logic fetches the `custom_statuses` list from the config via CLE if the methodology is "Custom". Use standard statuses otherwise.
*   Define how to handle requests for reports not applicable to the current methodology (e.g., return an error message "Sprint Summary report is only available for Scrum projects").

## Subtasks / Checklist ☑️

*   - [ ] Integrate call to `CLE.getProjectConfig` (or equivalent) within `generateReport` logic.
*   - [ ] Add conditional logic based on `methodology` to select/adapt report generation flow.
*   - [ ] Ensure Kanban board generation uses standard statuses for "Kanban" methodology.
*   - [ ] Ensure Kanban board generation fetches and uses `custom_statuses` for "Custom" methodology.
*   - [ ] Ensure Sprint Summary generation correctly uses `sprint_id` and is primarily triggered for "Scrum" methodology.
*   - [ ] Implement graceful handling for methodology-inappropriate report requests.
*   - [ ] (Optional) Adapt LLM summarization prompts based on methodology.
*   - [ ] Add/Update unit tests for reporting, mocking different methodology settings in the config.
*   - [ ] Test Kanban board generation with standard statuses.
*   - [ ] Test Kanban board generation with mocked custom statuses.
*   - [ ] Test Sprint Summary generation for Scrum projects.
*   - [ ] Test handling of inappropriate report requests (e.g., Sprint Summary for Kanban).