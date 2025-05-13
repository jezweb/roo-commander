+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-410"
title = "Implement active project context tracking"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing session-manager rules/logic
# reporter = "..."
priority = "🔥 Highest" # Essential for multi-project functionality
# estimated_effort = "S" # Small - Primarily managing internal state
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "implementation", "context", "multi-project", "session-state", "rules"]
related_docs = ["RULES-SESSION-MANAGER-001", "MODE-SPEC-SESSION-MANAGER-001", "DOC-UI-CMD-SPEC-001"]
depends_on = ["TASK-IM-402"] # Depends on the rules structure being in place
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement active project context tracking

## Description ✍️

Implement the logic within the `session-manager` mode's rules (`TASK-IM-402`) to identify, track, and utilize the active project context (`[project_slug]`) throughout a user session, as specified in `RULES-SESSION-MANAGER-001`, Section 3.

This involves:
1.  Determining the active project based on user commands (`!pm set-active`), inference from requests, handover summaries, or workspace defaults.
2.  Prompting the user for clarification if the project context is ambiguous.
3.  Storing the determined active `[project_slug]` in the mode's internal state for the current turn/interaction.
4.  Ensuring this active `[project_slug]` is correctly passed along during delegations to the CLE, `roo-dispatch`, and potentially other components.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist to handle the `!pm set-active <project_slug>` command, updating the internal active project state.
*   - [ ] Request parsing logic (`TASK-IM-406`) attempts to infer the project context from user input (e.g., "list tasks for `backend-api`").
*   - [ ] Session start logic (`TASK-IM-404`) attempts to load the active project from the handover summary.
*   - [ ] Logic exists to fall back to a workspace default project if configured and no other context is available.
*   - [ ] If project context remains ambiguous after the above steps, rule(s) trigger an `ask_followup_question` prompt to the user for clarification.
*   - [ ] The determined active `[project_slug]` is stored correctly in the mode's internal state for the current turn.
*   - [ ] Delegation logic (`TASK-IM-407`, `TASK-IM-408`) and calls to the CLE correctly include the active `[project_slug]` as needed.
*   - [ ] Unit tests (or rule tests) verify the setting of active project via command.
*   - [ ] Unit tests verify the inference of project context from user input (using mock NLP results if needed).
*   - [ ] Unit tests verify the clarification prompt flow when context is ambiguous.
*   - [ ] Unit tests verify that the correct project context is passed during mocked delegations.

## Implementation Notes / Details 📝

*   The active `[project_slug]` is session-scoped state, likely managed as a variable within the rule engine's context for the current turn.
*   The order of precedence for determining the context should be: Explicit command (`!pm set-active`) > Explicit mention in current request (`--project` flag or NL inference) > Context from handover summary > Workspace default > Prompt user.
*   Ensure the clarification prompt clearly explains why the context is needed and lists available projects (requires fetching project list, potentially via CLE or reading `projects_config.toml`).

## Subtasks / Checklist ☑️

*   - [ ] Implement rule logic to handle `!pm set-active` command and update internal state.
*   - [ ] Enhance request parsing (`TASK-IM-406`) to attempt project slug inference.
*   - [ ] Enhance session start (`TASK-IM-404`) to load project context from handover summary.
*   - [ ] Implement fallback logic to check workspace default config.
*   - [ ] Implement logic to detect ambiguous context.
*   - [ ] Implement rule logic for the clarification prompt (including fetching project list).
*   - [ ] Ensure internal state correctly stores the active `[project_slug]`.
*   - [ ] Update delegation rules (`TASK-IM-407`, `TASK-IM-408`) to include the active project slug in messages.
*   - [ ] Update rules making CLE calls to include the active project slug where needed.
*   - [ ] Write tests for `!pm set-active` handling.
*   - [ ] Write tests for project inference from input.
*   - [ ] Write tests for ambiguous context clarification flow.
*   - [ ] Write tests verifying project context is passed in delegations.