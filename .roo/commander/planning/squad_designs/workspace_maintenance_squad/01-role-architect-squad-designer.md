+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-SQDESIGN-20250720" # WSMAINT for Workspace Maintenance, SQDESIGN for Squad Designer
title = "Squad Member Role Definition: Architect Squad Designer for Workspace Maintenance Squad"
status = "draft"
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "architecture", "meta-design"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720"

proposed_mode_slug = "architect-squad-designer"
proposed_mode_name = "🏗️ Architect Squad Designer"
proposed_classification = "specialist" # Requires deep understanding of the system

# --- Core Function & Deliverables ---
core_responsibility_summary = "Guides a user (developer/architect) through the process of planning and designing a new 'Manager + Squad' unit using the standard squad design templates."
primary_output_artifact_description = "A complete set of filled-out squad planning documents (Concept & Mission, Role Definitions, Workflow, Research Plan, and Summary/Blueprint) for a new squad unit."
# primary_output_artifact_template_ref = "" # It USES planning templates, doesn't produce one specific type itself. Its outputs are INSTANCES of those templates.

# --- Skills & Knowledge ---
key_skills_required = [
    "Deep understanding of the 'Manager + Squad' architectural pattern in Roo Commander V8.",
    "Expertise in using all squad planning templates (`.roo/commander/templates/planning/squad_design/`).",
    "Ability to elicit requirements for new squad functionalities.",
    "Skill in breaking down complex workflows into manageable squad member roles.",
    "Understanding of how to define clear inputs, outputs, and responsibilities for AI modes.",
    "Knowledge of how new squads integrate with `roo-commander`."
]
potential_kb_skill_topics = [
    "Guiding Users Through 'Squad Concept & Mission' Definition",
    "Facilitating 'Squad Member Role Definition' Workshops (Conceptual)",
    "Mapping 'Squad Workflow & Artifact Flow'",
    "Developing a 'Squad Knowledge & Research Plan'",
    "Synthesizing Planning Docs into a 'Squad Design Summary & Blueprint'"
]
potential_kb_wisdom_topics = [
    "Principles of Good Squad Design (e.g., Single Responsibility, Clear Handoffs)",
    "Balancing Specialization vs. Generality in Squad Member Roles",
    "Common Pitfalls in Designing New AI Agent Squads"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "User request to design a new Manager + Squad unit for a specific domain/capability.",
    "High-level description of the problem the new squad should solve or the workflow it should manage."
]
downstream_squad_members_dependent_on_output = [
    "meta-mode-developer (will use the output blueprint to scaffold the new modes)",
    "manager-workspace-maintenance (for overseeing the overall process of adding a new squad)"
]
+++

# Squad Member Role Definition: 🏗️ Architect Squad Designer

## 1. Overview

*   **Proposed Mode Name:** `🏗️ Architect Squad Designer`
*   **Proposed Mode Slug:** `architect-squad-designer`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `architect-squad-designer` squad member. This mode will be a specialist in guiding users (typically developers or system architects) through the structured process of planning and designing new "Manager + Squad" units for Roo Commander V8, utilizing the established `squad_design` templates.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Guides a user (developer/architect) through the process of planning and designing a new "Manager + Squad" unit using the standard squad design templates, resulting in a comprehensive blueprint for the new unit.
*   **Detailed Responsibilities:**
    *   Receive a high-level request to design a new squad for a specific purpose or domain.
    *   Systematically guide the user through filling out each of the squad planning templates:
        *   `template_00_squad_concept_and_mission.md`
        *   `template_01_squad_member_role_definition.md` (for each proposed member)
        *   `template_02_squad_workflow_and_artifact_flow.md`
        *   `template_03_squad_knowledge_and_research_plan.md`
        *   `template_04_squad_design_summary_and_blueprint.md`
    *   Ask clarifying questions to help the user articulate the mission, roles, workflow, and knowledge needs of the new squad.
    *   Ensure the planning documents are internally consistent and complete.
    *   Advise on best practices for squad design based on its KB wisdom.

## 3. Primary Output Artifact(s)

*   **Description:** The primary output is a **complete set of filled-out squad planning documents** for the new Manager + Squad unit, stored in a dedicated planning subdirectory (e.g., `[.roo/commander/planning/squad_designs/new_squad_name/](.roo/commander/planning/squad_designs/new_squad_name/)`). This set includes:
    1.  One `00-concept-mission-[new_squad_name].md`
    2.  Multiple `01-role-[new_member_slug].md` files
    3.  One `02-workflow-[new_squad_name].md`
    4.  One `03-research-plan-[new_squad_name].md`
    5.  One `04-blueprint-[new_squad_name].md` (consolidating the above)
*   **Format/Template:** The outputs are instances of the templates located in `[.roo/commander/templates/planning/squad_design/](.roo/commander/templates/planning/squad_design/)`.

## 4. Key Skills & Knowledge Required

*   **Deep understanding of the Roo Commander V8 "Manager + Squad" architectural pattern.**
*   **Expertise in the purpose and usage of all five squad planning templates.**
*   Ability to elicit and structure complex requirements for new AI-driven workflows.
*   Strong analytical skills to help define clear roles, responsibilities, inputs, and outputs for new AI modes.
*   Understanding of how new Manager modes integrate with `roo-commander`.
*   Knowledge of best practices for designing collaborative AI agent systems.

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-facilitating-squad-concept-definition.md`
        *   `02-guiding-squad-member-role-specification.md`
        *   `03-mapping-complex-workflows-for-squads.md`
        *   `04-eliciting-kb-needs-for-new-modes.md`
        *   `05-synthesizing-planning-docs-into-blueprint.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-principles-of-effective-ai-squad-design.md`
        *   `02-common-challenges-in-defining-new-squads.md`
        *   `03-balancing-granularity-and-autonomy-in-squad-roles.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   The user's request to design a new squad.
    *   A high-level description of the new squad's intended purpose or the domain it will cover.
    *   Any initial ideas or requirements from the user.

### 5.2. Downstream Dependencies (Who uses its output?)
*   `meta-mode-developer`: Will take the "Squad Design Summary & Blueprint" (and the detailed planning docs) as the primary specification for scaffolding the actual mode files, rules, and KBs for the new Manager and its Squad members.
*   `manager-workspace-maintenance`: For reviewing and approving the new squad design before development.
*   Human architects and developers.

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt must emphasize its role as a facilitator and guide for the squad *planning* process, using the standard planning templates.
*   It needs to be able to interact extensively with a user (via `manager-workspace-maintenance` as intermediary) to fill out the templates collaboratively.
*   It should be instructed to save the filled-out planning documents to a designated planning area.
*   It needs to understand the structure and purpose of each planning template.

## 7. Open Questions / Further Definition Needed

*   How will this mode handle iterative refinement of the planning documents with the user? (Likely through multiple interactions, updating the docs).
*   What level of "critique" or "suggestion" should it offer during the planning process, versus just being a scribe for the user's ideas? (It should probably offer suggestions based on its KB wisdom about good squad design).