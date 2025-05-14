# README: `build_roomodes-v8.js`

This document explains the purpose, usage, dependencies, and expected output of the `build_roomodes-v8.js` script.

## 1. Purpose

The `build_roomodes-v8.js` script is designed to process a predefined list of `.mode.md` files. For each mode file, it:
1.  Extracts TOML (Tom's Obvious, Minimal Language) frontmatter and Markdown content.
2.  Parses the TOML data to retrieve mode metadata, primarily the `name` and `custom_instructions`.
3.  Uses the Markdown content as the `roleDefinition` for the mode.
4.  Derives a `slug` for the mode from its file path.
5.  Assigns a default set of `groups` to the mode.
6.  Consolidates this information for all processed modes into a single JSON structure.
7.  Writes this JSON structure to an output file named `.roomodes` located in the `.roo/commander/builds` directory.

This output file is likely consumed by other parts of the Roo Commander V8 system to load and define available AI modes.

## 2. How to Run

The script is a Node.js application and can be executed from the root of the workspace using the following command:

```bash
node .roo/commander/scripts/build_roomodes-v8.js
```

## 3. Dependencies and Prerequisites

### Dependencies:
*   **Node.js:** The script requires Node.js to be installed on the system.
*   **TOML Parser (Optional but Recommended):**
    *   The script attempts to use `@ltd/j-toml` as the primary TOML parser.
    *   If `@ltd/j-toml` is not found, it falls back to trying `@iarna/toml`.
    *   If neither of these packages is found, it uses a less reliable regex-based fallback parser for TOML. For best results and robust parsing, at least one of these NPM packages should be installed in the project:
        ```bash
        npm install @ltd/j-toml
        # OR
        npm install @iarna/toml
        ```
*   **Built-in Node.js modules:** `fs` (file system) and `path`.

### Prerequisites:
*   **Mode Files:** The script expects `.mode.md` files to exist at the paths specified in the `MODE_FILE_PATHS` array within the script.
    *   Default paths are:
        *   `.roo/commander/modes/roo-commander/roo-commander.mode.md`
        *   `.roo/commander/modes/manager-data-product/manager-data-product.mode.md`
        *   `.roo/commander/modes/data-product-strategist/data-product-strategist.mode.md`
*   **File Format:** Each `.mode.md` file **MUST** adhere to the following structure:
    ```markdown
    +++
    # TOML frontmatter goes here
    name = "Mode Name"
    custom_instructions = """
    Multi-line custom instructions for the mode.
    """
    # Other TOML fields can be present
    +++

    # Markdown content starts here
    This is the role definition for the mode.
    It can span multiple lines and use Markdown formatting.
    ```
    The `name` field in the TOML frontmatter is crucial. The `custom_instructions` field is also extracted. The Markdown content following the closing `+++` delimiter is used as the `roleDefinition`.

## 4. Expected Output

### On Successful Execution:
*   **Console Logs:**
    *   Messages indicating which TOML parser is being used (or if falling back to regex).
    *   Logs for each file being processed, indicating success or warnings/errors.
    *   A summary message stating the number of modes written to the output file.
*   **Output File:**
    *   A new file named `.roomodes` will be created (or overwritten) in the `.roo/commander/builds/` directory.
    *   This file will contain a JSON object with a single key `customModes`. The value of `customModes` will be an array of mode objects, where each object has the following structure:
        ```json
        {
          "slug": "derived-slug-from-path",
          "name": "Name from TOML",
          "roleDefinition": "Markdown content from the .mode.md file",
          "groups": ["read", "edit", "browser", "command", "mcp"], // Default groups
          "customInstructions": "Custom instructions from TOML"
        }
        ```

### Example `.roomodes` content:
```json
{
  "customModes": [
    {
      "slug": "roo-commander",
      "name": "👑 Roo Commander V8",
      "roleDefinition": "# 👑 Roo Commander V8 - Mode Documentation\n\n## 1. Overview\n...",
      "groups": [
        "read",
        "edit",
        "browser",
        "command",
        "mcp"
      ],
      "customInstructions": "You are Roo, the master orchestrator..."
    }
  ]
}
```

### On Failure:
*   **Console Logs:** Error messages will be printed to the console, indicating:
    *   If a mode file specified in `MODE_FILE_PATHS` is not found.
    *   If TOML/Markdown extraction fails for a file.
    *   If TOML parsing fails (even with regex fallback) or essential data like `name` is missing.
    *   If there's an error writing the output file.
*   **Output File:** If no modes are processed successfully, or if there's an error during file writing, the `.roomodes` file may not be generated, or it might be incomplete or outdated.