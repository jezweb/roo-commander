+++
# --- Basic Metadata ---
id = "WORKSPACE-RULE-SESSION-MGMT-STANDARD-V1" # New V1 for this streamlined set
title = "Workspace Standard: Session Management & Artifact Logging"
context_type = "rules"
scope = "Workspace-wide standard for the initiation, active logging, artifact management, and lifecycle of user interaction sessions."
target_audience = ["all"] # Applies to all modes, especially coordinators and any mode creating session artifacts.
granularity = "procedure"
status = "active"
last_updated = "{{YYYYMMDD}}" # To be filled with current date
version = "1.0"
tags = ["rules", "standard", "session-management", "logging", "artifacts", "toml-md", "traceability"]
related_context = [
    ".roo/commander/templates/sessions/template_00_mdtm_session_generic.md", # Path to your session log template
    ".roo/commander/templates/sessions/template_00_mdtm_session_generic.README.md",
    ".roo/commander/templates/note/template_00_session_note.md", # Updated path
    ".roo/commander/templates/summary/template_00_session_summary.md", # Updated path
    ".roo/commander/templates/learning/template_00_session_learning.md", # Updated path
    ".roo/rules/01-standard-toml-md-format.md",
    ".roo/rules/02-mdtm-task-standard.md" # MDTM tasks are often related to sessions
]
template_schema_doc = ".roo/commander/templates/rules/template_00_workspace_rule.README.md" # Assuming a generic rule template schema
# --- Rule Specific Fields ---
# enforcement_level = "critical"
# rationale_summary = "Ensures consistent, traceable, and well-organized recording of user interactions, decisions, and generated artifacts within distinct sessions."
+++

# Workspace Standard: Session Management & Artifact Logging

## 1. Objective

To establish a consistent, workspace-wide standard for initiating, managing, logging to, and concluding user interaction sessions. This includes the standardized creation and linking of session-specific artifacts to provide comprehensive context and traceability for all significant activities.

## 2. Core Session Components

*   **Session Directory:** Each session **MUST** have a dedicated directory.
    *   **Location:** `.mdtm/sessions/`
    *   **Naming Convention:** `SESSION-[SanitizedGoal]-[YYYYMMDD-HHMMSS]`
        *   `[SanitizedGoal]`: A short, filesystem-safe version of the session's primary goal or title.
        *   `[YYYYMMDD-HHMMSS]`: Timestamp of session creation for uniqueness.
*   **Session Log File (`session_log.md`):** The central record for each session.
    *   **Location:** Directly within the session directory (e.g., `.mdtm/sessions/SESSION-XYZ-20250701-120000/session_log.md`).
    *   **Template:** **MUST** be created using `template_00_mdtm_session_generic.md` (located at `.roo/commander/templates/sessions/template_00_mdtm_session_generic.md`).
    *   **Format:** **MUST** adhere to `.roo/rules/01-standard-toml-md-format.md`.
*   **Session Artifacts:** All contextual files generated or referenced during the session will reside directly within the session directory or its subdirectories.

## 3. Session Lifecycle & Status

*   **Initiation:**
    *   **Responsibility:** Primarily by designated coordinator modes (e.g., `roo-commander`) based on user interaction or explicit command.
    *   **Procedure:**
        1.  Determine session goal/title.
        2.  Generate unique `RooComSessionID` (which forms part of the directory name).
        3.  Create the session directory structure, including its standard subdirectories for artifacts (see Section 5.1). This **SHOULD** be performed by a mode with appropriate file system access for efficiency.
        4.  Create `session_log.md` using the standard template, populating initial TOML metadata (`id`, `title`, `status = "🟢 Active"`, `start_time`, `coordinator`).
        5.  The initiating coordinator **MUST** retain the active `RooComSessionID` for subsequent logging and artifact linking.
*   **Active Logging:**
    *   While a session is "🟢 Active", the coordinating mode and any involved specialist modes **MUST** log significant events to the `session_log.md`.
    *   **Log Entries:** Append to the `## Log Entries` Markdown section. Entries should be timestamped and attribute the action to the responsible mode.
    *   **Key Events to Log:** User prompts/decisions, MDTM task creation/delegation (with Task ID), artifact creation (with relative path), results from delegates, errors, status changes.
*   **Pausing:**
    *   A session can be moved to `"⏸️ Paused"` status. The `end_time` in `session_log.md` TOML should be updated.
*   **Resuming:**
    *   A paused session can be reactivated. The `status` in `session_log.md` TOML should be set back to `"🟢 Active"`, and `end_time` cleared or a new log entry made indicating resumption. The coordinator **MUST** reload necessary context from the session log and its artifacts.
*   **Completion/Ending:**
    *   When a session's goal is achieved or it's otherwise concluded, its `status` in `session_log.md` TOML **MUST** be updated to `"🏁 Completed"` (or `"🔴 Error"` if it failed). The `end_time` **MUST** be set.
    *   A final summary artifact (`template_00_session_summary.md`) **MAY** be generated and linked.

## 4. Linking MDTM Tasks and Session Artifacts in `session_log.md`

*   **`related_tasks` (TOML Array):**
    *   This field in `session_log.md` **MUST** list the `id`s of top-level MDTM tasks initiated by the session's coordinator (e.g., the main task assigned to a Manager mode).
*   **`related_artifacts` (TOML Array):**
    *   This field in `session_log.md` **MUST** list the **relative paths** (from the session directory root, e.g., `notes/NOTE-XYZ.md`, `design_outputs/[ProjectName]/strategy.md`) to all significant contextual files or key deliverables created or referenced during the session.
    *   Modes creating such artifacts are responsible for ensuring their paths are logged here by the coordinator or by reporting the path back for logging.

## 5. Session Artifacts

*   **Purpose:** To store all supporting files, notes, learnings, research, snippets, and key design deliverables relevant to the session.
*   **Standard Subdirectories & Scaffold:**
    *   Upon session initiation, a standard scaffold of subdirectories **MUST** be created directly within the `[SessionDirectory]`. This includes: `notes/`, `learnings/`, `summaries/`.
    *   Additional subdirectories may be created by modes as needed for specific workflows (e.g., `design_outputs/`).
    *   Each of these subdirectories **SHOULD** contain a `README.md` explaining its purpose.
*   **Artifact Creation:**
    *   Modes (or users) can create artifacts within these subdirectories as needed.
    *   Use specific templates from `.roo/commander/templates/` (e.g., `note/template_00_session_note.md`) when appropriate.
    *   The primary design outputs from specialist Squad modes (e.g., strategy documents, ideation plans) **MUST** be stored within a relevant subdirectory, typically `design_outputs/[ProjectName]/`.
*   **Naming Convention:** Artifact files should follow a consistent naming convention, typically `[TYPE_PREFIX]-[Topic]-[YYMMDDHHMMSS].[ext]`. Prefixes are defined by the artifact type (e.g., `NOTE-`, `LEARNING-`, `STRATEGY-`).

## 6. Rationale

*   **Traceability:** Provides a comprehensive record of user interactions and system activities.
*   **Context Preservation:** Ensures all relevant information for a piece of work is captured and linked.
*   **Continuity:** Allows sessions to be paused and resumed effectively.
*   **Collaboration:** Facilitates understanding and handoff between different modes or human users.
*   **Organization:** Keeps workspace tidy by centralizing session-specific files.

**Adherence to this Session Management Standard is crucial for maintaining an organized, traceable, and effective operational environment for Roo Commander V8 and its associated modes.**