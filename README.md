# Roo Commander V8.1: Lean & Efficient AI Orchestration 👑

**Version:** 8.1.0 (Core Commander)
**Author:** Jeremy Dawes, Jezweb, Australia

[![Project Status: In Development](https://img.shields.io/badge/Project%20Status-In%20Development-orange)](https://shields.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.txt)

Welcome to **Roo Commander V8.1**, a streamlined, intelligent orchestration system designed to manage complex workflows by leveraging specialized AI modes within the Roo Code environment. This iteration focuses on a **lean, token-efficient architecture** and a clear **"Orchestrator + Manager + Squad"** hierarchical model.

## Purpose & Vision 🎯

The **Roo Commander V8.1** system aims to:

*   Provide a **lean, adaptable core orchestrator** (`roo-commander`) responsible for high-level user interaction and session management.
*   Enable **modular, domain-specific workflow management** through specialized "Manager" modes (e.g., `project-manager`).
*   Utilize "Squad" modes (e.g., `task-planner`, `task-executor`) under each Manager to perform focused, expert tasks.
*   Ensure **traceability and context preservation** through a robust session management system with detailed logs and linked artifacts.
*   Standardize task delegation and tracking using **Markdown-Driven Task Management (MDTM)**.
*   Create a **scalable and maintainable architecture** where new capabilities can be added by developing new "Manager + Squad" units.
*   Prioritize **token efficiency** through a layered context management strategy, leveraging Roo Code's native custom instructions and dynamic KB lookup.

The vision is a powerful yet intuitive system that assists users in achieving complex goals by intelligently coordinating a team of specialized AI agents.

## Core Architectural Concepts 🏗️

Understanding these concepts is key to using and extending Roo Commander V8.1:

1.  **Orchestrator (`roo-commander`):** The primary user-facing AI. It initiates sessions, understands high-level user goals, and delegates to the appropriate Manager mode.
2.  **Manager Modes (e.g., `project-manager`):** Domain-specific orchestrators. They receive a high-level objective (as an MDTM task) from `roo-commander` and manage a "squad" of specialist modes to achieve it.
3.  **Squad Modes (e.g., `task-planner`, `task-executor`):** Specialist worker AIs that perform specific tasks assigned by their Manager mode, typically producing a defined artifact.
4.  **MDTM (Markdown-Driven Task Management):** The standardized system for creating, assigning, and tracking tasks. Tasks are defined in TOML+Markdown files and form the basis of delegation between modes. MDTM files are now stored in the project root under the `.mdtm/` directory.
5.  **Sessions & Artifacts:** Each user interaction or workflow execution occurs within a "session," which has a dedicated directory (`.mdtm/sessions/[SESSION_ID]/`). This directory contains a `session_log.md` and other generated notes, design documents, and contextual files, ensuring full traceability.
6.  **Layered Knowledge Bases (KBs):** A strategic approach to providing context to AI modes, optimizing for relevance and token efficiency. KBs are now located within each mode's pre-loaded rules directory (`.roo/rules-[mode_slug]/kb/`) and are utilized by the AI from its pre-loaded context.

## Key Capabilities 💡

Roo Commander V8.1 provides a foundational framework for orchestrating diverse workflows. The initial core modes enable:

*   **High-Level User Interaction:** Through the `roo-commander` orchestrator.
*   **Generic Project Management:** Via the `project-manager` mode, capable of breaking down and overseeing general project tasks.
*   **Detailed Task Planning:** Using the `task-planner` to create actionable MDTM tasks.
*   **Task Execution:** Employing the `task-executor` to perform specific work and produce artifacts.

This lean core can be extended with new Manager and Squad units for specialized domains (e.g., code development, data analysis, documentation).

## Target Audience 👥

*   **Users of Roo Code:** Seeking to leverage AI for complex, multi-step workflows.
*   **Developers & Maintainers of Roo Commander:** Those looking to understand its architecture or extend it with new Manager and Squad modes.
*   **AI Interaction Designers:** Interested in multi-agent orchestration patterns and token-efficient context management.

## Getting Started 🏁

To start using Roo Commander V8.1 in your Roo Code environment:

1.  **Download:** Download the latest release of Roo Commander V8.1 as a zip file from [https://github.com/jezweb/roo-commander/archive/refs/heads/v8.1.zip](https://github.com/jezweb/roo-commander/archive/refs/heads/v8.1.zip).
2.  **Deploy:** Extract the zip and copy the contents of the `.mdtm/`, `.roo/`, and `.roomodes` files/folders directly into the root directory of your project where you use Roo Code.
3.  **Explore the Documentation:** All detailed documentation for Roo Commander V8.1 and its components can be found within the **`docs/`** subdirectory of the `.roo/commander/` folder.
    *   **`/.roo/commander/docs/01_overview.md`:** Purpose, goals, and benefits.
    *   **`/.roo/commander/docs/02_architecture_principles.md`:** Detailed explanation of the Orchestrator, Manager, Squad, MDTM, Session, and Layered KB concepts.
    *   **`/.roo/commander/docs/03_file_structure_and_purpose.md`:** Comprehensive overview of the new file structure.
    *   **`/.roo/commander/docs/04_roo_code_integration.md`:** How Roo Commander integrates with Roo Code.
    *   **`/.roo/commander/docs/05_mode_development_guide.md`:** Information on creating new modes and extending the system.
    *   **`/.roo/commander/docs/06_how_to_make_more_modes.md`:** Quick guide for creating new modes.
4.  **Initiate Interaction:** Start interacting with `@roo-commander` in your Roo Code environment. It will present you with initial options.

## Workspace Structure Overview 📂

```
.
├── .roomodes                 # Generated: Combined YAML definitions for all custom modes.
├── .mdtm/                    # NEW: Stores all MDTM task and session files.
│   ├── tasks/                # For MDTM task files.
│   └── sessions/             # For session logs and artifacts.
└── .roo/                     # Roo Code configuration and Roo Commander components.
    ├── rules/                # Universal, project-wide rules (e.g., TOML+MD format, MDTM standard).
    ├── rules-roo-commander/  # Mode-specific pre-loaded rules and KB for roo-commander.
    │   ├── 00-roo-commander-core-principles.md
    │   └── kb/               # Pre-loaded KB content for roo-commander.
    │       ├── README.md
    │       └── ...
    ├── rules-project-manager/# Mode-specific pre-loaded rules and KB for project-manager.
    │   ├── 00-project-manager-core-principles.md
    │   └── kb/               # Pre-loaded KB content for project-manager.
    │       ├── README.md
    │       └── ...
    ├── rules-task-planner/   # Mode-specific pre-loaded rules and KB for task-planner.
    │   ├── 00-task-planner-core-principles.md
    │   └── kb/               # Pre-loaded KB content for task-planner.
    │       ├── README.md
    │       └── ...
    ├── rules-task-executor/  # Mode-specific pre-loaded rules and KB for task-executor.
    │   ├── 00-task-executor-core-principles.md
    │   └── kb/               # Pre-loaded KB content for task-executor.
    │       ├── README.md
    │       └── ...
    └── commander/            # Roo Commander's internal components and authoring source.
        ├── docs/             # Core documentation for Roo Commander (this project).
        │   ├── 01_overview.md
        │   ├── 02_architecture_principles.md
        │   ├── 03_file_structure_and_purpose.md
        │   ├── 04_roo_code_integration.md
        │   ├── 05_mode_development_guide.md
        │   └── 06_how_to_make_more_modes.md
        ├── modes/            # Individual YAML definitions for each custom mode.
        │   ├── roo-commander.yaml
        │   ├── project-manager.yaml
        │   ├── task-planner.yaml
        │   └── task-executor.yaml
        ├── scripts/          # Utility scripts (e.g., combine_mode_yamls.js).
        │   └── combine_mode_yamls.js
        └── templates/        # Standardized templates for MDTM tasks, sessions, notes, etc.
            ├── tasks/
            │   ├── template_00_mdtm_task_generic.md
            │   └── template_00_mdtm_task_generic.README.md
            ├── sessions/
            │   ├── template_00_mdtm_session_generic.md
            │   └── template_00_mdtm_session_generic.README.md
            ├── note/
            │   ├── template_00_session_note.md
            │   └── template_00_session_note.README.md
            ├── summary/
            │   ├── template_00_session_summary.md
            │   └── template_00_session_summary.README.md
            └── learning/
                ├── template_00_session_learning.md
                └── template_00_session_learning.README.md
```

## Contributing 🤝

(Define your contribution guidelines here if this is an open project or for team collaboration.)

## License 📜

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.