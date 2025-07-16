+++
# --- Session Artifact: Note ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "NOTE-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "note" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
tags = [
    # (Array of Strings, Optional) Keywords relevant to the note's content.
    "session", "artifact", "note",
]
+++

# Session Note: [Brief Title]

## Context/Observation

[Provide details about the observation, decision, or general note captured during the session.]

## Details

[Add specific details, code snippets, links, or other relevant information.]
