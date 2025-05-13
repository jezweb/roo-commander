# Developer Guide: Overview of System Templates

## 1. Introduction

The Roo Commander V8 system relies heavily on a set of standardized **TOML+Markdown templates** to ensure consistency, maintainability, and interoperability across its various components. These templates provide the foundational structure for:

*   AI Mode Definitions (`.mode.md` files)
*   Workspace and Mode-Specific Rules
*   Knowledge Base (KB) Index Files (`README.md` within KBs)
*   MDTM Task Files
*   Session Logs and Session Artifacts

This document provides an overview of these key templates, their purpose, and where to find them. Each template typically has an accompanying `.README.md` file in its respective template directory that details its specific schema and usage.

**All templates are located under:** `.roo/commander/templates/`

## 2. Mode Definition Templates

These templates are used to create the core `.mode.md` files that define each AI agent in the system. They are located in `.roo/commander/templates/modes/`.

*   **`template_00_mode_orchestrator.mode.md`**
    *   **Purpose:** For defining top-level Orchestrator modes like `roo-commander`.
    *   **Schema Doc:** `.roo/commander/templates/modes/orchestrator/template_00_orchestrator.README.md`

*   **`template_00_mode_manager.mode.md`**
    *   **Purpose:** For defining Manager modes (e.g., `manager-data-product`).
    *   **Schema Doc:** `.roo/commander/templates/modes/manager/template_00_manager.README.md`

*   **`template_00_mode_squad_member.mode.md`**
    *   **Purpose:** For defining specialist Squad Member modes (e.g., `data-product-strategist`).
    *   **Schema Doc:** `.roo/commander/templates/modes/squad/template_00_squad.README.md`

## 3. Rule Templates

These templates are used for creating rule files that govern the behavior of the workspace or specific modes. They are located in `.roo/commander/templates/rules/`.

*   **`template_00_workspace_rule.md`**
    *   **Purpose:** For defining workspace-wide rules that apply to all modes (e.g., standards for TOML+MD format, MDTM usage, session management).
    *   **Location of Instantiated Rules:** `.roo/rules/`
    *   **Schema Doc:** `.roo/commander/templates/rules/workspace/template_00_workspace_rule.README.md`

*   **`template_00_mode_core_principles_rule.md`**
    *   **Purpose:** **This is the foundational rule template for EVERY mode.** It's used to create the `00-[mode_slug]-core-principles.md` file for each mode. This single rule defines both the mode's fundamental operational tenets AND how it consults its own Knowledge Base (KB). This replaces the need for a separate KB lookup rule file per mode.
    *   **Location of Instantiated Rules:** `.roo/commander/modes/[mode_slug]/rules-[mode_slug]/` (e.g., `00-rc-core-principles.md` for `roo-commander`).
    *   **Schema Doc:** `.roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.README.md`

*   **`template_00_mode_specific_rule.md`**
    *   **Purpose:** A generic template for any *additional* operational rules a mode might need beyond its core principles and KB usage.
    *   **Location of Instantiated Rules:** `.roo/commander/modes/[mode_slug]/rules-[mode_slug]/` (e.g., `01-mdp-squad-orchestration.md` for `manager-data-product`).
    *   **Schema Doc:** `.roo/commander/templates/rules/mode_specific/common/template_00_mode_specific_rule.README.md`

*   **`template_01_manager_squad_orchestration_rule.md`**
    *   **Purpose:** A specialized instance of a mode-specific rule, tailored for Manager modes to define their squad orchestration logic. It demonstrates how `template_00_mode_specific_rule.md` can be used for concrete, role-specific rules.
    *   **Location of Instantiated Rules:** `.roo/commander/modes/[manager_slug]/rules-[manager_slug]/`
    *   **Schema Doc:** `.roo/commander/templates/rules/mode_specific/manager/template_01_manager_squad_orchestration_rule.README.md`

## 4. Knowledge Base (KB) Templates

This refers to the template for the main index file (`README.md`) of a mode's KB. Specific content files within a KB (like procedures or skills) are typically created from scratch, adhering to the TOML+MD standard if they contain frontmatter. Templates are located in `.roo/commander/templates/modes/kb/`.

*   **`template_00_mode_kb_readme.md`**
    *   **Purpose:** For creating the main `README.md` (KB Index) file located at the root of every mode's Knowledge Base (`.roo/commander/modes/[mode_slug]/kb/README.md`).
    *   **Schema Doc:** `.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.README.md`

## 5. MDTM Task Template

This is the universal template for all task delegations. Located in `.roo/commander/templates/tasks/`.

*   **`template_00_mdtm_task_generic.md`**
    *   **Purpose:** The standard template for creating all MDTM task files.
    *   **Schema Doc:** `.roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md`

## 6. Session Management Templates

These templates define the structure for session logs and various session artifacts. Located in `.roo/commander/templates/sessions/`.

*   **`template_00_mdtm_session_generic.md`**
    *   **Purpose:** The standard template for the main `session_log.md` file.
    *   **Schema Doc:** `.roo/commander/templates/sessions/template_00_mdtm_session_generic.README.md`

*   **Session Artifact Templates (Located in `.roo/commander/templates/sessions/artifacts/`)**
    *   A suite of templates for various types of contextual notes and records created during a session (e.g., `[.roo/commander/templates/sessions/artifacts/blocker/template_00_session_blocker.md](.roo/commander/templates/sessions/artifacts/blocker/template_00_session_blocker.md)`, `[.roo/commander/templates/sessions/artifacts/note/template_00_session_note.md](.roo/commander/templates/sessions/artifacts/note/template_00_session_note.md)`, etc.). Each has its own `.md` template and `.README.md` schema doc.

## 7. Design Artifact Templates (for `manager-data-product` Squad)

Templates used by the `data-product-*` squad members for their primary deliverables.
*Proposed Location:* `.roo/commander/templates/design_artifacts/data_product/`

*   `BROKEN_LINK_NEEDS_MANUAL_REVIEW_template_product_strategy.md` (and its `.README.md`)
*   `BROKEN_LINK_NEEDS_MANUAL_REVIEW_template_poc_ideation.md` (and its `.README.md`)
*   `[.roo/commander/modes/data-product-ux-persona-architect/kb/reference/01-template_user_persona.md](.roo/commander/modes/data-product-ux-persona-architect/kb/reference/01-template_user_persona.md)` (and its `.README.md`)
*   `BROKEN_LINK_NEEDS_MANUAL_REVIEW_template_simulated_data_schema.md` (and its `.README.md`)
*   `BROKEN_LINK_NEEDS_MANUAL_REVIEW_template_poc_interface_design.md` (and its `.README.md`)
*   `BROKEN_LINK_NEEDS_MANUAL_REVIEW_template_data_product_poc_plan.md` (and its `.README.md`)

## 8. Using Templates

When creating a new component (mode, rule, task, etc.):
1.  Identify the correct template from the list above.
2.  Copy the template `.md` file to the appropriate location.
3.  Rename the file according to established naming conventions (see `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`).
4.  Review the template's accompanying `.README.md` file for its specific TOML schema and content expectations.
5.  Populate your new file accordingly.

Adhering to these templates is essential for a consistent and maintainable Roo Commander V8 ecosystem.