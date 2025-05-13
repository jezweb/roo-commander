+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-309"
title = "Write integration tests for AI -> CLE interactions"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Verifies core component communication
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["test", "integration-test", "ai", "cle", "interface", "architecture"]
related_docs = ["DOC-AI-SPEC-001", "DOC-FUNC-SPEC-001", "TASK-IM-301"]
depends_on = ["TASK-IM-301", "TASK-IM-104"] # Depends on defined interfaces and base implementations
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write integration tests for AI -> CLE interactions

## Description ✍️

Create integration tests that verify the communication and data flow between the AI Engine and the Core Logic Engine (CLE) based on the interfaces defined in `TASK-IM-301`. These tests should ensure that the AI Engine can correctly request data from the CLE and that the CLE correctly processes requests originating from the AI Engine (like creating artifacts based on AI-generated drafts).

Unlike unit tests which mock dependencies heavily, these tests should involve *real* (or near-real) instances of both the AI Engine's interface layer and the CLE, potentially mocking only the file system or external LLM calls if necessary.

## Acceptance Criteria ✅

*   - [ ] Integration tests exist verifying the AI Engine can successfully call CLE methods like `readArtifact` and receive correctly formatted data.
*   - [ ] Integration tests exist verifying the AI Engine can successfully call CLE methods like `findArtifacts` with query parameters and receive correctly filtered data.
*   - [ ] Integration tests exist verifying the AI Engine can successfully call `CLE.getProjectConfig` and receive configuration data.
*   - [ ] Integration tests exist verifying that when the AI Engine calls `CLE.createArtifact` with valid, structured data (simulating output from artifact generation), the CLE processes it correctly (e.g., validation passes, artifact is conceptually 'created' in a mock file system).
*   - [ ] Integration tests exist verifying that when the AI Engine calls `CLE.updateArtifact` with valid, structured data, the CLE processes it correctly.
*   - [ ] Tests verify that errors originating in the CLE (e.g., validation failure, file not found from mock FS) are correctly propagated back through the interface to the AI Engine caller.
*   - [ ] Tests use a controlled setup (e.g., mock file system, predefined test data) to ensure predictable outcomes.
*   - [ ] Tests are added to the project's automated integration test suite.

## Implementation Notes / Details 📝

*   Use the project's integration testing framework.
*   **Mocking Strategy:** Mock the lowest-level dependencies possible, ideally just the actual file system operations and external network calls (LLM API). Allow the AI Engine interface logic and the CLE logic to interact directly.
*   **Test Setup:** Each test case will likely require setting up a specific state in the mock file system (e.g., pre-existing artifact files, config files) that the CLE will read.
*   **Focus:** Test the *interaction points* and data contracts defined in `TASK-IM-301`. Ensure data passed from AI -> CLE is handled correctly, and data returned from CLE -> AI is formatted as expected.
*   Simulate realistic data structures passed between the components.

## Subtasks / Checklist ☑️

*   - [ ] Set up integration test environment/framework.
*   - [ ] Implement mock file system for integration tests.
*   - [ ] (Optional) Implement mock LLM service if AI Engine calls it directly during tested flows.
*   - [ ] Write integration test for AI requesting `readArtifact` from CLE.
*   - [ ] Write integration test for AI requesting `findArtifacts` from CLE.
*   - [ ] Write integration test for AI requesting `getProjectConfig` from CLE.
*   - [ ] Write integration test for AI triggering `createArtifact` in CLE (valid data).
*   - [ ] Write integration test for AI triggering `createArtifact` in CLE (invalid data -> expect CLE error).
*   - [ ] Write integration test for AI triggering `updateArtifact` in CLE (valid data).
*   - [ ] Write integration test for AI triggering `updateArtifact` in CLE (invalid data -> expect CLE error).
*   - [ ] Write integration test verifying CLE error propagation back to AI Engine caller.
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.