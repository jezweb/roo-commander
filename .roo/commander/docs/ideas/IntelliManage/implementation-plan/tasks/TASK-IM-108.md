+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-108"
title = "Implement CLE CRUD & Linking for Tasks/Stories/Bugs"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-001"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔥 Highest" # Core work items
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "cle", "crud", "linking", "task", "story", "bug", "data-model"]
related_docs = ["DOC-FUNC-SPEC-001", "DOC-SCHEMA-001", "DOC-FS-SPEC-001", "TASK-IM-104"]
depends_on = ["TASK-IM-104", "TASK-IM-107"] # Depends on CLE base and Feature handling (for linking)
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement CLE CRUD & Linking for Tasks/Stories/Bugs

## Description ✍️

Implement the specific logic within the Core Logic Engine (CLE) to handle Create, Read, Update, and Delete (CRUD) operations for **Task, Story, and Bug** artifacts (all stored within the `tasks/` directory). This includes generating unique IDs (distinguishing between TASK- and BUG- prefixes based on `type`), constructing filenames, interacting with the file system module, parsing/validating TOML frontmatter against the Task/Story/Bug schema, and handling specific fields, especially the **required `feature_id` link** and the **required `type` field**.

## Acceptance Criteria ✅

*   - [ ] `createArtifact` method (or equivalent) correctly handles `type` values like `"✨ Story"`, `"🛠️ Task"`, `"🐞 Bug"`, etc.:
    *   - [ ] Generates a unique ID (e.g., `TASK-NNN` or `BUG-NNN`) within the project scope, potentially using separate sequences based on `type`.
    *   - [ ] Constructs the correct filename (`TYPE-ID_description.md`).
    *   - [ ] Populates required fields (`id`, `title`, `status`, **`type`**, `created_date`, `updated_date`, `project_name`, **`feature_id`**) in TOML.
    *   - [ ] **MUST** reject creation if `feature_id` is missing or invalid format. (Optional: Validate `feature_id` existence).
    *   - [ ] **MUST** reject creation if `type` is missing or not a valid Task/Story/Bug type enum value.
    *   - [ ] Validates input data against the Task/Story/Bug schema (`TASK-IM-103`).
    *   - [ ] Uses the file system module (`TASK-IM-101`) to write the file to the correct `tasks/` directory.
*   - [ ] `readArtifact` method correctly reads and parses a Task/Story/Bug file given its ID and project slug.
*   - [ ] `updateArtifact` method correctly handles Task/Story/Bug updates:
    *   - [ ] Reads the existing file.
    *   - [ ] Validates proposed changes against the schema (including `type` and `feature_id` if changed).
    *   - [ ] Updates specified TOML fields (including `status`, `assignee`, `priority`, `tags`, `depends_on`, `related_commits`, `related_prs`, `related_issues`, `sprint_id`) or Markdown body.
    *   - [ ] **MUST** update the `updated_date` field.
    *   - [ ] Writes changes back to the file.
*   - [ ] `deleteArtifact` method correctly handles Task/Story/Bug deletion/archival.
*   - [ ] `findArtifacts`/`listArtifacts` method can filter and return Task/Story/Bug artifacts based on criteria (status, type, tags, `feature_id`, `epic_id` (via feature), `assignee`, `priority`, `sprint_id`, etc.).
*   - [ ] Appropriate CLE errors are thrown for invalid operations (e.g., missing `feature_id` or `type` on create).
*   - [ ] Unit tests cover CRUD operations specifically for Tasks, Stories, and Bugs, including validation and handling of required links and fields.

## Implementation Notes / Details 📝

*   Implement the logic within the methods/interfaces defined in `TASK-IM-104`.
*   Ensure interaction with the file system module (`TASK-IM-101`) and validation module (`TASK-IM-102`/`TASK-IM-103`) is correct.
*   Handle ID generation, potentially maintaining separate counters for `TASK-` and `BUG-` prefixes based on the input `type`.
*   Implement filename generation based on TYPE-ID and title.
*   Enforce the requirement for `feature_id` and `type` during creation. Validate `type` against allowed enum values.
*   Ensure `updated_date` is always set correctly on updates.
*   The `updateArtifact` method needs to handle updates to a wider range of optional fields specific to these work items.
*   Filtering logic in `findArtifacts`/`listArtifacts` needs to support the various fields used for task management.

## Subtasks / Checklist ☑️

*   - [ ] Implement `createArtifact` logic specific to Tasks/Stories/Bugs (ID gen based on type, filename, path, schema validation, **required `feature_id` & `type` handling**).
*   - [ ] Implement `readArtifact` logic specific to Tasks/Stories/Bugs.
*   - [ ] Implement `updateArtifact` logic specific to Tasks/Stories/Bugs (validation, handling various optional fields, `updated_date`).
*   - [ ] Implement `deleteArtifact` logic specific to Tasks/Stories/Bugs.
*   - [ ] Implement comprehensive filtering logic for Tasks/Stories/Bugs within `findArtifacts`/`listArtifacts`.
*   - [ ] Write unit tests for `createArtifact` (Task/Story/Bug, including missing/invalid required fields).
*   - [ ] Write unit tests for `readArtifact` (Task/Story/Bug).
*   - [ ] Write unit tests for `updateArtifact` (Task/Story/Bug, covering various fields).
*   - [ ] Write unit tests for `deleteArtifact` (Task/Story/Bug).
*   - [ ] Write unit tests for listing/filtering Tasks/Stories/Bugs based on multiple criteria.