+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-304"
title = "Implement Status Tracking/Inference logic (Event parsing -> Suggestion -> CLE Update on confirm)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Core automation feature for workflow
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["ai", "automation", "status", "inference", "suggestion", "git", "chat", "nlp", "cle"]
related_docs = ["DOC-AI-SPEC-001", "DOC-GITHUB-SPEC-001", "TASK-IM-301"]
depends_on = ["TASK-IM-301", "TASK-IM-104"] # Depends on AI interface and CLE base
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement Status Tracking/Inference logic (Event parsing -> Suggestion -> CLE Update on confirm)

## Description ✍️

Implement the AI Engine capability to infer potential status changes for IntelliManage artifacts based on external events (like Git commits, PR merges) or user chat context. This involves:
1.  Receiving event data (e.g., commit message, chat transcript snippet) via the interface defined in `TASK-IM-301` (e.g., `processEvent(eventData)`).
2.  Parsing the event data to identify relevant keywords (e.g., "Fixes", "Closes", "Refs", "Finished working on") and associated artifact IDs (`TASK-XXX`, `BUG-XXX`).
3.  Inferring a likely new status based on the keywords and context (e.g., "Fixes TASK-123" suggests moving to "🟣 Review" or "🟢 Done").
4.  Communicating this *suggestion* (including the artifact ID, current status, and proposed new status) back to the appropriate coordinator (`session-manager`) via the defined interface mechanism (e.g., return value, event).
5.  **Crucially:** The AI Engine only *suggests*; the coordinator is responsible for presenting the suggestion to the user and obtaining confirmation before instructing the CLE to perform the actual `updateArtifact` operation.

## Acceptance Criteria ✅

*   - [ ] AI Engine exposes a method (e.g., `processEvent` or similar) to receive event data (Git commit, chat message).
*   - [ ] The method correctly parses Git commit messages to find keywords (from `DOC-GITHUB-SPEC-001` config) and associated artifact IDs.
*   - [ ] The method correctly parses simple chat messages to find keywords ("finished", "completed", "working on") and associated artifact IDs.
*   - [ ] Logic exists to map keywords to potential target statuses (e.g., "Fixes" -> "Review/Done", "Refs" -> no status change, "Working on" -> "In Progress").
*   - [ ] The method fetches the artifact's current status via the CLE (`readArtifact`) to provide context for the suggestion.
*   - [ ] The method returns a structured suggestion object (e.g., `{ artifactId: 'TASK-123', currentStatus: '...', suggestedStatus: '...', reason: 'Commit message: Fixes TASK-123' }`) or null/empty if no suggestion is inferred.
*   - [ ] The suggestion logic considers basic workflow validity (e.g., doesn't suggest moving from "Done" back to "In Progress" based on "Refs").
*   - [ ] Unit tests cover parsing of different commit message formats and keywords.
*   - [ ] Unit tests cover parsing of simple chat message formats.
*   - [ ] Unit tests cover the mapping logic from keywords to suggested statuses.
*   - [ ] Unit tests verify the structure and content of the returned suggestion object.

## Implementation Notes / Details 📝

*   **Keyword Configuration:** The keywords used for Git commit parsing should ideally be configurable (as defined in `DOC-GITHUB-SPEC-001` and loaded via `TASK-IM-110`).
*   **Status Mapping:** Define the mapping from keywords to suggested statuses clearly. This might need refinement based on team workflows. Consider mapping "Fixes/Closes/Resolves" to "🟣 Review" by default if a review step exists, otherwise "🟢 Done". "Refs" or "Relates to" should generally not trigger a status change suggestion. "Started/Working on" could suggest "🔵 In Progress".
*   **Confirmation is External:** Re-emphasize that this task *only* implements the *suggestion* logic within the AI Engine. The user confirmation step happens in the coordinator (`session-manager`) which then calls `CLE.updateArtifact`.
*   **Context:** Fetching the current status via CLE is important to avoid suggesting redundant changes (e.g., suggesting "Done" if already "Done").
*   **Chat Parsing:** Keep initial chat parsing simple, looking for basic patterns like "[action verb] [artifact ID]". More complex NLP can be added later.

## Subtasks / Checklist ☑️

*   - [ ] Implement the `processEvent` interface method (or equivalent) in the AI Engine.
*   - [ ] Implement Git commit message parsing logic (keywords, artifact IDs).
*   - [ ] Implement basic chat message parsing logic (keywords, artifact IDs).
*   - [ ] Define and implement the keyword-to-suggested-status mapping logic.
*   - [ ] Implement logic to fetch current artifact status via CLE.
*   - [ ] Implement logic to construct and return the structured suggestion object.
*   - [ ] Add basic workflow validation to the suggestion logic.
*   - [ ] Write unit tests for Git commit parsing (various keywords, IDs).
*   - [ ] Write unit tests for chat message parsing.
*   - [ ] Write unit tests for keyword-to-status mapping logic.
*   - [ ] Write unit tests verifying the suggestion object format and content.
*   - [ ] Write unit tests for cases where no suggestion should be made.