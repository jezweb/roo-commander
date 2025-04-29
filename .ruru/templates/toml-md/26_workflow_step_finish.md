+++
# --- Step Metadata ---
step_id = "WF-[WORKFLOW_NAME]-V[VERSION]-99-FINISH" # (String, Required) Unique ID for this step.
# Convention: The final step in a workflow should always use step_number = 99
step_number = 99
title = "Step 99: Finish Workflow" # (String, Required) Title of this specific step.
description = """
(String, Required) Finalization steps, cleanup actions, reporting results,
and determining overall workflow success/failure.
"""

# --- Flow Control ---
depends_on = ["PREVIOUS_STEP_ID"] # (Array of Strings, Required) step_ids this step needs completed first. Usually the last standard step(s).
next_step = "" # (String, Required) Always empty for the finish step.
error_step = "" # (String, Optional) Usually empty, but could point to a final error reporting step.

# --- Execution ---
delegate_to = "" # (String, Optional) Mode responsible for executing the core logic of this step. Often empty for finish, handled by orchestrator or final delegate.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed from previous steps.
    "Output from step {{depends_on[0]}}: final_artifact",
]
outputs = [ # (Array of Strings, Optional) Final workflow outputs.
    "workflow_result: Summary of success/failure and key outcomes.",
]

# --- Housekeeping ---
last_updated = "{{DATE}}" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/26_workflow_step_finish.md" # (String, Required) Link to this template definition.
+++

# Step 99: Finish Workflow

## Actions

1.  **Aggregate Results:** Collect outputs from previous steps (`{{depends_on}}`).
2.  **Perform Cleanup:** (e.g., Remove temporary files, close connections).
3.  **Generate Final Report:** Create a summary of the workflow execution.
4.  **Determine Final Status:** Based on results, determine overall success or failure.
5.  **Report Outcome:** Prepare the final `workflow_result` output.

## Acceptance Criteria

*   All necessary results are aggregated.
*   Cleanup actions are completed successfully.
*   A final report/summary is generated.
*   The overall workflow status (success/failure) is determined.

## Error Handling

*   (Describe how errors during finalization should be handled, if applicable).