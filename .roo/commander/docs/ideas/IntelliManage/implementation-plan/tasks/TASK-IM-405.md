+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-405"
title = "Implement session goal management logic"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing session-manager rules/logic
# reporter = "..."
priority = "🔥 Highest" # Core to directing the session
# estimated_effort = "S" # Small - Primarily managing internal state/prompts
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "implementation", "session-state", "goal-setting", "context", "rules"]
related_docs = ["RULES-SESSION-MANAGER-001", "MODE-SPEC-SESSION-MANAGER-001", "KB-OUTLINE-SESSION-MANAGER-001"]
depends_on = ["TASK-IM-402", "TASK-IM-404"] # Depends on rules structure and session start logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement session goal management logic

## Description ✍️

Implement the logic within the `session-manager` mode (primarily via its rules) to effectively elicit, track, and potentially update the user's high-level goal(s) for the current work session, as specified in `RULES-SESSION-MANAGER-001`, Section 2 and `KB-OUTLINE-SESSION-MANAGER-001`, file `02-goal-management.md`.

This involves:
1.  Using `ask_followup_question` effectively during session start/resume to establish the initial goal.
2.  Storing the current `[Session Goal]` internally within the mode's state for the current turn/interaction.
3.  Using the `[Session Goal]` to provide context for subsequent actions and delegations.
4.  Handling user input that indicates a change or refinement of the session goal.
5.  Logging goal setting and changes in the session log (`TASK-IM-409`).

## Acceptance Criteria ✅

*   - [ ] The session start/resume logic (`TASK-IM-404`) correctly prompts for and captures the initial session goal.
*   - [ ] The `session-manager` mode maintains the current `[Session Goal]` in its internal state during processing.
*   - [ ] The mode uses the `[Session Goal]` when formulating prompts or deciding on next steps (e.g., "Based on your goal to 'fix bug X', shall we...").
*   - [ ] The mode can recognize user input indicating a desire to change the goal (e.g., "Actually, let's switch focus to feature Y").
*   - [ ] Upon detecting a goal change request, the mode confirms the new goal with the user using `ask_followup_question`.
*   - [ ] The internal `[Session Goal]` state is updated upon confirmation of a new goal.
*   - [ ] Goal setting and changes are recorded in the session log.
*   - [ ] Unit tests (or rule tests) verify goal elicitation prompts.
*   - [ ] Unit tests verify goal tracking and usage in subsequent prompts/logic.
*   - [ ] Unit tests verify handling of goal change requests.

## Implementation Notes / Details 📝

*   This logic is tightly integrated with the session start/resume (`TASK-IM-404`) and request handling (`TASK-IM-406`) rules.
*   The `[Session Goal]` is likely stored as a variable within the rule engine's context for the current execution turn. It's not persistent state *within the mode itself* across turns, but is re-established from logs/summaries or user input.
*   Use clear prompts (`ask_followup_question`) to confirm goals and changes.
*   The session log (`TASK-IM-409`) becomes the persistent record of the goal evolution.

## Subtasks / Checklist ☑️

*   - [ ] Integrate goal capture into the session start/resume rules (`TASK-IM-404`).
*   - [ ] Implement internal state management (rule variables) for the current `[Session Goal]`.
*   - [ ] Update request handling logic (`TASK-IM-406`) to reference the `[Session Goal]` for context.
*   - [ ] Implement logic/rules to detect user intent to change the goal.
*   - [ ] Implement confirmation prompt logic for goal changes using `ask_followup_question`.
*   - [ ] Implement logic to update the internal `[Session Goal]` state.
*   - [ ] Integrate goal logging into the session logging rules (`TASK-IM-409`).
*   - [ ] Write tests verifying initial goal setting prompts and capture.
*   - [ ] Write tests verifying goal change detection and confirmation flow.