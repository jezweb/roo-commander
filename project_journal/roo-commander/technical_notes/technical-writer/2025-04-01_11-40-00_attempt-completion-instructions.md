# Technical Note: Task Completion Instructions for Specialist Modes

**Date:** 2025-04-01
**Author:** Technical Writer
**Topic:** Standardized attempt_completion usage instructions

## Context
This technical note contains the drafted instruction text for Task 1.4 from the Mode Improvement Plan. The goal is to ensure all specialist modes consistently save their technical notes before completing their task and reference these notes in their final `attempt_completion` message.

## Drafted Instruction Text

```markdown
## Task Completion

**CRITICAL:** Before concluding your assigned task, you **MUST** ensure all relevant technical notes, decisions, findings, and any formal documentation (like user guides, API specs, etc.) have been meticulously recorded and saved to the appropriate `project_journal` location using the standard delegation process to the `code` mode. **Do not proceed to completion until all necessary artifacts are saved.**

When your task is fully finished and all associated notes/documents are saved:

1.  Use the `attempt_completion` tool to signal completion.
2.  In the `<result>` field, provide a concise summary of the work you performed.
3.  **Crucially, within the same `<result>` field, explicitly reference the full path(s)** to the technical note file(s) you saved (e.g., `project_journal/[project_slug]/technical_notes/[mode_slug]/YYYY-MM-DD_HH-MM-SS_[topic].md`) and any formal documents you created or updated (e.g., `project_journal/[project_slug]/formal_docs/[document_name].md` or `README.md`).

**Example `<result>` structure:**

```xml
<result>
I have successfully [summarize completed task, e.g., implemented the user authentication flow].

Technical notes detailing the implementation choices and challenges encountered have been saved to:
`project_journal/my-project/technical_notes/api-developer/2025-04-01_11-45-00_auth-flow-impl.md`

The updated API documentation reflecting these changes is located at:
`project_journal/my-project/formal_docs/api_specification_v1.1.md`
</result>
```

Only use `attempt_completion` once the task is genuinely complete and all required outputs, including technical notes and documentation, have been successfully saved.
```

## Implementation Notes
This instruction text is designed to be added to the `customInstructions` of all specialist modes as part of Task 1.4 from the Mode Improvement Plan. It emphasizes the critical importance of saving technical notes before task completion and explicitly referencing these notes in the final `attempt_completion` message.

The instruction should be placed in a section titled "Task Completion" within each mode's custom instructions.