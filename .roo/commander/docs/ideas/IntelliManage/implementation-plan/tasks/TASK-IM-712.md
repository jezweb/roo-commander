+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-712"
title = "Implement logic to read and respect `github_integration` settings from `project_config.toml`"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "🔥 Highest" # Controls whether integration runs at all
# estimated_effort = "S" # Small - Primarily reading config and conditional logic
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "github", "config", "enablement", "setup", "cle"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-701", "TASK-IM-110"]
depends_on = ["TASK-IM-701", "TASK-IM-110"] # Depends on IL base and config loading
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement logic to read and respect `github_integration` settings from `project_config.toml`

## Description ✍️

Implement the logic within the GitHub Integration Layer (`TASK-IM-701`) to read the entire `[github_integration]` table, particularly the `enable_sync` flag, from the project's configuration file (`project_config.toml` via CLE's `getProjectConfig`).

All GitHub synchronization operations (Issue sync, Label sync, Milestone sync, potentially commit processing if tied to repo config) for a given project **MUST** only proceed if the `enable_sync` flag is explicitly set to `true` in that project's configuration.

## Acceptance Criteria ✅

*   - [ ] The Integration Layer correctly calls `CLE.getProjectConfig` to fetch the configuration for the relevant project slug before initiating sync operations.
*   - [ ] The Integration Layer correctly accesses the `[github_integration]` table and the `enable_sync` flag from the loaded configuration.
*   - [ ] If `enable_sync` is missing, `false`, or the `[github_integration]` table itself is missing, **no** GitHub API calls related to synchronization for that project are made.
*   - [ ] If `enable_sync` is `true`, the Integration Layer proceeds with configured sync operations (authentication, API calls, etc.).
*   - [ ] Other specific configuration settings within `[github_integration]` (like `repo_owner`, `repo_name`, `pat_env_var_name`, mappings) are read and used only when `enable_sync` is true.
*   - [ ] Unit/Integration tests verify that sync logic is skipped when `enable_sync` is false or missing.
*   - [ ] Unit/Integration tests verify that sync logic proceeds when `enable_sync` is true (checking that subsequent steps like authentication are attempted).

## Implementation Notes / Details 📝

*   This check should be performed early in any function or workflow that initiates GitHub synchronization for a specific project.
*   Use the `getProjectConfig` method implemented in `TASK-IM-110`.
*   Handle potential errors if the config file itself is missing or malformed (errors should be reported by `getProjectConfig`).
*   Ensure default behavior is "sync disabled" if the flag or section is missing.

## Subtasks / Checklist ☑️

*   - [ ] Identify all entry points for project-specific GitHub sync operations within the Integration Layer.
*   - [ ] Add logic at these entry points to fetch the project config using CLE.
*   - [ ] Add conditional check for `config?.github_integration?.enable_sync === true`.
*   - [ ] Ensure sync operations are bypassed if the check fails.
*   - [ ] Ensure dependent configuration values (repo, auth, mappings) are only accessed *after* the `enable_sync` check passes.
*   - [ ] Add comments explaining the enablement check.
*   - [ ] Write tests verifying sync is skipped when `enable_sync` is false/missing.
*   - [ ] Write tests verifying sync proceeds (e.g., attempts auth) when `enable_sync` is true.