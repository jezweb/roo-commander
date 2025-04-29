+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-09-CREATE-KB-CONTENT"
title = "Delegate KB Content / Instruction File Creation"
step_number = 9
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-10-UPDATE-KB-README" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-08-GEN-CORE-KNOWLEDGE" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "kb-creation", "json-parsing", "delegation", "mode-creation", "mcp-preference", "subfolders"]

# --- Workflow Step Specific Fields ---
description = "Delegates the creation of KB files (or placeholders) based on the user's choice in Step 05, using the synthesized JSON context."
delegation_mode = "Mode Structure Agent (e.g., mode-maintainer, technical-writer, toml-specialist)" # Primary mode responsible for this step
# inputs = ["kb_population_preference", "kb_structure_preference", "temp_context_file_path", "mode_slug"] # List of expected input data/context (optional)
# outputs = ["kb_files_creation_status"] # List of expected output data/context (optional)
error_handling = "If KB generation/population fails (parsing JSON, creating subdirs, writing files), notify User, ensure KB README reflects failure, proceed if possible. Check MCP/fallback tool status." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 09: Delegate KB Content / Instruction File Creation

**Responsible Mode:** Coordinator (Roo Commander) delegates to **Mode Structure Agent** (e.g., `mode-maintainer`, `technical-writer`, `toml-specialist`)

## Procedure

1.  **Retrieve User Decision:**
    *   Coordinator retrieves the User's decision regarding KB population and structure (Populate/Basic/Skip, Single Folder/Subfolders) made in **[Step 05](./05_kb_prompt.md)**.

2.  **Delegate Task (Conditional):**
    *   Based on the User's decision:
        *   **If "Standard KB (Single Folder)" or "Comprehensive KB (Subfolders)":**
            1.  Instruct the Agent to **read and parse the JSON context** from `.ruru/temp/mode-creation-context-<new-slug>.json` (Prefer MCP `read_file_content`, fallback `read_file`).
            2.  **If "Comprehensive KB (Subfolders)" was chosen:** Instruct the Agent to **first create any necessary subdirectories** within `.ruru/modes/<new-slug>/kb/` based on the paths specified in the JSON `filename` keys (e.g., `kb/setup/`, `kb/usage/`). (Prefer MCP `create_directory`, fallback `execute_command mkdir -p ...`).
            3.  Then, instruct the Agent to **iterate through the JSON array**, creating/populating each KB file specified by `filename` within `.ruru/modes/<new-slug>/kb/` (including subfolders if applicable) using the corresponding `content`. Process iteratively for many files. (Prefer MCP `write_file_content`, fallback `write_to_file`).
        *   **If "Basic KB Structure":**
            1.  Instruct the Agent to create placeholder files or a single file (e.g., `_placeholder.md` or `README.md` with a note) in `.ruru/modes/<new-slug>/kb/` indicating basic structure and the need for future population. (JSON context reading might not be strictly needed but can be passed for consistency). (Prefer MCP `write_file_content`, fallback `write_to_file`).
        *   **If "Skip KB":**
            1.  No file creation delegation is needed for this step. The KB directory should already exist from **[Step 06](./06_create_dirs.md)**.

3.  **Await Completion:**
    *   Coordinator awaits the completion signal and status report from the Mode Structure Agent (if delegation occurred).

4.  **Proceed:** Upon successful completion (or if skipped), proceed to the next step: **[10_update_kb_readme.md](./10_update_kb_readme.md)**.

## Error Handling
*   If the Mode Structure Agent fails during KB file/directory creation (parsing JSON, creating subdirectories, writing files):
    *   Log the specific error(s).
    *   Notify the User about the failure.
    *   Ensure the KB README (to be created/updated in the next step) reflects the failure or incomplete state.
    *   Proceed with the workflow if possible, as the mode might function without a complete KB initially.
    *   Check the status of relevant MCP tools and fallback tools.