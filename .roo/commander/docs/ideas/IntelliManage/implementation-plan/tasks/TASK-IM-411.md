+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-411"
title = "Implement error handling and escalation logic"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing session-manager rules/logic
# reporter = "..."
priority = "🔼 High" # Important for robustness
# estimated_effort = "M" # Medium - Involves handling various failure modes
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "implementation", "error-handling", "escalation", "roo-commander", "rules", "robustness"]
related_docs = ["RULES-SESSION-MANAGER-001", "MODE-SPEC-SESSION-MANAGER-001", "KB-OUTLINE-SESSION-MANAGER-001"]
depends_on = ["TASK-IM-402", "TASK-IM-407", "TASK-IM-408"] # Depends on rules structure and delegation logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement error handling and escalation logic

## Description ✍️

Implement the error handling and escalation procedures within the `session-manager` mode's rules (`TASK-IM-402`), as specified in `RULES-SESSION-MANAGER-001`, Section 6.

This involves:
1.  Handling error responses received via `attempt_completion` from delegated tasks (CLE, `roo-dispatch`, `agent-session-summarizer`).
2.  Clearly reporting these errors back to the user.
3.  Implementing logic to identify persistent failures (e.g., a task delegated to `roo-dispatch` fails multiple times or reports an unresolvable blocker).
4.  Prompting the user for confirmation before escalating persistent or complex issues.
5.  Implementing the delegation logic to escalate issues to `roo-commander` via `new_task`, providing necessary context.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist to handle `attempt_completion` signals indicating failure from delegates.
*   - [ ] The mode correctly extracts and presents error messages from failed delegates to the user.
*   - [ ] Logic exists to track or identify persistent failures for a given task or goal (this might be simple state within a rule execution or require more complex tracking).
*   - [ ] When a persistent failure or complex blocker is identified, the mode uses `ask_followup_question` to inform the user and suggest escalation to `roo-commander`.
*   - [ ] If the user confirms escalation, the mode gathers relevant context (session log path, failed task ID/goal, error messages).
*   - [ ] The mode correctly formats and executes a `new_task` command targeting `roo-commander` with the escalation context.
*   - [ ] Errors encountered directly by `session-manager` (e.g., failure to parse user input after clarification) are handled gracefully (e.g., informing the user, suggesting `!pm help`).
*   - [ ] Unit tests (or rule tests) verify correct reporting of delegate errors to the user.
*   - [ ] Unit tests verify the escalation prompt flow for persistent failures.
*   - [ ] Unit tests verify the correct construction and execution of the `new_task` command for escalating to `roo-commander`.

## Implementation Notes / Details 📝

*   Handling `attempt_completion` requires parsing the status/message provided by the delegate.
*   Tracking persistent failures might be simplified initially, e.g., escalate immediately if `roo-dispatch` reports a blocker it cannot handle. True retry logic adds complexity.
*   The escalation message to `roo-commander` needs sufficient context for it to understand the problem (e.g., "Session Manager encountered persistent failure trying to achieve goal '[Session Goal]' via roo-dispatch for task TASK-123. Last error: '[Error Message]'. Session log: [Session Log Path]. Please investigate.").
*   Ensure clear distinction between errors reported *by* delegates versus errors *within* `session-manager` itself.

## Subtasks / Checklist ☑️

*   - [ ] Implement rule logic to parse `attempt_completion` for failure status/messages.
*   - [ ] Implement rule logic to present delegate errors clearly to the user.
*   - [ ] Define and implement logic to identify conditions warranting escalation (e.g., specific error types from `roo-dispatch`, repeated failures - simplified first).
*   - [ ] Implement the escalation confirmation prompt using `ask_followup_question`.
*   - [ ] Implement logic to gather context for escalation (log path, task ID, error details).
*   - [ ] Implement formatting and execution of the `new_task` command targeting `roo-commander`.
*   - [ ] Implement handling for internal `session-manager` errors (e.g., parsing failures).
*   - [ ] Add comments to rules explaining error handling and escalation paths.
*   - [ ] Write tests verifying reporting of errors from mocked delegates.
*   - [ ] Write tests verifying the escalation prompt logic.
*   - [ ] Write tests verifying the escalation delegation message format and execution.