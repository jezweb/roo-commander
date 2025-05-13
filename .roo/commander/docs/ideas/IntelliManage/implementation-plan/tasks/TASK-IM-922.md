+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-922"
title = "Perform manual E2E testing of key user flows"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-009"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # QA Team / Dev Team members
# reporter = "..."
priority = "🔥 Highest" # Final validation before release
# estimated_effort = "L" # Large - Requires significant time and scenario execution
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["test", "manual-testing", "e2e", "workflow", "ux", "qa", "release-prep", "scenario-testing"]
related_docs = ["DOC-USAGE-GUIDE-001", "DOC-SETUP-GUIDE-001"]
depends_on = ["FEAT-IM-001", "FEAT-IM-002", "FEAT-IM-003", "FEAT-IM-004", "FEAT-IM-005", "FEAT-IM-006", "FEAT-IM-007", "FEAT-IM-008"] # Depends on all features being integrated
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Perform manual E2E testing of key user flows

## Description ✍️

Conduct comprehensive manual end-to-end (E2E) testing of the fully integrated IntelliManage v1.0 framework within the target development environment (e.g., VS Code with Roo Code). This involves testers acting as end-users, following common workflows and scenarios outlined in the Usage Guide (`DOC-USAGE-GUIDE-001`) and Setup Guide (`DOC-SETUP-GUIDE-001`).

The goal is to identify bugs, usability issues, inconsistencies, and deviations from expected behavior that may not have been caught by automated unit or integration tests. Testing should cover core functionalities, interactions between components (especially the coordination layer), methodology support, and integrations (using test GitHub repos if applicable).

## Acceptance Criteria ✅

*   - [ ] A test plan outlining key user flows and scenarios to be tested is created or referenced.
*   - [ ] Testers successfully set up a test workspace following the Setup Guide (`DOC-SETUP-GUIDE-001`).
*   - [ ] **Core PM Workflow:**
    *   - [ ] Testers can successfully initialize projects (Scrum, Kanban, Custom).
    *   - [ ] Testers can create, view, update, list, and delete/archive all artifact types (Initiative, Epic, Feature, Task, Bug) using both `!pm` commands and natural language (where implemented).
    *   - [ ] Hierarchical linking works as expected.
    *   - [ ] Subtask checklist management works as expected.
*   - [ ] **Layered Coordination Workflow:**
    *   - [ ] Testers can start/resume sessions via `session-manager`, and context is maintained (check handover summaries).
    *   - [ ] Testers can set and change session goals.
    *   - [ ] Delegating simple development tasks via `session-manager` correctly invokes `roo-dispatch` (observe logs/behavior) and eventually reports completion (using mock specialists if real ones aren't ready/stable).
    *   - [ ] Requesting handover summaries via `session-manager` correctly invokes `agent-session-summarizer` and produces a valid summary file.
    *   - [ ] Session logs are created and populated correctly.
*   - [ ] **Methodology Workflow:**
    *   - [ ] Status transitions are correctly validated according to the configured methodology (Scrum, Kanban, Custom).
    *   - [ ] `sprint_id` can be assigned and filtered for Scrum projects.
    *   - [ ] Custom statuses work as expected for Custom projects.
    *   - [ ] Basic reports (`!pm board`, `!pm report sprint-summary`) display correctly based on methodology.
*   - [ ] **Integration Workflow (Optional - if enabled & configured):**
    *   - [ ] Creating/updating tasks syncs correctly to a test GitHub repository's Issues.
    *   - [ ] Updating status/type/priority/tags syncs labels correctly.
    *   - [ ] Creating/updating Epics/Features syncs correctly to Milestones.
    *   - [ ] Making changes on GitHub (Issues/Labels/Milestones) syncs back correctly to IntelliManage artifacts.
    *   - [ ] Referencing task IDs in test commit messages correctly links the commit and triggers status suggestions.
*   - [ ] **Usability & Error Handling:**
    *   - [ ] `!pm help` provides accurate information.
    *   - [ ] Confirmation and error messages are clear, consistent, and helpful (`TASK-IM-805`, `TASK-IM-806`).
    *   - [ ] The overall workflow feels intuitive and efficient for the tested scenarios.
*   - [ ] All significant bugs, usability issues, or deviations found during testing are documented in the project's issue tracker.
*   - [ ] Critical and high-priority bugs identified are addressed before finalizing this task.

## Implementation Notes / Details 📝

*   **Test Plan:** Define specific scenarios, e.g., "Create a new Feature under an Epic, add 3 Tasks, delegate one task via session-manager, mark another as Done, check the Kanban board report."
*   **Environment:** Use a clean test workspace and potentially a dedicated test GitHub repository.
*   **Mocking:** While this is E2E, mocking *external* dependencies (LLM for complex generation if unstable, actual specialist mode execution if focusing only on PM flow) might be necessary to isolate IntelliManage functionality. However, test *with* real components where possible.
*   **Documentation:** Use the Setup and Usage guides as primary references for expected behavior.
*   **Bug Tracking:** Use a consistent process for reporting and tracking issues found.

## Subtasks / Checklist ☑️

*   - [ ] Develop or reference a manual E2E test plan/checklist covering key workflows.
*   - [ ] Set up the test environment (workspace, test project configs, test GitHub repo if needed).
*   - [ ] Execute setup and configuration tests based on `DOC-SETUP-GUIDE-001`.
*   - [ ] Execute core PM workflow tests (CRUD, linking, subtasks) for different artifact types.
*   - [ ] Execute layered coordination workflow tests (session start/resume, goal setting, delegation to dispatch, handover summary).
*   - [ ] Execute methodology-specific workflow tests (Scrum status/sprints, Kanban status/board, Custom status).
*   - [ ] Execute reporting command tests (`!pm board`, `!pm report ...`).
*   - [ ] Execute GitHub integration tests (if enabled) - sync both ways, commit linking.
*   - [ ] Execute NLP command tests for core actions.
*   - [ ] Evaluate usability, confirmation messages, and error handling throughout testing.
*   - [ ] Document all findings (bugs, issues, feedback) in the issue tracker.
*   - [ ] Verify fixes for critical/high-priority bugs found during testing.
*   - [ ] Sign off on E2E testing completion.