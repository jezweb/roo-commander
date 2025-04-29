+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-EE-FILE-CREATION"
title = "Error: File Creation/Write Failed"
description = """
Handles errors encountered while creating workflow directories or writing step files (Steps 01, 02, 04).
"""

# --- Flow Control ---
depends_on = []
next_step = ""
error_step = ""

# --- Execution ---
delegate_to = ""

# --- Interface ---
inputs = [
    "Error details from failing step (e.g., path, error message)",
]
outputs = [
    "workflow_result: Error message indicating file creation failure.",
]

# --- Housekeeping ---
last_updated = "2025-04-29"
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md"
+++

# Error Step: File Creation/Write Failed

## Actions

1.  **Log Error:** Record the specific file path and error message received from the failing step (e.g., permission denied, disk full).
2.  **Construct Error Message:** Create a user-friendly error message explaining the file operation failure. Assign this message to the `workflow_result` output variable.
3.  **Terminate Workflow:** Indicate that the workflow execution stops here due to the error.

## Acceptance Criteria

*   The file operation error (path, message) is logged.
*   An appropriate error message is generated in `workflow_result`.
*   The workflow terminates.

## Error Handling

*   This is an error handling step. Log any unexpected issues encountered during this step. Consider potential cleanup actions if partial files were created.