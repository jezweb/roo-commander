+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-508"
title = "Implement result aggregation and final reporting logic (to `session-manager`)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-005"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing roo-dispatch rules/logic
# reporter = "..."
priority = "🔥 Highest" # Completes the dispatch cycle
# estimated_effort = "S" # Small - Primarily formatting and calling attempt_completion
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "roo-dispatch", "implementation", "rules", "reporting", "completion", "delegation", "session-manager"]
related_docs = ["RULES-ROO-DISPATCH-001", "MODE-SPEC-ROO-DISPATCH-001", "MODE-SPEC-SESSION-MANAGER-001"]
depends_on = ["TASK-IM-502", "TASK-IM-507"] # Depends on rules structure and monitoring completion
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement result aggregation and final reporting logic (to `session-manager`)

## Description ✍️

Implement the final step in the `roo-dispatch` workflow: aggregating the results from all delegated specialist tasks (`TASK-IM-507`) and reporting the overall outcome of the originally assigned task back to the requesting coordinator (`session-manager`) using the `attempt_completion` tool/command.

This involves:
1.  Determining the final status (Success, Failure, Blocked) of the overall task based on the outcomes of the individual sub-tasks monitored in `TASK-IM-507`.
2.  Consolidating relevant details, such as paths to modified files (on success) or specific error messages/blocker descriptions (on failure/blockage).
3.  Formatting the final status report message according to the expected format for `session-manager`.
4.  Executing the `attempt_completion` command, targeting the original task ID assigned by `session-manager` when it first delegated to `roo-dispatch`.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist within `roo-dispatch` that are triggered when all delegated sub-tasks are complete or a critical failure occurs.
*   - [ ] The rule(s) correctly determine the overall task status (Success only if all required steps succeeded).
*   - [ ] The rule(s) aggregate relevant output details (e.g., list of modified files from successful specialist completions).
*   - [ ] The rule(s) aggregate relevant error/blocker details if any sub-task failed or reported blockage.
*   - [ ] The rule(s) correctly format the final status message for `attempt_completion`.
*   - [ ] The rule(s) correctly execute the `attempt_completion` command, providing the final status and aggregated details.
*   - [ ] The `attempt_completion` command correctly targets the original task context initiated by `session-manager`.
*   - [ ] Unit tests (or rule tests) verify the correct aggregation and reporting logic for successful task completion.
*   - [ ] Unit tests verify the correct aggregation and reporting logic for failed task completion.
*   - [ ] Unit tests verify the correct aggregation and reporting logic for blocked task completion.

## Implementation Notes / Details 📝

*   This logic represents the exit point for a `roo-dispatch` execution cycle.
*   The final status reported should reflect the overall success/failure of the task assigned by `session-manager`. If any critical step failed, the overall status should likely be Failure or Blocked.
*   The message accompanying `attempt_completion` should be concise but informative for `session-manager`. Include key outputs like file paths or the specific reason for failure/blockage.
*   Requires correct usage of the `attempt_completion` tool, ensuring it signals the completion of the task `roo-dispatch` itself was assigned.

## Subtasks / Checklist ☑️

*   - [ ] Identify/Create the specific rule file(s) for final reporting.
*   - [ ] Implement logic to determine the overall task status based on sub-task outcomes.
*   - [ ] Implement logic to aggregate success details (e.g., file paths).
*   - [ ] Implement logic to aggregate failure/blocker details.
*   - [ ] Implement formatting of the `attempt_completion` message payload.
*   - [ ] Implement the execution of the `attempt_completion` command targeting the original task context.
*   - [ ] Add comments to rules explaining the result aggregation and reporting logic.
*   - [ ] Write tests verifying reporting for overall success scenarios.
*   - [ ] Write tests verifying reporting for overall failure scenarios.
*   - [ ] Write tests verifying reporting for overall blocked scenarios.
*   - [ ] Write tests verifying the content of the reported message.