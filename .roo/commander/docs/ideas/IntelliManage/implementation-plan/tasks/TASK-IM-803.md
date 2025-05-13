+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-803"
title = "Implement routing logic based on parsed command verb/type"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-008"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing interaction layer/routing
# reporter = "..."
priority = "🔥 Highest" # Directs commands to correct handlers
# estimated_effort = "S" # Small - Primarily conditional logic/switch statement
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["interface", "command", "parsing", "routing", "ui", "ux", "chatops", "dispatcher"]
related_docs = ["DOC-UI-CMD-SPEC-001", "TASK-IM-802"]
depends_on = ["TASK-IM-802"] # Depends on the command parser producing structured output
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement routing logic based on parsed command verb/type

## Description ✍️

Implement the logic within the Interaction Layer or `session-manager` rules that takes the structured command object (output from the parser in `TASK-IM-802`) and routes the command to the appropriate handler function or component based primarily on the parsed `verb` and sometimes the `artifactType`.

This acts as a central dispatcher for explicit `!pm` commands.

## Acceptance Criteria ✅

*   - [ ] Logic exists that receives the structured command object (containing verb, type, ID, options).
*   - [ ] A conditional structure (e.g., switch statement, if-else chain, command pattern) routes execution based on the `verb` value.
*   - [ ] `create`, `update`, `delete`, `show`, `list` verbs are routed towards the Core Logic Engine (CLE) interface methods, passing necessary parameters (type, ID, options data).
*   - [ ] `set-active`, `init project`, `config project`, `config workspace` verbs are routed to specific handler functions (likely within `session-manager` or a dedicated config module).
*   - [ ] `report` verb is routed towards the AI Engine's reporting interface (`TASK-IM-305`).
*   - [ ] `sync github`, `status github` verbs are routed towards the Integration Layer's interface (`TASK-IM-701`).
*   - [ ] `help` verb is routed to the help handler (`TASK-IM-804`).
*   - [ ] Logic handles unknown or unsupported verbs gracefully (e.g., returns an error message "Unknown command verb: ...").
*   - [ ] The routing logic correctly passes the parsed `artifactType`, `identifier`, and `options` object to the target handler function/method.
*   - [ ] Unit tests verify correct routing for each supported verb.
*   - [ ] Unit tests verify graceful handling of unknown verbs.

## Implementation Notes / Details 📝

*   **Location:** This logic likely sits immediately after the command parser (`TASK-IM-802`) within the `session-manager`'s request handling flow or a dedicated command dispatcher module.
*   **Structure:** A `switch` statement on the `verb` is often the clearest way to implement this routing.
*   **Parameter Passing:** Ensure the downstream handlers (CLE methods, AI Engine methods, etc.) receive the parsed data (`type`, `id`, `options`) in the format they expect. Some transformation might be needed.
*   **Validation:** Basic semantic validation might occur here or in the downstream handler (e.g., checking if `create` verb has required options like `--title`). Start simple, route first.

## Subtasks / Checklist ☑️

*   - [ ] Identify/Create the function/rule responsible for command routing.
*   - [ ] Implement conditional logic (e.g., switch) based on `parsedCommand.verb`.
*   - [ ] Implement routing case for `create` -> CLE `createArtifact`.
*   - [ ] Implement routing case for `update` -> CLE `updateArtifact`.
*   - [ ] Implement routing case for `delete`/`archive` -> CLE `deleteArtifact`.
*   - [ ] Implement routing case for `show` -> CLE `readArtifact`.
*   - [ ] Implement routing case for `list` -> CLE `findArtifacts`/`listArtifacts`.
*   - [ ] Implement routing case for `set-active` -> Session Manager state logic.
*   - [ ] Implement routing case for `init project` -> Project initialization logic.
*   - [ ] Implement routing case for `config` -> Configuration update logic.
*   - [ ] Implement routing case for `report` -> AI Engine `generateReport`.
*   - [ ] Implement routing case for `sync`/`status` -> Integration Layer methods.
*   - [ ] Implement routing case for `help` -> Help handler.
*   - [ ] Implement default case for unknown verbs (error message).
*   - [ ] Ensure correct parameters are passed to target handlers.
*   - [ ] Write unit tests verifying routing for each verb (using mock handlers).
*   - [ ] Write unit tests verifying unknown verb handling.