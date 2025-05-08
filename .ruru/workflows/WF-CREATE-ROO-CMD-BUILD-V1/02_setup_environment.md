+++
# --- Step Metadata ---
step_id = "WF-CREATE-ROO-CMD-BUILD-V1-02-SETUP-ENVIRONMENT" # (String, Required) Unique ID for this step.
title = "Step 02: Setup Build Environment" # (String, Required) Title of this specific step.
description = """
(String, Required) Prepares the environment for the build process.
This may include checking out the correct source code version, installing dependencies,
and configuring necessary tools based on validated parameters.
"""

# --- Flow Control ---
depends_on = ["WF-CREATE-ROO-CMD-BUILD-V1-01-VALIDATE-PARAMS"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "03a_run_main_build.md" # (String, Optional) Filename of the next step on successful completion.
error_step = "EE_handle_env_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "lead-devops" # (String, Optional) Mode responsible for executing the core logic of this step.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-CREATE-ROO-CMD-BUILD-V1-01-VALIDATE-PARAMS: validated_build_params",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "build_directory_path: Path to the prepared build directory.",
]

# --- Housekeeping ---
last_updated = "{{DATE}}" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 02: Setup Build Environment

## Actions

1.  **Receive Parameters:** Get the `validated_build_params` from the previous step.
2.  **Checkout Source Code:** Check out the `main` branch (or the specific branch intended for this release).
3.  **Install Dependencies:** Run commands to install necessary build dependencies (e.g., `npm install`, `pip install`).
4.  **Configure Tools:** Set up any required build tools or environment variables.
5.  **Prepare Output:** Confirm environment readiness and provide the path to the build directory.

## Acceptance Criteria

*   Correct source code version is checked out.
*   All build dependencies are installed successfully.
*   Build tools and environment are configured correctly.
*   `environment_setup_report` confirms readiness.
*   `build_directory_path` is provided.

## Error Handling

*   If source checkout fails, dependency installation fails, or configuration errors occur, proceed to `EE_handle_env_error.md` (if defined).