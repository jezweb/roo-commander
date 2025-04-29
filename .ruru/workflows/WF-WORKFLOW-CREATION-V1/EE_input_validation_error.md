+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-EE-INPUT-VALIDATION"
title = "Error: Input Validation Failed"
description = """
Handles errors related to invalid user input during workflow initiation (Step 00).
"""

# --- Flow Control ---
depends_on = []
next_step = ""
error_step = ""

# --- Execution ---
delegate_to = ""

# --- Interface ---
inputs = [
    "Error details from Step 00",
]
outputs = [
    "workflow_result: Error message indicating input validation failure.",
]

# --- Housekeeping ---
last_updated = "2025-04-29"
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md"
+++

# Error Step: Input Validation Failed

## Actions

1.  **Log Error:** Record the specific validation error details received from Step 00 (e.g., invalid workflow name format, missing goal description).
2.  **Construct Error Message:** Create a user-friendly error message explaining the input validation failure. Assign this message to the `workflow_result` output variable.
3.  **Terminate Workflow:** Indicate that the workflow execution stops here due to the error.

## Acceptance Criteria

*   The validation error is logged.
*   An appropriate error message is generated in `workflow_result`.
*   The workflow terminates.

## Error Handling

*   This is an error handling step; further errors here might indicate a critical failure in the workflow engine itself. Log any unexpected issues encountered during this step.