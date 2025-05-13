+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-705"
title = "Implement optional automatic label creation on GitHub"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "▶️ Medium" # Convenience feature, not critical path
# estimated_effort = "S" # Small - Primarily adding checks and API calls
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "github", "sync", "label", "automation", "setup", "configuration"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-701", "TASK-IM-702", "TASK-IM-704"]
depends_on = ["TASK-IM-701", "TASK-IM-702", "TASK-IM-704"] # Depends on IL base, auth, and label sync logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement optional automatic label creation on GitHub

## Description ✍️

Enhance the GitHub Integration Layer logic (`TASK-IM-704`) to optionally create missing labels automatically in the target GitHub repository. When attempting to apply a label (e.g., `PM:Status:ToDo`) that doesn't exist in the repository, and if the corresponding configuration flag (`create_missing_labels`) is enabled, the Integration Layer should attempt to create the label using the GitHub API before applying it to the issue.

## Acceptance Criteria ✅

*   - [ ] Integration logic reads the `create_missing_labels` flag from the project's GitHub integration configuration (Default: true, as per spec draft).
*   - [ ] Before attempting to apply labels to an issue (e.g., using `setLabelsForIssue` or `addLabelsToIssue`), the logic checks if the required labels exist in the repository.
*   - [ ] If `create_missing_labels` is true and a required label does not exist, the logic calls the GitHub API (`createLabel`) to create it.
*   - [ ] Label creation uses the required label name (e.g., `PM:Status:ToDo`) and potentially a default color or description.
*   - [ ] After attempting creation (or if the label already existed), the logic proceeds to apply the label(s) to the issue.
*   - [ ] If `create_missing_labels` is false and a required label does not exist, the logic logs a warning or error and potentially skips applying that specific label. Define this behavior.
*   - [ ] Error handling is implemented for the `createLabel` API call (e.g., permissions issues, label already exists race condition).
*   - [ ] Unit/Integration tests verify that labels are automatically created when the flag is true and the label is missing.
*   - [ ] Unit/Integration tests verify that labels are *not* created when the flag is false and the label is missing.

## Implementation Notes / Details 📝

*   **Checking Label Existence:** This might require an initial API call to list all labels for the repository (`listLabelsForRepo`) and caching the result, or attempting to apply labels and handling the specific error if a label doesn't exist (less efficient if many labels are missing). A common approach is to try applying labels and only create one if the API call fails specifically because a label is missing. However, the `setLabelsForIssue` often requires *all* provided labels to exist. A pre-check or cache might be better.
*   **`createLabel` API Call:** Requires the label name. Color and description are optional; define sensible defaults (e.g., random color, description indicating it was auto-created by IntelliManage).
*   **Error Handling:** Handle potential errors during label creation (e.g., 422 Unprocessable Entity if the label already exists due to a race condition - this can often be ignored).
*   **Configuration:** Ensure the `create_missing_labels` flag is correctly read from the config (`TASK-IM-110`).

## Subtasks / Checklist ☑️

*   - [ ] Update `project_config.toml` schema (`TASK-IM-103`) to formally include `create_missing_labels` (Boolean, Optional, Default true).
*   - [ ] Update config loading (`TASK-IM-110`) to parse `create_missing_labels`.
*   - [ ] Implement logic to check for label existence in the repository (via API call or cache).
*   - [ ] Implement conditional logic based on `create_missing_labels` flag.
*   - [ ] Implement the call to the GitHub API `createLabel` method.
*   - [ ] Define default color/description for auto-created labels.
*   - [ ] Implement error handling for `createLabel` API call.
*   - [ ] Define and implement behavior if `create_missing_labels` is false and label is missing (e.g., log warning, skip label).
*   - [ ] Integrate this check-and-create logic into the label application flow (`TASK-IM-704`).
*   - [ ] Write tests verifying label creation when flag is true and label is missing.
*   - [ ] Write tests verifying label is *not* created when flag is false.
*   - [ ] Write tests verifying error handling during label creation.