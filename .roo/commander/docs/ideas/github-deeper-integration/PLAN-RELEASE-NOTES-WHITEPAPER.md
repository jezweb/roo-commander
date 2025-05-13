+++
id = "PLAN-RELEASE-NOTES-WHITEPAPER-V1"
title = "Planning: Whitepaper - Standardized Release Notes / Changelog Generation for Roo Commander Users"
context_type = "planning"
scope = "High-level goals, options, and considerations for automating release note generation for projects managed with Roo Commander" # Updated scope
target_audience = ["prime-coordinator", "roo-commander", "core-architect", "all-users"] # Updated audience
granularity = "overview"
status = "draft"
last_updated = "2025-04-25" # Use current date
tags = ["planning", "release-notes", "changelog", "github", "automation", "workflow", "mcp", "user-feature"] # Added tag
related_context = [
    "../enhanced-git-integration/CTX-GIT-INTEGRATION-OVERVIEW.md",
    "../enhanced-git-integration/CTX-GIT-INTEGRATION-IMPL-GUIDE.md",
    ".roo/rules/07-git-commit-standard-simplified.md",
    "./github-official-mcp-integration.md" # Added reference to MCP doc
    ]
template_schema_doc = ".ruru/templates/toml-md/17_feature_proposal.README.md" # Using feature proposal as a base for planning doc structure
+++

# Whitepaper: Standardized Release Notes / Changelog Generation

## 1. Problem Statement

Currently, there is no standardized process for documenting changes (features, fixes, etc.) made within projects managed by Roo Commander in a format suitable for release notes or changelogs. This makes it difficult for users to track progress between versions, communicate changes effectively, and generate official release documentation for their own projects. This feature aims to provide a robust solution applicable to all Roo Commander users.

## 2. Goals

*   Establish a standardized, potentially automated workflow for generating release notes/changelogs applicable to any project using Roo Commander.
*   Leverage existing project data (Git history following Conventional Commits, MDTM tasks) as the primary source for these notes.
*   Support optional integration with standard Git/GitHub practices (tags, releases) via an MCP.
*   Provide a robust local file generation option for projects not using or wanting GitHub integration.
*   Ensure the process is maintainable and usable by AI modes with minimal required user intervention.

## 3. Proposed High-Level Options

*(User Feedback leans towards Option C as a sensible approach)*

### Option A: GitHub Releases Integration (via MCP)

*   **Concept:** A workflow queries Git history (between specified tags/commits) using Conventional Commit messages and linked MDTM tasks. It summarizes these changes and uses the GitHub MCP server to create/update a draft GitHub Release with formatted release notes.
*   **Pros:** Aligns with standard GitHub practices; release notes are in the canonical location; leverages upcoming MCP capabilities.
*   **Cons:** Dependent on GitHub MCP server availability and functionality; requires user configuration for GitHub integration.
*   **Key Components:**
    *   Workflow definition (`.ruru/workflows/`).
    *   Enhanced Git querying (via `dev-git` or MCP).
    *   Summarization logic (potentially `agent-context-resolver` or similar).
    *   GitHub MCP tools for release creation/updates (see `./github-official-mcp-integration.md`).
    *   Standardized Git tagging rule/process.

### Option B: Local File Generation

*   **Concept:** A workflow queries Git history and/or MDTM tasks, summarizes changes, and generates a formatted Markdown file within the repository (e.g., `docs/release-notes/vX.Y.Z.md` or similar user-configurable path).
*   **Pros:** Works entirely within the current toolset; provides a default non-GitHub option; files are version controlled.
*   **Cons:** Creates an intermediate artifact that needs manual copying to official release notes if using GitHub Releases separately; potential for duplication if not managed carefully.
*   **Key Components:**
    *   Workflow definition (`.ruru/workflows/`).
    *   New TOML+MD template for release notes files.
    *   Enhanced Git querying (via `dev-git`).
    *   Summarization logic.
    *   File writing delegated to `prime-txt` or similar.

### Option C: Hybrid Approach (Preferred)

*   **Concept:** Implement Option B first as the core functionality. Later, enhance the workflow to *optionally* push the generated content to GitHub Releases via the MCP if configured and available.
*   **Pros:** Provides immediate value with local files; offers a clear path to GitHub integration; supports both GitHub and non-GitHub scenarios robustly.
*   **Cons:** Requires managing both local files and potential GitHub sync; slightly more complex workflow logic to handle both cases.

## 4. Key Considerations & Open Questions

*   **Source of Truth:** Release notes should derive from a combination of Git commit messages (following Conventional Commits) and completed MDTM tasks. Need to define the merging/prioritization logic. *(User agrees with combination approach)*.
*   **Summarization Detail:** How detailed should the automated summary be? Aim for concise yet informative (more than a sentence, less than a page per release), using good Markdown formatting (lists, links) and potentially Mermaid diagrams if applicable. Manual refinement should be minimized, perhaps tied to a confidence score based on clarity of source data (commits, tasks). Consider summarizing file changes as additional context. *(Refined based on feedback)*.
*   **Triggering Mechanism:** How should release notes generation be triggered? Should support both manual invocation (e.g., via command/prompt) and automated triggering integrated into workflows (e.g., on tag creation, pre-release build step). *(Refined based on feedback)*.
*   **GitHub MCP Capabilities:** Refer to the capabilities outlined in `.ruru/planning/github-deeper-integration/github-official-mcp-integration.md`. The workflow needs to utilize tools for querying commits, creating/updating releases, etc. *(Updated based on feedback)*.
*   **Error Handling:** How to handle missing task references, non-standard commits, or MCP failures? Options include: flagging items for manual review, attempting summarization based on available data (e.g., commit message only), consulting an external model (e.g., Vertex AI MCP) for interpretation, asking the user, or improving coordinator checks on MDTM task completion status before generation. *(Expanded based on feedback)*.
*   **Template Design:** What metadata and structure are needed for the local release notes template (Option B/C)? Research GitHub release note standards/best practices (potentially using Vertex AI MCP's `explain_topic_with_docs` or `answer_query_websearch` tools) to inform the design. *(Updated based on feedback)*.

## 5. Next Steps (Proposal)

1.  Confirm Option C (Hybrid) as the target approach.
2.  Detail the specific capabilities required from the GitHub MCP server based on `.ruru/planning/github-deeper-integration/github-official-mcp-integration.md`.
3.  Draft the workflow logic for both local generation and optional GitHub push.
4.  Define the TOML+MD template for local release notes files, incorporating research findings.
5.  Identify and plan implementation tasks for required enhancements to existing modes (e.g., `dev-git`, context agents, coordinators).