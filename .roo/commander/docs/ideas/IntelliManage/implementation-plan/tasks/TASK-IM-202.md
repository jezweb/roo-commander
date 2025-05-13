+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-202"
title = "Implement CLE status transition validation logic (standard & custom)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-002"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Core for maintaining workflow integrity
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "cle", "methodology", "status", "validation", "workflow", "scrum", "kanban", "custom"]
related_docs = ["DOC-METHODOLOGY-GUIDE-001", "DOC-SCHEMA-001", "TASK-IM-201"]
depends_on = ["TASK-IM-201"] # Depends on reading the methodology setting
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement CLE status transition validation logic (standard & custom)

## Description ✍️

Implement logic within the Core Logic Engine (CLE), specifically within the `updateArtifact` method (or a dedicated validation helper), to validate proposed changes to an artifact's `status` field based on the project's configured `methodology`.

This involves:
1.  Defining standard allowed transitions for "Scrum" and "Kanban" methodologies.
2.  Reading and applying custom status lists for "Custom" methodology.
3.  Allowing any status change (or minimal validation) for "None" methodology.

## Acceptance Criteria ✅

*   - [ ] The `updateArtifact` method (or a helper it calls) checks the project's methodology (`TASK-IM-201`) before validating a status change.
*   - [ ] For "Scrum" and "Kanban", standard transitions are enforced (e.g., cannot go directly from "⚪️ Backlog" to "🟢 Done"). Define these standard rules.
*   - [ ] For "Custom", the proposed new status **MUST** exist in the `custom_statuses` list defined in `project_config.toml` (loaded via `TASK-IM-110`). (Optional: Implement explicit transition rules if defined in config).
*   - [ ] For "None", minimal validation is performed (e.g., just check if the status string is non-empty, or allow any standard status).
*   - [ ] `updateArtifact` rejects the update and returns/throws a specific `ValidationError` if a status transition is invalid for the current methodology.
*   - [ ] Valid status transitions are allowed, and the update proceeds.
*   - [ ] Unit tests cover valid and invalid transitions for Scrum, Kanban, Custom (using mock config), and None methodologies.

## Implementation Notes / Details 📝

*   Define the standard allowed transitions for Scrum/Kanban clearly in code (e.g., using adjacency lists, state machines, or simple rule sets). Example standard statuses: `"⚪️ Backlog"`, `"🟡 To Do"`, `"🔵 In Progress"`, `"🟣 Review"`, `"🟢 Done"`, `"🧊 Archived"`, `"🚧 Blocked"`.
    *   *Example Rule:* From `"🔵 In Progress"`, allowed next states might be `"🟣 Review"`, `"🚧 Blocked"`, `"🟡 To Do"` (if work needs to be paused/reverted).
*   For "Custom", the primary validation is ensuring the target status exists in the `custom_statuses` list from the config. Implementing explicit *transition* rules for Custom (e.g., `[custom_transitions]` table in config) is a potential future enhancement but adds complexity. Start with just validating against the list of allowed statuses.
*   Integrate this validation check early within the `updateArtifact` flow, before attempting file modifications.
*   Ensure the error message clearly indicates *why* the transition is invalid (e.g., "Invalid status transition from 'X' to 'Y' for Kanban methodology", "Status 'Z' not found in custom statuses for this project").

## Subtasks / Checklist ☑️

*   - [ ] Define standard status transition rules for Scrum methodology in code.
*   - [ ] Define standard status transition rules for Kanban methodology in code.
*   - [ ] Implement logic in CLE (`updateArtifact` or helper) to get the current status and proposed new status.
*   - [ ] Implement logic to fetch the project's methodology (`TASK-IM-201`).
*   - [ ] Implement validation logic branch for "Scrum".
*   - [ ] Implement validation logic branch for "Kanban".
*   - [ ] Implement validation logic branch for "Custom" (check against `custom_statuses` list from config).
*   - [ ] Implement validation logic branch for "None".
*   - [ ] Implement error throwing/returning for invalid transitions.
*   - [ ] Write unit tests for valid Scrum transitions.
*   - [ ] Write unit tests for invalid Scrum transitions.
*   - [ ] Write unit tests for valid Kanban transitions.
*   - [ ] Write unit tests for invalid Kanban transitions.
*   - [ ] Write unit tests for Custom methodology (valid status in list, invalid status not in list).
*   - [ ] Write unit tests for None methodology (minimal validation).