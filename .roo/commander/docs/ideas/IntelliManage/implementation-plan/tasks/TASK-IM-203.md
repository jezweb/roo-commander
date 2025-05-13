+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-203"
title = "Add handling for `sprint_id` field in Task/Story/Bug TOML schema and CRUD operations"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-002"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Essential for Scrum support
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..." # This task implements handling for this field
tags = ["core", "framework", "cle", "methodology", "scrum", "sprint", "schema", "crud"]
related_docs = ["DOC-SCHEMA-001", "DOC-METHODOLOGY-GUIDE-001", "TASK-IM-103", "TASK-IM-108"]
depends_on = ["TASK-IM-103", "TASK-IM-108"] # Depends on Task schema definition and CRUD logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Add handling for `sprint_id` field in Task/Story/Bug TOML schema and CRUD operations

## Description ✍️

Update the IntelliManage system to fully support the optional `sprint_id` field within the TOML frontmatter of Task/Story/Bug artifacts, as defined in the schema (`DOC-SCHEMA-001`). This involves:
1.  Ensuring the schema definition (`TASK-IM-103`) correctly includes `sprint_id` as an optional string.
2.  Modifying the Core Logic Engine (CLE) CRUD operations (`TASK-IM-108`) to correctly read, write, and update the `sprint_id` field.
3.  Enabling filtering by `sprint_id` in the `findArtifacts`/`listArtifacts` method.

This field is primarily used when a project's methodology is set to "Scrum".

## Acceptance Criteria ✅

*   - [ ] The Task/Story/Bug schema definition (`TASK-IM-103`) includes `sprint_id` as an optional string field.
*   - [ ] The validation module (`TASK-IM-102`) correctly validates the `sprint_id` field (accepts strings, rejects other types if provided).
*   - [ ] The `createArtifact` method for Tasks/Stories/Bugs can optionally accept and store a `sprint_id`.
*   - [ ] The `readArtifact` method for Tasks/Stories/Bugs correctly reads and returns the `sprint_id` if present.
*   - [ ] The `updateArtifact` method for Tasks/Stories/Bugs can add, modify, or remove the `sprint_id` field.
*   - [ ] The `findArtifacts`/`listArtifacts` method supports filtering artifacts by a specific `sprint_id`.
*   - [ ] Unit tests (`TASK-IM-111`, `TASK-IM-112`) are updated or added to cover `sprint_id` handling in schema validation and CRUD operations.

## Implementation Notes / Details 📝

*   Modify the Task/Story/Bug schema definition created in `TASK-IM-103`.
*   Update the implementation of `createArtifact`, `readArtifact`, and `updateArtifact` within the CLE (`TASK-IM-108`) to handle the `sprint_id` field during TOML parsing and writing.
*   Extend the filtering logic within `findArtifacts`/`listArtifacts` to check the `sprint_id` field when a corresponding filter parameter is provided.
*   The `sprint_id` is just a string identifier; validation of whether the sprint *exists* in the project config is not part of this task (though it could be a future enhancement or handled by the AI/UI layer).

## Subtasks / Checklist ☑️

*   - [ ] Update Task/Story/Bug schema definition to include optional `sprint_id` (String).
*   - [ ] Update `createArtifact` logic to accept and write `sprint_id`.
*   - [ ] Update `readArtifact` logic to read `sprint_id`.
*   - [ ] Update `updateArtifact` logic to add/modify/remove `sprint_id`.
*   - [ ] Update `findArtifacts`/`listArtifacts` filtering logic to support `--sprint-id` filter.
*   - [ ] Add/Update unit tests for schema validation covering `sprint_id`.
*   - [ ] Add/Update unit tests for CRUD operations covering `sprint_id` handling.