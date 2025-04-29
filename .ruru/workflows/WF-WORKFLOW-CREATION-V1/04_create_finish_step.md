+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-04-CREATE-FINISH-STEP" # (String, Required) Unique ID for this step (e.g., "WF-REPOMIX-V2-01-ANALYZE").
title = "Step 04: Create Target Workflow's Finish Step" # (String, Required) Title of this specific step.
description = """
Creates the `99_finish.md` file within the target workflow's directory using the standard finish step template.
"""

# --- Flow Control ---
depends_on = ["WF-WORKFLOW-CREATION-V1-03-DEFINE-STD-STEPS"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "05_review_workflow.md" # (String, Optional) Filename of the next step on successful completion.
error_step = "EE_file_creation_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "prime-txt" # (String, Optional) Mode responsible for executing the core logic of this step.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-WORKFLOW-CREATION-V1-00-START: workflow_name",
    "Output from step WF-WORKFLOW-CREATION-V1-03-DEFINE-STD-STEPS: target_workflow_step_paths", # Need name and list of previous steps
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "target_workflow_finish_path: Path to the created 99_finish.md for the new workflow.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/26_workflow_step_finish.md" # (String, Required) Link to this template definition.
+++

# Step 04: Create Target Workflow's Finish Step

## Actions

This step creates the final `99_finish.md` step file for the newly defined workflow.

1.  **Determine Target Path:** Construct the path for the new finish step file: `.ruru/workflows/[workflow_name]/99_finish.md`, using the `workflow_name` from the input.
2.  **Read Finish Template:** Use `read_file` to load the content of the standard finish step template: `.ruru/templates/toml-md/26_workflow_step_finish.md`.
3.  **Populate Finish Template:**
    *   Set `step_id` to `WF-[workflow_name]-V1-99-FINISH`.
    *   Set `title` to "Step 99: Finish Workflow".
    *   Set `description` to a generic completion message (e.g., "Workflow completed successfully.").
    *   Set `depends_on` to an array containing the `step_id` of the *last* standard step created in step `WF-WORKFLOW-CREATION-V1-03-DEFINE-STD-STEPS`. This requires accessing the last element of the `target_workflow_step_paths` input array and extracting the `step_id` from that file's content (Implementation Note: This requires the delegate/orchestrator to identify the last path in the `target_workflow_step_paths` input list, read that file's content, parse its TOML frontmatter, and extract the `step_id` value.).
    *   Set `next_step` to `""` (empty string) as it's the final step.
    *   Set `error_step` to `""` (or a generic error handler if applicable).
    *   Set `delegate_to` to `""` (no further delegation needed).
    *   Set `inputs` and `outputs` appropriately (likely empty or minimal for a finish step).
    *   Set `last_updated` to the current date (`2025-04-29`).
    *   Set `template_schema_doc` to `.ruru/templates/toml-md/26_workflow_step_finish.md`.
    *   Populate the Markdown body placeholders (`{{title}}`, `{{description}}`).
4.  **Write Finish File:** Use `write_to_file` to create the new file at the **Target Path** determined in step 1, containing the populated content from step 3.
5.  **Output Path:** Record the path created in step 4 as the `target_workflow_finish_path` output.

## Acceptance Criteria

*   The file `.ruru/workflows/[workflow_name]/99_finish.md` exists.
*   The created file contains valid TOML+Markdown content based on the `26_workflow_step_finish.md` template.
*   The `depends_on` field in the created file correctly references the last standard step of the new workflow.
*   The `target_workflow_finish_path` output correctly points to the created file.

## Error Handling

*   If reading templates fails, proceed to `EE_file_creation_error.md`.
*   If writing the file fails, proceed to `EE_file_creation_error.md`.