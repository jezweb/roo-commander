+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-02-CREATE-START-STEP" # (String, Required) Unique ID for this step (e.g., "WF-REPOMIX-V2-01-ANALYZE").
title = "Step 02: Create Target Workflow's Start Step" # (String, Required) Title of this specific step.
description = """
Creates the `00_start.md` file within the target workflow's directory using the standard start step template.
"""

# --- Flow Control ---
depends_on = ["WF-WORKFLOW-CREATION-V1-01-CREATE-DIR-README"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "03_define_standard_steps.md" # (String, Optional) Filename of the next step on successful completion. Can be empty if branching or finishing.
error_step = "EE_file_creation_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "prime-txt" # (String, Optional) Mode responsible for executing the core logic of this step.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-WORKFLOW-CREATION-V1-00-START: workflow_name",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "target_workflow_start_path: Path to the created 00_start.md for the new workflow.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 02: Create Target Workflow's Start Step

## Actions

1.  Retrieve the `workflow_name` from the input artifacts (e.g., from `Output from step WF-WORKFLOW-CREATION-V1-00-START: workflow_name`).
2.  Construct the target path for the new workflow's start step: `.ruru/workflows/[workflow_name]/00_start.md`.
3.  Read the content of the standard start step template: `.ruru/templates/toml-md/24_workflow_step_start.md`.
4.  Populate the template content:
    *   Replace `{{WORKFLOW_NAME}}` with the actual `workflow_name`.
    *   Replace `{{VERSION}}` (if present) with `V1` or a suitable default.
    *   Update `step_id` to `WF-[workflow_name]-V1-00-START`.
    *   Update `title` to "Step 00: Start Workflow [workflow_name]".
    *   Update `description` to "Initializes the [workflow_name] workflow."
    *   Update `next_step` to point to the *first actual step* of the *new* workflow (e.g., "01_..."). This might require a placeholder initially (e.g., "01_placeholder.md").
    *   Update `last_updated` to the current date ("2025-04-29").
5.  Use the `write_to_file` tool to create the file at the constructed target path (`.ruru/workflows/[workflow_name]/00_start.md`) with the populated content.

## Acceptance Criteria

*   The file `.ruru/workflows/[workflow_name]/00_start.md` exists.
*   The file content is based on the `.ruru/templates/toml-md/24_workflow_step_start.md` template.
*   The TOML frontmatter and Markdown placeholders within the created file are correctly populated with details relevant to the new workflow.
*   The `target_workflow_start_path` output artifact contains the correct path to the created file (e.g., `.ruru/workflows/[workflow_name]/00_start.md`).

## Error Handling

*   If reading the template `.ruru/templates/toml-md/24_workflow_step_start.md` fails, proceed to `EE_file_creation_error.md` (or a similar generic file error step).
*   If writing the file `.ruru/workflows/[workflow_name]/00_start.md` fails, proceed to `EE_file_creation_error.md`.