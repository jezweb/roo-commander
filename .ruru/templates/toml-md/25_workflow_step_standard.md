+++
# --- Step Metadata ---
step_id = "WF-[WORKFLOW_NAME]-V[VERSION]-[NN]-[STEP_NAME]" # (String, Required) Unique ID for this step (e.g., "WF-REPOMIX-V2-01-ANALYZE").
title = "Step NN: [Human Readable Title]" # (String, Required) Title of this specific step.
description = """
(String, Required) What this step accomplishes. Actions to be taken.
"""

# --- Flow Control ---
depends_on = ["PREVIOUS_STEP_ID"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "NN+1_[NEXT_STEP_NAME].md" # (String, Optional) Filename of the next step on successful completion. Can be empty if branching or finishing.
error_step = "EE_handle_error.md" # (String, Optional) Filename to jump to if this step fails.

# --- Execution ---
delegate_to = "specialist-mode-slug" # (String, Optional) Mode responsible for executing the core logic of this step.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step {{depends_on[0]}}: artifact_name",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "output_artifact: Description of the generated artifact.",
]

# --- Housekeeping ---
last_updated = "{{DATE}}" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step {{NN}}: {{title}}

## Actions

(Detail the specific actions, commands, checks, or instructions for this step. Can include checklists `- [ ]` for the delegate.)

1.  ...
2.  ...

## Acceptance Criteria

*   ...
*   ...

## Error Handling

*   If X occurs, proceed to `{{error_step}}` (if defined).