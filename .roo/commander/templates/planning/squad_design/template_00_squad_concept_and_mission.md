+++
# --- Squad Planning: Concept & Mission ---
id = "SQUAD-CONCEPT-[SquadUnitNameShort]-[YYYYMMDD]" # e.g., SQUAD-CONCEPT-WEBAPP-20250719
title = "Squad Concept & Mission: [Full Name of New Squad Unit]"
status = "draft" # Options: draft, proposed, under-review, approved
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0" # Version of this planning document
tags = ["squad-planning", "concept", "mission", "value-proposition", "[domain-tag]"] # e.g., "web-development", "data-analytics"
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_00_squad_concept_and_mission.README.md"

# --- Squad Unit Definition ---
squad_unit_name = "[Full Name of the New Manager + Squad Unit, e.g., Web Application Development Unit]"
# proposed_managing_mode_slug = "manager-[domain_slug]" # e.g., "manager-web-app-dev"
# proposed_managing_mode_name = "[Proposed Name for the Manager Mode, e.g., 🧑‍💻 Web Application Development Manager]"
# primary_domain_focus = "[Brief description of the core domain this unit will address, e.g., Building and deploying new web applications]"

# --- Strategic Alignment ---
# aligns_with_overall_system_goal = "[Which high-level goal of Roo Commander V8 or the broader project does this new unit support?]"
# solves_specific_user_problem = "[Describe the primary user problem or need this unit will address.]"
# key_stakeholders_or_beneficiaries = ["[e.g., End-users of generated applications, Developers using the squad, Product Owners]"]

# --- Value & Output ---
# primary_value_proposition = "[What is the main value this squad unit will deliver?]"
# target_primary_output_of_unit = "[What is the ultimate, tangible deliverable from this entire squad unit's workflow? e.g., 'A deployed static website', 'A functional API backend', 'A comprehensive market analysis report']"
# key_success_metrics_for_unit = [ # How will we know this squad unit is successful?
#    "Metric 1: e.g., Time to deliver a basic [target_primary_output]",
#    "Metric 2: e.g., User satisfaction with the [target_primary_output]",
#    "Metric 3: e.g., Reduction in manual effort for X by Y%"
# ]
+++

# Squad Concept & Mission: {{ squad_unit_name | default: "[Specify Squad Unit Name]" }}

## 1. Overview & Purpose 🎯

*   **Squad Unit Name:** `{{ squad_unit_name | default: "[Specify Squad Unit Name]" }}`
*   **Proposed Managing Mode:** `{{ proposed_managing_mode_name | default: "[Proposed Manager Name]" }}` (`{{ proposed_managing_mode_slug | default: "[manager-slug]" }}`)
*   **Primary Domain Focus:** `{{ primary_domain_focus | default: "[Describe core domain]" }}`
*   **Purpose of this Document:** To define the foundational concept, mission, strategic alignment, and value proposition for the proposed `[Squad Unit Name]`. This document serves as the starting point for designing this new capability within the Roo Commander V8 ecosystem.

## 2. Mission Statement 🚀

[Provide a clear and concise mission statement for this Manager + Squad unit. What is its overarching goal and reason for existence within the system?]

## 3. Problem/Opportunity Addressed 🤔

*   **User/System Problem Solved:** `{{ solves_specific_user_problem | default: "[Detail the specific problem or unmet need this unit will address.]" }}`
*   **Opportunity:** [What new opportunities does this unit enable? What capabilities will it unlock?]

## 4. Core Capabilities of the Unit ✨

[List the primary capabilities or services this Manager + Squad unit will provide. What complex tasks will it be able to accomplish through the coordinated efforts of its Manager and Squad members?]
*   Capability 1:
*   Capability 2:
*   ...

## 5. Target Users / Beneficiaries 👥

*   Who are the primary users or beneficiaries of the outputs produced by this squad unit?
*   `{{ key_stakeholders_or_beneficiaries | default: "[List key stakeholders or user groups]" }}`

## 6. Strategic Alignment 🔗

*   How does the mission and capabilities of this proposed squad unit align with the broader goals of Roo Commander V8 or the projects it supports?
*   `{{ aligns_with_overall_system_goal | default: "[Explain alignment]" }}`

## 7. Value Proposition & Key Outputs 🌟

*   **Primary Value Proposition:** `{{ primary_value_proposition | default: "[What is the unique value delivered by this unit? Why is it important?]" }}`
*   **Target Primary Output of the Unit:** `{{ target_primary_output_of_unit | default: "[Describe the main tangible deliverable]" }}`
    *   [Add more detail about the characteristics or quality expected of this primary output.]

## 8. High-Level Success Metrics for the Unit 📈

[How will the overall success and effectiveness of this Manager + Squad unit be measured once it's operational? These are not for a single PoC, but for the unit's ongoing contribution.]
*   *(Corresponds to `key_success_metrics_for_unit` in TOML)*
    *   Metric 1:
    *   Metric 2:
    *   ...

## 9. Initial Assumptions & Dependencies (Conceptual) 📝

*   **Key Assumptions:** [List any high-level assumptions being made in proposing this squad unit (e.g., availability of certain core Roo Code features, feasibility of AI specialization for the roles).]
*   **Potential Dependencies:** [Are there other existing modes, workspace standards, or external tools this unit might depend on conceptually?]

## 10. Next Steps in Squad Design ➡️

*   Define individual Squad Member Roles (using `template_01_squad_member_role_definition.md`).
*   Map out the Squad Workflow and Artifact Flow (using `template_02_squad_workflow_and_artifact_flow.md`).
*   Plan Knowledge Acquisition and Research (using `template_03_squad_knowledge_and_research_plan.md`).
*   Consolidate into a Squad Design Summary & Blueprint (using `template_04_squad_design_summary_and_blueprint.md`).