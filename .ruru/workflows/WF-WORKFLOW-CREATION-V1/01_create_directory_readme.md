+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-01-CREATE-DIR-README" # (String, Required) Unique ID for this step (e.g., "WF-REPOMIX-V2-01-ANALYZE").
title = "Step 01: Create Workflow Directory and README" # (String, Required) Title of this specific step.
description = """
Creates the target workflow directory and populates its README.md using the standard template and inputs from the previous step.
"""

# --- Flow Control ---
depends_on = ["WF-WORKFLOW-CREATION-V1-00-START"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "02_create_start_step.md" # (String, Optional) Filename of the next step on successful completion. Can be empty if branching or finishing.
error_step = "EE_file_creation_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "prime-txt" # (String, Optional) Mode responsible for executing the core logic of this step.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-WORKFLOW-CREATION-V1-00-START: workflow_name",
    "Output from step WF-WORKFLOW-CREATION-V1-00-START: workflow_goal",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "target_workflow_readme_path: Path to the created README.md for the new workflow.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 01: Create Workflow Directory and README

## Actions

1.  **Receive Inputs:** Get `workflow_name` and `workflow_goal` from the previous step (`WF-WORKFLOW-CREATION-V1-00-START`).
2.  **Construct Paths:**
    *   Target Directory: `.ruru/workflows/[workflow_name]/` (Replace `[workflow_name]` with the input value).
    *   Target README Path: `.ruru/workflows/[workflow_name]/README.md` (Replace `[workflow_name]` with the input value).
3.  **Read Template:** Load the content of the workflow README template: `.ruru/templates/toml-md/23_workflow_readme.md`.
4.  **Populate Template:**
    *   Replace `{{workflow_name}}` with the input `workflow_name`.
    *   Replace `{{workflow_goal}}` with the input `workflow_goal`.
    *   Set `status = "Draft"`.
    *   Set `version = "1.0.0"`.
    *   Set `last_updated` to the current date (e.g., "2025-04-29").
5.  **Write File:** Use the `write_to_file` tool to create the new README file at the `Target README Path`. This action will also create the `Target Directory` if it doesn't exist.
6.  **Output Path:** Provide the `Target README Path` as the output `target_workflow_readme_path`.

## Acceptance Criteria

*   The directory `.ruru/workflows/[workflow_name]/` exists.
*   The file `.ruru/workflows/[workflow_name]/README.md` exists and contains the populated content from the `23_workflow_readme.md` template.
*   The `target_workflow_readme_path` output correctly points to the created README file.

## Error Handling

*   If reading the template file fails, proceed to `EE_file_creation_error.md`.
*   If writing the new README file fails (e.g., due to permissions), proceed to `EE_file_creation_error.md`.