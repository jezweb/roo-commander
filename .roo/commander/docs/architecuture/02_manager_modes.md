+++
# --- Basic Metadata ---
id = "ARCHITECTURE-MANAGER-MODES-V2" # Updated version
title = "Architecture: Manager Modes - Domain-Specific Orchestrators"
context_type = "architectural_document"
scope = "Details the role, responsibilities, core capabilities, and operational workflow of Manager modes within the Roo Commander system, using `manager-data-product` as a primary example."
target_audience = ["developers", "system_architects"]
granularity = "detailed_component_description"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "2.0" # Incremented due to significant revisions
tags = ["architecture", "manager-modes", "orchestration", "squad-management", "delegation", "mdtm", "domain-specific"]
related_context = [
    ".roo/commander/docs/architecture/README.md", # Parent index
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md", # Example manager
    ".roo/rules-manager-data-product/00-manager-product-data-core-principles.md", # Example manager core rule
    ".roo/rules-manager-data-product/01-manager-data-product-squad-orchestration.md", # Example manager orchestration rule
    ".roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md", # Example manager KB procedure
    ".roo/commander/docs/architecture/01_orchestrator_role.md",
    ".roo/commander/docs/architecture/03_squad_modes.md",
    ".roo/commander/docs/standards/03-mdtm-task-files.md"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Semi-Annually"
+++

# Architecture: Manager Modes - Domain-Specific Orchestrators

## 1. Introduction to Manager Modes

In the Roo Commander hierarchical architecture, **Manager modes** (classification: `manager`) serve as the critical middle layer of orchestration. They are specialized AI agents responsible for overseeing and executing complex, domain-specific workflows. Each Manager mode is an expert in a particular area (e.g., data product design, web application development, cloud infrastructure deployment).

They receive high-level objectives (as a top-level MDTM task) from the primary Orchestrator (`👑 Roo Commander` (`roo-commander`)) and translate these into a sequence of more granular tasks. These sub-tasks are then delegated to a "Squad" of specialist worker modes, with the Manager overseeing the entire process within its domain. The Manager's detailed operational logic is defined in its mode-specific rules (in `[.roo/rules-[manager_slug]/](.roo/rules-[manager_slug]/)`) and its Knowledge Base (KB) (in `[.roo/commander/modes/[manager_slug]/kb/](.roo/commander/modes/[manager_slug]/kb/)`).

## 2. Core Purpose and Philosophy

The introduction of Manager modes aims to:

*   **Encapsulate Domain Expertise:** Concentrate the knowledge and procedural logic for a specific complex workflow (like designing a Data Product PoC) within a dedicated Manager.
*   **Enable Deep Orchestration:** Allow for detailed, multi-step workflows involving multiple specialist Squad modes to be managed effectively, without overwhelming the top-level `👑 Roo Commander`.
*   **Promote Modularity:** New complex capabilities can be added to the Roo Commander system by developing a new Manager mode and its associated Squad, without altering other Managers or the core Orchestrator significantly.
*   **Standardize Mid-Level Control:** Provide a consistent pattern for how complex projects are broken down and managed after initial delegation from `👑 Roo Commander`.

## 3. Key Responsibilities of a Manager Mode

All Manager modes, regardless of their specific domain, share a common set of responsibilities, guided by their Core Principles rule (e.g., `[.roo/rules-manager-data-product/00-manager-product-data-core-principles.md]`) and their Squad Orchestration rule (e.g., `[.roo/rules-manager-data-product/01-manager-data-product-squad-orchestration.md]`).

### 3.1. MDTM Task Ingestion and Planning
*   **Receive Primary Task:** A Manager is activated when it receives a high-level MDTM task from `👑 Roo Commander`.
*   **Understand Objective:** It must thoroughly analyze this primary MDTM task, including its overall goal, acceptance criteria, and any `input_artifacts`.
*   **Consult its KB:** Crucially, a Manager consults its own Knowledge Base (KB), particularly its main orchestration procedure (e.g., `[.roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md]`), to determine the standard sequence of operations and the Squad members required for the given objective. This KB procedure is the detailed "how-to" for its domain.
*   **Plan Sub-Tasks:** Based on its KB procedure and the primary task, it plans a sequence of MDTM sub-tasks necessary to achieve the overall goal.

### 3.2. Squad Sub-Task Creation and Delegation
*   **Utilize Generic Task Template:** For each step or phase in its managed workflow, the Manager creates a new, specific MDTM sub-task for the appropriate Squad Member mode using the workspace standard `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.md)`.
*   **Define Sub-Task Details:** The Manager ensures each sub-task has:
    *   A clear `title`, `description`, and `acceptance_criteria`.
    *   A detailed `checklist` for the Squad Member to follow.
    *   Correctly linked `input_artifacts` (often the `output_artifacts` from a previous Squad Member's task, using workspace-root-relative paths starting with `.roo/`).
    *   A specified target for `output_artifacts` (using `.roo/` anchored paths).
    *   Its `coordinator` field set to its own mode slug (e.g., `manager-data-product`).
    *   Its `parent_task_id` field set to its own primary MDTM Task ID, establishing the task hierarchy.
*   **Delegate to Squad:** Assigns these MDTM sub-tasks to the relevant Squad Member modes via a `new_task` tool call.

### 3.3. Workflow Orchestration and Artifact Management
*   **Monitor Sub-Task Progress:** Actively checks the `status` and `Log Entries / Notes 🪵` of the MDTM sub-tasks it has delegated to its Squad.
*   **Manage Artifact Flow:** Ensures that output artifacts from one Squad Member are correctly identified (via their `.roo/` anchored paths) and passed as input artifacts to the next Squad Member in the sequence, as defined in its orchestration logic.
*   **Log Orchestration Events:** Records key events (e.g., sub-task delegation, sub-task completion, critical artifact handoff) in the "Log Entries / Notes 🪵" section of *its own primary MDTM task file*.
*   **Session Awareness:** Operates within the context of the overall work session initiated by `👑 Roo Commander`. It ensures that paths to final, significant output artifacts produced by its squad are made known (e.g., by logging them in its own MDTM task's `output_artifacts` or reporting them up so they can be added to the `session_log.md`).

### 3.4. Intra-Squad Coordination and Issue Resolution
*   If a Squad Member reports a blocker or an error on its sub-task, the Manager is responsible for the first line of response. This may involve:
    *   Providing clarification to the Squad Member.
    *   Adjusting the scope or checklist of the sub-task.
    *   Re-delegating the sub-task.
    *   Escalating the issue to `👑 Roo Commander` if it's a critical blocker that the Manager cannot resolve within its domain or squad, as per `[.roo/commander/docs/standards/09-error-handling-and-reporting-standard.md](.roo/commander/docs/standards/09-error-handling-and-reporting-standard.md)`.

### 3.5. Updating and Completing its Own MDTM Task
*   The Manager continuously updates its own primary MDTM task file (received from `👑 Roo Commander`):
    *   Updates its checklist as major phases of its orchestrated workflow are completed.
    *   Updates its `status` (e.g., `"🔵 In Progress"`, `"🟢 Done"`, `"🔴 Error"`).
    *   Updates its `updated_date` (ISO 8601 UTC format).
    *   Populates its `output_artifacts` field with workspace-root-relative path(s) to the final, consolidated deliverable(s) of its entire managed workflow (e.g., the path to the `data_product_poc_plan.md`).

### 3.6. Reporting to the Orchestrator
*   Upon successful completion of its overall assigned MDTM task, the Manager reports its `"🟢 Done"` status back to its coordinator (`👑 Roo Commander`), referencing its primary MDTM Task ID.
*   If a critical, unresolvable error occurs, it reports an `"🔴 Error"` status and relevant details back to `👑 Roo Commander`.

## 4. Example: `🧑‍💼 Data Product Manager` (`manager-data-product`)

The `🧑‍💼 Data Product Manager` (`manager-data-product`) is the first implemented Manager mode in Roo Commander, responsible for orchestrating the **Data Product Design PoC Workflow**.

*   **Domain:** End-to-end design of a Data Product Proof of Concept.
*   **Receives:** An MDTM task from `👑 Roo Commander` with a high-level goal like "Design PoC for a Member Churn Prediction Data Product for Session XYZ."
*   **Squad:** It manages the `data-product-*` squad, including:
    *   `data-product-strategist`
    *   `data-product-ideator`
    *   `data-product-ux-persona-architect`
    *   `data-product-simdata-designer`
    *   `data-product-poc-interface-architect`
    *   `data-product-poc-documenter`
*   **Orchestration Flow (defined in its KB: `[.roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md](.roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md)`):**
    1.  Creates and delegates an MDTM sub-task to `data-product-strategist` to define the product strategy.
    2.  Takes the output `product_strategy.md` and uses it as input for an MDTM sub-task delegated to `data-product-ideator`.
    3.  Continues this sequential delegation through each squad member, managing the flow of artifacts.
    4.  Finally, delegates a task to `data-product-poc-documenter` to consolidate all preceding artifacts into the final `data_product_poc_plan.md`.
    5.  Updates its own primary MDTM task with the path to this plan in `output_artifacts` and reports `"🟢 Done"` to `👑 Roo Commander`.
*   **Knowledge Base:** Its KB contains the detailed procedure for this flow, a summary of its squad members (`[.roo/commander/modes/manager-data-product/kb/reference/00-data-product-squad-composition.md](.roo/commander/modes/manager-data-product/kb/reference/00-data-product-squad-composition.md)`), and skills/wisdom related to managing data product design projects.

## 5. Key Characteristics of Manager Modes

*   **Domain-Focused Orchestrators:** They don't do the specialist work themselves but manage those who do.
*   **MDTM Driven:** Their entire operation is framed by receiving one MDTM task and creating/managing many MDTM sub-tasks.
*   **KB & Rules Reliant:** Their specific orchestration logic for their domain is codified in their own Knowledge Base (especially procedures) and guided by their mode-specific rules in `[.roo/rules-[manager_slug]/](.roo/rules-[manager_slug]/)`.
*   **Stateful:** They manage a potentially long-running workflow and must track the state of multiple sub-tasks.

Manager modes are the engines that drive complex workflows in Roo Commander, providing a scalable and modular way to extend the system's capabilities.