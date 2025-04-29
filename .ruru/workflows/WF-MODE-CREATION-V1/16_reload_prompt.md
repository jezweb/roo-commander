+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-16-RELOAD-PROMPT"
title = "Prompt User to Reload Window"
step_number = 16
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-17-FINALIZATION" # Corrected next step ID
prev_step_id = "WF-MODE-CREATION-V1-15-DELETE-TEMP-FILE" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "user-interaction", "reload", "finalization", "mode-creation"]

# --- Workflow Step Specific Fields ---
description = "Instructs the user to reload the VS Code window so the newly created mode becomes available."
delegation_mode = "Coordinator (Roo Commander)" # Primary mode responsible for this step
# inputs = ["cleanup_status"] # List of expected input data/context (optional)
# outputs = ["user_reload_confirmation"] # List of expected output data/context (optional)
# error_handling = "" # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 16: Prompt User to Reload Window

**Responsible Mode:** Coordinator (Roo Commander)
**Interacts With:** User

## Procedure

1.  **Confirm Preconditions:**
    *   Coordinator confirms that the mode registry build (**[Step 14](./14_build_registry.md)**) and temporary file cleanup (**[Step 15](./15_delete_temp_file.md)**) have completed (or cleanup failure was noted).

2.  **Instruct User to Reload:**
    *   Coordinator informs the user:
        > "The mode structure is complete, the registry has been rebuilt, and temporary files cleaned up (if applicable). **Please reload the VS Code window now** for the changes to take effect. You can do this via the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and searching for 'Developer: Reload Window'."

3.  **Await Confirmation:**
    *   Coordinator waits for the user to confirm (e.g., by sending a message like "Done" or "Reloaded") that the window has been reloaded.

4.  **Proceed:** After user confirmation, proceed to the next step: **[17_finalization.md](./17_finalization.md)**.

## Error Handling
*   If the user indicates they are having trouble reloading, the Coordinator can offer alternative methods (e.g., closing and reopening VS Code) or suggest checking the VS Code documentation.