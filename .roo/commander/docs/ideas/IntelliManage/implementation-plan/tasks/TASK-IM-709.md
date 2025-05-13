+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-709"
title = "Implement Git commit message scanner/parser logic"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "▶️ Medium" # Important automation feature
# estimated_effort = "M" # Medium - Involves Git interaction and regex/parsing
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "git", "commit", "parsing", "automation", "linking", "status"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-701"]
depends_on = ["TASK-IM-701", "TASK-IM-110"] # Depends on IL base and config loading (for keywords)
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement Git commit message scanner/parser logic

## Description ✍️

Implement logic within the Integration Layer (`TASK-IM-701`) or a dedicated Git utility to scan local Git commit messages (e.g., triggered by a post-commit hook, file watcher, or manual command) for keywords and associated IntelliManage artifact IDs.

This involves:
1.  Accessing recent Git commit messages within the workspace's repository.
2.  Reading the configured keywords (`commit_link_keywords`, `commit_status_update_keywords`) from the project configuration (via CLE).
3.  Using regular expressions or string parsing to identify occurrences of these keywords followed by valid IntelliManage artifact IDs (e.g., `Fixes TASK-123`, `Refs EPIC-005`).
4.  Extracting the keyword, the artifact ID, and the commit SHA.
5.  Passing this extracted information to other components for further action (e.g., to `TASK-IM-710` for linking, to `TASK-IM-711` for status update suggestions).

## Acceptance Criteria ✅

*   - [ ] Logic exists to access recent Git commit messages (e.g., using `git log` command via `execute_command`, or a Git library). Define the trigger mechanism.
*   - [ ] Logic reads `commit_link_keywords` and `commit_status_update_keywords` from project config via CLE.
*   - [ ] Regular expressions or parsing functions correctly identify keywords and associated artifact IDs (e.g., `TASK-\d+`, `EPIC-\d+`, `BUG-\d+`) in commit messages.
*   - [ ] Parsing handles multiple references within a single commit message.
*   - [ ] Parsing handles different formatting variations (e.g., case-insensitivity for keywords, optional colons, spacing).
*   - [ ] The extracted data (keyword, artifact ID, commit SHA, project slug) is stored or passed in a structured format.
*   - [ ] The scanner avoids processing the same commit multiple times (e.g., by tracking the last processed commit SHA).
*   - [ ] Unit tests verify the parsing logic with various commit message examples (single/multiple references, different keywords, different ID formats, edge cases).

## Implementation Notes / Details 📝

*   **Trigger Mechanism:** How does this scanner run?
    *   *Post-commit hook:* Ideal for immediate processing but requires hook setup in the user's repo.
    *   *Manual command (`!pm scan commits`):* Simple to implement, user-controlled.
    *   *Periodic check:* Run `git log` periodically (less ideal).
    *   *File watcher:* Watch `.git/logs/HEAD` (can be complex).
    *   *Recommendation:* Start with a manual command or integrate with a push event if possible.
*   **Accessing Commits:** Using `git log --pretty=format:'%H %s %b'` (SHA, subject, body) via `execute_command` is a common approach. Need to define the range (e.g., since last scan).
*   **Regex:** Craft robust regular expressions to capture keywords and IDs. Example pattern fragment: `(Fixes|Closes|Refs)\s*:?\s*([A-Z]+-\d+)`. Ensure it handles project prefixes if used (e.g., `PROJ:TASK-123`).
*   **State:** Need to store the SHA of the last processed commit (e.g., in a state file within `.ruru/`) to avoid reprocessing old commits on subsequent scans.
*   **Error Handling:** Handle errors from `git log` command execution.

## Subtasks / Checklist ☑️

*   - [ ] Define and implement the trigger mechanism for the scanner.
*   - [ ] Implement logic to read commit keywords from project config via CLE.
*   - [ ] Implement logic to execute `git log` (or use library) to get recent commit messages and SHAs.
*   - [ ] Implement state management for tracking the last processed commit SHA.
*   - [ ] Develop and test regular expressions/parsing functions for keywords and artifact IDs.
*   - [ ] Implement the core scanning loop iterating through new commits.
*   - [ ] Implement logic to extract and structure the found references (keyword, ID, SHA, project).
*   - [ ] Implement the mechanism to pass extracted references to subsequent processing steps (linking, status suggestion).
*   - [ ] Add error handling for Git command execution.
*   - [ ] Write unit tests for the regex/parsing logic with diverse commit messages.
*   - [ ] Write unit tests for the commit iteration and last-processed SHA logic (using mock `git log` output).