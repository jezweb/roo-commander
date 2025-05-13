+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-708"
title = "Implement conflict resolution logic (`last_update_wins`, `manual_flag`, etc.)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "▶️ Medium" # Important for robustness in bi-directional sync
# estimated_effort = "M" # Medium - Requires careful state/timestamp comparison
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "github", "sync", "conflict-resolution", "state-management", "robustness"]
related_docs = ["DOC-GITHUB-SPEC-001", "TASK-IM-701", "TASK-IM-703", "TASK-IM-704", "TASK-IM-706"]
depends_on = ["TASK-IM-701", "TASK-IM-703", "TASK-IM-704", "TASK-IM-706"] # Depends on IL base and sync logic for issues, labels, milestones
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement conflict resolution logic (`last_update_wins`, `manual_flag`, etc.)

## Description ✍️

Implement the conflict resolution logic within the GitHub Integration Layer's update synchronization flows (`TASK-IM-703`, `TASK-IM-704`, `TASK-IM-706`) based on the `conflict_resolution` strategy defined in the project's configuration (`project_config.toml`).

This involves:
1.  Reading the `conflict_resolution` setting (e.g., "last_update_wins", "prefer_local", "prefer_github", "manual_flag") from the config.
2.  Before applying an update received from one system (e.g., GitHub) to the other (e.g., IntelliManage), comparing the timestamps of the source change (e.g., GitHub Issue `updated_at`) and the target item's last known update time (e.g., IntelliManage artifact `updated_date`).
3.  Applying the configured strategy:
    *   **`last_update_wins`:** Apply the change only if the source timestamp is newer than the target timestamp.
    *   **`prefer_local`:** Only apply changes originating from IntelliManage to GitHub; ignore incoming GitHub changes if the local item has been modified since the last sync.
    *   **`prefer_github`:** Only apply changes originating from GitHub to IntelliManage; ignore local changes if the GitHub item has been modified since the last sync.
    *   **`manual_flag`:** If timestamps indicate a potential conflict (both changed since last sync), do not apply the change automatically. Instead, flag the conflict (e.g., add a specific tag/label, log an error/warning) for manual user review and resolution.

## Acceptance Criteria ✅

*   - [ ] Integration logic reads the `conflict_resolution` setting from project config via CLE.
*   - [ ] Update logic (e.g., `updateTaskFromGitHubIssue`, `updateGitHubIssueFromTask`) retrieves relevant timestamps (IntelliManage `updated_date`, GitHub `updated_at`).
*   - [ ] Logic correctly implements the `last_update_wins` strategy based on timestamp comparison.
*   - [ ] Logic correctly implements the `prefer_local` strategy.
*   - [ ] Logic correctly implements the `prefer_github` strategy.
*   - [ ] Logic correctly implements the `manual_flag` strategy (detects conflict, flags/logs appropriately, prevents automatic update).
*   - [ ] Timestamp comparison handles potential timezone differences or format conversions correctly (e.g., convert both to UTC epoch milliseconds).
*   - [ ] The chosen strategy is consistently applied across Issue, Label, and Milestone sync updates.
*   - [ ] Integration tests verify each conflict resolution strategy under different timestamp scenarios (local newer, GitHub newer, both newer).

## Implementation Notes / Details 📝

*   **Timestamps:** Reliable timestamps are crucial. Use IntelliManage's `updated_date` (ensure it's updated accurately on every local change - `TASK-IM-105` to `TASK-IM-108`) and GitHub's `updated_at`. Convert to a common comparable format (like UTC milliseconds).
*   **State Tracking:** The system needs to know the timestamp of the *last successful sync* for an item to detect if both sides have changed *since then*. This might require storing sync metadata locally (e.g., in a separate state file or potentially within the artifact TOML, though that adds noise). Alternatively, `last_update_wins` avoids needing explicit sync state by just comparing current timestamps.
*   **`last_update_wins`:** Simplest to implement as it doesn't require storing last sync state, but can lead to lost updates if users edit quickly on both sides.
*   **`manual_flag`:** Safest in terms of data loss but requires user intervention. Define *how* the conflict is flagged (e.g., add a `[CONFLICT]` prefix to the title? Add a specific tag/label? Log prominently?).
*   **Granularity:** Conflict resolution typically applies at the item level (Issue/Task). Field-level conflict resolution is significantly more complex.

## Subtasks / Checklist ☑️

*   - [ ] Update `project_config.toml` schema (`TASK-IM-103`) to formally include `conflict_resolution` (String enum, Optional, Default 'last_update_wins').
*   - [ ] Update config loading (`TASK-IM-110`) to parse `conflict_resolution`.
*   - [ ] Implement reliable timestamp retrieval for both IntelliManage artifacts (`updated_date`) and GitHub items (`updated_at`).
*   - [ ] Implement timestamp comparison logic (handle formats/timezones).
*   - [ ] (Optional/If Needed) Design and implement storage/retrieval for last sync timestamps per item.
*   - [ ] Integrate timestamp comparison into the `updateTaskFromGitHubIssue` logic.
*   - [ ] Integrate timestamp comparison into the `updateGitHubIssueFromTask` logic (and similar for labels/milestones).
*   - [ ] Implement conditional logic based on the `conflict_resolution` setting:
    *   - [ ] Implement `last_update_wins` logic.
    *   - [ ] Implement `prefer_local` logic.
    *   - [ ] Implement `prefer_github` logic.
    *   - [ ] Implement `manual_flag` logic (detect conflict, flag/log).
*   - [ ] Define how conflicts are flagged for `manual_flag`.
*   - [ ] Write integration tests for `last_update_wins` scenario.
*   - [ ] Write integration tests for `prefer_local` scenario.
*   - [ ] Write integration tests for `prefer_github` scenario.
*   - [ ] Write integration tests for `manual_flag` scenario (verify flagging/logging).