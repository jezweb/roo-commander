+++
id = "PLAN-RELEASE-NOTES-SOURCE-OF-TRUTH-V1"
title = "Planning: Release Notes Source of Truth Analysis"
context_type = "planning"
scope = "Analyzes using Git commits vs. MDTM tasks as the primary source for release notes"
target_audience = ["prime-coordinator", "roo-commander", "core-architect"]
granularity = "analysis"
status = "draft"
last_updated = "2025-04-25" # Use current date
tags = ["planning", "release-notes", "changelog", "git", "mdtm", "source-of-truth"]
related_context = [
    "[.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-WHITEPAPER.md](.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-WHITEPAPER.md)",
    "[.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-MCP-WORKFLOW.md](.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-MCP-WORKFLOW.md)",
    "[.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-LOCAL-WORKFLOW.md](.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-LOCAL-WORKFLOW.md)",
    "[.roo/commander/docs/ideas/enhanced-git-integration/CTX-GIT-INTEGRATION-OVERVIEW.md](.roo/commander/docs/ideas/enhanced-git-integration/CTX-GIT-INTEGRATION-OVERVIEW.md)",
    "BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/rules/07-git-commit-standard-simplified.md",
    "BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/rules/04-mdtm-workflow-initiation.md"
    ]
template_schema_doc = "BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/templates/toml-md/17_feature_proposal.README.md" # Using feature proposal as a base
+++

# Planning: Release Notes Source of Truth Analysis

This document analyzes the pros and cons of using Git commit messages versus MDTM task files as the primary source for generating automated release notes/changelogs.

## 1. Option: Git Commit Messages (Conventional Commits)

*   **Concept:** Parse Git log history between two tags. Rely on Conventional Commit format (`type(scope): subject`) and potentially linked Task IDs in the footer (`Refs: TASK-...`).
*   **Pros:**
    *   Directly tied to code changes.
    *   Standard practice in many projects (Conventional Commits).
    *   `git log` is a fast and standard operation.
    *   Enforces good commit hygiene.
    *   Can link directly to the commit hash for detailed diffs.
*   **Cons:**
    *   Quality depends entirely on commit message discipline. Poor messages lead to poor release notes.
    *   May contain too much low-level detail (e.g., minor refactors, chore commits) unless filtered.
    *   Doesn't easily capture the *overall goal* or user-facing impact of a feature that might span multiple commits.
    *   Linking back to the higher-level MDTM task requires consistent use of `Refs:` footer.
*   **Implementation Notes:** Requires robust parsing of commit messages. Filtering by commit type (`feat:`, `fix:`, etc.) is essential.

## 2. Option: MDTM Task Files

*   **Concept:** Find MDTM task files marked as completed within a given timeframe or associated with commits between two tags. Extract information from the task file's title, description, and potentially acceptance criteria.
*   **Pros:**
    *   Captures the higher-level goal and user-facing description of a feature/bug fix.
    *   Less dependent on individual commit message quality.
    *   MDTM files already contain structured metadata (title, type, ID).
*   **Cons:**
    *   Requires a reliable way to associate completed MDTM tasks with a specific release period (e.g., based on completion date, or commits linked via `Refs:`).
    *   May miss smaller changes or fixes not tracked via dedicated MDTM tasks.
    *   Requires reading and parsing multiple potentially large Markdown files, which could be slower than `git log`.
    *   Doesn't directly link to the specific code commits implementing the task unless commits consistently reference the Task ID.
*   **Implementation Notes:** Needs a mechanism to query/find relevant MDTM task files (e.g., search based on completion date range or by parsing commit history for `Refs:`). Requires parsing TOML and Markdown content.

## 3. Recommended Approach: Hybrid

*   **Concept:** Use Git commit history (between tags) as the primary driver, leveraging Conventional Commits for categorization and basic description. Enhance this by cross-referencing MDTM Task IDs found in commit footers.
*   **Workflow:**
    1.  Get commits between tags using `git log`.
    2.  Filter and parse commits based on Conventional Commit type.
    3.  For each relevant commit:
        *   Extract type, scope, subject.
        *   Extract `Refs: TASK-...` ID from the footer, if present.
    4.  Group commits by type (feat, fix, etc.).
    5.  **(Enhancement):** For commits linked to a TASK ID, optionally retrieve the MDTM task title or a brief description from the task file to provide better context than just the commit subject line.
    6.  Format the grouped list into release notes, including commit subjects and potentially the linked task titles/IDs.
*   **Pros:**
    *   Combines the code-level accuracy of commits with the higher-level context of MDTM tasks.
    *   Provides strong traceability through both commit hashes and task IDs.
    *   Leverages the strengths of both systems.
    *   Encourages linking commits to tasks.
*   **Cons:**
    *   Most complex to implement, requiring both Git log parsing and potential MDTM file reading/parsing.
    *   Still relies on good commit message discipline (Conventional Commits + `Refs:` footer).
*   **Implementation Notes:** This seems the most robust approach, providing the richest information. The workflow needs to handle cases where Task IDs are missing or MDTM files cannot be found/parsed.

## 4. Conclusion

The **Hybrid Approach** is recommended. It offers the best balance of detail, context, and traceability by leveraging both Conventional Commits and the existing MDTM system. This requires enforcing the commit message standard (including the `Refs:` footer) and implementing a workflow capable of parsing both `git log` output and potentially MDTM task files.