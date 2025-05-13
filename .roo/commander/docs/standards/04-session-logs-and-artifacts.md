# Standard: Understanding Session Logs & Artifacts

## 1. Introduction: What are Roo Commander V8 Sessions?

When you work with Roo Commander V8 on a specific goal or project phase (like designing a Data Product PoC), all related activities, discussions, decisions, and generated files are organized within a **Session**. Think of a session as a dedicated work envelope or a project diary for a particular objective.

The Session Management system is designed to:
*   Keep your work organized.
*   Ensure all important information is captured and easy to find.
*   Provide a clear history (traceability) of how results were achieved.
*   Allow you to pause and resume work effectively.

This guide explains the key components of a session: the `session_log.md` and the `artifacts/` directory. This system is formally defined in the workspace rule: `[.roo/rules/03-session-management-standard.md](.././/rules/03-session-management-standard.md)`.

## 2. The Session Directory: Your Work Hub

Each session gets its own unique directory.
*   **Location:** All session directories are stored within `.roo/commander/sessions/`.
*   **Naming:** They follow the pattern `SESSION-[YourGoal]-[Timestamp]`, for example:
    `SESSION-DataProductPoC_WebAppAnalytics-20250716-140000`

Inside this main session directory, you'll find two primary items:

1.  `session_log.md` (The Session Log)
2.  `artifacts/` (The Session Artifacts Directory)

## 3. The Session Log (`session_log.md`)

This is the central narrative and index for your session.

*   **File:** `session_log.md`
*   **Location:** Directly inside your session directory.
*   **Purpose:** To provide a chronological record of key events, decisions, and links to important files created or used during the session.
*   **Format:** It's a TOML+Markdown file (see `[./02-toml-md-document-format.md](./02-toml-md-document-format.md)`).

### Key Information in `session_log.md` (TOML Frontmatter):

*   **`id`:** The unique Session ID (matches the directory name).
*   **`title`:** The goal or title you provided when the session started.
*   **`status`:** The current state of the session (e.g., `"🟢 Active"`, `"⏸️ Paused"`, `"🏁 Completed"`).
*   **`start_time` / `end_time`:** When the session began and ended/paused.
*   **`coordinator`:** The AI mode that initiated and is managing the session (usually `roo-commander`).
*   **`related_tasks` (Array):** Lists the IDs of any top-level MDTM task files (from `.roo/commander/tasks/`) that were initiated by `roo-commander` during this session. For example, the main task assigned to `manager-data-product`.
*   **`related_artifacts` (Array):** This is a crucial list of **relative paths** to all important files stored within this session's `artifacts/` directory. This includes notes, learnings, and key design deliverables. Paths are relative from the session directory root (e.g., `artifacts/notes/NOTE-InitialIdeas-20250716-140500.md`).
*   **`tags` (Array):** Keywords relevant to the session's goal.

### Log Entries in `session_log.md` (Markdown Body):

*   Below the TOML frontmatter, under `## Log Entries`, you'll find a timestamped list of significant events. This includes:
    *   When the session was started, paused, resumed, or ended.
    *   Key prompts from `roo-commander` and your significant responses.
    *   When `roo-commander` delegates a major task (like starting a Data Product Design workflow) to a Manager mode, including the MDTM Task ID.
    *   When significant artifacts (especially key deliverables) are created and saved, along with their paths.
    *   Any critical errors or important decisions made at the `roo-commander` level.

**Think of the `session_log.md` as the captain's log for your work session.**

## 4. Session Artifacts (The `artifacts/` Directory)

This is where all the "stuff" you and the AI modes create or reference during the session is stored.

*   **Location:** `[YourSessionDirectory]/artifacts/`
*   **Purpose:** To provide a structured repository for all supporting documents, notes, research, code snippets, and, most importantly, the **final design deliverables** produced by the workflows (like the Data Product PoC Plan).

### Standard Subdirectories within `artifacts/`:

When `roo-commander` initiates a new session, it sets up a standard "scaffold" of subdirectories within `artifacts/` to help keep things organized. Each of these subdirectories will contain its own `README.md` explaining its specific purpose. Common and important ones include:

*   **`design_outputs/`**:
    *   **This is a key folder!** It's the primary location where the main deliverables from complex design workflows (like those managed by `manager-data-product`) are stored.
    *   You might find further subfolders here named after your specific project or PoC (e.g., `design_outputs/WebApp_Analytics_PoC/`).
    *   Files like `product_strategy.md`, `poc_ideation.md`, `user_persona_*.md`, `simulated_data_schema.md`, `poc_interface_design.md`, and the final `data_product_poc_plan.md` will typically reside here.
*   **`notes/`**: For general, ad-hoc notes, meeting minutes, or quick observations made during the session. (Uses `template_00_session_note.md`).
*   **`learnings/`**: For documenting key insights, solutions to problems, or "aha!" moments. (Uses `template_00_session_learning.md`).
*   **`questions/`**: For specific questions raised during the session that need answers or further investigation. (Uses `template_00_session_question.md`).
*   **`summaries/`**: If session summaries are generated (e.g., by `agent-session-summarizer` or manually), they are stored here. (Uses `template_00_session_summary.md`).
*   **Other useful folders:** `blockers/`, `context/` (for external files or data brought into the session), `deferred/` (for ideas to tackle later), `docs/` (for draft documentation snippets related to the session's work), `environment/`, `features/` (for notes on specific features being designed), `feedback/`, `research/`, `snippets/`.

### Linking Artifacts:

*   Whenever a significant artifact is created in one of these subdirectories, its relative path (e.g., `artifacts/design_outputs/WebApp_Analytics_PoC/product_strategy_v1.md`) **MUST** be added to the `related_artifacts` array in the `session_log.md`'s TOML frontmatter. This creates a direct link from the session's main log to all its important contents.

## 5. How It All Connects: Traceability

The Session Management system provides end-to-end traceability:

1.  You start a **Session** with `roo-commander` for a specific goal (e.g., "Design Data Product PoC").
2.  The **`session_log.md`** records this goal and the creation of a top-level MDTM Task (e.g., `TASK-MDP-XYZ`) assigned to `manager-data-product`.
3.  The **MDTM Task file** (`.roo/commander/tasks/.../TASK-MDP-XYZ.md`) details how `manager-data-product` breaks down the goal and delegates sub-tasks to its squad (e.g., `TASK-DPSTRAT-ABC` for the strategist).
4.  Each **Squad Member's MDTM sub-task** details its specific work and lists its `output_artifacts` (e.g., `TASK-DPSTRAT-ABC` outputs `product_strategy.md`).
5.  The path to this `product_strategy.md` (e.g., `artifacts/design_outputs/MyPoC/product_strategy.md`) is recorded in `TASK-DPSTRAT-ABC`'s `output_artifacts`, then in `TASK-MDP-XYZ`'s `output_artifacts` (as a final deliverable of the manager), and also in the main `session_log.md`'s `related_artifacts`.

This interconnected system of logs and linked files ensures you can always trace how a final deliverable was created and what activities occurred during its development.

---

By understanding the structure of session logs and artifacts, you can effectively navigate the outputs of Roo Commander V8, review the detailed work performed, and easily access all your project deliverables and contextual information.