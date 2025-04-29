+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-06-CREATE-DIRS"
title = "Delegate Directory Creation"
step_number = 6
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-07-CREATE-MODE-FILE" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-05-KB-PROMPT" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "directory-creation", "delegation", "mode-structure", "mode-creation", "mcp-preference"]

# --- Workflow Step Specific Fields ---
description = "Delegates the creation of the necessary mode, KB, and rules directories to the Mode Structure Agent."
delegation_mode = "Mode Structure Agent (e.g., mode-maintainer, technical-writer, toml-specialist)" # Primary mode responsible for this step
# inputs = ["mode_slug"] # List of expected input data/context (optional)
# outputs = ["directory_creation_status"] # List of expected output data/context (optional)
error_handling = "If agent fails critical operations, retry. Log errors. Check MCP tool status and fallback execution. Persistent failure requires manual intervention or abandoning." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 06: Delegate Directory Creation

**Responsible Mode:** Coordinator (Roo Commander) delegates to **Mode Structure Agent** (e.g., `mode-maintainer`, `technical-writer`, `toml-specialist`)

## Procedure

1.  **Delegate Task:**
    *   Coordinator instructs the Mode Structure Agent to create the necessary directory structure for the new mode.

2.  **Instructions for Mode Structure Agent:**
    *   The instructions provided by the Coordinator **MUST** specify the exact directories to create, using the `<new-slug>` confirmed in **[Step 00](./00_start.md)**:
        *   Mode directory: `.ruru/modes/<new-slug>/`
        *   KB subdirectory: `.ruru/modes/<new-slug>/kb/`
        *   Rules directory: `.roo/rules-<slug>/` (using the confirmed lowercase `kebab-case` `<new-slug>`)
    *   Instructions should specify the preference for using MCP tools and the requirement to handle fallbacks:
        *   **Tool Preference:**
            *   Prefer MCP `vertex-ai-mcp-server` tool: `create_directory`.
            *   Fallback: Standard `execute_command` tool with `mkdir -p ...`.
    *   The agent should attempt to create all directories and report success or failure for each.

3.  **Await Completion:**
    *   Coordinator awaits the completion signal and status report from the Mode Structure Agent.

4.  **Proceed:** Upon successful creation of all directories, proceed to the next step: **[07_create_mode_file.md](./07_create_mode_file.md)**.

## Error Handling
*   If the Mode Structure Agent fails to create any of the required directories using both preferred and fallback methods:
    *   Log the specific error(s).
    *   Attempt to retry the delegation for the failed directories.
    *   Check the status of relevant MCP tools and `execute_command` functionality.
    *   If failure persists, notify the User and consider manual intervention or abandoning the workflow.