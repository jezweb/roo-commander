+++
# --- Basic Metadata (Required) ---
id = "SESSUM-[OriginalSessionID]-[YYMMDDHHMMSS]" # Example: SESSUM-SESSION-GoalName-2401011200-240102143000 (OriginalSessionID-SummaryTimestamp)
title = "Session Summary: [Original Session Title/Goal]"
original_session_id = "" # REQUIRED: The RooComSessionID of the session being summarized.
original_session_title = "" # REQUIRED: The title/goal of the original session.
summary_creation_date = "{{YYYYMMDDHHMMSS}}" # Timestamp when this summary was generated.
summarized_by_mode = "{{MODE_SLUG}}" # Slug of the mode/agent that generated the summary.
status_at_summary = "" # REQUIRED: Status of the original session when summarized (e.g., "Paused", "Completed", "Active-Checkpoint").

# --- Key Information (Optional but Recommended) ---
key_outcomes_achieved = [
    # "Outcome 1 description.",
    # "Outcome 2 description."
]
key_decisions_made = [
    # "Decision 1: [Decision details, link to ADR if applicable, e.g., ADR-005].",
    # "Decision 2: [Decision details]."
]
key_assumptions_made = [
    # "Assumption 1: [Description of assumption and its impact].",
    # "Assumption 2: [Description of assumption]."
]
critical_learnings_or_insights = [
    # "Learning 1: [Description of insight gained].",
    # "Learning 2: [Description of insight]."
]
outstanding_blockers_or_issues = [
    # "Blocker 1: [Description of blocker and its current status].",
    # "Issue 1: [Description of issue]."
]
identified_next_steps_from_session = [
    # "Next Step 1: [Description of action item].",
    # "Next Step 2: [Description of action item, potential assignee/mode]."
]
related_summaries = [
    # ".roo/commander/sessions/SESSION-PreviousRelatedGoal-2401010900/summaries/SESSUM-SESSION-PreviousRelatedGoal-2401010900-240101113000.md"
]
tags = [
    # "keyword1", "keyword2", "project-alpha", "user-auth"
]

# --- Detailed Context Pointers (Optional) ---
[[primary_context_artifacts]]
path = "notes/NOTE-example_artifact_name-YYMMDDHHMMSS.md" # Relative to original session's artifacts/ directory
description = "Brief description of this artifact's content or relevance to the session."
artifact_type = "note" # Optional: e.g., "note", "learning", "code_snippet", "research", "decision_link", "environment_setup", "blocker_log"

[[primary_context_artifacts]]
path = "learnings/LEARNING-another_example-YYMMDDHHMMSS.md"
description = "Another key artifact."
artifact_type = "learning"

[[relevant_code_areas]]
path = "src/feature_x/main_component.js" # Path to code file/module
change_summary = "Implemented the core logic for feature X."

[[relevant_code_areas]]
path = "src/utils/api_client.ts"
change_summary = "Refactored API client for new endpoint, added error handling."

# --- Review & Approval (Optional) ---
# summary_reviewed_by = "" # Mode/User who reviewed this summary
# summary_review_date = "" # Timestamp of review
# summary_approved = false # Boolean
+++

# Session Summary: {{title}}

## 1. Original Session Objective
> {{original_session_title}}
> (Brief restatement or elaboration of the primary goal of the session being summarized.)

## 2. Narrative Overview of Work Undertaken
(A brief story of what was attempted during the original session, the general approach taken, and key activities performed. Focus on the "what" and "why" at a high level.)

## 3. Key Assumptions Made During Session
(List and elaborate on any significant assumptions that underpinned the work or decisions made during the original session. How did these assumptions influence the direction or outcomes?)
*   Assumption 1: ...
*   Assumption 2: ...

## 4. Key Outcomes & Deliverables
(Elaborate on `key_outcomes_achieved`. What was tangibly produced or completed? Link to specific commits, PRs, created/modified files, or other concrete deliverables if applicable.)
*   Outcome 1: ...
    *   *Supporting evidence/links:*
*   Outcome 2: ...

## 5. Significant Decisions & Rationale
(More detail on `key_decisions_made`. Why were these decisions made? What alternatives were considered, if any? Link to ADRs or specific discussion artifacts if they exist.)
*   Decision 1: ...
    *   *Rationale:*
*   Decision 2: ...

## 6. Critical Learnings & Insights
(Expansion on `critical_learnings_or_insights`. What new knowledge was gained? What went particularly well, or what challenges provided valuable lessons? What surprised you?)
*   Learning 1: ...
*   Insight 1: ...

## 7. Outstanding Blockers/Issues & Potential Next Steps
(Further details on `outstanding_blockers_or_issues` and elaboration on `identified_next_steps_from_session`. What is preventing further progress, or what are the clear next actions that should be taken based on this session's work?)
*   Blocker/Issue 1: ...
    *   *Potential Next Step to Resolve:*
*   Identified Next Step 1 (from session): ...

## 8. Pointers for Continuity / Onboarding
(Specific advice, context, or warnings for someone picking up related work based on this session. Highlight the most critical `primary_context_artifacts` and `relevant_code_areas` that a newcomer should review first to get up to speed.)

**Key Artifacts to Review:**
*   `{{primary_context_artifacts[0].path}}`: {{primary_context_artifacts[0].description}}
*   ...

**Key Code Areas to Understand:**
*   `{{relevant_code_areas[0].path}}`: {{relevant_code_areas[0].change_summary}}
*   ...