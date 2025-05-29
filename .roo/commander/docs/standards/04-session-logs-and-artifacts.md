+++
# --- Basic Metadata ---
id = "STANDARD-SESSION-LOGS-ARTIFACTS-V2" # Updated version
title = "Standard: Session Logs & Artifact Management"
context_type = "standards_document"
scope = "Explains the standard structure, content, and lifecycle for Roo Commander Session Logs (`session_log.md`) and their associated Session Artifacts (`artifacts/` directory)."
target_audience = ["all"] # All modes and developers interacting with sessions
granularity = "standard_explanation"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "2.0" # Incremented due to refined conventions
tags = ["standards", "session-management", "logging", "artifacts", "toml-md", "traceability"]
related_context = [
    ".roo/rules/03-session-management-standard.md", # The formal workspace rule this explains
    ".roo/commander/templates/sessions/template_00_mdtm_session_generic.md",
    ".roo/commander/templates/sessions/template_00_mdtm_session_generic.README.md",
    ".roo/commander/templates/sessions/artifacts/", # Points to the directory of session artifact templates
    ".roo/commander/docs/standards/01-naming-conventions.md",
    ".roo/commander/docs/standards/02-toml-md-document-format.md"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Annually"
+++

# Standard: Session Logs & Artifact Management

## 1. Introduction: What are Roo Commander Sessions?

When you work with Roo Commander on a specific goal or project phase (like designing a Data Product PoC), all related activities, discussions, decisions, and generated files are organized within a **Session**. Think of a session as a dedicated work envelope or a project diary for a particular objective.

The Session Management system is designed to:
*   Keep your work organized.
*   Ensure all important information is captured and easy to find.
*   Provide a clear history (traceability) of how results were achieved.
*   Allow you to pause and resume work effectively.

This guide explains the key components of a session: the `session_log.md` and the `artifacts/` directory. This system is formally defined in the workspace rule: `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`. All paths referenced herein **MUST** be workspace-root-relative (starting with `.roo/`).

## 2. The Session Directory: Your Work Hub

Each session gets its own unique directory.
*   **Location:** All session directories **MUST** be stored within `[.roo/commander/sessions/](.roo/commander/sessions/)`.
*   **Naming Convention:** Session directories **MUST** follow the pattern `SESSION-[SanitizedGoal]-[YYYYMMDD-HHMMSS]`.
    *   `[SanitizedGoal]`: A short, filesystem-safe version of the session's primary goal or title.
    *   `[YYYYMMDD-HHMMSS]`: Timestamp of session creation for uniqueness.
    *   *Example:* `SESSION-DataProductPoCWebAppAnalytics-20250720-140000`

Inside this main session directory, you'll find two primary items:
1.  `session_log.md` (The Session Log)
2.  `artifacts/` (The Session Artifacts Directory)

## 3. The Session Log (`session_log.md`)

This is the central narrative and index for your session.

*   **File:** `session_log.md`
*   **Location:** Directly inside the session directory (e.g., `[.roo/commander/sessions/SESSION-DataProductPoCWebAppAnalytics-20250720-140000/session_log.md](.roo/commander/sessions/SESSION-DataProductPoCWebAppAnalytics-20250720-140000/session_log.md)`).
*   **Purpose:** To provide a chronological record of key events, decisions, and links to important files created or used during the session.
*   **Format:** It **MUST** be a TOML+Markdown file, adhering to `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`.
*   **Template:** **MUST** be created using `[.roo/commander/templates/sessions/template_00_mdtm_session_generic.md](.roo/commander/templates/sessions/template_00_mdtm_session_generic.md)`.

### 3.1. Key Information in `session_log.md` (TOML Frontmatter)

All datetimes **MUST** be in ISO 8601 UTC format (`YYYY-MM-DDTHH:MM:SSZ`).

*   **`id` (String, Required):** The unique Session ID. **MUST** match the session directory name (e.g., `"SESSION-DataProductPoCWebAppAnalytics-20250720-140000"`).
*   **`title` (String, Required):** The user-defined goal or title provided when the session started.
*   **`status` (String, Required):** The current state of the session.
    *   **Standard Values:** `"🟢 Active"`, `"⏸️ Paused"`, `"🏁 Completed"`, `"🔴 Error"`.
*   **`start_time` (String, Required):** Timestamp (ISO 8601 UTC) of when the session was created.
*   `end_time` (String, Optional): Timestamp (ISO 8601 UTC) of when the session was Paused or Completed/Errored.
*   **`coordinator` (String, Required):** The slug of the AI mode that initiated and is managing the session (usually `roo-commander`).
*   `related_tasks` (Array of Strings, Optional): Lists the `id`s of any top-level MDTM task files (from `[.roo/commander/tasks/](.roo/commander/tasks/)`) that were initiated by the session coordinator during this session.
*   `related_artifacts` (Array of Strings, Optional): A list of **relative paths from the session directory root** to all significant files stored within this session's `artifacts/` directory (e.g., `"artifacts/notes/NOTE-InitialIdeas-20250720T140500Z.md"`).
*   `tags` (Array of Strings, Optional): Keywords relevant to the session's goal (e.g., `"session"`, `"log"`, `"data-product-design"`).

### 3.2. Log Entries in `session_log.md` (Markdown Body)

*   Below the TOML frontmatter, under `## Log Entries`, is a timestamped list of significant events.
*   Each entry **MUST** be timestamped (ISO 8601 UTC: `YYYY-MM-DDTHH:MM:SSZ`) and attribute the action to the responsible mode.
*   **Key Events to Log:** Session start/pause/resume/end, key user prompts and significant responses, delegation of major tasks (including MDTM Task ID and path), creation of significant artifacts (with their relative path from session root), critical errors, important decisions at the coordinator level.

## 4. Session Artifacts (The `artifacts/` Directory)

This is where all supporting documents, notes, research, code snippets, and final design deliverables produced during the session are stored.

*   **Location:** `[YourSessionDirectory]/artifacts/`
*   **Standard Subdirectories (Scaffold):**
    *   Upon session initiation, a standard set of subdirectories **MUST** be created within `artifacts/` to organize content. This scaffold includes (but is not limited to): `notes/`, `learnings/`, `questions/`, `snippets/`, `design_outputs/`, `research/`, `blockers/`, `context/`, `deferred/`, `docs/`, `environment/`, `features/`, `feedback/`, `summaries/`.
    *   Each of these subdirectories **SHOULD** contain a `README.md` explaining its specific purpose (copied from a central template scaffold, e.g., `[.roo/commander/templates/sessions/artifacts/blocker/README.md]`).
*   **`design_outputs/` Subdirectory:**
    *   This is a critical folder for storing primary deliverables from complex design workflows (e.g., managed by `manager-data-product`).
    *   It may contain further project-specific subfolders (e.g., `artifacts/design_outputs/WebApp_Analytics_PoC/`).
    *   Files like `product_strategy.md`, `poc_ideation.md`, `data_product_poc_plan.md` will typically reside here.
*   **Artifact Creation & Naming:**
    *   Modes or users create artifacts within these subdirectories.
    *   Artifact files **MUST** follow the naming convention: `[TYPE_PREFIX_CAPS]-[Topic_Kebab_Case]-[YYMMDDHHMMSS].[ext]` (e.g., `NOTE-InitialIdeas-20250720140500.md`). Prefixes are defined by the artifact type (see `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`).
    *   Appropriate templates from `[.roo/commander/templates/sessions/artifacts/](.roo/commander/templates/sessions/artifacts/)` **SHOULD** be used.
*   **Linking Artifacts:**
    *   Whenever a significant artifact is created, its relative path (from the session directory root, e.g., `artifacts/design_outputs/WebApp_Analytics_PoC/product_strategy_v1.md`) **MUST** be added to the `related_artifacts` array in the `session_log.md`'s TOML frontmatter.

## 5. Traceability & Workflow Connection

The Session Management system, in conjunction with MDTM tasks, provides end-to-end traceability:
1.  A **Session** is started by `roo-commander` for a goal.
2.  The **`session_log.md`** records this and links to any top-level MDTM Task (e.g., `TASK-MDP-XYZ`) assigned to a Manager.
3.  The Manager's **MDTM Task file** details its sub-task delegations to Squad Members.
4.  Squad Members' **MDTM sub-tasks** list their specific `output_artifacts` (e.g., `product_strategy.md`).
5.  The path to these `output_artifacts` (e.g., `artifacts/design_outputs/MyPoC/product_strategy.md`) is recorded in the squad member's MDTM task, then potentially in the Manager's MDTM task, and also in the main `session_log.md`'s `related_artifacts`.

## 6. Rationale

*   **Organization:** Keeps all work related to a specific goal grouped together.
*   **Traceability:** Provides a clear, chronological record of activities, decisions, and delegations.
*   **Context Preservation:** Ensures all relevant information is captured and easily findable.
*   **Continuity:** Allows work to be paused, resumed, and handed off effectively.

By understanding and adhering to this standard for session logs and artifacts, all participants (AI modes and humans) can effectively navigate, review, and contribute to projects within Roo Commander.