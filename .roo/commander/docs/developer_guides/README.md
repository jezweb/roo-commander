# Roo Commander V8 - Developer Guides

Welcome to the Developer Guides for Roo Commander V8. This section is intended for software engineers, AI developers, and system architects who are looking to:

*   Understand the technical underpinnings of Roo Commander V8.
*   Extend the system by creating new "Manager" or "Squad Member" modes.
*   Modify or maintain existing modes and their Knowledge Bases (KBs).
*   Integrate Roo Commander V8 with other tools or systems.

The guides below provide detailed information on the development process, architectural patterns, and best practices for working with the Roo Commander V8 codebase and its components.

## Available Developer Guides

Please select a guide below to learn more:

1.  **[Creating New Manager Modes](./01_creating_new_manager_modes.md)**
    *   A comprehensive guide on how to design, define, and implement a new "Manager" mode. This includes structuring its `.mode.md` file, developing its core orchestration logic within its Knowledge Base (especially the `procedures/01-main-orchestration-flow.md`), and defining its squad composition.
    *   **Covers:**
        *   Using the `.roo/commander/templates/modes/manager/template_00_manager.md`.
        *   Designing the Manager's primary MDTM task contract.
        *   Structuring the Manager's KB for orchestrating its squad.
        *   Best practices for Manager mode development.

2.  **[Creating New Squad Member Modes](./02_creating_new_squad_member_modes.md)**
    *   Step-by-step instructions for developing new specialist "Squad Member" modes. This guide focuses on defining their specific expertise, their interaction with MDTM sub-tasks assigned by a Manager, and the creation of their primary output artifacts.
    *   **Covers:**
        *   Using the `.roo/commander/templates/modes/squad/template_00_squad.mode.md`.
        *   Defining the Squad Member's role and primary deliverable.
        *   Structuring its (potentially minimal) KB, including `skills/` and `wisdom/` for its expertise.
        *   How Squad Members update their MDTM tasks and report completion.

3.  **[Extending `roo-commander`'s Knowledge Base for New Managers](./03_extending_roo_commander_kb.md)**
    *   Explains the necessary updates to `roo-commander`'s Knowledge Base when a new Manager mode (and its associated high-level workflow) is introduced to the system.
    *   **Covers:**
        *   Updating `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`.
        *   Potentially updating `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md` if the new Manager workflow needs to be a top-level option.
        *   Ensuring `.roo/commander/modes/roo-commander/kb/procedures/01-initiate-manager-delegation.md` can correctly route to the new Manager.

4.  **[Overview of System Templates](./04_template_overview.md)**
    *   A reference guide to all the standard TOML+Markdown templates used within the Roo Commander V8 ecosystem. This includes templates for mode definitions (Orchestrator, Manager, Squad Member), rules (Workspace, Mode-Specific, KB Lookup), Knowledge Base READMEs, MDTM tasks, session logs, and session artifacts.
    *   **Covers:**
        *   Location of templates (`.roo/commander/templates/`).
        *   Purpose of each key template.
        *   Links to their respective `.README.md` schema documentation.

5.  **(Future) Integrating with External Tools & MCP Servers**
    *   (Placeholder for future guides on how modes can safely and effectively interact with Mode Control Protocol (MCP) servers or other external APIs and tools.)

6.  **(Future) Debugging and Testing Modes**
    *   (Placeholder for future guides on best practices for testing individual modes and end-to-end workflows.)

---

This section will grow as the Roo Commander V8 system evolves and as more complex development patterns emerge. Contributions and suggestions for new developer guides are welcome.