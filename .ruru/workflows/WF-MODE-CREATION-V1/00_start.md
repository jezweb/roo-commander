+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-00-START"
title = "Initiation & Refined Requirements Gathering"
step_number = 0
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-01-CONTEXT-GATHERING" # Points to the next step file
prev_step_id = null # No previous step for the start node
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "start", "initiation", "requirements", "user-interaction", "mode-creation"]

# --- Workflow Step Specific Fields ---
description = "Initiates the mode creation process by gathering initial requirements, context preferences, slug, classification, and emoji from the user."
delegation_mode = "Coordinator (Roo Commander)" # Primary mode responsible for this step
# inputs = [] # List of expected input data/context (optional)
# outputs = ["mode_purpose", "context_preference", "user_files", "kb_focus", "doc_priority", "research_level", "mode_slug", "mode_classification", "mode_emoji"] # List of expected output data/context (optional)
# error_handling = "If agreement cannot be reached on slug/classification, escalate or abandon." # Specific error handling for this step (optional)
related_docs = [
    "`.ruru/modes/roo-commander/kb/available-modes-summary.md`" # Naming conventions
]
related_templates = [
    "`.ruru/templates/toml-md/24_workflow_step_start.md`"
]
template_schema_doc = ".ruru/templates/toml-md/24_workflow_step_start.README.md"
+++

# Step 00: Initiation & Refined Requirements Gathering

**Responsible Mode:** Coordinator (Roo Commander)
**Interacts With:** User

## Procedure

1.  **Ask for Initial Description:**
    *   Coordinator asks the User for a general description of the desired mode's purpose and function.

2.  **Analyze & Read Summary:**
    *   Coordinator analyzes the description.
    *   Coordinator reads the mode summary file (`.ruru/modes/roo-commander/kb/available-modes-summary.md`) to understand existing modes and naming conventions.

3.  **Check for Similarity:**
    *   Coordinator checks if any existing modes are significantly similar to the User's description.

4.  **Prompt Enhancement vs. Creation:**
    *   If a similar mode is found:
        *   Coordinator asks the User: "A similar mode '[Existing Mode Name]' already exists. Would you prefer to enhance that mode instead?" (Provide "Yes" / "No" suggestions).
        *   If "Yes", note to abort this workflow and start an enhancement task.
        *   If "No", proceed with this workflow.

5.  **Ask User for Context Preferences:**
    *   Coordinator uses `ask_followup_question` to ask the User: "How should I approach gathering context and building the Knowledge Base (KB) for this mode? Please select an option:"
    *   *(Coordinator generates suggestions similar to the following)*
        *   `<suggest>1. Standard KB: Focus on common usage, prioritize official docs.</suggest>`
        *   `<suggest>2. Deep Dive KB: Use local docs (if specified), focus on advanced topics, deep research.</suggest>`
        *   `<suggest>3. Quick Overview KB: Broad focus, mixed sources, quick scan.</suggest>`
        *   `<suggest>4. Let me specify the details...</suggest>`

6.  **(Conditional) Handle Specific Details:**
    *   If the User selects "Let me specify the details...", the Coordinator follows up with specific questions:
        *   "Are there specific local files or directories you want me to use as primary context?" (Prompt for paths if yes).
        *   "Are there specific topics or areas the Knowledge Base (KB) should focus on?" (Optional input).
        *   "Should research prioritize official documentation (if applicable) over general web search?" (Yes/No/Default).
        *   "What level of research effort is desired?" (Offer dynamic options like: Quick Scan, Standard Research, Deep Dive).
    *   *(Coordinator notes the user's selection or detailed preferences for use in the next step: Context Gathering)*

7.  **Propose Slug & Classification:**
    *   Based on the description and naming conventions, Coordinator proposes a `prefix-topic` slug (which **MUST** be lowercase `kebab-case`) and `classification`.
    *   Ask the User for confirmation. Iterate if necessary.

8.  **Propose & Select Emoji:**
    *   Coordinator proposes 3-5 relevant emojis, potentially explaining the relevance briefly.
    *   Present these emojis *inline* within the confirmation suggestions (alongside slug/classification) for the User to select one.

9.  **Confirm Final Details:**
    *   Coordinator summarizes the refined purpose, use cases, target audience, slug, classification, emoji, and context preferences (selected option or specific details).
    *   Ask the User for final confirmation using `ask_followup_question`. The suggestions should be ordered:
        1.  Confirm all
        2.  Change slug
        3.  Change classification
        4.  Change emoji
        5.  Change context preferences
    *   *(Note: If the user chooses to change the emoji here, the next prompt should offer 4-10 relevant emoji options, potentially looping back to refine Step 8's selection)*.

10. **Proceed:** Upon final confirmation, proceed to the next step: **[01_context_gathering.md](./01_context_gathering.md)**.

## Error Handling
*   If agreement cannot be reached on the slug or classification after reasonable iteration, escalate to the User/owner for clarification or consider abandoning the workflow.