+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-905"
title = "Review and finalize Document #5 (DOC-METHODOLOGY-GUIDE-001 - Methodologies)"
status = "⚪️ Planned"
type = "📖 Docs" # Changed type to Docs
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-009"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Lead Dev / Tech Writer
# reporter = "..."
priority = "🔼 High" # Documents core workflow variations
# estimated_effort = "S" # Small/Medium - Review against config and validation logic
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["documentation", "review", "methodology", "scrum", "kanban", "custom", "workflow", "finalization", "release-prep"]
related_docs = ["DOC-METHODOLOGY-GUIDE-001"]
depends_on = ["TASK-IM-201", "TASK-IM-202", "TASK-IM-203", "TASK-IM-204", "TASK-IM-205"] # Depends on methodology implementation
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Review and finalize Document #5 (DOC-METHODOLOGY-GUIDE-001 - Methodologies)

## Description ✍️

Review the existing `DOC-METHODOLOGY-GUIDE-001 - IntelliManage: Methodology Implementation Guide` document to ensure it accurately describes how Scrum, Kanban, Custom, and None methodologies are implemented and configured within IntelliManage v1.0. Verify alignment with the implemented configuration options (`project_config.toml`), status transition validation logic (`TASK-IM-202`), and specific field handling (`TASK-IM-203`, `TASK-IM-204`). Make necessary updates, clarifications, and corrections. Mark the document as finalized or published upon completion.

## Acceptance Criteria ✅

*   - [ ] The `DOC-METHODOLOGY-GUIDE-001` document has been thoroughly reviewed against the implemented methodology logic and configuration handling.
*   - [ ] The description of the core configuration (`methodology` field in `project_config.toml`) is accurate (`TASK-IM-201`).
*   - [ ] The **Scrum Implementation** section accurately describes:
    *   - [ ] How sprints are defined in config (if implemented).
    *   - [ ] How `sprint_id` field is used (`TASK-IM-203`).
    *   - [ ] The standard workflow statuses used.
    *   - [ ] The standard status transition rules applied (`TASK-IM-202`).
    *   - [ ] AI assistance features relevant to Scrum (aligns with `DOC-AI-SPEC-001`).
*   - [ ] The **Kanban Implementation** section accurately describes:
    *   - [ ] Use of standard or custom statuses.
    *   - [ ] How WIP limits are configured (if implemented) and monitored (`TASK-IM-205` design).
    *   - [ ] The standard workflow statuses used (if not customized).
    *   - [ ] The standard status transition rules applied (`TASK-IM-202`).
    *   - [ ] AI assistance features relevant to Kanban.
*   - [ ] The **Custom Implementation** section accurately describes:
    *   - [ ] How `custom_statuses` are defined in config (`TASK-IM-204`).
    *   - [ ] How status validation works against this list (`TASK-IM-202`).
    *   - [ ] (If implemented) How custom transitions are defined/used.
    *   - [ ] AI assistance adaptation to custom states.
*   - [ ] The **"None" Implementation** section accurately describes the minimal validation applied.
*   - [ ] The description of AI interaction across methodologies is consistent with `DOC-AI-SPEC-001`.
*   - [ ] Formatting, grammar, and clarity are checked and improved.
*   - [ ] The document status is updated (e.g., from `draft` to `published` or `final`) in its metadata.
*   - [ ] Changes are committed to version control.

## Implementation Notes / Details 📝

*   Requires checking the `project_config.toml` schema (`TASK-IM-903`) and the CLE's validation logic (`TASK-IM-202`, `TASK-IM-204`).
*   Verify the standard status transition rules documented match those implemented in `TASK-IM-202`.
*   Ensure the description of WIP limit *monitoring* aligns with the final design from `TASK-IM-205`, even if full enforcement isn't in v1.0.

## Subtasks / Checklist ☑️

*   - [ ] Read through `DOC-METHODOLOGY-GUIDE-001`.
*   - [ ] Verify Core Configuration section.
*   - [ ] Verify Scrum Implementation section against code/config.
*   - [ ] Verify Kanban Implementation section against code/config/WIP design.
*   - [ ] Verify Custom Implementation section against code/config.
*   - [ ] Verify "None" Implementation section against code.
*   - [ ] Verify AI Interaction Across Methodologies section.
*   - [ ] Make necessary edits for accuracy, clarity, and consistency.
*   - [ ] Perform spell check and grammar check.
*   - [ ] Update document status in TOML frontmatter.
*   - [ ] Commit the finalized document.