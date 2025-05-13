+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-201"
title = "Implement CLE logic to read and interpret the `methodology` setting from `project_config.toml`"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-002"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔥 Highest" # Foundational for methodology support
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "cle", "methodology", "config", "scrum", "kanban", "custom"]
related_docs = ["DOC-METHODOLOGY-GUIDE-001", "DOC-SCHEMA-001", "TASK-IM-110"]
depends_on = ["TASK-IM-110"] # Depends on the ability to load project config
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement CLE logic to read and interpret the `methodology` setting from `project_config.toml`

## Description ✍️

Enhance the Core Logic Engine (CLE) to specifically read and interpret the `methodology` field from a project's configuration data (loaded via `TASK-IM-110`). The CLE needs to reliably determine whether a project is configured for "Scrum", "Kanban", "Custom", or "None", as this setting will drive subsequent logic for status validation, reporting, and AI assistance.

## Acceptance Criteria ✅

*   - [ ] The CLE's `getProjectConfig` method (or equivalent) successfully retrieves the `methodology` value.
*   - [ ] The CLE has an internal mechanism or helper function to get the validated methodology setting for a given `project_slug`.
*   - [ ] The mechanism correctly identifies the methodology as one of the allowed values ("Scrum", "Kanban", "Custom", "None").
*   - [ ] The mechanism handles cases where the `methodology` field might be missing in the config file (e.g., defaults to "None" or a workspace default).
*   - [ ] The mechanism handles cases where the `methodology` field has an invalid value (should likely default to "None" and log a warning, or throw a specific config error).
*   - [ ] Other CLE components (like the upcoming status validation logic in `TASK-IM-202`) can easily access the determined methodology for a project.
*   - [ ] Unit tests verify the correct interpretation of the `methodology` setting under various conditions (present, missing, invalid).

## Implementation Notes / Details 📝

*   This logic will likely integrate with the `getProjectConfig` functionality developed in `TASK-IM-110`.
*   Define an internal enum or constant set for the valid methodology types (`Scrum`, `Kanban`, `Custom`, `None`) for type safety.
*   Decide on the default behavior if the `methodology` field is missing or invalid. Defaulting to "None" is often the safest approach. Consider logging a warning in these cases.
*   Ensure the retrieved methodology value is readily available for other parts of the CLE that need it.

## Subtasks / Checklist ☑️

*   - [ ] Extend `getProjectConfig` or add a helper function to specifically extract and validate the `methodology` field.
*   - [ ] Define internal constants/enum for methodology types.
*   - [ ] Implement logic to handle missing `methodology` field (apply default).
*   - [ ] Implement logic to handle invalid `methodology` field values (apply default, log warning).
*   - [ ] Ensure the validated methodology is accessible internally within the CLE.
*   - [ ] Write unit tests for reading valid `methodology` values (Scrum, Kanban, Custom, None).
*   - [ ] Write unit tests for handling missing `methodology` field in config.
*   - [ ] Write unit tests for handling invalid `methodology` field values in config.