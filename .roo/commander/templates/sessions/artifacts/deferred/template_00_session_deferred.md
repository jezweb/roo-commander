+++
# --- Session Artifact: Deferred Item ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "DEFERRED-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "deferred" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
item_type = "" # (String, Required) Type of item being deferred (e.g., "task", "idea", "research", "bug").
priority = "Medium" # (String, Optional) Priority level (e.g., "Low", "Medium", "High"). << Default: Medium >>
tags = [
    # (Array of Strings, Optional) Keywords relevant to the deferred item.
    "session", "artifact", "deferred",
]
+++

# Session Deferred Item: [Brief Title]

## Item Type

[Specify the type of item being deferred, e.g., task, idea, research topic, potential bug.]

## Priority (Optional)

[Specify the priority level, e.g., Low, Medium, High.]

## Description

[Describe the item that is being deferred for later action or consideration.]

## Reason for Deferral (Optional)

[Explain why this item is being deferred (e.g., out of scope for current session, requires more information, lower priority).]

## Potential Next Steps (Optional)

[Suggest how this item might be picked up later (e.g., create MDTM task, add to backlog, discuss in next planning session).]