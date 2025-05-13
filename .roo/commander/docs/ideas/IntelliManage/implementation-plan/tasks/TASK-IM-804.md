+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-804"
title = "Implement `!pm help` functionality"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-008"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing interaction layer
# reporter = "..."
priority = "▶️ Medium" # Important for usability
# estimated_effort = "S" # Small/Medium - Depends on help text detail
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["interface", "command", "help", "documentation", "ui", "ux", "chatops"]
related_docs = ["DOC-UI-CMD-SPEC-001", "TASK-IM-803"]
depends_on = ["TASK-IM-803"] # Depends on routing logic directing 'help' here
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement `!pm help` functionality

## Description ✍️

Implement the handler logic for the `!pm help` command, which was routed by `TASK-IM-803`. This functionality should provide users with information about available `!pm` commands and their usage.

This involves:
1.  Handling the base `!pm help` command to display a summary of all available command verbs and their general purpose.
2.  Handling `!pm help <verb>` (e.g., `!pm help create`) to display detailed usage information for a specific command verb, including required parameters and available options/flags.
3.  Fetching or defining the help text content.

## Acceptance Criteria ✅

*   - [ ] A specific handler function/rule exists for the `help` verb.
*   - [ ] Calling `!pm help` (with no arguments) displays a list of available verbs (create, list, update, delete, etc.) and a brief description of each.
*   - [ ] Calling `!pm help <verb>` displays detailed help for that specific verb, including:
    *   - [ ] Expected arguments (e.g., `[artifact_type]`, `[identifier]`).
    *   - [ ] Required options/flags (e.g., `--title` for `create`).
    *   - [ ] Optional options/flags and their purpose.
    *   - [ ] Example usage.
*   - [ ] The help text accurately reflects the implemented commands and options specified in `DOC-UI-CMD-SPEC-001`.
*   - [ ] If `!pm help <unknown_verb>` is called, an appropriate "Unknown command" message is displayed.
*   - [ ] Help text is formatted clearly (e.g., using Markdown) for readability in the chat interface.
*   - [ ] Unit tests verify the output for `!pm help`.
*   - [ ] Unit tests verify the output for `!pm help <verb>` for several key verbs (e.g., create, list, update).
*   - [ ] Unit tests verify the handling of `!pm help <unknown_verb>`.

## Implementation Notes / Details 📝

*   **Help Content Source:** Where will the help text come from?
    *   *Hardcoded Strings:* Simple for a small command set, but harder to maintain.
    *   *Separate Files:* Store help text in dedicated `.md` or `.txt` files (e.g., `.ruru/help/pm/create.md`). The handler reads the appropriate file. More maintainable.
    *   *Introspection (Advanced):* Generate help text dynamically by inspecting command definitions (if using a command framework). More complex.
    *   *Recommendation:* Start with hardcoded strings or separate files.
*   **Formatting:** Use Markdown backticks (`) for commands, flags, and placeholders. Use code blocks for examples.
*   **Maintainability:** Ensure the help text stays synchronized with the actual command implementations.

## Subtasks / Checklist ☑️

*   - [ ] Create the handler function/rule for the `help` verb.
*   - [ ] Decide on the source for help text (hardcoded, files, etc.).
*   - [ ] Implement logic to detect if a specific `verb` argument was provided to `!pm help`.
*   - [ ] Implement logic to display the general help summary (list of verbs).
*   - [ ] Implement logic to display detailed help for specific verbs (arguments, options, examples).
    *   - [ ] Write help text for `create`.
    *   - [ ] Write help text for `list`.
    *   - [ ] Write help text for `update`.
    *   - [ ] Write help text for `delete`/`archive`.
    *   - [ ] Write help text for `show`.
    *   - [ ] Write help text for `set-active`.
    *   - [ ] Write help text for `init project`.
    *   - [ ] Write help text for `config`.
    *   - [ ] Write help text for `report`.
    *   - [ ] Write help text for `sync`/`status`.
    *   - [ ] Write help text for `help` itself.
*   - [ ] Implement handling for unknown verbs passed to `!pm help`.
*   - [ ] Ensure output is formatted clearly using Markdown.
*   - [ ] Write unit tests for `!pm help`.
*   - [ ] Write unit tests for `!pm help create`.
*   - [ ] Write unit tests for `!pm help list`.
*   - [ ] Write unit tests for `!pm help <unknown_verb>`.