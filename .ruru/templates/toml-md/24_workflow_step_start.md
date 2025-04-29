+++
# --- Step Metadata ---
step_id = "WF-[WORKFLOW_NAME]-V[VERSION]-00-START" # (String, Required) Unique ID for this step.
title = "Step 00: Start Workflow" # (String, Required) Title of this specific step.
description = """
(String, Required) Initial setup, context gathering, precondition checks,
and triggering the first action or delegation for the workflow.
"""

# --- Flow Control ---
depends_on = [] # (Array of Strings, Required) Always empty for the start step.
next_step = "01_[NEXT_STEP_NAME].md" # (String, Required) Filename of the next step on successful completion.
error_step = "EE_handle_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "" # (String, Optional) Mode responsible for executing the core logic of this step. Often empty for start, handled by orchestrator or initial delegate.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Usually references overall workflow inputs.
    "Workflow Input: User request",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "initial_context: Description of gathered context.",
]

# --- Housekeeping ---
last_updated = "{{DATE}}" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/24_workflow_step_start.md" # (String, Required) Link to this template definition.
+++

# Step 00: Start Workflow

## Actions

1.  **Gather Initial Context:** (e.g., Read user request, check environment variables).
2.  **Validate Preconditions:** (e.g., Ensure required tools/files exist).
3.  **Prepare for Next Step:** (e.g., Format initial data).
4.  **(Optional) Delegate First Action:** If `delegate_to` is set, prepare message for delegation.

## Acceptance Criteria

*   Initial context is successfully gathered.
*   All preconditions are met.
*   Inputs for the next step (`{{next_step}}`) are ready.

## Error Handling

*   If preconditions fail, proceed to `{{error_step}}` (if defined).