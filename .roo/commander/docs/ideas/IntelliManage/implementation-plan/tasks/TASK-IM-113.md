+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-113"
title = "Write unit tests for CLE linking logic"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-001"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Ensures hierarchy integrity
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "test", "unit-test", "cle", "linking", "hierarchy", "dependency"]
related_docs = ["DOC-FUNC-SPEC-001", "TASK-IM-104", "TASK-IM-105", "TASK-IM-106", "TASK-IM-107", "TASK-IM-108"]
depends_on = ["TASK-IM-105", "TASK-IM-106", "TASK-IM-107", "TASK-IM-108"] # Depends on CRUD implementations which handle link fields
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write unit tests for CLE linking logic

## Description ✍️

Create unit tests specifically targeting the logic within the Core Logic Engine (CLE) responsible for establishing, validating, and managing links between IntelliManage artifacts. This includes testing the handling of hierarchical parent links (`initiative_id`, `epic_id`, `feature_id`) during artifact creation and updates, as well as the management of dependency links (`depends_on`).

These tests will likely focus on the relevant parts of the `createArtifact` and `updateArtifact` methods, using mocks for dependencies.

## Acceptance Criteria ✅

*   - [ ] Unit tests verify that `createArtifact` correctly stores the provided parent ID (`initiative_id`, `epic_id`, `feature_id`) in the child artifact's TOML.
*   - [ ] Unit tests verify that `createArtifact` rejects creation if a *required* parent ID (e.g., `epic_id` for Feature, `feature_id` for Task) is missing or invalid format.
*   - [ ] Unit tests verify that `updateArtifact` can correctly add or modify a parent ID link.
*   - [ ] Unit tests verify that `updateArtifact` can correctly add items to the `depends_on` array.
*   - [ ] Unit tests verify that `updateArtifact` can correctly remove items from the `depends_on` array.
*   - [ ] Tests verify correct interaction with mocked validation module when link fields are involved.
*   - [ ] Tests verify correct interaction with mocked file system module when saving updated link fields.
*   - [ ] Tests verify correct error handling for invalid link operations (e.g., attempting to link incompatible types if such validation exists).
*   - [ ] Tests are added to the project's automated test suite.
*   - [ ] Test coverage for the linking aspects of CLE logic meets project standards.

## Implementation Notes / Details 📝

*   Use the project's standard unit testing framework and mocking libraries.
*   Mock file system and validation dependencies.
*   Focus tests on the logic that specifically handles the link fields (`initiative_id`, `epic_id`, `feature_id`, `depends_on`) within the CRUD methods.
*   Simulate different scenarios: creating with/without optional links, creating with missing required links, updating to add/change/remove links.
*   Test the handling of the `depends_on` array (adding, removing, ensuring no duplicates if required).
*   If parent existence validation is implemented (optional), ensure tests cover scenarios where mocked validation indicates the parent does/doesn't exist.

## Subtasks / Checklist ☑️

*   - [ ] Set up test file/suite structure for CLE linking tests.
*   - [ ] Write tests for `createArtifact` handling of `initiative_id` (Epic).
*   - [ ] Write tests for `createArtifact` handling of required `epic_id` (Feature - success and failure).
*   - [ ] Write tests for `createArtifact` handling of required `feature_id` (Task/Story/Bug - success and failure).
*   - [ ] Write tests for `updateArtifact` adding/changing `initiative_id` (Epic).
*   - [ ] Write tests for `updateArtifact` adding/changing `epic_id` (Feature).
*   - [ ] Write tests for `updateArtifact` adding/changing `feature_id` (Task/Story/Bug).
*   - [ ] Write tests for `updateArtifact` adding items to `depends_on` array.
*   - [ ] Write tests for `updateArtifact` removing items from `depends_on` array.
*   - [ ] Write tests for error handling related to invalid link formats or missing required links.
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.
*   - [ ] Review test coverage reports for linking logic.