# Documentation: Template `template_00_release_notes.md`

## 1. Purpose

This template defines the standard structure for creating **Release Notes documents**. Release notes are published for each new version of Roo Commander V8 (or significant components like a new Manager + Squad unit if versioned independently). They inform users and developers about what has changed, including new features, improvements, bug fixes, and any known issues.

## 2. Usage

1.  **Before a New Release:**
    *   Create a new directory for the release notes if organizing by version (e.g., `[.roo/commander/docs/releases/v8.1.0/](.roo/commander/docs/releases/v8.1.0/)`).
    *   Copy `[.roo/commander/templates/releases/template_00_release_notes.md](.roo/commander/templates/releases/template_00_release_notes.md)` into this directory.
2.  **Rename File:** Rename it to reflect the version (e.g., `release_notes_v8.1.0.md`).
3.  **Populate TOML Frontmatter:**
    *   `id`: Unique ID for the release note.
    *   `title`: `Release Notes: Roo Commander V8 - Version [VersionNumber]`.
    *   `version_number`: The specific X.Y.Z version.
    *   `codename`: If a major release.
    *   `release_date`: Date of release.
    *   Fill in `primary_focus`, `key_highlights`, and optionally `link_to_milestone_or_project_board`, `related_commit_hashes`, `related_pull_request_urls`.
4.  **Compile Release Information in Markdown Body:**
    *   Detail What's New, Changes/Improvements, Bug Fixes, Known Issues, and any Upgrade Notes.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `RELEASE-[VersionNumber]-[YYYYMMDD]`.
*   **`title` (String, Required):** Title of the release notes.
*   **`version_number` (String, Required):** The X.Y.Z version.
*   `codename` (String, Optional): For major releases.
*   **`release_date` (String, Required):** Date of release.
*   **`status` (String, Required):** (e.g., `"draft"`, `"published"`).
*   **`tags` (Array of Strings, Required):** Include `"release-notes"`, version tag, codename tag.
*   **`template_schema_doc` (String, Required):** `".roo/commander/templates/releases/template_00_release_notes.README.md"`

### Release Summary (TOML)

*   `primary_focus` (String, Optional): Main theme of the release.
*   `key_highlights` (Array of Strings, Optional): Bullet points for major items.
*   `link_to_milestone_or_project_board` (String, Optional): URL.

### Related Commits / PRs (TOML - Optional)

*   `related_commit_hashes` (Array of Strings, Optional).
*   `related_pull_request_urls` (Array of Strings, Optional).

## 4. Markdown Body Structure

*   `# Release Notes: Roo Commander V8 - Version {{ version_number }} {{ codename }}`: Main title.
*   Header section with Release Date, Version, Codename, Primary Focus.
*   `## 1. Overview & Key Highlights ✨`
*   `## 2. What's New / New Features 🚀`
*   `## 3. Changes & Improvements 🛠️`
*   `## 4. Bug Fixes 🐞`
*   `## 5. Known Issues & Limitations ⚠️`
*   `## 6. Important Notes for Upgrading (If Applicable)`
*   `## 7. Acknowledgements (Optional)`
*   Footer with links to commits/PRs.

This template ensures release notes are informative, consistent, and cover all necessary aspects.