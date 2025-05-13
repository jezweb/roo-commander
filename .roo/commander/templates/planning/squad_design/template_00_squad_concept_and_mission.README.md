# Documentation: Template `template_00_squad_concept_and_mission.md`

## 1. Purpose

This template is the **starting point for designing a new "Manager + Squad" unit** within the Roo Commander V8 ecosystem. Its purpose is to define the high-level concept, mission, strategic alignment, value proposition, and intended primary output for the proposed new unit.

Filling out this document helps to clarify the "why" and "what" before diving into the details of individual squad member roles or specific workflows. It ensures that any new Manager + Squad unit has a clear purpose and aligns with broader system goals.

## 2. Usage

1.  **Initiate New Squad Design:** When a new complex capability domain is identified for Roo Commander V8 that would benefit from a dedicated Manager and specialist Squad:
    *   Create a new planning directory (e.g., `[.roo/commander/planning/squad_designs/new_squad_name/](.roo/commander/planning/squad_designs/new_squad_name/)`).
    *   Copy `[.roo/commander/templates/planning/squad_design/template_00_squad_concept_and_mission.md](.roo/commander/templates/planning/squad_design/template_00_squad_concept_and_mission.md)` into this directory.
2.  **Rename File:** Rename the copied file descriptively (e.g., `00_concept_mission_web_app_squad.md`).
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block.
    *   `id`: Unique ID for this planning document.
    *   `title`: `Squad Concept & Mission: [Full Name of New Squad Unit]`.
    *   `squad_unit_name`: The full intended name for the new unit.
    *   Define `proposed_managing_mode_slug`, `proposed_managing_mode_name`, and `primary_domain_focus`.
    *   Detail strategic alignment, problem solved, value proposition, target output, and success metrics.
    *   Add relevant `tags`.
4.  **Define Concept in Markdown Body:**
    *   Fill in all sections of the Markdown body, elaborating on the TOML fields and providing a clear narrative for the new squad unit's purpose and goals.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID for this planning document. Convention: `SQUAD-CONCEPT-[SquadUnitNameShort]-[YYYYMMDD]`.
*   **`title` (String, Required):** Title: `"Squad Concept & Mission: [Full Name of New Squad Unit]"`.
*   **`status` (String, Required):** Lifecycle status of this planning document (e.g., `"draft"`, `"proposed"`, `"under-review"`, `"approved"`).
*   **`created_date` (String, Required):** Date of creation.
*   **`updated_date` (String, Required):** Date of last update.
*   **`version` (String, Required):** Version of this planning document.
*   **`tags` (Array of Strings, Required):** Include `"squad-planning"`, `"concept"`, `"mission"`, and a tag for the primary domain of the squad.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/planning/squad_design/template_00_squad_concept_and_mission.README.md"`

### Squad Unit Definition (TOML)

*   **`squad_unit_name` (String, Required):** Full descriptive name of the new Manager + Squad unit.
*   `proposed_managing_mode_slug` (String, Optional but Recommended): The intended slug for the Manager mode of this unit.
*   `proposed_managing_mode_name` (String, Optional but Recommended): The intended human-friendly name for the Manager mode.
*   `primary_domain_focus` (String, Optional but Recommended, Multiline): Brief description of the core domain this unit will address.

### Strategic Alignment (TOML)

*   `aligns_with_overall_system_goal` (String, Optional, Multiline): How this unit supports broader system objectives.
*   `solves_specific_user_problem` (String, Optional, Multiline): The primary user problem or need this unit addresses.
*   `key_stakeholders_or_beneficiaries` (Array of Strings, Optional): Who will benefit from this unit's work.

### Value & Output (TOML)

*   `primary_value_proposition` (String, Optional, Multiline): The main value this squad unit will deliver.
*   `target_primary_output_of_unit` (String, Optional, Multiline): The ultimate, tangible deliverable from this unit's entire workflow.
*   `key_success_metrics_for_unit` (Array of Strings, Optional): How the success of the operational squad unit will be measured.

## 4. Markdown Body Structure

*   `# Squad Concept & Mission: {{ squad_unit_name }}`: Main title.
*   `## 1. Overview & Purpose 🎯`: Summarizes the unit, its proposed manager, domain, and document purpose.
*   `## 2. Mission Statement 🚀`: The overarching goal.
*   `## 3. Problem/Opportunity Addressed 🤔`: The "why" behind this unit.
*   `## 4. Core Capabilities of the Unit ✨`: What it will be able to do.
*   `## 5. Target Users / Beneficiaries 👥`: Who it serves.
*   `## 6. Strategic Alignment 🔗`: How it fits into the bigger picture.
*   `## 7. Value Proposition & Key Outputs 🌟`: The benefits it provides and its main deliverable.
*   `## 8. High-Level Success Metrics for the Unit 📈`: How its success will be measured.
*   `## 9. Initial Assumptions & Dependencies (Conceptual) 📝`: Early thoughts on what's assumed or needed.
*   `## 10. Next Steps in Squad Design ➡️`: Points to the subsequent planning documents.

This template provides the first crucial step in a structured design process for new Roo Commander V8 capabilities.