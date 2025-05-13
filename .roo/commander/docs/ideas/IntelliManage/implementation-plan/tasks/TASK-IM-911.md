+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-911"
title = "Review and finalize Document #11 (MODE-SPEC-SESSION-MANAGER-001 - Mode Spec: session-manager)"
status = "⚪️ Planned"
type = "📖 Docs" # Changed type to Docs
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-009"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Lead Dev / Architect responsible for session-manager
# reporter = "..."
priority = "🔥 Highest" # Defines a core coordinating mode
# estimated_effort = "M" # Medium - Requires checking spec against implemented rules/KB/logic
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["documentation", "review", "mode", "session-manager", "specification", "finalization", "release-prep"]
related_docs = ["MODE-SPEC-SESSION-MANAGER-001"]
depends_on = ["FEAT-IM-004"] # Depends on session-manager implementation (Tasks 401-413)
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Review and finalize Document #11 (MODE-SPEC-SESSION-MANAGER-001 - Mode Spec: session-manager)

## Description ✍️

Review the existing `MODE-SPEC-SESSION-MANAGER-001 - Mode Specification: session-manager` document (the `.mode.md` file created in `TASK-IM-401`) to ensure it accurately describes the final implemented behavior, capabilities, configuration, and documentation of the `session-manager` mode. Verify alignment with the implemented rules (`TASK-IM-402`), KB (`TASK-IM-403`), and core logic (`TASK-IM-404` through `TASK-IM-411`). Make necessary updates, clarifications, and corrections directly within the `.mode.md` file. Mark the document status within its frontmatter as finalized or published upon completion.

## Acceptance Criteria ✅

*   - [ ] The `session-manager.mode.md` file has been thoroughly reviewed against the implemented mode's rules, KB, and observed behavior.
*   - [ ] **TOML Frontmatter:**
    *   - [ ] `id`, `name`, `version` are correct.
    *   - [ ] `classification`, `domain`, `sub_domain` accurately reflect the mode's role.
    *   - [ ] `summary` is concise and accurate.
    *   - [ ] `system_prompt` accurately describes the final key responsibilities and operational guidelines.
    *   - [ ] `allowed_tool_groups` correctly lists the tools actually used by the implemented rules.
    *   - [ ] `file_access` section accurately reflects the directories/files the implemented rules read from or write to (handovers, session logs, configs, etc.).
    *   - [ ] `metadata` section (tags, categories, delegate_to, escalate_to, reports_to, documentation_urls) is accurate and complete, linking to other finalized docs.
    *   - [ ] `custom_instructions_dir` points to the correct KB location.
    *   - [ ] `[config]` section (if used) accurately reflects configurable parameters.
*   - [ ] **Markdown Documentation:**
    *   - [ ] Description, Capabilities, Workflow & Usage Examples, Limitations, and Rationale sections accurately reflect the final implementation.
    *   - [ ] Workflow examples align with the implemented rules and user interactions.
*   - [ ] Formatting (TOML and Markdown), grammar, and clarity are checked and improved within the `.mode.md` file.
*   - [ ] The document status (within the TOML frontmatter, if using such a field) is updated.
*   - [ ] Changes are committed to version control.

## Implementation Notes / Details 📝

*   This task involves editing the `.mode.md` file directly.
*   Requires careful comparison of the specification text (especially the system prompt and capabilities list) against the implemented rules (`.roo` files) and KB content (`.md` files).
*   Ensure the `allowed_tool_groups` and `file_access` sections are precise, reflecting only what the mode actually needs and uses. Overly broad permissions should be avoided.
*   Update the `documentation_urls` to point to the final locations or IDs of related finalized documents.

## Subtasks / Checklist ☑️

*   - [ ] Read through `session-manager.mode.md`.
*   - [ ] Verify all TOML frontmatter fields against implementation and other specs.
    *   - [ ] Check System Prompt details.
    *   - [ ] Check Tool Access.
    *   - [ ] Check File Access.
    *   - [ ] Check Metadata (delegates, escalations, doc links).
*   - [ ] Verify Markdown Description section.
*   - [ ] Verify Markdown Capabilities section against implemented features.
*   - [ ] Verify Markdown Workflow & Usage Examples section against rules.
*   - [ ] Verify Markdown Limitations section.
*   - [ ] Verify Markdown Rationale section.
*   - [ ] Make necessary edits directly in the `.mode.md` file for accuracy, clarity, and consistency.
*   - [ ] Perform spell check and grammar check within the file.
*   - [ ] Update document status in TOML frontmatter (if applicable).
*   - [ ] Commit the finalized `.mode.md` file.