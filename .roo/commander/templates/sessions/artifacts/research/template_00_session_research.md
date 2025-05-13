+++
# --- Session Artifact: Research ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "RESEARCH-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "research" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
query = "" # (String, Required) The research question or topic investigated.
sources_checked = [
    # (Array of Strings, Optional) List of sources consulted (URLs, file paths, tool names like 'vertex-ai-mcp-server').
]
key_finding = "" # (String, Required) The main conclusion or key piece of information found.
tags = [
    # (Array of Strings, Optional) Keywords relevant to the research.
    "session", "artifact", "research",
]
+++

# Session Research: [Brief Title Summarizing the Query]

## Research Query

[State the specific question or topic that was researched.]

## Sources Checked (Optional)

[List the sources that were consulted, e.g.:]
- `[URL or File Path]`
- `vertex-ai-mcp-server` (Tool: `[tool_name]`)

## Key Finding(s)

[Summarize the main answer, conclusion, or key information discovered through the research.]

## Supporting Details (Optional)

[Provide additional context, supporting evidence, or nuances found during the research.]