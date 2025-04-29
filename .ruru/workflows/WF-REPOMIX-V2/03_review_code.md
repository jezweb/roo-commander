+++
# --- Step Metadata ---
step_id = "WF-REPOMIX-V2-03-REVIEW-CODE" # (String, Required) Unique ID for this step.
title = "Step 03: Review Generated Code" # (String, Required) Title of this specific step.
description = """
Presents the generated or modified code to the user or a designated reviewer
(e.g., util-reviewer) for inspection and approval before applying changes.
"""

# --- Flow Control ---
depends_on = ["WF-REPOMIX-V2-02-GENERATE-CODE"] # (Array of Strings, Required) step_ids this step needs completed first.
next_step = "05_copy_context.md" # (String, Optional) Filename of the next step on successful completion (if approved).
error_step = "EE_handle_error.md" # (String, Optional) Filename to jump to if this step fails or review is rejected.
# Alternative next step if changes are needed: "02_generate_code.md" (to regenerate) - Requires branching logic implementation.

# --- Execution ---
delegate_to = "" # (String, Optional) Typically handled by the coordinator presenting to the user, or could delegate to 'util-reviewer'.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Data/artifacts needed. Can reference outputs from 'depends_on' steps.
    "Output from step WF-REPOMIX-V2-02-GENERATE-CODE: generated_code_artifact_paths",
    "Output from step WF-REPOMIX-V2-02-GENERATE-CODE: generation_summary",
]
outputs = [ # (Array of Strings, Optional) Data/artifacts produced by this step.
    "review_outcome: Confirmation of review status (Approved, Rejected, Needs Changes).",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md" # (String, Required) Link to this template definition.
+++

# Step 03: Review Generated Code

## Actions

1.  **Present Code:** Display the generated/modified code (or diffs) from the paths provided in `generated_code_artifact_paths` to the user/reviewer. Include the `generation_summary`.
2.  **Request Review:** Ask the user/reviewer to assess the code against the original goal and acceptance criteria.
3.  **Obtain Outcome:** Record the review outcome (`Approved`, `Rejected`, `Needs Changes`).

## Acceptance Criteria

*   Generated code has been presented for review.
*   A clear review outcome (`review_outcome`) has been obtained from the user/reviewer.

## Error Handling

*   If the review outcome is `Rejected` or `Needs Changes`, the workflow might loop back to step `02_generate_code.md` with feedback, or proceed to `{{error_step}}` / report failure. (Requires orchestrator logic).
*   If the review outcome is `Approved`, proceed to `{{next_step}}`.