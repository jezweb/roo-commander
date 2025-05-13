+++
# --- Session Artifact: Learning ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "LEARNING-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "learning" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
problem = "" # (String, Required) Description of the problem encountered or knowledge gap identified.
solution = "" # (String, Required) Description of the solution found or knowledge gained.
recommendation = "" # (String, Optional) Recommendations for future actions or improvements based on the learning.
tags = [
    # (Array of Strings, Optional) Keywords relevant to the learning.
    "session", "artifact", "learning",
]
+++

# Session Learning: [Brief Title Summarizing the Learning]

## Problem / Knowledge Gap

[Describe the specific problem faced or the gap in understanding that was identified during the session.]

## Solution / Knowledge Gained

[Detail the solution that was found, the steps taken, or the new knowledge acquired.]

## Recommendation (Optional)

[Suggest any follow-up actions, documentation updates, or process improvements based on this learning.]