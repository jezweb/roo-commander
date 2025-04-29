+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-05-REVIEW-WORKFLOW" # (String, Required) Unique ID for this step.
title = "Step 05: Review Workflow Definition" # (String, Required) Title of this specific step.
description = """
Reviews the newly created workflow definition files (README, start, steps, finish) for potential improvements, fixes, or suggestions. Delegates the review to a specialist mode.
"""

# --- Flow Control ---
depends_on = ["WF-WORKFLOW-CREATION-V1-04-CREATE-FINISH-STEP"] # (Array of Strings, Required) Depends on the creation of the target workflow's original finish step.
next_step = "06_present_suggestions.md" # (String, Optional) Filename of the next step (present suggestions).
error_step = "EE_review_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "util-reviewer" # (String, Optional) Mode responsible for executing the core logic of this step.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed.
    "Output from step WF-WORKFLOW-CREATION-V1-01-CREATE-DIR-README: target_workflow_readme_path",
    "Output from step WF-WORKFLOW-CREATION-V1-02-CREATE-START-STEP: target_workflow_start_path",
    "Output from step WF-WORKFLOW-CREATION-V1-03-DEFINE-STD-STEPS: target_workflow_step_paths", # List of standard step paths
    "Output from step WF-WORKFLOW-CREATION-V1-04-CREATE-FINISH-STEP: target_workflow_finish_path", # Path to the original finish step created
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "review_suggestions: Text containing suggestions for improving the workflow definition.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 05: Review Workflow Definition

## Actions

This step orchestrates the review of the newly created workflow definition files.

1.  **Identify Files:** Gather the paths to all created workflow files from the inputs:
    *   `target_workflow_readme_path`
    *   `target_workflow_start_path`
    *   `target_workflow_step_paths` (list)
    *   `target_workflow_finish_path`
2.  **Delegate Review:** Initiate a task for the `util-reviewer` mode.
    *   Provide the list of file paths identified in step 1.
    *   Instruct the reviewer to examine the files for:
        *   Consistency and correctness according to workflow standards.
        *   Clarity and completeness of descriptions and actions.
        *   Potential improvements in flow control or error handling.
        *   Adherence to TOML+Markdown format.
3.  **Collect Suggestions:** The `util-reviewer` should return a consolidated text block containing all suggestions.
4.  **Output Suggestions:** Store the received suggestions in the `review_suggestions` output variable.
5.  **(Note):** Presenting these suggestions to the user and deciding whether to apply them is handled outside this specific step, potentially by the orchestrator using `ask_followup_question` or in a subsequent workflow branch.

## Acceptance Criteria

*   All input file paths are received.
*   The review task is successfully delegated to `util-reviewer` with the correct file paths.
*   A text block containing review suggestions (or confirmation of no suggestions) is received from the reviewer.
*   The `review_suggestions` output variable contains the collected suggestions.

## Error Handling

*   If input paths are missing, proceed to `EE_review_error.md`.
*   If delegation to `util-reviewer` fails, proceed to `EE_review_error.md`.
*   If the reviewer returns an error or fails to provide suggestions, proceed to `EE_review_error.md`.