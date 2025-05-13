# User Guide: Understanding Outputs & Artifacts in Roo Commander V8

Roo Commander V8 and its associated Manager and Squad modes operate by creating and referencing a series of structured text files. Understanding these different types of outputs and where to find them is key to reviewing your work, tracking progress, and utilizing the deliverables.

This guide explains the main categories of files produced and their typical locations.

## 1. The Session: Your Primary Work Container

Almost all work you do with Roo Commander V8 happens within the context of a **Session**. Each session has its own dedicated directory, which acts as the main container for all related information.

*   **Location:** `.roo/commander/sessions/`
*   **Naming:** Session directories are named `SESSION-[YourGoal]-[Timestamp]` (e.g., `SESSION-DataProductPoC_Alpha-20250715-103000`).

Within each session directory, you'll find two main components: the Session Log and the Artifacts directory.

### 1.1. The Session Log (`session_log.md`)

*   **File:** `session_log.md`
*   **Location:** Directly inside your session directory (e.g., `.roo/commander/sessions/SESSION-DataProductPoC_Alpha-20250715-103000/session_log.md`).
*   **Purpose:** This is the central, chronological narrative of your interaction with `roo-commander` for that specific session.
*   **Content:**
    *   **TOML Frontmatter:** Contains metadata about the session like its unique `id`, `title` (your goal), `status` (Active, Paused, Completed), `start_time`, `end_time`, and the `coordinator` (usually `roo-commander`).
    *   **`related_tasks` (TOML):** Lists the IDs of any top-level MDTM tasks initiated by `roo-commander` during this session (e.g., the main task assigned to `manager-data-product`).
    *   **`related_artifacts` (TOML):** Lists relative paths to all other important files created or referenced during the session, stored within the `artifacts/` subdirectory.
    *   **Log Entries (Markdown):** Timestamped entries detailing key events, user prompts, decisions made by `roo-commander`, delegations to Manager modes, and critical outcomes.
*   **Why it's important:** This is your go-to file for understanding the history and flow of a particular work session.

### 1.2. Session Artifacts (`artifacts/` directory)

*   **Location:** A subdirectory named `artifacts/` inside your session directory (e.g., `.roo/commander/sessions/SESSION-DataProductPoC_Alpha-20250715-103000/artifacts/`).
*   **Purpose:** This directory stores all supporting files, notes, research, and crucially, the **key deliverables** (design documents) produced during the session.
*   **Standard Subdirectories:** To keep things organized, the `artifacts/` directory contains a standard set of subfolders, each with a `README.md` explaining its purpose. Common ones you'll interact with include:
    *   **`design_outputs/`**: **This is where the primary deliverables from workflows like Data Product Design are stored.** For example, if you completed a Data Product PoC design, you'd find your `product_strategy.md`, `poc_ideation.md`, ..., `data_product_poc_plan.md` here, often within a further subfolder named after your project/PoC.
    *   `notes/`: General notes taken during the session.
    *   `learnings/`: Key insights or solutions discovered.
    *   `questions/`: Questions raised.
    *   `summaries/`: If session summaries are generated, they'll be here.
    *   And others like `research/`, `snippets/`, `blockers/`, etc.

## 2. MDTM Task Files (`.md`)

Markdown-Driven Task Management (MDTM) is how `roo-commander` delegates work to Manager modes, and how Managers delegate work to their Squad Members.

*   **Location:** `.roo/commander/tasks/`
*   **Organizational Subdirectories:** Within `tasks/`, files are often further organized into subdirectories, typically named after the Manager mode or the project/feature they relate to (e.g., `.roo/commander/tasks/manager-data-product/TASK-MDP-XYZ.md` or `.roo/commander/tasks/DATA_PRODUCT_PROJECT_X/data-product-strategist/TASK-DPSTRAT-ABC.md`). The exact path will be referenced in the `session_log.md` or a parent MDTM task.
*   **Naming:** Task files are named `TASK-[PREFIX]-[Timestamp].md` (e.g., `TASK-MDP-20250715-110000.md`).
*   **Purpose:** Each MDTM task file is a self-contained work order and progress tracker.
*   **Content:**
    *   **TOML Frontmatter:** Contains metadata like task `id`, `title`, `status` (To Do, In Progress, Done, etc.), `type`, `priority`, `assigned_to` (the mode doing the work), `coordinator` (the mode that delegated the work), `input_artifacts` (files needed to do the task), and `output_artifacts` (files produced by the task).
    *   **Markdown Body:** Includes a detailed `Description` of the task, `Acceptance Criteria`, a `Checklist / Sub-Tasks` for the assigned mode to follow and update, and a `Log Entries / Notes` section where the assigned mode records its detailed progress.
*   **Why it's important:**
    *   **For Users:** You can review MDTM task files to see the detailed instructions given to an AI mode, track its progress via the checklist and logs, and see what its specific deliverables (`output_artifacts`) were.
    *   **For AI Modes:** This is their primary instruction set for a piece of work.

## 3. Key Design Deliverables (Example: Data Product Design)

When you complete a workflow like the "Data Product Design PoC," the final outputs are a set of structured documents. These are typically stored within your active session's directory, under `artifacts/design_outputs/[YourProductName]/`.

These include:
*   `product_strategy.md`
*   `poc_ideation.md`
*   `user_persona_[name].md` (one or more)
*   `simulated_data_schema.md` (and any associated data file like a `.csv`)
*   `poc_interface_design.md`
*   **`data_product_poc_plan.md` (The final consolidated plan)**

The paths to these key deliverables will be listed in the `output_artifacts` field of the relevant MDTM tasks (primarily the main task assigned to `manager-data-product` and the sub-task for `data-product-poc-documenter`) and should also be referenced in the `related_artifacts` section of your `session_log.md`.

## 4. Locating Your Files

*   **Start with the Session:** Identify the session directory (`.roo/commander/sessions/SESSION-...`) relevant to the work you're interested in.
*   **Check the `session_log.md`:** This log will contain:
    *   The `id` of the top-level MDTM task assigned to a Manager (in `related_tasks`).
    *   Paths to important ad-hoc artifacts and often the final deliverables (in `related_artifacts`).
*   **Navigate to MDTM Tasks:** Using the Task ID from the session log, find the corresponding MDTM task file in `.roo/commander/tasks/`. This task file will detail the work done by a Manager.
*   **Trace Sub-Tasks:** A Manager's MDTM task will, in its checklist or logs, reference the MDTM sub-tasks it delegated to its Squad. You can then find those sub-task files.
*   **Find Deliverables:** The `output_artifacts` field in an MDTM task file (especially for Squad Members and the final Manager task) will give you the direct paths to the created design documents, which are typically stored within the session's `artifacts/design_outputs/` folder.

---

By understanding this structure, you can effectively navigate the outputs of Roo Commander V8, review the detailed work performed by the AI modes, and easily access all your project deliverables and contextual information.