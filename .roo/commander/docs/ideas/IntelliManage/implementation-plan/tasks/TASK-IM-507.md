+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-507"
title = "Implement logic for monitoring `attempt_completion` from specialists"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-005"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing roo-dispatch rules/logic
# reporter = "..."
priority = "🔥 Highest" # Needed to know when delegated work is done
# estimated_effort = "S" # Small - Primarily handling incoming events/messages
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "roo-dispatch", "implementation", "rules", "monitoring", "delegation", "completion", "workflow"]
related_docs = ["RULES-ROO-DISPATCH-001", "MODE-SPEC-ROO-DISPATCH-001"]
depends_on = ["TASK-IM-502", "TASK-IM-506"] # Depends on rules structure and having delegated tasks
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement logic for monitoring `attempt_completion` from specialists

## Description ✍️

Implement the logic within the `roo-dispatch` mode's rules (`TASK-IM-502`) to receive and process `attempt_completion` signals sent by the operational specialist modes to which tasks were delegated in `TASK-IM-506`.

This involves:
1.  Setting up rule triggers or listeners for `attempt_completion` events/messages originating from specialist tasks previously initiated by this `roo-dispatch` instance.
2.  Parsing the `attempt_completion` message to determine the outcome (success, failure, blocked) and extract relevant details (error messages, paths to modified files, blocker descriptions).
3.  Updating the internal state of `roo-dispatch` regarding the completion status of the delegated sub-task(s).
4.  Triggering the next step in the workflow, which could be:
    *   Delegating the next sequential sub-task (if applicable).
    *   Moving to the final result aggregation and reporting phase (`TASK-IM-508`) if all necessary sub-tasks are complete or a critical failure occurred.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist within `roo-dispatch` to handle incoming `attempt_completion` messages from specialists.
*   - [ ] The rule(s) correctly parse the `attempt_completion` message to identify the originating task ID, outcome status (success/failure/blocked), and any associated details (errors, file paths).
*   - [ ] The internal state tracking the completion of delegated sub-tasks is updated correctly.
*   - [ ] If the task involved sequential delegation, successful completion triggers the delegation of the next step (`TASK-IM-506`).
*   - [ ] If the completion signal indicates the final step is done (or a failure occurred), the logic transitions to the result aggregation/reporting phase (`TASK-IM-508`).
*   - [ ] Unit tests (or rule tests) verify the correct parsing of different `attempt_completion` messages (success, failure with error, blocked with reason).
*   - [ ] Unit tests verify the correct triggering of subsequent actions (next delegation or final reporting) based on the completion outcome.

## Implementation Notes / Details 📝

*   The exact mechanism for receiving `attempt_completion` depends on the Roo Code engine's implementation (e.g., event listeners, message queues, specific rule triggers).
*   Need to correlate the incoming `attempt_completion` signal with the specific sub-task that was delegated (using the task IDs returned by `new_task` and potentially passed back in `attempt_completion`).
*   This logic acts as the state machine driver for multi-step tasks coordinated by `roo-dispatch`.
*   Keep the logic stateless regarding the overall user session; state is only maintained for the duration of coordinating the *single task* assigned by `session-manager`.

## Subtasks / Checklist ☑️

*   - [ ] Identify/Create the specific rule file(s) for handling `attempt_completion`.
*   - [ ] Implement the mechanism to receive/trigger on `attempt_completion` signals.
*   - [ ] Implement parsing logic for the `attempt_completion` message content (status, details).
*   - [ ] Implement internal state update logic for tracking sub-task completion.
*   - [ ] Implement conditional logic to trigger next sequential delegation if needed.
*   - [ ] Implement conditional logic to trigger final result reporting (`TASK-IM-508`) when appropriate.
*   - [ ] Add comments to rules explaining the completion monitoring logic.
*   - [ ] Write tests verifying parsing of success `attempt_completion` messages.
*   - [ ] Write tests verifying parsing of failure/blocked `attempt_completion` messages.
*   - [ ] Write tests verifying triggering of next delegation step.
*   - [ ] Write tests verifying triggering of final reporting step.