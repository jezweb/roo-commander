+++
# --- Step Metadata ---
step_id = "WF-REPOMIX-V2-00-START" # (String, Required) Unique ID for this step.
title = "Step 00: Start Repomix Workflow" # (String, Required) Title of this specific step.
description = """
Initial setup for the Repomix workflow. Gathers the user request, target paths,
context paths, and any specific instructions. Validates that essential inputs
are present before proceeding.
"""

# --- Flow Control ---
depends_on = [] # (Array of Strings, Required) Always empty for the start step.
next_step = "01_gather_context.md" # (String, Required) Filename of the next step on successful completion.
error_step = "EE_handle_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "" # (String, Optional) Handled by the initiating coordinator.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Usually references overall workflow inputs.
    "Workflow Input: User request detailing the goal.",
    "Workflow Input: Specification of target files/directories.",
    "Workflow Input: Identification of relevant context source files/directories.",
    "Workflow Input: Optional specific instructions or constraints.",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "validated_inputs: Confirmation that essential inputs (goal, target, context) are available.",
    "task_name: User-confirmed, filesystem-safe name for the task.",
    "timestamp: Timestamp string (e.g., YYYYMMDDHHMMSS) generated for uniqueness.",
    "task_directory: Path to the dedicated directory for this task's output and temporary files.",
    "temp_clone_path: Path within the task directory for temporary clones.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/24_workflow_step_start.md" # (String, Required) Link to this template definition.
+++

# Step 00: Start Repomix Workflow

## Actions

1.  **Receive Inputs:** Obtain the user's goal and target path(s) from the initiating coordinator. Use `ask_followup_question` to determine the *type* of context source (e.g., Workspace Path, External Path, Git URL) before requesting the specific context path/URL and any specific instructions.
2.  **Confirm Task Name:** Analyze the gathered source paths/URLs. Suggest 2-3 filesystem-safe task names based on the sources. Use `ask_followup_question` to confirm the final `[task_name]` with the user.
3.  **Define Paths & Create Directory:** Generate a timestamp `[timestamp]` (e.g., YYYYMMDDHHMMSS). Define the task output directory `[task_directory]` as `.ruru/docs/repomix/[task_name]-[timestamp]/`. Create this directory using `execute_command mkdir -p "[task_directory]"`. Define the temporary clone path `[temp_clone_path]` as `[task_directory]/temp_clone/`.
4.  **Validate Preconditions:** After receiving the specific context path/URL based on the determined type, ensure that the goal, target path(s), and context path/URL are provided and seem reasonable. Perform basic validation (e.g., check if paths exist if applicable).
5.  **Prepare for Next Step:** Package the validated inputs, `task_name`, `task_directory`, `temp_clone_path`, and `timestamp` for the `{{next_step}}`.

## Acceptance Criteria

*   User goal, target path(s), and context path(s) are received.
*   Basic validation confirms the presence of essential inputs.
*   Inputs required for `{{next_step}}` are prepared.

## Error Handling

*   If essential inputs (goal, target, context) are missing or clearly invalid, proceed to `{{error_step}}` (if defined) or report failure to the coordinator.