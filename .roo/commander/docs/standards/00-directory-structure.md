# Standard: Roo Commander V8 Directory Structure Overview

## 1. Objective

This document provides a high-level overview and explanation of the standard directory structure used within the `.roo/commander/` workspace. Understanding this structure is essential for navigating the project, locating specific components (modes, rules, templates, documentation, session data, tasks), and contributing to its development in a consistent manner.

For a raw, detailed tree view of the entire workspace, please refer to:
*   `../reference/00-full-workspace-tree.txt`

## 2. Top-Level Directory Structure under `.roo/commander/`

The `.roo/commander/` directory is the root for all components related to the Roo Commander V8 system and its managed workflows. Key subdirectories include:

*   **`archive/`**
    *   **Purpose:** Intended for storing older versions of files, deprecated modes or rules, or historical data that is no longer in active use but needs to be retained for reference.
    *   *(Note: This directory was present in the tree; its specific usage conventions should be defined if actively used.)*

*   **`builds/`**
    *   **Purpose:** Likely for storing build artifacts, compiled outputs, or packaged versions of Roo Commander or its components if a build process is implemented.
    *   *(Note: This directory was present in the tree; its specific usage conventions should be defined if actively used.)*

*   **`config/`**
    *   **Purpose:** Intended for global configuration files that might affect the operation of Roo Commander or multiple modes, beyond individual mode KBs or user preferences.
    *   *(Note: This directory was present in the tree; its specific usage conventions should be defined if actively used.)*

*   **`context/`**
    *   **Purpose:** For storing workspace-level contextual information that might be broadly relevant to many modes, but isn't a formal rule or standard. This could include things like a global project glossary (distinct from mode-specific KBs) or high-level project goals.
    *   *(Note: This directory was present in the tree; its specific usage conventions should be defined if actively used.)*

*   **`decisions/`**
    *   **Purpose:** Stores Architecture Decision Records (ADRs). ADRs document significant architectural choices, their context, and consequences.
    *   **Structure:** Typically contains `.md` files, each representing a single ADR.

*   **`docs/`**
    *   **Purpose:** Contains all human-readable documentation for the Roo Commander V8 system, its architecture, user guides, standards, and developer guides. This is the primary source of information for understanding how the system works and how to use or extend it.
    *   **Key Subdirectories:**
        *   `architecture/`: Detailed explanations of system components and design philosophy.
        *   `introduction/`: High-level overviews and goals.
        *   `reference/`: Supporting reference materials, like the raw workspace tree (`00-full-workspace-tree.txt`).
        *   `standards/`: Documents defining conventions and best practices for the workspace.
        *   `user_guides/`: Step-by-step instructions for users.

*   **`mcp-servers/`**
    *   **Purpose:** Likely for configuration, scripts, or documentation related to any Mode Control Protocol (MCP) servers that Roo Commander might interact with.
    *   *(Note: This directory was present in the tree; its specific usage conventions should be defined if actively used.)*

*   **`modes/`**
    *   **Purpose:** This is a critical directory containing the definitions for all AI modes within the Roo Commander V8 ecosystem.
    *   **Structure:** Each mode has its own subdirectory named after its slug (e.g., `roo-commander/`, `manager-data-product/`, `data-product-strategist/`).
    *   **Inside each `[mode_slug]/` directory:**
        *   `[mode_slug].mode.md`: The core definition file for the mode (TOML frontmatter for configuration, Markdown for documentation).
        *   `kb/`: The mode's dedicated Knowledge Base, containing its operational logic, prompts, procedures, references, examples, skills, and wisdom. (See `docs/architecture/06_knowledge_base_philosophy.md` for KB structure).
        *   `rules-[mode_slug]/` (Located at `.roo/rules-[mode_slug]/` as per our discussion, but conceptually linked here): Contains rules specific to this mode's operation.

*   **`scripts/`**
    *   **Purpose:** For utility scripts that might assist with development, maintenance, or operation of the Roo Commander system (e.g., scripts to validate TOML, generate documentation, etc.).

*   **`sessions/`**
    *   **Purpose:** Stores all data related to individual work sessions initiated by `roo-commander`. This is key for traceability and context preservation.
    *   **Structure:** Each session gets its own subdirectory: `SESSION-[Goal]-[Timestamp]/`.
    *   **Inside each session directory:**
        *   `session_log.md`: The main log for the session.
        *   `artifacts/`: A subdirectory containing all notes, generated design documents, and other files related to the session, organized into further subdirectories (e.g., `notes/`, `design_outputs/`, `learnings/`).

*   **`tasks/`**
    *   **Purpose:** The central repository for all Markdown-Driven Task Management (MDTM) files. These tasks define work delegated between modes.
    *   **Structure:** May contain subdirectories to organize tasks (e.g., by project, by Manager mode, or by status).
    *   **Naming:** `TASK-[PREFIX]-[Timestamp].md`.

*   **`templates/`**
    *   **Purpose:** Contains all standard TOML+Markdown templates used for creating consistent documents throughout the workspace.
    *   **Key Subdirectories:**
        *   `modes/`: Templates for different mode archetypes (`orchestrator`, `manager`, `squad_member`) and their KB READMEs.
        *   `rules/`: Templates for workspace rules and mode-specific rules.
        *   `sessions/`: Templates for session logs and various session artifact types.
        *   `tasks/`: Template for the generic MDTM task file.
        *   `design_artifacts/` (Proposed location): Templates for the specific outputs of the `data-product-*` squad (e.g., `template_product_strategy.md`).

*   **`tmp/`**
    *   **Purpose:** For temporary files generated during operations that do not need to be version controlled or persisted long-term.
    *   *(Note: This directory was present in the tree; ensure it's in `.gitignore` if not already.)*

## 3. Workspace Root (`.roo/`)

*   The `.roo/` directory itself is the root of this specific "Commander" configuration.
*   **`rules/` (within `.roo/` but outside `.roo/commander/`)**
    *   **Purpose:** Contains **workspace-wide rules** that apply to ALL modes operating within this Roo Code environment, not just those specific to the `commander` setup. Our core standards like TOML+MD format, MDTM usage, and Session Management reside here.
*   **`rules-[mode_slug]/` (e.g., `.roo/rules-roo-commander/`, `.roo/rules-manager-data-product/`)**
    *   **Purpose:** Contains rules that are specific to a particular mode. This allows for mode-specific operational logic to be defined separately from its core `.mode.md` definition.

## 4. General Principles

*   **Clarity:** Directory and file names should be descriptive and follow consistent conventions (see `docs/standards/01-naming-conventions.md`).
*   **Modularity:** The structure is designed to support the modular "Orchestrator - Manager - Squad" architecture, with modes and their knowledge clearly encapsulated.
*   **Discoverability:** README files within key directories serve as indexes to help navigate the structure.

This directory structure provides a scalable and organized foundation for Roo Commander V8 and its associated components.