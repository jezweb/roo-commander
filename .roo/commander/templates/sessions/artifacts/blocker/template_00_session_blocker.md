+++
# --- Session Artifact: Blocker ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "BLOCKER-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "blocker" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
issue = "" # (String, Required) Description of the blocking issue.
attempts = [
    # (Array of Strings, Optional) List of attempts made to resolve the blocker.
]
resolution_status = "⚪ Unresolved" # (String, Required) Current status (e.g., "⚪ Unresolved", "🟡 In Progress", "🟢 Resolved", "⚫ Won't Fix"). << Default: Unresolved >>
tags = [
    # (Array of Strings, Optional) Keywords relevant to the blocker.
    "session", "artifact", "blocker",
]
+++

# Session Blocker: [Brief Title Summarizing the Issue]

## Issue Description

[Clearly describe the problem that is blocking progress.]

## Attempts Made (Optional)

[List any steps already taken to try and resolve the issue.]
- Attempt 1: ...
- Attempt 2: ...

## Current Status

[State the current resolution status (e.g., Unresolved, In Progress, Resolved).]

## Next Steps (If Unresolved/In Progress)

[Outline the planned next steps to address the blocker.]