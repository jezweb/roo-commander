+++
# --- Step Metadata ---
step_id = "WF-WORKFLOW-CREATION-V1-06-PRESENT-SUGGESTIONS" # (String, Required) Unique ID for this step (e.g., "WF-REPOMIX-V2-01-ANALYZE").
title = "Step 06: Present Review Suggestions" # (String, Required) Title of this specific step.
description = """
Presents the workflow review suggestions to the user and prompts for action.
"""

# --- Flow Control ---
depends_on = ["WF-WORKFLOW-CREATION-V1-05-REVIEW-WORKFLOW"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "99_finish.md" # (String, Optional) Filename of the next step on successful completion. Can be empty if branching or finishing.
error_step = "EE_suggestion_handling_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "" # (String, Optional) Mode responsible for executing the core logic of this step. Likely handled by orchestrator/coordinator.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-WORKFLOW-CREATION-V1-05-REVIEW-WORKFLOW: review_suggestions",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "user_decision_on_suggestions: Decision made by the user (e.g., Apply, Ignore, Manual).",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 06: Present Review Suggestions

## Actions

1.  **Receive Input:** Obtain the `review_suggestions` artifact from the previous step (`WF-WORKFLOW-CREATION-V1-05-REVIEW-WORKFLOW`).
2.  **Check for Suggestions:**
    *   If `review_suggestions` is empty or null, proceed directly to the `next_step` (`99_finish.md`).
    *   If `review_suggestions` contains suggestions:
        *   **Present to User:** Use the `ask_followup_question` tool to display the suggestions to the user.
        *   **Prompt for Action:** Ask the user how to proceed with the suggestions. Provide the following options:
            *   "Apply suggestions automatically (delegate fix)"
            *   "Ignore suggestions"
            *   "Manual edit required (I will handle it)"
3.  **Store Decision:** Record the user's choice in the `user_decision_on_suggestions` output artifact.
4.  **Proceed:** Based on the user's decision, the orchestrator will either proceed to the `next_step` or handle the chosen action (e.g., delegate a fix task).

## Acceptance Criteria

*   If suggestions exist, the user is prompted with clear options.
*   The user's decision (`user_decision_on_suggestions`) is correctly recorded as an output artifact.
*   If no suggestions exist, the step completes successfully and signals progression to the next step.

## Error Handling

*   If presenting suggestions or capturing the user's decision fails, proceed to `EE_suggestion_handling_error.md`.