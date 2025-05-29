# Documentation: Template `template_00_directory_readme.md`

## 1. Purpose

This template defines the standard structure for creating general **Directory `README.md` files** (also known as Directory Index READMEs). These `README.md` files are placed at the root of significant directories within the Roo Commander workspace to explain the directory's purpose and help users and developers navigate its contents.

This template is distinct from more specialized README templates like those for Mode KBs (`template_00_mode_kb_readme.md`) or for documenting other templates.

## 2. Usage

1.  **When to Use:** Create an instance of this template when a directory requires a `README.md` to explain its contents and aid navigation, as per `[.roo/commander/docs/standards/14-readme-files-standard.md](.roo/commander/docs/standards/14-readme-files-standard.md)`.
2.  **Copy Template:**
    *   Copy `[.roo/commander/templates/documentation/template_00_directory_readme.md](.roo/commander/templates/documentation/template_00_directory_readme.md)` to the root of the directory that needs a `README.md`.
3.  **Rename File:** Ensure the filename is exactly `README.md`.
4.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique ID for this README document.
    *   `title`: `Index/README: [Purpose of this Directory]`.
    *   `scope`: Describe the directory this README pertains to.
    *   `tags`: Include `"readme"`, `"index"`, `"documentation"`, and a tag specific to the directory's content/purpose.
5.  **Define Content in Markdown Body:**
    *   Replace placeholders like `[./path/to/this/directory/]` with the actual path.
    *   Detail the purpose of the directory in Section 1.
    *   List and describe key files and subdirectories in Section 2, using correct relative links.
    *   Add usage or contribution notes in Section 3 if applicable.

## 3. TOML Frontmatter Schema (for an instance of this template)

*   **`id` (String, Required):** Unique ID for the README document.
    *   *Convention:* `DIR-README-[DirectoryNameShort]-[YYYYMMDD]`
*   **`title` (String, Required):** Title of the README.
    *   *Example:* `"Index/README: Roo Commander Standards Documents"`
*   **`context_type` (String, Fixed: `"directory_index"`).**
*   **`scope` (String, Required):** Describes the directory this README pertains to.
*   **`target_audience` (Array of Strings, Required):** Typically `["all"]`.
*   **`granularity` (String, Fixed: `"index"`).**
*   **`status` (String, Required):** (e.g., `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Version of this README document.
*   **`tags` (Array of Strings, Required):** Include `"readme"`, `"index"`, `"documentation"`, and a directory-specific tag.
*   `related_context` (Array of Strings, Optional): Links to parent READMEs or relevant standards.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/documentation/template_00_directory_readme.README.md"`

### Directory Specific Fields (Optional in TOML)

*   `primary_artifact_type_contained` (String, Optional): e.g., "Mode Definitions", "Standard Documents".
*   `key_subdirectories_summary` (Array of Strings, Optional): Brief purpose of key subdirectories.

## 4. Markdown Body Structure

*   `# README: {{ title }}`: Main title.
*   `## 1. Purpose of this Directory`: Explains what the directory is for.
*   `## 2. Overview of Contents / Key Files & Subdirectories`: Lists and links to key items.
*   `## 3. Usage Notes / How to Contribute (If Applicable)`: Guidelines for the directory.
*   `## 4. Related Documents`: Links to other relevant documentation.
*   `## 5. Maintenance`: Note on keeping the README updated.

This template provides a consistent structure for creating helpful `README.md` files throughout the Roo Commander workspace.