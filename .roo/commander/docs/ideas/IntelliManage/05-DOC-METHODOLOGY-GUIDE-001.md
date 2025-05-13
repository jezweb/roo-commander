# --- Basic Metadata ---
id = "DOC-METHODOLOGY-GUIDE-001"
title = "IntelliManage: Methodology Implementation Guide"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "project_managers", "architects", "contributors", "ai_modes"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = "BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/templates/documentation/09_documentation.README.md" # Assuming this is the schema doc template
tags = ["intellimanage", "architecture", "specification", "methodology", "scrum", "kanban", "agile", "workflow"]
related_docs = ["DOC-ARCH-001", "DOC-FS-SPEC-001", "DOC-SCHEMA-001", "DOC-FUNC-SPEC-001"] # Link to Arch, FS, Schema, CRUD docs
+++

# IntelliManage: Methodology Implementation Guide

## 1. Introduction / Overview 🎯

This document details how the IntelliManage framework supports various project management methodologies (Scrum, Kanban, Custom) on a **per-project basis**. It explains how the chosen methodology, configured within each project's `project_config.toml` file, influences the behavior of the Core Logic Engine, the interpretation of artifact metadata (especially the `status` field), and the types of assistance provided by the integrated AI Engine.

IntelliManage leverages its core functionalities (hierarchical artifacts, TOML+MD format, CRUD operations, linking - specified in `DOC-FUNC-SPEC-001`) and adapts them to fit the selected workflow, providing both structure and flexibility.

## 2. Core Configuration: `project_config.toml` ⚙️

The primary control for methodology implementation resides in the `project_config.toml` file located within each project's directory (e.g., `.roo/commander/projects/[project_slug]/project_config.toml`).

The key field is:

*   **`methodology` (String, Required):** Specifies the methodology to be used for this project.
    *   **Allowed Values:** `"Scrum"`, `"Kanban"`, `"Custom"`, `"None"` (case-sensitive).
    *   **Default:** If omitted, the system may fall back to a workspace default defined in `.roo/commander/projects/projects_config.toml` or default to `"None"`.

Other fields within `project_config.toml` are used to configure specifics for the chosen methodology (see relevant sections below).

## 3. Scrum Implementation 🔄

When `methodology = "Scrum"` is set in `project_config.toml`:

*   **Core Concepts:** Sprints (time-boxed iterations), Product Backlog (Epics, Features, Stories), Sprint Backlog (selected Stories/Tasks for a sprint), Roles (Product Owner, Scrum Master, Dev Team - conceptual mapping), Ceremonies (Planning, Daily Standup, Review, Retrospective - *external* to IntelliManage, but the system supports the artifacts).
*   **IntelliManage Mapping:**
    *   **Sprints:**
        *   Defined within `project_config.toml` under a `[sprints]` table (see Schema `DOC-SCHEMA-001`). Each sprint has an ID, start/end dates, and optionally a goal.
            ```toml
            # Example in project_config.toml
            methodology = "Scrum"
            [sprints]
              [sprints.sprint_1]
                start_date = "2025-05-01"
                end_date = "2025-05-14"
                goal = "Complete user profile MVP"
              [sprints.sprint_2]
                # ...
            ```
        *   Tasks/Stories/Bugs are assigned to a sprint via the optional `sprint_id` field in their TOML frontmatter.
    *   **Product Backlog:** Consists of all Initiatives, Epics, Features, and unassigned Stories/Tasks/Bugs (typically with `status = "⚪️ Backlog"`). Prioritization can be managed via the `priority` field.
    *   **Sprint Backlog:** Consists of Stories/Tasks/Bugs assigned to the current `sprint_id` and typically having `status = "🟡 To Do"`.
    *   **Workflow Statuses:** Uses the standard status values (`"⚪️ Backlog"`, `"🟡 To Do"`, `"🔵 In Progress"`, `"🟣 Review"`, `"🟢 Done"`). Status transitions are validated by the Core Logic Engine (e.g., cannot go directly from Backlog to Done).
*   **AI Assistance (Scrum):**
    *   **Estimation:** Can assist in estimating story points (requires adding an `effort_points` field to the Task/Story schema) based on historical data or complexity analysis.
    *   **Sprint Planning:** Suggest tasks/stories for the next sprint based on priority, estimates, and team velocity (requires tracking completed points).
    *   **Tracking:** Generate Sprint Burndown charts (visualizing remaining work vs. time). Calculate sprint velocity.
    *   **Reporting:** Generate sprint summaries (completed items, remaining items, potential spillover).
    *   **Linking:** Automatically link Stories/Tasks back to their parent Features/Epics.

## 4. Kanban Implementation 📊

When `methodology = "Kanban"` is set in `project_config.toml`:

*   **Core Concepts:** Visualize Workflow, Limit Work In Progress (WIP), Manage Flow, Make Policies Explicit, Continuous Improvement.
*   **IntelliManage Mapping:**
    *   **Workflow Visualization:** The primary focus. The flow is represented by the sequence of `status` values assigned to Tasks/Stories/Bugs. Standard statuses (`"⚪️ Backlog"`, `"🟡 To Do"`, `"🔵 In Progress"`, `"🟣 Review"`, `"🟢 Done"`) can be used, or custom states defined in `project_config.toml`.
        ```toml
        # Example in project_config.toml
        methodology = "Kanban"
        # Optional: Override standard statuses if needed
        # custom_statuses = ["Backlog", "Ready", "Dev", "Test", "Deploy", "Done"]
        # Optional: Define WIP Limits per status
        [wip_limits]
          "🔵 In Progress" = 5
          "🟣 Review" = 3
        ```
    *   **WIP Limits:** Defined optionally in `project_config.toml` per status column. The Core Logic Engine or AI Engine can *monitor* the number of items in each status and *warn* the user or prevent status changes if WIP limits are exceeded. Direct enforcement is difficult in a purely file-based system.
    *   **Flow Management:** Focus is on moving items smoothly through statuses. Cycle Time and Lead Time metrics can be calculated if status change timestamps are logged (consider adding `status_change_log = [{ status = "...", timestamp = "..." }, ...]` to artifact TOML).
    *   **Policies:** Explicit policies (e.g., Definition of Done for a status) can be documented in project READMEs or specific `.roo/commander/projects/[project_slug]/docs/` files.
*   **AI Assistance (Kanban):**
    *   **Board Visualization:** Generate textual or graphical representations of the Kanban board based on artifact statuses.
    *   **Flow Metrics:** Calculate Cycle Time and Lead Time (requires timestamped status changes).
    *   **Bottleneck Identification:** Highlight items that have been in a specific state for an unusually long time compared to the average.
    *   **Cumulative Flow Diagram (CFD):** Generate CFDs to visualize work distribution across statuses over time.
    *   **WIP Limit Monitoring:** Alert users when WIP limits (defined in config) are exceeded.

## 5. Custom Methodology Implementation ⚙️

When `methodology = "Custom"` is set in `project_config.toml`:

*   **Core Concepts:** The user defines their specific workflow stages and potentially transition rules.
*   **IntelliManage Mapping:**
    *   **Custom Statuses:** The user **MUST** define the allowed workflow states in `project_config.toml`:
        ```toml
        # Example in project_config.toml
        methodology = "Custom"
        custom_statuses = ["⚪️ Idea", "⚫️ Refinement", "🟡 Ready for Dev", "🔵 Development", "🟣 Code Review", "🧪 QA Testing", "🟢 Merged", "🧊 Archived"]
        # Optional: Define allowed transitions (more complex)
        # [custom_transitions]
        #   "⚪️ Idea" = ["⚫️ Refinement"]
        #   "⚫️ Refinement" = ["🟡 Ready for Dev", "🧊 Archived"]
        #   # ... etc. If omitted, any transition is allowed.
        ```
    *   **Workflow Validation:** The Core Logic Engine validates status changes against the `custom_statuses` list. If `custom_transitions` are defined, it enforces those rules.
*   **AI Assistance (Custom):**
    *   **Learning:** The AI Engine learns the custom statuses and transitions.
    *   **Visualization:** Can generate visualizations (boards, flow diagrams) based on the custom states.
    *   **Reporting:** Can report on items within each custom status.
    *   **Guidance:** May have limited ability to provide methodology-specific guidance compared to standard Scrum/Kanban unless the custom process is well-documented for the AI.

## 6. "None" Methodology Implementation 🚫

When `methodology = "None"` is set or defaulted:

*   **Core Concepts:** Basic task tracking without enforcing specific Agile processes.
*   **IntelliManage Mapping:**
    *   Uses the core artifact hierarchy (Initiative, Epic, Feature, Task/Bug).
    *   Uses a minimal set of statuses (e.g., `"🟡 To Do"`, `"🔵 In Progress"`, `"🟢 Done"`).
    *   No specific workflow validation beyond basic CRUD operations.
*   **AI Assistance (None):**
    *   Basic artifact creation, linking, listing, and status updates.
    *   General reporting based on artifact metadata (e.g., list all open bugs).
    *   Limited process-specific guidance or metrics.

## 7. AI Interaction Across Methodologies 🤖

Regardless of the chosen methodology, the AI Engine consistently provides:

*   **Artifact Creation Assistance:** Generating draft Initiatives, Epics, Features, Tasks from user prompts.
*   **Automated Linking:** Suggesting and creating hierarchical links (`parent_id`, `epic_id`, `feature_id`).
*   **Contextual Information Retrieval:** Answering questions about specific artifacts or project status by reading the File System Store.
*   **Status Update Inference:** Suggesting status updates based on Git/GitHub activity or chat context (requires user confirmation).

The AI *adapts* its more advanced assistance based on the `methodology` setting: offering sprint-related help in Scrum, flow-based metrics in Kanban, and adapting reporting to Custom states.

## 8. Conclusion ✅

IntelliManage achieves flexibility by allowing methodology selection on a per-project basis via the `project_config.toml` file. The Core Logic Engine adapts its validation and processing based on this setting, while the AI Engine tailors its assistance and reporting capabilities to align with Scrum, Kanban, or user-defined Custom workflows. This approach provides teams with the structure they need while accommodating diverse development practices within a single, integrated framework.