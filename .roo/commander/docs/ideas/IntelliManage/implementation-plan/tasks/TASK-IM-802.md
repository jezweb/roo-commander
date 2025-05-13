+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-802"
title = "Implement command string parser (verb, type, ID, options flags)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-008"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing interaction layer/parsing
# reporter = "..."
priority = "🔥 Highest" # Core command processing step
# estimated_effort = "M" # Medium - Requires robust argument parsing
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["interface", "command", "parsing", "routing", "ui", "ux", "chatops", "arguments"]
related_docs = ["DOC-UI-CMD-SPEC-001", "TASK-IM-801"]
depends_on = ["TASK-IM-801"] # Depends on prefix detection passing the command string
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement command string parser (verb, type, ID, options flags)

## Description ✍️

Implement a robust parser function or module that takes the command string (the portion of the user input *after* the `!pm` prefix, received from `TASK-IM-801`) and parses it into a structured object representing the command's components: verb, artifact type, identifier, and options/flags.

The parser must handle the syntax defined in `DOC-UI-CMD-SPEC-001`:
`!pm <verb> [artifact_type] [identifier] [--option1 "value 1"] [--option2 value2] [--boolean-flag]`

This involves:
1.  Splitting the command string into arguments.
2.  Identifying the `verb` (first argument).
3.  Identifying the optional `artifact_type` (second argument, if applicable based on verb).
4.  Identifying the optional `identifier` (third argument, if applicable based on verb/type).
5.  Parsing remaining arguments as option flags (`--key value` or `--boolean-key`).
6.  Handling quoted values for options containing spaces.
7.  Returning a structured object (e.g., JSON/dictionary) containing the parsed components.

## Acceptance Criteria ✅

*   - [ ] A dedicated parser function/module exists.
*   - [ ] The parser correctly identifies the `verb` from the first argument.
*   - [ ] The parser correctly identifies the `artifact_type` (if present and expected for the verb).
*   - [ ] The parser correctly identifies the `identifier` (if present and expected).
*   - [ ] The parser correctly identifies `--key value` options and stores them (e.g., `{ key: 'value' }`).
*   - [ ] The parser correctly handles values enclosed in double quotes (e.g., `--title "My Task Title"` -> `{ title: 'My Task Title' }`).
*   - [ ] The parser correctly identifies boolean flags (e.g., `--force` -> `{ force: true }`).
*   - [ ] The parser handles different ordering of options flags.
*   - [ ] The parser returns a structured object containing the parsed `verb`, `artifactType`, `identifier`, and an `options` object/dictionary.
*   - [ ] The parser handles errors gracefully (e.g., invalid flag format, unclosed quotes) and returns an error indication.
*   - [ ] Unit tests cover parsing of various valid command structures (create, list, update, show, delete, config, sync, help).
*   - [ ] Unit tests cover parsing commands with different combinations and ordering of options.
*   - [ ] Unit tests cover parsing commands with quoted values and boolean flags.
*   - [ ] Unit tests cover handling of parsing errors.

## Implementation Notes / Details 📝

*   **Argument Splitting:** Be careful when splitting the command string. Simple splitting by space is insufficient due to quoted values. Consider iterating through the string or using a more sophisticated argument parsing library if available (e.g., `yargs-parser` for Node.js, `argparse` for Python - though might be overkill if implementing within rules).
*   **State Machine:** A simple state machine approach can be effective for parsing arguments, tracking whether the parser is currently inside quotes.
*   **Validation:** This parser focuses on *syntactic* correctness. *Semantic* validation (e.g., is "list" a valid verb? does "create" require `--title`?) happens later in the routing/execution logic (`TASK-IM-803`).
*   **Output Structure:** Define a consistent output object, e.g.:
    ```json
    {
      "verb": "create",
      "artifactType": "task",
      "identifier": null,
      "options": {
        "project": "backend-api",
        "title": "Implement endpoint",
        "priority": "High"
      },
      "rawArgs": ["create", "task", "--project", "backend-api", ...] // Optional
    }
    ```

## Subtasks / Checklist ☑️

*   - [ ] Choose parsing strategy (manual iteration, regex, library).
*   - [ ] Implement argument splitting logic (handling quotes).
*   - [ ] Implement logic to identify verb, type, identifier based on position.
*   - [ ] Implement logic to parse `--key value` options.
*   - [ ] Implement logic to parse `--boolean-flag` options.
*   - [ ] Implement logic to handle quoted values correctly.
*   - [ ] Implement the structured output object creation.
*   - [ ] Implement error handling for parsing failures (e.g., invalid syntax).
*   - [ ] Add comments explaining the parsing logic.
*   - [ ] Write unit tests for basic commands (verb only, verb + type).
*   - [ ] Write unit tests for commands with identifiers.
*   - [ ] Write unit tests for commands with various options (key-value, boolean, quoted).
*   - [ ] Write unit tests for commands with mixed option order.
*   - [ ] Write unit tests for parsing error scenarios (unclosed quotes, invalid flags).