+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-307"
title = "Implement core NLP command parsing (NL -> Structured `!pm` equivalent)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Core for natural language interaction
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["ai", "llm", "nlp", "nlu", "command-parsing", "interface", "ux"]
related_docs = ["DOC-AI-SPEC-001", "DOC-UI-CMD-SPEC-001", "TASK-IM-301"]
depends_on = ["TASK-IM-301"] # Depends on AI interface definition
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement core NLP command parsing (NL -> Structured `!pm` equivalent)

## Description ✍️

Implement the AI Engine capability to parse natural language (NL) user input and translate it into the equivalent structured `!pm` command format that can be understood by the Core Logic Engine (CLE) or the `session-manager`'s command router. This allows users to interact more naturally instead of always needing the precise `!pm` syntax.

Focus on core, common IntelliManage actions initially:
*   Creating artifacts (tasks, bugs, features).
*   Listing artifacts (tasks, bugs, epics).
*   Updating artifact status.
*   Showing artifact details.

## Acceptance Criteria ✅

*   - [ ] AI Engine exposes a method (e.g., `parseNaturalLanguage`) as defined in `TASK-IM-301`.
*   - [ ] The method accepts a natural language string as input.
*   - [ ] The method uses an LLM or dedicated NLU techniques to identify the user's intent (e.g., create, list, update, show).
*   - [ ] The method extracts key entities from the NL input:
    *   Artifact type (task, bug, feature, epic...).
    *   Artifact ID (TASK-123, EPIC-005...).
    *   Project slug/name.
    *   Field names (status, assignee, priority...).
    *   Field values ("In Progress", "User:Alice", "High"...).
    *   Titles/Descriptions.
*   - [ ] The method translates the parsed intent and entities into a structured representation equivalent to a `!pm` command (e.g., a JSON object like `{ verb: 'create', type: 'task', options: { title: '...', project: '...', status: '...' } }`).
*   - [ ] The translation handles common variations in phrasing for core actions (e.g., "make a task", "create task", "new task").
*   - [ ] The method correctly identifies target artifacts for status updates (e.g., "mark TASK-123 as done").
*   - [ ] The method correctly identifies filters for listing (e.g., "show me open bugs for frontend").
*   - [ ] The method returns the structured command representation or indicates if the intent could not be reliably determined.
*   - [ ] Unit tests cover translation of NL requests for creating tasks/bugs.
*   - [ ] Unit tests cover translation of NL requests for listing tasks/bugs with filters.
*   - [ ] Unit tests cover translation of NL requests for updating task status.
*   - [ ] Unit tests cover translation of NL requests for showing artifact details.

## Implementation Notes / Details 📝

*   **LLM Approach:** This is likely the most feasible approach. Requires careful prompt engineering. The prompt should instruct the LLM to:
    *   Identify the user's primary intent (verb).
    *   Identify the target artifact type.
    *   Extract relevant entities and map them to known `!pm` option flags (e.g., `--title`, `--status`, `--project`, `--assignee`).
    *   Output the result in a specific structured format (e.g., JSON).
*   **Entity Recognition:** Pay attention to extracting artifact IDs, project names, statuses, priorities, and user names accurately. The LLM might need examples or context about valid values.
*   **Scope:** Start with the most frequent commands (create task/bug, list tasks/bugs, update status). Expand coverage later.
*   **Ambiguity:** If the NL input is ambiguous (e.g., missing required info like title for creation, unclear artifact ID), the parser should ideally return an indication of ambiguity or the missing information needed, allowing the coordinator (`session-manager`) to ask the user for clarification.
*   **Error Handling:** Handle cases where the LLM fails to parse or returns unusable output.

## Subtasks / Checklist ☑️

*   - [ ] Implement the `parseNaturalLanguage` interface method in the AI Engine.
*   - [ ] Design and implement LLM prompt templates for NL command parsing and entity extraction.
*   - [ ] Implement logic to call the external LLM API with the prompt and user input.
*   - [ ] Implement logic to parse the structured response (e.g., JSON) from the LLM containing the command equivalent.
*   - [ ] Define the target structured command representation (e.g., JSON object schema).
*   - [ ] Implement mapping from extracted entities to the target command structure.
*   - [ ] Implement handling for ambiguous or unparseable input (return specific error/status).
*   - [ ] Implement error handling for LLM API calls.
*   - [ ] Write unit tests for NL -> `!pm create task/bug` translation.
*   - [ ] Write unit tests for NL -> `!pm list tasks/bugs` translation (with filters).
*   - [ ] Write unit tests for NL -> `!pm update task/bug --status ...` translation.
*   - [ ] Write unit tests for NL -> `!pm show task/bug ...` translation.
*   - [ ] Write unit tests for handling ambiguous NL input.