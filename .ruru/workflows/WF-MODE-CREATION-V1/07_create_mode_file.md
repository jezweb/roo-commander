+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-07-CREATE-MODE-FILE"
title = "Delegate Initial Mode File Creation"
step_number = 7
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-08-GEN-CORE-KNOWLEDGE" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-06-CREATE-DIRS" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "mode-file", "template", "json-parsing", "delegation", "mode-creation", "mcp-preference"]

# --- Workflow Step Specific Fields ---
description = "Delegates the creation and initial population of the main mode definition file (`.mode.md`) using the standard template and synthesized context."
delegation_mode = "Mode Structure Agent (e.g., mode-maintainer, technical-writer, toml-specialist)" # Primary mode responsible for this step
# inputs = ["temp_context_file_path", "mode_slug", "mode_classification", "standard_mode_template_path"] # List of expected input data/context (optional)
# outputs = ["mode_file_path", "mode_file_creation_status"] # List of expected output data/context (optional)
error_handling = "If agent fails (reading JSON, copying template, writing file), retry. Check MCP/fallback tool status. Check JSON file validity. Persistent failure requires manual intervention or abandoning." # Specific error handling for this step (optional)
related_docs = [
    "`.ruru/templates/modes/00_standard_mode.md`"
]
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 07: Delegate Initial Mode File Creation

**Responsible Mode:** Coordinator (Roo Commander) delegates to **Mode Structure Agent** (e.g., `mode-maintainer`, `technical-writer`, `toml-specialist`)

## Procedure

1.  **Delegate Task:**
    *   Coordinator instructs the Mode Structure Agent to create and populate the initial mode definition file.

2.  **Instructions for Mode Structure Agent:**
    *   The instructions provided by the Coordinator **MUST** include:
        *   Instruction to **read and parse the JSON context** from the temporary file: `.ruru/temp/mode-creation-context-<new-slug>.json` (created in **[Step 04](./04_save_context.md)**).
            *   **Tool Preference:** Prefer MCP `read_file_content`, fallback `read_file`.
        *   Instruction to copy the standard mode template (`.ruru/templates/modes/00_standard_mode.md`) to the new mode file path: `.ruru/modes/<new-slug>/<new-slug>.mode.md`.
        *   Instruction to populate the TOML frontmatter and relevant Markdown sections of the new `.mode.md` file using:
            *   Data parsed from the JSON context (specifically the part relevant to the main mode definition, perhaps identified by a specific task_id/filename in the JSON or inferred).
            *   The agreed `mode_slug` and `mode_classification` (from **[Step 00](./00_start.md)**).
            *   A generated `id` for the mode (e.g., `MODE-<SLUG>`).
        *   Ensure strict adherence to the structure defined in the standard mode template.
        *   **Crucially:** Leave the `## Core Knowledge & Capabilities` section with a placeholder comment, like: `<!-- Core Knowledge to be generated in next step -->`.
        *   **Tool Preference for Writing:** Prefer MCP `write_file_content`, fallback `write_to_file`.

3.  **Await Completion:**
    *   Coordinator awaits the completion signal and status report (including the path to the created file) from the Mode Structure Agent.

4.  **Proceed:** Upon successful creation and population of the mode file, proceed to the next step: **[08_gen_core_knowledge.md](./08_gen_core_knowledge.md)**.

## Error Handling
*   If the Mode Structure Agent fails during this step (e.g., reading/parsing the JSON context file, copying the template, writing the new mode file):
    *   Log the specific error.
    *   Attempt to retry the delegation.
    *   Check the status of relevant MCP tools and fallback tools.
    *   Verify the existence and validity of the temporary JSON context file.
    *   If failure persists, notify the User and consider manual intervention or abandoning the workflow.