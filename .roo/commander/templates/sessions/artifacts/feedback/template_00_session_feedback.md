+++
# --- Session Artifact: Feedback ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "FEEDBACK-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "feedback" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
feedback_topic = "" # (String, Required) The specific topic or aspect the feedback relates to (e.g., "UI responsiveness", "documentation clarity", "task completion").
sentiment = "" # (String, Optional) Overall sentiment (e.g., "positive", "negative", "neutral", "mixed").
tags = [
    # (Array of Strings, Optional) Keywords relevant to the feedback.
    "session", "artifact", "feedback",
]
+++

# Session Feedback: [Brief Title Summarizing the Topic]

## Feedback Topic

[Specify the area or topic the feedback concerns.]

## Sentiment (Optional)

[Indicate the overall sentiment: positive, negative, neutral, mixed.]

## Feedback Details

[Provide the specific feedback received or observed during the session. Include quotes or specific examples if possible.]

## Suggested Action (Optional)

[Outline any suggested actions based on the feedback, e.g., create a bug report, update documentation, discuss with team.]