+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-805"
title = "Standardize confirmation message formats"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-008"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Could be Dev or involve UX/Tech Writer
# reporter = "..."
priority = "▶️ Medium" # Improves UX consistency
# estimated_effort = "S" # Small - Defining standards and applying them
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["interface", "ux", "ui", "confirmation", "feedback", "consistency", "documentation"]
related_docs = ["DOC-UI-CMD-SPEC-001"]
depends_on = [] # Can be done in parallel, but applied during implementation of commands
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Standardize confirmation message formats

## Description ✍️

Define and document standard formats for confirmation messages returned to the user via the Interaction Layer after successful IntelliManage operations (e.g., creating, updating, deleting artifacts, setting configuration). Apply these standards consistently across all relevant command handlers and logic flows.

The goal is to provide clear, consistent, and informative feedback to the user, confirming that their requested action was completed successfully and providing key identifying information.

## Acceptance Criteria ✅

*   - [ ] A standard format for confirmation messages is defined and documented (e.g., in a style guide or this task's description).
*   - [ ] The standard format includes:
    *   - [ ] A clear indicator of success (e.g., "✅ Success:", "OK:").
    *   - [ ] A brief description of the action performed (e.g., "Created task", "Updated epic", "Deleted feature", "Set active project").
    *   - [ ] Key identifying information for the affected artifact(s) (e.g., `TASK-123`, `EPIC-005`, project slug).
    *   - [ ] (Optional) Path to the created/modified file.
*   - [ ] Examples of confirmation messages for common operations (create, update, delete, set-active, config, sync) are documented.
*   - [ ] Implementation code for command handlers (CLE wrappers, Session Manager logic) is updated or implemented to use these standard formats when reporting success.
*   - [ ] Consistency is reviewed across different command responses.

## Implementation Notes / Details 📝

*   **Clarity:** Messages should be easy to understand at a glance.
*   **Consistency:** Use the same structure and tone for all confirmations.
*   **Key Info:** Always include the ID of the artifact that was acted upon. For creation, include the newly generated ID.
*   **Formatting:** Use Markdown for emphasis if desired (e.g., backticks for IDs: `TASK-123`).
*   **Location:** This standard should be documented where developers implementing command handlers can easily reference it (e.g., a project style guide, contribution guidelines, or within the documentation for the Interaction Layer/Session Manager).

**Proposed Standard Format Examples:**

*   **Create:** `✅ Success: Created <Artifact Type> \`<ID>\` ('<Title Snippet>'). [Optional: Path: <path>]`
    *   *Example:* `✅ Success: Created task \`TASK-124\` ('Implement login button'). Path: .ruru/projects/frontend-app/tasks/TASK-124_implement-login-button.md`
*   **Update:** `✅ Success: Updated <Artifact Type> \`<ID>\`.`
    *   *Example:* `✅ Success: Updated epic \`EPIC-002\`.`
*   **Delete/Archive:** `✅ Success: Deleted <Artifact Type> \`<ID>\`.` or `✅ Success: Archived <Artifact Type> \`<ID>\`.`
    *   *Example:* `✅ Success: Archived bug \`BUG-015\`.`
*   **Set Active Project:** `✅ Success: Active project set to \`<project_slug>\`.`
    *   *Example:* `✅ Success: Active project set to \`backend-api\`.`
*   **Config Update:** `✅ Success: Updated configuration for project \`<project_slug>\`.`
    *   *Example:* `✅ Success: Updated configuration for project \`frontend-app\`.`
*   **Sync Trigger:** `✅ Success: GitHub sync triggered for project \`<project_slug>\`.`
    *   *Example:* `✅ Success: GitHub sync triggered for project \`frontend-app\`.`

## Subtasks / Checklist ☑️

*   - [ ] Define the standard confirmation message format(s) (document in comments, style guide, or this task).
*   - [ ] Create specific examples for each major command verb (create, update, delete, set-active, config, sync, etc.).
*   - [ ] Review and update the success response logic in CLE wrapper functions or command handlers (`TASK-IM-803` related implementations) to use the standard format.
*   - [ ] Ensure artifact IDs and other key info are correctly included.
*   - [ ] Review existing/planned command implementations for consistency.
*   - [ ] Add documentation about the standard message format for contributors.