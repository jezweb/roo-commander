+++
# --- Metadata ---
id = "PLAN-PROJECT-STRUCTURE-PHASE2-V1"
title = "Project Structure Plan: Phase 2 - Planning & Decomposition Workflow"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "phase2", "workflow", "planning", "decomposition", "epic", "feature", "task"]
related_docs = [
    ".ruru/planning/project-structure/00-epic-feature-task-plan.md",
    ".ruru/planning/project-structure/01-define-artifacts-formats.md",
    ".ruru/modes/manager-product/manager-product.mode.md",
    ".ruru/modes/manager-project/manager-project.mode.md",
    ".ruru/modes/core-architect/core-architect.mode.md"
    # Add relevant Lead mode KBs if they participate
]
objective = "Define the process for creating Epics, Features, and Tasks, including user interaction and mode responsibilities."
scope = "Describes the flow from high-level goal to actionable tasks."
# --- Plan Specific Fields ---
epic_template = ".ruru/templates/toml-md/20_epic.md"
feature_template = ".ruru/templates/toml-md/21_feature.md"
task_creation_rule = ".roo/rules/04-mdtm-workflow-initiation.md"
+++

# Project Structure Plan: Phase 2 - Planning & Decomposition Workflow

**Objective:** Detail the standard process for defining project work using the Epic -> Feature -> Task hierarchy.

**Workflow:**

1.  **Define Epic (User Interaction with Coordinator/Product Manager):**
    *   **Trigger:** User requests planning for a large initiative or selects "Plan/Design" initial option.
    *   **Mode Responsible:** `roo-commander` initially, potentially delegating to `manager-product`.
    *   **Procedure:**
        *   Prompt user for high-level objective, scope, and business value.
        *   Generate Epic ID (`EPIC-[ID]`).
        *   Use template `[epic_template]`.
        *   Use `write_to_file` to create the initial `EPIC-[ID]-....md` file in `.ruru/epics/` with gathered details (Status: "Draft").
        *   Refine Epic details iteratively with user input or via `manager-product` / `core-architect`. Update status to "Planned" when ready.
        *   Update the Epic file with `apply_diff` or `search_and_replace`.

2.  **Decompose Epic into Features (Coordinator/Product Manager/Architect Interaction):**
    *   **Trigger:** An Epic is in "Planned" or "In Progress" status. User requests feature breakdown, or planner mode identifies need.
    *   **Mode Responsible:** `manager-product`, `core-architect`, or `roo-commander` coordinating with user/leads.
    *   **Procedure:**
        *   Identify distinct, deliverable features within the Epic's scope.
        *   For each Feature:
            *   Generate Feature ID (`FEAT-[ID]`).
            *   Prompt user/planner for Feature title, description, acceptance criteria.
            *   Use template `[feature_template]`.
            *   Use `write_to_file` to create `FEAT-[ID]-....md` in `.ruru/features/`. Include `epic_id`, initial Status: "Draft".
            *   Refine Feature details. Update status to "Ready for Dev" when defined.
            *   Update the parent Epic file (`related_features` list) using `apply_diff`.
            *   Update the Feature file using `apply_diff`.

3.  **Decompose Feature into Tasks (Coordinator/Project Manager/Lead Interaction):**
    *   **Trigger:** A Feature is in "Ready for Dev" status. User or Lead requests task breakdown.
    *   **Mode Responsible:** `manager-project`, relevant Leads (e.g., `lead-frontend`), or `roo-commander` coordinating.
    *   **Procedure:**
        *   Identify the specific technical tasks needed to implement the Feature.
        *   For each Task:
            *   **Follow the MDTM Task Creation Workflow (Rule `04-mdtm-workflow-initiation.md`):**
                *   Select appropriate Specialist mode (`assigned_to`).
                *   Select appropriate Task template (e.g., `01_mdtm_feature.md`).
                *   Generate Task ID (`TASK-[MODE]-...`).
                *   Determine Task file path in `.ruru/tasks/`.
                *   **Crucially, add `feature_id: "FEAT-[ID]"` and optionally `epic_id: "EPIC-[ID]"` to the TOML metadata block.**
                *   Fill in Description, Acceptance Criteria (derived from Feature), Checklist items.
                *   Use `write_to_file` to create the Task file.
                *   Log creation.
                *   Delegate via `new_task` referencing the Task file path.
            *   Update the parent Feature file (`related_tasks` list) using `apply_diff`.

**Mode Responsibilities (Initial Suggestions):**

*   **`manager-product`:** Owns Epic definition and decomposition into Features.
*   **`core-architect`:** Provides technical input during Epic/Feature definition.
*   **`manager-project` / Leads:** Own Feature decomposition into Tasks and oversee Task execution via MDTM.
*   **`roo-commander`:** Orchestrates the overall flow, handles initial user requests, delegates to managers/leads.
*   **Specialist Modes:** Execute Tasks as per MDTM.

**User Interaction:** User input is vital for defining Epics and Features, and potentially for prioritizing or clarifying tasks. Use `ask_followup_question` throughout the decomposition process.