+++
# --- Session Artifact: Documentation Snippet ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "DOC-SNIP-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "doc_snippet" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
feature_area = "" # (String, Optional) The specific feature or component the documentation relates to.
target_audience = "" # (String, Optional) The intended audience for this documentation snippet (e.g., "end-user", "developer", "admin").
tags = [
    # (Array of Strings, Optional) Keywords relevant to the documentation snippet.
    "session", "artifact", "documentation", "snippet",
]
+++

# Session Documentation Snippet: [Brief Title]

## Feature Area (Optional)

[Specify the related feature or component.]

## Target Audience (Optional)

[Specify the intended audience.]

## Documentation Content

[Insert the documentation snippet here. This could be a paragraph, a list, a usage example, etc.]