+++
# --- Session Artifact: Feature Note ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "FEAT-NOTE-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "feature_note" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
feature_id = "" # (String, Required) Identifier for the feature being discussed (e.g., MDTM Task ID, User Story ID, Epic ID).
aspect = "" # (String, Required) The specific aspect of the feature being noted (e.g., "UI Design", "API Endpoint", "Database Schema", "Testing Strategy").
tags = [
    # (Array of Strings, Optional) Keywords relevant to the feature note.
    "session", "artifact", "feature", "note",
]
+++

# Session Feature Note: [Feature ID] - [Aspect]

## Feature ID

[Specify the identifier for the feature.]

## Aspect

[Specify the particular aspect of the feature this note relates to.]

## Note / Details

[Provide the specific note, observation, decision, or detail related to this aspect of the feature.]