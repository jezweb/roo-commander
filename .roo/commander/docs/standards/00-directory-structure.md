+++
# --- Basic Metadata ---
id = "STANDARD-DIRECTORY-STRUCTURE-V2"
title = "Standard: Roo Commander V8 Directory Structure Overview"
context_type = "standards_document"
scope = "Overview and explanation of the standard directory structure for the Roo Commander V8 workspace, anchored at the .roo/ root."
target_audience = ["all"] # Developers, AI Modes, System Architects
granularity = "overview"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder - To be filled with current date
version = "2.0"
tags = ["standards", "directory-structure", "file-organization", "workspace", "core", "v8"]
related_context = [
    ".roo/commander/docs/standards/01-naming-conventions.md", # Contains path referencing rules
    ".roo/commander/docs/reference/00-full-workspace-tree.txt" # The raw tree output
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md" # Assuming a template for standards docs
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Quarterly"
+++

# Standard: Roo Commander V8 Directory Structure Overview

## 1. Objective

This document provides a high-level overview and explanation of the standard directory structure used within the Roo Commander V8 workspace. The primary root for this system is the `.roo/` directory at the base of the workspace. Understanding this structure is essential for navigating the project, locating specific components (modes, rules, templates, documentation, session data, tasks), and contributing to its development in a consistent manner.

All file path references within documentation and system files (e.g., in TOML `related_context` fields or Markdown links) **MUST** adhere to the workspace-root-relative path convention (starting with `.roo/`) as defined in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.

For a raw, detailed tree view of the entire workspace (example generation command: `tree -a -L 4 -I '.git|.DS_Store|node_modules|*.log' > .roo/commander/docs/reference/00-full-workspace-tree.txt`), please refer to:
*   `[.roo/commander/docs/reference/00-full-workspace-tree.txt](.roo/commander/docs/reference/00-full-workspace-tree.txt)`

## 2. Workspace Root (`.roo/`)

The `.roo/` directory at the root of the workspace serves as the primary container for all Roo Code system configurations, mode definitions, operational rules, and runtime data specific to this Commander V8 setup.

*   **`.roo/rules/`**
    *   **Purpose:** Contains **workspace-wide rules** that apply to ALL modes operating within this Roo Code environment. These are foundational standards.
    *   **Examples:**
        *   `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)`
        *   `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`
        *   `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`

*   **`.roo/rules-[mode_slug]/`**
    *   **Purpose:** Contains rules that are specific to a particular AI mode. Each mode has its own such directory. These rules provide the "instant context" for a mode's core operational logic.
    *   **Examples:**
        *   `[BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/rules-roo-commander/](.roo/rules-roo-commander/)` (for `roo-commander` mode)
        *   `[BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/rules-manager-data-product/](.roo/rules-manager-data-product/)` (for `manager-data-product` mode)

*   **`.roo/commander/`**
    *   **Purpose:** The root for all components specifically related to the Roo Commander V8 system itself and its managed workflows (e.g., Data Product Design).

## 3. Key Directories under `.roo/commander/`

The `.roo/commander/` directory further organizes system components:

*   **`docs/`**
    *   **Purpose:** Contains all human-readable documentation for the Roo Commander V8 system.
    *   **Key Subdirectories:**
        *   `architecture/`: System design philosophy, component interactions.
        *   `developer_guides/`: How-to guides for extending and maintaining the system.
        *   `introduction/`: High-level overview, purpose, and goals.
        *   `reference/`: Supporting materials, including `00-full-workspace-tree.txt`.
        *   `standards/`: Definitive documents for conventions, formats, and best practices (like this one, and `01-naming-conventions.md`).
        *   `user_guides/`: (If applicable) Guides for end-users interacting with `roo-commander`.

*   **`modes/`**
    *   **Purpose:** Contains the definitions for all AI modes.
    *   **Structure:** Each mode has its own subdirectory named after its slug (e.g., `roo-commander/`, `manager-data-product/`, `data-product-strategist/`).
    *   **Inside each `[mode_slug]/` directory:**
        *   `[mode_slug].mode.md`: The core TOML+Markdown definition file for the mode.
        *   `kb/`: The mode's dedicated Knowledge Base.
            *   `README.md`: Index for the KB.
            *   `prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`: Standard subdirectories for organizing KB content. (See `[BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`).

*   **`sessions/`**
    *   **Purpose:** Stores all data related to individual work sessions initiated by `roo-commander`.
    *   **Structure:** Each session gets its own subdirectory: `SESSION-[Goal]-[Timestamp]/`.
    *   **Inside each session directory:**
        *   `session_log.md`: The main TOML+Markdown log for the session.
        *   `artifacts/`: Subdirectory for all notes, design documents, and other files related to the session, organized into further standard subdirectories (e.g., `notes/`, `design_outputs/`, `learnings/`). (See `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`).

*   **`tasks/`**
    *   **Purpose:** Central repository for all MDTM (Markdown-Driven Task Management) files.
    *   **Structure:** May contain subdirectories to organize tasks (e.g., by project, by Manager mode `[manager_slug]/`, or by status).
    *   **Naming:** `TASK-[PREFIX_CAPS]-[Timestamp].md`. (See `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`).

*   **`templates/`**
    *   **Purpose:** Contains all standard TOML+Markdown templates for creating consistent documents.
    *   **Key Subdirectories:**
        *   `docs/`: Templates for standards documents, developer guides.
        *   `modes/`: Templates for mode archetypes (`common/kb/`, `orchestrator/`, `manager/`, `squad/`) and their KB READMEs.
        *   `rules/`: Templates for workspace rules and various types of mode-specific rules.
        *   `sessions/`: Templates for session logs and session artifact types.
        *   `tasks/`: Template for the generic MDTM task file.
        *   `design_artifacts/`: Templates for specific outputs of design squads (e.g., `data_product/`).

*   **Other Potential Top-Level Directories under `.roo/commander/` (as seen in tree):**
    *   **`archive/`**: For historical/deprecated files.
    *   **`builds/`**: For build outputs.
    *   **`config/`**: For global system configurations.
    *   **`context/`**: For workspace-level shared context (not mode-specific KBs).
    *   **`decisions/`**: For Architecture Decision Records (ADRs).
    *   **`mcp-servers/`**: For MCP server related configurations/documentation.
    *   **`scripts/`**: For utility scripts.
    *   **`tmp/`**: For temporary, non-versioned files (should be in `.gitignore`).
    *   *(The specific usage conventions for these directories should be further defined if they become actively used parts of the core workflow.)*

## 4. General Principles

*   **Clarity & Consistency:** Directory and file names **MUST** be descriptive and follow `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.
*   **Modularity:** The structure supports the "Orchestrator -> Manager -> Squad" architecture.
*   **Discoverability:** `README.md` files within key directories (especially KBs) and this document serve as primary guides.

This directory structure provides a scalable and organized foundation for Roo Commander V8 and its associated components.