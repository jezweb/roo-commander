+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-15-DELETE-TEMP-FILE"
title = "Delete Temporary Context File"
step_number = 15
next_step_id = "WF-MODE-CREATION-V1-16-RELOAD-PROMPT" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-14-BUILD-REGISTRY" # Points to the previous step file
status = "draft"
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "cleanup", "temporary-file", "json", "mode-creation", "mcp-preference"]

# --- Workflow Step Specific Fields ---
description = "Deletes the temporary JSON context file after the mode registry has been successfully built."
delegation_mode = "Coordinator (Roo Commander)" # Primary mode responsible for this step
# inputs = ["mode_slug", "registry_build_status"] # List of expected input data/context (optional)
# outputs = ["cleanup_status"] # List of expected output data/context (optional)
error_handling = "If deletion fails (MCP and fallback), log error. Generally non-critical, but note for potential manual cleanup." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 15: Delete Temporary Context File

**Responsible Mode:** Coordinator (Roo Commander)

## Procedure

1.  **Confirm Precondition:**
    *   Coordinator confirms that the mode registry build (**[Step 14](./14_build_registry.md)**) completed successfully. **Do not proceed if the build failed.**

2.  **Identify File Path:**
    *   Coordinator identifies the path to the temporary context file: `.ruru/temp/mode-creation-context-<new-slug>.json`.
    *   *(Note: Replace `<new-slug>` with the actual mode slug confirmed in Step 00)*.

3.  **Delete File:**
    *   Coordinator uses a file operation tool to delete the temporary context file.
    *   **Tool Preference:**
        *   Prefer MCP `vertex-ai-mcp-server` tool: `move_file_or_directory` (to a trash/temp location if possible) or a dedicated delete tool if available.
        *   Fallback: Standard `execute_command` tool with `rm .ruru/temp/mode-creation-context-<new-slug>.json`.

4.  **Log Action & Tool Usage:**
    *   Coordinator logs the action of deleting the temporary file and notes which tool (MCP or fallback) was used successfully or if an error occurred.

5.  **Proceed:** Upon successful deletion (or after logging a non-critical failure), proceed to the next step: **[16_reload_prompt.md](./16_reload_prompt.md)**.

## Error Handling
*   If deleting the temporary file fails using both the preferred MCP tool and the fallback `execute_command rm`:
    *   Log the specific file deletion error.
    *   Notify the User that the temporary file could not be automatically deleted and might require manual cleanup later.
    *   Proceed with the workflow, as this is generally non-critical.