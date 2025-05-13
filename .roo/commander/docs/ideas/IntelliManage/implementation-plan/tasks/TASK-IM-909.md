+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-909"
title = "Write and finalize Document #9 (DOC-SETUP-GUIDE-001 - Setup Guide)"
status = "⚪️ Planned"
type = "📖 Docs" # Changed type to Docs
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-009"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Tech Writer / Dev
# reporter = "..."
priority = "🔥 Highest" # Essential for users to get started
# estimated_effort = "M" # Medium - Requires writing clear user instructions
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["documentation", "user-guide", "setup", "configuration", "getting-started", "finalization", "release-prep"]
related_docs = ["DOC-SETUP-GUIDE-001"]
depends_on = ["FEAT-IM-001", "FEAT-IM-007", "FEAT-IM-008"] # Depends on core setup, GitHub config, and commands being stable
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write and finalize Document #9 (DOC-SETUP-GUIDE-001 - Setup Guide)

## Description ✍️

Write, review, and finalize the user-facing `DOC-SETUP-GUIDE-001 - IntelliManage: Setup & Configuration Guide`. This document should provide clear, step-by-step instructions for end-users to initialize IntelliManage in their workspace, configure single or multiple projects, set methodologies, and optionally set up GitHub integration.

This involves taking the initial draft (`TASK-IM-909` depends on the *existence* of the draft, this task is about *finalizing* it) and ensuring it is accurate, complete, easy to follow, and reflects the final implemented commands and configuration options.

## Acceptance Criteria ✅

*   - [ ] The `DOC-SETUP-GUIDE-001` document exists and is finalized.
*   - [ ] Prerequisites listed are accurate and complete.
*   - [ ] Instructions for initial workspace setup (automatic creation of `.ruru/projects/`) are clear and correct.
*   - [ ] Instructions for configuring the first project using `!pm init project` are accurate, including examples for `--name` and `--methodology`.
*   - [ ] Instructions for configuring multiple projects are clear.
*   - [ ] Instructions for optionally configuring `projects_config.toml` are included.
*   - [ ] Instructions for setting the active project context (`!pm set-active`) are clear.
*   - [ ] Instructions for customizing project methodology (`!pm config project --set methodology=...`) are accurate.
*   - [ ] Instructions for defining custom statuses, WIP limits, and sprints via `!pm config project` are included and correct (reflecting final TOML structure).
*   - [ ] Instructions for configuring GitHub integration (`!pm config project --set github_integration...`) are accurate, complete, and emphasize secure PAT handling via environment variables.
*   - [ ] Troubleshooting section addresses common setup issues.
*   - [ ] All example commands in the guide work correctly with the final implementation.
*   - [ ] The guide is easy for a new user to follow.
*   - [ ] Formatting (Markdown), grammar, and clarity are checked and finalized.
*   - [ ] The document status is updated (e.g., to `published` or `final`) in its metadata.
*   - [ ] Changes are committed to version control.

## Implementation Notes / Details 📝

*   **Target Audience:** Write for end-users (developers, project managers) who may not be familiar with the internal architecture.
*   **Clarity:** Use simple language, clear steps, and accurate command examples.
*   **Verification:** Manually walk through the setup steps described in the guide using the final IntelliManage implementation to ensure accuracy.
*   **Screenshots (Optional):** Consider adding screenshots of the expected directory structure or command outputs if helpful.
*   **GitHub PAT Security:** Strongly emphasize the importance of using environment variables for PATs and not putting tokens in config files. Link to GitHub documentation on creating PATs with correct scopes.

## Subtasks / Checklist ☑️

*   - [ ] Review/Write Prerequisites Checklist section.
*   - [ ] Review/Write Initializing IntelliManage section.
*   - [ ] Review/Write Configuring Your First Project section (verify `!pm init project` examples).
*   - [ ] Review/Write Configuring Multiple Projects section (verify `!pm config workspace` examples).
*   - [ ] Review/Write Setting the Active Project Context section (verify `!pm set-active` example).
*   - [ ] Review/Write Customizing Project Methodology section (verify `!pm config project` examples for methodology, custom statuses, WIP, sprints).
*   - [ ] Review/Write Configuring GitHub Integration section (verify `!pm config project` examples, emphasize PAT security).
*   - [ ] Review/Write Troubleshooting section.
*   - [ ] Manually test all example commands provided in the guide.
*   - [ ] Make necessary edits for accuracy, clarity, and completeness based on final implementation.
*   - [ ] Perform final spell check and grammar check.
*   - [ ] Update document status in TOML frontmatter.
*   - [ ] Commit the finalized document.