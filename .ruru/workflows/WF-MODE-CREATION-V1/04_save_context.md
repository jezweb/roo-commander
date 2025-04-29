+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-04-SAVE-CONTEXT"
title = "Save Synthesized Context (JSON)"
step_number = 4
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-05-KB-PROMPT" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-03-CONTEXT-SYNTHESIS" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "save-context", "json", "temporary-file", "mode-creation", "mcp-preference"]

# --- Workflow Step Specific Fields ---
description = "Saves the synthesized JSON context (from the previous step) to a temporary file for use in subsequent steps."
delegation_mode = "Coordinator (Roo Commander)" # Primary mode responsible for this step
# inputs = ["synthesized_context_json", "mode_slug"] # List of expected input data/context (optional)
# outputs = ["temp_context_file_path"] # List of expected output data/context (optional)
error_handling = "If writing the temporary JSON file fails (both MCP and fallback), log the error, notify the user, and likely abandon the workflow." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 04: Save Synthesized Context (JSON)

**Responsible Mode:** Coordinator (Roo Commander)

## Procedure

1.  **Receive JSON Context:**
    *   Coordinator receives the **JSON structure** output from the Context Synthesizer in **[Step 03](./03_context_synthesis.md)**.

2.  **Determine File Path:**
    *   Coordinator determines the path for the temporary context file: `.ruru/temp/mode-creation-context-<new-slug>.json`.
    *   *(Note: Replace `<new-slug>` with the actual mode slug confirmed in Step 00)*.

3.  **Save JSON to File:**
    *   Coordinator uses a file writing tool to save the received JSON context to the determined temporary file path.
    *   **Tool Preference:**
        *   Prefer MCP `vertex-ai-mcp-server` tool: `write_file_content`.
        *   Fallback: Standard `write_to_file` tool.
    *   Ensure the entire JSON structure is written correctly.

4.  **Log Action & Tool Usage:**
    *   Coordinator logs the action of saving the context and notes which tool (MCP or fallback) was used successfully.

5.  **Proceed:** Upon successful file creation, proceed to the next step: **[05_kb_prompt.md](./05_kb_prompt.md)**.

## Error Handling
*   If writing the temporary JSON file fails using both the preferred MCP tool and the fallback `write_to_file` tool:
    *   Log the specific file writing error encountered.
    *   Notify the User about the critical failure to save context.
    *   Abandon the workflow, as subsequent steps depend on this file.