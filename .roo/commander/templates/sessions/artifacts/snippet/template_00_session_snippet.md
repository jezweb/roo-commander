+++
# --- Session Artifact: Code Snippet ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "SNIPPET-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "snippet" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
language = "" # (String, Required) The programming language of the snippet (e.g., "python", "javascript", "bash").
description = "" # (String, Required) A brief description of what the code snippet does or demonstrates.
tags = [
    # (Array of Strings, Optional) Keywords relevant to the snippet.
    "session", "artifact", "snippet", "code",
]
+++

# Session Code Snippet: [Brief Description]

## Description

[Provide a brief explanation of the code snippet's purpose or context.]

## Language

`[Specify the language, e.g., python, javascript]`

## Code

```[language]
# Insert the code snippet here