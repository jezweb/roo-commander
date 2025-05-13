+++
# --- Session Artifact: Context Item ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "CONTEXT-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "context_item" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
source_type = "" # (String, Required) Type of context: "file", "link", "snippet", "data"
source_path_or_url = "" # (String, Optional) Relative path to the context file (if source_type is 'file') or URL (if source_type is 'link').
summary = "" # (String, Required) A brief summary of the context item and its relevance to the session.
tags = [
    # (Array of Strings, Optional) Keywords relevant to the context item.
    "session", "artifact", "context",
]
+++

# Session Context Item: [Brief Title]

## Context Type

[Specify: `file`, `link`, `snippet`, `data`]

## Source Path / URL (if applicable)

`[Specify the relative path to the file or URL being referenced, if any.]`

## Summary

[Provide a concise summary explaining what this context item is and why it's relevant to the current session or task.]

## Content / Details (if not a separate file/link)

[If the context is a snippet or data not stored in a separate file, include it here. For larger content, consider storing it as a separate file within the `artifacts/context/` directory and linking to it via `source_path_or_url`.]

## Key Points (Optional)

[List specific key points or details from this context item.]
- Point 1
- Point 2