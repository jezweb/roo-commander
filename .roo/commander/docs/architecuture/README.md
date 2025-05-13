# Roo Commander V8: System Architecture Overview

Welcome to the System Architecture documentation for Roo Commander V8. This section provides a detailed look into the design principles, core components, and interaction patterns that define how Roo Commander V8 and its associated modes operate to manage complex workflows.

Understanding this architecture is key for users who wish to grasp the system's capabilities more deeply, and for developers aiming to maintain, extend, or integrate with the system.

## Core Architectural Philosophy: Hierarchical Orchestration

Roo Commander V8 is built upon a **hierarchical "Orchestrator - Manager - Squad"** model. This layered approach is designed for:

*   **Modularity:** Allowing different complex workflows to be managed by dedicated "Manager" modes.
*   **Specialization:** Enabling "Squad Member" modes to focus on specific, expert tasks.
*   **Scalability:** Facilitating the addition of new capabilities by introducing new Manager and Squad units.
*   **Clear Delegation:** Providing a structured way to break down high-level user goals into actionable, traceable tasks.

## Key Architectural Components & Concepts

The following are the primary building blocks of the Roo Commander V8 system:

1.  **[The Orchestrator (`roo-commander`)](./01_orchestrator_role.md):**
    *   The top-level, user-facing AI mode.
    *   Responsible for initial user interaction, high-level goal understanding, and overall **Session Management**.
    *   Delegates broad objectives to appropriate "Manager" modes via top-level **MDTM (Markdown-Driven Task Management) tasks**.

2.  **[Manager Modes](./02_manager_modes.md):**
    *   Domain-specific orchestrators (e.g., `manager-data-product`).
    *   Receive a high-level MDTM task from `roo-commander`.
    *   Break down this task into a sequence of sub-tasks for their specialized "Squad" members.
    *   Manage the workflow, artifact flow, and basic coordination within their squad.

3.  **[Squad Member Modes](./03_squad_modes.md):**
    *   Specialist worker AIs that perform specific, well-defined tasks assigned by their Manager mode (e.g., `data-product-strategist`, `data-product-ideator`).
    *   Typically produce a defined output artifact (e.g., a strategy document, user personas).

4.  **[MDTM (Markdown-Driven Task Management) Integration](./04_mdtm_integration.md):**
    *   The standardized system for defining, assigning, tracking, and updating tasks across all levels of the hierarchy.
    *   Task files are structured using TOML+Markdown.

5.  **[Session Management & Artifacts](./05_session_management_overview.md):**
    *   The framework for capturing the entire context of a user's interaction, including logs, decisions, and all generated files (notes, design documents, etc.) within a dedicated session directory.

6.  **[Knowledge Bases (KBs)](./06_knowledge_base_philosophy.md):**
    *   Each mode (`roo-commander`, Managers, Squad members) possesses its own KB containing its specific operational procedures, prompts, references, and domain knowledge, enabling specialized and consistent behavior.

## Navigating Architectural Documentation

This `architecture/` directory contains detailed explanations for each of these core components and concepts:

*   **[01_orchestrator_role.md](./01_orchestrator_role.md):** Delves into the responsibilities and operation of `roo-commander`.
*   **[02_manager_modes.md](./02_manager_modes.md):** Explains the role of Manager modes, using `manager-data-product` as a primary example.
*   **[03_squad_modes.md](./03_squad_modes.md):** Describes Squad Member modes and their function, detailing the `data-product-*` squad.
*   **[04_mdtm_integration.md](./04_mdtm_integration.md):** Provides details on how MDTM underpins the delegation and task management system.
*   **[05_session_management_overview.md](./05_session_management_overview.md):** Explains the structure and importance of sessions, logs, and artifacts.
*   **[06_knowledge_base_philosophy.md](./06_knowledge_base_philosophy.md):** Discusses the design and use of KBs for different mode archetypes.

We recommend reading these documents in sequence for a comprehensive understanding, or navigating directly to the topic of interest.