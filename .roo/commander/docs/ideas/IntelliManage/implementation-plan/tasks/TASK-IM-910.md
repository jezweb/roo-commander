+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-910"
title = "Write and finalize Document #10 (DOC-USAGE-GUIDE-001 - Usage Guide)"
status = "⚪️ Planned"
type = "📖 Docs" # Changed type to Docs
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-009"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Tech Writer / Dev / Product Manager
# reporter = "..."
priority = "🔥 Highest" # Essential for users to use the system effectively
# estimated_effort = "M" # Medium - Requires explaining workflows and best practices
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["documentation", "user-guide", "usage", "best-practices", "workflow", "ai", "github", "finalization", "release-prep"]
related_docs = ["DOC-USAGE-GUIDE-001"]
depends_on = ["FEAT-IM-001", "FEAT-IM-002", "FEAT-IM-003", "FEAT-IM-004", "FEAT-IM-005", "FEAT-IM-007", "FEAT-IM-008"] # Depends on all core features being stable
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write and finalize Document #10 (DOC-USAGE-GUIDE-001 - Usage Guide)

## Description ✍️

Write, review, and finalize the user-facing `DOC-USAGE-GUIDE-001 - IntelliManage: Usage Guidelines & Best Practices`. This document should provide practical advice, tips, and workflow examples to help users effectively utilize the IntelliManage framework for their day-to-day project management.

This involves taking the initial draft (`TASK-IM-910` depends on the *existence* of the draft, this task is about *finalizing* it) and ensuring it provides actionable guidance based on the final implemented features, commands, AI capabilities, and integration options.

## Acceptance Criteria ✅

*   - [ ] The `DOC-USAGE-GUIDE-001` document exists and is finalized.
*   - [ ] Getting Started section correctly advises on setting project context.
*   - [ ] Managing Project Artifacts section provides clear best practices for titles, descriptions, ACs, subtasks, linking, and tagging that align with implemented features.
*   - [ ] Working with Methodologies section gives practical advice for using Scrum (sprint IDs, backlogs) and Kanban (status updates, WIP awareness) within IntelliManage.
*   - [ ] Leveraging the AI Assistant section accurately describes how to use implemented AI features (generation, linking, status inference, reporting, guidance) effectively and highlights their current capabilities/limitations.
*   - [ ] GitHub Integration Best Practices section provides useful tips for users enabling the sync (consistency, commit messages).
*   - [ ] Managing Multiple Projects section gives clear advice on using `set-active` and `--project` flags.
*   - [ ] General Tips section provides relevant advice (keeping current, version control, communication).
*   - [ ] Examples provided throughout the guide are practical and reflect final command syntax and system behavior.
*   - [ ] The guide is easy to understand and provides actionable advice for typical user workflows.
*   - [ ] Formatting (Markdown), grammar, and clarity are checked and finalized.
*   - [ ] The document status is updated (e.g., to `published` or `final`) in its metadata.
*   - [ ] Changes are committed to version control.

## Implementation Notes / Details 📝

*   **Target Audience:** End-users (developers, PMs). Focus on *how* to use the system effectively in their workflow.
*   **Practical Examples:** Include short, realistic examples of command usage or interaction flows for common scenarios.
*   **AI Capabilities:** Be realistic about what the AI can do in v1.0. Explain how to best interact with it (e.g., providing clear prompts, confirming suggestions).
*   **Workflow Focus:** Structure guidance around common workflows (e.g., starting a new feature, fixing a bug, planning a sprint).

## Subtasks / Checklist ☑️

*   - [ ] Review/Write Getting Started section.
*   - [ ] Review/Write Managing Project Artifacts section (verify advice aligns with CLE/Schema).
*   - [ ] Review/Write Working with Methodologies section (verify advice aligns with methodology support).
*   - [ ] Review/Write Leveraging the AI Assistant section (verify advice aligns with implemented AI features).
*   - [ ] Review/Write GitHub Integration Best Practices section (verify advice aligns with integration features).
*   - [ ] Review/Write Managing Multiple Projects section.
*   - [ ] Review/Write General Tips section.
*   - [ ] Add or refine practical examples throughout the guide.
*   - [ ] Ensure consistency with finalized command syntax (`DOC-UI-CMD-SPEC-001`) and features.
*   - [ ] Make necessary edits for accuracy, clarity, and actionability.
*   - [ ] Perform final spell check and grammar check.
*   - [ ] Update document status in TOML frontmatter.
*   - [ ] Commit the finalized document.