+++
# --- Basic Metadata ---
id = "STANDARD-GIT-WORKFLOW-V1"
title = "Standard: Git Workflow and Branching Strategy"
context_type = "standards_document"
scope = "Defines the standard Git workflow, branching model, commit message conventions, and Pull Request (PR) process for the development of the Roo Commander system itself."
target_audience = ["developers", "contributors"] # Anyone contributing code to Roo Commander
granularity = "development_process_standard"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "1.0"
tags = ["standards", "git", "workflow", "branching", "commits", "pull-requests", "development-process"]
related_context = [
    ".roo/commander/processes/03_sop_ai_git_commit.md", # SOP for AI-assisted commits (for projects *using* RC, not RC itself)
    ".roo/commander/templates/project_root/template_CHANGELOG.md" # Changelog is updated based on commits
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Lead Developer / Core Team"
# review_cycle = "As needed, or semi-annually"
+++

# Standard: Git Workflow and Branching Strategy

## 1. Purpose

To establish a consistent and efficient Git workflow, branching model, commit message convention, and Pull Request (PR) process for the development and maintenance of the Roo Commander system. This standard aims to:

*   Ensure a stable main branch representing production-ready code.
*   Facilitate parallel development of features and fixes.
*   Enable effective code review.
*   Maintain a clean and understandable commit history.
*   Streamline the release process.

## 2. Branching Model: GitHub Flow (Simplified)

We will adopt a simplified version of the GitHub Flow model.

### 2.1. `main` Branch
*   **Purpose:** The `main` branch is the definitive branch representing the latest stable, production-ready (or release-candidate) version of Roo Commander.
*   **Protection:**
    *   Direct commits to `main` **MUST** be disallowed or heavily restricted.
    *   Changes are merged into `main` only through Pull Requests (PRs) that have been reviewed and approved.
    *   (Optional but Recommended) Require status checks (e.g., automated tests, linters) to pass before merging PRs into `main`.
*   **Tagging:** All releases **MUST** be tagged on the `main` branch.

### 2.2. Feature Branches
*   **Purpose:** All new features, improvements, bug fixes, and experimental work **MUST** be done on separate feature branches (also known as topic branches).
*   **Creation:**
    *   Branches **SHOULD** be created from the latest `main` branch.
    *   Command: `git checkout main && git pull && git checkout -b [branch-name]`
*   **Naming Convention:**
    *   Use a descriptive, `kebab-case` name.
    *   Prefix with type (optional but helpful for organization):
        *   `feature/[feature-name]` (e.g., `feature/new-squad-onboarding-mode`)
        *   `fix/[issue-description]` (e.g., `fix/mdtm-parsing-error`)
        *   `chore/[task-description]` (e.g., `chore/update-readme-style`)
        *   `docs/[document-name]` (e.g., `docs/add-style-guide`)
        *   `refactor/[area-being-refactored]` (e.g., `refactor/mode-template-toml`)
    *   Reference an issue number if applicable (e.g., `feature/123-user-authentication`).
*   **Scope:** Feature branches should be short-lived and focused on a single logical unit of work.
*   **Pushing:** Developers **SHOULD** push their feature branches to the remote repository regularly to share progress and for backup.

### 2.3. Release Branches (Optional, for larger releases)
*   **Purpose:** For preparing a major or minor release, a `release/vX.Y.Z` branch **MAY** be created from `main`.
*   **Activities:** Only bug fixes, documentation updates, and other release-specific changes are made on a release branch. No new features.
*   **Merging:** Once ready, the release branch is merged into `main` (and tagged), and then `main` can be merged back into active feature branches if necessary.
*   *For simpler patch or minor releases, changes might be prepared on a feature branch and merged directly to `main` via PR.*

## 3. Commit Message Conventions

All commit messages **MUST** follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This provides a standardized, human- and machine-readable format for commit messages.

### 3.1. Format:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 3.2. `<type>`:
*   **`feat`**: A new feature for the user or system.
*   **`fix`**: A bug fix.
*   **`docs`**: Documentation only changes.
*   **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
*   **`refactor`**: A code change that neither fixes a bug nor adds a feature.
*   **`perf`**: A code change that improves performance.
*   **`test`**: Adding missing tests or correcting existing tests.
*   **`build`**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
*   **`ci`**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
*   **`chore`**: Other changes that don't modify `src` or `test` files (e.g., updating build tasks, package manager configs).

### 3.3. `[optional scope]`:
*   A noun describing the section of the codebase affected (e.g., `mode-template`, `mdtm-parser`, `roo-commander-kb`).

### 3.4. `<description>`:
*   Concise description of the change in the imperative mood, present tense.
*   Not capitalized.
*   No period at the end.

### 3.5. `[optional body]`:
*   Longer explanatory text. Provide context, rationale, and details about the change.
*   Use imperative mood.
*   Explain *what* and *why* vs. *how*.

### 3.6. `[optional footer(s)]`:
*   **Breaking Changes:** Start with `BREAKING CHANGE:` followed by a description of the breaking change.
*   **Issue References:** `Fixes #123`, `Closes #456`.

### 3.7. Example Commit Message:
```feat(lang): add polish language

Polish translation of the UI.

Closes #123
```

## 4. Pull Request (PR) Process

1.  **Create Feature Branch:** As described in Section 2.2.
2.  **Develop & Commit:** Make changes on the feature branch, adhering to commit message conventions. Keep commits atomic and focused.
3.  **Push Branch:** Push the feature branch to the remote repository.
4.  **Open Pull Request:**
    *   Open a PR from your feature branch targeting the `main` branch (or a `release/*` branch if applicable).
    *   **Title:** Should be clear and descriptive, often similar to a good commit message summary.
    *   **Description:**
        *   Summarize the purpose of the PR.
        *   Explain the changes made.
        *   Link to any relevant issues or MDTM tasks.
        *   Provide testing instructions or evidence of testing.
        *   Highlight any potential impacts or areas needing special attention during review.
5.  **Code Review:**
    *   At least one other developer (or a designated reviewer AI mode if we implement one) **MUST** review the PR.
    *   Reviewers should check for correctness, adherence to standards (including this Git workflow, coding style, documentation style), and potential issues.
    *   Provide constructive feedback.
6.  **Address Feedback:** The PR author addresses any feedback by making further commits to the feature branch.
7.  **Approval & Merge:**
    *   Once approved (and any required status checks pass), the PR can be merged into the target branch (`main`).
    *   **Prefer squash merges or rebase merges** to keep the `main` branch history clean and linear, with each PR resulting in a single, meaningful commit on `main`. The commit message for the squash merge should be well-crafted, summarizing the PR's intent (often derived from the PR title and body).
8.  **Delete Feature Branch:** After merging, the feature branch **SHOULD** be deleted from the remote repository to keep the repository tidy.

## 5. Release Tagging

*   All releases (e.g., `v8.0.0`, `v8.1.0`, `v8.1.1`) **MUST** be marked with an annotated Git tag on the `main` branch at the commit corresponding to the release.
*   Tag naming **MUST** follow Semantic Versioning (e.g., `vX.Y.Z`).
*   Refer to `[.roo/commander/docs/standards/10-roo-commander-version-naming-convention.md](.roo/commander/docs/standards/10-roo-commander-version-naming-convention.md)`.

## 6. Rationale

*   **Stability:** Protecting the `main` branch ensures it always represents a working state.
*   **Collaboration:** Feature branches allow multiple developers to work in parallel without conflicts.
*   **Code Quality:** PRs and code reviews improve the quality and consistency of the codebase.
*   **Traceability:** Conventional Commits and a clean history make it easier to understand changes, generate changelogs, and debug issues.
*   **Release Management:** A clear branching and tagging strategy simplifies the release process.

Adherence to this Git workflow is essential for the collaborative and sustainable development of Roo Commander.