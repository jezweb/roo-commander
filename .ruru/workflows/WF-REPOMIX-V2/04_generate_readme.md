+++
# --- Step Metadata ---
step_id = "WF-REPOMIX-V2-04-GENERATE-README" # (String, Required) Unique ID for this step (e.g., "WF-REPOMIX-V2-01-ANALYZE").
title = "Step 04: Generate Summary README" # (String, Required) Title of this specific step.
description = """
Creates a README.md file in the task directory summarizing the Repomix run, including sources, outputs, and parameters used.
"""

# --- Flow Control ---
depends_on = ["WF-REPOMIX-V2-02-GENERATE-CODE"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "03_review_code.md" # (String, Optional) Filename of the next step on successful completion. Can be empty if branching or finishing.
error_step = "EE_handle_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "MODE-SPEC-REPOMIX" # (String, Optional) Mode responsible for executing the core logic of this step.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-REPOMIX-V2-00-START: task_directory, task_name, source_list",
    "Output from step WF-REPOMIX-V2-01-GATHER-CONTEXT: final_source_paths",
    "Output from step WF-REPOMIX-V2-02-GENERATE-CODE: generation_summary, generated_code_artifact_paths, repomix_config_used",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "readme_path: Path to the generated README.md",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 04: Generate Summary README

## Actions

1.  Receive inputs: `task_directory`, `task_name`, `source_list`, `final_source_paths`, `generation_summary`, `generated_code_artifact_paths`, `repomix_config_used`.
2.  Construct Markdown content for `README.md` including: Original sources (`source_list`), final paths used (`final_source_paths`), task name, task directory, generated artifacts (`generated_code_artifact_paths`), summary (`generation_summary`), and key parameters from `repomix_config_used` (like chunking strategy).
3.  Define `readme_path` as `[task_directory]/README.md`.
4.  Use `write_to_file` to save the content to `readme_path`.

## Acceptance Criteria

*   `README.md` is successfully created at `readme_path`.
*   The `readme_path` output is generated.

## Error Handling

*   If `write_to_file` fails, proceed to `EE_handle_error.md` or report failure.