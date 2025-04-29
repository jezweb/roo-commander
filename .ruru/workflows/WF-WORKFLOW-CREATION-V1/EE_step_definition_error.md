+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-EE-STEP-DEFINITION"
title = "Error: Step Definition Failed"
description = """
Handles errors during the interactive definition or creation of standard workflow steps (Step 03).
"""

# --- Flow Control ---
depends_on = []
next_step = ""
error_step = ""

# --- Execution ---
delegate_to = ""

# --- Interface ---
inputs = [
    "Error details from Step 03 (e.g., invalid input, file write error)",
]
outputs = [
    "workflow_result: Error message indicating failure during step definition.",
]

# --- Housekeeping ---
last_updated = "2025-04-29"
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md"
+++

# Error Step: Step Definition Failed

## Actions

1.  **Log Error:** Record the specific error details from Step 03 (e.g., which step number failed, invalid user input, file write error).
2.  **Construct Error Message:** Create a user-friendly error message explaining the failure during step definition. Assign this message to the `workflow_result` output variable.
3.  **Terminate Workflow:** Indicate that the workflow execution stops here due to the error.

## Acceptance Criteria

*   The step definition error details are logged.
*   An appropriate error message is generated in `workflow_result`.
*   The workflow terminates.

## Error Handling

*   This is an error handling step. Log any unexpected issues encountered during this step.