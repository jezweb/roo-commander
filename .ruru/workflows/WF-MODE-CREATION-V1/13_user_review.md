+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1-13-USER-REVIEW"
title = "User Review & Refinement"
step_number = 13
workflow_id = "WF-MODE-CREATION-V1" # Added workflow ID
next_step_id = "WF-MODE-CREATION-V1-14-BUILD-REGISTRY" # Points to the next step file
prev_step_id = "WF-MODE-CREATION-V1-12-QA" # Points to the previous step file
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29"
version = "1.0"
tags = ["workflow-step", "user-review", "feedback", "refinement", "mode-creation"]

# --- Workflow Step Specific Fields ---
description = "Presents the generated mode structure to the user for review and feedback, allowing for potential refinement loops."
delegation_mode = "Coordinator (Roo Commander)" # Primary mode responsible for this step
# inputs = ["mode_slug", "mode_file_path", "kb_readme_path", "qa_status"] # List of expected input data/context (optional)
# outputs = ["user_approval_status"] # List of expected output data/context (optional)
error_handling = "If user requests refinements, loop back to earlier steps. If fundamental issues persist after refinement, escalate or document rejection." # Specific error handling for this step (optional)
related_docs = []
related_templates = [
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`"
]
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.README.md"
+++

# Step 13: User Review & Refinement

**Responsible Mode:** Coordinator (Roo Commander)
**Interacts With:** User

## Procedure

1.  **Present Structure:**
    *   Coordinator presents the generated mode structure to the User for review. This should include key files like:
        *   `.ruru/modes/<new-slug>/<new-slug>.mode.md`
        *   `.ruru/modes/<new-slug>/kb/README.md`
        *   `.roo/rules-<slug>/01-kb-lookup-rule.md`
    *   Coordinator might provide summaries or key excerpts from these files.

2.  **Ask for Feedback:**
    *   Coordinator uses `ask_followup_question` to ask the User for feedback:
        *   **Question:** "The initial structure for the '[Mode Title]' mode has passed QA. Please review the key files (e.g., the main mode definition, KB README). Does this structure, including the generated Core Knowledge, align with your requirements?"
        *   **Suggestions:**
            *   `<suggest>Yes, approve the structure.</suggest>`
            *   `<suggest>Request refinements (please specify).</suggest>`
            *   `<suggest>Show me the content of [specific file] again.</suggest>`

3.  **Handle Feedback (Conditional):**
    *   **If User Approves:** Proceed to the next step.
    *   **If User Requests Refinements:**
        1.  Coordinator gathers the specific feedback.
        2.  Coordinator determines the necessary changes and identifies which earlier steps need to be revisited (e.g., Step 03 for context synthesis, Step 07/08/09/10/11 for file content).
        3.  Coordinator delegates the required changes to the appropriate agent(s).
        4.  After changes are implemented, loop back to **[Step 12](./12_qa.md)** (Quality Assurance) before presenting to the user again.
    *   **If User Requests File Content:** Coordinator uses `read_file` (or MCP equivalent) to show the requested file content and then re-prompts for feedback (Step 13.2).

4.  **Proceed:** Upon user approval, proceed to the next step: **[14_build_registry.md](./14_build_registry.md)**.

## Error Handling
*   If the user requests refinements, initiate the refinement loop as described above.
*   If fundamental issues persist after refinement attempts, or the user repeatedly rejects the structure, the Coordinator should:
    *   Escalate the issue to the project owner if necessary.
    *   Document the rejection and feedback.
    *   Consider abandoning the workflow.