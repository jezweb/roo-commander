+++
id = "PLAN-RELEASE-NOTES-LOCAL-WORKFLOW-V1"
title = "Planning: Local File Release Notes Workflow (Option B)"
context_type = "planning"
scope = "Details requirements, workflow, and template for generating local release notes files"
target_audience = ["prime-coordinator", "roo-commander", "core-architect"]
granularity = "detailed"
status = "draft"
last_updated = "2025-04-25" # Use current date
tags = ["planning", "release-notes", "changelog", "local-files", "automation", "workflow", "template"]
related_context = [
    "./PLAN-RELEASE-NOTES-WHITEPAPER.md",
    "../enhanced-git-integration/CTX-GIT-INTEGRATION-OVERVIEW.md",
    "../enhanced-git-integration/CTX-GIT-INTEGRATION-IMPL-GUIDE.md",
    ".roo/rules/07-git-commit-standard-simplified.md",
    ".roo/rules/10-git-tagging-standard.md" # Assumes this rule will be created
    ]
template_schema_doc = ".ruru/templates/toml-md/17_feature_proposal.README.md" # Using feature proposal as a base
+++

# Planning: Local File Release Notes Workflow (Option B)

This document details the proposed workflow, requirements, and template considerations for generating release notes as local Markdown files within the repository, as outlined in Option B of the `PLAN-RELEASE-NOTES-WHITEPAPER.md`. This approach provides a non-GitHub-dependent method for change documentation.

## 1. Workflow Overview

The core idea is to automate the creation of a formatted Markdown file summarizing changes between two specified Git tags (or from the last tag to HEAD).

**Trigger:** Manually initiated by the user or potentially integrated into a larger build/release workflow managed by `roo-commander` or `lead-devops`.

**Steps:**

1.  **Input:** User provides the target version tag (e.g., `v1.2.0`) and the previous version tag (e.g., `v1.1.0`). If no previous tag is provided, assume comparison from the latest tag to HEAD.
2.  **Git History Query:**
    *   Use `dev-git` to execute `git log --pretty=format:"%H %s%n%b" <prev_tag>..<target_tag>` to retrieve commit history (hash, subject, body) between the specified tags/refs.
3.  **Filter & Parse Commits:**
    *   Filter commits based on Conventional Commit types (e.g., `feat:`, `fix:`, `perf:`, `refactor:`, `chore:`, `docs:`, `test:`). Ignore merge commits unless specifically configured.
    *   Parse commit messages to extract:
        *   Type (`feat`, `fix`, etc.)
        *   Scope (optional)
        *   Subject
        *   Body (for details)
        *   MDTM Task IDs (`Refs: TASK-...`) from the footer.
4.  **Summarize Changes:**
    *   Group parsed commits by type (Features, Bug Fixes, Performance Improvements, etc.).
    *   Generate a concise summary for each group, potentially using `agent-context-resolver` or a dedicated summarization tool if complex aggregation is needed. Include links to MDTM tasks if available (using relative paths).
    *   Format the summary into Markdown.
5.  **Prepare File Content:**
    *   Select the `release-notes.md` template (to be defined).
    *   Populate the TOML frontmatter (version, date, tags, etc.).
    *   Insert the generated Markdown summary into the appropriate section of the template.
6.  **Create Release Notes File:**
    *   Determine the output path (e.g., `.ruru/docs/release-notes/v1.2.0.md`).
    *   Delegate file creation to `prime-txt` using `write_to_file` with the prepared content.
7.  **Report Outcome:** Report success (providing the path to the created file) or failure (with error details) to the user.

## 2. Required Template (`.ruru/templates/toml-md/NN_release_notes.md` - TBD)

A new TOML+MD template needs to be created.

**Potential TOML Fields:**

*   `id`: Unique ID (e.g., `RELEASE-NOTES-v1.2.0`)
*   `title`: Release Title (e.g., "Release Notes - v1.2.0")
*   `version`: Version number (`v1.2.0`)
*   `release_date`: Date of generation/release
*   `status`: `"draft"` or `"published"`
*   `tags`: ["release-notes", "changelog", "v1.2.0"]
*   `related_tags`: [`<previous_tag>`, `<current_tag>`] # Git tags used for generation
*   `summary`: Brief overall summary of the release (optional, could be auto-generated or manual).

**Potential Markdown Structure:**

*   `# Release Notes - vX.Y.Z`
*   `> Release Date: YYYY-MM-DD`
*   `(Optional Overall Summary)`
*   `## ✨ New Features`
    *   `- Scope: Subject line (Commit Hash, Refs: TASK-...)`
    *   `- Subject line (Commit Hash)`
*   `## 🐛 Bug Fixes`
    *   `- Scope: Subject line (Commit Hash, Refs: TASK-...)`
*   `## ⚡ Performance Improvements`
    *   `- Subject line (Commit Hash)`
*   `## ♻️ Refactors`
    *   `- Scope: Subject line (Commit Hash)`
*   `## ⚙️ Chores / Internal`
    *   `- Subject line (Commit Hash)`
*   `(Other sections as needed: Docs, Tests, etc.)`

## 3. Mode Responsibilities

*   **`roo-commander` / `lead-devops` / User:** Initiates the workflow, provides tags.
*   **Workflow Executor (e.g., `manager-project` or a new `release-manager` mode):**
    *   Coordinates the steps.
    *   Delegates Git query to `dev-git`.
    *   Parses/Filters commits.
    *   Delegates summarization if needed (`agent-context-resolver`?).
    *   Prepares file content using the template.
    *   Delegates file creation to `prime-txt`.
*   **`dev-git`:** Executes `git log`.
*   **`agent-context-resolver` (Potentially):** Summarizes commit information if simple grouping isn't sufficient.
*   **`prime-txt`:** Creates the final Markdown file.

## 4. Open Questions / Considerations

*   **Template Finalization:** The exact TOML fields and Markdown structure need refinement.
*   **Summarization Logic:** How to handle commit bodies? How to link MDTM tasks effectively?
*   **File Naming/Location:** Confirm the best directory structure (e.g., `.ruru/docs/release-notes/` or similar).
*   **Error Handling:** Plan for invalid tags, non-standard commits, file writing errors.
*   **Manual Edits:** The generated file serves as a starting point; manual edits might be expected before finalizing.