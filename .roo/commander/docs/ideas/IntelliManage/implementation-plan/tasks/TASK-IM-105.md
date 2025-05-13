+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-105"
title = "Implement CLE CRUD & Linking for Initiatives"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-001"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Core functionality, but maybe slightly less critical than Tasks/Features
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "cle", "crud", "linking", "initiative", "data-model"]
related_docs = ["DOC-FUNC-SPEC-001", "DOC-SCHEMA-001", "DOC-FS-SPEC-001", "TASK-IM-104"]
depends_on = ["TASK-IM-104"] # Depends on CLE base structure
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement CLE CRUD & Linking for Initiatives

## Description ✍️

Implement the specific logic within the Core Logic Engine (CLE) to handle Create, Read, Update, and Delete (CRUD) operations for **Initiative** artifacts. This includes generating unique IDs, constructing filenames, interacting with the file system module, parsing/validating TOML frontmatter against the Initiative schema, and handling Initiative-specific fields.

While Initiatives don't have explicit parent links in this model, this task ensures the foundation for handling artifact-specific logic is in place.

## Acceptance Criteria ✅

*   - [ ] `createArtifact` method (or equivalent) correctly handles `type="🎯 Initiative"`:
    *   - [ ] Generates a unique Initiative ID (e.g., `INIT-NNN`).
    *   - [ ] Constructs the correct filename (`INIT-ID_description.md`).
    *   - [ ] Populates required fields (`id`, `title`, `status`, `type`, `created_date`, `updated_date`, `project_name`) in TOML.
    *   - [ ] Validates input data against the Initiative schema (`TASK-IM-103`).
    *   - [ ] Uses the file system module (`TASK-IM-101`) to write the file to the correct `initiatives/` directory.
*   - [ ] `readArtifact` method correctly reads and parses an Initiative file given its ID and project slug.
*   - [ ] `updateArtifact` method correctly handles Initiative updates:
    *   - [ ] Reads the existing file.
    *   - [ ] Validates proposed changes against the Initiative schema.
    *   - [ ] Updates specified TOML fields or Markdown body.
    *   - [ ] **MUST** update the `updated_date` field.
    *   - [ ] Writes changes back to the file.
*   - [ ] `deleteArtifact` method correctly handles Initiative deletion/archival (including user confirmation logic if implemented in CLE).
*   - [ ] `findArtifacts`/`listArtifacts` method can filter and return Initiative artifacts based on criteria (status, tags, etc.).
*   - [ ] Appropriate CLE errors are thrown for invalid operations (e.g., `ArtifactNotFoundError`, `ValidationError`).
*   - [ ] Unit tests cover CRUD operations specifically for Initiatives.

## Implementation Notes / Details 📝

*   Implement the logic within the methods/interfaces defined in `TASK-IM-104`.
*   Ensure interaction with the file system module (`TASK-IM-101`) and validation module (`TASK-IM-102`/`TASK-IM-103`) is correct.
*   Handle ID generation carefully (e.g., find the highest existing number and increment).
*   Implement filename generation based on ID and title (slugified description).
*   Ensure `updated_date` is always set correctly on updates.
*   Consider if deletion should be a soft delete (move to `archive/`) or hard delete.

## Subtasks / Checklist ☑️

*   - [ ] Implement `createArtifact` logic specific to Initiatives (ID gen, filename, path, schema validation).
*   - [ ] Implement `readArtifact` logic specific to Initiatives (path construction, parsing).
*   - [ ] Implement `updateArtifact` logic specific to Initiatives (validation, field updates, `updated_date`).
*   - [ ] Implement `deleteArtifact` logic specific to Initiatives (confirmation, file operation).
*   - [ ] Implement filtering logic for Initiatives within `findArtifacts`/`listArtifacts`.
*   - [ ] Write unit tests for `createArtifact` (Initiative).
*   - [ ] Write unit tests for `readArtifact` (Initiative).
*   - [ ] Write unit tests for `updateArtifact` (Initiative).
*   - [ ] Write unit tests for `deleteArtifact` (Initiative).
*   - [ ] Write unit tests for listing/filtering Initiatives.