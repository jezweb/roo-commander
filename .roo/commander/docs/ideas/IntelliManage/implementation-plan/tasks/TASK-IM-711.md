+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-711"
title = "Implement AI suggestion trigger for status updates based on commit keywords"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "▶️ Medium" # Key AI automation trigger
# estimated_effort = "S" # Small - Primarily connecting existing components
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "git", "commit", "ai", "status", "suggestion", "automation", "trigger"]
related_docs = ["DOC-GITHUB-SPEC-001", "DOC-AI-SPEC-001", "TASK-IM-701", "TASK-IM-709", "TASK-IM-304"]
depends_on = ["TASK-IM-709", "TASK-IM-304"] # Depends on commit scanner and AI status inference logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement AI suggestion trigger for status updates based on commit keywords

## Description ✍️

Implement the connection logic within the Integration Layer (`TASK-IM-701`) or the commit scanning process (`TASK-IM-709`) to trigger the AI Engine's status inference capability (`TASK-IM-304`) when relevant keywords are found in Git commit messages.

This involves:
1.  Identifying when the commit scanner (`TASK-IM-709`) extracts a reference containing a keyword designated for status updates (e.g., "Fixes", "Closes" from `commit_status_update_keywords` config).
2.  Calling the appropriate AI Engine method (e.g., `processEvent` or `inferStatusFromCommit`) with the relevant event data (commit message, SHA, artifact ID, project slug).
3.  Receiving the status change *suggestion* from the AI Engine.
4.  Passing this suggestion back to the appropriate coordinator (likely `session-manager` via an event or callback) to present to the user for confirmation. **This task does not implement the user confirmation itself.**

## Acceptance Criteria ✅

*   - [ ] Logic exists within or following the commit scanning process (`TASK-IM-709`) to check if an extracted keyword is in the `commit_status_update_keywords` list.
*   - [ ] If a status update keyword is found, the logic correctly calls the designated AI Engine method (`TASK-IM-304`) with the commit details (message, SHA, artifact ID, project slug).
*   - [ ] The logic correctly receives the structured status suggestion (or null) returned by the AI Engine.
*   - [ ] A mechanism exists to forward the received suggestion to the active coordinator (`session-manager`) for user interaction (e.g., emitting an event, direct call if architecture allows).
*   - [ ] The trigger only occurs for keywords configured for status updates, not just linking keywords.
*   - [ ] Unit/Integration tests verify that the AI Engine's status inference method is called when status keywords are detected in mock commit data.
*   - [ ] Unit/Integration tests verify that the AI Engine method is *not* called when only linking keywords are detected.
*   - [ ] Unit/Integration tests verify that the suggestion received from the mock AI Engine is correctly passed to the (mocked) coordinator notification mechanism.

## Implementation Notes / Details 📝

*   **Trigger Point:** This logic plugs into the output of `TASK-IM-709`. After a commit reference is extracted, check the keyword against the `commit_status_update_keywords` list.
*   **AI Interface:** Use the interface defined in `TASK-IM-301` and implemented in `TASK-IM-304` to call the AI Engine.
*   **Notification Mechanism:** How does the Integration Layer (where scanning likely happens) notify the `session-manager` (which handles user interaction)?
    *   *Event Bus:* IL emits a `statusSuggestionAvailable` event with the suggestion data; Session Manager listens. (More decoupled).
    *   *Direct Call/Callback:* If architecture allows, IL might directly call a method on the Session Manager instance. (Tighter coupling).
    *   Choose and implement one approach.
*   **User Confirmation:** Remember, this task only triggers the *suggestion*. The actual confirmation and call to `CLE.updateArtifact` happens later, orchestrated by the `session-manager` based on user input.

## Subtasks / Checklist ☑️

*   - [ ] Implement logic within/after commit scanning to check extracted keywords against `commit_status_update_keywords` config list.
*   - [ ] Implement the call to the AI Engine's status inference method (`TASK-IM-304`) with commit data.
*   - [ ] Define and implement the mechanism for forwarding the AI's suggestion to the `session-manager` (e.g., event emission).
*   - [ ] Add comments explaining the trigger and notification logic.
*   - [ ] Write tests verifying AI Engine call is triggered only for status keywords.
*   - [ ] Write tests verifying AI Engine call includes correct commit data.
*   - [ ] Write tests verifying the suggestion received from mock AI is correctly passed to the mock notification mechanism.