+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-206"
title = "Write unit tests for status transition validation (Scrum, Kanban, Custom)"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-002"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Ensures workflow integrity
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "test", "unit-test", "cle", "methodology", "status", "validation", "workflow", "scrum", "kanban", "custom"]
related_docs = ["DOC-METHODOLOGY-GUIDE-001", "TASK-IM-202", "TASK-IM-204"]
depends_on = ["TASK-IM-202", "TASK-IM-204"] # Depends on the status validation logic implementation
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write unit tests for status transition validation (Scrum, Kanban, Custom)

## Description ✍️

Create a comprehensive suite of unit tests for the status transition validation logic implemented within the Core Logic Engine (CLE) in `TASK-IM-202` and `TASK-IM-204`. These tests should verify that the logic correctly allows valid status transitions and rejects invalid ones based on the project's configured methodology ("Scrum", "Kanban", "Custom", "None").

## Acceptance Criteria ✅

*   - [ ] Unit tests exist for validating status transitions under the "Scrum" methodology.
*   - [ ] Unit tests exist for validating status transitions under the "Kanban" methodology.
*   - [ ] Unit tests exist for validating status transitions under the "Custom" methodology (using mocked `custom_statuses` from config).
*   - [ ] Unit tests exist for validating status transitions under the "None" methodology (minimal validation).
*   - [ ] Tests cover various **valid** transitions for each applicable methodology (e.g., "To Do" -> "In Progress", "In Progress" -> "Review").
*   - [ ] Tests cover various **invalid** transitions for each applicable methodology (e.g., "Backlog" -> "Done", "Review" -> "Backlog").
*   - [ ] Tests for "Custom" methodology cover cases where the target status **is** in the `custom_statuses` list.
*   - [ ] Tests for "Custom" methodology cover cases where the target status **is not** in the `custom_statuses` list.
*   - [ ] Tests for "Custom" methodology cover the defined behavior when `custom_statuses` is missing/empty in the config.
*   - [ ] Tests verify that invalid transitions result in a specific `ValidationError` being thrown/returned.
*   - [ ] Tests verify that valid transitions allow the operation to proceed (e.g., no error thrown by the validation part).
*   - [ ] Tests mock the necessary dependencies, such as the function providing the project's methodology and custom statuses.
*   - [ ] Tests are added to the project's automated test suite.
*   - [ ] Test coverage for the status transition validation logic meets project standards.

## Implementation Notes / Details 📝

*   Use the project's standard unit testing framework and mocking libraries.
*   Mock the part of the CLE that retrieves the project's configuration (`methodology`, `custom_statuses`).
*   Call the status validation function/logic directly with different combinations of `current_status`, `proposed_status`, and mocked `methodology`/`custom_statuses`.
*   Assert the expected outcome: either success (no error) or a specific validation error for invalid transitions.
*   Clearly define the expected standard transition rules for Scrum/Kanban within the test setup or a shared constant file to ensure tests align with the implementation.
*   Organize tests logically per methodology.

## Subtasks / Checklist ☑️

*   - [ ] Set up test file/suite structure for status validation tests.
*   - [ ] Implement mocks for retrieving project configuration (`methodology`, `custom_statuses`).
*   - [ ] Define expected standard transition rules for Scrum/Kanban in test constants/setup.
*   - [ ] Write tests for valid Scrum transitions.
*   - [ ] Write tests for invalid Scrum transitions.
*   - [ ] Write tests for valid Kanban transitions.
*   - [ ] Write tests for invalid Kanban transitions.
*   - [ ] Write tests for Custom methodology - valid status (in list).
*   - [ ] Write tests for Custom methodology - invalid status (not in list).
*   - [ ] Write tests for Custom methodology - handling missing `custom_statuses` config.
*   - [ ] Write tests for None methodology validation.
*   - [ ] Ensure tests check for specific validation errors on failure.
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.
*   - [ ] Review test coverage reports for status validation logic.