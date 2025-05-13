+++
id = "CTX-GIT-INTEGRATION-CONCEPTS"
title = "Roo Commander: Enhanced Git Integration - Core Concepts & Standards"
context_type = "reference"
scope = "Definitions of Git standards and interaction patterns"
target_audience = ["ai_dev_team", "roo-commander", "all"]
granularity = "detailed"
status = "proposal"
last_updated = "2025-04-21"
tags = ["git", "integration", "standards", "commit-messages", "branching", "tagging", "conventional-commits", "ruru"]
+++

# Roo Commander: Enhanced Git Integration - Core Concepts & Standards

This document defines the standards and concepts for enhanced Git usage within Roo Commander.

## 1. Commit Message Standard (Full)

*(This expands on the simple rule added earlier)*

*   **Format:** Adhere strictly to Conventional Commits (<https://www.conventionalcommits.org/>).
    ```
    type(scope): subject

    [optional body]

    [optional footer(s)]
    ```
*   **Subject:** Concise, present tense, max 72 chars.
*   **Body (Encouraged):**
    *   **Motivation:** Explain *why* the change is needed (reference task/issue).
    *   **Implementation:** Briefly summarize *how* the change was made (key changes, approach).
    *   Separate paragraphs with blank lines.
*   **Footers (Mandatory):**
    *   **Task Reference:** `Refs: TASK-TYPE-ID` or `Closes: TASK-TYPE-ID`. Multiple allowed. **Must** be present.
    *   **Breaking Changes:** Use `BREAKING CHANGE: description` for incompatible changes.

*   **Responsibility:** `dev-git` constructs messages based on info from the delegating mode. Other modes must provide type, scope, subject, task IDs, and body details.

## 2. Branching Standard

*   **Naming Convention:** Branches created for specific tasks **MUST** follow the pattern: `type/TASK-ID-short-description`
    *   `type`: e.g., `feature`, `fix`, `refactor`, `chore`, `docs`.
    *   `TASK-ID`: The full MDTM task ID (e.g., `TASK-FEAT-123`).
    *   `short-description`: Kebab-case summary (e.g., `login-ui`).
    *   **Example:** `feature/TASK-FEAT-123-login-ui`
*   **Strategy:** Aim for short-lived task branches that are merged back into a main development branch (e.g., `main` or `develop`) upon completion.

## 3. Tagging Standard

*   **Purpose:** Mark specific commits representing releases or significant milestones.
*   **Format:** Use **annotated tags** (`git tag -a`) for releases.
*   **Naming:** Use Semantic Versioning (`vX.Y.Z`) for release tags (e.g., `v1.0.0`, `v1.1.0-beta.1`).
*   **Workflow:** Tagging should be part of the release/build workflow (e.g., `WF-CREATE-ROO-CMD-BUILD-001.md`). Tags must be pushed explicitly (`git push --tags`).

## 4. AI Mode Interaction with Git

*   **`dev-git` Role:** Remains the primary executor of Git commands (`add`, `commit`, `push`, `pull`, `branch`, `tag`). It is responsible for correctly formatting commits and executing commands safely based on instructions.
*   **Context Retrieval (`agent-context-resolver`, Specialists):**
    *   Can use `execute_command` to run read-only Git commands for analysis:
        *   `git log --pretty=fuller -- <file_path>` (Detailed history of a file).
        *   `git log -S'<search_string>'` (Find commits introducing/removing a string).
        *   `git show <commit_hash>` (Show details of a specific commit, including diff and full message).
        *   `git blame <file_path>` (Show authorship for each line).
    *   Must parse the output to extract relevant information (e.g., rationale from commit body, author of a specific line).
*   **Workflow Triggering (`roo-commander`, Leads):**
    *   Can initiate the creation of task branches via `dev-git` before delegating substantial MDTM tasks.
    *   Can initiate release tagging via `dev-git` as part of a release workflow.

## 5. Information Flow Example

1.  User requests a new feature.
2.  `roo-commander` creates MDTM Task `TASK-FEAT-123`.
3.  `roo-commander` (optional, based on policy) asks user about creating a branch.
4.  If yes, `roo-commander` delegates to `dev-git`: "Create branch `feature/TASK-FEAT-123-new-feature`".
5.  `roo-commander` delegates implementation task to `dev-react`, referencing `TASK-FEAT-123` and ensuring `dev-react` knows to work on the correct branch (or `dev-git` checks it out).
6.  `dev-react` completes work, asks `roo-commander` to commit.
7.  `roo-commander` instructs `dev-git`: "Commit changes with type `feat`, subject `Implement new feature UI`, body `Adds component X and service Y to enable new feature.`, task ID `TASK-FEAT-123`."
8.  `dev-git` runs `git add .` and `git commit -m "feat: Implement new feature UI\n\nAdds component X and service Y to enable new feature.\n\nRefs: TASK-FEAT-123"`.
9.  Later, `dev-fixer` investigates a bug using `git blame` and `git show` (via `execute_command`) to understand the original change related to `TASK-FEAT-123`.