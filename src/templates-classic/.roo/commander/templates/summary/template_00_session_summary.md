+++
# --- Session Artifact: Summary ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "SESSUM-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "summary" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
summary_of_session_id = "" # (String, Required) The ID of the session being summarized.
summary_start_time = "" # (Datetime, Required) Start time of the period being summarized.
summary_end_time = "" # (Datetime, Required) End time of the period being summarized.
key_outcomes = [] # (Array of Strings, Optional) List of key outcomes or achievements from the summarized period.
key_learnings = [] # (Array of Strings, Optional) List of key learnings or insights from the summarized period.
next_steps = [] # (Array of Strings, Optional) List of recommended next steps or actions.
related_tasks = [] # (Array of Strings, Optional) List of MDTM Task IDs completed or significantly progressed.
related_artifacts = [] # (Array of Strings, Optional) List of relative paths to key artifacts produced.
tags = [
    # (Array of Strings, Optional) Keywords relevant to the summary.
    "session", "artifact", "summary",
]
+++

# Session Summary: [Brief Title Summarizing the Session]

## Overview

[Provide a concise overview of the session's purpose and the period being summarized.]

## Key Outcomes & Achievements

[Summarize the main results, decisions, or accomplishments during the session.]

## Key Learnings & Insights

[Highlight any significant learnings, challenges overcome, or insights gained.]

## Next Steps & Recommendations

[Outline clear, actionable next steps or recommendations for future work.]

## Related Tasks & Artifacts

[Reference specific MDTM tasks and key artifacts produced during the summarized period.]
# Example: ".mdtm/sessions/SESSION-PreviousRelatedGoal-2401010900/summaries/SESSUM-SESSION-PreviousRelatedGoal-2401010900-240101113000.md"
