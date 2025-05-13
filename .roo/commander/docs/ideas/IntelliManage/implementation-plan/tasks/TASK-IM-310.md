+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-310"
title = "Write tests for core AI capabilities (e.g., linking suggestions, status inference)"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Verifies key AI value-adds
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["test", "unit-test", "ai", "linking", "status", "inference", "suggestion", "nlp"]
related_docs = ["DOC-AI-SPEC-001", "TASK-IM-303", "TASK-IM-304", "TASK-IM-307"]
depends_on = ["TASK-IM-303", "TASK-IM-304", "TASK-IM-307"] # Depends on the implementation of these AI capabilities
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write tests for core AI capabilities (e.g., linking suggestions, status inference)

## Description ✍️

Create unit tests for the specific logic within the AI Engine responsible for core intelligent features like suggesting links (`TASK-IM-303`), inferring status changes (`TASK-IM-304`), and parsing natural language commands (`TASK-IM-307`). These tests should mock external dependencies (CLE for data retrieval, LLM for generation/parsing) to isolate and verify the internal logic of these AI capabilities.

## Acceptance Criteria ✅

*   **Linking Suggestions (`TASK-IM-303`):**
    *   - [ ] Tests verify correct parent link suggestions (Feature->Epic, Task->Feature) based on mock artifact content and mock CLE query results.
    *   - [ ] Tests verify correct dependency link suggestions (Task->Task) based on mock artifact content and mock CLE query results.
    *   - [ ] Tests verify that existing links are correctly filtered out from suggestions.
    *   - [ ] Tests verify that suggestions are not made when no relevant links are found based on mock data.
    *   - [ ] Tests verify the structure of the returned suggestion list.
*   **Status Inference (`TASK-IM-304`):**
    *   - [ ] Tests verify correct parsing of various Git commit message formats (keywords + IDs).
    *   - [ ] Tests verify correct parsing of simple chat message formats.
    *   - [ ] Tests verify correct mapping from keywords to suggested statuses based on predefined rules.
    *   - [ ] Tests verify that the current status (from mock CLE) is considered when making suggestions (e.g., no redundant suggestions).
    *   - [ ] Tests verify the structure and content of the returned suggestion object.
*   **NLP Command Parsing (`TASK-IM-307`):**
    *   - [ ] Tests verify correct translation of various NL phrases for `create task/bug` into the structured command format (mocking LLM response).
    *   - [ ] Tests verify correct translation of various NL phrases for `list tasks/bugs` (including filters) into the structured command format (mocking LLM response).
    *   - [ ] Tests verify correct translation of various NL phrases for `update status` into the structured command format (mocking LLM response).
    *   - [ ] Tests verify handling of ambiguous NL input (expecting an ambiguity indicator from the mock LLM response).
*   **General:**
    *   - [ ] Tests use appropriate mocking for CLE data retrieval and LLM responses.
    *   - [ ] Tests are added to the project's automated unit test suite.
    *   - [ ] Test coverage for these specific AI logic modules meets project standards.

## Implementation Notes / Details 📝

*   Use the project's standard unit testing framework and mocking libraries.
*   **Mocking LLM:** This is crucial. Instead of making real LLM calls, mock the LLM API client to return predefined responses that simulate successful generation/parsing, errors, or ambiguous results based on the test case input.
*   **Mocking CLE:** Mock the CLE interface methods (`readArtifact`, `findArtifacts`) to return controlled data sets relevant to the specific test scenario (e.g., return specific artifacts for linking tests, return a specific current status for inference tests).
*   Focus tests on the internal logic of the AI Engine functions: keyword extraction, rule application, data transformation, interaction with mocks.

## Subtasks / Checklist ☑️

*   **Linking Suggestion Tests:**
    *   - [ ] Set up mocks for CLE `readArtifact` and `findArtifacts`.
    *   - [ ] Test parent link suggestion logic (Feature->Epic).
    *   - [ ] Test parent link suggestion logic (Task->Feature).
    *   - [ ] Test dependency link suggestion logic (Task->Task).
    *   - [ ] Test filtering of existing links.
    *   - [ ] Test scenario with no suggestions found.
*   **Status Inference Tests:**
    *   - [ ] Set up mocks for CLE `readArtifact` (to get current status).
    *   - [ ] Test Git commit parsing (Fixes, Closes, Refs, etc.).
    *   - [ ] Test chat message parsing ("finished", "working on").
    *   - [ ] Test keyword-to-status mapping logic.
    *   - [ ] Test handling of current status vs. suggested status.
*   **NLP Parsing Tests:**
    *   - [ ] Set up mocks for the LLM response (returning structured command JSON).
    *   - [ ] Test NL -> `create` command translation.
    *   - [ ] Test NL -> `list` command translation (with filters).
    *   - [ ] Test NL -> `update` command translation (status).
    *   - [ ] Test NL -> `show` command translation.
    *   - [ ] Test handling of ambiguous input (mock LLM indicating ambiguity).
*   **General:**
    *   - [ ] Integrate all tests into the CI/CD pipeline if applicable.
    *   - [ ] Review test coverage reports for these AI modules.