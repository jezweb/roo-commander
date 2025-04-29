+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-10-UPDATE-KB-README"
title = "Delegate Enhanced KB README Update"
step_number = 10
next_step_id = "WF-MODE-CREATION-V1-11-CREATE-KB-RULE" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-09-CREATE-KB-CONTENT" # Points to the previous step file
status = "draft"
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "kb-readme", "documentation", "delegation", "mode-creation", "mcp-preference"]

# --- Workflow Step Specific Fields ---
description = "Delegates the creation/update of the KB README file, summarizing the KB contents based on the previous step's outcome."
delegation_mode = "Mode Structure Agent (e.g., mode-maintainer, technical-writer, toml-specialist)" # Primary mode responsible for this step
# inputs = ["mode_slug", "mode_purpose", "temp_context_file_path", "kb_files_creation_status"] # List of expected input data/context (optional)
# outputs = ["kb_readme_update_status"] # List of expected output data/context (optional)
error_handling = "If agent fails (reading context, listing files, writing README), retry. Check MCP/fallback tool status. Persistent failure requires manual intervention or abandoning." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 10: Delegate Enhanced KB README Update

**Responsible Mode:** Coordinator (Roo Commander) delegates to **Mode Structure Agent** (e.g., `mode-maintainer`, `technical-writer`, `toml-specialist`)

## Procedure

1.  **Delegate Task:**
    *   Coordinator instructs the Mode Structure Agent to create or update the KB README file at `.ruru/modes/<new-slug>/kb/README.md`.

2.  **Instructions for Mode Structure Agent:**
    *   The instructions provided by the Coordinator **MUST** include:
        *   The path to the KB README file: `.ruru/modes/<new-slug>/kb/README.md`.
        *   Instruction to generate content for the README, including:
            *   An overview of the KB's purpose (derived from the mode's purpose, potentially using context parsed from `.ruru/temp/mode-creation-context-<new-slug>.json` if needed - Prefer MCP `read_file_content`, fallback `read_file`).
            *   A list of files within the `kb/` directory (including subfolders if applicable). The agent might need to list the directory contents to get an accurate list. (Prefer MCP `list_directory_contents` or `get_directory_tree`, fallback `execute_command ls`).
            *   Brief summaries and line counts for each KB file created in **[Step 09](./09_create_kb_content.md)**.
            *   If KB population was skipped or basic structure was created, the README should clearly indicate this status.
        *   **Tool Preference for Writing:** Prefer MCP `write_file_content`, fallback `write_to_file`.

3.  **Await Completion:**
    *   Coordinator awaits the completion signal and status report from the Mode Structure Agent.

4.  **Proceed:** Upon successful creation/update of the KB README, proceed to the next step: **[11_create_kb_rule.md](./11_create_kb_rule.md)**.

## Error Handling
*   If the Mode Structure Agent fails to create or update the KB README (e.g., reading context, listing files, writing the README file):
    *   Log the specific error.
    *   Attempt to retry the delegation.
    *   Check the status of relevant MCP tools and fallback tools.
    *   If failure persists, notify the User. The workflow might proceed, but the KB documentation will be incomplete. Consider manual intervention.