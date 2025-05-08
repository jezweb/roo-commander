+++
# --- Step Metadata ---
step_id = "WF-CREATE-ROO-CMD-BUILD-V1-01-VALIDATE-PARAMS" # (String, Required) Unique ID for this step.
title = "Step 01: Validate Build Parameters" # (String, Required) Title of this specific step.
description = """
(String, Required) Performs detailed validation on the build parameters received from the start step
and the version confirmed by the user in the previous step. Checks for valid version format,
recognized target platforms, etc.
"""

# --- Flow Control ---
depends_on = ["WF-CREATE-ROO-CMD-BUILD-V1-00-START", "WF-CREATE-ROO-CMD-BUILD-V1-00B-SUGGEST-VERSION"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "02_setup_environment.md" # (String, Optional) Filename of the next step on successful completion.
error_step = "EE_handle_validation_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "lead-devops" # (String, Optional) Mode responsible for executing the core logic of this step.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-CREATE-ROO-CMD-BUILD-V1-00-START: build_params", # Contains platform, flags etc.
    "Output from step WF-CREATE-ROO-CMD-BUILD-V1-00B-SUGGEST-VERSION: confirmed_version", # The user-confirmed version string
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "validated_build_params: The validated build parameters object, including confirmed version, github_owner, and github_repo_name.",
]

# --- Housekeeping ---
last_updated = "{{DATE}}" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 01: Validate Build Parameters

## Actions

1.  **Receive Parameters:** Get the `build_params` object (expected to contain `github_owner`, `github_repo_name`, platform, flags etc.) from step `00` and the `confirmed_version` string from step `00b`.
2.  **Validate Version:** Check if the `confirmed_version` string follows semantic versioning rules (e.g., `vX.Y.Z`).
3.  **Validate Repository Info:**
    *   Check if `build_params.github_owner` is a non-empty string.
    *   Check if `build_params.github_repo_name` is a non-empty string.
4.  **Validate Platform:** Ensure the target platform(s) in `build_params` are supported/recognized.
5.  **Validate Flags:** Check any additional build flags in `build_params` for validity.
6.  **Prepare Output:** Create the `validated_build_params` object, merging the `confirmed_version` (as the `version` field), `github_owner`, `github_repo_name`, and other validated parameters from `build_params`.

## Acceptance Criteria

*   `build_params` and `confirmed_version` are received successfully.
*   The `confirmed_version`, `github_owner`, `github_repo_name`, platform, and flags are confirmed as valid.
*   `validated_build_params` object (including `version`, `github_owner`, `github_repo_name` fields) is created for the next step.

## Error Handling

*   If any validation check fails (invalid `confirmed_version` format, missing/invalid `github_owner` or `github_repo_name`, unsupported platform, etc.), proceed to `EE_handle_validation_error.md` (if defined).