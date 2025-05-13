# Developer Guide: Onboarding a New "Manager + Squad" Unit

## 1. Introduction

This guide outlines the comprehensive process for extending the Roo Commander V8 system by adding a new **"Manager + Squad" unit**. This architectural pattern allows Roo Commander to orchestrate new types of complex, domain-specific workflows (e.g., "Web Application Development," "Cloud Infrastructure Deployment," "Scientific Research Pipeline") beyond the initial "Data Product PoC Design" capability.

Onboarding a new unit involves defining:
1.  A new **Manager mode** responsible for orchestrating the new domain's workflow.
2.  A new **Squad** of specialist worker modes that the Manager will direct.
3.  The necessary configurations to make `roo-commander` aware of and able to delegate to this new Manager.

This guide provides a checklist and references to more detailed developer guides for each step.

**Prerequisites:**
*   A clear definition of the new domain/workflow the Manager + Squad unit will handle.
*   Familiarity with all Roo Commander V8 architectural principles, standards, and existing developer guides.

## 2. Overall Workflow for Onboarding a New Unit

The process can be broken down into the following major phases:

1.  **Phase 1: Design and Define the Squad Members.**
2.  **Phase 2: Design and Define the Manager Mode.**
3.  **Phase 3: Integrate the New Manager with `roo-commander`.**
4.  **Phase 4: Testing and Iteration.**

## 3. Phase 1: Design and Define the Squad Members

For each specialist Squad Member mode required for the new workflow:

*   **3.1. Define Role & Responsibilities:**
    *   Clearly articulate the Squad Member's specific expertise, the primary task it performs, its key inputs, and its primary output artifact.
    *   Determine the standard template it will use for its output artifact (either an existing one from `.roo/commander/templates/design_artifacts/` or a new one if needed – see Guide `[.roo/commander/docs/developer_guides/08_creating_and_managing_system_templates.md](.roo/commander/docs/developer_guides/08_creating_and_managing_system_templates.md)`).
*   **3.2. Create Squad Member Mode Files:**
    *   Follow the detailed instructions in **`[.roo/commander/docs/developer_guides/02_creating_new_squad_member_modes.md](.roo/commander/docs/developer_guides/02_creating_new_squad_member_modes.md)`**. This includes:
        *   Creating the mode directory: `.roo/commander/modes/[squad_member_slug]/`
        *   Creating and populating `[squad_member_slug].mode.md` (using `.roo/commander/templates/modes/squad/template_00_squad.mode.md`).
        *   Creating its rule directory: `.roo/rules-[squad_member_slug]/`
        *   Creating its core principles & KB lookup rule: `00-[squad_member_slug]-core-principles.md` (using `.roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.md`).
        *   Creating its KB directory: `kb/`
        *   Creating its KB `README.md` (using `.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md`).
        *   Populating its KB with any essential initial `skills/`, `wisdom/`, or `reference/` articles (using the respective KB article templates).

## 4. Phase 2: Design and Define the Manager Mode

Once the squad members are defined (or at least their roles and expected I/O are clear):

*   **4.1. Define Manager Role & Workflow:**
    *   Clearly articulate the Manager's domain of responsibility (e.g., "End-to-end Web Application Scaffolding").
    *   Outline the sequence of operations it will orchestrate, including which squad member handles each step and how artifacts flow between them.
*   **4.2. Create Manager Mode Files:**
    *   Follow the detailed instructions in **`[.roo/commander/docs/developer_guides/01_creating_new_manager_modes.md](.roo/commander/docs/developer_guides/01_creating_new_manager_modes.md)`**. This includes:
        *   Creating the mode directory: `.roo/commander/modes/[manager_slug]/`
        *   Creating and populating `[manager_slug].mode.md` (using `.roo/commander/templates/modes/manager/template_00_manager.md`). Ensure its `[metadata].delegate_to` lists all its squad members.
        *   Creating its rule directory: `.roo/rules-[manager_slug]/`
        *   Creating its core principles & KB lookup rule: `00-[manager_slug]-core-principles.md` (using `.roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.md`).
        *   Creating its squad orchestration rule: `01-[manager_slug]-squad-orchestration.md` (using `.roo/commander/templates/rules/mode_specific/manager/template_01_manager_squad_orchestration_rule.md`).
        *   Creating its KB directory: `kb/`
        *   Creating its KB `README.md` (using `.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md`).
        *   **Crucially, populating its KB with:**
            *   `kb/procedures/01-main-orchestration-flow.md` (using `.roo/commander/templates/modes/manager/kb/template_01_manager_orchestration_flow.md`): This details the step-by-step logic for how it calls its squad members.
            *   `kb/reference/00-squad-composition.md` (using `.roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.md`): This lists its squad members, their roles, and I/O.
            *   Any necessary `examples/`, `skills/`, or `wisdom/` articles for the Manager itself.

## 5. Phase 3: Integrate the New Manager with `roo-commander`

Make `roo-commander` aware of and able to delegate to your new Manager mode:

*   **5.1. Update `roo-commander`'s Knowledge Base:**
    *   Follow the detailed instructions in **`[.roo/commander/docs/developer_guides/03_extending_roo_commander_kb.md](.roo/commander/docs/developer_guides/03_extending_roo_commander_kb.md)`**. This involves:
        *   Editing `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md` to add an entry for your new Manager (user-facing workflow description, its slug, brief domain, typical goal).
        *   (Optional, but usually not needed for new managers) Considering if `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md` needs a new top-level entry. Usually, new managers are accessed via the "Start New Design / Workflow Session..." option, which then consults the `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`.
*   **5.2. Update `roo-commander`'s Mode Definition:**
    *   Edit `.roo/commander/modes/roo-commander/roo-commander.mode.md`.
    *   Add the slug of your new Manager mode to the `[metadata].delegate_to` array in `roo-commander`'s TOML frontmatter.

## 6. Phase 4: Testing and Iteration

Thorough testing is essential:

1.  **Squad Member "Unit" Testing:**
    *   Manually craft example MDTM tasks that each Squad Member would receive from the new Manager.
    *   Invoke each Squad Member directly with its sample task and verify it produces the correct output artifact and updates its MDTM task file appropriately.
    *   (Refer to the upcoming `.roo/commander/docs/developer_guides/11_testing_and_debugging_strategies_for_modes.md` for more details).
2.  **Manager Orchestration Testing:**
    *   Manually craft an example top-level MDTM task that the new Manager would receive from `roo-commander`.
    *   Invoke the new Manager directly with this task.
    *   Observe if it correctly:
        *   Plans its workflow.
        *   Creates and delegates MDTM sub-tasks to its Squad Members in the correct sequence.
        *   Manages the flow of artifacts.
        *   Updates its own MDTM task.
        *   Reports completion.
3.  **End-to-End Testing (via `roo-commander`):**
    *   Initiate an interaction with `@roo-commander`.
    *   Select the option that should trigger your new Manager's workflow.
    *   Verify that `roo-commander` correctly delegates to your new Manager.
    *   Observe the full workflow execution through the Manager and its Squad.
    *   Check the session log and all created artifacts for correctness and completeness.
4.  **Iterate:** Based on testing, refine the system prompts, rules, KB articles, and MDTM task structures for all involved modes until the new Manager + Squad unit operates reliably and efficiently.

## 7. Documentation Updates

*   Ensure your new Manager and Squad Member modes have complete documentation in their respective `.mode.md` files.
*   Update the `[.roo/commander/docs/developer_guides/04_template_overview.md](.roo/commander/docs/developer_guides/04_template_overview.md)` if you created any new *globally reusable* template types during this process (unlikely if you used existing templates for artifacts).
*   Update the main project `README.md` or other high-level documentation to mention the new capability provided by this Manager + Squad unit.

By following this comprehensive onboarding process, you can systematically add new, complex workflow capabilities to the Roo Commander V8 system in a modular and maintainable way.