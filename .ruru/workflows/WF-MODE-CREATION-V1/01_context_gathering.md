+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-01-CONTEXT-GATHERING"
title = "Context Gathering"
step_number = 1
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-02-AI-ASSESSMENT" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-00-START" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "context-gathering", "research", "delegation", "mode-creation", "mcp-preference"]

# --- Workflow Step Specific Fields ---
description = "Delegates context gathering to a specialized agent based on user requirements and preferences defined in the previous step."
delegation_mode = "Context Gatherer (e.g., agent-research)" # Primary mode responsible for this step
# inputs = ["mode_purpose", "mode_scope", "context_preference", "user_files", "kb_focus", "doc_priority", "research_level"] # List of expected input data/context (optional)
# outputs = ["gathered_context_sources"] # List of expected output data/context (optional)
error_handling = "If agent fails (including reading user files or applying preference), retry. Check MCP tool status. If persistent, notify the User and potentially proceed with minimal context or abandon." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 01: Context Gathering

**Responsible Mode:** Coordinator (Roo Commander) delegates to **Context Gatherer** (e.g., `agent-research`)

## Procedure

1.  **Delegate Task:**
    *   Coordinator instructs the Context Gatherer agent (e.g., `agent-research`) to find and retrieve relevant information based on the agreed purpose, scope, and user preferences gathered in **[Step 00](./00_start.md)**.

2.  **Instructions for Context Gatherer:**
    *   The instructions provided by the Coordinator **MUST** include:
        *   The mode's purpose and scope.
        *   The user's context preferences (e.g., Standard KB, Deep Dive KB, Quick Overview KB, or specific details provided).
        *   Any specific local files or directories provided by the user (from Step 00.6). These should be processed **iteratively** if large. (Prefer MCP `read_multiple_files_content` or `read_file_content`, fallback `read_file`).
        *   Instructions to apply user preferences regarding:
            *   KB focus areas (if specified).
            *   Documentation priority (e.g., use MCP `explain_topic_with_docs`/`get_doc_snippets` if official docs preferred, fallback to `answer_query_websearch`).
            *   Research effort level (e.g., ensure the selected level, such as 'Deep Dive', is applied, aiming for comprehensive coverage appropriate to that level).
        *   Emphasis on iterative processing for large inputs or deep research levels.
        *   Preference for using MCP tools where available, with the requirement to handle fallbacks gracefully.

3.  **Await Completion:**
    *   Coordinator awaits the completion signal and the gathered context (or list of sources) from the Context Gatherer.

4.  **Proceed:** Upon successful completion, proceed to the next step: **[02_ai_assessment.md](./02_ai_assessment.md)**.

## Error Handling
*   If the Context Gatherer agent fails (including issues reading user files or applying preferences), the Coordinator should:
    *   Attempt to retry the delegation.
    *   Check the status of relevant MCP tools.
    *   If failure persists, notify the User.
    *   Consider proceeding with minimal context (if possible) or abandoning the workflow.