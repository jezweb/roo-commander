+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-413"
title = "Write tests for delegation routing logic"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing session-manager tests
# reporter = "..."
priority = "🔥 Highest" # Tests core decision-making logic
# estimated_effort = "M" # Medium - Requires testing different input types and routing paths
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "test", "unit-test", "rule-test", "routing", "delegation", "nlp"]
related_docs = ["RULES-SESSION-MANAGER-001", "TASK-IM-406", "TASK-IM-407", "TASK-IM-408", "TASK-IM-411"]
depends_on = ["TASK-IM-406", "TASK-IM-407", "TASK-IM-408", "TASK-IM-411"] # Depends on implementation of routing and delegation logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write tests for delegation routing logic

## Description ✍️

Create unit tests (or rule tests) for the `session-manager` mode's request parsing and delegation routing logic, as implemented in `TASK-IM-406`. These tests should verify that user input (both explicit `!pm` commands and simulated natural language inputs) is correctly categorized and routed to the appropriate downstream action: calling the CLE, delegating to `roo-dispatch`, delegating to `agent-session-summarizer`, escalating to `roo-commander`, or prompting the user for clarification.

## Acceptance Criteria ✅

*   **Explicit `!pm` Commands:**
    *   - [ ] Test verifies that `!pm list/show/config` commands are correctly routed towards CLE execution point.
    *   - [ ] Test verifies that `!pm create/update/delete` commands are correctly routed towards CLE execution point.
    *   - [ ] Test verifies that `!pm report` commands are correctly routed towards AI Engine reporting point (or CLE if it handles reports).
    *   - [ ] Test verifies that `!pm sync github` commands are correctly routed towards the Integration Layer/CLE.
*   **Natural Language (Simulated):**
    *   - [ ] Test verifies that NL input interpreted (by mock NLP) as a request to perform a development task (e.g., "implement task X", "fix bug Y") is routed towards `roo-dispatch` delegation (`TASK-IM-407`).
    *   - [ ] Test verifies that NL input interpreted as a request for a handover summary is routed towards `agent-session-summarizer` delegation (`TASK-IM-408`).
    *   - [ ] Test verifies that NL input interpreted as a direct PM query (e.g., "show me task 123") is routed towards the appropriate CLE call point.
*   **Escalation & Clarification:**
    *   - [ ] Test verifies that conditions identified for escalation (from `TASK-IM-411`) correctly route towards `roo-commander` delegation.
    *   - [ ] Test verifies that ambiguous or unparseable input correctly routes towards the `ask_followup_question` clarification prompt.
*   **General:**
    *   - [ ] Tests use appropriate mocking for the AI Engine's NLP parsing capability (`TASK-IM-307`), returning structured command equivalents for NL inputs.
    *   - [ ] Tests verify that the correct active project context is maintained and passed along during routing decisions.
    *   - [ ] Tests are added to the project's automated test suite.

## Implementation Notes / Details 📝

*   Use the project's standard unit/rule testing framework.
*   **Mocking NLP:** Mock the interface call to the AI Engine's NLP parser (`TASK-IM-307`). For different NL test inputs, have the mock return different structured command objects (or ambiguity indicators) to simulate successful parsing or failure.
*   **Mocking Actions:** Mock the *final action* points (CLE call, `new_task` call to dispatch, `new_task` call to summarizer, `new_task` call to commander, `ask_followup_question` call) to verify that the routing logic *reaches* the correct destination based on the input. We are not testing the full delegation implementation here, just the routing decision.
*   Focus tests on the conditional logic within the request handling rules (`TASK-IM-406`).

## Subtasks / Checklist ☑️

*   - [ ] Set up test file/suite structure for delegation routing tests.
*   - [ ] Implement mock for AI Engine NLP parser (`parseNaturalLanguage`).
*   - [ ] Implement mocks for target action points (CLE calls, `new_task` calls, `ask_followup_question`).
*   - [ ] Write tests for routing explicit `!pm list/show/config` commands -> CLE.
*   - [ ] Write tests for routing explicit `!pm create/update/delete` commands -> CLE.
*   - [ ] Write tests for routing explicit `!pm report` commands -> AI Engine/CLE.
*   - [ ] Write tests for routing explicit `!pm sync` commands -> Integration Layer/CLE.
*   - [ ] Write tests for routing NL "development task" -> `roo-dispatch` delegation point.
*   - [ ] Write tests for routing NL "handover request" -> `agent-session-summarizer` delegation point.
*   - [ ] Write tests for routing NL "direct PM query" -> CLE call point.
*   - [ ] Write tests for routing escalation conditions -> `roo-commander` delegation point.
*   - [ ] Write tests for routing ambiguous/unclear input -> clarification prompt point.
*   - [ ] Verify active project context is correctly handled in routing decisions.
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.