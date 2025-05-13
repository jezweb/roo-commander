+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-504"
title = "Implement task intake and context retrieval logic (using CLE)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-005"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing roo-dispatch rules/logic
# reporter = "..."
priority = "🔥 Highest" # First step in handling a delegated task
# estimated_effort = "M" # Medium - Involves rule logic and CLE interaction
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "roo-dispatch", "implementation", "rules", "context", "cle", "parsing", "intake"]
related_docs = ["RULES-ROO-DISPATCH-001", "MODE-SPEC-ROO-DISPATCH-001", "DOC-FUNC-SPEC-001"]
depends_on = ["TASK-IM-502", "TASK-IM-104"] # Depends on rules structure and CLE base interface
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement task intake and context retrieval logic (using CLE)

## Description ✍️

Implement the initial logic within the `roo-dispatch` mode's rules (`TASK-IM-502`) to handle incoming task delegations from `session-manager` and retrieve the necessary detailed context from IntelliManage artifacts using the Core Logic Engine (CLE).

This involves:
1.  Parsing the incoming `new_task` message to extract the task goal, active `project_slug`, and primary artifact ID(s) (e.g., `TASK-ID.md` path or ID).
2.  Formulating and executing the appropriate call(s) to the CLE (e.g., `CLE.readArtifact(projectSlug, artifactId)`) to fetch the full content (TOML & Markdown) of the referenced artifact(s).
3.  Storing the retrieved artifact content internally (within the rule execution context) for subsequent steps (specialist selection, delegation).
4.  Handling errors if the required context (e.g., artifact ID) is missing from the intake message or if the CLE fails to retrieve the artifact.

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist within `roo-dispatch` to handle the initial processing of a `new_task` delegation.
*   - [ ] The rule(s) correctly parse the incoming message to extract goal, project slug, and artifact ID(s).
*   - [ ] The rule(s) correctly formulate and execute calls to `CLE.readArtifact` (or equivalent) using the extracted project slug and artifact ID.
*   - [ ] The rule(s) successfully store the retrieved artifact content (TOML data object, Markdown string) in rule variables.
*   - [ ] If the intake message is missing required context (e.g., artifact ID), the rule reports an error back to `session-manager` via `attempt_completion`.
*   - [ ] If the CLE call to read the artifact fails (e.g., artifact not found), the rule reports the CLE error back to `session-manager` via `attempt_completion`.
*   - [ ] Unit tests (or rule tests) verify correct parsing of the intake message.
*   - [ ] Unit tests verify correct calls to the mocked CLE `readArtifact` method.
*   - [ ] Unit tests verify correct handling of missing context in the intake message.
*   - [ ] Unit tests verify correct handling of errors returned from the mocked CLE.

## Implementation Notes / Details 📝

*   This logic forms the entry point for `roo-dispatch`'s execution flow.
*   Requires careful parsing of the message format agreed upon between `session-manager` and `roo-dispatch`.
*   Interaction with the CLE uses the interfaces defined in `TASK-IM-104` and implemented in subsequent tasks.
*   Error handling is crucial here; if `roo-dispatch` cannot get the necessary context, it cannot proceed and must report failure immediately.

## Subtasks / Checklist ☑️

*   - [ ] Identify/Create the primary rule file(s) for handling `new_task` intake.
*   - [ ] Implement parsing logic for the incoming delegation message (extract goal, project, ID).
*   - [ ] Implement validation for required fields in the intake message.
*   - [ ] Implement logic to call `CLE.readArtifact` with correct parameters.
*   - [ ] Implement logic to store retrieved artifact data in rule variables.
*   - [ ] Implement error handling for missing intake context -> report failure.
*   - [ ] Implement error handling for CLE failures -> report failure.
*   - [ ] Add comments to rules explaining the intake and retrieval logic.
*   - [ ] Write tests verifying intake message parsing.
*   - [ ] Write tests verifying calls to mock CLE `readArtifact`.
*   - [ ] Write tests verifying error handling for missing intake context.
*   - [ ] Write tests verifying error handling for CLE failures.