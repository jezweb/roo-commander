+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-509"
title = "Write tests for specialist selection logic"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-005"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing roo-dispatch tests
# reporter = "..."
priority = "🔥 Highest" # Tests core dispatch intelligence
# estimated_effort = "M" # Medium - Requires setting up various mock contexts
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "roo-dispatch", "test", "unit-test", "rule-test", "specialist-selection", "delegation", "context"]
related_docs = ["RULES-ROO-DISPATCH-001", "TASK-IM-505"]
depends_on = ["TASK-IM-505"] # Depends on the implementation of the selection logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write tests for specialist selection logic

## Description ✍️

Create unit tests (or rule tests) for the `roo-dispatch` mode's specialist selection algorithm, as implemented in `TASK-IM-505`. These tests should verify that the logic correctly selects the most appropriate specialist mode(s) based on various inputs, including task artifact content, project Stack Profile, and available mode summaries.

## Acceptance Criteria ✅

*   - [ ] Tests correctly mock the input task artifact content (TOML & Markdown) for different scenarios (e.g., Python task, React task, testing task).
*   - [ ] Tests correctly mock the project's Stack Profile (`.ruru/context/stack_profile.json`).
*   - [ ] Tests correctly mock the available modes summary (`.ruru/modes/roo-commander/kb/kb-available-modes-summary.md`).
*   - [ ] Tests verify that the correct specialist is selected for common coding tasks based on language/framework mentioned in the task or stack profile (e.g., `dev-python`, `dev-react`, `dev-css`).
*   - [ ] Tests verify that the correct specialist is selected for common testing tasks based on type (e.g., `test-unit`, `test-e2e`).
*   - [ ] Tests verify that the correct specialist is selected for other task types (e.g., `util-refactor`, `util-writer` for docs).
*   - [ ] Tests verify that prioritization logic works (e.g., choosing a specific framework specialist over a general frontend one).
*   - [ ] Tests verify the handling of the "no suitable specialist found" scenario (e.g., specific error reported).
*   - [ ] Tests verify the handling of ambiguous selection scenarios (e.g., correct reporting or default selection based on defined strategy).
*   - [ ] Tests are added to the project's automated test suite.
*   - [ ] Test coverage for the specialist selection logic meets project standards.

## Implementation Notes / Details 📝

*   Use the project's standard unit/rule testing framework.
*   **Mocking Context:** The core of these tests involves setting up realistic mock data for:
    *   The input task artifact (varying descriptions, types, tags).
    *   The Stack Profile (different technology stacks).
    *   The available modes summary (defining different specialists with specific capabilities and tags).
*   **Testing Logic:** Invoke the specialist selection rule(s) with the mocked context and assert that the correct specialist mode ID(s) are selected (e.g., stored in the expected rule variable).
*   For ambiguity/no-specialist-found cases, assert that the correct error/reporting path is triggered within the rules.

## Subtasks / Checklist ☑️

*   - [ ] Set up test file/suite structure for specialist selection tests.
*   - [ ] Create mock task artifact data (Python, JS, React, CSS, Testing, Docs, etc.).
*   - [ ] Create mock Stack Profile data (Python backend, React frontend, etc.).
*   - [ ] Create mock available modes summary data (defining various specialists).
*   - [ ] Write test case: Select Python dev for Python task.
*   - [ ] Write test case: Select React dev for React task.
*   - [ ] Write test case: Select CSS dev/util for CSS task.
*   - [ ] Write test case: Select Unit test agent for unit test task.
*   - [ ] Write test case: Select E2E test agent for E2E test task.
*   - [ ] Write test case: Select Refactor util for refactoring task.
*   - [ ] Write test case: Verify prioritization (e.g., `dev-react` chosen over `dev-frontend`).
*   - [ ] Write test case: Scenario where no specialist matches.
*   - [ ] Write test case: Scenario where multiple specialists match (test ambiguity handling).
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.
*   - [ ] Review test coverage reports for selection logic.