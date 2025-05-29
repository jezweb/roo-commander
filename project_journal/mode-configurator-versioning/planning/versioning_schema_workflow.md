# Mode Template Versioning: Schema and Workflow

**Project:** Mode Template Versioning (`mode-configurator-versioning`)
**Date:** 2025-04-01

## 1. `mode_versions.json` Schema Definition

This file, located at `tools/mode_configurator/public/mode_versions.json`, tracks available versions of the mode templates. It is an array of version objects.

**JSON Schema:**

```json
{
  "type": "array",
  "description": "An array containing metadata for each available mode template version.",
  "items": {
    "type": "object",
    "properties": {
      "version": {
        "type": "string",
        "description": "Version identifier (e.g., 'latest', 'v2.1.0', 'v2.2.0-beta.1'). Acts as the primary key. 'latest' always refers to the templates in public/mode_templates/."
      },
      "date": {
        "type": "string",
        "description": "Release or snapshot date in YYYY-MM-DD format, or 'N/A' for 'latest'."
      },
      "summary": {
        "type": "string",
        "description": "Brief description of changes included in this version or snapshot."
      },
      "path": {
        "type": "string",
        "description": "Relative path from 'public/' to the archived mode templates for this specific version (e.g., 'archived_mode_templates/v2.1.0'). This field is omitted for the 'latest' version."
      },
      "status": {
        "type": "string",
        "enum": ["development", "beta", "rc", "stable"],
        "description": "Release status of the version (e.g., development, beta, release candidate, stable)."
      }
    },
    "required": [
      "version",
      "date",
      "summary",
      "status"
    ],
    "if": {
      "properties": { "version": { "not": { "const": "latest" } } }
    },
    "then": {
      "required": ["path"]
    }
  }
}
```

**Example Entry:**

```json
[
  {
    "version": "latest",
    "date": "N/A",
    "summary": "Current development version of mode templates.",
    "status": "development"
  },
  {
    "version": "v2.1.0",
    "date": "2025-03-31",
    "summary": "Stable release including standardized instructions and UI designer mode.",
    "path": "archived_mode_templates/v2.1.0",
    "status": "stable"
  }
]
```

## 2. Workflow for Creating a New Version Snapshot

This workflow details the steps to archive the current state of mode templates and record it as a specific version.

1.  **Determine Version Number:**
    *   Decide on the new version tag based on Semantic Versioning (SemVer) principles (e.g., `vX.Y.Z`, `vX.Y.Z-beta.N`, `vX.Y.Z-rc.N`). Consider the nature of changes since the last version (major, minor, patch, pre-release).

2.  **Create Archive Directory:**
    *   Using the file system or a command line, create a new directory within `tools/mode_configurator/public/archived_mode_templates/`.
    *   The directory name should be the chosen version tag (e.g., `tools/mode_configurator/public/archived_mode_templates/v2.2.0/`).

3.  **Copy Templates:**
    *   Copy the *entire contents* of the current `tools/mode_configurator/public/mode_templates/` directory (including all `.json` files and the `README.md`) into the newly created archive directory (e.g., `tools/mode_configurator/public/archived_mode_templates/v2.2.0/`).

4.  **Update `mode_versions.json`:**
    *   Open the `tools/mode_configurator/public/mode_versions.json` file.
    *   Add a new JSON object to the beginning or end of the array for the new version snapshot.
    *   Populate the fields:
        *   `version`: The new version tag (e.g., `"v2.2.0"`).
        *   `date`: The current date in `YYYY-MM-DD` format.
        *   `summary`: A concise description of the key changes or purpose of this snapshot (e.g., `"Snapshot before refactoring UI components."`, `"Beta release for new agentic modes."`).
        *   `path`: The relative path to the archive directory (e.g., `"archived_mode_templates/v2.2.0"`).
        *   `status`: The appropriate status (`"stable"`, `"beta"`, `"rc"`, `"development"`).
    *   Ensure the `latest` entry remains unchanged (no `path` field).
    *   Save the `mode_versions.json` file.

5.  **Commit Changes:**
    *   Use Git to stage the newly created archive directory (e.g., `tools/mode_configurator/public/archived_mode_templates/v2.2.0/`) and the modified `tools/mode_configurator/public/mode_versions.json` file.
    *   Commit the changes with a clear and descriptive commit message, referencing the version number (e.g., `feat: Create mode template snapshot v2.2.0`).
    *   Push the changes to the remote repository if applicable.
