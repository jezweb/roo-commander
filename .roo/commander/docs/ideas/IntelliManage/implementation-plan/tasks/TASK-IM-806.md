+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-806"
title = "Standardize error message formats"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-008"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Could be Dev or involve UX/Tech Writer
# reporter = "..."
priority = "🔼 High" # Crucial for usability and debugging
# estimated_effort = "S" # Small - Defining standards and applying them
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["interface", "ux", "ui", "error-handling", "feedback", "consistency", "debugging", "documentation"]
related_docs = ["DOC-UI-CMD-SPEC-001"]
depends_on = [] # Can be done in parallel, but applied during implementation of commands and error handling
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Standardize error message formats

## Description ✍️

Define and document standard formats for error messages returned to the user via the Interaction Layer when IntelliManage operations fail. Apply these standards consistently across all relevant error handling points (CLE, AI Engine, Integration Layer, Coordinators, Command Parser).

The goal is to provide clear, consistent, and informative feedback to the user about *what* went wrong and *why* (if possible), enabling them to correct their input or understand the system issue.

## Acceptance Criteria ✅

*   - [ ] A standard format for error messages is defined and documented.
*   - [ ] The standard format includes:
    *   - [ ] A clear indicator of failure (e.g., "❌ Error:", "Failed:").
    *   - [ ] A concise description of the error type or the operation that failed (e.g., "Validation Error", "File Not Found", "GitHub API Error", "Command Parsing Error").
    *   - [ ] Specific details about the error (e.g., "Missing required field: --title", "Artifact `TASK-999` not found in project `frontend-app`", "Invalid status transition from 'Done' to 'Backlog'", "GitHub API returned 401 Unauthorized").
    *   - [ ] (Optional) A suggestion for how the user might fix the issue (e.g., "Use `!pm help create` for usage details", "Check your GitHub PAT environment variable").
*   - [ ] Examples of error messages for common failure scenarios (validation, not found, API error, parsing, permissions) are documented.
*   - [ ] Implementation code for error handling across different components (CLE, AI Engine, IL, Coordinators, Parser) is updated or implemented to use these standard formats when reporting errors to the user interface.
*   - [ ] Consistency is reviewed across different error responses.

## Implementation Notes / Details 📝

*   **Clarity & Specificity:** Avoid vague errors. Tell the user *what* failed and *why*.
*   **Consistency:** Use the same structure and tone.
*   **User Actionability:** If possible, hint at a solution.
*   **Avoid Stack Traces:** Do not expose raw stack traces or overly technical internal details to the end-user in the primary error message. Log those separately for debugging.
*   **Error Types:** Leverage custom error types defined in components (e.g., `ValidationError`, `ArtifactNotFoundError` from CLE; `ApiError`, `AuthError` from IL) to generate more specific messages.
*   **Location:** Document the standard where developers implementing error handling can easily reference it.

**Proposed Standard Format Examples:**

*   **Validation Error:** `❌ Error: Validation Failed - <Specific validation failure message (e.g., Missing required field '--title' for 'create task')>.`
*   **Parsing Error:** `❌ Error: Command Parsing Failed - <Specific parsing error (e.g., Invalid option format near '--prioirty')>. Use \`!pm help <verb>\` for correct syntax.`
*   **Not Found Error:** `❌ Error: Not Found - <Artifact Type> \`<ID>\` not found in project \`<project_slug>\`.`
*   **File System Error:** `❌ Error: File System Operation Failed - <Brief description (e.g., Cannot write to file <path>)>`. (Log detailed OS error separately).
*   **API Error:** `❌ Error: GitHub API Failed - <HTTP Status Code> <Brief description (e.g., Unauthorized - Check PAT, Not Found - Check repo/owner)>`. (Log detailed API response separately).
*   **Configuration Error:** `❌ Error: Configuration Invalid - <Specific issue (e.g., Missing 'repo_owner' in GitHub integration config for project '<project_slug>')>.`
*   **Unknown Command:** `❌ Error: Unknown command verb '<verb>'. Use \`!pm help\` to see available commands.`

## Subtasks / Checklist ☑️

*   - [ ] Define the standard error message format(s) (document in comments, style guide, or this task).
*   - [ ] Create specific examples for common error types (Validation, Parsing, Not Found, API, Config, Unknown Command, etc.).
*   - [ ] Review and update error handling logic in the Command Parser (`TASK-IM-802`) to use the standard format.
*   - [ ] Review and update error handling logic in the CLE (`TASK-IM-104` onwards) to use the standard format when propagating errors.
*   - [ ] Review and update error handling logic in the AI Engine (`TASK-IM-301` onwards) to use the standard format.
*   - [ ] Review and update error handling logic in the Integration Layer (`TASK-IM-701` onwards) to use the standard format.
*   - [ ] Review and update error handling logic in Coordinators (`session-manager`, `roo-dispatch`) to use the standard format when reporting errors to the user.
*   - [ ] Ensure specific error details are included where appropriate.
*   - [ ] Review existing/planned error handling for consistency.
*   - [ ] Add documentation about the standard error message format for contributors.