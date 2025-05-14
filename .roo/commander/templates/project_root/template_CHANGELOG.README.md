# Documentation: Template `template_CHANGELOG.md`

## 1. Purpose

This template provides the standard structure for the main **`CHANGELOG.md`** file of the Roo Commander V8 project (or any project wishing to adopt this standard). The `CHANGELOG.md` is a human-readable, chronologically ordered list of notable changes made to the project across its various versions.

It follows the conventions outlined by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and is intended to be used in conjunction with [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The primary audience for the `CHANGELOG.md` is users and developers of the project who want to understand what has changed between releases.

## 2. Usage

1.  **Initial Setup:**
    *   Copy `[.roo/commander/templates/project_root/template_CHANGELOG.md](.roo/commander/templates/project_root/template_00_changelog.md)` to the **root directory** of your project.
    *   Rename it to `CHANGELOG.md`.
    *   Replace `[Project Name, e.g., Roo Commander V8]` in the header with your actual project name.
2.  **During Development (Before a Release):**
    *   As new features are added, changes are made, bugs are fixed, etc., developers (or a designated release manager/mode) should add concise entries describing these changes under the appropriate sub-heading (`Added`, `Changed`, `Fixed`, etc.) within the `## [Unreleased]` section at the top of the `CHANGELOG.md` file.
    *   Entries should be user-focused and explain the impact of the change.
    *   Linking to relevant MDTM task IDs, GitHub issue numbers, or Pull Request URLs can be very helpful for traceability.
3.  **Preparing for a New Release:**
    *   Review all entries under `## [Unreleased]`.
    *   Update the `## [Unreleased]` heading to become the new version heading, including the version number and release date. For example: `## [8.1.0] - 2025-07-20`.
    *   Add a new, empty `## [Unreleased]` section at the very top of the file for future changes.
    *   Ensure the changes listed under the new version heading accurately reflect what is included in that release. This information will also be crucial for creating the detailed Release Notes document (using `template_00_release_notes.md`).
4.  **Commit:** Commit the updated `CHANGELOG.md` as part of the release process.

## 3. TOML Frontmatter Schema

This template (`template_CHANGELOG.md`) itself **does not use TOML frontmatter**. It is a pure Markdown file intended to become the `CHANGELOG.md` in the project root. The TOML metadata for *this template document itself* (if it were stored as a typical TOML+MD template artifact within the `.roo/commander/templates/` system) would be:

*   `id`: `TEMPLATE-PROJECT-ROOT-CHANGELOG-V1`
*   `title`: `Template: Project CHANGELOG.md`
*   `context_type`: `template_definition`
*   `scope`: "Defines the standard structure for a project's CHANGELOG.md file."
*   `target_audience`: ["developers", "release_managers"]
*   `status`: "active"
*   `tags`: ["template", "changelog", "project-root", "release-process"]
*   `template_schema_doc`: `".roo/commander/templates/project_root/template_CHANGELOG.README.md"` (this file)

## 4. Markdown Body Structure (of the `CHANGELOG.md` produced)

*   **Main Title:** `# Changelog`
*   **Introductory Paragraph:** Explaining the purpose and linking to "Keep a Changelog" and SemVer.
*   **`## [Unreleased]` Section (Always at the top for ongoing changes):**
    *   Contains sub-headings for change types:
        *   `### Added` (for new features)
        *   `### Changed` (for changes in existing functionality)
        *   `### Deprecated` (for soon-to-be removed features)
        *   `### Removed` (for now-removed features)
        *   `### Fixed` (for any bug fixes)
        *   `### Security` (in case of vulnerabilities)
*   **Version Sections (Chronological - Newest First after `[Unreleased]`):**
    *   Each released version gets its own section: `## [X.Y.Z] - YYYY-MM-DD`
    *   Under each version, the same sub-headings (`Added`, `Changed`, etc.) are used to categorize the changes specific to that release.
*   **Maintainer Instructions (Commented Out):** The template includes commented-out instructions for maintainers on how to update the changelog.

## 5. Best Practices for Changelog Entries

*   **Group changes by type** under the standard headings.
*   **Write for humans:** Changelogs are for people. Use clear language.
*   **Be concise but informative:** Explain the "what" and "why" of a change briefly.
*   **Link to more details:** If a change is complex, link to the relevant MDTM task, issue, PR, or documentation.
*   **Credit contributors (optional but nice).**
*   **Maintain a clean Git history:** Well-crafted commit messages make changelog generation easier.

This template provides a best-practice structure for maintaining a clear and informative changelog for your project.