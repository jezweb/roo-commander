+++
id = "CTX-GIT-INTEGRATION-IMPL-GUIDE"
title = "Roo Commander: Enhanced Git Integration - Implementation Guide"
context_type = "implementation_guide"
scope = "Specific changes needed across modes and files"
target_audience = ["ai_dev_team", "roo-commander"]
granularity = "detailed"
status = "proposal"
last_updated = "2025-04-21"
tags = ["git", "integration", "implementation", "checklist", "refactoring", "ruru"]
+++

# Roo Commander: Enhanced Git Integration - Implementation Guide

This document outlines the specific changes required to implement enhanced Git integration.

**1. Add/Update Rules (`.roo/rules/`):**
*   Create/Update `08-git-commit-standard.md` with the full commit message standard (Conventional Commits + detailed body + mandatory task reference footer).
*   Create `09-git-branching-standard.md` defining the task branch naming convention (`type/TASK-ID-description`).
*   Create `10-git-tagging-standard.md` defining release tag format (`vX.Y.Z`, annotated) and purpose.
*   Create `11-git-workflow-integration-policy.md` defining the policy/heuristics for *when* Commander/Leads should propose creating task branches or initiating release tagging.

**2. Update `dev-git` Mode:**
*   **`dev-git.mode.md`:**
    *   Update `system_prompt`: Explicitly state responsibility for formatting commit messages according to Rule `08`, executing branching commands according to Rule `09`, and tagging according to Rule `10`. Mention its role in executing read-only commands like `log`, `show`, `blame` for other modes.
*   **KB (`.ruru/modes/dev-git/kb/`):**
    *   Add examples for constructing detailed commit messages.
    *   Add examples for branch creation/switching based on the standard.
    *   Add examples for creating/pushing annotated tags.
    *   Update safety protocols regarding branch/tag operations.

**3. Update `roo-commander` Mode:**
*   **Rules (`.roo/rules-roo-commander/`):**
    *   Reference the new Git standards (`08`, `09`, `10`, `11`).
    *   In `03-delegation-procedure-rule.md`: Add step to consider creating a task branch (following Rule `11` policy) before complex MDTM delegation.
    *   In appropriate workflows (e.g., build/release): Add steps to initiate release tagging following Rule `10` & `11`.
*   **KB (`.ruru/modes/roo-commander/kb/`):**
    *   Update relevant workflows (e.g., `WF-CREATE-ROO-CMD-BUILD-001.md`) to include tagging steps.

**4. Update Context/Analysis Modes (e.g., `agent-context-resolver`, `dev-solver`, `dev-fixer`):**
*   **`*.mode.md` (System Prompt/Capabilities):** Add capability to query Git history using `execute_command` (`log`, `show`, `blame`) for contextual analysis or debugging.
*   **KB (`*.kb/*.md`):** Add examples or procedures for using Git commands to gather context (e.g., finding commit rationale, identifying code authors).

**5. Update Developer Modes (e.g., `framework-*`, `dev-*`, `util-*`):**
*   **`*.mode.md` (System Prompt/Guidelines):** Instruct modes to provide necessary information (type, scope, subject, task IDs, body details) when requesting a commit via Commander/`dev-git`. Instruct modes to work on the correct feature branch if one is provided during task delegation.

**6. Update Documentation:**
*   Create/Update `.ruru/docs/standards/git-workflows.md` detailing the commit, branch, and tag standards.
*   Update relevant mode documentation to reflect new Git interaction capabilities/responsibilities.

**7. Testing:**
*   Test the branch creation workflow.
*   Test the commit message formatting by `dev-git`.
*   Test the release tagging workflow.
*   Test context retrieval modes using `git log`/`show`/`blame`.