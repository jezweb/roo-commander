+++
# --- Step Metadata ---
step_id = "WF-REPOMIX-V2-05-COPY-CONTEXT" # (String, Required) Unique ID for this step (e.g., "WF-REPOMIX-V2-01-ANALYZE").
title = "Step 05: Copy Artifacts to Workspace Context (Optional)" # (String, Required) Title of this specific step.
description = """
Asks the user if they want to copy key generated Repomix artifacts (e.g., the main .md or .xml file) to the central `.ruru/context/` directory for use by other modes.
"""

# --- Flow Control ---
depends_on = ["WF-REPOMIX-V2-03-REVIEW-CODE"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "06_cleanup.md" # (String, Optional) Filename of the next step on successful completion. Can be empty if branching or finishing.
error_step = "EE_handle_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "" # (String, Optional) Mode responsible for executing the core logic of this step. Coordinator or last delegate handles interaction.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-REPOMIX-V2-00-START: task_directory, task_name",
    "Output from step WF-REPOMIX-V2-02-GENERATE-CODE: generated_code_artifact_paths",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "context_copy_status: Indicates if files were copied and which ones.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 05: Copy Artifacts to Workspace Context (Optional)

## Actions

1.  Receive inputs: `task_directory`, `task_name`, `generated_code_artifact_paths`.
2.  Use `ask_followup_question` to ask the user: "Do you want to copy any generated artifacts from `[task_directory]` to `.ruru/context/` to make them available as general workspace context?"
3.  Provide suggestions like: "Copy `[task_name].repomix.md`", "Copy `[task_name].repomix.xml`", "Specify other file(s) relative to `[task_directory]`", "Do not copy anything".
4.  If the user chooses to copy:
    *   Determine the source path(s) within `[task_directory]` and the target path in `.ruru/context/`.
    *   Use `execute_command` (OS-aware) to copy the selected file(s).
    *   Log the copy operation and set `context_copy_status` accordingly.
5.  If the user chooses not to copy, set `context_copy_status` to "No files copied".

## Acceptance Criteria

*   User has been prompted about copying artifacts to workspace context.
*   Any requested copy operations have been attempted.
*   `context_copy_status` output is generated.

## Error Handling

*   If copy command fails, log the error but proceed to `06_cleanup.md`. Report the copy failure in the final summary.