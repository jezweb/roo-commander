+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-715"
title = "Write tests for commit message parsing and linking"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration tests
# reporter = "..."
priority = "▶️ Medium" # Tests core traceability feature
# estimated_effort = "M" # Medium - Requires mocking Git output and CLE updates
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["test", "integration-test", "unit-test", "git", "commit", "parsing", "linking", "automation", "cle"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-709", "TASK-IM-710", "TASK-IM-711"]
depends_on = ["TASK-IM-709", "TASK-IM-710", "TASK-IM-711"] # Depends on implementation of scanner, linking, and suggestion trigger
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write tests for commit message parsing and linking

## Description ✍️

Create unit and/or integration tests for the Git commit message scanning, parsing, and linking functionality implemented in `TASK-IM-709`, `TASK-IM-710`, and `TASK-IM-711`.

These tests should verify:
1.  The scanner correctly parses various commit messages to extract keywords, artifact IDs, and commit SHAs.
2.  The extracted references correctly trigger calls to `CLE.updateArtifact` to add the commit SHA to the `related_commits` field.
3.  The logic correctly identifies status update keywords and triggers the AI Engine's status inference capability.

## Acceptance Criteria ✅

*   **Parsing (`TASK-IM-709`):**
    *   - [ ] Unit tests verify correct extraction of single/multiple artifact IDs (TASK-XXX, BUG-XXX, EPIC-XXX) from mock commit messages.
    *   - [ ] Unit tests verify correct identification of configured keywords (`commit_link_keywords`, `commit_status_update_keywords`).
    *   - [ ] Unit tests verify handling of different formatting (case, spacing, colons).
    *   - [ ] Unit tests verify correct extraction of commit SHA.
*   **Linking (`TASK-IM-710`):**
    *   - [ ] Integration tests (mocking CLE `updateArtifact`) verify that `updateArtifact` is called with the correct artifact ID, project slug, and commit SHA to be added to `related_commits` when *any* configured keyword is found.
    *   - [ ] Tests verify duplicate SHAs are handled correctly (ideally ignored by CLE update logic).
*   **Status Suggestion Trigger (`TASK-IM-711`):**
    *   - [ ] Integration tests (mocking AI Engine interface) verify that the AI Engine's status inference method is called *only* when keywords from `commit_status_update_keywords` are found.
    *   - [ ] Tests verify the correct commit data (message, SHA, artifact ID, project slug) is passed to the AI Engine mock.
*   **General:**
    *   - [ ] Tests use mock Git log output or commit message strings as input.
    *   - [ ] Tests use appropriate mocking for CLE and AI Engine interfaces.
    *   - [ ] Tests are added to the project's automated test suite.

## Implementation Notes / Details 📝

*   **Unit vs. Integration:**
    *   Parsing logic (`TASK-IM-709`) is well-suited for pure unit tests with example strings.
    *   Testing the linking (`TASK-IM-710`) and AI trigger (`TASK-IM-711`) requires more integration-style tests, mocking the CLE and AI Engine interfaces called by the scanner/integration layer.
*   **Mocking `git log`:** If the implementation calls `git log`, mock the `execute_command` tool or Git library to return predefined commit message strings.
*   **Mocking CLE/AI:** Mock the `CLE.updateArtifact` method to verify it's called correctly for linking. Mock the AI Engine's `processEvent` (or similar) method to verify it's called correctly for status suggestions.

## Subtasks / Checklist ☑️

*   **Parsing Tests:**
    *   - [ ] Set up unit tests for the commit message parser function/regex.
    *   - [ ] Test parsing single reference (e.g., "Fixes TASK-123").
    *   - [ ] Test parsing multiple references (e.g., "Refs EPIC-01, Closes BUG-45").
    *   - [ ] Test parsing different keywords (link vs. status update).
    *   - [ ] Test parsing different formatting variations.
    *   - [ ] Test parsing messages with no relevant keywords/IDs.
*   **Linking Tests:**
    *   - [ ] Set up integration tests for the linking flow.
    *   - [ ] Implement mock for `CLE.updateArtifact`.
    *   - [ ] Test that `updateArtifact` is called with correct SHA for `related_commits` when *any* keyword is found.
    *   - [ ] Test handling of duplicate commit links.
*   **Status Suggestion Trigger Tests:**
    *   - [ ] Set up integration tests for the status suggestion trigger flow.
    *   - [ ] Implement mock for the AI Engine's status inference method.
    *   - [ ] Test that AI Engine mock is called *only* when status keywords (e.g., "Fixes", "Closes") are parsed.
    *   - [ ] Test that AI Engine mock is *not* called for linking keywords (e.g., "Refs").
    *   - [ ] Verify correct data is passed to the AI Engine mock.
*   **General:**
    *   - [ ] Integrate all tests into the CI/CD pipeline if applicable.