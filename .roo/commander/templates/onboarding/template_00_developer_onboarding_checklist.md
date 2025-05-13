+++
# --- Developer Onboarding Checklist ---
id = "DEV-ONBOARDING-CHECKLIST-V[Version]-[YYYYMMDD]"
title = "Developer Onboarding Checklist: Roo Commander V8 Ecosystem"
status = "template" # This is a template to be copied and used
created_date = "{{YYYYMMDD}}" # Date template was created/updated
version = "1.0" # Version of this checklist template
tags = ["onboarding", "developer", "checklist", "guide", "documentation"]
template_schema_doc = ".roo/commander/templates/docs/template_00_developer_onboarding_checklist.README.md"

# --- Checklist Specifics ---
# target_role = "[e.g., New Mode Developer, System Maintainer]"
# estimated_completion_time = "[e.g., 2-3 days]"
# onboarding_mentor = "[Optional: Name/Role of mentor for the new developer]"
+++

# Developer Onboarding Checklist: Roo Commander V8 Ecosystem

## Welcome!

Welcome to the Roo Commander V8 development team! This checklist is designed to guide you through the essential documentation, standards, and architectural concepts you'll need to understand to contribute effectively.

**Instructions:**
*   Copy this file and rename it (e.g., `[YourName]_onboarding_checklist.md`).
*   Work through each section, reading the linked documents and completing any associated tasks.
*   Check off items as you complete them.
*   Don't hesitate to ask your onboarding mentor or team members questions!

**Onboardee:** `[Your Name]`
**Start Date:** `[Date]`
**(Optional) Mentor:** `{{ onboarding_mentor }}`

## Phase 1: System Overview & Core Concepts (Day 1-2)

*   **Understanding Roo Commander V8:**
    *   `[ ]` Read: Overall Project README (`[.roo/README.md](.roo/README.md)` or main project README).
    *   `[ ]` Read: Introduction to Roo Commander V8 (`[.roo/commander/docs/introduction/01_purpose_and_goals.md](.roo/commander/docs/introduction/01_purpose_and_goals.md)`).
    *   `[ ]` Read: Key Benefits of Roo Commander V8 (`[.roo/commander/docs/introduction/02_key_benefits.md](.roo/commander/docs/introduction/02_key_benefits.md)`).
    *   `[ ]` Read: High-Level Architecture Overview (`[.roo/commander/docs/architecture/README.md](.roo/commander/docs/architecture/README.md)`), focusing on the Orchestrator -> Manager -> Squad model.
*   **Core Workspace Standards:**
    *   `[ ]` Understand: Directory Structure (`[.roo/commander/docs/standards/00-directory-structure.md](.roo/commander/docs/standards/00-directory-structure.md)`).
        *   `[ ]` Review: Raw Workspace Tree (`[.roo/commander/docs/reference/00-full-workspace-tree.txt](.roo/commander/docs/reference/00-full-workspace-tree.txt)`).
    *   `[ ]` Internalize: Naming & Path Referencing Conventions (`[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`). **(CRITICAL)**
    *   `[ ]` Understand: TOML+Markdown Document Format (`[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)` and the formal rule `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)`).
    *   `[ ]` Understand: MDTM Task Files (`[.roo/commander/docs/standards/03-mdtm-task-files.md](.roo/commander/docs/standards/03-mdtm-task-files.md)` and `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`).
    *   `[ ]` Understand: Session Logs & Artifacts (`[.roo/commander/docs/standards/04-session-logs-and-artifacts.md](.roo/commander/docs/standards/04-session-logs-and-artifacts.md)` and `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`).
    *   `[ ]` Understand: KB Structuring Best Practices (`[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`).

## Phase 2: Understanding AI Modes (Day 2-3)

*   **Mode Architecture:**
    *   `[ ]` Read: Mode Definition Files (`.mode.md`) structure (refer to `[.roo/commander/docs/developer_guides/04_template_overview.md](.roo/commander/docs/developer_guides/04_template_overview.md)` and mode archetype template READMEs).
    *   `[ ]` Read: Mode-Specific Rules concept (refer to `[.roo/commander/docs/developer_guides/05_developing_mode_specific_rules.md](.roo/commander/docs/developer_guides/05_developing_mode_specific_rules.md)`).
    *   `[ ]` Read: Mode Knowledge Base (KB) structure (refer to `[.roo/commander/docs/developer_guides/06_populating_mode_kbs.md](.roo/commander/docs/developer_guides/06_populating_mode_kbs.md)`).
*   **Key Modes Deep Dive:**
    *   `[ ]` Review: `roo-commander` (`[.roo/commander/modes/roo-commander/roo-commander.mode.md](.roo/commander/modes/roo-commander/roo-commander.mode.md)` and its linked rules/KB).
    *   `[ ]` Review: `manager-data-product` (`[.roo/commander/modes/manager-data-product/manager-data-product.mode.md](.roo/commander/modes/manager-data-product/manager-data-product.mode.md)` and its linked rules/KB).
    *   `[ ]` Review at least one `data-product-*` Squad Member mode (e.g., `data-product-strategist`).

## Phase 3: Templates & Development Processes (Day 3-4)

*   **System Templates:**
    *   `[ ]` Review: Overview of System Templates (`[.roo/commander/docs/developer_guides/04_template_overview.md](.roo/commander/docs/developer_guides/04_template_overview.md)`).
    *   `[ ]` Familiarize: Location of all templates in `[.roo/commander/templates/](.roo/commander/templates/)`.
*   **Development Workflows:**
    *   `[ ]` Read: Creating New Manager Modes (`[.roo/commander/docs/developer_guides/01_creating_new_manager_modes.md](.roo/commander/docs/developer_guides/01_creating_new_manager_modes.md)`).
    *   `[ ]` Read: Creating New Squad Member Modes (`[.roo/commander/docs/developer_guides/02_creating_new_squad_member_modes.md](.roo/commander/docs/developer_guides/02_creating_new_squad_member_modes.md)`).
    *   `[ ]` Read: Extending `roo-commander` KB for New Managers (`[.roo/commander/docs/developer_guides/03_extending_roo_commander_kb.md](.roo/commander/docs/developer_guides/03_extending_roo_commander_kb.md)`).
    *   `[ ]` Read: Maintaining Workspace Standards & Rules (`[.roo/commander/docs/developer_guides/07_maintaining_workspace_standards_and_rules.md](.roo/commander/docs/developer_guides/07_maintaining_workspace_standards_and_rules.md)`).
    *   `[ ]` Read: Creating & Managing System Templates (`[.roo/commander/docs/developer_guides/08_creating_and_managing_system_templates.md](.roo/commander/docs/developer_guides/08_creating_and_managing_system_templates.md)`).
    *   `[ ]` Read: Onboarding New Manager + Squad Unit (`[.roo/commander/docs/developer_guides/10_onboarding_new_manager_squad_unit.md](.roo/commander/docs/developer_guides/10_onboarding_new_manager_squad_unit.md)`).

## Phase 4: Practical Application & Contribution (Week 2+)

*   `[ ]` Setup local development environment for Roo Commander V8.
*   `[ ]` Identify a small, well-defined "good first task" (e.g., adding a new skill to an existing squad member's KB, drafting a new example file, fixing a minor documentation issue).
    *   Task ID / Description:
*   `[ ]` Complete the task, adhering to all relevant standards and using version control.
*   `[ ]` Participate in a code/documentation review for your first contribution.
*   `[ ]` Discuss next steps and areas of focus with your mentor/team.

## Notes & Questions During Onboarding:

[Use this space to jot down any questions or important notes as you go through the onboarding process.]

---
Welcome aboard! We're excited to have you contributing to Roo Commander V8.