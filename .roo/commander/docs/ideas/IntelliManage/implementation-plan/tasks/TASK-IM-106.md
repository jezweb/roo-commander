+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-106"
title = "Implement CLE CRUD & Linking for Epics"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-001"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔥 Highest" # Epics are central to the hierarchy
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "cle", "crud", "linking", "epic", "data-model"]
related_docs = ["DOC-FUNC-SPEC-001", "DOC-SCHEMA-001", "DOC-FS-SPEC-001", "TASK-IM-104"]
depends_on = ["TASK-IM-104"] # Depends on CLE base structure
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement CLE CRUD & Linking for Epics

## Description ✍️

Implement the specific logic within the Core Logic Engine (CLE) to handle Create, Read, Update, and Delete (CRUD) operations for **Epic** artifacts. This includes generating unique IDs, constructing filenames, interacting with the file system module, parsing/validating TOML frontmatter against the Epic schema, and handling Epic-specific fields, including the optional `initiative_id` link.

## Acceptance Criteria ✅

*   - [ ] `createArtifact` method (or equivalent) correctly handles `type="🗺️ Epic"`:
    *   - [ ] Generates a unique Epic ID (e.g., `EPIC-NNN`) within the project scope.
    *   - [ ] Constructs the correct filename (`EPIC-ID_description.md`).
    *   - [ ] Populates required fields (`id`, `title`, `status`, `type`, `created_date`, `updated_date`, `project_name`) in TOML.
    *   - [ ] Correctly handles the optional `initiative_id` field if provided.
    *   - [ ] Validates input data against the Epic schema (`TASK-IM-103`).
    *   - [ ] Uses the file system module (`TASK-IM-101`) to write the file to the correct `epics/` directory.
*   - [ ] `readArtifact` method correctly reads and parses an Epic file given its ID and project slug.
*   - [ ] `updateArtifact` method correctly handles Epic updates:
    *   - [ ] Reads the existing file.
    *   - [ ] Validates proposed changes against the Epic schema.
    *   - [ ] Updates specified TOML fields (including `initiative_id`) or Markdown body.
    *   - [ ] **MUST** update the `updated_date` field.
    *   - [ ] Writes changes back to the file.
*   - [ ] `deleteArtifact` method correctly handles Epic deletion/archival.
*   - [ ] `findArtifacts`/`listArtifacts` method can filter and return Epic artifacts based on criteria (status, tags, `initiative_id`, etc.).
*   - [ ] Appropriate CLE errors are thrown for invalid operations.
*   - [ ] Unit tests cover CRUD operations specifically for Epics, including handling of the `initiative_id` link.

## Implementation Notes / Details 📝

*   Implement the logic within the methods/interfaces defined in `TASK-IM-104`.
*   Ensure interaction with the file system module (`TASK-IM-101`) and validation module (`TASK-IM-102`/`TASK-IM-103`) is correct.
*   Handle Epic ID generation (project-specific sequence).
*   Implement filename generation based on ID and title.
*   Ensure `updated_date` is always set correctly on updates.
*   Validate the format of `initiative_id` if provided (optional: check if the Initiative exists).

## Subtasks / Checklist ☑️

*   - [ ] Implement `createArtifact` logic specific to Epics (ID gen, filename, path, schema validation, `initiative_id`).
*   - [ ] Implement `readArtifact` logic specific to Epics (path construction, parsing).
*   - [ ] Implement `updateArtifact` logic specific to Epics (validation, field updates including `initiative_id`, `updated_date`).
*   - [ ] Implement `deleteArtifact` logic specific to Epics.
*   - [ ] Implement filtering logic for Epics within `findArtifacts`/`listArtifacts`.
*   - [ ] Write unit tests for `createArtifact` (Epic).
*   - [ ] Write unit tests for `readArtifact` (Epic).
*   - [ ] Write unit tests for `updateArtifact` (Epic, including `initiative_id` changes).
*   - [ ] Write unit tests for `deleteArtifact` (Epic).
*   - [ ] Write unit tests for listing/filtering Epics.