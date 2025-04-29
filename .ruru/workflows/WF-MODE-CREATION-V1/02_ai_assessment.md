+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-02-AI-ASSESSMENT"
title = "AI Assessment of Context Depth/Breadth"
step_number = 2
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-03-CONTEXT-SYNTHESIS" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-01-CONTEXT-GATHERING" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "ai-assessment", "context-analysis", "llm", "mode-creation", "mcp-preference"]

# --- Workflow Step Specific Fields ---
description = "Assesses the depth and breadth of the gathered context using an LLM to inform KB structuring options."
delegation_mode = "Coordinator (Roo Commander)" # Can be delegated if needed
# inputs = ["gathered_context_sources", "mode_purpose", "mode_topic"] # List of expected input data/context (optional)
# outputs = ["ai_assessment_rating", "ai_assessment_topics"] # List of expected output data/context (optional)
error_handling = "If assessment fails, default to a 'Standard' rating, log the error, notify User, and proceed." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 02: AI Assessment of Context Depth/Breadth

**Responsible Mode:** Coordinator (Roo Commander), potentially delegates

## Procedure

1.  **Prepare Input:**
    *   Coordinator extracts the list of filenames/sources used or generated during **[Step 01](./01_context_gathering.md)**.

2.  **Formulate Query:**
    *   Coordinator formulates a query for an LLM (e.g., via `vertex-ai-mcp-server`'s `answer_query_direct` or internal capability).
    *   **Example Query:** "Based on these source filenames related to [Mode Purpose/Topic]: [List of filenames]. Assess the likely depth and breadth of the knowledge base that could be generated. Provide a rating (e.g., Basic, Standard, Comprehensive, Advanced) and list the key topics likely covered."
    *   *(Note: Replace `[Mode Purpose/Topic]` and `[List of filenames]` with actual values from previous steps.)*

3.  **Execute Query & Store Result:**
    *   Coordinator (or a delegated agent) executes the query using the chosen LLM tool (prefer MCP).
    *   Coordinator stores the resulting rating (e.g., "Comprehensive") and the list of key topics. This result will be used in **[Step 05](./05_kb_prompt.md)**.

4.  **Proceed:** Upon successful completion (or handling failure as per error handling), proceed to the next step: **[03_context_synthesis.md](./03_context_synthesis.md)**.

## Error Handling
*   If the AI assessment query fails:
    *   Log the error.
    *   Default the assessment rating to 'Standard'.
    *   Set the key topics list to empty or a generic placeholder.
    *   Notify the User of the assessment failure and the default rating being used.
    *   Proceed with the workflow.