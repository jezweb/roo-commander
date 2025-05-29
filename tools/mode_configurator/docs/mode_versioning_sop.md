# Mode Template Versioning Standard Operating Procedure (SOP)

## Purpose

This document outlines the standard procedure for creating a new version of the mode templates used by the Roo Code Mode Configurator. This ensures that changes are made in an isolated environment and that previous versions are preserved.

## Procedure

When significant changes are planned for one or more mode templates (e.g., adding a new mode, substantially altering custom instructions across multiple modes):

1.  **Determine New Version Number:** Identify the next logical version number (e.g., if the latest archive is `v2.1.3`, the new version might be `v2.1.4` or `v2.2.0` depending on the scope of changes). Use semantic versioning principles (MAJOR.MINOR.PATCH) as a guideline.
2.  **Copy Current Templates:** Execute a command to copy the entire contents of the `tools/mode_configurator/public/mode_templates/` directory into a new subdirectory within `tools/mode_configurator/public/archived_mode_templates/`. Name the new subdirectory with the chosen version number (e.g., `v2.1.4`).
    *   Example command (run from `/home/jeremy/vscode/roo-commander`):
        ```bash
        cp -r tools/mode_configurator/public/mode_templates/ tools/mode_configurator/public/archived_mode_templates/v[NEW_VERSION_NUMBER]
        ```
        *(Replace `[NEW_VERSION_NUMBER]` with the actual version)*
3.  **Make Changes in Archived Version:** Perform **all** intended modifications (editing existing modes, adding new modes) **only** within the newly created versioned directory (e.g., `tools/mode_configurator/public/archived_mode_templates/v[NEW_VERSION_NUMBER]/`).
4.  **Update `mode_versions.json`:** Add a new entry to the top of the array (after `"latest"`) in `tools/mode_configurator/public/mode_versions.json` corresponding to the new version. Include:
    *   `version`: The new version string (e.g., "v2.1.4").
    *   `date`: The current date (YYYY-MM-DD).
    *   `summary`: A brief description of the changes included in this version.
    *   `path`: The relative path to the new archived directory (e.g., "archived_mode_templates/v2.1.4").
    *   `status`: Typically "beta" or "stable" depending on the confidence level.
5.  **(Optional) Update 'latest' Templates:** Once the changes in the archived version are tested and finalized, consider copying the updated templates from the versioned archive back to the main `tools/mode_configurator/public/mode_templates/` directory to make them the active development version. This step depends on the desired workflow (whether 'latest' always reflects the most recent stable/beta archive or is its own development branch).

## Rationale

*   **Isolation:** Prevents breaking the currently active mode templates during development.
*   **History:** Preserves previous working versions for reference or rollback.
*   **Clarity:** Associates specific template sets with a version number listed in `mode_versions.json`.