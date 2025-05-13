+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-807"
title = "Implement NLP -> Command translation for core create/list/update actions (via AI Engine)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-008"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing interaction layer/AI integration
# reporter = "..."
priority = "🔼 High" # Core usability feature for natural language
# estimated_effort = "M" # Medium - Requires integrating with AI NLP capability
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["interface", "ux", "ui", "nlp", "nlu", "ai", "command-parsing", "routing", "chatops"]
related_docs = ["DOC-UI-CMD-SPEC-001", "DOC-AI-SPEC-001", "TASK-IM-307", "TASK-IM-801", "TASK-IM-803"]
depends_on = ["TASK-IM-307", "TASK-IM-801", "TASK-IM-803"] # Depends on AI NLP parsing, prefix detection, and command routing
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement NLP -> Command translation for core create/list/update actions (via AI Engine)

## Description ✍️

Integrate the AI Engine's Natural Language Processing (NLP) capability (`TASK-IM-307`) into the user interaction flow handled by the `session-manager` (or Interaction Layer). When user input does *not* start with the `!pm` prefix (`TASK-IM-801`), this task implements the logic to:
1.  Call the AI Engine's `parseNaturalLanguage` method with the user's input text.
2.  Receive the structured command representation (equivalent to a parsed `!pm` command) or an ambiguity/failure indicator from the AI Engine.
3.  If a structured command is successfully returned, feed this structured command object into the command routing logic (`TASK-IM-803`) as if it had come from the `!pm` command parser (`TASK-IM-802`).
4.  If the AI Engine indicates ambiguity or failure to parse, trigger the clarification prompt logic (`TASK-IM-406` / `TASK-IM-803`).

Focus initially on translating core actions: create task/bug, list task/bug (with filters), update task status.

## Acceptance Criteria ✅

*   - [ ] The main input handling logic (e.g., in `session-manager` rules) correctly calls the AI Engine's `parseNaturalLanguage` method for non-`!pm` input.
*   - [ ] The logic correctly handles the structured command object returned by the (mocked or real) AI Engine.
*   - [ ] A successfully parsed NL command for "create task/bug" is correctly routed to the CLE `createArtifact` handler via the command router (`TASK-IM-803`).
*   - [ ] A successfully parsed NL command for "list tasks/bugs" (with potential filters like status or assignee) is correctly routed to the CLE `findArtifacts`/`listArtifacts` handler.
*   - [ ] A successfully parsed NL command for "update task status" (e.g., "mark task 123 done") is correctly routed to the CLE `updateArtifact` handler.
*   - [ ] If the AI Engine returns an ambiguity/failure indicator, the logic correctly routes to the user clarification prompt mechanism.
*   - [ ] Integration tests verify the end-to-end flow from NL input -> AI Parser -> Command Router -> Correct Handler (using mock AI parser and mock handlers).

## Implementation Notes / Details 📝

*   **Location:** This logic sits in the "else" branch of the `!pm` prefix detection (`TASK-IM-801`), likely within the `session-manager`'s main request handling rules (`TASK-IM-406`).
*   **AI Interface:** Uses the `parseNaturalLanguage` interface defined in `TASK-IM-301` and implemented in `TASK-IM-307`.
*   **Command Router Integration:** The key is to feed the *output* of the NLP parser (the structured command object) into the *same* command router (`TASK-IM-803`) that handles explicitly parsed `!pm` commands. This avoids duplicating routing logic.
*   **Error/Ambiguity Handling:** Ensure the response from the AI parser clearly distinguishes between a successfully parsed command and a failure/need for clarification, and route accordingly.

## Subtasks / Checklist ☑️

*   - [ ] Identify the rule/code location handling non-`!pm` input.
*   - [ ] Implement the call to the AI Engine's `parseNaturalLanguage` method.
*   - [ ] Implement logic to check the response from the AI Engine (success vs. ambiguity/failure).
*   - [ ] If successful, implement logic to pass the structured command object to the command router (`TASK-IM-803`).
*   - [ ] If ambiguous/failed, implement logic to trigger the clarification prompt flow.
*   - [ ] Add comments explaining the NLP integration and routing flow.
*   - [ ] Write integration tests for NL "create task" -> Router -> CLE Create handler mock.
*   - [ ] Write integration tests for NL "list tasks with filter" -> Router -> CLE List handler mock.
*   - [ ] Write integration tests for NL "update status" -> Router -> CLE Update handler mock.
*   - [ ] Write integration tests for NL ambiguity -> Router -> Clarification prompt mock.