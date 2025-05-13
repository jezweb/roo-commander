+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-510"
title = "Write tests for delegation and result reporting flow"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-005"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing roo-dispatch tests
# reporter = "..."
priority = "🔼 High" # Tests the end-to-end flow within roo-dispatch
# estimated_effort = "M" # Medium - Requires testing the interaction sequence
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "roo-dispatch", "test", "unit-test", "rule-test", "delegation", "reporting", "workflow", "completion"]
related_docs = ["RULES-ROO-DISPATCH-001", "TASK-IM-506", "TASK-IM-507", "TASK-IM-508"]
depends_on = ["TASK-IM-506", "TASK-IM-507", "TASK-IM-508"] # Depends on implementation of delegation, monitoring, reporting
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write tests for delegation and result reporting flow

## Description ✍️

Create unit tests (or rule tests) for the `roo-dispatch` mode that verify the end-to-end flow *within* the mode, from delegating a task to a specialist (`TASK-IM-506`), monitoring its completion (`TASK-IM-507`), and reporting the final aggregated result back to the requester (`TASK-IM-508`).

These tests will simulate the `attempt_completion` responses from specialists to trigger the monitoring and final reporting logic.

## Acceptance Criteria ✅

*   **Successful Flow:**
    *   - [ ] Test verifies that after successfully mocking the delegation (`new_task` call), simulating a successful `attempt_completion` from the specialist triggers the final reporting logic.
    *   - [ ] Test verifies that the final report back to `session-manager` (via `attempt_completion`) indicates overall success and includes relevant details (e.g., mock file paths).
*   **Failure Flow:**
    *   - [ ] Test verifies that after mocking delegation, simulating a failed `attempt_completion` from the specialist triggers the final reporting logic.
    *   - [ ] Test verifies that the final report back to `session-manager` indicates overall failure and includes the error details from the specialist's mock response.
*   **Blocked Flow:**
    *   - [ ] Test verifies that after mocking delegation, simulating a blocked `attempt_completion` from the specialist triggers the final reporting logic.
    *   - [ ] Test verifies that the final report back to `session-manager` indicates a blocked status and includes the blocker details from the specialist's mock response.
*   **Sequential Flow (If Applicable):**
    *   - [ ] Test verifies that successful completion of the first step in a mocked sequential task triggers the delegation of the second step.
    *   - [ ] Test verifies that failure in the first step prevents delegation of the second step and triggers overall failure reporting.
*   **General:**
    *   - [ ] Tests use appropriate mocking for the `new_task` and `attempt_completion` tools/mechanisms.
    *   - [ ] Tests verify that the final `attempt_completion` targets the correct original task context.
    *   - [ ] Tests are added to the project's automated test suite.

## Implementation Notes / Details 📝

*   Use the project's standard unit/rule testing framework.
*   **Mocking `new_task`:** Mock the `new_task` tool to simply acknowledge the delegation without actually running another mode.
*   **Simulating `attempt_completion`:** The core of these tests involves simulating the event or message that represents `attempt_completion` coming *back* from a specialist. Trigger the `roo-dispatch` rules responsible for handling this signal (`TASK-IM-507`) with mock success, failure, or blocked data.
*   **Mocking Final `attempt_completion`:** Verify that the final step correctly calls the `attempt_completion` tool targeting the original requester (`session-manager`) with the correctly aggregated status and message.
*   Focus on the state transitions and logic flow *within* `roo-dispatch` triggered by specialist responses.

## Subtasks / Checklist ☑️

*   - [ ] Set up test file/suite structure for delegation/reporting flow tests.
*   - [ ] Implement mock for `new_task` tool.
*   - [ ] Implement mechanism to simulate incoming `attempt_completion` signals (success, failure, blocked).
*   - [ ] Implement mock for the final `attempt_completion` call (to verify its parameters).
*   - [ ] Write test case: Single specialist task -> Success reported by specialist -> Success reported by dispatch.
*   - [ ] Write test case: Single specialist task -> Failure reported by specialist -> Failure reported by dispatch (with error details).
*   - [ ] Write test case: Single specialist task -> Blocked reported by specialist -> Blocked reported by dispatch (with blocker details).
*   - [ ] (If sequential logic exists) Write test case: Step 1 Success -> Step 2 Delegated.
*   - [ ] (If sequential logic exists) Write test case: Step 1 Failure -> Overall Failure reported (Step 2 not delegated).
*   - [ ] (If sequential logic exists) Write test case: Step 1 Success -> Step 2 Success -> Overall Success reported.
*   - [ ] Verify the content and target of the final `attempt_completion` call in all scenarios.
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.