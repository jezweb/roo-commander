+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-714"
title = "Write integration tests for core sync functionalities (Issue, Label, Milestone)"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration tests
# reporter = "..."
priority = "🔼 High" # Verifies the main sync features work end-to-end
# estimated_effort = "L" # Large - Requires setting up mock API interactions
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["test", "integration-test", "github", "sync", "issue", "label", "milestone", "e2e"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-703", "TASK-IM-704", "TASK-IM-706"]
depends_on = ["TASK-IM-703", "TASK-IM-704", "TASK-IM-706", "TASK-IM-708", "TASK-IM-713"] # Depends on implementation of sync, conflict resolution, error handling
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write integration tests for core sync functionalities (Issue, Label, Milestone)

## Description ✍️

Create integration tests that verify the end-to-end synchronization flows for GitHub Issues, Labels, and Milestones as implemented in `TASK-IM-703`, `TASK-IM-704`, and `TASK-IM-706`. These tests should simulate changes in both IntelliManage (triggering updates *to* GitHub) and GitHub (triggering updates *to* IntelliManage) and verify that the corresponding item in the other system is updated correctly according to the configuration and conflict resolution rules.

These tests will heavily rely on mocking the GitHub API client (`TASK-IM-702`) to simulate responses from GitHub without making actual network calls.

## Acceptance Criteria ✅

*   **Issue <-> Task Sync:**
    *   - [ ] Test: Creating an IntelliManage task creates a corresponding mock GitHub Issue with correct title, body, and link.
    *   - [ ] Test: Updating an IntelliManage task's title/description updates the mock GitHub Issue.
    *   - [ ] Test: Deleting/Archiving an IntelliManage task closes the mock GitHub Issue.
    *   - [ ] Test: Simulating a GitHub Issue update (title/body) triggers an update to the corresponding mock IntelliManage task (via mock CLE).
    *   - [ ] Test: Simulating closing/reopening a GitHub Issue triggers a status update on the mock IntelliManage task.
*   **Label <-> Metadata Sync:**
    *   - [ ] Test: Updating an IntelliManage task's status/type/priority/tags correctly updates labels on the mock GitHub Issue based on config.
    *   - [ ] Test: Simulating adding/removing relevant labels on a GitHub Issue correctly updates the corresponding metadata fields on the mock IntelliManage task.
    *   - [ ] Test: Automatic label creation (`TASK-IM-705`) is triggered correctly based on mock API responses indicating missing labels.
*   **Milestone <-> Epic/Feature Sync:**
    *   - [ ] Test: Creating an IntelliManage Epic/Feature creates a corresponding mock GitHub Milestone.
    *   - [ ] Test: Updating an IntelliManage Epic/Feature's title/description/status/date updates the mock GitHub Milestone.
    *   - [ ] Test: Closing/Archiving an IntelliManage Epic/Feature closes the mock GitHub Milestone.
    *   - [ ] Test: Simulating a GitHub Milestone update triggers an update to the mock IntelliManage Epic/Feature.
    *   - [ ] Test: Simulating closing/reopening a GitHub Milestone triggers a status update on the mock IntelliManage Epic/Feature.
*   **General:**
    *   - [ ] Tests correctly simulate different conflict resolution scenarios (`TASK-IM-708`) using mock timestamps and verify the expected outcome.
    *   - [ ] Tests correctly simulate GitHub API errors (`TASK-IM-713`) and verify appropriate handling/logging.
    *   - [ ] Tests use a mock GitHub API client and potentially a mock CLE/File System to control inputs and verify outputs.
    *   - [ ] Tests are added to the project's automated integration test suite.

## Implementation Notes / Details 📝

*   Use the project's integration testing framework.
*   **Mocking GitHub API:** This is the most critical part. Create mock implementations or use libraries (like `nock` for Node.js, `requests-mock` for Python) to intercept calls made by the GitHub API client (`TASK-IM-702`) and return predefined responses simulating:
    *   Successful creation/update/deletion.
    *   Specific error codes (401, 403, 404, 422, 429).
    *   Responses containing specific data (e.g., issue details with certain labels, different `updated_at` timestamps).
*   **Mocking CLE/FS:** Mock the CLE's `updateArtifact` method to verify it's called with the correct data when changes come *from* GitHub. Mock `readArtifact` and `findArtifacts` to provide the necessary input data when testing changes going *to* GitHub.
*   **Test Scenarios:** Design tests covering the full lifecycle and various update paths for each synced item type. Include tests for edge cases and error conditions.

## Subtasks / Checklist ☑️

*   - [ ] Set up integration test environment and mocking framework for GitHub API.
*   - [ ] Implement mock responses for GitHub Issue CRUD operations.
*   - [ ] Implement mock responses for GitHub Label operations (list, set, add, remove, create).
*   - [ ] Implement mock responses for GitHub Milestone CRUD operations.
*   - [ ] Write integration tests for Issue <-> Task sync (Create, Update, Close/Delete - both directions).
*   - [ ] Write integration tests for Label <-> Metadata sync (Status, Type, Priority, Tags - both directions).
*   - [ ] Write integration tests for optional auto-label creation flow.
*   - [ ] Write integration tests for Milestone <-> Epic/Feature sync (Create, Update, Close - both directions).
*   - [ ] Write integration tests for optional auto-milestone creation flow.
*   - [ ] Write integration tests specifically verifying conflict resolution logic (`last_update_wins`, `manual_flag`, etc.) using mock timestamps.
*   - [ ] Write integration tests specifically verifying error handling for simulated API errors (4xx, 5xx, rate limits).
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.