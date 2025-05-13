# Documentation: Template `template_00_mdtm_task_generic.md`

## 1. Purpose

This template defines the **standard structure for all Markdown-Driven Task Management (MDTM) files** within the workspace. It is designed to be generic enough to cover various task types (features, bugs, chores, design phases, etc.) while ensuring essential metadata and content sections are present for effective tracking, delegation, and execution.

This template is used by coordinator modes (like `roo-commander` or `manager-data-product`) to create tasks for specialist modes. Specialist modes, in turn, read these task files to understand their assignments and update them to reflect their progress.

## 2. Usage

1.  **Instantiation:** When a new MDTM task needs to be created:
    *   A coordinator mode (e.g., `roo-commander`, `manager-data-product`) will programmatically copy or use this template's structure.
    *   The task file should be saved in the `.roo/commander/tasks/` directory, potentially within subdirectories organized by project, feature, or assignee (e.g., `.roo/commander/tasks/PROJECT_ALPHA/FEATURE_LOGIN/TASK-REACT-XYZ.md`).
2.  **File Naming Convention:** `TASK-[TEAM_PREFIX]-[YYYYMMDD-HHMMSS].md`
    *   `TASK-`: Standard prefix.
    *   `[TEAM_PREFIX]`: A short prefix indicating the primary assigned team/mode or project area (e.g., `MDP` for manager-data-product, `DPSTRAT` for dp-strategist, `WEBAPP` for a web app project).
    *   `[YYYYMMDD-HHMMSS]`: Timestamp of creation for uniqueness.
    *   Example: `TASK-DPSTRAT-20250701-100500.md`
3.  **Populate TOML:** Fill in all required TOML frontmatter fields and any relevant optional fields.
4.  **Populate Markdown:** Detail the task in the Markdown body, especially the Description, Acceptance Criteria, and a clear Checklist.

## 3. TOML Frontmatter Schema

The following fields are defined within the `+++` delimiters:

*   `id` (String, Required):
    *   Unique identifier for the task. **MUST** match the core part of the filename (e.g., `TASK-TEAM_PREFIX-YYYYMMDD-HHMMSS`).
*   `title` (String, Required):
    *   A concise, human-readable title for the task.
*   `status` (String, Required):
    *   The current lifecycle status of the task.
    *   **Standard Values:** `"🟡 To Do"`, `"🔵 In Progress"`, `"🟢 Done"`, `"🔴 Error"`, `"⚪ Blocked"`, `"🟣 Review"`.
*   `type` (String, Required):
    *   The category or nature of the task. While the default is `"⚙️ Task"`, it should be overridden with more specific types where applicable.
    *   **Recommended Values:** `"🌟 Feature"`, `"🐞 BugFix"`, `"📖 Documentation"`, `"🧹 Chore"`, `"📊 DataProductDesignPhase"`, `"🧪 Test"`, `"⚙️ Task"` (general).
*   `priority` (String, Required):
    *   The urgency or importance of the task.
    *   **Standard Values:** `"🚨 Critical"`, `"🟧 High"`, `"▶️ Medium"`, `"🔽 Low"`, `"🧊 Lowest"`.
*   `created_date` (String, Required):
    *   Timestamp of when the task was created, in ISO 8601 format (e.g., `"2025-07-01T10:00:00Z"`).
*   `updated_date` (String, Required):
    *   Timestamp of when the task was last significantly updated (especially status changes), in ISO 8601 format.
*   `due_date` (String, Optional):
    *   Target completion date in `YYYY-MM-DD` format.
*   `assigned_to` (String, Required):
    *   The slug of the AI mode or the name/role of the human responsible for executing this task.
    *   Example: `"dp-strategist"`, `"manager-data-product"`.
*   `coordinator` (String, Required):
    *   The slug of the AI mode (e.g., `"roo-commander"`, `"manager-data-product"`) or the MDTM Task ID of the parent task that delegated/created this task. This establishes the reporting line.
*   `parent_task_id` (String, Optional):
    *   If this task is a sub-task of another MDTM task, this field should contain the `id` of the parent task.
*   `input_artifacts` (Array of Strings, Optional):
    *   A list of file paths (relative to workspace root or a well-known session artifacts root) that are inputs or prerequisites for this task.
    *   Example: `[".roo/commander/sessions/SESSION_XYZ/artifacts/design_outputs/product_strategy_v1.md"]`
*   `output_artifacts` (Array of Strings, Optional):
    *   A list of file paths (relative to workspace root or session artifacts root) for the primary deliverables or outputs created/modified by this task. This field is typically updated by the `assigned_to` mode upon completion.
*   `related_docs` (Array of Strings, Optional):
    *   Links to other relevant documents, specifications, ADRs, external URLs, etc., that provide context for the task.
*   `tags` (Array of Strings, Required):
    *   Keywords for searching, filtering, and categorization. **MUST** include `"mdtm"`. Add other relevant tags.
    *   Example: `["mdtm", "data-product", "strategy-phase", "user-research"]`
*   `template_schema_doc` (String, Required):
    *   Path to this schema documentation file.
    *   Value: `".roo/commander/templates/template_00_mdtm_task_generic.README.md"`

### AI Interaction Hints (Optional)

*   `context_type` (String, Optional): Typically `"task_definition"`.
*   `target_audience` (Array of Strings, Optional): Usually the mode specified in `assigned_to`.
*   `granularity` (String, Optional): Typically `"detailed_task"`.

## 4. Markdown Body Structure

The Markdown body provides the human-readable details and action items for the task:

*   `# Task: {{ title }}`: Main title, dynamically uses `title` from TOML if templating is available, otherwise manually sync.
*   `## 1. Description ✍️`:
    *   **Goal:** The primary objective of the task.
    *   **Context:** Background information.
    *   **Scope:** What's included/excluded.
*   `## 2. Acceptance Criteria ✅`:
    *   Specific, measurable conditions for task completion.
*   `## 3. Checklist / Sub-Tasks 📝`:
    *   A detailed, step-by-step list of actions for the `assigned_to` mode.
    *   The assigned mode **MUST** update checklist items (e.g., from `- [ ]` to `- [✅]`) as it makes progress.
    *   This section is critical for tracking the execution flow.
*   `## 4. Log Entries / Notes 🪵`:
    *   The `assigned_to` mode **MUST** append its progress updates, observations, errors, and significant actions here. Timestamps are highly recommended for each entry. This provides a detailed audit trail within the task file itself, complementing the higher-level session log if applicable.

## 5. Workflow Integration

*   **Creation:** Coordinator modes create these task files.
*   **Delegation:** The coordinator uses a `new_task` tool call, pointing the `assigned_to` mode to this task file path.
*   **Execution:** The `assigned_to` mode reads the task file, executes the checklist, updates the checklist and log entries within the file, and modifies the TOML `status` and `output_artifacts` fields.
*   **Completion:** The `assigned_to` mode reports completion back to its `coordinator` (often via `attempt_completion`), referencing this task ID.

This standard task template is fundamental to the MDTM system and ensures clarity and consistency in task management across the Roo Commander ecosystem.