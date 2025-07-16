# Roo Commander V8.1: Architecture Principles

## 1. Orchestrator (`roo-commander`) Principles

*   **User Interface:** Acts as the primary conversational interface for the user.
*   **Intent Understanding:** Focuses on understanding high-level user goals and mapping them to appropriate Manager workflows.
*   **Session Management:** Responsible for initiating, logging, and managing the lifecycle of work sessions.
*   **High-Level Delegation:** Delegates complex tasks to Manager modes via MDTM.
*   **Minimal Core Knowledge:** Its own `roleDefinition` and `customInstructions` are concise, primarily directing it to its `kb/` for available Manager workflows and session procedures.

## 2. Manager Mode Principles

*   **Domain Expertise:** Each Manager is an expert in a specific, complex workflow (e.g., project management, data product design).
*   **MDTM-Driven Orchestration:** Receives a high-level MDTM task from the Orchestrator and breaks it down into sub-tasks for its Squad.
*   **Squad Coordination:** Manages the flow of work and artifacts between its Squad members.
*   **Progress Tracking:** Updates its own primary MDTM task to reflect overall progress and reports status to the Orchestrator.
*   **KB-Guided Procedures:** Its core orchestration logic (how it sequences tasks and coordinates its squad) is defined in its `kb/` (e.g., `procedures/main-orchestration-flow.md`).

## 3. Squad Member Mode Principles

*   **Specialized Execution:** Highly focused on performing a single, well-defined task or producing a specific type of artifact.
*   **MDTM Task-Driven:** Its entire operation is guided by the detailed MDTM task assigned by its Manager. The checklist in this task is its primary instruction set.
*   **Artifact Producer:** The main output is typically a structured artifact.
*   **Self-Updating MDTM:** Updates its own assigned MDTM task to reflect progress and reports completion to its Manager.
*   **Dynamic KB Lookup:** Leverages its `kb/` for detailed procedures, skills, and reference material, guided by its `roleDefinition` and `kb/README.md`.

## 4. MDTM (Markdown-Driven Task Management) Principles

*   **Standardized Communication:** All task delegation and progress reporting between modes occurs via MDTM files.
*   **Hierarchical Structure:** Supports parent-child relationships (`parent_task_id`, `coordinator`) for clear work breakdown.
*   **Traceability:** Each MDTM task file provides a persistent, auditable record of work, including logs, status, and links to artifacts.
*   **Clear Contracts:** Defines objective, inputs, expected outputs, and acceptance criteria for each delegated unit of work.

## 5. Layered Knowledge Base (KB) Principles

This is the cornerstone of token efficiency and effective context management:

*   **Tier 1: Universal Rules (`.roo/rules/`)**
    *   **Purpose:** For fundamental, overarching principles, standards, and rules that apply to *all* modes (Roo Code default and custom).
    *   **Content:** High-level, concise, and universally applicable (e.g., TOML+MD format, MDTM standard, session management standard).
    *   **Loading:** Pre-loaded by Roo Code for every mode. Keep this folder lean to avoid context flooding.

*   **Tier 2: Mode-Specific Pre-loaded Rules (`.roo/rules-[mode_slug]/`)**
    *   **Purpose:** For fundamental, always-relevant operational principles and context specific to a *single mode* that you want the AI to have immediately available.
    *   **Content:** Core principles, essential operational guidelines, or very frequently used reference material for that specific mode.
    *   **Loading:** Pre-loaded by Roo Code only when that specific mode is active.
    *   **Structure:** This is where the `kb/` folder for each mode will reside, containing its detailed knowledge.

*   **Tier 3: Dynamic KB Lookup (`.roo/rules-[mode_slug]/kb/`)**
    *   **Purpose:** For detailed, mode-specific knowledge, procedures, examples, and reference material that the AI retrieves *on demand* using its file-reading tools.
    *   **Content:** Comprehensive procedures, specific skills, detailed examples, extensive reference data, wisdom.
    *   **Loading:** Not pre-loaded. The AI is instructed (via its `roleDefinition` or `customInstructions`) to dynamically access and interpret this content from its `kb/` folder (which is now located within its `rules-[mode_slug]` directory), often using a `README.md` as an index.
    *   **Benefit:** Optimizes token usage by only loading relevant context when needed.
