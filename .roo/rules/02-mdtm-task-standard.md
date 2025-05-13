+++
# --- Basic Metadata (Required for all Workspace Rules) ---
id = "WORKSPACE-RULE-MDTM-TASK-STANDARD-V1"
title = "Workspace Standard: MDTM Task Usage & Lifecycle"
context_type = "rules" # Fixed for rule documents
scope = "Workspace-wide standard for the creation, delegation, execution, and updating of Markdown-Driven Task Management (MDTM) files."
target_audience = ["all"] # Applies to all modes that create, delegate, or execute MDTM tasks
granularity = "standard" # This defines a standard practice
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder - To be filled with current date
version = "1.0" # Version of this rule document
tags = ["rules", "standard", "mdtm", "task-management", "delegation", "workflow", "toml-md"]
related_context = [
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md",
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md",
    ".roo/rules/01-standard-toml-md-format.md",
    ".roo/rules/03-session-management-standard.md" # Tasks are often related to sessions
]
template_schema_doc = ".roo/commander/templates/rules/template_00_workspace_rule.README.md"

# --- Rule Specific Fields (Optional) ---
enforcement_level = "critical"
rationale_summary = "Ensures consistent and effective use of MDTM for task delegation, tracking, and completion across all modes, forming the backbone of hierarchical work management."
# exceptions = ""
+++

# Workspace Standard: MDTM Task Usage & Lifecycle

## 1. Objective

To establish a consistent, workspace-wide standard for the creation, delegation, execution, and updating of Markdown-Driven Task Management (MDTM) files. This standard is crucial for ensuring clarity, traceability, and effective coordination of work between all AI modes, particularly within the "Orchestrator -> Manager -> Squad Member" delegation hierarchy.

## 2. Scope & Applicability

*   **Scope:** This rule governs all aspects of MDTM task file management, from initial creation and content requirements to in-progress updates and final reporting.
*   **Applies To:** All AI modes within the `.roo/commander/` ecosystem that either create MDTM tasks (e.g., `roo-commander`, `manager-data-product`) or are assigned MDTM tasks to execute (e.g., `manager-data-product`, `data-product-strategist`, and other squad members).

## 3. Rule Definition

### 3.1. Core MDTM Task File Standard

*   **Template Adherence:** All MDTM tasks **MUST** be created using the structure and schema defined in the generic task template:
    *   Template File: `template_00_mdtm_task_generic.md`
    *   Location: `.roo/commander/templates/tasks/template_00_mdtm_task_generic.md`
    *   Schema Documentation: `.roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md`
*   **Overall Format:** All MDTM task files **MUST** adhere to the TOML+Markdown format defined in `.roo/rules/01-standard-toml-md-format.md`.

### 3.2. Task Creation & Storage

*   **Responsibility:** MDTM tasks are created by modes delegating work (Coordinators or Managers).
*   **Naming Convention:** Task files **MUST** follow the naming convention: `TASK-[TEAM_PREFIX]-[YYYYMMDD-HHMMSS].md`.
    *   `[TEAM_PREFIX]`: A short, relevant prefix (e.g., `RC` for Roo Commander, `MDP` for Manager-Data-Product, `DPSTRAT` for data-product-strategist).
    *   `[YYYYMMDD-HHMMSS]`: Timestamp of creation.
*   **Storage Location:** MDTM task files **MUST** be stored in the central task directory: `.roo/commander/tasks/`.
    *   Organizational subdirectories within this path are permitted and encouraged (e.g., `.roo/commander/tasks/[PROJECT_OR_MANAGER_NAME]/[FEATURE_NAME]/`). The creating mode is responsible for determining and using a logical path.

### 3.3. Responsibilities of Delegating Mode (Task Creator)

1.  **Generate Unique ID & Path:** Determine a unique task `id` (matching the filename core) and the full file path.
2.  **Populate TOML Frontmatter:** Accurately fill all **required** fields as per `template_00_mdtm_task_generic.README.md`. Key fields include `id`, `title`, `status` (initially "🟡 To Do"), `type`, `priority`, `created_date`, `updated_date`, `assigned_to` (target mode slug), and `coordinator` (delegator's mode slug or its own MDTM Task ID). Populate optional fields like `parent_task_id`, `input_artifacts`, `related_docs`, and `tags` as comprehensively as possible.
3.  **Define Markdown Content:**
    *   **Description:** Clearly articulate the task's overall goal, context, and scope.
    *   **Acceptance Criteria:** Provide specific, measurable criteria for successful completion.
    *   **Checklist / Sub-Tasks:** Create a detailed, actionable checklist of steps for the `assigned_to` mode. This is the primary guide for the executing mode.
4.  **Save Task File:** Use appropriate file system tools to write the fully populated task file.
5.  **Log Task Creation (Session Context):** If operating within an active session (see `.roo/rules/03-session-management-standard.md`), the creation of this MDTM task (including its `id` and path) **MUST** be logged to the active `session_log.md`. The task `id` **MUST** also be added to the `related_tasks` array in the `session_log.md`'s TOML frontmatter.
6.  **Delegate Task:** Inform the `assigned_to` mode about the new task, providing the full path to the created MDTM task file in a `new_task` message.

### 3.4. Responsibilities of Assigned Mode (Task Executor)

1.  **Read Task File:** Upon receiving a delegation referencing an MDTM task file, the assigned mode **MUST** read the entire content of the specified file.
2.  **Understand Assignment:** Parse the TOML frontmatter and Markdown body to fully understand the `title`, `description`, `acceptance_criteria`, `input_artifacts`, and `checklist`.
3.  **Execute Checklist:** Methodically perform the work as outlined in the `Checklist / Sub-Tasks` section.
4.  **Update Task File Progress (MANDATORY & CONTINUOUS):**
    *   **Checklist Items:** As each checklist item is completed, update its status in the Markdown body (e.g., change `- [ ]` to `- [✅]`).
    *   **Log Entries:** Append detailed progress notes, observations, errors encountered, or significant actions taken to the `Log Entries / Notes 🪵` section within the Markdown body of *this task file*. Include timestamps for each entry.
    *   **TOML `status`:** Update the `status` field in the TOML frontmatter to reflect the current state (e.g., `"🔵 In Progress"` when starting, `"🟢 Done"` on completion, `"🔴 Error"`, `"⚪ Blocked"`).
    *   **TOML `updated_date`:** Update the `updated_date` field in the TOML frontmatter whenever a significant change (especially status or log entry) is made.
    *   **TOML `output_artifacts`:** If the task produces specific deliverable files (e.g., a design document), add their workspace-relative paths to the `output_artifacts` array in the TOML frontmatter.
    *   **File Modification:** Use appropriate file system tools to save these updates back to the MDTM task file. Precise modifications are preferred.
5.  **Log to Session (Key Milestones - Optional but Recommended):** While the MDTM task file is the primary record of detailed progress, the assigned mode **MAY** provide brief status updates on key milestones or final completion to the main `session_log.md` if an active `RooComSessionID` was part of its delegation context. This is typically done via its coordinator.
6.  **Report Completion/Status to Coordinator:** Upon full completion of all checklist items and meeting acceptance criteria, or if definitively blocked or an unrecoverable error occurs, the assigned mode **MUST** report the outcome (referencing its MDTM task `id` and final `status`) back to the `coordinator` mode specified in the task's TOML.

### 3.5. Task Lifecycle & Statuses

*   The standard task statuses are: `"🟡 To Do"`, `"🔵 In Progress"`, `"🟣 Review"` (optional), `"🟢 Done"`, `"🔴 Error"`, `"⚪ Blocked"`. Modes **MUST** use these standard values.

## 4. Rationale

*   **Standardization & Clarity:** Ensures all modes create, interpret, and update tasks consistently.
*   **Traceability & Auditability:** Provides a clear, persistent record of all delegated work, progress, and outcomes.
*   **Hierarchical Management:** Supports the "Orchestrator -> Manager -> Squad Member" delegation model by allowing tasks to have parent tasks and clear lines of coordination.
*   **Effective Coordination:** Facilitates progress monitoring and handoffs between modes.
*   **Tooling Compatibility:** A standard format is essential for current and future tooling that interacts with MDTM tasks (e.g., MDTM CLI/MCP).

**Adherence to this MDTM Task Standard is critical for the structured, traceable, and efficient operation of all workflows within the Roo Commander V8 ecosystem.**