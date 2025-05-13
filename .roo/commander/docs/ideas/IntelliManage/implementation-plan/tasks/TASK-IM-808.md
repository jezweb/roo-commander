+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-808"
title = "Write tests for command parser and routing logic"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-008"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing interaction layer tests
# reporter = "..."
priority = "🔥 Highest" # Tests core command handling
# estimated_effort = "M" # Medium - Requires testing many command variations
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["test", "unit-test", "interface", "command", "parsing", "routing", "chatops"]
related_docs = ["DOC-UI-CMD-SPEC-001", "TASK-IM-802", "TASK-IM-803"]
depends_on = ["TASK-IM-802", "TASK-IM-803"] # Depends on implementation of parser and router
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write tests for command parser and routing logic

## Description ✍️

Create unit tests for the `!pm` command parser (`TASK-IM-802`) and the command routing logic (`TASK-IM-803`).

These tests should verify:
1.  The parser correctly transforms various command strings into the expected structured command object.
2.  The router correctly directs the parsed command object to the appropriate downstream handler function/component based on the verb.

## Acceptance Criteria ✅

*   **Parser Tests (`TASK-IM-802`):**
    *   - [ ] Tests verify correct parsing of verbs, types, and IDs for different commands (create, list, update, show, delete, config, sync, help, etc.).
    *   - [ ] Tests verify correct parsing of various options flags (`--key value`).
    *   - [ ] Tests verify correct parsing of boolean flags (`--flag`).
    *   - [ ] Tests verify correct handling of quoted values containing spaces (`--title "..."`).
    *   - [ ] Tests verify handling of mixed and reordered options flags.
    *   - [ ] Tests verify correct error handling for invalid syntax (e.g., unclosed quotes, malformed flags).
    *   - [ ] Tests verify the structure and content of the returned parsed command object.
*   **Router Tests (`TASK-IM-803`):**
    *   - [ ] Tests verify that parsed commands with `verb: 'create'` are routed to the mock CLE `createArtifact` handler.
    *   - [ ] Tests verify that parsed commands with `verb: 'list'` are routed to the mock CLE `findArtifacts` handler.
    *   - [ ] Tests verify routing for `update`, `delete`, `show` verbs to respective mock CLE handlers.
    *   - [ ] Tests verify routing for `set-active`, `init`, `config` verbs to their specific mock handlers.
    *   - [ ] Tests verify routing for `report` verb to the mock AI Engine handler.
    *   - [ ] Tests verify routing for `sync`, `status` verbs to the mock Integration Layer handler.
    *   - [ ] Tests verify routing for `help` verb to the mock Help handler.
    *   - [ ] Tests verify correct handling and error reporting for unknown verbs.
    *   - [ ] Tests verify that the parsed options object is correctly passed to the mock handler.
*   **General:**
    *   - [ ] Tests use appropriate mocking for downstream handlers (CLE, AI Engine, IL, etc.).
    *   - [ ] Tests are added to the project's automated unit test suite.
    *   - [ ] Test coverage for the parser and router logic meets project standards.

## Implementation Notes / Details 📝

*   Use the project's standard unit testing framework.
*   **Parser Tests:** Provide a wide range of input command strings (after the `!pm ` prefix) and assert that the output structured object matches the expected JSON/dictionary exactly. Test edge cases.
*   **Router Tests:** Provide various structured command objects (simulating the parser's output) as input to the router logic. Mock the downstream handler functions/methods and assert that the *correct* mock handler was called with the *correct* parameters (type, ID, options object).

## Subtasks / Checklist ☑️

*   **Parser Tests:**
    *   - [ ] Set up test file/suite for command parser.
    *   - [ ] Test parsing `create` commands with various options.
    *   - [ ] Test parsing `list` commands with various filters.
    *   - [ ] Test parsing `update` commands with various options.
    *   - [ ] Test parsing `show`, `delete`, `archive` commands.
    *   - [ ] Test parsing `set-active`, `init`, `config` commands.
    *   - [ ] Test parsing `report`, `sync`, `status`, `help` commands.
    *   - [ ] Test parsing commands with quoted values.
    *   - [ ] Test parsing commands with boolean flags.
    *   - [ ] Test parsing commands with mixed/reordered options.
    *   - [ ] Test parsing error handling (invalid syntax).
*   **Router Tests:**
    *   - [ ] Set up test file/suite for command router.
    *   - [ ] Implement mocks for all downstream handlers (CLE methods, AI methods, IL methods, config handlers, help handler).
    *   - [ ] Test routing for `create` verb.
    *   - [ ] Test routing for `list` verb.
    *   - [ ] Test routing for `update` verb.
    *   - [ ] Test routing for `delete`/`archive` verb.
    *   - [ ] Test routing for `show` verb.
    *   - [ ] Test routing for `set-active`, `init`, `config` verbs.
    *   - [ ] Test routing for `report` verb.
    *   - [ ] Test routing for `sync`/`status` verbs.
    *   - [ ] Test routing for `help` verb.
    *   - [ ] Test routing for unknown verb.
    *   - [ ] Verify correct options object is passed to mock handlers.
*   **General:**
    *   - [ ] Integrate tests into the CI/CD pipeline if applicable.
    *   - [ ] Review test coverage reports for parser and router logic.