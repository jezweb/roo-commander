+++
id = "PLAN-RELEASE-NOTES-MCP-WORKFLOW-V1"
title = "Planning: GitHub MCP Release Notes Workflow (Option A)"
context_type = "planning"
scope = "Details requirements and workflow for generating release notes using GitHub MCP"
target_audience = ["prime-coordinator", "roo-commander", "core-architect", "agent-mcp-manager"]
granularity = "detailed"
status = "draft"
last_updated = "2025-04-25" # Use current date
tags = ["planning", "release-notes", "changelog", "github", "automation", "workflow", "mcp"]
related_context = [
    "./PLAN-RELEASE-NOTES-WHITEPAPER.md",
    "../enhanced-git-integration/CTX-GIT-INTEGRATION-OVERVIEW.md",
    "../enhanced-git-integration/CTX-GIT-INTEGRATION-IMPL-GUIDE.md",
    ".roo/rules/07-git-commit-standard-simplified.md",
    ".roo/rules/10-git-tagging-standard.md" # Assumes this rule will be created
    ]
template_schema_doc = ".ruru/templates/toml-md/17_feature_proposal.README.md" # Using feature proposal as a base
+++

# Planning: GitHub MCP Release Notes Workflow (Option A)

This document details the proposed workflow and requirements for generating release notes directly into GitHub Releases using a dedicated GitHub MCP server, as outlined in Option A of the `PLAN-RELEASE-NOTES-WHITEPAPER.md`.

## 1. Workflow Overview

The core idea is to automate the creation of draft GitHub Releases based on Git history between two specified tags (or from the last tag to HEAD).

**Trigger:** Manually initiated by the user or potentially integrated into a larger build/release workflow managed by `roo-commander` or `lead-devops`.

**Steps:**

1.  **Input:** User provides the target version tag (e.g., `v1.2.0`) and the previous version tag (e.g., `v1.1.0`). If no previous tag is provided, assume comparison from the latest tag to HEAD.
2.  **Git History Query:**
    *   Use GitHub MCP tool (`get_commits_between_refs` or similar) OR `dev-git` (`git log --pretty=format:"%H %s%n%b" <prev_tag>..<target_tag>`) to retrieve commit history (hash, subject, body) between the specified tags/refs.
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
    *   Generate a concise summary for each group, potentially using `agent-context-resolver` or a dedicated summarization tool if complex aggregation is needed. Include links to MDTM tasks if available.
    *   Format the summary into Markdown suitable for GitHub Release notes.
5.  **Create/Update GitHub Release:**
    *   Use GitHub MCP tool (`create_release` or `update_release`):
        *   Specify the repository owner/name.
        *   Specify the target tag (`target_tag`).
        *   Provide the generated Markdown summary as the release notes body.
        *   Set the release name (e.g., "Version v1.2.0").
        *   Mark as a pre-release/draft initially.
        *   (Optional) Upload release assets if provided/generated elsewhere.
6.  **Report Outcome:** Report success (linking to the draft release) or failure (with error details) to the user.

## 2. Required GitHub MCP Tools (Hypothetical Names)

*   `github_mcp_server.get_commits_between_refs`:
    *   Input: `owner`, `repo`, `base_ref`, `head_ref`
    *   Output: List of commit objects (hash, message, author, date) between the refs.
    *   *Alternative:* Use `dev-git` with `git log`.
*   `github_mcp_server.create_release`:
    *   Input: `owner`, `repo`, `tag_name`, `target_commitish` (optional, defaults to default branch), `name`, `body` (Markdown), `draft` (boolean), `prerelease` (boolean).
    *   Output: URL of the created release.
*   `github_mcp_server.update_release`:
    *   Input: `owner`, `repo`, `release_id` (or `tag_name`), `tag_name` (optional), `target_commitish` (optional), `name` (optional), `body` (optional), `draft` (optional), `prerelease` (optional).
    *   Output: URL of the updated release.
*   `github_mcp_server.upload_release_asset`: (Optional)
    *   Input: `owner`, `repo`, `release_id`, `asset_path`, `asset_name`, `asset_label` (optional).
    *   Output: URL of the uploaded asset.
*   `github_mcp_server.get_latest_tag`: (Optional, for default comparison)
    *   Input: `owner`, `repo`
    *   Output: Latest tag name.

## 3. Mode Responsibilities

*   **`roo-commander` / `lead-devops` / User:** Initiates the workflow, provides tags.
*   **Workflow Executor (e.g., `manager-project` or a new `release-manager` mode):**
    *   Coordinates the steps.
    *   Calls Git query tool (MCP or `dev-git`).
    *   Parses/Filters commits.
    *   Delegates summarization if needed (`agent-context-resolver`?).
    *   Calls GitHub MCP tools to create/update the release.
*   **`dev-git`:** Executes `git log` if MCP tool is unavailable.
*   **`agent-context-resolver` (Potentially):** Summarizes commit information if simple grouping isn't sufficient.
*   **GitHub MCP Server:** Provides tools for interacting with the GitHub API.

## 4. Open Questions / Considerations

*   **Authentication:** How will the GitHub MCP server authenticate with GitHub? (PAT, GitHub App?) Needs secure configuration.
*   **Error Handling:** Robust handling for invalid tags, missing commits, API errors, non-standard commit messages.
*   **Summarization Complexity:** How sophisticated does the summarization need to be? Simple grouping by type vs. AI-powered narrative generation.
*   **Linking Issues:** Can the MCP link mentioned GitHub Issues automatically?
*   **Commit Body Parsing:** How much detail should be extracted from commit bodies?
*   **Customization:** Allow configuration for which commit types to include, formatting options, etc.