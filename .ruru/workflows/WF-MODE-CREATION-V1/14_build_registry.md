+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-14-BUILD-REGISTRY"
title = "Build Mode Registry"
step_number = 14
next_step_id = "WF-MODE-CREATION-V1-15-DELETE-TEMP-FILE" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-13-USER-REVIEW" # Points to the previous step file
status = "draft"
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "mode-registry", "build-script", "finalization", "mode-creation"]

# --- Workflow Step Specific Fields ---
description = "Executes the `build_roomodes.js` script to update the application's mode registry after user approval."
delegation_mode = "Coordinator (Roo Commander)" # Primary mode responsible for this step
# inputs = ["user_approval_status"] # List of expected input data/context (optional)
# outputs = ["registry_build_status"] # List of expected output data/context (optional)
error_handling = "If script fails, log error, attempt diagnosis. If resolvable, fix & retry. If not, escalate. Ensure Step 15 (cleanup) is skipped or handled carefully." # Specific error handling for this step (optional)
related_docs = [
    "`scripts/build_roomodes.js`"
]
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 14: Build Mode Registry

**Responsible Mode:** Coordinator (Roo Commander)

## Procedure

1.  **Confirm Preconditions:**
    *   Coordinator confirms that the generated mode structure passed QA (**[Step 12](./12_qa.md)**) and received User approval (**[Step 13](./13_user_review.md)**).

2.  **Execute Build Script:**
    *   Coordinator uses the `execute_command` tool to run the mode registry build script:
        ```bash
        node scripts/build_roomodes.js
        ```
    *   *(Note: While MCP might offer command execution, standard `execute_command` is likely sufficient here unless specific MCP features are needed.)*

3.  **Verify Execution:**
    *   Coordinator verifies that the command executed successfully by checking for:
        *   Exit code 0.
        *   Absence of critical errors in the command output.

4.  **Proceed:** Upon successful execution of the build script, proceed to the next step: **[15_delete_temp_file.md](./15_delete_temp_file.md)**.

## Error Handling
*   If the `scripts/build_roomodes.js` script fails:
    *   Log the error output from the command execution.
    *   Attempt to diagnose the cause (e.g., syntax error in a recently created `.mode.md` file).
    *   If the cause is identified and resolvable (e.g., requires fixing the `.mode.md` file), loop back to the relevant step (e.g., Step 07 or Step 08) to make corrections, then re-run QA (Step 12), User Review (Step 13), and retry this step (Step 14).
    *   If the cause is not easily identifiable or resolvable, escalate the script error to the User/owner. The new mode will not be available until the script issue is resolved.
    *   **Crucially:** Ensure **[Step 15](./15_delete_temp_file.md)** (Delete Temporary Context File) is **skipped** or handled with extreme caution if this build step fails, as the context file might be needed for debugging or retrying.