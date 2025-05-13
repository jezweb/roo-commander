+++
# --- Session Artifact: Q&A ---
id = "" # (String, Required) Unique ID for this artifact (e.g., "QNA-YYYYMMDD-HHMMSS"). << Placeholder: Must be generated at runtime >>
session_id = "" # (String, Required) ID of the parent session log. << Placeholder: Must be set at runtime >>
type = "qna" # (String, Required) Fixed type for this artifact.
created_time = "" # (Datetime, Required) Timestamp when the artifact was created. << Placeholder: Must be generated at runtime >>
related_task_id = "" # (String, Optional) ID of a related MDTM task, if applicable.
question = "" # (String, Required) The question asked during the session.
answer = "" # (String, Required) The answer provided.
source = "" # (String, Optional) The source of the answer (e.g., "user", "documentation", "model knowledge", "web search").
tags = [
    # (Array of Strings, Optional) Keywords relevant to the Q&A.
    "session", "artifact", "qna", "question", "answer",
]
+++

# Session Q&A: [Brief Title Summarizing the Question]

## Question

[State the question that was asked.]

## Answer

[Provide the answer that was given.]

## Source (Optional)

[Specify the source of the answer, e.g., user input, specific documentation link, model's internal knowledge.]