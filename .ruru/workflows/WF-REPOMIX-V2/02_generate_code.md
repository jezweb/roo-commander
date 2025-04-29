+++
# --- Step Metadata ---
step_id = "WF-REPOMIX-V2-02-GENERATE-CODE" # (String, Required) Unique ID for this step.
title = "Step 02: Generate Code" # (String, Required) Title of this specific step.
description = """
Delegates to the Repomix Specialist to generate or modify code based on the
user's goal, target paths, gathered context, and specific instructions.
"""

# --- Flow Control ---
depends_on = ["WF-REPOMIX-V2-01-GATHER-CONTEXT"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "04_generate_readme.md" # (String, Optional) Filename of the next step on successful completion.
error_step = "EE_handle_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "MODE-SPEC-REPOMIX" # (String, Optional) Mode responsible for executing the core logic of this step.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-REPOMIX-V2-00-START: validated_inputs (goal, target paths, instructions)",
    "Output from step WF-REPOMIX-V2-01-GATHER-CONTEXT: gathered_context_confirmation (implicitly, context is loaded by delegate)",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "generated_code_artifact_paths: List of paths to the generated or modified files.",
    "generation_summary: Brief summary of the generation process.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 02: Generate Code

## Actions

1.  **Clarify Output Preferences:** Use `ask_followup_question` to ask the coordinator/user about their preferred output format (`--format` option for `repomix`) and chunking strategy (if applicable/supported by `repomix`). Provide sensible defaults as suggestions (e.g., `--format diff`, no chunking).
2.  **Prepare Delegation:** Formulate the task message for the `MODE-SPEC-REPOMIX` delegate. Include:
    *   The user's goal.
    *   The target path(s).
    *   Confirmation that context is ready (from step 01).
    *   Any specific instructions.
    *   The confirmed output preferences (format, chunking).
    *   Reference this workflow step ID.
3.  **Delegate to Repomix:** Use `new_task` to delegate the generation task to `MODE-SPEC-REPOMIX`.
4.  **Await Completion:** Wait for `attempt_completion` from the delegate.

## Acceptance Criteria

*   `MODE-SPEC-REPOMIX` successfully completes the code generation/modification task.
*   The paths to the generated/modified files (`generated_code_artifact_paths`) are received.
*   A summary of the generation (`generation_summary`) is received.

## Error Handling

*   If `MODE-SPEC-REPOMIX` reports failure or a blocker, proceed to `{{error_step}}` (if defined) or report failure to the coordinator.