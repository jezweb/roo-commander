+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-921"
title = "Implement/enhance integration tests for core workflows"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-009"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev / QA responsible for integration testing
# reporter = "..."
priority = "🔼 High" # Verifies components work together
# estimated_effort = "L" # Large - Requires setting up multi-component scenarios
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["test", "integration-test", "workflow", "session-manager", "roo-dispatch", "cle", "ai", "github", "e2e-light"]
related_docs = ["DOC-ARCH-001", "TASK-IM-309", "TASK-IM-714"]
depends_on = ["FEAT-IM-001", "FEAT-IM-002", "FEAT-IM-003", "FEAT-IM-004", "FEAT-IM-005", "FEAT-IM-006", "FEAT-IM-007", "FEAT-IM-008"] # Depends on all core features being implemented
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement/enhance integration tests for core workflows

## Description ✍️

Implement and/or enhance integration tests that cover key end-to-end user workflows within the IntelliManage framework. These tests should verify the correct interaction between multiple components, including the Interaction Layer (simulated commands), `session-manager`, `roo-dispatch`, Core Logic Engine (CLE), AI Engine, and potentially the Integration Layer (with mocked external systems like GitHub API and Git).

Focus on testing common sequences of operations, such as:
*   Starting a session and creating/listing artifacts.
*   Delegating a development task via `session-manager` -> `roo-dispatch` -> (mock) Specialist -> reporting completion back.
*   Triggering GitHub sync and verifying updates (using mock API).
*   Using NLP commands that involve multiple components.

## Acceptance Criteria ✅

*   - [ ] Integration tests exist for the session start/resume workflow, verifying interaction between `session-manager`, handover summaries (mock FS), and initial goal setting.
*   - [ ] Integration tests exist for creating an artifact (e.g., Task) via `session-manager` (using `!pm` or simulated NL), verifying the call to CLE and successful confirmation.
*   - [ ] Integration tests exist for listing artifacts via `session-manager`, verifying calls to CLE and formatted output.
*   - [ ] Integration tests exist for the core `session-manager` -> `roo-dispatch` -> (mock) Specialist -> `roo-dispatch` -> `session-manager` delegation workflow for a simple task.
*   - [ ] Integration tests exist for triggering a GitHub sync (`!pm sync github`) and verifying the Integration Layer interacts correctly with the (mocked) GitHub API client for basic Issue/Task sync.
*   - [ ] Integration tests exist for the commit message -> linking/status suggestion workflow, verifying interaction between Git scanner (mock Git), Integration Layer, AI Engine (mock), and `session-manager` (mock notification).
*   - [ ] Tests use appropriate mocking strategies, primarily mocking the lowest-level external dependencies (File System, LLM API, GitHub API, Git commands, Specialist Modes) while allowing core IntelliManage components (Session Manager, Roo Dispatch, CLE, AI Engine interfaces, IL interfaces) to interact.
*   - [ ] Tests verify the expected state changes (e.g., artifact created/updated in mock FS, correct messages passed between components) at the end of each workflow.
*   - [ ] Tests cover basic error propagation through the workflow (e.g., specialist failure reported back to user via dispatch and session manager).
*   - [ ] Tests are added to the project's automated integration test suite.

## Implementation Notes / Details 📝

*   **Scope:** These are integration tests, not full end-to-end UI tests. Simulate user input via commands/NL strings.
*   **Mocking:** Requires careful setup of mocks for external systems and potentially for the specialist modes that `roo-dispatch` would call. The goal is to test the *interactions* between the IntelliManage components themselves.
*   **Test Setup:** Each workflow test will require setting up initial state (e.g., mock config files, existing artifacts in mock FS, mock handover summaries).
*   **Assertions:** Assertions should focus on verifying that the correct methods were called on mocked components with the expected arguments, and that the final state (e.g., data in mock FS, messages sent back to simulated user) is correct.

## Subtasks / Checklist ☑️

*   - [ ] Set up integration test environment/framework if not already done (`TASK-IM-309`, `TASK-IM-714`).
*   - [ ] Implement/Refine mocks for File System, LLM API, GitHub API, Git commands.
*   - [ ] Implement basic mocks for representative Specialist Modes (e.g., one that always succeeds, one that always fails).
*   - [ ] Write integration test: Session Start/Resume -> Goal Set -> List Tasks.
*   - [ ] Write integration test: Session Manager -> Create Task (via !pm) -> Verify CLE call & mock FS state.
*   - [ ] Write integration test: Session Manager -> Create Task (via NL) -> Verify AI NLP -> Router -> CLE call & mock FS state.
*   - [ ] Write integration test: Session Manager -> Delegate Task -> Roo Dispatch -> Mock Specialist (Success) -> Session Manager reports success.
*   - [ ] Write integration test: Session Manager -> Delegate Task -> Roo Dispatch -> Mock Specialist (Failure) -> Session Manager reports failure.
*   - [ ] Write integration test: Session Manager -> Trigger GitHub Sync -> Verify IL calls mock GitHub API for Issue sync.
*   - [ ] Write integration test: Simulate Git Commit -> Scanner -> IL -> AI Engine (mock) -> Session Manager receives status suggestion.
*   - [ ] Add tests covering basic error propagation across components.
*   - [ ] Integrate tests into the CI/CD pipeline.