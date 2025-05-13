+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-409"
title = "Implement session logging functionality"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing session-manager rules/logic
# reporter = "..."
priority = "🔼 High" # Crucial for context and handover
# estimated_effort = "S" # Small/Medium - Involves using edit tools consistently
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "implementation", "logging", "session-state", "rules", "edit"]
related_docs = ["RULES-SESSION-MANAGER-001", "MODE-SPEC-SESSION-MANAGER-001", "KB-OUTLINE-SESSION-MANAGER-001"]
depends_on = ["TASK-IM-402", "TASK-IM-404"] # Depends on rules structure and session start (which creates the log file)
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement session logging functionality

## Description ✍️

Implement the logic within the `session-manager` mode's rules (`TASK-IM-402`) to consistently record key events and outcomes to the current session log file (`.ruru/sessions/SESSION-YYYYMMDD-HHMMSS.md`), as specified in `RULES-SESSION-MANAGER-001`, Section 5.

This involves using appropriate `edit` tools (`insert_content`, `append_to_file`, `apply_diff`) at various points in the workflow rules to append structured log entries.

## Acceptance Criteria ✅

*   - [ ] The session log file path (`[Session Log Path]`) established during session start (`TASK-IM-404`) is correctly used for logging.
*   - [ ] The initial session goal is logged at the beginning of the file (`TASK-IM-404`).
*   - [ ] Significant user requests or commands are logged.
*   - [ ] Delegations sent via `new_task` (to `roo-dispatch`, `agent-session-summarizer`, `roo-commander`) are logged, including target mode and task goal/ID.
*   - [ ] Outcomes (success, failure, blockers) reported back via `attempt_completion` from delegates are logged concisely.
*   - [ ] Changes in the session goal (`TASK-IM-405`) are logged.
*   - [ ] Log entries include timestamps or are appended chronologically.
*   - [ ] Log entries use consistent formatting (e.g., Markdown, specific prefixes like `[DELEGATE]`, `[OUTCOME]`, `[USER]`, `[GOAL_UPDATE]`).
*   - [ ] Appropriate `edit` tools are used to append content without corrupting the file.
*   - [ ] Unit tests (or rule tests) verify that logging occurs at key points in the workflow (e.g., after delegation, after receiving results).

## Implementation Notes / Details 📝

*   Identify the key points within the rules (`TASK-IM-402`) where logging should occur (e.g., after parsing user input, before sending `new_task`, after receiving `attempt_completion`).
*   Choose a consistent format for log entries to make them easily parseable later (by humans or the `agent-session-summarizer`). Markdown lists or timestamped entries are good options.
*   Use `append_to_file` or `insert_content` (with appropriate markers/logic) for adding entries chronologically. `apply_diff` is less suitable for simple appending.
*   Ensure log messages are informative but concise. Avoid logging excessively verbose internal details unless necessary for debugging.

## Subtasks / Checklist ☑️

*   - [ ] Identify all rule points requiring logging based on `RULES-SESSION-MANAGER-001`.
*   - [ ] Define the standard format for log entries (e.g., `[TIMESTAMP] [TYPE] Details...`).
*   - [ ] Implement rule logic to log initial session goal (`TASK-IM-404`).
*   - [ ] Implement rule logic to log significant user requests.
*   - [ ] Implement rule logic to log `new_task` delegations (target, goal/ID).
*   - [ ] Implement rule logic to log `attempt_completion` outcomes from delegates.
*   - [ ] Implement rule logic to log session goal changes (`TASK-IM-405`).
*   - [ ] Ensure correct usage of `edit` tools for appending log entries.
*   - [ ] Add comments to rules explaining the logging steps.
*   - [ ] Write tests verifying log entries are created for delegations.
*   - [ ] Write tests verifying log entries are created for received outcomes.
*   - [ ] Write tests verifying log entries are created for goal changes.