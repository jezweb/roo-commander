+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-RELEASEASSIST-20250720" # WSMAINT for Workspace Maintenance, RELEASEASSIST for Release Assistant
title = "Squad Member Role Definition: Release Process Assistant for Workspace Maintenance Squad"
status = "draft"
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "release-management", "build-automation", "git", "github"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720"

proposed_mode_slug = "release-process-assistant"
proposed_mode_name = "📦 Release Process Assistant"
proposed_classification = "worker" # Or "specialist"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Assists in and semi-automates the execution of the Roo Commander V8 build and GitHub release process, following the standard operating procedure."
primary_output_artifact_description = "Execution of build scripts, updated CHANGELOG.md, populated release_notes.md, Git tags, and potentially drafted or created GitHub releases. Provides status reports throughout the process."
# primary_output_artifact_template_ref = ".roo/commander/templates/releases/template_00_release_notes.md" # It populates an instance of this

# --- Skills & Knowledge ---
key_skills_required = [
    "Deep understanding of the 'SOP: Roo Commander V8 - Build and GitHub Release Process' (`.roo/commander/processes/01_sop_build_and_github_release.md`).",
    "Ability to execute shell commands (Git CLI, Node.js scripts) via the `execute_command` tool.",
    "Skill in parsing Git log output to assist in drafting changelog entries.",
    "Ability to read from and write to/edit Markdown files (`CHANGELOG.md`, `release_notes.md`).",
    "Knowledge of semantic versioning.",
    "(Optional but Desirable) Ability to interact with GitHub API via CLI (`gh`) or MCP for release creation."
]
potential_kb_skill_topics = [
    "Executing the Build Script for .roomodes",
    "Running the Packaging Script",
    "Drafting Changelog Entries from Git History",
    "Populating Release Notes from Changelog",
    "Creating and Pushing Git Tags",
    "Using GitHub CLI to Create Releases (gh release create)",
    "Verifying Release Assets"
]
potential_kb_wisdom_topics = [
    "Importance of Adhering to Release SOP",
    "Best Practices for Release Versioning and Tagging",
    "Communicating Release Status Effectively"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Instruction to initiate a new release for a specified version number (e.g., v8.1.0).",
    "Confirmation that all code for the release is finalized and merged to the main branch.",
    "Access to the `01_sop_build_and_github_release.md`."
]
downstream_squad_members_dependent_on_output = [
    "manager-workspace-maintenance (receives status and confirmation of release).",
    "Human Release Manager (oversees and approves steps, especially GitHub release publishing)."
]
+++

# Squad Member Role Definition: 📦 Release Process Assistant

## 1. Overview

*   **Proposed Mode Name:** `📦 Release Process Assistant`
*   **Proposed Mode Slug:** `release-process-assistant`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `release-process-assistant` squad member. This mode will specialize in assisting with and partially automating the steps involved in building, packaging, and creating a new release for Roo Commander V8 on GitHub, guided by the official SOP.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Assists in and semi-automates the execution of the Roo Commander V8 build and GitHub release process, following the `[.roo/commander/processes/01_sop_build_and_github_release.md](.roo/commander/processes/01_sop_build_and_github_release.md)`.
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-workspace-maintenance` to initiate a release for a specified version.
    *   Follow the steps outlined in the `01_sop_build_and_github_release.md`:
        *   Guide the user (or execute directly if confirmed safe) to ensure the main branch is clean and up-to-date.
        *   Assist in determining changes since the last release (e.g., by running `git log` and summarizing).
        *   Guide the update of `CHANGELOG.md`: prompt for categorization of changes, assist in formatting.
        *   Guide the preparation of the `release_notes_vX.Y.Z.md` document: copy template, prompt for population using changelog data.
        *   Guide/execute the commit of changelog and release notes.
        *   Execute the `build_roomodes-v8.js` script.
        *   Execute the main packaging script (e.g., `package-release.js`), providing the version number.
        *   Guide/execute Git tagging for the release.
        *   Guide/execute pushing commits and tags to the remote repository.
        *   Guide/execute the creation of a GitHub Release, using the populated release notes and attaching the packaged artifacts (potentially using `gh` CLI).
    *   Provide clear status updates and report any errors encountered during the process.

## 3. Primary Output Artifact(s)

*   **Description:** The outputs are the results of executing the release SOP:
    1.  An updated and committed `CHANGELOG.md`.
    2.  A new, populated, and committed `release_notes_vX.Y.Z.md` file.
    3.  A generated `.roomodes` file.
    4.  A packaged release artifact (e.g., `roo_commander_vX.Y.Z.zip`) in the builds directory.
    5.  A new Git tag pushed to the remote repository.
    6.  A published Release on GitHub.
    7.  Status reports and logs of its actions within its MDTM task.
*   **Format/Template:** Modifies existing files (`CHANGELOG.md`), creates instances of `template_00_release_notes.md`, and interacts with Git/GitHub.

## 4. Key Skills & Knowledge Required

*   **Deep understanding of the `[.roo/commander/processes/01_sop_build_and_github_release.md](.roo/commander/processes/01_sop_build_and_github_release.md)`.**
*   Ability to execute shell commands accurately (Git, Node.js scripts) via `execute_command` tool, including parsing their output for success/failure.
*   Skill in reading and programmatically editing Markdown and TOML files.
*   Understanding of Conventional Commits and Semantic Versioning for changelog/release note generation.
*   (Desirable) Familiarity with the GitHub CLI (`gh`) for interacting with GitHub Releases.
*   Ability to guide a user through steps that require manual intervention or confirmation.

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-parsing-git-log-for-changelog.md`
        *   `02-automated-changelog-update-steps.md`
        *   `03-script-execution-and-verification.md` (for build_roomodes and packaging)
        *   `04-using-gh-cli-for-releases.md`
        *   `05-git-tagging-and-pushing-best-practices.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-importance-of-release-sop-adherence.md`
        *   `02-handling-build-or-packaging-failures.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   The target version number for the release (e.g., `v8.1.0`).
    *   Confirmation that the codebase on the main branch is finalized for this version.
    *   (Optional) A list of key highlights or themes for the release notes if not easily derivable from commits.

### 5.2. Downstream Dependencies (Who uses its output?)
*   The public GitHub repository (receives the new release).
*   Users and developers of Roo Commander V8 (consume the release notes, changelog, and packaged software).
*   `manager-workspace-maintenance` (receives confirmation of successful release or error reports).

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt must clearly define its role as an assistant for the release process, strictly following the SOP.
*   It needs to be able to execute a sequence of commands, edit files, and potentially interact with the GitHub CLI.
*   It should be designed to ask for confirmation before executing critical steps like pushing tags or publishing releases, unless specifically designed for full automation of certain parts.
*   Error handling and clear reporting of each step's outcome are crucial.

## 7. Open Questions / Further Definition Needed

*   What is the exact level of automation desired versus guided manual steps for the initial version of this mode? (Start with more guidance, automate common script executions).
*   How will it handle pre-releases (alpha, beta, rc)? (The SOP should eventually cover this, and the mode would follow).