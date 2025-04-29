+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-05-KB-PROMPT"
title = "Optional KB Population Prompt"
step_number = 5
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-06-CREATE-DIRS" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-04-SAVE-CONTEXT" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "kb-prompt", "user-interaction", "ai-assessment", "mode-creation", "mcp-preference"]

# --- Workflow Step Specific Fields ---
description = "Presents AI context assessment to the user and prompts for KB structure/population preference."
delegation_mode = "Coordinator (Roo Commander)" # Primary mode responsible for this step
# inputs = ["temp_context_file_path", "ai_assessment_rating", "ai_assessment_topics"] # List of expected input data/context (optional)
# outputs = ["kb_population_preference", "kb_structure_preference"] # List of expected output data/context (optional)
# error_handling = "" # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 05: Optional KB Population Prompt

**Responsible Mode:** Coordinator (Roo Commander)
**Interacts With:** User

## Procedure

1.  **Review Context & Assessment:**
    *   Coordinator reads the temporary context file (`.ruru/temp/mode-creation-context-<new-slug>.json`) created in **[Step 04](./04_save_context.md)**. (Prefer MCP `read_file_content`, fallback `read_file`).
    *   Coordinator retrieves the AI assessment rating and key topics generated in **[Step 02](./02_ai_assessment.md)**.

2.  **Present Options to User:**
    *   Coordinator uses `ask_followup_question` to present the assessment and KB options:
        *   **Question:** "The AI assessment suggests the gathered context is rated '[AI Rating from Step 02]' covering topics like '[Key Topics from Step 02]'. Based on this, how should we structure the Knowledge Base (KB)?"
        *   **Suggestions (Tailored based on AI Rating):**
            *   `<suggest>1. Standard KB (Single Folder): Populate KB files directly in 'kb/'.</suggest>`
            *   `<suggest>2. Comprehensive KB (Subfolders): Organize KB files into subfolders within 'kb/' based on topics.</suggest>` (Offer this prominently if rating is Comprehensive/Advanced)
            *   `<suggest>3. Basic KB Structure: Create placeholder files only.</suggest>` (Offer if rating is Basic or context seems limited)
            *   `<suggest>4. Skip KB Population: Do not create KB files now.</suggest>`
        *   *(Note: Replace `[AI Rating from Step 02]` and `[Key Topics from Step 02]` with actual values)*

3.  **Store Decision:**
    *   Coordinator stores the User's decision regarding KB population (Populate, Basic, Skip) and structure (Single Folder vs. Subfolders). This decision will be used in **[Step 09](./09_create_kb_content.md)** and potentially **[Step 03](./03_context_synthesis.md)** if re-synthesis is needed based on structure.

4.  **Proceed:** Upon receiving the user's decision, proceed to the next step: **[06_create_dirs.md](./06_create_dirs.md)**.

## Error Handling
*   If the user provides an unclear response, the Coordinator should re-prompt for clarification.