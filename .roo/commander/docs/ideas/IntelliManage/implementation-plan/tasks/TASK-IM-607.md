+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-607"
title = "Implement result reporting logic for agent-session-summarizer"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-006"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing agent logic/rules
# reporter = "..."
priority = "🔼 High" # Completes the agent's task cycle
# estimated_effort = "S" # Small - Primarily calling attempt_completion
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "agent", "session-summarizer", "implementation", "rules", "reporting", "completion", "output"]
related_docs = ["RULES-AGENT-SESSION-SUMMARIZER-001", "MODE-SPEC-AGENT-SESSION-SUMMARIZER-001"]
depends_on = ["TASK-IM-602", "TASK-IM-606"] # Depends on rules structure and having attempted to write the file
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement result reporting logic for agent-session-summarizer

## Description ✍️

Implement the final step in the `agent-session-summarizer` mode's workflow: reporting the outcome (success or failure) back to the requesting coordinator (`session-manager`) using the `attempt_completion` tool/command.

This involves:
1.  Checking if the previous steps (reading, extracting, populating, writing) completed successfully or encountered an error.
2.  If successful, formatting the `attempt_completion` message to indicate success and include the full path to the generated handover summary file (from `TASK-IM-606`).
3.  If failed, formatting the `attempt_completion` message to indicate failure and include a specific error message detailing the cause (e.g., "Failed to read session log file", "Failed to write summary file").
4.  Executing the `attempt_completion` command, targeting the original task context initiated by `session-manager`.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist within `agent-session-summarizer` that represent the final step of execution.
*   - [ ] The rule(s) correctly check for success or failure state from previous steps.
*   - [ ] On success, the rule(s) correctly format the `attempt_completion` message indicating success and including the output file path.
*   - [ ] On failure, the rule(s) correctly format the `attempt_completion` message indicating failure and including a relevant error message.
*   - [ ] The rule(s) correctly execute the `attempt_completion` command targeting the original task context.
*   - [ ] Unit tests (or rule tests) verify the correct `attempt_completion` call for success scenarios (including file path).
*   - [ ] Unit tests verify the correct `attempt_completion` call for failure scenarios (including error message).

## Implementation Notes / Details 📝

*   This logic forms the exit point for the `agent-session-summarizer` execution cycle.
*   Requires careful handling of error states propagated from previous steps (file reading, writing).
*   The message accompanying `attempt_completion` should be clear and easily parseable by `session-manager`.
*   Requires correct usage of the `attempt_completion` tool.

## Subtasks / Checklist ☑️

*   - [ ] Identify/Create the specific rule file(s) for final reporting.
*   - [ ] Implement logic to check the success/failure state of the summarization process.
*   - [ ] Implement formatting of the success message for `attempt_completion` (including output path).
*   - [ ] Implement formatting of the failure message for `attempt_completion` (including error details).
*   - [ ] Implement the execution of the `attempt_completion` command.
*   - [ ] Add comments to rules explaining the reporting logic.
*   - [ ] Write tests verifying the success `attempt_completion` call and message.
*   - [ ] Write tests verifying the failure `attempt_completion` call and message for different error types (read failure, write failure).