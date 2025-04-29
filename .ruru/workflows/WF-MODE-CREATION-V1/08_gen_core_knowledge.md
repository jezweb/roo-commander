+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-08-GEN-CORE-KNOWLEDGE"
title = "Generate Core Knowledge & Capabilities"
step_number = 8
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-09-CREATE-KB-CONTENT" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-07-CREATE-MODE-FILE" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "core-knowledge", "generation", "mcp-preference", "delegation", "mode-creation"]

# --- Workflow Step Specific Fields ---
description = "Generates the 'Core Knowledge & Capabilities' section for the mode definition file, preferring MCP tools but providing fallbacks."
delegation_mode = "Coordinator (Roo Commander), potentially delegates to agent-research, agent-context-condenser, mode-maintainer, util-second-opinion" # Primary mode responsible for this step
# inputs = ["mode_slug", "mode_purpose", "temp_context_file_path", "mode_file_path"] # List of expected input data/context (optional)
# outputs = ["core_knowledge_generation_status"] # List of expected output data/context (optional)
error_handling = "If generation fails (MCP query, fallback synthesis, file insertion), log error, notify User. Ensure `.mode.md` reflects failure (placeholder remains). Proceed if possible." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 08: Generate Core Knowledge & Capabilities

**Responsible Mode:** Coordinator (Roo Commander), potentially delegates as needed

## Procedure

1.  **Check MCP Availability:**
    *   Coordinator checks if the `vertex-ai-mcp-server` is connected and operational.

2.  **Generate Knowledge (Branching Logic):**

    *   **If Vertex AI MCP is Available:**
        1.  **Delegate Generation:** Coordinator instructs an agent (e.g., `agent-research` or `mode-maintainer`) to use the `vertex-ai-mcp-server`'s `explain_topic_with_docs` tool.
        2.  **Formulate Query:** The query should be based on the mode's `slug` and `purpose` (potentially parsed from `.ruru/temp/mode-creation-context-<new-slug>.json`).
            *   *Example Query:* "Explain core concepts, principles, best practices, and key functionalities for a [Mode Purpose/Topic] specialist, suitable for an AI assistant's internal knowledge base."
        3.  **Receive Output:** The agent receives the generated Markdown output.
        4.  **Delegate Insertion:** Coordinator instructs `mode-maintainer` to insert the received Markdown content into the `## Core Knowledge & Capabilities` section of `.ruru/modes/<new-slug>/<new-slug>.mode.md` (created in **[Step 07](./07_create_mode_file.md)**), replacing the placeholder `<!-- Core Knowledge to be generated... -->`.
            *   *(Tool Preference: Use `apply_diff` or `insert_content`.)*

    *   **If Vertex AI MCP is NOT Available:**
        1.  **Ask User for Sources:** Coordinator uses `ask_followup_question` to ask the User: "Vertex AI tools are unavailable for advanced knowledge generation. Can you provide paths to relevant source files (code, docs) to help generate the Core Knowledge section?"
            *   *Suggestions:* `<suggest>Yes, provide paths</suggest>`, `<suggest>No, generate from base knowledge</suggest>`
        2.  **Handle User Response:**
            *   **If User provides paths:**
                *   Coordinator delegates to `agent-research` to read the specified files (iteratively, prefer MCP `read_multiple_files_content`, fallback `read_file`).
                *   Coordinator delegates to `agent-context-condenser` (or uses base LLM directly) to synthesize knowledge from the file content into Markdown suitable for the `## Core Knowledge & Capabilities` section.
            *   **If User says No:**
                *   Coordinator delegates to `agent-context-condenser` (or uses base LLM directly) to generate knowledge based *only* on the mode's purpose/slug using internal knowledge, formatted as Markdown for the `## Core Knowledge & Capabilities` section.
        3.  **(Optional) Review:** Coordinator delegates the generated Markdown (from B.2 or B.3) to `util-second-opinion` for review. Incorporate feedback if necessary (potentially via `mode-maintainer`).
        4.  **Delegate Insertion:** Coordinator instructs `mode-maintainer` to insert the final generated/reviewed Markdown content into the `## Core Knowledge & Capabilities` section of `.ruru/modes/<new-slug>/<new-slug>.mode.md`, replacing the placeholder.
            *   *(Tool Preference: Use `apply_diff` or `insert_content`.)*

3.  **Await Completion:**
    *   Coordinator awaits the completion signal and status report from the delegated agent(s).

4.  **Proceed:** Upon successful generation and insertion of the Core Knowledge content (or handling failure), proceed to the next step: **[09_create_kb_content.md](./09_create_kb_content.md)**.

## Error Handling
*   If Core Knowledge generation fails (MCP query, fallback synthesis, file insertion):
    *   Log the specific error.
    *   Notify the User about the failure.
    *   Ensure the `.mode.md` file reflects the failure (e.g., the placeholder remains or an error note is added).
    *   Proceed with the workflow if possible, but acknowledge that the mode's quality will be lower without this section populated.