+++
# --- Basic Metadata ---
id = "ARCHITECTURE-MDTM-INTEGRATION-V2" # Updated version
title = "Architecture: MDTM Integration - Delegation & Tracking Backbone"
context_type = "architectural_document"
scope = "Explains the role and integration of Markdown-Driven Task Management (MDTM) as the backbone for delegation, execution, and tracking of work across all levels of the Roo Commander system."
target_audience = ["developers", "system_architects"]
granularity = "detailed_system_component_description"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "2.0" # Incremented due to significant revisions
tags = ["architecture", "mdtm", "task-management", "delegation", "workflow", "toml-md", "traceability"]
related_context = [
    ".roo/commander/docs/architecture/README.md", # Parent index
    ".roo/commander/docs/standards/03-mdtm-task-files.md", # Detailed standard for MDTM files
    ".roo/rules/02-mdtm-task-standard.md", # Formal rule for MDTM usage
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md", # The base template
    ".roo/commander/docs/architecture/01_orchestrator_role.md",
    ".roo/commander/docs/architecture/02_manager_modes.md",
    ".roo/commander/docs/architecture/03_squad_modes.md"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Semi-Annually"
+++

# Architecture: MDTM Integration - Delegation & Tracking Backbone

## 1. Introduction: The Role of MDTM

Markdown-Driven Task Management (MDTM) is a fundamental architectural component in Roo Commander. It provides a standardized, file-based system for defining, delegating, executing, and tracking units of work across all levels of the system's hierarchy: from the top-level Orchestrator (`👑 Roo Commander` (`roo-commander`)) to Manager modes, and from Manager modes to their specialist Squad Members.

Every significant piece of actionable work that is delegated from one mode to another is encapsulated within an MDTM task file. These files serve as both the "work order" and the "progress report" for delegated activities. All paths referenced herein **MUST** be workspace-root-relative (starting with `.roo/`).

## 2. Core Principles of MDTM Integration

*   **Standardization:** All MDTM tasks adhere to a common structure and metadata schema, defined by the generic task template (`[.roo/commander/templates/tasks/template_00_mdtm_task_generic.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.md)`) and the workspace rule (`[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`). They use the TOML+Markdown format (`[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`).
*   **Hierarchy:** MDTM tasks support a parent-child relationship (`parent_task_id` field), enabling the creation of clear work breakdown structures. For example, a high-level task assigned to a Manager can be broken down into multiple sub-tasks assigned to its Squad Members.
*   **Traceability:** Each task has a unique `id` (e.g., `TASK-PREFIX-YYYYMMDDTHHMMSSZ`) and its own file, containing a log of activities, status updates, and links to input/output artifacts. This provides a comprehensive audit trail.
*   **Asynchronous Work & Statefulness:** Because tasks are file-based, work can be paused and resumed. A mode can pick up an MDTM task, review its current state (checklist, logs), and continue from where it left off.
*   **Clear Contracts:** An MDTM task file acts as a clear contract between the delegating (`coordinator`) mode and the assigned (`assigned_to`) mode, defining the objective, inputs, expected outputs, and acceptance criteria.

## 3. MDTM in the Orchestration Hierarchy

MDTM is utilized at each level of delegation:

### 3.1. Orchestrator (`👑 Roo Commander`) to Manager Mode Delegation

1.  **Trigger:** The user expresses a high-level goal that maps to a workflow managed by a specific Manager mode (e.g., "Design a Data Product PoC" -> `manager-data-product`).
2.  **Task Creation by Orchestrator:**
    *   `👑 Roo Commander` creates a **top-level MDTM task** using `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.md)`.
    *   **`title`**: Describes the overall user objective (e.g., "Orchestrate: Design Data Product PoC for Project Alpha - Session: `SESSION-XYZ-YYYYMMDDTHHMMSSZ`").
    *   **`assigned_to`**: The slug of the target Manager mode (e.g., `manager-data-product`).
    *   **`coordinator`**: `"roo-commander"`.
    *   **`input_artifacts`**: May include a link to the active `session_log.md` (e.g., `[.roo/commander/sessions/SESSION-XYZ-YYYYMMDDTHHMMSSZ/session_log.md]`) or other initial context.
    *   **`description` / `acceptance_criteria`**: Define the high-level success conditions for the *entire workflow* managed by the Manager.
    *   The task file is saved (e.g., in `[.roo/commander/tasks/[MANAGER_SLUG]/TASK-[PREFIX]-[Timestamp].md]`).
3.  **Delegation:** `👑 Roo Commander` informs the Manager mode about this new MDTM task file via a `new_task` tool call.
4.  **Tracking:** `👑 Roo Commander` monitors the `status` of this top-level MDTM task. The `session_log.md` also links to this task `id` in its `related_tasks` field.

### 3.2. Manager Mode to Squad Member Delegation

1.  **Trigger:** The Manager mode, processing its own primary MDTM task, determines that a specific phase of its workflow needs to be executed by a Squad Member. This is guided by its KB procedure (e.g., `[.roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md]`).
2.  **Sub-Task Creation by Manager:**
    *   The Manager mode creates one or more **MDTM sub-tasks** for its Squad Members, again using `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.md)`.
    *   **`title`**: Describes the specific goal for the Squad Member (e.g., "Define Product Strategy for Project Alpha PoC").
    *   **`assigned_to`**: The slug of the target Squad Member mode (e.g., `data-product-strategist`).
    *   **`coordinator`**: The Manager mode's slug (e.g., `manager-data-product`).
    *   **`parent_task_id`**: The Manager mode's *own primary MDTM Task `id`*. This explicitly defines the hierarchy.
    *   **`input_artifacts`**: Workspace-root-relative paths to necessary inputs (e.g., for `data-product-ideator`, this would include the path to the `product_strategy.md` created by `data-product-strategist`).
    *   **`output_artifacts` (target definition):** Specifies the expected deliverable and its target workspace-root-relative path (e.g., "Path to the created `product_strategy.md` at `[.roo/commander/sessions/[SESSION_ID]/artifacts/design_outputs/[ProjectName]/product_strategy_v1.md]`).
    *   **`description` / `acceptance_criteria` / `checklist`**: Provides detailed instructions for the Squad Member.
    *   Sub-task files are saved (e.g., in `[.roo/commander/tasks/[MANAGER_SLUG]/[SQUAD_MEMBER_SLUG_OR_PHASE]/TASK-[PREFIX]-[Timestamp].md]`).
3.  **Delegation:** The Manager informs the Squad Member about its new MDTM sub-task via a `new_task` tool call.
4.  **Tracking by Manager:** The Manager monitors the `status` of all sub-tasks it has delegated. It updates its *own* primary MDTM task's checklist and log entries as its squad completes their work.

### 3.3. Squad Member Task Execution

1.  **Task Ingestion:** The Squad Member reads its assigned MDTM task file.
2.  **Execution & Artifact Production:** It performs its specialized function as per the checklist and produces its primary output artifact (e.g., `data-product-strategist` creates `product_strategy.md` at the specified path).
3.  **MDTM Task Update (Self-Update):** The Squad Member **MUST** update its *own* MDTM task file:
    *   Marks checklist items as complete.
    *   Adds detailed logs (with ISO 8601 UTC timestamps) to the `Log Entries / Notes 🪵` section.
    *   Updates its `status` to `"🟢 Done"` (or other appropriate status like `"🔴 Error"`).
    *   Updates `updated_date`.
    *   Adds the workspace-root-relative path(s) to its created `output_artifacts` in the TOML frontmatter.
4.  **Reporting:** Reports completion (by updating its MDTM task status) back to its Manager. The Manager monitors this.

## 4. Benefits of MDTM Integration

*   **Structured Delegation:** Provides a formal, consistent way to assign work.
*   **Clear Accountability:** Each task has a clear `assigned_to` and `coordinator`.
*   **Progress Tracking:** Status fields and checklists allow for monitoring at both macro (Manager task) and micro (Squad sub-task) levels.
*   **Contextual Handoffs:** `input_artifacts` and `output_artifacts` (using standardized `.roo/` anchored paths) ensure that necessary information flows correctly between sequential tasks and modes.
*   **Decentralized Detail, Centralized Overview:** Squad members manage the details of their own tasks. Managers get an overview of their squad's progress. `👑 Roo Commander` gets an overview of the Manager's progress.
*   **Foundation for Tooling:** The standardized TOML+Markdown format of task files enables the development of external tools for viewing, managing, and potentially automating aspects of task management.

## 5. Relationship with Session Logs

*   **Session Logs (`session_log.md`):** Capture the overarching narrative of a user's interaction with `👑 Roo Commander`, including when top-level MDTM tasks are created for Managers and when key final artifacts are produced. Located in `[.roo/commander/sessions/[SESSION_ID]/session_log.md](.roo/commander/sessions/[SESSION_ID]/session_log.md)`.
*   **MDTM Task Files:** Contain the detailed, operational log of a specific unit of work. The `Log Entries / Notes 🪵` section within an MDTM task is specific to that task's execution.

They are complementary: the session log provides the "story of the session," while MDTM tasks provide the "story of the work."

By deeply integrating MDTM at all levels, Roo Commander establishes a robust and transparent system for managing complex, AI-driven workflows.