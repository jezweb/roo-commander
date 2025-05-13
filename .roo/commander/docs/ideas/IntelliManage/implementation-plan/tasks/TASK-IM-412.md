+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-412"
title = "Write tests for session lifecycle management"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing session-manager tests
# reporter = "..."
priority = "🔥 Highest" # Tests core session functionality
# estimated_effort = "M" # Medium - Requires mocking file system and prompts
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "test", "unit-test", "rule-test", "session-state", "handover", "lifecycle"]
related_docs = ["RULES-SESSION-MANAGER-001", "TASK-IM-404", "TASK-IM-405", "TASK-IM-409"]
depends_on = ["TASK-IM-404", "TASK-IM-405", "TASK-IM-409"] # Depends on the implementation of session start, goal, logging
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write tests for session lifecycle management

## Description ✍️

Create unit tests (or rule tests, depending on the testing framework) for the `session-manager` mode's core lifecycle management logic, specifically focusing on session start, resumption, goal setting, and logging initialization, as implemented in `TASK-IM-404`, `TASK-IM-405`, and `TASK-IM-409`.

These tests should verify the correct behavior when the mode is activated under different conditions (e.g., with or without existing handover summaries) and ensure the initial session state and logging are set up correctly.

## Acceptance Criteria ✅

*   **Session Start (New):**
    *   - [ ] Test verifies that when no handover summary exists, the correct greeting prompt is generated using `ask_followup_question`.
    *   - [ ] Test verifies that after the user provides an initial goal (simulated response), the session log file is created with the correct initial entry using `write_to_file`.
    *   - [ ] Test verifies the internal `[Session Goal]` state is set correctly.
*   **Session Resume (With Handover):**
    *   - [ ] Test verifies that `list_files` is called correctly to check the handover directory.
    *   - [ ] Test verifies that the latest handover file is identified and `read_file` is called for it.
    *   - [ ] Test verifies that the handover summary content is parsed correctly (mocked file content).
    *   - [ ] Test verifies that the correct resumption prompt (showing summary context) is generated using `ask_followup_question`.
    *   - [ ] Test verifies that if the user chooses to continue, the `[Session Goal]` is set from the summary.
    *   - [ ] Test verifies that if the user chooses a new goal, the goal elicitation prompt follows.
    *   - [ ] Test verifies that the session log is still created correctly even when resuming.
*   **Error Handling:**
    *   - [ ] Test verifies graceful handling (e.g., fallback to new session flow, error message) if `list_files` or `read_file` fails for handovers.
    *   - [ ] Test verifies graceful handling if `write_to_file` fails during log initialization.
*   **General:**
    *   - [ ] Tests use appropriate mocking for file system tools (`list_files`, `read_file`, `write_to_file`) and user interaction (`ask_followup_question`).
    *   - [ ] Tests are added to the project's automated test suite.

## Implementation Notes / Details 📝

*   Use the project's standard unit/rule testing framework.
*   **Mocking File System:** Simulate the presence or absence of handover files in `.ruru/context/handovers/`. Mock the content returned by `read_file` for handover summaries. Verify calls to `write_to_file` for session logs with the correct path and initial content.
*   **Mocking User Interaction:** Mock the `ask_followup_question` tool to simulate different user responses (providing a goal, choosing to continue, choosing a new goal).
*   Focus tests on the sequence of tool calls and the state transitions within the session start/resume rules.

## Subtasks / Checklist ☑️

*   - [ ] Set up test file/suite structure for session lifecycle tests.
*   - [ ] Implement mocks for `list_files`, `read_file`, `write_to_file`.
*   - [ ] Implement mocks for `ask_followup_question` to simulate user responses.
*   - [ ] Write test case: New session start (no handover file).
*   - [ ] Write test case: Session resume (handover file exists, user continues).
*   - [ ] Write test case: Session resume (handover file exists, user sets new goal).
*   - [ ] Write test case: Session resume (multiple handover files, latest is used).
*   - [ ] Write test case: Error handling for failed handover file read.
*   - [ ] Write test case: Error handling for failed session log write.
*   - [ ] Verify correct session goal state setting in all scenarios.
*   - [ ] Verify correct session log initialization in all scenarios.
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.