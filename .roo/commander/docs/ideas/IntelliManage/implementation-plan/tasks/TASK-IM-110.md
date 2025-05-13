+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-110"
title = "Implement CLE Project/Workspace Config loading and parsing"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-001"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Config drives core behavior like methodology
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "cle", "config", "toml", "parsing", "validation", "setup"]
related_docs = ["DOC-SCHEMA-001", "DOC-FS-SPEC-001", "TASK-IM-102", "TASK-IM-103", "TASK-IM-104"]
depends_on = ["TASK-IM-102", "TASK-IM-103", "TASK-IM-104"] # Depends on TOML validation and CLE base
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement CLE Project/Workspace Config loading and parsing

## Description ✍️

Implement the logic within the Core Logic Engine (CLE) to:
1.  Locate and read the project-specific configuration file (`.ruru/projects/[project_slug]/project_config.toml`).
2.  Locate and read the optional workspace-level configuration file (`.ruru/projects/projects_config.toml`).
3.  Parse the TOML content of these files using the module from `TASK-IM-102`.
4.  Validate the parsed configuration data against their respective schemas (implemented in `TASK-IM-103`).
5.  Provide methods within the CLE interface (`TASK-IM-104`) for other components (e.g., AI Engine, methodology logic, coordinators) to access validated configuration values.

## Acceptance Criteria ✅

*   - [ ] CLE has a method (e.g., `getProjectConfig(projectSlug)`) that reads, parses, and validates `.ruru/projects/[project_slug]/project_config.toml`.
*   - [ ] CLE has a method (e.g., `getWorkspaceConfig()`) that reads, parses, and validates `.ruru/projects/projects_config.toml` (handling its optional nature).
*   - [ ] Methods use the TOML parsing/validation module (`TASK-IM-102`) and the correct schemas (`TASK-IM-103`).
*   - [ ] Methods return the validated configuration data as a structured object on success.
*   - [ ] Methods return appropriate errors if config files are missing (for project config), malformed, or fail schema validation.
*   - [ ] Configuration values (like `methodology`, `custom_statuses`, `github_integration` settings) are accessible via the returned config object.
*   - [ ] (Optional) Implement caching for configuration data to avoid redundant file reads/parsing within a single operation or session.
*   - [ ] Unit tests cover loading, parsing, and validation of valid and invalid project/workspace config files.

## Implementation Notes / Details 📝

*   Implement the logic within the methods/interfaces defined in `TASK-IM-104`.
*   Use the file system module (`TASK-IM-101`) for locating/reading files and the validation module (`TASK-IM-102`/`TASK-IM-103`) for parsing/validation.
*   Ensure correct path construction based on `DOC-FS-SPEC-001`.
*   Handle the case where `projects_config.toml` might not exist gracefully (return default values or an empty object).
*   `project_config.toml` is required per project; throw an error if it's missing for a requested project slug.
*   Consider the structure of the returned configuration object for ease of use by consuming components.

## Subtasks / Checklist ☑️

*   - [ ] Implement `getProjectConfig(projectSlug)` method logic (read, parse, validate).
*   - [ ] Implement `getWorkspaceConfig()` method logic (read, parse, validate, handle optional).
*   - [ ] Integrate with TOML parsing/validation module and config schemas.
*   - [ ] Implement error handling for missing files, parse errors, validation errors.
*   - [ ] (Optional) Implement configuration caching mechanism.
*   - [ ] Write unit tests for loading valid `project_config.toml`.
*   - [ ] Write unit tests for loading valid `projects_config.toml`.
*   - [ ] Write unit tests for handling missing `project_config.toml`.
*   - [ ] Write unit tests for handling missing `projects_config.toml`.
*   - [ ] Write unit tests for handling invalid TOML syntax in config files.
*   - [ ] Write unit tests for handling config files failing schema validation.