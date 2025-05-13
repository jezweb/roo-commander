+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-111"
title = "Write unit tests for TOML Schema validation"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-001"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Ensures data integrity
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "test", "unit-test", "schema", "validation", "toml", "cle", "data-model"]
related_docs = ["DOC-SCHEMA-001", "TASK-IM-102", "TASK-IM-103"]
depends_on = ["TASK-IM-102", "TASK-IM-103"] # Depends on validation module and schema definitions
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write unit tests for TOML Schema validation

## Description ✍️

Create a comprehensive suite of unit tests specifically targeting the TOML schema validation logic implemented in `TASK-IM-102` and using the schemas defined in `TASK-IM-103`. These tests should verify that the validation correctly accepts valid data and rejects invalid data for all defined artifact types and configuration files, checking for required fields, data types, and enum constraints.

## Acceptance Criteria ✅

*   - [ ] Unit tests exist for validating **Initiative** TOML data against its schema.
*   - [ ] Unit tests exist for validating **Epic** TOML data against its schema.
*   - [ ] Unit tests exist for validating **Feature** TOML data against its schema.
*   - [ ] Unit tests exist for validating **Task/Story/Bug** TOML data against its schema.
*   - [ ] Unit tests exist for validating **`project_config.toml`** data against its schema.
*   - [ ] Unit tests exist for validating **`projects_config.toml`** data against its schema (if implemented).
*   - [ ] Tests cover scenarios with **valid** data (all required fields present, correct types).
*   - [ ] Tests cover scenarios with **missing required fields**.
*   - [ ] Tests cover scenarios with **incorrect data types** (e.g., string where integer expected).
*   - [ ] Tests cover scenarios with **invalid enum values** (e.g., incorrect `status`, `type`, `priority`).
*   - [ ] Tests cover scenarios with **invalid date formats**.
*   - [ ] Tests cover scenarios with **incorrect array types** (if applicable).
*   - [ ] Tests verify that validation failures produce clear and informative error messages/objects.
*   - [ ] Tests are added to the project's automated test suite.
*   - [ ] Test coverage for the schema validation logic meets project standards.

## Implementation Notes / Details 📝

*   Use the project's standard unit testing framework (e.g., Jest, Pytest, Go testing).
*   Create mock data objects representing valid and various invalid TOML structures for each schema.
*   Call the validation function/module directly with the mock data and the corresponding schema definition.
*   Assert that valid data passes validation without errors.
*   Assert that invalid data fails validation and that the specific validation errors reported match the expected failures (e.g., which field failed and why).
*   Organize tests logically, likely mirroring the schema definition structure (e.g., separate test files or suites per schema).

## Subtasks / Checklist ☑️

*   - [ ] Set up test file/suite structure for schema validation tests.
*   - [ ] Write tests for Initiative schema (valid, missing fields, type errors, enum errors).
*   - [ ] Write tests for Epic schema (valid, missing fields, type errors, enum errors).
*   - [ ] Write tests for Feature schema (valid, missing fields, type errors, enum errors, required `epic_id`).
*   - [ ] Write tests for Task/Story/Bug schema (valid, missing fields, type errors, enum errors, required `feature_id`, required `type`).
*   - [ ] Write tests for `project_config.toml` schema (valid, missing fields, type errors, methodology enum).
*   - [ ] Write tests for `projects_config.toml` schema (valid, optional fields).
*   - [ ] Ensure tests check for specific error messages/details on failure.
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.
*   - [ ] Review test coverage reports for validation logic.