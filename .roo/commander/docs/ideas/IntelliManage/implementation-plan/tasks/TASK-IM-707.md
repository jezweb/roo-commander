+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-707"
title = "Implement optional automatic milestone creation on GitHub"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "🔽 Low" # Convenience, less critical than auto label creation
# estimated_effort = "S" # Small - Similar logic to auto-label creation
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "github", "sync", "milestone", "automation", "setup", "configuration"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-701", "TASK-IM-702", "TASK-IM-706"]
depends_on = ["TASK-IM-701", "TASK-IM-702", "TASK-IM-706"] # Depends on IL base, auth, and milestone sync logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement optional automatic milestone creation on GitHub

## Description ✍️

Enhance the GitHub Integration Layer logic (`TASK-IM-706`) to optionally create missing milestones automatically in the target GitHub repository. When the system needs to link an IntelliManage Epic/Feature to a GitHub Milestone (either during initial creation sync or potentially when assigning an issue to a milestone that doesn't exist yet), and if the corresponding configuration flag (`create_missing_milestones`) is enabled, the Integration Layer should attempt to create the milestone using the GitHub API before proceeding.

*(Note: The primary flow is creating a Milestone when an Epic/Feature is created locally. This task ensures that if, for some reason, the sync needs a milestone that isn't there, it can be created automatically if configured.)*

## Acceptance Criteria ✅

*   - [ ] Integration logic reads the `create_missing_milestones` flag from the project's GitHub integration configuration (Default: true, as per spec draft).
*   - [ ] Before attempting to associate an Issue with a Milestone or potentially during the initial Epic/Feature -> Milestone creation sync, the logic checks if the target milestone (identified by title matching the Epic/Feature title) exists.
*   - [ ] If `create_missing_milestones` is true and the required milestone does not exist, the logic calls the GitHub API (`createMilestone`) to create it.
*   - [ ] Milestone creation uses the title from the corresponding IntelliManage Epic/Feature and potentially the description and due date (`target_date`/`milestone_target_date`).
*   - [ ] After attempting creation (or if the milestone already existed), the logic proceeds with the original operation (e.g., linking the Epic/Feature, assigning an Issue).
*   - [ ] If `create_missing_milestones` is false and the required milestone does not exist, the logic logs a warning or error and potentially fails the operation that required the milestone. Define this behavior.
*   - [ ] Error handling is implemented for the `createMilestone` API call (e.g., permissions issues, milestone title already exists race condition).
*   - [ ] Unit/Integration tests verify that milestones are automatically created when the flag is true and the milestone is missing.
*   - [ ] Unit/Integration tests verify that milestones are *not* created when the flag is false and the milestone is missing.

## Implementation Notes / Details 📝

*   **Checking Milestone Existence:** Requires calling the GitHub API to list milestones (`listMilestones`) and checking if one with the target title exists. Caching milestone lists per sync cycle might improve performance.
*   **Trigger Point:** This logic primarily applies during the `createGitHubMilestone` function (`TASK-IM-706`) - it should check existence before creating. It could also potentially apply if updating an Issue to assign it a milestone that doesn't exist, although this is a less common scenario initiated from the IntelliManage side.
*   **`createMilestone` API Call:** Requires the `title`. `state` (default 'open'), `description`, and `due_on` are optional but should be populated from the corresponding IntelliManage Epic/Feature data if available.
*   **Error Handling:** Handle potential errors during milestone creation (e.g., 422 Unprocessable Entity if the title already exists - might indicate a sync state issue or race condition).
*   **Configuration:** Ensure the `create_missing_milestones` flag is correctly read from the config (`TASK-IM-110`).

## Subtasks / Checklist ☑️

*   - [ ] Update `project_config.toml` schema (`TASK-IM-103`) to formally include `create_missing_milestones` (Boolean, Optional, Default true).
*   - [ ] Update config loading (`TASK-IM-110`) to parse `create_missing_milestones`.
*   - [ ] Implement logic to check for milestone existence by title in the repository (via API call or cache).
*   - [ ] Integrate this check into the `createGitHubMilestone` flow (`TASK-IM-706`).
*   - [ ] Implement conditional logic based on `create_missing_milestones` flag.
*   - [ ] Implement the call to the GitHub API `createMilestone` method, populating fields from the source Epic/Feature.
*   - [ ] Implement error handling for `createMilestone` API call.
*   - [ ] Define and implement behavior if `create_missing_milestones` is false and milestone is missing.
*   - [ ] Write tests verifying milestone creation when flag is true and milestone is missing.
*   - [ ] Write tests verifying milestone is *not* created when flag is false.
*   - [ ] Write tests verifying error handling during milestone creation.