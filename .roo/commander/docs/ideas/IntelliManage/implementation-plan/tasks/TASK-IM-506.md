+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-506"
title = "Implement specialist `new_task` delegation logic (including context preparation)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-005"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing roo-dispatch rules/logic
# reporter = "..."
priority = "🔥 Highest" # Core execution step
# estimated_effort = "M" # Medium - Involves context extraction and tool usage
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "roo-dispatch", "implementation", "rules", "delegation", "new_task", "context", "specialist"]
related_docs = ["RULES-ROO-DISPATCH-001", "MODE-SPEC-ROO-DISPATCH-001", "KB-OUTLINE-ROO-DISPATCH-001"]
depends_on = ["TASK-IM-502", "TASK-IM-504", "TASK-IM-505"] # Depends on rules, context retrieval, and specialist selection
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement specialist `new_task` delegation logic (including context preparation)

## Description ✍️

Implement the logic within the `roo-dispatch` mode's rules (`TASK-IM-502`) to delegate the actual work to the selected operational specialist mode(s) (determined in `TASK-IM-505`) using the `new_task` tool/command.

This involves:
1.  Retrieving the selected specialist mode ID(s).
2.  Extracting and preparing the specific context required by the specialist from the previously retrieved artifact content (`TASK-IM-504`), following guidelines in the KB (`KB-OUTLINE-ROO-DISPATCH-001`, file `02-context-extraction.md`). Context should be minimized to only what's necessary for the sub-task.
3.  Formatting the `new_task` message payload according to the templates/guidelines in the KB (`KB-OUTLINE-ROO-DISPATCH-001`, file `03-delegation-messaging.md`), including clear instructions, the prepared context, and the original IntelliManage artifact ID.
4.  Executing the `new_task` command targeting the selected specialist mode.
5.  Handling the immediate response from `new_task` (e.g., task ID assigned by the system) and storing it if needed for monitoring (`TASK-IM-507`).
6.  Handling potential sequential delegation if the task requires multiple steps or specialists.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist within `roo-dispatch` that trigger after specialist selection (`TASK-IM-505`).
*   - [ ] The rule(s) correctly retrieve the ID(s) of the selected specialist(s).
*   - [ ] The rule(s) implement logic to extract relevant sections (description, AC, specific checklist items, related file paths) from the full artifact content based on the sub-task being delegated.
*   - [ ] The rule(s) correctly format the `new_task` message payload, including instructions, extracted context, and original artifact ID.
*   - [ ] The rule(s) correctly execute the `new_task` command targeting the specialist mode ID.
*   - [ ] The rule(s) handle the task ID returned by `new_task` (e.g., store it for tracking).
*   - [ ] If multiple specialists or sequential steps are needed, the logic correctly handles the sequence of delegations.
*   - [ ] Unit tests (or rule tests) verify the context extraction logic for different scenarios.
*   - [ ] Unit tests verify the correct formatting of the `new_task` message payload for various specialists/tasks.
*   - [ ] Unit tests verify the correct execution of the `new_task` command targeting mock specialists.
*   - [ ] Unit tests verify basic sequential delegation logic if applicable.

## Implementation Notes / Details 📝

*   **Context Minimization:** This is key for efficiency. Avoid sending the entire artifact content to the specialist if only a specific part is needed. Use KB guidelines (`02-context-extraction.md`) to determine what to extract.
*   **Message Formatting:** Use the templates defined in the KB (`03-delegation-messaging.md`) to ensure consistent and clear instructions for specialists.
*   **Sequential Delegation:** For tasks like "Code feature X then write unit tests", the rules need to:
    1.  Delegate to the coding specialist.
    2.  Wait for successful `attempt_completion`.
    3.  Delegate to the testing specialist, potentially passing file paths modified by the coder.
*   Requires correct usage of the `new_task` tool.

## Subtasks / Checklist ☑️

*   - [ ] Identify/Create the specific rule file(s) for specialist delegation.
*   - [ ] Implement logic to retrieve the selected specialist ID(s) from rule state (`TASK-IM-505`).
*   - [ ] Implement context extraction logic based on KB guidelines.
*   - [ ] Implement `new_task` message formatting based on KB templates.
*   - [ ] Implement execution of `new_task` targeting the specialist.
*   - [ ] Implement handling/storage of the returned `new_task` ID.
*   - [ ] Design and implement logic for sequential delegation if required by common workflows.
*   - [ ] Add comments to rules explaining the delegation and context preparation logic.
*   - [ ] Write tests verifying context extraction for different task types.
*   - [ ] Write tests verifying `new_task` message formatting.
*   - [ ] Write tests verifying `new_task` execution against mock specialists.
*   - [ ] Write tests for sequential delegation flow.