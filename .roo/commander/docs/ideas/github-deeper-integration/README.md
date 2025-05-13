# Planning: GitHub Deeper Integration & Release Notes Generation

This directory contains planning documents related to enhancing Roo Commander's Git integration, with a specific focus on standardizing and automating the generation of release notes/changelogs.

## Summary of Planning Documents

1.  **[PLAN-RELEASE-NOTES-WHITEPAPER.md](./PLAN-RELEASE-NOTES-WHITEPAPER.md)**
    *   **Goal:** Establish a standardized, potentially automated workflow for generating release notes, leveraging Git history and MDTM tasks, supporting both GitHub-integrated and local-only scenarios.
    *   **Options:**
        *   A: Direct GitHub Releases integration via MCP.
        *   B: Local Markdown file generation.
        *   C: Hybrid (Local file first, optional MCP push later).
    *   **Key Questions:** Source of truth, summarization detail, triggering, MCP capabilities, error handling, template design.

2.  **[PLAN-RELEASE-NOTES-MCP-WORKFLOW.md](./PLAN-RELEASE-NOTES-MCP-WORKFLOW.md)**
    *   Details the workflow for **Option A (GitHub MCP)**.
    *   Requires hypothetical MCP tools like `get_commits_between_refs`, `create_release`, `update_release`.
    *   Outlines mode responsibilities and specific considerations like authentication and error handling.

3.  **[PLAN-RELEASE-NOTES-LOCAL-WORKFLOW.md](./PLAN-RELEASE-NOTES-LOCAL-WORKFLOW.md)**
    *   Details the workflow for **Option B (Local Files)**.
    *   Relies on `dev-git` for `git log` and `prime-txt` for file creation.
    *   Proposes a structure and TOML schema for a new release notes template (`BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/templates/toml-md/18_release_notes.md`).
    *   Outlines mode responsibilities and considerations like template finalization and file location.

4.  **[PLAN-RELEASE-NOTES-SOURCE-OF-TRUTH.md](./PLAN-RELEASE-NOTES-SOURCE-OF-TRUTH.md)**
    *   Analyzes using Git Commits vs. MDTM Tasks as the primary source.
    *   **Recommendation:** A **Hybrid Approach**, using Conventional Commits as the base and enhancing with linked MDTM task titles/IDs for better context. Requires commit message discipline (including `Refs: TASK-...` footer).

5.  **[PLAN-RELEASE-NOTES-TRIGGERS.md](./PLAN-RELEASE-NOTES-TRIGGERS.md)**
    *   Explores triggering mechanisms: Manual, Semi-Automated (within a broader workflow), Fully Automated (via CI/CD).
    *   **Recommendation:** Start with **Manual Trigger**, then integrate into a **Semi-Automated** "Prepare Release" workflow. Full automation is a long-term consideration requiring external tooling.

6.  **[BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/workflows/WF-RELEASE-NOTES-HYBRID-001.md](../../workflows/WF-RELEASE-NOTES-HYBRID-001.md)**
    *   A draft workflow file implementing the **Hybrid Approach (Option C)** and the **Hybrid Source of Truth**.
    *   Includes steps for input validation, Git history query, commit parsing, summarization (linking MDTM tasks), local file generation, and optional GitHub Release push via MCP.

## Next Steps (Based on Planning)

*   Refine the draft workflow (`BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/workflows/WF-RELEASE-NOTES-HYBRID-001.md`).
*   Finalize and create the release notes template (`BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/templates/toml-md/18_release_notes.md`).
*   Implement necessary Git standards (rules for commits, tags).
*   Implement the workflow logic, potentially involving updates to `dev-git`, `agent-context-resolver`, and coordination modes, plus integration with the GitHub MCP server when available.

*(This README provides a high-level overview. Refer to the individual documents for full details.)*