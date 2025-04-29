+++
# --- Step Metadata ---
step_id = "WF-REPOMIX-V2-06-CLEANUP" # (String, Required) Unique ID for this step.
title = "Step 06: Cleanup Temporary Files" # (String, Required) Title of this specific step.
description = """
Removes temporary files created during the workflow, specifically the directory
used for cloning remote repositories if applicable.
"""

# --- Flow Control ---
depends_on = ["WF-REPOMIX-V2-05-COPY-CONTEXT"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "99_finish.md" # (String, Required) Points to the new final finish step.
error_step = "" # (String, Optional) Usually empty.

# --- Execution ---
delegate_to = "MODE-SPEC-REPOMIX" # (String, Optional) Specialist mode to handle cleanup.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed from previous steps.
    "Output from step WF-REPOMIX-V2-00-START: temp_clone_path",
    "(Implicitly needs info if cloning occurred, specialist should track this)"
]
outputs = [ # (Array of Strings, Optional) Final workflow outputs.
    "cleanup_status: Confirmation that cleanup was attempted.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to the standard step template.
+++

# Step 06: Cleanup Temporary Files

## Actions

1.  Receive `temp_clone_path` input from `WF-REPOMIX-V2-00-START`.
2.  Check if the `temp_clone_path` directory exists (indicating cloning occurred). This check might be implicit if the specialist mode tracks whether cloning happened.
3.  If the directory exists, use `execute_command` to remove it recursively and forcefully.
    *   **Linux/macOS:** `rm -rf [temp_clone_path]`
    *   **Windows (PowerShell):** `Remove-Item -Recurse -Force [temp_clone_path]`
    *   The specialist mode MUST generate the OS-aware command.
4.  Set the `cleanup_status` output variable (e.g., "Temporary clone directory '[temp_clone_path]' removed." or "No temporary clone directory found to remove.").

## Acceptance Criteria

*   The temporary clone directory specified by `temp_clone_path` is removed from the filesystem if it existed.
*   The `cleanup_status` output variable is generated and reflects the action taken.

## Error Handling

*   If the `execute_command` to remove the directory fails (e.g., due to permissions), the specialist mode should:
    *   Log the error encountered during cleanup.
    *   Set `cleanup_status` to indicate failure (e.g., "Failed to remove temporary directory '[temp_clone_path]': [error message]").
    *   Proceed to the `{{next_step}}` (`99_finish.md`). The failure should be noted in the final workflow summary.