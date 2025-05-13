+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-407"
title = "Implement delegation logic for `roo-dispatch`"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing session-manager rules/logic
# reporter = "..."
priority = "🔥 Highest" # Core delegation pathway
# estimated_effort = "S" # Small - Primarily formatting and calling new_task
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "implementation", "delegation", "roo-dispatch", "rules", "new_task"]
related_docs = ["RULES-SESSION-MANAGER-001", "MODE-SPEC-SESSION-MANAGER-001", "MODE-SPEC-ROO-DISPATCH-001", "TASK-IM-406"]
depends_on = ["TASK-IM-406"] # Depends on the routing logic identifying a dev task
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement delegation logic for `roo-dispatch`

## Description ✍️

Implement the specific logic within the `session-manager` mode's rules (`TASK-IM-402`) to delegate a development task to the `roo-dispatch` mode using the `new_task` tool/command. This task focuses on constructing and sending the delegation message correctly after the routing logic (`TASK-IM-406`) has identified a development task.

This involves:
1.  Gathering the necessary context determined by the routing logic (task goal description, relevant artifact IDs like `TASK-XXX`, active `project_slug`).
2.  Formatting the context and instructions into the message payload for the `new_task` command targeting `roo-dispatch`.
3.  Executing the `new_task` command.
4.  Handling the immediate response from `new_task` (e.g., task ID assigned by the system).
5.  Setting up the expectation to receive an `attempt_completion` signal from `roo-dispatch` later.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist within `session-manager` that are triggered when a development task needs delegation to `roo-dispatch`.
*   - [ ] The rule(s) correctly gather the task goal description.
*   - [ ] The rule(s) correctly gather relevant artifact IDs (e.g., the primary `TASK-ID` to be worked on).
*   - [ ] The rule(s) correctly identify and include the active `project_slug`.
*   - [ ] The rule(s) correctly format the message payload for `new_task` according to the expected input format for `roo-dispatch` (as per `MODE-SPEC-ROO-DISPATCH-001`).
*   - [ ] The rule(s) correctly execute the `new_task` command targeting the `roo-dispatch` mode ID.
*   - [ ] The rule(s) store or handle the task ID returned by `new_task` for potential future reference (e.g., logging).
*   - [ ] The mode correctly anticipates an `attempt_completion` response corresponding to this delegation.
*   - [ ] Unit tests (or rule tests) verify the correct construction and execution of the `new_task` command for `roo-dispatch`.

## Implementation Notes / Details 📝

*   This logic follows directly from the "Development Task" branch identified in `TASK-IM-406`.
*   Focus on correctly packaging the necessary context. `roo-dispatch` is stateless and relies entirely on the information passed in this delegation message (and any artifacts it subsequently reads based on IDs in the message).
*   The message should be clear and instruct `roo-dispatch` on the primary goal (e.g., "Implement the feature described in TASK-123", "Run tests associated with FEAT-005").
*   Refer to the `MODE-SPEC-ROO-DISPATCH-001` for the expected input format/content.

## Subtasks / Checklist ☑️

*   - [ ] Identify the specific rule(s) where `roo-dispatch` delegation occurs.
*   - [ ] Implement logic to extract/prepare the task goal description for the message.
*   - [ ] Implement logic to extract/prepare relevant artifact IDs for the message.
*   - [ ] Implement logic to include the active `project_slug` in the message context.
*   - [ ] Implement formatting of the `new_task` message payload targeting `roo-dispatch`.
*   - [ ] Implement the execution of the `new_task` command.
*   - [ ] Implement handling/logging of the returned `new_task` ID.
*   - [ ] Add comments to the rule files explaining the delegation logic.
*   - [ ] Write tests verifying the `new_task` message format for `roo-dispatch`.
*   - [ ] Write tests verifying the `new_task` command execution targeting `roo-dispatch`.