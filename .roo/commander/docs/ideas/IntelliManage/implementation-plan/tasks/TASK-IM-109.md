+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-109"
title = "Implement CLE Subtask (checklist) management logic"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-001"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Important for task breakdown
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "cle", "subtask", "checklist", "markdown", "update"]
related_docs = ["DOC-FUNC-SPEC-001", "TASK-IM-104", "TASK-IM-108"]
depends_on = ["TASK-IM-104", "TASK-IM-108"] # Depends on CLE base and Task update logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement CLE Subtask (checklist) management logic

## Description ✍️

Implement the logic within the Core Logic Engine (CLE), likely as part of the `updateArtifact` functionality for Tasks/Stories/Bugs, to manage subtasks represented as Markdown checklists (`- [ ]` or `- [x]`) within the artifact's Markdown body. This includes adding new subtasks, checking/unchecking existing subtasks, and potentially editing or deleting them.

## Acceptance Criteria ✅

*   - [ ] `updateArtifact` method (or equivalent) can add a new subtask checklist item (`- [ ] New Subtask`) to the Markdown body of a Task/Story/Bug.
*   - [ ] `updateArtifact` method can find an existing subtask by its description and change its state from unchecked (`- [ ]`) to checked (`- [x]`).
*   - [ ] `updateArtifact` method can find an existing subtask by its description and change its state from checked (`- [x]`) to unchecked (`- [ ]`).
*   - [ ] Logic correctly handles variations in Markdown formatting (e.g., whitespace, list nesting if applicable).
*   - [ ] Logic correctly identifies the target subtask based on its text content.
*   - [ ] (Optional) `updateArtifact` method can edit the description of an existing subtask.
*   - [ ] (Optional) `updateArtifact` method can delete an existing subtask line.
*   - [ ] Operations modify the Markdown content without corrupting other parts of the file.
*   - [ ] The `updated_date` field of the parent artifact is updated when subtasks are modified.
*   - [ ] Unit tests cover adding, checking, and unchecking subtasks.

## Implementation Notes / Details 📝

*   This functionality will likely reside within the `updateArtifact` method or be called by it.
*   Requires careful parsing and manipulation of the Markdown content. Regular expressions or a dedicated Markdown parser/manipulation library might be necessary.
*   Need a reliable way to identify the target subtask line based on its text description provided by the user/caller. Handle cases where multiple subtasks have similar descriptions (e.g., require exact match, operate on the first match, or report ambiguity).
*   Ensure that modifications preserve the list structure and indentation.
*   Consider adding a specific section marker in the Markdown template (e.g., `## Subtasks`) to make parsing more reliable, although GFM checklists can appear anywhere.
*   The interface for triggering these actions (e.g., flags like `--add-subtask "..."`, `--check-subtask "..."`) needs to be defined in coordination with `TASK-IM-801` (Command Parser).

## Subtasks / Checklist ☑️

*   - [ ] Design the interface/flags for `updateArtifact` to trigger subtask operations.
*   - [ ] Implement logic to parse Markdown body and identify checklist items.
*   - [ ] Implement logic to add a new checklist item (`- [ ] ...`) to the Markdown content.
*   - [ ] Implement logic to find a specific subtask line by its text description.
*   - [ ] Implement logic to change `- [ ]` to `- [x]` for a found subtask.
*   - [ ] Implement logic to change `- [x]` to `- [ ]` for a found subtask.
*   - [ ] (Optional) Implement logic to edit the text of a subtask line.
*   - [ ] (Optional) Implement logic to delete a subtask line.
*   - [ ] Ensure `updated_date` is set on the parent artifact during subtask updates.
*   - [ ] Write unit tests for adding subtasks.
*   - [ ] Write unit tests for checking subtasks.
*   - [ ] Write unit tests for unchecking subtasks.
*   - [ ] Write unit tests for handling edge cases (e.g., similar descriptions, malformed lists).