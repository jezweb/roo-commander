+++
# --- Standard Operating Procedure (SOP) ---
id = "SOP-RCV8-BUILD-RELEASE-V1"
title = "SOP: Roo Commander V8 - Build and GitHub Release Process"
status = "draft" # Initial draft, will become active once finalized
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["sop", "procedure", "build", "release", "github", "roo-commander-v8", "nodejs", "packaging"]
template_schema_doc = ".roo/commander/templates/processes/template_00_sop_generic.README.md" # This SOP uses the generic SOP template

# --- SOP Context & Ownership ---
process_owner = "Lead Developer / Release Manager"
primary_audience = ["Developers performing a release", "Release Manager", "Future Build Automation Mode"]
related_workspace_rules = [
    ".roo/commander/docs/standards/01-naming-conventions.md", # For versioning, tagging
    ".roo/commander/docs/standards/10-roo-commander-version-naming-convention.md" # Specific RC versioning
]
related_tools_or_scripts = [
    ".roo/commander/scripts/build_release/build_config.json", # Assumed config for the script
    ".roo/commander/scripts/build_release/package-release.js", # Hypothetical Node.js packaging script
    ".roo/commander/scripts/build_roomodes-v8.js", # Existing script
    "Git CLI",
    "GitHub CLI (gh)" # Optional, but useful for release creation
]

# --- SOP Specifics ---
objective_summary = "To define the standard, repeatable process for building Roo Commander V8, packaging its distributable components, updating changelogs, creating release notes, and publishing a new release on GitHub."
frequency_of_execution = "Per planned release (e.g., for new minor or patch versions, or major versions)."
estimated_duration = "~1-2 hours (manual/semi-automated)"
key_inputs_for_sop = [
    "Finalized codebase for the release version on the main branch.",
    "Agreement on the new version number (X.Y.Z).",
    "Aggregated list of changes since the last release (from Git history/MDTM tasks)."
]
key_outputs_of_sop = [
    "Updated CHANGELOG.md in the repository.",
    "A populated release_notes_vX.Y.Z.md document.",
    "A packaged distributable archive (e.g., roo_commander_vX.Y.Z.zip).",
    "A tagged commit in Git for the release.",
    "A published Release on GitHub with notes and assets."
]
+++

# SOP: Roo Commander V8 - Build and GitHub Release Process

## 1. Purpose & Objective

*   **Objective:** To define the standard, repeatable process for building Roo Commander V8, packaging its distributable components (primarily the `.roo/` structure with necessary templates, rules, and mode definitions), updating changelogs, creating release notes, and publishing a new release on GitHub.
*   **Scope:** This SOP covers all steps from code finalization for a release candidate to the public announcement of the new GitHub release. It assumes all development and testing for the version are complete.
*   **Audience:** Developers responsible for performing releases, Release Manager.
*   **Frequency:** Per planned release.

## 2. Prerequisites

*   All features and bug fixes intended for this release are merged into the main development branch (e.g., `main` or `develop`).
*   All automated tests (if any) are passing on the release candidate commit.
*   The new version number (e.g., `8.1.0`) has been decided according to Semantic Versioning and the `[.roo/commander/docs/standards/10-roo-commander-version-naming-convention.md](.roo/commander/docs/standards/10-roo-commander-version-naming-convention.md)`.
*   Node.js environment is set up for running build scripts.
*   Git CLI is configured and authenticated.
*   (Optional but Recommended) GitHub CLI (`gh`) is installed and authenticated for easier GitHub Release creation.
*   Access to update the project's GitHub repository.

## 3. Roles & Responsibilities (Optional)

*   **Release Manager (or Lead Developer):** Responsible for overseeing and executing this SOP.
*   **Development Team:** Provides input for changelog/release notes based on their contributions.

## 4. Procedural Steps

### Phase 1: Pre-Release Preparations

1.  **Step 1.1: Ensure Main Branch is Up-to-Date and Clean**
    *   Detail: Checkout the main development branch (e.g., `main`). Pull the latest changes. Ensure there are no uncommitted local changes.
    *   Tool(s) Used: Git CLI
    *   Instruction/Command: `git checkout main && git pull && git status`
    *   Verification: `git status` shows "working tree clean".

2.  **Step 1.2: Determine Changes Since Last Release**
    *   Detail: Identify all significant commits, features, fixes, and changes since the last release tag.
    *   Tool(s) Used: Git CLI, review of MDTM tasks or project board.
    *   Instruction/Command: `git log [last_release_tag]..HEAD --oneline` (and more detailed review).
    *   Verification: A comprehensive list of changes is compiled.

3.  **Step 1.3: Update `CHANGELOG.md`**
    *   Detail: Edit the `CHANGELOG.md` file in the project root.
        *   Move entries from the `[Unreleased]` section to a new version heading: `## [vX.Y.Z] - YYYY-MM-DD`.
        *   Categorize changes under `Added`, `Changed`, `Fixed`, etc.
        *   Ensure descriptions are human-readable. Reference MDTM task IDs or PR numbers where helpful.
        *   Add a new empty `[Unreleased]` section at the top.
    *   Tool(s) Used: Text editor.
    *   Verification: `CHANGELOG.md` accurately reflects all changes for the new version.

4.  **Step 1.4: Prepare Release Notes Document**
    *   Detail:
        *   Copy `[.roo/commander/templates/releases/template_00_release_notes.md](.roo/commander/templates/releases/template_00_release_notes.md)` to a working directory (e.g., `docs/releases/vX.Y.Z/`).
        *   Rename it: `release_notes_vX.Y.Z.md`.
        *   Fill in the TOML frontmatter (`version_number`, `release_date`, `codename` if major, `key_highlights`).
        *   Populate the Markdown body using information from the `CHANGELOG.md` and any other relevant sources, providing more narrative detail than the changelog.
    *   Tool(s) Used: Text editor.
    *   Verification: Release notes document is complete and ready for publishing.

5.  **Step 1.5: Commit Changelog and Release Notes Draft**
    *   Detail: Stage and commit the updated `CHANGELOG.md` and the new `release_notes_vX.Y.Z.md`.
    *   Tool(s) Used: Git CLI
    *   Instruction/Command:
        ```bash
        git add CHANGELOG.md .roo/commander/docs/releases/vX.Y.Z/release_notes_vX.Y.Z.md
        git commit -m "docs: Prepare changelog and release notes for vX.Y.Z"
        ```
    *   Verification: Commit is successful.

### Phase 2: Build & Package Artifacts

6.  **Step 2.1: Generate `.roomodes` File**
    *   Detail: Run the script to generate the `.roomodes` file.
    *   Tool(s) Used: Node.js, `build_roomodes-v8.js` script.
    *   Instruction/Command: `node .roo/commander/scripts/build_roomodes-v8.js`
    *   Verification: `.roomodes` file is created/updated in the workspace root (`./.roomodes`).

7.  **Step 2.2: Create Release Package**
    *   Detail: Run the Node.js packaging script. This script should:
        *   Create a version-specific build directory (e.g., `dist/roo_commander_vX.Y.Z/`).
        *   Copy the entire `.roo/` directory structure into it.
        *   **Crucially, empty the contents** of specified subfolders within the *packaged* `.roo/commander/` directory (e.g., `sessions/`, `tasks/`, `tmp/`, `builds/` (this one might be excluded entirely from the package), `archive/`, `context/` if it's user-specific, etc.) while keeping the folder structure. Refer to `[.roo/commander/scripts/build_release/build_config.json](.roo/commander/scripts/build_release/build_config.json)` for the list of folders to empty/exclude.
        *   Copy the project root `README.md`, `LICENSE.txt`, and the just-updated `CHANGELOG.md` into the root of the package directory.
        *   The `.roomodes` file (generated in Step 2.1 at the workspace root) will be included by the packaging process as defined in `[.roo/commander/scripts/build_release/build_config.json](.roo/commander/scripts/build_release/build_config.json)`.
        *   (Optional) Create a compressed archive (e.g., `.zip` or `.tar.gz`) of the package directory.
    *   Tool(s) Used: Node.js, custom packaging script (e.g., `package-release.js`).
    *   Instruction/Command: `node .roo/commander/scripts/build_release/package-release.js --version vX.Y.Z` (example command)
    *   Verification: The package directory (and optional archive) is created correctly with the specified contents.

### Phase 3: Tagging & GitHub Release

8.  **Step 3.1: Create Git Tag**
    *   Detail: Create an annotated Git tag for the release version.
    *   Tool(s) Used: Git CLI
    *   Instruction/Command: `git tag -a vX.Y.Z -m "Release version X.Y.Z"`
    *   Verification: Tag is created locally (`git tag`).

9.  **Step 3.2: Push Commits and Tag to Remote**
    *   Detail: Push the main branch (with changelog/release notes commit) and the new tag to the remote repository (e.g., GitHub).
    *   Tool(s) Used: Git CLI
    *   Instruction/Command:
        ```bash
        git push origin main
        git push origin vX.Y.Z
        ```
    *   Verification: Commits and tag are visible on the remote repository.

10. **Step 3.3: Create GitHub Release**
    *   Detail: Create a new release on GitHub.
    *   Tool(s) Used: GitHub UI or GitHub CLI (`gh`).
    *   Instruction/Command (using `gh` CLI - example):
        ```bash
        gh release create vX.Y.Z \
            --title "Roo Commander V8 - vX.Y.Z [Codename]" \
            --notes-file ".roo/commander/docs/releases/vX.Y.Z/release_notes_vX.Y.Z.md" \
            "dist/roo_commander_vX.Y.Z.zip" # Attach the packaged archive
        ```
    *   If using UI:
        *   Go to the repository's "Releases" page.
        *   Click "Draft a new release."
        *   Choose the tag `vX.Y.Z`.
        *   Set the release title (e.g., "Roo Commander V8 - vX.Y.Z [Codename]").
        *   Copy the content from `release_notes_vX.Y.Z.md` into the description.
        *   Upload the packaged archive (e.g., `roo_commander_vX.Y.Z.zip`) as a release asset.
        *   Publish the release.
    *   Verification: The release is visible on GitHub with the correct notes and assets.

## 5. Expected Outcomes / Deliverables

*   `CHANGELOG.md` is updated and committed.
*   `release_notes_vX.Y.Z.md` is created and committed.
*   A distributable package (e.g., `.zip` file) containing the release version of Roo Commander V8 is created.
*   A Git tag `vX.Y.Z` is created and pushed.
*   A corresponding Release is published on GitHub.

## 6. Error Handling & Escalation (General for this SOP)

*   **Build Script Failures:** Check script logs. Address issues (e.g., missing dependencies, file path errors) and retry the script.
*   **Packaging Errors:** Verify the packaging script logic and `build_config.json` for correct inclusion/exclusion rules.
*   **Git Errors:** Resolve any Git conflicts or authentication issues before pushing.
*   **GitHub Release Errors:** Check GitHub CLI authentication or UI permissions.
*   Escalate to project maintainers if issues cannot be resolved.

## 7. SOP Maintenance & Review

*   **Process Owner:** `Lead Developer / Release Manager`
*   This SOP should be reviewed and updated if the build scripts, packaging requirements, or GitHub release process changes significantly.

This SOP ensures that Roo Commander V8 releases are built, packaged, and published consistently and reliably.