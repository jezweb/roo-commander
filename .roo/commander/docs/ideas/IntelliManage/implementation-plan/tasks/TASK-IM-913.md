+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-913"
title = "Review and finalize Document #13 (MODE-SPEC-AGENT-SESSION-SUMMARIZER-001 - Mode Spec: agent-session-summarizer)"
status = "⚪️ Planned"
type = "📖 Docs" # Changed type to Docs
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-009"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Lead Dev / Architect / Tech Writer responsible for agent
# reporter = "..."
priority = "▶️ Medium" # Important supporting agent
# estimated_effort = "S" # Small/Medium - Review spec against simpler agent logic
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["documentation", "review", "mode", "agent", "session-summarizer", "specification", "finalization", "release-prep"]
related_docs = ["MODE-SPEC-AGENT-SESSION-SUMMARIZER-001"]
depends_on = ["FEAT-IM-006"] # Depends on agent implementation (Tasks 601-608)
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Review and finalize Document #13 (MODE-SPEC-AGENT-SESSION-SUMMARIZER-001 - Mode Spec: agent-session-summarizer)

## Description ✍️

Review the existing `MODE-SPEC-AGENT-SESSION-SUMMARIZER-001 - Mode Specification: agent-session-summarizer` document (the `.mode.md` file created in `TASK-IM-601`) to ensure it accurately describes the final implemented behavior, capabilities, configuration, and documentation of the `agent-session-summarizer` mode. Verify alignment with the implemented rules (`TASK-IM-602`) and core logic (`TASK-IM-603` through `TASK-IM-607`). Make necessary updates, clarifications, and corrections directly within the `.mode.md` file. Mark the document status within its frontmatter as finalized or published upon completion.

## Acceptance Criteria ✅

*   - [ ] The `agent-session-summarizer.mode.md` file has been thoroughly reviewed against the implemented mode's rules and observed behavior.
*   - [ ] **TOML Frontmatter:**
    *   - [ ] `id`, `name`, `version` are correct.
    *   - [ ] `classification`, `domain`, `sub_domain` accurately reflect the mode's role (assistant, context summarization).
    *   - [ ] `summary` is concise and accurate.
    *   - [ ] `system_prompt` accurately describes the final key responsibilities (read artifacts, extract info, populate template, save summary, report path) and operational guidelines (template adherence, info focus).
    *   - [ ] `allowed_tool_groups` correctly lists the tools actually used by the implemented rules (read, edit, list_files, complete).
    *   - [ ] `file_access` section accurately reflects the directories/files the implemented rules read from (logs, tasks, plans, template) and write to (handovers).
    *   - [ ] `metadata` section (tags, categories, delegate_to, escalate_to, reports_to, documentation_urls) is accurate and complete, linking to other finalized docs (especially `DATA-FORMAT-HANDOVER-001`).
    *   - [ ] `custom_instructions_dir` points to the correct KB location.
    *   - [ ] `[config]` section accurately reflects configurable parameters (e.g., `handover_dir`, `template_path`).
*   - [ ] **Markdown Documentation:**
    *   - [ ] Description, Capabilities, Workflow & Usage Examples, Limitations, and Rationale sections accurately reflect the final implementation.
    *   - [ ] Workflow examples align with the implemented rules (Receive -> Read -> Extract -> Populate -> Write -> Report).
*   - [ ] Formatting (TOML and Markdown), grammar, and clarity are checked and improved within the `.mode.md` file.
*   - [ ] The document status (within the TOML frontmatter, if using such a field) is updated.
*   - [ ] Changes are committed to version control.

## Implementation Notes / Details 📝

*   This task involves editing the `agent-session-summarizer.mode.md` file directly.
*   Requires comparing the specification text against the implemented rules (`.roo` files) and KB content (`.md` files).
*   Verify the description of the information extraction process (`TASK-IM-604`) and template population (`TASK-IM-605`).
*   Ensure the `file_access` accurately reflects all sources read and the single output directory.

## Subtasks / Checklist ☑️

*   - [ ] Read through `agent-session-summarizer.mode.md`.
*   - [ ] Verify all TOML frontmatter fields against implementation and other specs.
    *   - [ ] Check System Prompt details.
    *   - [ ] Check Tool Access.
    *   - [ ] Check File Access.
    *   - [ ] Check Metadata (escalations, doc links).
    *   - [ ] Check Config section.
*   - [ ] Verify Markdown Description section.
*   - [ ] Verify Markdown Capabilities section against implemented features.
*   - [ ] Verify Markdown Workflow & Usage Examples section against rules.
*   - [ ] Verify Markdown Limitations section.
*   - [ ] Verify Markdown Rationale section.
*   - [ ] Make necessary edits directly in the `.mode.md` file for accuracy, clarity, and consistency.
*   - [ ] Perform spell check and grammar check within the file.
*   - [ ] Update document status in TOML frontmatter (if applicable).
*   - [ ] Commit the finalized `.mode.md` file.