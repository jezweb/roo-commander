# Architecture: Manager Modes - Domain-Specific Orchestrators

## 1. Introduction to Manager Modes

In the Roo Commander V8 hierarchical architecture, **Manager modes** serve as the critical middle layer of orchestration. They are specialized AI agents responsible for overseeing and executing complex, domain-specific workflows. Each Manager mode is an expert in a particular area (e.g., data product design, web application development, cloud infrastructure deployment).

They receive high-level objectives (as a top-level MDTM task) from the primary Orchestrator (`roo-commander`) and translate these into a sequence of more granular tasks. These sub-tasks are then delegated to a "Squad" of specialist worker modes, with the Manager overseeing the entire process within its domain.

## 2. Core Purpose and Philosophy

The introduction of Manager modes aims to:

*   **Encapsulate Domain Expertise:** Concentrate the knowledge and procedural logic for a specific complex workflow (like designing a Data Product PoC) within a dedicated Manager.
*   **Enable Deep Orchestration:** Allow for detailed, multi-step workflows involving multiple specialist Squad modes to be managed effectively, without overwhelming the top-level `roo-commander`.
*   **Promote Modularity:** New complex capabilities can be added to the Roo Commander V8 ecosystem by developing a new Manager mode and its associated Squad, without altering other Managers or the core Orchestrator significantly.
*   **Standardize Mid-Level Control:** Provide a consistent pattern for how complex projects are broken down and managed after initial delegation from `roo-commander`.

## 3. Key Responsibilities of a Manager Mode

All Manager modes, regardless of their specific domain, share a common set of responsibilities:

### 3.1. MDTM Task Ingestion and Planning
*   **Receive Primary Task:** A Manager is activated when it receives a high-level MDTM task from `roo-commander` (or potentially another higher-level Manager in future, more complex hierarchies).
*   **Understand Objective:** It must thoroughly analyze this primary MDTM task, including its overall goal, acceptance criteria, and any `input_artifacts`.
*   **Consult its KB:** Crucially, a Manager consults its own Knowledge Base (KB), particularly its main orchestration procedure (e.g., `kb/procedures/01-main-orchestration-flow.md`), to determine the standard sequence of operations and the Squad members required for the given objective.
*   **Plan Sub-Tasks:** Based on its KB and the primary task, it plans a sequence of MDTM sub-tasks necessary to achieve the overall goal.

### 3.2. Squad Sub-Task Creation and Delegation
*   **Utilize Generic Task Template:** For each step or phase in its managed workflow, the Manager creates a new, specific MDTM sub-task for the appropriate Squad Member mode using the workspace standard `template_00_mdtm_task_generic.md`.
*   **Define Sub-Task Details:** The Manager ensures each sub-task has:
    *   A clear `title`, `description`, and `acceptance_criteria`.
    *   A detailed `checklist` for the Squad Member to follow.
    *   Correctly linked `input_artifacts` (often the `output_artifacts` from a previous Squad Member's task).
    *   A specified target for `output_artifacts`.
    *   Its `coordinator` field set to the Manager's own primary MDTM Task ID.
    *   Its `parent_task_id` field set to the Manager's own primary MDTM Task ID, establishing the task hierarchy.
*   **Delegate to Squad:** Assigns these MDTM sub-tasks to the relevant Squad Member modes.

### 3.3. Workflow Orchestration and Artifact Management
*   **Monitor Sub-Task Progress:** Actively checks the `status` and `log entries` of the MDTM sub-tasks it has delegated to its Squad.
*   **Manage Artifact Flow:** Ensures that output artifacts from one Squad Member are correctly identified and passed as input artifacts to the next Squad Member in the sequence, as defined in its orchestration logic.
*   **Log Orchestration Events:** Records key events (e.g., sub-task delegation, sub-task completion, critical artifact handoff) in the "Log Entries / Notes 🪵" section of *its own primary MDTM task file*.
*   **Session Awareness:** Operates within the context of the overall work session initiated by `roo-commander`. It ensures that paths to final, significant output artifacts produced by its squad are made known (e.g., by logging them in its own MDTM task's `output_artifacts` or reporting them up so they can be added to the `session_log.md`).

### 3.4. Intra-Squad Coordination and Issue Resolution
*   If a Squad Member reports a blocker or an error on its sub-task, the Manager is responsible for the first line of response. This may involve:
    *   Providing clarification to the Squad Member.
    *   Adjusting the scope or checklist of the sub-task.
    *   Re-delegating the sub-task (perhaps to a different Squad Member if appropriate and available).
    *   Escalating the issue to `roo-commander` if it's a critical blocker that the Manager cannot resolve within its domain or squad.

### 3.5. Updating and Completing its Own MDTM Task
*   The Manager continuously updates its own primary MDTM task file (received from `roo-commander`):
    *   Updates its checklist as major phases of its orchestrated workflow are completed.
    *   Updates its `status` (e.g., "🔵 In Progress", "🟢 Done", "🔴 Error").
    *   Updates its `updated_date`.
    *   Populates its `output_artifacts` field with paths to the final, consolidated deliverable(s) of its entire managed workflow (e.g., the path to the `data_product_poc_plan.md`).

### 3.6. Reporting to the Orchestrator
*   Upon successful completion of its overall assigned MDTM task (meaning its entire squad has successfully completed their work and the final deliverable is ready), the Manager reports its "🟢 Done" status back to its coordinator (`roo-commander`), referencing its primary MDTM Task ID.
*   If a critical, unresolvable error occurs that halts its entire workflow, it reports an "🔴 Error" status and relevant details back to `roo-commander`.

## 4. Example: `manager-data-product`

The `manager-data-product` is the first implemented Manager mode in Roo Commander V8, responsible for orchestrating the **Data Product Design PoC Workflow**.

*   **Domain:** End-to-end design of a Data Product Proof of Concept.
*   **Receives:** An MDTM task from `roo-commander` with a high-level goal like "Design PoC for a Member Churn Prediction Data Product for Session XYZ."
*   **Squad:** It manages the `data-product-*` squad, including:
    *   `data-product-strategist`
    *   `data-product-ideator`
    *   `data-product-ux-persona-architect`
    *   `data-product-simdata-designer`
    *   `data-product-poc-interface-architect`
    *   `data-product-poc-documenter`
*   **Orchestration Flow (defined in its KB: `procedures/01-main-orchestration-flow.md`):**
    1.  Creates and delegates an MDTM sub-task to `data-product-strategist` to define the product strategy.
    2.  Takes the output `product_strategy.md` and uses it as input for an MDTM sub-task delegated to `data-product-ideator`.
    3.  Continues this sequential delegation through each squad member, managing the flow of artifacts (strategy doc -> ideation doc -> persona docs -> data schema -> interface design).
    4.  Finally, delegates a task to `data-product-poc-documenter` to consolidate all preceding artifacts into the final `data_product_poc_plan.md`.
    5.  Updates its own primary MDTM task with the path to this plan in `output_artifacts` and reports "🟢 Done" to `roo-commander`.
*   **Knowledge Base:** Its KB contains the detailed procedure for this flow, a summary of its squad members, and potentially skills or wisdom related to managing data product design projects.

## 5. Key Characteristics of Manager Modes

*   **Domain-Focused Orchestrators:** They don't do the specialist work themselves but manage those who do.
*   **MDTM Driven:** Their entire operation is framed by receiving one MDTM task and creating/managing many MDTM sub-tasks.
*   **KB Reliant:** Their specific orchestration logic for their domain is codified in their own Knowledge Base.
*   **Stateful:** They manage a potentially long-running workflow and must track the state of multiple sub-tasks.

Manager modes are the engines that drive complex workflows in Roo Commander V8, providing a scalable and modular way to extend the system's capabilities.