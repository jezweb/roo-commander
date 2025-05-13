# README: Squad Planning & Design Templates

## 1. Purpose

This directory (`.roo/commander/templates/planning/squad_design/`) contains a suite of TOML+Markdown templates designed to facilitate the **planning and conceptual design of new "Manager + Squad" units** within the Roo Commander V8 ecosystem.

Before creating the actual mode definition files (`.mode.md`), rules, and detailed Knowledge Base (KB) articles for a new Manager and its specialist Squad Members, these planning templates should be used to:

*   Clearly define the mission, scope, and value proposition of the new unit.
*   Detail the roles, responsibilities, inputs, and outputs of each proposed Squad Member.
*   Map out the operational workflow and artifact flow between Squad Members.
*   Identify and plan for necessary knowledge acquisition and research, including potential use of MCP tools.
*   Consolidate these planning efforts into a single "Squad Design Summary & Blueprint" document.

Using these templates ensures a structured, thoughtful, and well-documented approach to extending Roo Commander V8 with new capabilities.

## 2. Overview of Planning Templates

The following templates are provided in this directory. They are typically used in sequence:

1.  **`template_00_squad_concept_and_mission.md`**
    *   **Purpose:** To define the high-level concept, mission, value proposition, and target output of the new Manager + Squad unit.
    *   **Output:** One filled instance of this template per new squad unit.
    *   **Schema Doc:** `template_00_squad_concept_and_mission.README.md`

2.  **`template_01_squad_member_role_definition.md`**
    *   **Purpose:** To define the specific role, responsibilities, core skills, inputs, and outputs for *each individual Squad Member* within the new unit.
    *   **Output:** Multiple filled instances of this template (one for each proposed squad member).
    *   **Schema Doc:** `template_01_squad_member_role_definition.README.md`

3.  **`template_02_squad_workflow_and_artifact_flow.md`**
    *   **Purpose:** To map out the sequential workflow of the squad, detailing how tasks and artifacts flow between members to achieve the unit's overall goal.
    *   **Output:** One filled instance of this template per new squad unit.
    *   **Schema Doc:** `template_02_squad_workflow_and_artifact_flow.README.md`

4.  **`template_03_squad_knowledge_and_research_plan.md`**
    *   **Purpose:** To identify key knowledge domains required by the squad and plan for initial knowledge gathering or research, including the potential use of MCP tools or analysis of existing resources.
    *   **Output:** One filled instance of this template per new squad unit.
    *   **Schema Doc:** `template_03_squad_knowledge_and_research_plan.README.md`

5.  **`template_04_squad_design_summary_and_blueprint.md`**
    *   **Purpose:** To create a consolidated summary of all the preceding planning documents, serving as the final blueprint before commencing the actual development of the new Manager and Squad modes.
    *   **Output:** One filled instance of this template per new squad unit, linking to all other filled planning documents.
    *   **Schema Doc:** `template_04_squad_design_summary_and_blueprint.README.md`

## 3. How to Use These Templates

1.  **Initiate Planning:** When a new Manager + Squad unit is envisioned, start by creating a dedicated planning directory (e.g., `.roo/commander/planning/squad_designs/new_web_app_squad/`).
2.  **Copy & Fill Templates:**
    *   Copy `template_00_squad_concept_and_mission.md` into your planning directory and fill it out.
    *   For each identified squad member, copy `template_01_squad_member_role_definition.md` and fill it out.
    *   Copy and fill out `template_02_squad_workflow_and_artifact_flow.md`.
    *   Copy and fill out `template_03_squad_knowledge_and_research_plan.md`.
3.  **Review and Iterate:** The process of filling these templates is often iterative. Insights from one document may lead to refinements in others.
4.  **Consolidate:** Once the initial set of planning documents is reasonably complete, copy `template_04_squad_design_summary_and_blueprint.md` and use it to synthesize the key information from the other documents into a final blueprint.
5.  **Proceed to Development:** This final blueprint then serves as the primary input for creating the actual `.mode.md` files, rules, and KBs for the new Manager and its Squad Members, using the mode archetype templates found in `.roo/commander/templates/modes/`.

## 4. Contribution & Maintenance

*   These planning templates themselves should be maintained and updated if the core architectural patterns of Roo Commander V8 (e.g., the "Manager + Squad" model) evolve.
*   Suggestions for improving these templates or adding new ones relevant to squad design are welcome.

By utilizing this structured planning framework, we can ensure that new capabilities are added to Roo Commander V8 in a thoughtful, well-documented, and consistent manner.