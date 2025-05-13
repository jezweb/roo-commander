+++
# --- Session Artifact: Environment ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "ENV-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "environment" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
component = "" # (String, Required) The specific component, library, tool, or system being documented (e.g., "Node.js", "React", "PostgreSQL", "VS Code Extension").
version = "" # (String, Optional) The specific version of the component, if known.
source = "" # (String, Optional) How the information was obtained (e.g., "command output", "package.json", "user provided", "web search").
tags = [
    # (Array of Strings, Optional) Keywords relevant to the environment detail.
    "session", "artifact", "environment",
]
+++

# Session Environment Detail: [Component Name]

## Component

[Specify the component, library, tool, or system.]

## Version

[Specify the version, if known. Otherwise, state "Unknown" or provide context.]

## Details / Configuration

[Provide relevant details about the component's configuration, observed behavior, or context within the session. Include command output if applicable.]

## Source (Optional)

[Describe how this information was determined (e.g., `node -v` output, checked `package.json`, user stated version).]