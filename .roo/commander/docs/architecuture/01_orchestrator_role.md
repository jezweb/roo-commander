# Architecture: The Orchestrator (`roo-commander`) Role

## 1. Introduction

The `roo-commander` mode is the **central, top-level Orchestrator** and primary user-facing AI agent within the Roo Commander V8 system. It serves as the main entry point for users initiating complex workflows and is responsible for high-level coordination, session management, and strategic delegation to specialized "Manager" modes.

Unlike previous iterations that might have attempted to handle diverse tasks directly, Roo Commander V8 is intentionally designed to be a lean orchestrator. Its intelligence lies in understanding user intent at a high level, managing the context of the interaction (via Sessions), and knowing *which Manager mode to engage* for specific, complex domains of work.

## 2. Core Responsibilities

The primary responsibilities of `roo-commander` can be broken down as follows:

### 2.1. Initial User Interaction & Goal Clarification
*   **Greeting and Options:** `roo-commander` initiates the conversation by greeting the user and presenting a focused set of primary actions (e.g., "Start New Design/Workflow Session," "Manage Existing Sessions," "Help"). These options are defined in its Knowledge Base (KB) file: `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md`.
*   **Intent Understanding:** Based on the user's selection, `roo-commander` determines the high-level objective. If the user selects to start a new workflow that requires a Manager mode, `roo-commander` consults its KB (`.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`) to identify which Manager is suitable.

### 2.2. Session Management
`roo-commander` is the primary steward of work sessions, adhering to the workspace standard defined in `.roo/rules/03-session-management-standard.md`. This includes:
*   **Session Initiation:**
    *   Prompting the user for a session goal/title when a new session is required.
    *   Generating a unique `RooComSessionID` and establishing the session directory structure (e.g., `.roo/commander/sessions/SESSION-[Goal]-[Timestamp]/`).
    *   **Delegating Scaffold Creation:** It delegates the physical creation of the session directory and the standard `artifacts/` subdirectory scaffold (including their `README.md` files) to a simple file worker mode (e.g., `code` or `util-file-scaffolder`).
    *   Creating the `session_log.md` file using the standard template and populating its initial metadata.
*   **Active Session Logging:** Maintaining the `session_log.md` for the currently active session by logging:
    *   Key user interactions and decisions.
    *   Delegation of top-level MDTM tasks to Manager modes (including the Task ID).
    *   Creation of significant session artifacts (with their relative paths).
    *   Status updates or critical errors reported by Manager modes.
*   **Lifecycle Management:** Handling user commands (via `.roo/commander/modes/roo-commander/kb/procedures/02-handle-session-mgmt-commands.md`) to:
    *   List active/paused sessions.
    *   Resume a paused session (re-establishing context).
    *   Summarize a session (currently by pointing to its log and key artifacts).
    *   End (complete or error out) a session, updating its status and `end_time`.

### 2.3. Delegation to Manager Modes
This is a critical function for enabling complex workflows:
*   **Manager Identification:** Based on the user's chosen workflow (e.g., "Data Product Design PoC"), `roo-commander` identifies the appropriate Manager mode slug (e.g., `manager-data-product`) by consulting its KB (`.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`).
*   **Top-Level MDTM Task Creation:** It creates a single, high-level MDTM task for the selected Manager mode. This task:
    *   Uses the standard generic task template (`.roo/commander/templates/tasks/template_00_mdtm_task_generic.md`).
    *   Encapsulates the overall user objective for that workflow.
    *   Sets `coordinator` to `"roo-commander"` and `assigned_to` to the Manager's slug.
    *   References the active `RooComSessionID` for context.
    *   Is saved to a standard location (e.g., `.roo/commander/tasks/[MANAGER_SLUG]/`).
*   **Task Assignment:** `roo-commander` uses a `new_task` tool call to inform the Manager mode about the newly created MDTM task file, effectively delegating the entire domain-specific workflow.
*   **Session Log Update:** The ID of this top-level MDTM task is added to the `related_tasks` array in the active `session_log.md`.

### 2.4. High-Level Monitoring and Coordination
*   Once a Manager mode is engaged, `roo-commander` transitions to a monitoring role for that specific delegation.
*   It primarily awaits the Manager mode to report completion (by updating its MDTM task status to "🟢 Done") or to escalate critical, unresolvable errors.
*   It does **not** manage the internal sub-tasks or squad coordination performed by the Manager.

### 2.5. Basic Error Handling
*   If a Manager mode reports a critical failure on its top-level MDTM task, `roo-commander` logs this in the session log, clearly informs the user of the failure (attributing it to the Manager), and prompts the user for guidance on how to proceed (e.g., retry, abandon, seek alternative solutions).

## 3. Interaction Flow Example (Initiating Data Product Design)

1.  **User:** Interacts with `@roo-commander`.
2.  **`roo-commander`:** Presents initial options (from `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md`).
3.  **User:** Selects "🚀 Start New Design / Workflow Session..."
4.  **`roo-commander`:** (Following `.roo/commander/modes/roo-commander/kb/procedures/01-initiate-manager-delegation.md`)
    *   Consults `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`.
    *   Presents "📊 Data Product Design PoC" (and any other available Manager workflows) as an option.
5.  **User:** Selects "📊 Data Product Design PoC".
6.  **`roo-commander`:**
    *   Initiates a new session (or confirms using an active one), including prompting for a goal, delegating scaffold creation, and creating `session_log.md`. Let's say the new session is `SESSION-DPD-XYZ`.
    *   Creates an MDTM task (e.g., `TASK-MDP-ABC`) for `manager-data-product`, with the goal "Design Data Product PoC for [user's project idea] in session `SESSION-DPD-XYZ`".
    *   Logs `TASK-MDP-ABC` to `SESSION-DPD-XYZ/session_log.md`.
    *   Delegates `TASK-MDP-ABC` to `@manager-data-product`.
    *   Informs user: "`@manager-data-product` will now guide you through the Data Product Design PoC process within session `SESSION-DPD-XYZ`."
7.  **`manager-data-product`:** Takes over the detailed orchestration for its domain.

## 4. Key Characteristics

*   **Lean:** Its own logic is focused and relies heavily on its KB for procedures.
*   **Non-Domain Expert:** It doesn't know *how* to design a data product, only *who* to ask (i.e., `manager-data-product`).
*   **Session-Centric:** All its major operations are tied to and logged within a work session.
*   **MDTM Initiator (for Managers):** Uses MDTM as the formal contract for delegating large workflows to Manager modes.

## 5. Limitations

*   Its ability to handle diverse workflows is directly tied to the configured Manager modes listed in its `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`.
*   It does not perform deep error diagnosis within Manager-controlled workflows; it relies on Managers to report critical issues.

By fulfilling these roles and responsibilities, `roo-commander` acts as a stable and predictable entry point to the more complex, domain-specific capabilities offered by the various Manager and Squad modes in the Roo Commander V8 ecosystem.