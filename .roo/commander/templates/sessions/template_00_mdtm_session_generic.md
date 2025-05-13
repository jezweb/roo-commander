+++
# --- Session Metadata ---
id = "" # (String, Required) Unique RooComSessionID for the session (e.g., "SESSION-[SanitizedGoal]-[YYMMDDHHMM]"). << Placeholder: Must be generated at runtime >>
title = "" # (String, Required) User-defined goal or auto-generated title for the session. << Placeholder: Must be defined at runtime >>
status = "🟢 Active" # (String, Required) Current status (e.g., "🟢 Active", "⏸️ Paused", "🏁 Completed", "🔴 Error"). << Default: Active >>
start_time = "" # (Datetime, Required) Timestamp when the session log was created. << Placeholder: Must be generated at runtime >>
end_time = "" # (Datetime, Optional) Timestamp when the session was marked Paused or Completed. << Placeholder: Optional, set at runtime >>
coordinator = "" # (String, Required) ID of the Coordinator mode that initiated the session (e.g., "prime-coordinator", "roo-commander"). << Placeholder: Must be set at runtime >>
related_tasks = [
    # (Array of Strings, Optional) List of formal MDTM Task IDs (e.g., "TASK-...") related to this session.
]
related_artifacts = [
    # (Array of Strings, Optional) List of relative paths (from session root) to contextual note files within the `artifacts/` subdirectories (e.g., "artifacts/notes/NOTE-initial_plan-2506050100.md").
]
tags = [
    # (Array of Strings, Optional) Keywords relevant to the session goal or content.
    "session", "log", "v6",
]
+++

# Session Log V6

*This section is primarily for **append-only** logging of significant events by the Coordinator and involved modes.*
*Refer to `.ruru/docs/standards/session_artifact_guidelines_v1.md` for artifact types and naming.*

## Log Entries

- [YYYY-MM-DD HH:MM:SS] Session initiated by `[coordinator_id]` with goal: "[Goal Text]"
- [YYYY-MM-DD HH:MM:SS] Created artifact: `[relative_artifact_path]` (Type: [e.g., note, learning])
- [YYYY-MM-DD HH:MM:SS] Delegated task `[TASK-ID]` to `[mode_slug]`: [Brief Objective]
- [YYYY-MM-DD HH:MM:SS] Received result from `[mode_slug]` for task `[TASK-ID]`: [Success/Failure Summary]
- [YYYY-MM-DD HH:MM:SS] Session status changed to: `[New Status]`