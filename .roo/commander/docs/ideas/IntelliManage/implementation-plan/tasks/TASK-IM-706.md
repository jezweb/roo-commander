+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-706"
title = "Implement Milestone <-> Epic/Feature synchronization logic"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "▶️ Medium" # Less critical than issue sync, but important for roadmap alignment
# estimated_effort = "M" # Medium - Similar complexity to issue sync but fewer fields
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "github", "sync", "milestone", "epic", "feature", "roadmap", "mapping"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-701", "TASK-IM-702"]
depends_on = ["TASK-IM-701", "TASK-IM-702", "TASK-IM-106", "TASK-IM-107"] # Depends on IL base, auth, and CLE Epic/Feature CRUD
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement Milestone <-> Epic/Feature synchronization logic

## Description ✍️

Implement bi-directional synchronization logic within the Integration Layer (`TASK-IM-701`) for mapping IntelliManage Epics or Features (based on the `milestone_type` config) to GitHub Milestones.

This involves handling CRUD-like events:
1.  **IntelliManage Create -> GitHub Create:** When a relevant IntelliManage Epic/Feature is created, create a corresponding GitHub Milestone.
2.  **GitHub Create -> IntelliManage Create (Optional/Less Common):** When a GitHub Milestone is detected without a link, potentially create a corresponding IntelliManage Epic/Feature (less common workflow, might be disabled by default).
3.  **IntelliManage Update -> GitHub Update:** When mapped fields (title, description, status, target_date) change in an IntelliManage Epic/Feature, update the linked GitHub Milestone.
4.  **GitHub Update -> IntelliManage Update:** When mapped fields (title, description, state, due_on) change on a linked GitHub Milestone, update the corresponding IntelliManage Epic/Feature.
5.  **IntelliManage Delete/Archive -> GitHub Close/Delete:** When an IntelliManage Epic/Feature is deleted or archived, close (or optionally delete) the linked GitHub Milestone.
6.  **GitHub Close/Reopen -> IntelliManage Update:** When a linked GitHub Milestone is closed or reopened, update the status of the corresponding IntelliManage Epic/Feature.
7.  **Linking:** Maintain the link between the two items (e.g., storing GitHub Milestone URL/Number in a dedicated `related_milestone` field or using `related_issues`, storing IntelliManage ID in Milestone description).

## Acceptance Criteria ✅

*   - [ ] Integration logic reads the `milestone_type` and `sync_milestone_due_date` config flags.
*   - [ ] Logic exists to trigger GitHub Milestone creation when a relevant IntelliManage Epic/Feature is created locally.
*   - [ ] GitHub Milestone creation includes mapped fields (title, description, state='open', due_on if applicable) and the IntelliManage ID link.
*   - [ ] Logic exists (potentially triggered by webhook/poll) to detect new relevant GitHub Milestones and optionally create corresponding IntelliManage items.
*   - [ ] Logic exists to trigger GitHub Milestone updates when mapped fields change in a linked IntelliManage Epic/Feature.
*   - [ ] Logic exists to trigger IntelliManage Epic/Feature updates when mapped fields change on a linked GitHub Milestone.
*   - [ ] Title and Description fields are synced bi-directionally.
*   - [ ] IntelliManage `status` (mapped to Done/Archived) syncs with GitHub Milestone `state` (open/closed).
*   - [ ] IntelliManage `target_date`/`milestone_target_date` syncs with GitHub Milestone `due_on` (if `sync_milestone_due_date` is true).
*   - [ ] Closing/Archiving an IntelliManage Epic/Feature closes the linked GitHub Milestone.
*   - [ ] Closing/Reopening a GitHub Milestone updates the linked IntelliManage Epic/Feature status.
*   - [ ] The link (e.g., `related_milestone` field and ID in Milestone description) is correctly established and maintained.
*   - [ ] Conflict resolution strategy is applied during updates.
*   - [ ] Integration tests verify each CRUD mapping scenario for Milestones <-> Epics/Features.

## Implementation Notes / Details 📝

*   **Mapping:** Map IntelliManage Epic/Feature fields (Title, Description, Status, Target Date) to GitHub Milestone fields (Title, Description, State, Due On).
*   **Linking:** Similar to Issues, store the link robustly. A dedicated `related_milestone` field in TOML might be cleaner than overloading `related_issues`. Add `IntelliManage-ID: EPIC-123` to the Milestone description.
*   **State Mapping:** Map IntelliManage statuses like "🟢 Done" or "🧊 Archived" to GitHub Milestone state "closed". Map other active statuses ("⚪️ Planned", "🔵 In Progress") to "open".
*   **Date Handling:** Ensure date formats are compatible between IntelliManage (YYYY-MM-DD string) and GitHub API (ISO 8601 timestamp for `due_on`). Handle potential timezone issues if necessary (though `due_on` is typically date-only).
*   **API Calls:** Use the integrated GitHub client (`TASK-IM-702`) for Milestone interactions (create, update, get, list).
*   **Deletion:** Decide whether deleting/archiving locally should *close* the GitHub Milestone (safer, preserves history and associated issues) or *delete* it (potentially configured). Closing is recommended.

## Subtasks / Checklist ☑️

*   - [ ] Implement logic to detect local IntelliManage Epic/Feature creation/update/deletion relevant for sync.
*   - [ ] Implement function: `createGitHubMilestone(artifactData, config)`.
*   - [ ] Implement function: `updateGitHubMilestone(artifactData, githubMilestoneId, config)`.
*   - [ ] Implement function: `closeGitHubMilestone(githubMilestoneId, config)` (and optionally `deleteGitHubMilestone`).
*   - [ ] Implement logic to detect relevant GitHub Milestone changes (Webhook handler or Polling).
*   - [ ] Implement function: `createArtifactFromGitHubMilestone(milestoneData, config)` (Optional).
*   - [ ] Implement function: `updateArtifactFromGitHubMilestone(milestoneData, artifactId, config)`.
*   - [ ] Implement function: `updateArtifactStatusFromGitHubMilestoneState(milestoneState, artifactId, config)`.
*   - [ ] Implement link storage/retrieval logic (consider `related_milestone` field).
*   - [ ] Implement conflict resolution logic.
*   - [ ] Implement filtering based on `milestone_type` config.
*   - [ ] Add error handling for Milestone API calls.
*   - [ ] Write integration tests for Create sync (IntelliManage -> GitHub).
*   - [ ] Write integration tests for Update sync (Both directions, various fields including state/status and due date).
*   - [ ] Write integration tests for Delete/Close sync (Both directions).