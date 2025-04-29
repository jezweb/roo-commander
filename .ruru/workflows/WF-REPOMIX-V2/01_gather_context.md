+++
# --- Step Metadata ---
step_id = "WF-REPOMIX-V2-01-GATHER-CONTEXT" # (String, Required) Unique ID for this step.
title = "Step 01: Gather Context" # (String, Required) Title of this specific step.
description = """
Reads the content of the specified context files/directories provided in the initial request.
This context will be used by the Repomix Specialist for code generation/modification.
"""

# --- Flow Control ---
depends_on = ["WF-REPOMIX-V2-00-START"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "02_generate_code.md" # (String, Optional) Filename of the next step on successful completion.
error_step = "EE_handle_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "MODE-SPEC-REPOMIX" # (String, Optional) Mode responsible for executing the core logic of this step. Repomix needs to read its own context.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-REPOMIX-V2-00-START: source_list (list of local paths or remote Git URLs)",
    "Output from step WF-REPOMIX-V2-00-START: task_directory (path for task-specific data)",
    "Output from step WF-REPOMIX-V2-00-START: temp_clone_path (path for cloning remote repos)",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "final_source_paths: List of local paths (including cloned repo paths) ready for processing.",
    "gathered_context_confirmation: Confirmation that context sources were processed (cloned/validated) successfully.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 01: Gather Context

## Actions

1.  **Receive Inputs:** Get `source_list`, `task_directory`, and `temp_clone_path` from the previous step (`WF-REPOMIX-V2-00-START`).
2.  **Initialize:** Create an empty list `final_source_paths`.
3.  **Process Sources:** Iterate through each `item` in the `source_list`:
    *   **If `item` is a remote Git URL:**
        *   Use `execute_command` to clone the repository: `git clone --depth 1 [URL] [temp_clone_path]`.
        *   **Note:** Ensure `temp_clone_path` is empty or handle potential conflicts if multiple URLs are provided. Consider creating unique subdirectories within `temp_clone_path` based on the repo name or index if multiple clones are needed.
        *   Add the `temp_clone_path` (or the specific subdirectory path if implemented) to `final_source_paths`.
        *   Handle potential `git clone` errors (e.g., invalid URL, authentication required, network issues).
    *   **If `item` is a local path:**
        *   Verify the path exists.
        *   Add the `item` (the local path) directly to `final_source_paths`.
        *   Handle potential errors (e.g., path not found).
4.  **Read Context:** Use appropriate tools (e.g., `read_file`, internal Repomix mechanisms) to read the content from the paths listed in `final_source_paths`. Handle potential errors.
5.  **Confirm Processing:** Prepare confirmation (`gathered_context_confirmation`) that all sources were processed (cloned/validated) and read successfully.

## Acceptance Criteria

*   All items in `source_list` have been processed (remote URLs cloned, local paths validated).
*   The `final_source_paths` list contains valid local paths to all context sources.
*   All context content from `final_source_paths` has been successfully read or processed.
*   Confirmation (`gathered_context_confirmation`) is generated.

## Error Handling

*   If any context file/directory cannot be read, proceed to `{{error_step}}` (if defined) or report failure to the coordinator.