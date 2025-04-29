+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-00-START" # (String, Required) Unique ID for this step.
title = "Step 00: Start Workflow Creation" # (String, Required) Title of this specific step.
description = """
Gather user input for the new workflow's name and goal. Validate input and prepare context for directory/README creation.
"""

# --- Flow Control ---
depends_on = [] # (Array of Strings, Required) Always empty for the start step.
next_step = "01_create_directory_readme.md" # (String, Required) Filename of the next step on successful completion.
error_step = "EE_input_validation_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "" # (String, Optional) Mode responsible for executing the core logic of this step. Often empty for start, handled by orchestrator or initial delegate.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Usually references overall workflow inputs.
    "Workflow Input: User request specifying new workflow name and goal.",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "workflow_name: Validated name for the new workflow.",
    "workflow_goal: Goal/description for the new workflow.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/24_workflow_step_start.md" # (String, Required) Link to this template definition.
+++

# Step 00: Start Workflow Creation

## Actions

1.  **Prompt User:** Request the user to provide the name (e.g., `WF-MY-NEW-WORKFLOW-V1`) and the goal/description for the new workflow.
2.  **Validate Input:**
    *   Ensure the provided workflow name follows the standard naming convention (e.g., `WF-[NAME]-V[VERSION]`).
    *   Ensure the goal is not empty.
3.  **Store Outputs:** Store the validated `workflow_name` and `workflow_goal` for use in the next step.

## Acceptance Criteria

*   User has provided a workflow name and goal.
*   The workflow name is validated against the naming convention.
*   The workflow goal is not empty.
*   Outputs `workflow_name` and `workflow_goal` are ready for the next step (`01_create_directory_readme.md`).

## Error Handling

*   If validation fails (invalid name format or empty goal), proceed to `EE_input_validation_error.md` (if defined).