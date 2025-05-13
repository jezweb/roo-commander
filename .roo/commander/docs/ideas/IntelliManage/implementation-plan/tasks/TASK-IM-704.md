+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-704"
title = "Implement Label <-> Metadata synchronization logic (reading mappings from config)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "🔼 High" # Key for syncing status, type, priority
# estimated_effort = "M" # Medium - Involves mapping logic and API calls
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "github", "sync", "label", "metadata", "status", "type", "priority", "tags", "mapping"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-701", "TASK-IM-702", "TASK-IM-703"]
depends_on = ["TASK-IM-701", "TASK-IM-702", "TASK-IM-703"] # Depends on IL base, auth, and basic Issue sync
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement Label <-> Metadata synchronization logic (reading mappings from config)

## Description ✍️

Implement the bi-directional synchronization logic within the Integration Layer (`TASK-IM-701`) for mapping specific IntelliManage artifact metadata fields (Status, Type, Priority, Tags) to GitHub Issue Labels, based on the configuration defined in `project_config.toml` under `[github_integration.mapping]`.

This involves:
1.  Reading the relevant mapping configuration flags and specific label mappings (e.g., `sync_status_as_label`, `label_prefix`, `status_labels` table).
2.  **IntelliManage Update -> GitHub Labels:** When an IntelliManage task's status, type, priority, or tags change, update the labels on the linked GitHub Issue accordingly (adding/removing mapped labels).
3.  **GitHub Labels -> IntelliManage Update:** When relevant labels (matching the prefix or specific mappings) are added or removed from a linked GitHub Issue, update the corresponding metadata field in the IntelliManage task.

## Acceptance Criteria ✅

*   - [ ] Integration logic reads label mapping configuration (`label_prefix`, `sync_*_as_label` flags, specific `*_labels` tables) from project config via CLE.
*   - [ ] When IntelliManage `status` changes, the corresponding GitHub label (e.g., `PM:Status:Value` or from `status_labels` map) is added, and previous status labels are removed from the linked Issue (if `sync_status_as_label` is true).
*   - [ ] When IntelliManage `type` changes, the corresponding GitHub label is updated on the linked Issue (if `sync_type_as_label` is true).
*   - [ ] When IntelliManage `priority` changes, the corresponding GitHub label is updated on the linked Issue (if `sync_priority_as_label` is true).
*   - [ ] When IntelliManage `tags` array changes, corresponding labels (without prefix) are added/removed on the linked Issue (if `sync_tags_as_labels` is true).
*   - [ ] When a relevant status label is added to a linked GitHub Issue, the IntelliManage task's `status` field is updated (if `sync_status_as_label` is true). Only one status label should be active.
*   - [ ] When a relevant type label is added to a linked GitHub Issue, the IntelliManage task's `type` field is updated (if `sync_type_as_label` is true).
*   - [ ] When a relevant priority label is added to a linked GitHub Issue, the IntelliManage task's `priority` field is updated (if `sync_priority_as_label` is true).
*   - [ ] When labels corresponding to tags are added/removed on a linked GitHub Issue, the IntelliManage task's `tags` array is updated (if `sync_tags_as_labels` is true).
*   - [ ] Logic correctly handles both default (`PM:Field:Value`) and custom specified label mappings.
*   - [ ] Conflict resolution is applied if necessary.
*   - [ ] Integration tests verify label updates in both directions for status, type, priority, and tags based on configuration.

## Implementation Notes / Details 📝

*   **Label Management:** Requires fetching the current labels on a GitHub Issue before updating to determine which labels to add and which to remove. Use GitHub API calls like `listLabelsOnIssue` and `setLabelsForIssue` or `addLabelsToIssue`/`removeLabelFromIssue`.
*   **Mapping Logic:** Implement functions to map IntelliManage metadata values to GitHub label names and vice-versa, respecting the prefix and specific mapping tables from the configuration.
*   **Uniqueness:** Ensure only one label representing status, type, or priority is applied at a time based on the IntelliManage value. When updating from GitHub labels, decide how to handle multiple conflicting labels being present (e.g., prioritize one, report error).
*   **Tags:** Syncing tags involves comparing the array in IntelliManage with the labels on GitHub (excluding prefixed ones) and adding/removing as needed.

## Subtasks / Checklist ☑️

*   - [ ] Implement logic to read and parse all label mapping configurations from project config.
*   - [ ] Implement function: `mapMetadataToLabels(metadata, config)` -> returns list of labels to apply.
*   - [ ] Implement function: `mapLabelsToMetadata(labels, config)` -> returns updated metadata fields.
*   - [ ] Implement logic within the Update sync flow (`TASK-IM-703`) to call `mapMetadataToLabels` and update GitHub Issue labels via API.
*   - [ ] Implement logic within the Update sync flow (`TASK-IM-703`) to call `mapLabelsToMetadata` based on received GitHub labels and trigger CLE updates.
*   - [ ] Handle adding/removing status labels correctly (ensure only one).
*   - [ ] Handle adding/removing type labels correctly.
*   - [ ] Handle adding/removing priority labels correctly.
*   - [ ] Handle adding/removing tag labels correctly.
*   - [ ] Add error handling for API calls related to labels.
*   - [ ] Write integration tests for Status -> Label sync (both directions).
*   - [ ] Write integration tests for Type -> Label sync (both directions).
*   - [ ] Write integration tests for Priority -> Label sync (both directions).
*   - [ ] Write integration tests for Tags <-> Label sync (both directions).
*   - [ ] Write tests using default prefix and custom label mappings.