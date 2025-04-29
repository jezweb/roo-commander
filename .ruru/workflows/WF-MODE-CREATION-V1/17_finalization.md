+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-17-FINALIZATION"
title = "Finalization"
step_number = 17 # Renumbered from 18 in source
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-99-FINISH" # Points to the finish step
prev_step_id = "WF-MODE-CREATION-V1-16-RELOAD-PROMPT" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "finalization", "user-confirmation", "completion", "mode-creation"]

# --- Workflow Step Specific Fields ---
description = "Confirms with the user that the new mode is available and functioning after the window reload, then marks the workflow as complete."
delegation_mode = "Coordinator (Roo Commander)" # Primary mode responsible for this step
# inputs = ["user_reload_confirmation"] # List of expected input data/context (optional)
# outputs = ["workflow_completion_status"] # List of expected output data/context (optional)
error_handling = "If user reports issues accessing/using the mode, gather details and potentially initiate a debugging/refinement task." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 17: Finalization

**Responsible Mode:** Coordinator (Roo Commander)
**Interacts With:** User

## Procedure

1.  **Confirm Reload:**
    *   Coordinator has received confirmation from the user that the VS Code window was reloaded in **[Step 16](./16_reload_prompt.md)**.

2.  **Final User Confirmation:**
    *   Coordinator asks the user to confirm that the new mode is now available in the application's mode list and functions as expected at a basic level (e.g., the user can switch to it).
    *   Use `ask_followup_question`:
        *   **Question:** "After reloading, can you please confirm that the new mode '[Mode Title]' is visible in the mode selection list and you can switch to it?"
        *   **Suggestions:**
            *   `<suggest>Yes, the mode is available and seems functional.</suggest>`
            *   `<suggest>No, I cannot see or switch to the new mode.</suggest>`
            *   `<suggest>I can see the mode, but encountered an error when switching.</suggest>`

3.  **Handle Confirmation:**
    *   **If User Confirms Success:** Proceed to the finish step.
    *   **If User Reports Issues:**
        *   Gather details about the problem (e.g., error messages, specific behavior).
        *   Log the issue.
        *   Consider initiating a new debugging or refinement task based on the feedback. Do not proceed to finish until resolved or the user agrees to close with known issues.

4.  **Proceed:** Upon final user confirmation of availability and basic functionality, proceed to the finish step: **[99_finish.md](./99_finish.md)**.

## Error Handling
*   If the user reports that the mode is not available or functional after reload:
    *   Gather detailed information about the issue.
    *   Review the logs from the `build_roomodes.js` script execution (Step 14).
    *   Potentially loop back to Step 14 if a build error occurred and was missed, or initiate a new debugging task.
    *   Do not mark the workflow as complete until the mode is accessible or the issue is otherwise resolved/acknowledged.