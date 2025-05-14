# Roo Commander V8: Key Architectural Overview

## 1. Purpose of this Document

This document provides a high-level overview of the core architectural principles and components of the Roo Commander V8 system. It is intended as a quick reference to understand how the system is structured and how its different parts interact.

For more detailed information, please refer to the specific documents in `[.roo/commander/docs/architecture/](.roo/commander/docs/architecture/)` and `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`.

## 2. Core Architectural Pattern: Orchestrator -> Manager -> Squad

Roo Commander V8 is built upon a hierarchical, modular architecture designed for clarity, scalability, and maintainability:

*   **Orchestrator (`roo-commander`):**
    *   **Role:** The primary user-facing AI agent and top-level coordinator.
    *   **Responsibilities:**
        *   Handles initial user interaction and high-level goal understanding.
        *   Manages the lifecycle of **Work Sessions** (see Section 4).
        *   Identifies the appropriate "Manager" mode for a user's stated objective.
        *   Delegates the entire complex workflow to the selected Manager mode by creating a single, top-level **MDTM Task** (see Section 3).
    *   **Key Characteristic:** Remains lean and focused on high-level coordination, without deep domain-specific knowledge.

*   **Manager Modes (e.g., `manager-data-product`, `manager-workspace-maintenance`):**
    *   **Role:** Domain-specific orchestrators, each responsible for managing a complex end-to-end workflow within their area of expertise.
    *   **Responsibilities:**
        *   Receive a high-level MDTM Task from `roo-commander`.
        *   Break down this task into a sequence of smaller, actionable **MDTM Sub-Tasks**.
        *   Delegate these sub-tasks to members of their specialist "Squad."
        *   Manage the flow of information and artifacts between squad members.
        *   Monitor squad progress and handle coordination within their domain.
        *   Report overall completion of their primary MDTM task back to `roo-commander`.
    *   **Key Characteristic:** Possess deep procedural knowledge for their domain, primarily codified in their Knowledge Base (KB), especially their main orchestration flow procedure.

*   **Squad Member Modes (e.g., `data-product-strategist`, `infra-mcp-setup-specialist`):**
    *   **Role:** Specialist worker AI agents that perform specific, well-defined tasks.
    *   **Responsibilities:**
        *   Receive an MDTM Sub-Task from their Manager mode.
        *   Execute the checklist and instructions within their MDTM task.
        *   Produce a primary output artifact (e.g., a design document, a configured file, a report).
        *   Update their MDTM task file with progress, logs, and links to their output artifacts.
        *   Report completion or issues back to their Manager.
    *   **Key Characteristic:** Highly specialized in a narrow domain. Their operational logic is primarily driven by their system prompt and the MDTM task they receive, supplemented by their own focused KB for specific skills or wisdom.

## 3. MDTM (Markdown-Driven Task Management) - The Backbone of Delegation

*   **Purpose:** MDTM is the standard system for defining, delegating, tracking, and managing all significant units of work between modes.
*   **Structure:** All MDTM tasks use a standard TOML+Markdown template (`[.roo/commander/templates/tasks/template_00_mdtm_task_generic.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.md)`).
*   **Hierarchy:** Tasks can have `parent_task_id` fields, creating a clear hierarchy:
    *   `roo-commander` creates a top-level task for a Manager.
    *   The Manager creates sub-tasks for its Squad Members, linking back to its own task ID.
*   **Key Standard:** `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)` defines how all modes interact with MDTM tasks.
*   **Location:** Task files are stored in `[.roo/commander/tasks/](.roo/commander/tasks/)`.

## 4. Session Management - Context and Traceability

*   **Purpose:** All user-initiated work is conducted within a **Session**, providing a container for context, logs, and all generated artifacts.
*   **Structure:** Each session has its own directory (`[.roo/commander/sessions/SESSION-[Goal]-[Timestamp]/](.roo/commander/sessions/SESSION-[Goal]-[Timestamp]/)`) containing:
    *   `session_log.md`: A TOML+Markdown file that logs key events, decisions, top-level MDTM task delegations, and links to all significant artifacts created during the session. Uses `[.roo/commander/templates/sessions/template_00_mdtm_session_generic.md](.roo/commander/templates/sessions/template_00_mdtm_session_generic.md)`.
    *   `artifacts/`: A subdirectory with a standard scaffold (e.g., `notes/`, `learnings/`, `design_outputs/`) where all files generated or referenced during the session are stored.
*   **Key Standard:** `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)` defines session lifecycle and artifact management.

## 5. Key Standards & Conventions

The entire system relies on a set of clearly defined standards for consistency and interoperability:

*   **Directory Structure:** Defined in `[.roo/commander/docs/standards/00-directory-structure.md](.roo/commander/docs/standards/00-directory-structure.md)`.
*   **Naming & Path Referencing Conventions:** Defined in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.
    *   **Critical Path Convention:** All internal file path references **MUST** be workspace-root-relative, anchored to `.roo/`.
*   **TOML+Markdown Document Format:** Defined in `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)` and explained in `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`.
*   **Mode Definitions (`.mode.md`):** Based on archetype templates found in `[.roo/commander/templates/modes/](.roo/commander/templates/modes/)`.
*   **Mode-Specific Rules (`rules-[mode_slug]/`):** Each mode has a `00-[mode_slug]-core-principles.md` file (based on `template_00_mode_core_principles_rule.md`) defining its core logic and KB usage. Managers have an additional `01-[manager_slug]-squad-orchestration.md` rule.
*   **Knowledge Bases (`kb/`):** Each mode has a KB with a standard subdirectory structure (`README.md`, `prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`). See `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`.

## 6. Extensibility

This architecture is designed to be extensible. New capabilities are added by:
1.  Planning a new "Manager + Squad" unit using the squad design planning templates.
2.  Developing the new Manager mode and its specialist Squad Member modes, adhering to the archetype templates and standards.
3.  Integrating the new Manager mode with `roo-commander` by updating `roo-commander`'s KB.
    (See `[.roo/commander/docs/developer_guides/10_onboarding_new_manager_squad_unit.md](.roo/commander/docs/developer_guides/10_onboarding_new_manager_squad_unit.md)`)

This overview should provide a solid understanding of the foundational architecture of Roo Commander V8.