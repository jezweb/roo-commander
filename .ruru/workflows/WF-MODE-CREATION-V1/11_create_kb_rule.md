+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-11-CREATE-KB-RULE"
title = "Delegate KB Rule Creation"
step_number = 11
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-12-QA" # Corrected next step ID
prev_step_id = "WF-MODE-CREATION-V1-10-UPDATE-KB-README" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "kb-rule", "rules", "delegation", "mode-creation", "mcp-preference"]

# --- Workflow Step Specific Fields ---
description = "Delegates the creation of the mode-specific KB lookup rule using the standard AI rule template."
delegation_mode = "Mode Structure Agent (e.g., mode-maintainer, technical-writer, toml-specialist)" # Primary mode responsible for this step
# inputs = ["mode_slug", "temp_context_file_path", "standard_rule_template_path"] # List of expected input data/context (optional)
# outputs = ["kb_rule_creation_status"] # List of expected output data/context (optional)
error_handling = "If agent fails (reading context, copying template, writing rule), retry. Check MCP/fallback tool status. Persistent failure requires manual intervention or abandoning." # Specific error handling for this step (optional)
related_docs = [
    "`.ruru/templates/toml-md/16_ai_rule.md`"
]
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`",
    "`.ruru/templates/toml-md/16_ai_rule.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 11: Delegate KB Rule Creation

**Responsible Mode:** Coordinator (Roo Commander) delegates to **Mode Structure Agent** (e.g., `mode-maintainer`, `technical-writer`, `toml-specialist`)

## Procedure

1.  **Delegate Task:**
    *   Coordinator instructs the Mode Structure Agent to create the mode-specific KB lookup rule.

2.  **Instructions for Mode Structure Agent:**
    *   The instructions provided by the Coordinator **MUST** include:
        *   Instruction to copy the standard AI rule template (`.ruru/templates/toml-md/16_ai_rule.md`) to the new rule file path: `.roo/rules-<slug>/01-kb-lookup-rule.md`. (Using the `<slug>` confirmed in **[Step 00](./00_start.md)**).
        *   Instruction to populate the template, ensuring:
            *   The rule correctly targets the KB directory: `.ruru/modes/<new-slug>/kb/`.
            *   It includes enhanced instructions for the AI on how to utilize the KB content effectively for this specific mode. (Context for these instructions can potentially be derived from `.ruru/temp/mode-creation-context-<new-slug>.json` if needed - Prefer MCP `read_file_content`, fallback `read_file`).
        *   **Tool Preference for Writing:** Prefer MCP `write_file_content`, fallback `write_to_file`.

3.  **Await Completion:**
    *   Coordinator awaits the completion signal and status report from the Mode Structure Agent.

4.  **Proceed:** Upon successful creation of the KB lookup rule, proceed to the next step: **[12_qa.md](./12_qa.md)**.

## Error Handling
*   If the Mode Structure Agent fails to create the KB lookup rule (e.g., reading context, copying template, writing the rule file):
    *   Log the specific error.
    *   Attempt to retry the delegation.
    *   Check the status of relevant MCP tools and fallback tools.
    *   If failure persists, notify the User. The workflow might proceed, but the mode's ability to use its KB will be impaired. Consider manual intervention.