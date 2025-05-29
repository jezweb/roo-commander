+++
# --- Basic Metadata ---
id = "STANDARD-MDTM-TASK-FILES-V2" # Updated version
title = "Standard: MDTM Task Files - Structure & Usage"
context_type = "standards_document"
scope = "Explains the standard structure, content, and lifecycle of Markdown-Driven Task Management (MDTM) task files used within Roo Commander."
target_audience = ["all"] # All modes and developers interacting with MDTM tasks
granularity = "standard_explanation"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "2.0" # Incremented due to refined conventions
tags = ["standards", "mdtm", "task-management", "workflow", "toml-md", "delegation"]
related_context = [
    ".roo/rules/02-mdtm-task-standard.md", # The formal workspace rule this explains
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md",
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md",
    ".roo/commander/docs/standards/01-naming-conventions.md",
    ".roo/commander/docs/standards/02-toml-md-document-format.md"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Annually"
+++

# Standard: MDTM Task Files - Structure & Usage

## 1. Introduction to MDTM Tasks

In Roo Commander, **MDTM (Markdown-Driven Task Management)** is the primary system for delegating work, tracking progress, and ensuring clarity in complex workflows. When `roo-commander` assigns a high-level goal to a "Manager" mode, or when a "Manager" mode assigns a specific piece of work to one of its "Squad Members," this is done using an MDTM task file.

These task files are structured documents using the TOML+Markdown format (see `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`). Understanding their structure is key to seeing how work is defined, executed, and tracked.

This guide explains the standard structure of an MDTM task file, based on:
*   The generic template: `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.md)`
*   The formal workspace rule: `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`

## 2. Anatomy of an MDTM Task File

An MDTM task file has two main parts:

1.  **TOML Frontmatter (Metadata):** Contains structured information about the task.
2.  **Markdown Body (Details & Progress):** Contains human-readable descriptions, acceptance criteria, a checklist of actions, and a log of activities.

### 2.1. Key TOML Frontmatter Fields Explained

The TOML section (between the `+++` delimiters at the top of the file) holds crucial metadata. All paths **MUST** be workspace-root-relative (starting with `.roo/`). All datetimes **MUST** be in ISO 8601 UTC format (`YYYY-MM-DDTHH:MM:SSZ`).

*   **`id` (String, Required):**
    *   A unique identifier for this specific task (e.g., `TASK-MDP-20250720T100000Z`). It **MUST** match the core part of the task's filename.
    *   *Convention:* `TASK-[TEAM_OR_MODE_PREFIX_CAPS]-[YYYYMMDD-HHMMSS].md` (Note: While filename uses HHMMSS, internal ID might use full ISO for more precision if needed, but consistency with filename core is key). For simplicity, we can aim for `YYYYMMDDHHMMSS` in the ID as well, matching the typical filename timestamp.
*   **`title` (String, Required):**
    *   A concise, human-readable title describing the task's main objective.
    *   *Example:* `"Orchestrate: Design Data Product PoC for Project Alpha"`
*   **`status` (String, Required):**
    *   The current state of the task. This is updated by the assigned mode as it works.
    *   **Standard Values:** `"🟡 To Do"`, `"🔵 In Progress"`, `"🟢 Done"`, `"🔴 Error"`, `"⚪ Blocked"`, `"🟣 Review"`.
*   **`type` (String, Required):**
    *   Categorizes the task.
    *   *Examples:* `"⚙️ Task"` (generic), `"🌟 Feature"`, `"🐞 BugFix"`, `"📖 Documentation"`, `"📊 DataProductDesignPhase"`.
*   **`priority` (String, Required):**
    *   Indicates the urgency.
    *   *Examples:* `"🚨 Critical"`, `"🟧 High"`, `"▶️ Medium"`, `"🔽 Low"`, `"🧊 Lowest"`.
*   **`created_date` (String, Required):**
    *   Timestamp (ISO 8601 UTC: `YYYY-MM-DDTHH:MM:SSZ`) of when the task was created.
*   **`updated_date` (String, Required):**
    *   Timestamp (ISO 8601 UTC: `YYYY-MM-DDTHH:MM:SSZ`) of the last significant update (especially status changes or log entries).
*   `due_date` (String, Optional):
    *   Target completion date (`YYYY-MM-DD`).
*   **`assigned_to` (String, Required):**
    *   The slug of the AI mode (e.g., `manager-data-product`, `data-product-strategist`) responsible for executing this task.
*   **`coordinator` (String, Required):**
    *   The slug of the AI mode (e.g., `roo-commander`) or the MDTM Task `id` of the parent task that delegated/created this task. This shows who is waiting for this task's completion.
*   `parent_task_id` (String, Optional):
    *   If this task is a sub-task of another MDTM task, this field contains the `id` of that parent task, creating a hierarchy.
*   `input_artifacts` (Array of Strings, Optional):
    *   A list of workspace-root-relative paths (e.g., starting with `.roo/`) to files that are necessary inputs for this task.
    *   *Example:* `[".roo/commander/sessions/SESSION-XYZ-20250720T090000Z/artifacts/design_outputs/product_strategy_v1.md"]`
*   `output_artifacts` (Array of Strings, Optional):
    *   A list of workspace-root-relative paths for the primary deliverables created or modified by this task. This is usually populated by the `assigned_to` mode upon completion.
    *   *Example:* `[".roo/commander/sessions/SESSION-XYZ-20250720T090000Z/artifacts/design_outputs/AlphaPoC/poc_ideation_v1.md"]`
*   `related_docs` (Array of Strings, Optional):
    *   Workspace-root-relative paths to other relevant documents, specifications, ADRs, etc., or fully qualified external URLs that provide context.
*   **`tags` (Array of Strings, Required):**
    *   Keywords for searching and filtering. **MUST** include `"mdtm"`. Other common tags include the `assigned_to` mode's slug, the domain, and phase.
    *   *Example:* `["mdtm", "data-product", "ideation-phase", "manager-data-product"]`
*   **`template_schema_doc` (String, Required):**
    *   Workspace-root-relative path to the schema documentation for this template.
    *   *Value:* `".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"`

### 2.2. Key Markdown Body Sections Explained

Following the TOML frontmatter, the Markdown body details the "what" and "how" of the task, and tracks its execution:

*   **`# Task: {{ title }}` (Main Heading):**
    *   Repeats the task title for human readability (placeholder `{{ title }}` is for template engine use; modes should insert actual title).

*   **`## 1. Description ✍️`**:
    *   **Goal:** A clear statement of what the task aims to achieve.
    *   **Context:** Background information explaining why the task is needed.
    *   **Scope:** Defines the boundaries of the task – what's included and what's not.

*   **`## 2. Acceptance Criteria ✅`**:
    *   A list of specific, measurable conditions that **MUST** be met for the task to be considered "🟢 Done". These are crucial for verifying completion.
    *   Usually formatted as a GFM checklist (e.g., `- [ ] Deliverable X is created and matches specification Y.`).

*   **`## 3. Checklist / Sub-Tasks 📝`**:
    *   This is the **action plan** for the `assigned_to` mode. It's a detailed, step-by-step list of actions the mode needs to perform.
    *   **Format:** Uses GFM checklists:
        *   `- [ ] Action item 1 for the AI mode.`
        *   `- [ ] Action item 2, possibly with sub-steps.`
    *   **Updates:** The assigned AI mode **MUST** update these checklist items as it completes them, changing `- [ ]` to `- [✅]`. This provides a real-time view of progress.

*   **`## 4. Log Entries / Notes 🪵`**:
    *   This section is an **append-only log** maintained by the `assigned_to` mode during task execution.
    *   The mode **MUST** record:
        *   When it starts the task.
        *   Confirmation of completing checklist items.
        *   Any significant observations or decisions made.
        *   Errors encountered and how they were handled (or if they are blocking).
        *   Paths to any temporary files created or tools used (using workspace-root-relative paths).
    *   Each entry **MUST** be timestamped (ISO 8601 UTC: `YYYY-MM-DDTHH:MM:SSZ`) and attributed to the mode.
    *   *Example:*
        ```
        *   `2025-07-20T10:05:00Z - data-product-strategist: Task ingested. Reviewing input artifacts.`
        *   `2025-07-20T10:15:00Z - data-product-strategist: Completed checklist item 1: Discussed initial PoC idea.`
        ```

## 3. How MDTM Tasks Drive the Workflow

1.  **Creation & Delegation:** A Coordinator/Manager mode creates an MDTM task file, populating the TOML and initial Markdown sections (Description, AC, Checklist). It then informs the `assigned_to` mode about this task file (providing the full `.roo/` anchored path).
2.  **Execution & Updates:** The `assigned_to` mode reads the task, executes the checklist, updates the checklist status, appends to its log, and updates its TOML `status`, `updated_date`, and `output_artifacts` within the task file.
3.  **Monitoring:** The Coordinator/Manager mode can read the MDTM task file at any time to see the latest status, checklist progress, and log entries.
4.  **Completion:** When the `assigned_to` mode finishes, it marks the task "🟢 Done" (or another final status) and reports back to its Coordinator, referencing its MDTM task `id`.

This system ensures that all work is clearly defined, progress is visible, and outcomes are documented in a standardized way. Understanding the structure of these MDTM task files is key to understanding how Roo Commander manages complex projects.