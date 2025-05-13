+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-406"
title = "Implement request parsing and routing logic (CLE vs. roo-dispatch vs. summarizer)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing session-manager rules/logic
# reporter = "..."
priority = "🔥 Highest" # Core decision-making logic of the mode
# estimated_effort = "M" # Medium - Involves parsing and conditional logic
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "implementation", "parsing", "routing", "delegation", "rules", "nlp"]
related_docs = ["RULES-SESSION-MANAGER-001", "MODE-SPEC-SESSION-MANAGER-001", "DOC-UI-CMD-SPEC-001", "TASK-IM-307"]
depends_on = ["TASK-IM-402", "TASK-IM-307"] # Depends on rules structure and potentially NLP parsing capability
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement request parsing and routing logic (CLE vs. roo-dispatch vs. summarizer)

## Description ✍️

Implement the core request handling logic within the `session-manager` mode's rules (`TASK-IM-402`) as specified in `RULES-SESSION-MANAGER-001`, Section 4. This involves:
1.  Parsing the user's input to determine their intent. This may involve:
    *   Recognizing explicit `!pm` commands.
    *   Leveraging the AI Engine's NLP capability (`TASK-IM-307`) to translate natural language into structured commands/intents.
2.  Categorizing the parsed intent (Direct PM Command, Development Task, Handover Request, Goal Setting, Other/Unclear).
3.  Routing the request to the appropriate downstream component based on the category:
    *   Direct PM Commands -> Core Logic Engine (CLE).
    *   Development Tasks -> `roo-dispatch`.
    *   Handover Requests -> `agent-session-summarizer`.
    *   Goal Setting / Other -> Further interaction with the user via `ask_followup_question`.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist within `session-manager` to process user input after the initial goal is set.
*   - [ ] Logic correctly identifies explicit `!pm` commands and extracts parameters.
*   - [ ] Logic correctly invokes the AI Engine's NLP parser (`TASK-IM-307`) for non-`!pm` input.
*   - [ ] Logic correctly interprets the structured output from the NLP parser.
*   - [ ] Logic accurately categorizes the user's intent based on parsed `!pm` commands or NLP results.
*   - [ ] Requests categorized as "Direct PM Command" are correctly forwarded to the CLE interface.
*   - [ ] Requests categorized as "Development Task" trigger delegation to `roo-dispatch` via `new_task` (implementation of the delegation itself is `TASK-IM-407`).
*   - [ ] Requests categorized as "Handover Request" trigger delegation to `agent-session-summarizer` via `new_task` (implementation of the delegation itself is `TASK-IM-408`).
*   - [ ] Requests categorized as "Goal Setting" or "Other/Unclear" trigger appropriate clarification prompts using `ask_followup_question`.
*   - [ ] The active project context (`[project_slug]`) is correctly included when forwarding requests or delegating.
*   - [ ] Unit tests (or rule tests) verify the correct routing for different types of user input (explicit commands, NL equivalents).

## Implementation Notes / Details 📝

*   This is a central piece of the `session-manager`'s rule logic.
*   Start with handling explicit `!pm` commands first, as they are more deterministic.
*   Integrate the call to the AI Engine's NLP parser (`TASK-IM-307`) for inputs that don't match the `!pm` pattern.
*   The routing logic will likely involve conditional checks (if-else structures) based on the parsed verb/intent.
*   Ensure the distinction between *routing* the request (this task) and *implementing the specific delegation call* (subsequent tasks like 407, 408) is clear. This task sets up the decision-making; the next tasks implement the actions decided upon.

## Subtasks / Checklist ☑️

*   - [ ] Implement rule logic to check if input starts with `!pm`.
*   - [ ] Implement parsing logic for `!pm` commands (extract verb, type, ID, options).
*   - [ ] Implement rule logic to call AI Engine NLP parser (`TASK-IM-307`) for non-`!pm` input.
*   - [ ] Implement logic to interpret structured output from NLP parser.
*   - [ ] Implement conditional routing logic based on parsed intent/verb:
    *   - [ ] Route direct PM commands towards CLE call point.
    *   - [ ] Route development tasks towards `roo-dispatch` delegation point.
    *   - [ ] Route handover requests towards `agent-session-summarizer` delegation point.
    *   - [ ] Route goal/unclear requests towards `ask_followup_question`.
*   - [ ] Ensure active project context is passed correctly during routing/delegation preparation.
*   - [ ] Write tests verifying correct routing for various `!pm` commands.
*   - [ ] Write tests verifying correct routing for NL equivalents (using mock NLP results).
*   - [ ] Write tests verifying fallback to clarification prompts for unclear input.