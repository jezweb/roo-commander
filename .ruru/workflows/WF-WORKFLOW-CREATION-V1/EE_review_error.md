+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-EE-REVIEW"
title = "Error: Workflow Review Failed"
description = """
Handles errors during the delegation or execution of the workflow review (Step 05).
"""

# --- Flow Control ---
depends_on = []
next_step = ""
error_step = ""

# --- Execution ---
delegate_to = ""

# --- Interface ---
inputs = [
    "Error details from Step 05 (e.g., delegation failure, reviewer error)",
]
outputs = [
    "workflow_result: Error message indicating review step failure.",
]

# --- Housekeeping ---
last_updated = "2025-04-29"
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md"
+++

# Error Step: Workflow Review Failed

## Actions

1.  **Log Error:** Record the specific error details received from Step 05 (e.g., failure to delegate to reviewer, error reported by reviewer).
2.  **Construct Error Message:** Create a user-friendly error message explaining the failure during the review step. Assign this message to the `workflow_result` output variable.
3.  **Terminate Workflow:** Indicate that the workflow execution stops here due to the error.

## Acceptance Criteria

*   The review step error details are logged.
*   An appropriate error message is generated in `workflow_result`.
*   The workflow terminates.

## Error Handling

*   This is an error handling step. Log any unexpected issues encountered during this step.