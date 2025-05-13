+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-801"
title = "Implement `!pm` command prefix detection"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-008"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing interaction layer/routing
# reporter = "..."
priority = "🔥 Highest" # Entry point for all commands
# estimated_effort = "XS" # Extra Small - Simple string check
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["interface", "command", "parsing", "routing", "ui", "ux", "chatops"]
related_docs = ["DOC-UI-CMD-SPEC-001", "DOC-ARCH-001"]
depends_on = [] # Foundational UI task
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement `!pm` command prefix detection

## Description ✍️

Implement the initial logic within the user Interaction Layer (e.g., the main message handler in the Roo Code chat interface or the entry point for `session-manager`'s request handling) to detect if user input begins with the designated IntelliManage command prefix: `!pm`.

This involves:
1.  Receiving the raw user input string.
2.  Checking if the string starts with `!pm` (potentially allowing for leading whitespace).
3.  If the prefix is detected, routing the rest of the string to the command parser (`TASK-IM-802`).
4.  If the prefix is not detected, routing the input to the natural language processing path (e.g., AI Engine NLP parser `TASK-IM-307` or default mode behavior).

## Acceptance Criteria ✅

*   - [ ] Logic exists at the appropriate entry point (e.g., chat message handler, `session-manager` input rule) to inspect incoming user messages.
*   - [ ] The logic correctly identifies strings starting with `!pm`.
*   - [ ] The logic handles optional leading whitespace before `!pm`.
*   - [ ] If `!pm` is detected, the remaining part of the string (the command itself) is passed to the command parser component/function (`TASK-IM-802`).
*   - [ ] If `!pm` is *not* detected, the input string is passed to the natural language processing component/function (`TASK-IM-307`).
*   - [ ] Unit tests verify correct detection of the prefix with and without leading whitespace.
*   - [ ] Unit tests verify correct routing to the command parser when the prefix is present.
*   - [ ] Unit tests verify correct routing to the NLP path when the prefix is absent.

## Implementation Notes / Details 📝

*   This is typically a simple string operation (e.g., `string.trim().startsWith('!pm')`).
*   The implementation location depends on the overall architecture of the chat interface and mode interaction within Roo Code. It might be within the core message handling loop or the initial rule executed by `session-manager`.
*   Ensure the prefix check is case-sensitive (`!pm`) as specified or define if case-insensitivity is desired. Case-sensitive is generally recommended for command prefixes.

## Subtasks / Checklist ☑️

*   - [ ] Identify the correct location in the codebase to implement the prefix check.
*   - [ ] Implement the string check logic (including handling leading whitespace).
*   - [ ] Implement the conditional routing: if prefix -> call command parser (`TASK-IM-802`).
*   - [ ] Implement the conditional routing: if no prefix -> call NLP parser (`TASK-IM-307`).
*   - [ ] Add comments explaining the prefix detection and routing.
*   - [ ] Write unit tests for inputs starting with `!pm`.
*   - [ ] Write unit tests for inputs starting with `!pm` with leading spaces.
*   - [ ] Write unit tests for inputs *not* starting with `!pm`.
*   - [ ] Write unit tests verifying the correct subsequent function/component is called in each case (using mocks).