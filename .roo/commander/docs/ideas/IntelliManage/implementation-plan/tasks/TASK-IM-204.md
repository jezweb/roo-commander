+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-204"
title = "Implement loading and validation against `custom_statuses` from `project_config.toml`"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-002"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Essential for Custom methodology support
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "cle", "methodology", "custom", "status", "config", "validation"]
related_docs = ["DOC-METHODOLOGY-GUIDE-001", "DOC-SCHEMA-001", "TASK-IM-110", "TASK-IM-202"]
depends_on = ["TASK-IM-110", "TASK-IM-202"] # Depends on config loading and status validation logic base
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement loading and validation against `custom_statuses` from `project_config.toml`

## Description ✍️

Enhance the Core Logic Engine (CLE) to specifically handle the `custom_statuses` field when a project's methodology is set to "Custom". This involves:
1.  Ensuring the `project_config.toml` schema definition (`TASK-IM-103`) correctly includes `custom_statuses` as an optional array of strings.
2.  Modifying the configuration loading logic (`TASK-IM-110`) to correctly parse this array.
3.  Integrating this loaded list into the status transition validation logic (`TASK-IM-202`) for projects using the "Custom" methodology.

## Acceptance Criteria ✅

*   - [ ] The `project_config.toml` schema definition includes `custom_statuses` as an optional array of strings.
*   - [ ] The `getProjectConfig` method correctly parses and returns the `custom_statuses` array if present in the config file.
*   - [ ] The status transition validation logic (`TASK-IM-202`) accesses the `custom_statuses` list when `methodology` is "Custom".
*   - [ ] For "Custom" methodology, `updateArtifact` validates that the proposed new `status` value exists within the loaded `custom_statuses` array.
*   - [ ] `updateArtifact` rejects the update with a specific `ValidationError` if the proposed status is not in the `custom_statuses` list for a "Custom" project.
*   - [ ] `updateArtifact` allows the update if the proposed status *is* in the `custom_statuses` list.
*   - [ ] The system handles cases where `methodology` is "Custom" but `custom_statuses` is missing or empty in the config (e.g., logs a warning, potentially falls back to standard statuses or rejects all changes). Define this behavior.
*   - [ ] Unit tests (`TASK-IM-111`, `TASK-IM-202` tests) are updated or added to cover `custom_statuses` handling in schema validation and status transition logic.

## Implementation Notes / Details 📝

*   Update the `project_config.toml` schema definition (`TASK-IM-103`).
*   Modify the `getProjectConfig` logic (`TASK-IM-110`) to handle the array parsing.
*   Modify the "Custom" branch of the status transition validation logic (`TASK-IM-202`).
*   Decide on the behavior if `methodology` is "Custom" but the `custom_statuses` array is not defined or empty in the config file. Logging a warning and rejecting status changes might be the safest initial approach.
*   Ensure case-sensitivity matches between the proposed status and the list in the config, or define a normalization rule (e.g., lowercase comparison).

## Subtasks / Checklist ☑️

*   - [ ] Update `project_config.toml` schema definition for `custom_statuses` (optional array of strings).
*   - [ ] Update `getProjectConfig` logic to parse and return the `custom_statuses` array.
*   - [ ] Update status transition validation logic (`TASK-IM-202`) to fetch and use `custom_statuses` when `methodology` is "Custom".
*   - [ ] Implement the check: `proposed_status` must be in `custom_statuses` list.
*   - [ ] Implement error handling for invalid status in "Custom" mode.
*   - [ ] Define and implement behavior for missing/empty `custom_statuses` in "Custom" mode.
*   - [ ] Add/Update unit tests for `project_config.toml` schema validation covering `custom_statuses`.
*   - [ ] Add/Update unit tests for status transition validation in "Custom" mode (valid status, invalid status, missing config list).