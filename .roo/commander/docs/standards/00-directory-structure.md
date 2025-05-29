+++
# --- Basic Metadata ---
id = "STANDARD-DIRECTORY-STRUCTURE-V3"
title = "Standard: Roo Commander Workspace Directory Structure"
context_type = "standards_document"
scope = "Overview and explanation of the standard directory structure for the Roo Commander workspace, anchored at the .roo/ root, and detailing key subdirectories."
target_audience = ["all"] # Developers, AI Modes, System Architects
granularity = "overview"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "3.0"
tags = ["standards", "directory-structure", "file-organization", "workspace", "core", "v8"] # Retaining v8 tag for historical context if desired, or can be removed
related_context = [
    ".roo/commander/docs/standards/01-naming-conventions.md",
    ".roo/commander/docs/reference/00-full-workspace-tree.txt"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Quarterly"
+++

# Standard: Roo Commander Workspace Directory Structure

## 1. Objective

This document provides a high-level overview and explanation of the standard directory structure used within the Roo Commander workspace. The primary root for all Roo Commander specific system files and operational data is the `.roo/` directory at the base of the workspace. Understanding this structure is essential for navigating the project, locating specific components (modes, rules, templates, documentation, session data, tasks), and contributing to its development in a consistent manner.

All file path references within documentation and system files (e.g., in TOML `related_context` fields or Markdown links) **MUST** adhere to the workspace-root-relative path convention (starting with `.roo/`) as defined in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.

For a raw, detailed tree view of the entire workspace, please refer to:
*   `[.roo/commander/docs/reference/00-full-workspace-tree.txt](.roo/commander/docs/reference/00-full-workspace-tree.txt)`

## 2. Workspace Root (`.roo/`)

The `.roo/` directory serves as the primary container for all Roo Commander system configurations, mode definitions, operational rules, and runtime data.

*   **`.roo/rules/`**
    *   **Purpose:** Contains **workspace-wide rules** that apply to ALL modes operating within this Roo Commander environment. These are foundational operational standards.
    *   **Examples:**
        *   `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)`
        *   `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`
        *   `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`

*   **`.roo/rules-[mode_slug]/`** (One directory per mode, at the `.roo/` level)
    *   **Purpose:** Contains rules that are specific to a particular AI mode. Each mode **MUST** have its own such directory if it has mode-specific rules beyond its `.mode.md` definition. These rules provide the "instant context" for a mode's core operational logic and are loaded by Roo Code.
    *   **Key File:** `00-[mode_slug]-core-principles.md` (defines core operational tenets and KB usage).
    *   **Examples:**
        *   `[.roo/rules-roo-commander/](.roo/rules-roo-commander/)`
        *   `[.roo/rules-manager-data-product/](.roo/rules-manager-data-product/)`
        *   `[.roo/rules-data-product-strategist/](.roo/rules-data-product-strategist/)`

*   **`.roo/commander/`**
    *   **Purpose:** The root for all components specifically related to the Roo Commander system itself, its operational artifacts, documentation, and mode definitions.

## 3. Key Directories under `.roo/commander/`

The `.roo/commander/` directory further organizes system components:

*   **`docs/`**
    *   **Purpose:** Contains all human-readable documentation for the Roo Commander system.
    *   **Key Subdirectories:**
        *   `architecture/`: System design philosophy, component interactions.
        *   `developer_guides/`: How-to guides for extending and maintaining the system.
        *   `introduction/`: High-level overview, purpose, and goals.
        *   `planning/`: Design phase documents (e.g., `squad_designs/`, `squad_member_addition/`).
        *   `processes/`: Standard Operating Procedures (SOPs).
        *   `reference/`: Supporting materials (e.g., `00-full-workspace-tree.txt`).
        *   `releases/`: Release notes.
        *   `standards/`: Definitive documents for conventions, formats, and best practices.
        *   `testing/`: Test plans, test cases, and test summary reports.
        *   `todo/`: Temporary or ad-hoc to-do lists or progress notes.
        *   `user_guides/`: Guides for end-users.
        *   `glossary.md`: Definitions of key terms.

*   **`modes/`**
    *   **Purpose:** Contains the definitions for all AI modes specific to Roo Commander.
    *   **Structure:** Each mode has its own subdirectory named after its slug (e.g., `roo-commander/`).
    *   **Inside each `[mode_slug]/` directory:**
        *   `[mode_slug].mode.md`: The core TOML+Markdown definition file for the mode.
        *   `kb/`: The mode's dedicated Knowledge Base (see `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`).

*   **`sessions/`**
    *   **Purpose:** Stores all data related to individual work sessions initiated by `👑 Roo Commander`.
    *   **Structure:** `SESSION-[SanitizedGoal]-[YYYYMMDD-HHMMSS]/`.
    *   **Contents:** `session_log.md` and `artifacts/` directory (see `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`).

*   **`tasks/`**
    *   **Purpose:** Central repository for all MDTM files created by Roo Commander modes.
    *   **Structure:** May contain subdirectories (e.g., by Manager mode `[manager_slug]/`).
    *   **Naming:** `TASK-[PREFIX_CAPS]-[YYYYMMDD-HHMMSS].md`.

*   **`templates/`**
    *   **Purpose:** Contains all standard TOML+Markdown templates.
    *   **Key Subdirectories:** `documentation/`, `feedback/`, `modes/` (with `orchestrator/`, `manager/`, `squad/`, `common/kb/`), `onboarding/`, `planning/`, `processes/`, `project_management/`, `project_root/`, `releases/`, `rules/`, `sessions/`, `tasks/`, `testing/`, `design_artifacts/`.

*   **`scripts/`**
    *   **Purpose:** Utility scripts for the Roo Commander system (e.g., `build_roomodes-v8.js`).

*   **Other Potential Directories under `.roo/commander/` (for specific system needs):**
    *   `archive/`, `builds/`, `config/`, `context/`, `decisions/`, `mcp-servers/`, `tmp/`.

## 4. General Principles

*   **Clarity & Consistency:** Directory and file names **MUST** be descriptive and follow `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.
*   **Modularity:** The structure supports the "Orchestrator -> Manager -> Squad" architecture.
*   **Discoverability:** `README.md` files (see `[.roo/commander/docs/standards/14-readme-files-standard.md](.roo/commander/docs/standards/14-readme-files-standard.md)`) within key directories serve as primary guides.

This directory structure provides a scalable and organized foundation for Roo Commander.