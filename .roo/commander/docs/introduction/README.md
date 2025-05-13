# Introduction: Roo Commander V8 & The "Manager + Squad" Philosophy

## Welcome to Roo Commander V8

Roo Commander V8 represents a significant evolution in intelligent workflow orchestration within the Roo Code environment. It is designed as a lean, adaptable core system that empowers users to tackle complex projects by coordinating specialized AI agents in a structured and traceable manner.

The primary goal of Roo Commander V8 is to move beyond monolithic AI assistance towards a modular, hierarchical system where different AI "modes" take on distinct roles, from high-level coordination to domain-specific management and specialized task execution.

This document provides an overview of its core philosophy, architecture, and the initial flagship capability focused on Data Product Design.

## The "Manager + Squad" Philosophy 🧑‍💼➡️🛠️

The cornerstone of Roo Commander V8's architecture is the **"Manager + Squad"** model. This hierarchical approach is designed to address the challenges of deep delegation and complex task management in AI-assisted workflows:

1.  **The Orchestrator (`roo-commander`):**
    *   At the top level, `roo-commander` acts as the primary user-facing **Orchestrator**.
    *   Its key responsibilities are to understand the user's high-level intent, manage the overall work **Session** (including logs and artifacts for traceability), and delegate broad objectives to the appropriate "Manager" mode.
    *   `roo-commander` itself does not possess deep domain expertise; instead, it knows *which Manager to call* for a given type of complex task.

2.  **Manager Modes (Domain-Specific Orchestrators):**
    *   Beneath the Orchestrator are **Manager modes**. Each Manager is an expert in a specific domain or complex workflow (e.g., `manager-data-product` for designing Data Product PoCs).
    *   A Manager receives a high-level goal from `roo-commander` in the form of a **Markdown-Driven Task Management (MDTM)** task.
    *   Its primary function is to break down this high-level goal into a sequence of smaller, actionable sub-tasks.
    *   It then delegates these sub-tasks (again, using MDTM) to members of its specialized "Squad."
    *   The Manager orchestrates the flow of work and information within its squad, monitors progress, handles domain-specific coordination, and reports overall completion or critical issues back to `roo-commander`.

3.  **Squad Modes (Specialist Workers):**
    *   At the execution level are **Squad Member modes**. These are highly specialized AI agents focused on performing specific tasks within the domain managed by their Manager.
    *   For example, the `manager-data-product` has a squad including `data-product-strategist`, `data-product-ideator`, `data-product-ux-persona-architect`, etc.
    *   Each Squad Member receives a detailed MDTM task from its Manager, executes it (typically producing a specific artifact like a strategy document or a set of personas), updates its MDTM task, and reports completion back to its Manager.

**Benefits of this Philosophy:**

*   **Modularity & Scalability:** New capabilities (e.g., managing web application development, orchestrating cloud deployments) can be added to the Roo Commander ecosystem by creating new, self-contained "Manager + Squad" units without making `roo-commander` itself overly complex.
*   **Clear Separation of Concerns:** Each layer (Orchestrator, Manager, Squad) has distinct responsibilities, leading to more focused and maintainable AI modes.
*   **Effective Deep Delegation:** Addresses the challenge of AI struggling with multi-step, complex tasks by breaking them down hierarchically. `roo-commander` makes one "deep" delegation to a Manager, which then handles further detailed delegations.
*   **Enhanced Traceability:** The combination of Session logs (managed by `roo-commander`) and hierarchical MDTM tasks (linking Orchestrator to Manager, and Manager to Squad members) provides a comprehensive audit trail of all activities.
*   **Focused Expertise:** Allows individual AI modes to become true specialists in their narrow domain, leading to higher quality outputs.

## Initial Implementation: Data Product Design 🚀

The first full implementation of this "Manager + Squad" philosophy within Roo Commander V8 is the **Data Product Design workflow**, orchestrated by the `manager-data-product` mode and its dedicated squad. This capability guides users through a structured process to:

*   Define a clear strategy for a Data Product Proof of Concept (PoC).
*   Develop user personas and scope PoC features.
*   Design simulated data and conceptual interfaces.
*   Consolidate all findings into a comprehensive PoC Plan.

This serves as a blueprint and a demonstration of how other complex workflows can be integrated into the Roo Commander V8 ecosystem in the future.

## Navigating the System

*   Users primarily interact with **`@roo-commander`**.
*   `roo-commander` initiates **Sessions** to manage the context of your work.
*   For complex tasks like Data Product Design, `roo-commander` will delegate to a **Manager** (e.g., `@manager-data-product`).
*   The Manager will then coordinate its **Squad** of specialists.
*   Progress and tasks are tracked using **MDTM files** stored in `.roo/commander/tasks/`.
*   All session-related notes, key outputs, and logs are stored in `.roo/commander/sessions/[SESSION_ID]/`.

This overview provides the foundational understanding of Roo Commander V8. For more detailed information, please refer to the specific sections within this documentation, particularly the [System Architecture](./../architecture/README.md) documents.