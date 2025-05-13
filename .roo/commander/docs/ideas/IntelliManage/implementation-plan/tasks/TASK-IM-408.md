+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-408"
title = "Implement delegation logic for `agent-session-summarizer`"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing session-manager rules/logic
# reporter = "..."
priority = "🔼 High" # Essential for session handover
# estimated_effort = "S" # Small - Primarily formatting and calling new_task
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "implementation", "delegation", "session-summarizer", "rules", "new_task", "handover"]
related_docs = ["RULES-SESSION-MANAGER-001", "MODE-SPEC-SESSION-MANAGER-001", "MODE-SPEC-AGENT-SESSION-SUMMARIZER-001", "TASK-IM-406"]
depends_on = ["TASK-IM-406"] # Depends on the routing logic identifying a handover request
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement delegation logic for `agent-session-summarizer`

## Description ✍️

Implement the specific logic within the `session-manager` mode's rules (`TASK-IM-402`) to delegate the task of generating a handover summary to the `agent-session-summarizer` mode using the `new_task` tool/command. This task focuses on constructing and sending the delegation message correctly after the routing logic (`TASK-IM-406`) has identified a handover request.

This involves:
1.  Gathering the necessary context required by the summarizer (path to the current session log, path to relevant planning documents, active project context, current context window info).
2.  Formatting the context and instructions into the message payload for the `new_task` command targeting `agent-session-summarizer`.
3.  Executing the `new_task` command.
4.  Handling the immediate response from `new_task`.
5.  Setting up the expectation to receive an `attempt_completion` signal from `agent-session-summarizer` containing the path to the generated summary file.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist within `session-manager` that are triggered when a handover summary is requested.
*   - [ ] The rule(s) correctly identify the path to the current session log file (`[Session Log Path]`).
*   - [ ] The rule(s) correctly identify the path to relevant planning documents (if tracked).
*   - [ ] The rule(s) correctly identify the active `project_slug`.
*   - [ ] The rule(s) correctly determine and include the current context window usage information.
*   - [ ] The rule(s) correctly format the message payload for `new_task` according to the expected input format for `agent-session-summarizer` (as per `MODE-SPEC-AGENT-SESSION-SUMMARIZER-001`).
*   - [ ] The rule(s) correctly execute the `new_task` command targeting the `agent-session-summarizer` mode ID.
*   - [ ] The mode correctly anticipates an `attempt_completion` response containing the summary file path.
*   - [ ] Unit tests (or rule tests) verify the correct construction and execution of the `new_task` command for `agent-session-summarizer`.

## Implementation Notes / Details 📝

*   This logic follows directly from the "Handover Request" branch identified in `TASK-IM-406`.
*   Ensure the `[Session Log Path]` variable is correctly maintained and accessible.
*   Determining the "relevant planning document" might require specific logic or rely on information stored during the session. Start simple, perhaps passing a predefined plan path if available.
*   The context window information needs to be obtained from the underlying Roo Code environment if possible.
*   Refer to `MODE-SPEC-AGENT-SESSION-SUMMARIZER-001` for the expected input context.

## Subtasks / Checklist ☑️

*   - [ ] Identify the specific rule(s) where summarizer delegation occurs.
*   - [ ] Implement logic to retrieve the current `[Session Log Path]`.
*   - [ ] Implement logic to retrieve relevant planning document paths (if applicable).
*   - [ ] Implement logic to retrieve the active `[project_slug]`.
*   - [ ] Implement logic to retrieve current context window information.
*   - [ ] Implement formatting of the `new_task` message payload targeting `agent-session-summarizer`.
*   - [ ] Implement the execution of the `new_task` command.
*   - [ ] Add comments to the rule files explaining the delegation logic.
*   - [ ] Write tests verifying the `new_task` message format for `agent-session-summarizer`.
*   - [ ] Write tests verifying the `new_task` command execution targeting `agent-session-summarizer`.