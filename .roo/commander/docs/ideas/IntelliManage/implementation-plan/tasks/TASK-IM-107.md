+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-107"
title = "Implement CLE CRUD & Linking for Features"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-001"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔥 Highest" # Features link Epics to Tasks
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "cle", "crud", "linking", "feature", "data-model"]
related_docs = ["DOC-FUNC-SPEC-001", "DOC-SCHEMA-001", "DOC-FS-SPEC-001", "TASK-IM-104"]
depends_on = ["TASK-IM-104", "TASK-IM-106"] # Depends on CLE base and Epic handling (for linking)
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement CLE CRUD & Linking for Features

## Description ✍️

Implement the specific logic within the Core Logic Engine (CLE) to handle Create, Read, Update, and Delete (CRUD) operations for **Feature** artifacts. This includes generating unique IDs, constructing filenames, interacting with the file system module, parsing/validating TOML frontmatter against the Feature schema, and handling Feature-specific fields, especially the **required `epic_id` link**.

## Acceptance Criteria ✅

*   - [ ] `createArtifact` method (or equivalent) correctly handles `type="🌟 Feature"`:
    *   - [ ] Generates a unique Feature ID (e.g., `FEAT-NNN`) within the project scope.
    *   - [ ] Constructs the correct filename (`FEAT-ID_description.md`).
    *   - [ ] Populates required fields (`id`, `title`, `status`, `type`, `created_date`, `updated_date`, `project_name`, **`epic_id`**) in TOML.
    *   - [ ] **MUST** reject creation if `epic_id` is missing or invalid format. (Optional: Validate `epic_id` existence).
    *   - [ ] Validates input data against the Feature schema (`TASK-IM-103`).
    *   - [ ] Uses the file system module (`TASK-IM-101`) to write the file to the correct `features/` directory.
*   - [ ] `readArtifact` method correctly reads and parses a Feature file given its ID and project slug.
*   - [ ] `updateArtifact` method correctly handles Feature updates:
    *   - [ ] Reads the existing file.
    *   - [ ] Validates proposed changes against the Feature schema.
    *   - [ ] Updates specified TOML fields (including potentially changing `epic_id`, though rare) or Markdown body.
    *   - [ ] **MUST** update the `updated_date` field.
    *   - [ ] Writes changes back to the file.
*   - [ ] `deleteArtifact` method correctly handles Feature deletion/archival.
*   - [ ] `findArtifacts`/`listArtifacts` method can filter and return Feature artifacts based on criteria (status, tags, `epic_id`, etc.).
*   - [ ] Appropriate CLE errors are thrown for invalid operations (e.g., missing `epic_id` on create).
*   - [ ] Unit tests cover CRUD operations specifically for Features, including validation and handling of the required `epic_id` link.

## Implementation Notes / Details 📝

*   Implement the logic within the methods/interfaces defined in `TASK-IM-104`.
*   Ensure interaction with the file system module (`TASK-IM-101`) and validation module (`TASK-IM-102`/`TASK-IM-103`) is correct.
*   Handle Feature ID generation (project-specific sequence).
*   Implement filename generation based on ID and title.
*   Enforce the requirement for `epic_id` during creation. Decide on the level of validation for the existence of the parent Epic (recommend at least format validation, existence check is optional performance trade-off).
*   Ensure `updated_date` is always set correctly on updates.

## Subtasks / Checklist ☑️

*   - [ ] Implement `createArtifact` logic specific to Features (ID gen, filename, path, schema validation, **required `epic_id` handling**).
*   - [ ] Implement `readArtifact` logic specific to Features (path construction, parsing).
*   - [ ] Implement `updateArtifact` logic specific to Features (validation, field updates including `epic_id`, `updated_date`).
*   - [ ] Implement `deleteArtifact` logic specific to Features.
*   - [ ] Implement filtering logic for Features within `findArtifacts`/`listArtifacts`.
*   - [ ] Write unit tests for `createArtifact` (Feature, including missing/invalid `epic_id`).
*   - [ ] Write unit tests for `readArtifact` (Feature).
*   - [ ] Write unit tests for `updateArtifact` (Feature).
*   - [ ] Write unit tests for `deleteArtifact` (Feature).
*   - [ ] Write unit tests for listing/filtering Features.