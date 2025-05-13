+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-503"
title = "Create KB directory and populate initial KB content for roo-dispatch"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-005"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Could be Tech Writer or Dev
# reporter = "..."
priority = "🔼 High" # KB is crucial for specialist selection logic
# estimated_effort = "M" # Medium - involves detailing selection logic and delegation patterns
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "roo-dispatch", "kb", "documentation", "configuration", "setup", "coordination"]
related_docs = ["KB-OUTLINE-ROO-DISPATCH-001", "MODE-SPEC-ROO-DISPATCH-001", "RULES-ROO-DISPATCH-001"]
depends_on = ["TASK-IM-501"] # Depends on the mode definition existing
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Create KB directory and populate initial KB content for roo-dispatch

## Description ✍️

Create the Knowledge Base (KB) directory structure for the `roo-dispatch` mode (`.ruru/modes/roo-dispatch/kb/`) and populate the initial set of Markdown files (`.md`) based on the structure and content outlines defined in `KB-OUTLINE-ROO-DISPATCH-001`.

This involves writing the detailed procedures, guidelines, and reference information (especially regarding specialist selection and delegation messaging) that the `roo-dispatch` mode will use to guide its own behavior according to the specified rules and best practices.

## Acceptance Criteria ✅

*   - [ ] The directory `.ruru/modes/roo-dispatch/kb/` exists.
*   - [ ] All Markdown files outlined in `KB-OUTLINE-ROO-DISPATCH-001` are created within the directory (`README.md`, `00-kb-usage-strategy.md`, `01-specialist-selection.md`, `02-context-extraction.md`, `03-delegation-messaging.md`).
*   - [ ] Each KB file contains initial content covering the topics specified in the outline.
*   - [ ] Content accurately reflects the procedures and logic defined in `RULES-ROO-DISPATCH-001` and `MODE-SPEC-ROO-DISPATCH-001`.
*   - [ ] `01-specialist-selection.md` details the logic for analyzing tasks and consulting context (Stack Profile, mode summaries) to choose specialists.
*   - [ ] `02-context-extraction.md` provides clear guidelines on reading artifacts and minimizing context for delegation.
*   - [ ] `03-delegation-messaging.md` includes templates and examples for `new_task` messages to specialists.
*   - [ ] Content is written clearly and concisely, suitable for an AI agent to parse and understand.
*   - [ ] Formatting (Markdown) is correct and consistent across files.
*   - [ ] Placeholders for future details or refinements are noted where necessary.
*   - [ ] The KB files are added to version control (Git).

## Implementation Notes / Details 📝

*   This task involves translating the outlines and rule specifications into detailed procedural text within Markdown files.
*   Focus heavily on `01-specialist-selection.md` as this contains complex decision logic. Provide concrete examples.
*   In `03-delegation-messaging.md`, create clear templates that `roo-dispatch` can adapt when sending `new_task` commands.
*   Write from the perspective of instructing the `roo-dispatch` mode itself.
*   Ensure consistency in terminology with other specification documents.

## Subtasks / Checklist ☑️

*   - [ ] Create the directory `.ruru/modes/roo-dispatch/kb/`.
*   - [ ] Create and populate `README.md` (KB overview and index).
*   - [ ] Create and populate `00-kb-usage-strategy.md` (standard usage strategy).
*   - [ ] Create and populate `01-specialist-selection.md` (detailed selection logic, context usage, examples).
*   - [ ] Create and populate `02-context-extraction.md` (guidelines for reading artifacts, minimizing context).
*   - [ ] Create and populate `03-delegation-messaging.md` (message templates, examples for `new_task`).
*   - [ ] Review content for clarity, accuracy, and consistency with specifications.
*   - [ ] Add the new KB files to Git staging.