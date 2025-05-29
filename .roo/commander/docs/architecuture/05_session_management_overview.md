+++
# --- Basic Metadata ---
id = "ARCHITECTURE-SESSION-MGMT-V2" # Updated version
title = "Architecture: Session Management & Artifacts - Context and Traceability"
context_type = "architectural_document"
scope = "Explains the Roo Commander system's approach to session management, including the structure and purpose of session directories, session logs (`session_log.md`), and session artifacts (`artifacts/` directory) for maintaining context and traceability."
target_audience = ["developers", "system_architects"]
granularity = "detailed_system_component_description"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "2.0" # Incremented due to significant revisions
tags = ["architecture", "session-management", "logging", "artifacts", "traceability", "context", "roo-commander"]
related_context = [
    ".roo/commander/docs/architecture/README.md", # Parent index
    ".roo/commander/docs/standards/04-session-logs-and-artifacts.md", # Detailed standard for session logs/artifacts
    ".roo/rules/03-session-management-standard.md", # Formal rule for session management
    ".roo/commander/templates/sessions/template_00_mdtm_session_generic.md", # Session log template
    ".roo/commander/docs/architecture/01_orchestrator_role.md" # Roo Commander manages sessions
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Semi-Annually"
+++

# Architecture: Session Management & Artifacts - Context and Traceability

## 1. Introduction: The Concept of a "Session"

In Roo Commander, a **Session** represents a distinct period of interaction between a user and the system (primarily `👑 Roo Commander` (`roo-commander`)), typically focused on achieving a specific high-level goal or completing a significant phase of work (e.g., "Design the Initial PoC for Project Alpha," "Refine User Personas for Q3 Campaign").

The Session Management system is a core architectural component designed to:
*   **Preserve Context:** Capture all relevant information, discussions, decisions, and generated files related to a particular work effort.
*   **Ensure Traceability:** Provide a clear, chronological record of activities and delegations.
*   **Facilitate Continuity:** Allow work to be paused, resumed, and handed off effectively.
*   **Organize Work Products:** Keep all files related to a specific goal grouped together.

All paths referenced herein **MUST** be workspace-root-relative (starting with `.roo/`).

## 2. Core Components of Session Management

The system revolves around a few key components, governed by the workspace standard `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)` and detailed in `[.roo/commander/docs/standards/04-session-logs-and-artifacts.md](.roo/commander/docs/standards/04-session-logs-and-artifacts.md)`.

### 2.1. Session Directory
*   **Structure:** Each session is housed in its own dedicated directory within the workspace.
*   **Location:** `[.roo/commander/sessions/](.roo/commander/sessions/)`
*   **Naming Convention:** `SESSION-[SanitizedGoal]-[YYYYMMDD-HHMMSS]` (e.g., `SESSION-DataProductPoCAlpha-20250720-103000`)
*   **Purpose:** Acts as the top-level container for all information related to that specific work session.

### 2.2. Session Log (`session_log.md`)
*   **Location:** Directly within the Session Directory (e.g., `[.roo/commander/sessions/SESSION-DataProductPoCAlpha-20250720-103000/session_log.md](.roo/commander/sessions/SESSION-DataProductPoCAlpha-20250720-103000/session_log.md)`).
*   **Format:** A TOML+Markdown file based on `[.roo/commander/templates/sessions/template_00_mdtm_session_generic.md](.roo/commander/templates/sessions/template_00_mdtm_session_generic.md)`. Adheres to `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`.
*   **Purpose:** This is the central, chronological narrative of the session. It records:
    *   **Session Metadata (TOML):** Unique `id` (SessionID, matching directory name), `title` (goal), `status` (Active, Paused, Completed, Error), `start_time` (ISO 8601 UTC), `end_time` (ISO 8601 UTC, if applicable), `coordinator` mode (`roo-commander`).
    *   **Links to MDTM Tasks (TOML `related_tasks`):** `id`s of top-level MDTM tasks initiated by `👑 Roo Commander` during this session (e.g., the main task assigned to a Manager mode).
    *   **Links to Session Artifacts (TOML `related_artifacts`):** **Relative paths from the session directory root** to all significant contextual files and key deliverables created or referenced during the session and stored in the `artifacts/` subdirectory (e.g., `artifacts/notes/NOTE-InitialIdeas-20250720T103500Z.md`).
    *   **Log Entries (Markdown):** Timestamped (ISO 8601 UTC) entries detailing key events, user interactions, decisions made by `👑 Roo Commander`, delegations to Manager modes, and critical outcomes.

### 2.3. Session Artifacts Directory (`artifacts/`)
*   **Location:** A subdirectory within each Session Directory (e.g., `[.roo/commander/sessions/SESSION-DataProductPoCAlpha-20250720-103000/artifacts/](.roo/commander/sessions/SESSION-DataProductPoCAlpha-20250720-103000/artifacts/)`).
*   **Purpose:** To store all supporting files, notes, learnings, research findings, code snippets, and crucially, the **key design deliverables** produced by Manager and Squad modes during the session.
*   **Standardized Substructure (Scaffold):** Upon session initiation, a standard set of subdirectories **MUST** be created within `artifacts/` to help organize different types of information. This includes, but is not limited to:
    *   `notes/`: General ad-hoc notes.
    *   `learnings/`: Key insights or solutions discovered.
    *   `questions/`: Questions raised for later resolution.
    *   `design_outputs/`: **This is where primary deliverables from workflows like Data Product Design (e.g., `product_strategy.md`, `poc_ideation.md`, `data_product_poc_plan.md`) are stored**, often within a further project-specific subfolder (e.g., `design_outputs/PROJECT_ALPHA/`).
    *   `summaries/`: Stores session summary documents if generated.
    *   Other folders like `research/`, `blockers/`, `context/`, `snippets/`, `deferred/`, `docs/`, `environment/`, `features/`, `feedback/` as defined in the scaffold.
*   Each subdirectory within the scaffold **SHOULD** contain a `README.md` explaining its purpose and expected content/naming conventions (copied from templates like those in `[.roo/commander/templates/sessions/artifacts/](.roo/commander/templates/sessions/artifacts/)`).

## 3. How Sessions Provide Context and Traceability

### 3.1. Contextual Grouping
*   By containing all logs, notes, and work products related to a specific goal within a single session directory, the system ensures that context is not lost or scattered across the workspace.
*   When resuming a session, `👑 Roo Commander` (and potentially other modes) can quickly re-establish context by reviewing the `session_log.md` and key artifacts.

### 3.2. Chronological Record
*   The `session_log.md` provides a timestamped narrative of the interaction, showing the sequence of events, decisions, and delegations. This is invaluable for understanding how a particular outcome was reached.

### 3.3. Linking Work Units
*   The `related_tasks` field in the `session_log.md` links the session directly to the high-level MDTM tasks managed by `👑 Roo Commander`.
*   The `related_artifacts` field links the session log to all supporting documentation and key deliverables created during that session, using paths relative to the session directory.
*   MDTM task files themselves contain `parent_task_id` and `input_artifacts`/`output_artifacts` fields (using workspace-root-relative paths), creating a further web of traceable relationships between work items.

### 3.4. Supporting Asynchronous Work and Handoffs
*   A well-documented session (via its log and artifacts) can be easily paused and resumed later by the same user or even handed off to another user or a different AI orchestrator (in more advanced scenarios). The session directory contains all the necessary information to get up to speed.

### 3.5. Auditability
*   The entire structure provides a robust audit trail, which can be important for project reviews, quality assurance, or understanding the history of a project's development.

## 4. Session Lifecycle Management

`👑 Roo Commander` (`roo-commander`) is responsible for managing the lifecycle of sessions, including:

*   **Initiation:** Creating new sessions when a new high-level goal is undertaken.
*   **Activation:** Setting a session as "active" so that all subsequent logging and artifact creation occurs within its context.
*   **Pausing & Resuming:** Allowing users to temporarily halt and later continue work on a session.
*   **Summarization:** (Potentially) Guiding the user to key session information or (future) generating concise summaries.
*   **Completion/Ending:** Formally closing out a session when its objectives are met or it is otherwise concluded, updating its status and `end_time`.

These processes are detailed in `[.roo/commander/modes/roo-commander/kb/procedures/02-handle-session-mgmt-commands.md](.roo/commander/modes/roo-commander/kb/procedures/02-handle-session-mgmt-commands.md)`.

## 5. Conclusion

The Session Management system is a cornerstone of Roo Commander's architecture. By providing a standardized and structured way to capture, organize, and link all aspects of a user's interaction around a specific goal, it greatly enhances context preservation, traceability, and the overall manageability of complex, AI-driven workflows. The `artifacts/` directory, particularly `artifacts/design_outputs/`, becomes the repository for the valuable deliverables produced by the system.