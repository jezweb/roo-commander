+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-03-DEFINE-STD-STEPS" # (String, Required) Unique ID for this step (e.g., "WF-REPOMIX-V2-01-ANALYZE").
title = "Step 03: Define Standard Workflow Steps (Iterative)" # (String, Required) Title of this specific step.
description = """
Interactively prompts the user to define each standard step (01 to NN-1) of the target workflow. Creates the corresponding step file using the standard template for each defined step. This step may loop until the user indicates all standard steps are defined.
"""

# --- Flow Control ---
depends_on = ["WF-WORKFLOW-CREATION-V1-02-CREATE-START-STEP"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "04_create_finish_step.md" # (String, Optional) Filename of the next step on successful completion. Can be empty if branching or finishing.
error_step = "EE_step_definition_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "" # (String, Optional) Mode responsible for executing the core logic of this step. Likely handled by orchestrator/user interaction loop.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-WORKFLOW-CREATION-V1-00-START: workflow_name",
    "User input for each step: description, delegate_to, inputs, outputs, next_step_filename",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "target_workflow_step_paths: List of paths to the created standard step files (01..NN-1).",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 03: Define Standard Workflow Steps (Iterative)

## Actions

This step guides the user through an interactive loop to define and create each standard workflow step (from 01 up to the step before the finish step).

**Conceptual Loop:**

1.  **Initialize:** Start with step number `NN = 1`. Keep track of the `previous_step_id` (initially the `step_id` from `depends_on`, i.e., "WF-WORKFLOW-CREATION-V1-02-CREATE-START-STEP").
2.  **Prompt User:** Ask the user for details of the next standard step (Step `NN`). Required details include:
    *   `description`: What the step does.
    *   `delegate_to`: (Optional) Specialist mode slug.
    *   `inputs`: (Optional) List of input artifacts/data.
    *   `outputs`: (Optional) List of output artifacts/data.
    *   `next_step_filename`: (Optional) Filename for the *subsequent* standard step (e.g., `02_another_step.md`). If this is the *last* standard step, this should be left blank or indicate transition to the main `next_step` defined in *this* file's TOML (`04_create_finish_step.md`).
    *   `step_filename`: The desired filename for the *current* step being defined (e.g., `01_process_data.md`). Must start with `NN_`.
3.  **Validate Input:** Ensure `step_filename` starts with the correct two-digit step number (`NN`).
4.  **Calculate Step ID:** Generate the unique `step_id` for the new step (e.g., `WF-[WORKFLOW_NAME]-V[VERSION]-[NN]-[STEP_NAME]`).
    (Note: `[STEP_NAME]` should be derived by converting the core part of the `step_filename` (e.g., 'process_data' from `01_process_data.md`) to uppercase with hyphens. `[VERSION]` should be derived from the overall `workflow_name`.)
5.  **Construct Path:** Determine the full path for the new step file: `.ruru/workflows/[workflow_name]/[step_filename]`.
6.  **Prepare Content:**
    *   Read the standard step template: `.ruru/templates/toml-md/25_workflow_step_standard.md`.
    *   Populate the template's TOML with:
        *   `step_id`: Calculated in step 4.
        *   `title`: "Step NN: [User-provided description snippet]".
        *   `description`: User-provided description.
        *   `depends_on`: `[previous_step_id]`.
        *   `next_step`: User-provided `next_step_filename` (or empty if last standard step).
        *   `error_step`: (Define standard or leave placeholder).
        *   `delegate_to`: User-provided `delegate_to`.
        *   `inputs`: User-provided `inputs`.
        *   `outputs`: User-provided `outputs`.
        *   `last_updated`: Current date.
    *   Populate the template's Markdown body placeholders.
7.  **Create Step File:** Use `write_to_file` to save the populated content to the path constructed in step 5. Add the created path to the `target_workflow_step_paths` list (output of this overall step).
8.  **Update Loop State:** Set `previous_step_id` to the `step_id` created in step 4. Increment `NN`.
9.  **Check for More Steps:** Ask the user: "Are there more standard steps to define for this workflow?".
10. **Repeat or Exit:**
    *   If YES: Go back to step 2.
    *   If NO: The loop is complete. Proceed to the `next_step` defined in this file's TOML (`04_create_finish_step.md`).
    (UX Suggestion: The orchestrator managing this loop might consider confirming the generated `step_id` and the `next_step` linkage with the user before creating each file.)

## Acceptance Criteria

*   All standard steps (01 to NN-1) for the target workflow are defined by the user.
*   A corresponding `.md` file exists for each standard step in the workflow directory (`.ruru/workflows/[workflow_name]/`).
*   Each created step file uses the `25_workflow_step_standard.md` template and is populated correctly.
*   The `depends_on` field of each created step correctly points to the `step_id` of the preceding step.
*   The `next_step` field of each created step correctly points to the filename of the subsequent step (or is empty/points to finish if it's the last standard step).
*   A list of all created standard step file paths (`target_workflow_step_paths`) is available as output.

## Error Handling

*   If the user provides invalid input (e.g., incorrect filename format), prompt again.
*   If file writing fails during the loop, report the error and potentially jump to `EE_step_definition_error.md`.