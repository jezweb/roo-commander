+++
# --- Standard Operating Procedure (SOP) - AI Assisted Git Commit ---
id = "SOP-AI-GIT-COMMIT-V[Version]" # e.g., SOP-AI-GIT-COMMIT-V1
title = "SOP: AI-Assisted Git Commit Preparation and Execution"
status = "draft" # Options: draft, active, under-review, deprecated
created_date = "{{YYYYMMDD}}"
updated_date = "20250514"
version = "1.1" # Version of this SOP document
tags = ["sop", "procedure", "git", "commit", "ai-assisted", "conventional-commits"]
template_schema_doc = ".roo/commander/processes/03_sop_ai_git_commit.md" # Path to its own schema

# --- SOP Context & Ownership ---
# process_owner = "Lead Developer / AI System Architect"
# primary_audience = ["agent-git-committer"] # The AI mode that follows this SOP
# related_workspace_rules = [
#    ".roo/commander/docs/standards/01-naming-conventions.md", # For commit message conventions
#    ".roo/rules/05-os-aware-commands.md" # For executing git commands
# ]
# related_tools_or_scripts = ["Git CLI"]

# --- SOP Specifics ---
# objective_summary = "To define the automated process for an AI agent to analyze staged changes, generate informative conventional commit messages, and execute Git commits."
# trigger_condition = "[e.g., Invoked by a developer or another AI mode with a set of staged files.]"
# key_inputs_for_sop = [
#    "List of currently staged files (from 'git diff --staged --name-only').",
#    "Diff output for staged files (from 'git diff --staged').",
#    "(Optional) Current branch name.",
#    "(Optional) Recent MDTM task IDs or feature descriptions for context."
# ]
# key_outputs_of_sop = [
#    "One or more well-crafted, atomic Git commits.",
#    "Confirmation of successful commit(s) or error reporting."
# ]
+++

# SOP: AI-Assisted Git Commit Preparation and Execution

## 1. Purpose & Objective

*   **Objective:** `{{ objective_summary | default: "To enable an AI agent (e.g., agent-git-committer) to analyze staged code changes, generate compliant and informative conventional commit messages, and execute Git commits, potentially breaking changes into multiple atomic commits if necessary." }}`
*   **Scope:** This SOP covers checking for unstaged changes, prompting for staging if necessary, the automated analysis of staged files, commit message generation, and the execution of `git commit`.
*   **Audience:** Primarily the `[agent-git-committer]` AI mode.
*   **Trigger:** `{{ trigger_condition | default: "This SOP is invoked when the agent is tasked to commit currently staged changes." }}`

## 2. Prerequisites

*   Git CLI is accessible and executable by the AI agent.
*   If files are not already staged, this SOP includes steps to check for unstaged changes and prompt the user for staging.
*   The AI agent has access to read the content of staged files and their diffs.
*   (Optional) Context about the current feature, bug, or MDTM task being worked on is provided to the agent.

## 3. Procedural Steps for AI Agent

### Phase 0: Pre-flight Checks & Staging

0.  **Step 0.1: Check for Initially Staged Files**
    *   Detail: Execute `git diff --staged --name-only` to get a list of all files currently staged.
    *   Output: `[InitialStagedFilesList]`
    *   Logic:
        *   If `[InitialStagedFilesList]` is NOT empty, proceed directly to Phase 1 (Step 1.1).
        *   If `[InitialStagedFilesList]` IS empty, proceed to Step 0.2.

0.  **Step 0.2: Check for Unstaged Changes**
    *   Detail: If no files are initially staged, execute `git status --porcelain` to check for modified or untracked files.
    *   Output: `[UnstagedChangesStatus]`
    *   Logic:
        *   If `[UnstagedChangesStatus]` is empty (no unstaged changes found), report to user/coordinator: "No files are staged and no unstaged changes found. Nothing to commit." End SOP.
        *   If `[UnstagedChangesStatus]` is NOT empty, proceed to Step 0.3.

0.  **Step 0.3: Prompt User to Stage Changes**
    *   Detail: Inform the user/coordinator: "No files are currently staged. Unstaged changes detected. What would you like to do?"
    *   Use `ask_followup_question` with suggestions like:
        *   "Stage all modified and untracked files (`git add .`)"
        *   "Cancel commit process"
    *   Output: `[UserStagingDecision]`

0.  **Step 0.4: Stage Files Based on User Decision**
    *   Detail:
        *   If user chose "Stage all...": Execute `git add .`.
        *   If user chose "Cancel...": Report "Commit process cancelled by user at staging step." End SOP.
    *   Output: Result of `git add` command (if run).
    *   Logic: After successful staging (if chosen), proceed to Phase 1 (Step 1.1). If staging fails or was cancelled, ensure SOP terminates or reports error appropriately.

### Phase 1: Analyze Staged Changes

1.  **Step 1.1: Retrieve List of Staged Files**
    *   Detail: Execute `git diff --staged --name-only` to get a list of all files currently staged for commit.
    *   Output: `[StagedFileList]`

2.  **Step 1.2: Retrieve Diff of Staged Changes**
    *   Detail: Execute `git diff --staged` to get the actual changes within the staged files.
    *   Output: `[StagedDiffContent]`

3.  **Step 1.3: Analyze for Logical Units (Attempt Atomic Commits)**
    *   Detail: Analyze `[StagedFileList]` and `[StagedDiffContent]`.
        *   **If** all changes appear to relate to a single logical unit (one feature, one bug fix, one refactor): Proceed with all staged files for a single commit message.
        *   **If** changes appear to span multiple unrelated logical units (this is harder for AI, may require human guidance or simpler heuristics like changes in disparate high-level directories):
            *   **Option A (Preferred if capable):** Attempt to identify a primary logical unit. Propose to the user/coordinator: "Staged changes seem to cover multiple topics: [Topic A from files X,Y], [Topic B from file Z]. Shall I try to commit [Topic A] first?" If yes, the AI would need a (currently non-standard) way to *selectively commit only a subset of staged files* or request the user to adjust staging. **(This is an advanced capability).**
            *   **Option B (Simpler):** Inform the user/coordinator: "Staged changes appear to cover multiple topics. Please ensure only changes for a single logical unit are staged for this commit, or instruct me to proceed with a general commit message for all staged items." Await guidance. If instructed to proceed with all, acknowledge this might be a less atomic commit.
    *   Output: Decision on whether to proceed with all staged files or a subset (if Option A is feasible). For now, assume proceeding with all staged files for one commit message, or user adjusts staging.

### Phase 2: Generate Commit Message (Conventional Commits)

4.  **Step 2.1: Infer Commit Type**
    *   Detail: Based on `[StagedFileList]` and `[StagedDiffContent]` (and any provided task context):
        *   If changes are only in `docs/` or `*.md` files (excluding `.mode.md` which might be `feat` or `fix`): Suggest `docs`.
        *   If changes involve test files (`test/`, `*.spec.js`, `*.test.ts`): Suggest `test`.
        *   If keywords like "fix", "resolve", "bug", "issue" appear in related task context or diffs: Suggest `fix`.
        *   If keywords like "add", "create", "implement", "feature" appear: Suggest `feat`.
        *   If keywords like "refactor", "simplify", "restructure" appear: Suggest `refactor`.
        *   If only style/linting changes: Suggest `style`.
        *   If build files (`package.json` changes related to deps, CI configs): Suggest `build` or `ci`.
        *   Otherwise, default to `feat` or `chore` if unsure, or ask user/coordinator for type.
    *   Output: `[CommitType]`

5.  **Step 2.2: Infer Scope (Optional)**
    *   Detail: Analyze `[StagedFileList]`. If all files are within a specific component directory (e.g., `.roo/commander/modes/manager-data-product/`, `src/auth/`), suggest that directory name (or a shortened version) as the `[CommitScope]`.
    *   Output: `[CommitScope]` (can be empty).

6.  **Step 2.3: Generate Subject Line**
    *   Detail: Summarize the changes from `[StagedDiffContent]` into a concise imperative statement (max 50-72 chars).
        *   Example: If adding a function `calculateTotal`, subject could be "add calculateTotal function".
    *   Combine: `[GeneratedSubject]` = `[CommitType]([CommitScope]): [Imperative Summary]`
    *   Output: `[GeneratedSubject]`

7.  **Step 2.4: Generate Body (Optional but Recommended)**
    *   Detail: Elaborate on the "what" and "why" of the changes.
        *   List key files changed if not too many.
        *   If MDTM Task ID or issue number was provided as context, reference it (e.g., "Relates to TASK-XYZ-123").
        *   **Enrichment (Your Idea):** If the commit relates to a specific module/feature with a known `README.md` or design document (path provided as context or inferred from `[StagedFileList]`):
            *   Read key sections (e.g., objective, summary) of that related document.
            *   Incorporate a sentence or two into the commit body explaining how this change contributes to that module/feature's purpose.
            *   Example: "This change implements the core strategy definition phase as outlined in the data-product-strategist design document."
    *   Output: `[GeneratedBody]`

8.  **Step 2.5: Identify Breaking Changes (Optional)**
    *   Detail: Analyze diff for indications of breaking changes (e.g., API signature changes, major dependency version bumps). If found, prepare a `BREAKING CHANGE:` footer. This is an advanced analysis.
    *   Output: `[GeneratedFooter]` (can be empty).

9.  **Step 2.6: Propose Commit Message**
    *   Detail: Present the full generated commit message (`[GeneratedSubject]`, `[GeneratedBody]`, `[GeneratedFooter]`) to the user/coordinator for review and approval using `ask_followup_question`.
    *   Suggestions: "Approve commit message", "Edit commit message", "Cancel commit".
    *   If "Edit", allow user to provide new message. If "Cancel", stop.
    *   Output: `[ApprovedCommitMessage]`

### Phase 3: Execute Commit

10. **Step 3.1: Execute `git commit`**
    *   Detail: Use the `[ApprovedCommitMessage]` to make the commit.
    *   Tool(s) Used: Git CLI via `execute_command`.
    *   Instruction/Command: `git commit -m "[Subject Line from ApprovedMessage]" -m "[Body Line 1 from ApprovedMessage]" -m "[Body Line 2 ...etc.]"` (Handle multi-line messages correctly for the command).
    *   Output: Result of `execute_command` (stdout, stderr, exit_code).

11. **Step 3.2: Report Outcome**
    *   Detail:
        *   If `exit_code` is 0: Report "Successfully committed changes with message: '[ApprovedCommitMessage]'" to user/coordinator.
        *   If `exit_code` is not 0: Report "Error during commit. Exit code: [exit_code]. Stderr: [stderr]."
    *   Output: Status report.

## 5. Expected Outcomes / Deliverables

*   One or more Git commits made with AI-assisted, conventionally formatted messages.
*   Clear confirmation of success or detailed error reporting.

## 6. Error Handling & Escalation

*   If `git diff` commands fail, report error.
*   If commit message generation is consistently poor, the agent's internal logic/prompting for this SOP needs review.
*   If `git commit` fails, report the full error from Git. The user/coordinator will need to resolve underlying Git issues (e.g., conflicts, hooks failing).

## 7. SOP Maintenance & Review

*   **Process Owner:** `AI System Architect / Lead Developer`
*   This SOP should be reviewed and updated as the AI agent's capabilities for code analysis and natural language generation improve.

This SOP provides a framework for an AI agent to intelligently assist with or automate the Git commit process.