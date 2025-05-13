# Roo Commander V8 + Manager-DataProduct 🚀

**Version:** 8.0.0 (Core Commander) / 1.0.0 (Manager-Data-Product & Squad)
**Author:** Jeremy Dawes, Jezweb, Australia

[![Project Status: In Development](https://img.shields.io/badge/Project%20Status-In%20Development-orange)](https://shields.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.txt) <!-- Ensure you have a LICENSE.txt file -->

Welcome to Roo Commander V8, a streamlined, intelligent orchestration system designed to manage complex workflows by leveraging specialized AI modes. This iteration introduces the **"Manager + Squad"** architectural pattern, with the initial flagship implementation being the **`manager-data-product`** for guiding the design of Data Product Proofs of Concept (PoCs).

## Purpose & Vision 🎯

The **Roo Commander V8** system aims to:

*   Provide a **lean, adaptable core orchestrator** (`roo-commander`) responsible for high-level user interaction and session management.
*   Enable **modular, domain-specific workflow management** through specialized "Manager" modes (e.g., `manager-data-product`).
*   Utilize "Squad" modes (e.g., `data-product-strategist`, `data-product-ideator`) under each Manager to perform focused, expert tasks.
*   Ensure **traceability and context preservation** through a robust session management system with detailed logs and linked artifacts.
*   Standardize task delegation and tracking using **Markdown-Driven Task Management (MDTM)**.
*   Create a **scalable and maintainable architecture** where new capabilities can be added by developing new "Manager + Squad" units.

The vision is a powerful yet intuitive system that assists users in achieving complex goals by intelligently coordinating a team of specialized AI agents.

## Core Architectural Concepts 🏗️

Understanding these concepts is key to using and extending Roo Commander V8:

1.  **Orchestrator (`roo-commander`):** The primary user-facing AI. It initiates sessions, understands high-level user goals, and delegates to the appropriate Manager mode.
2.  **Manager Modes (e.g., `manager-data-product`):** Domain-specific orchestrators. They receive a high-level objective (as an MDTM task) from `roo-commander` and manage a "squad" of specialist modes to achieve it.
3.  **Squad Modes (e.g., `data-product-strategist`):** Specialist worker AIs that perform specific tasks assigned by their Manager mode, typically producing a defined artifact.
4.  **MDTM (Markdown-Driven Task Management):** The standardized system for creating, assigning, and tracking tasks. Tasks are defined in TOML+Markdown files and form the basis of delegation between modes.
5.  **Sessions & Artifacts:** Each user interaction or workflow execution occurs within a "session," which has a dedicated directory (`.roo/commander/sessions/[SESSION_ID]/`). This directory contains a `session_log.md` and an `artifacts/` subdirectory for all generated notes, design documents, and other contextual files, ensuring full traceability.
6.  **Knowledge Bases (KBs):** Each mode (`roo-commander`, Managers, Squad members) has its own KB (`kb/` subdirectory) containing its specific operational procedures, prompts, references, and domain knowledge.

## Key Capabilities (with `manager-data-product`) 💡

Initially, Roo Commander V8, in conjunction with `manager-data-product` and its squad, provides a guided workflow to:

*   Define the **strategy** for a new Data Product PoC.
*   Brainstorm **ideas and scope** for the PoC.
*   Develop detailed **user personas**.
*   Design a **simulated data schema** and describe sample data.
*   Conceptualize the **PoC user interface**.
*   Consolidate all findings into a comprehensive **Data Product PoC Plan**.

## Target Audience 👥

*   **Users of the Data Product Design Workflow:** Product Managers, Data Strategists, UX Designers, Analysts.
*   **Developers & Maintainers of Roo Commander V8:** Those looking to understand its architecture or extend it with new Manager and Squad modes.
*   **AI Interaction Designers:** Interested in multi-agent orchestration patterns.

## Getting Started 🏁

1.  **Prerequisites:** Ensure you have a compatible Roo Code environment.
2.  **Explore the Documentation:**
    *   To understand the **overall architecture and concepts**, start with:
        *   `docs/introduction/00_overview.md`
        *   `docs/architecture/README.md`
    *   To learn how to **use the Data Product Design workflow**, see:
        *   `docs/user_guides/01_getting_started_with_data_product_design.md`
    *   For **developers looking to extend the system**, refer to:
        *   `docs/developer_guides/README.md`
3.  **Initiate Interaction:** Start interacting with `@roo-commander` in your Roo Code environment. It will present you with initial options.

## Navigating This Documentation 🗺️

All detailed documentation for Roo Commander V8 and its components can be found within the **`docs/`** subdirectory of this `.roo/commander/` folder.

*   **[Introduction](./docs/introduction/README.md):** Purpose, goals, and benefits.
*   **[Architecture](./docs/architecture/README.md):** Detailed explanation of the Orchestrator, Manager, Squad, MDTM, Session, and KB concepts.
*   **[User Guides](./docs/user_guides/README.md):** How-to guides for using the system.
*   **[Standards](./docs/standards/README.md):** Definitions for TOML+MD formats, MDTM tasks, session structures, etc.
*   **[Developer Guides](./docs/developer_guides/README.md):** Information on creating new modes and extending the system.
*   **[Glossary](./docs/glossary.md):** Definitions of key terms.

## Workspace Structure Overview 📂

```
.roo/commander/
├── README.md                 # This file: Main overview
├── docs/                     # Detailed documentation (see above)
├── modes/                    # Mode definitions (.mode.md files & their KBs/rules)
│   ├── roo-commander/
│   ├── manager-data-product/
│   ├── data-product-strategist/
│   └── ... (other squad modes)
├── rules/                    # Workspace-wide rules
├── sessions/                 # Stores logs and artifacts for each work session
├── tasks/                    # Stores MDTM task files
└── templates/                # Contains all .md templates for modes, rules, KBs, tasks, artifacts
    ├── modes/
    ├── rules/
    ├── tasks/
    ├── sessions/
    └── design_artifacts/     # Templates for outputs of data-product-* squad
```

## Contributing 🤝

(Define your contribution guidelines here if this is an open project or for team collaboration.)

## License 📜

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.