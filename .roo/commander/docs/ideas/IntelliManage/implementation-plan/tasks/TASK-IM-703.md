+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-703"
title = "Implement Issue <-> Task/Story/Bug synchronization logic (CRUD mapping)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "🔥 Highest" # Core sync functionality
# estimated_effort = "L" # Large - Involves mapping fields and handling bi-directional updates
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "github", "sync", "issue", "task", "story", "bug", "crud", "mapping"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-701", "TASK-IM-702"]
depends_on = ["TASK-IM-701", "TASK-IM-702", "TASK-IM-108"] # Depends on IL base, auth, and CLE Task CRUD
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement Issue <-> Task/Story/Bug synchronization logic (CRUD mapping)

## Description ✍️

Implement the core bi-directional synchronization logic within the Integration Layer (`TASK-IM-701`) for mapping IntelliManage Task/Story/Bug artifacts (of types specified in `issue_types` config) to GitHub Issues.

This involves handling CRUD events from both systems:
1.  **IntelliManage Create -> GitHub Create:** When a relevant IntelliManage task is created, create a corresponding GitHub Issue.
2.  **GitHub Create -> IntelliManage Create (Optional):** When a relevant GitHub Issue is detected (e.g., via webhook/poll) without a link, optionally create a corresponding IntelliManage task.
3.  **IntelliManage Update -> GitHub Update:** When a mapped field (title, description, assignee, linked metadata like status/type/priority labels) changes in an IntelliManage task, update the linked GitHub Issue.
4.  **GitHub Update -> IntelliManage Update:** When a mapped field (title, body, assignees, relevant labels) changes on a linked GitHub Issue, update the corresponding IntelliManage task.
5.  **IntelliManage Delete/Archive -> GitHub Close:** When an IntelliManage task is deleted or archived, close the linked GitHub Issue.
6.  **GitHub Close/Reopen -> IntelliManage Update:** When a linked GitHub Issue is closed or reopened, update the status of the corresponding IntelliManage task appropriately.
7.  **Linking:** Maintain the link between the two items (e.g., storing GitHub Issue URL/ID in `related_issues` field, storing IntelliManage ID in Issue body/comment).

## Acceptance Criteria ✅

*   - [ ] Logic exists to trigger GitHub Issue creation when a relevant IntelliManage task is created locally.
*   - [ ] GitHub Issue creation includes mapped fields (title, body) and the IntelliManage ID link.
*   - [ ] Logic exists (potentially triggered by webhook/poll) to detect new relevant GitHub Issues and optionally create corresponding IntelliManage tasks.
*   - [ ] Logic exists to trigger GitHub Issue updates when mapped fields change in a linked IntelliManage task.
*   - [ ] Logic exists to trigger IntelliManage task updates when mapped fields change on a linked GitHub Issue.
*   - [ ] Title and Description/Body fields are synced bi-directionally.
*   - [ ] Assignee field is synced bi-directionally (mapping usernames).
*   - [ ] Closing/Archiving an IntelliManage task closes the linked GitHub Issue.
*   - [ ] Closing/Reopening a GitHub Issue updates the linked IntelliManage task status (e.g., to Done/ToDo).
*   - [ ] The link (`related_issues` field and ID in Issue body) is correctly established and maintained.
*   - [ ] Conflict resolution strategy (from config) is applied during updates.
*   - [ ] Logic correctly identifies which IntelliManage types (`issue_types` config) should be synced.
*   - [ ] Integration tests verify each CRUD mapping scenario (Create->Create, Update->Update, Delete->Close, Close->Update).

## Implementation Notes / Details 📝

*   **Mapping:** Carefully map IntelliManage fields to GitHub Issue fields/elements (Title, Body, Assignees, State, Labels).
*   **Linking:** Establish a robust way to store the link. Adding `IntelliManage-ID: TASK-123` as a comment or specific line in the GitHub Issue body is common. Storing the GitHub Issue URL or `owner/repo#number` in the `related_issues` array field in the TOML is recommended.
*   **State Management:** Need to track the sync state or use timestamps to avoid infinite update loops and implement conflict resolution. The `updated_date` field in IntelliManage artifacts and GitHub's `updated_at` field are crucial.
*   **Event Handling:** How are changes detected?
    *   *Local Changes:* Hook into CLE operations or trigger sync after local changes.
    *   *GitHub Changes:* Use Webhooks (preferred for real-time) or periodic polling of the GitHub API (simpler initially, less efficient).
*   **API Calls:** Use the integrated GitHub client (`TASK-IM-702`) for all interactions (creating issues, updating issues, closing issues, fetching issues).
*   **Markdown Conversion:** Handle potential differences between IntelliManage Markdown flavor and GitHub Flavored Markdown (GFM) during body sync.

## Subtasks / Checklist ☑️

*   - [ ] Implement logic to detect local IntelliManage task creation/update/deletion relevant for sync.
*   - [ ] Implement function: `createGitHubIssueFromTask(taskData, config)`.
*   - [ ] Implement function: `updateGitHubIssueFromTask(taskData, githubIssueId, config)`.
*   - [ ] Implement function: `closeGitHubIssue(githubIssueId, config)`.
*   - [ ] Implement logic to detect relevant GitHub Issue changes (Webhook handler or Polling mechanism).
*   - [ ] Implement function: `createTaskFromGitHubIssue(issueData, config)`.
*   - [ ] Implement function: `updateTaskFromGitHubIssue(issueData, taskId, config)`.
*   - [ ] Implement function: `updateTaskStatusFromGitHubState(issueState, taskId, config)`.
*   - [ ] Implement link storage/retrieval logic (both directions).
*   - [ ] Implement conflict resolution logic based on config (`last_update_wins`, etc.).
*   - [ ] Implement filtering based on `issue_types` config.
*   - [ ] Add error handling for API calls and sync logic.
*   - [ ] Write integration tests for Create sync (IntelliManage -> GitHub).
*   - [ ] Write integration tests for Create sync (GitHub -> IntelliManage - if implemented).
*   - [ ] Write integration tests for Update sync (Both directions, various fields).
*   - [ ] Write integration tests for Delete/Close sync (Both directions).
*   - [ ] Write integration tests for conflict resolution scenarios.