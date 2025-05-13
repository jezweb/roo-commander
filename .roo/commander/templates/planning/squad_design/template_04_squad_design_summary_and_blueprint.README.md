# Documentation: Template `template_04_squad_design_summary_and_blueprint.md`

## 1. Purpose

This template is used during the **Squad Planning & Design phase** to create a **Squad Design Summary & Blueprint document**. This is the culminating document of the planning process, designed to:

*   Consolidate and summarize key information from all previously filled-out planning templates (`00_squad_concept_and_mission.md`, `01_squad_member_role_definition.md` (multiple), `02_squad_workflow_and_artifact_flow.md`, and `03_squad_knowledge_and_research_plan.md`).
*   Provide a single, high-level overview of the proposed new "Manager + Squad" unit.
*   Serve as a final review and approval document before actual development of the new modes, rules, and KBs begins.
*   Act as a guiding blueprint for the development team.

## 2. Usage

1.  **Context:** This template is used *after* all other squad planning documents (Concept/Mission, Role Definitions, Workflow, Research Plan) have been drafted and are reasonably stable.
2.  **Copy Template:**
    *   Copy `[.roo/commander/templates/planning/squad_design/template_04_squad_design_summary_and_blueprint.md](.roo/commander/templates/planning/squad_design/template_04_squad_design_summary_and_blueprint.md)` into the new squad's planning directory.
3.  **Rename File:** Rename it descriptively (e.g., `04_blueprint_web_app_squad.md`).
4.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique ID for this blueprint document.
    *   `title`: `Squad Design Summary & Blueprint: [Squad Unit Name]`.
    *   `squad_unit_name`: Must match the name used in other planning docs.
    *   **Crucially, populate `linked_planning_docs`** with the correct paths to all the detailed planning documents this summary is based on.
    *   Summarize key points in optional TOML fields like `overall_mission_summary`, `number_of_squad_members`, etc.
5.  **Synthesize Content in Markdown Body:**
    *   Replace all bracketed placeholders.
    *   **Section 2 (Links to Detailed Planning Docs):** Ensure all links are correct.
    *   **Sections 3-6:** Carefully summarize the key information from the detailed planning documents. The goal is a concise overview, not a full replication. Readers should be able to refer to the linked detailed documents for specifics.
    *   **Section 7 (Proposed Next Steps):** Outline the path from this blueprint to actual development.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `SQUAD-BLUEPRINT-[SquadUnitNameShort]-[YYYYMMDD]`.
*   **`title` (String, Required):** Title: `"Squad Design Summary & Blueprint: [Squad Unit Name]"`.
*   **`status` (String, Required):** Lifecycle status (e.g., `"draft"`, `"proposed"`, `"approved-for-development"`).
*   **`created_date` (String, Required):** Date of creation.
*   **`updated_date` (String, Required):** Date of last update.
*   **`version` (String, Required):** Version of this blueprint document.
*   **`tags` (Array of Strings, Required):** Include `"squad-planning"`, `"design-summary"`, `"blueprint"`, `"[squad_name_tag]"`.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/planning/squad_design/template_04_squad_design_summary_and_blueprint.README.md"`

### Squad & Blueprint Identification (TOML)

*   **`squad_unit_name` (String, Required):** Full name of the Squad Unit.
*   `proposed_managing_mode_slug` (String, Optional but Recommended): Slug of the proposed Manager mode.
*   `version_of_planning_inputs` (String, Optional): Version of the input planning documents this summary is based on.

### Links to Detailed Planning Documents (TOML - CRITICAL)

*   **`linked_squad_concept_doc` (String, Required):** Path to the filled `00_squad_concept_and_mission.md`.
*   **`linked_squad_member_role_docs` (Array of Strings, Required):** List of paths to all filled `01_squad_member_role_definition.md` files.
*   **`linked_workflow_doc` (String, Required):** Path to the filled `02_squad_workflow_and_artifact_flow.md`.
*   **`linked_research_plan_doc` (String, Required):** Path to the filled `03_squad_knowledge_and_research_plan.md`.

### Key Summary Points (TOML - Optional, for quick parsing)

*   `overall_mission_summary` (String, Optional): 1-2 sentence summary of mission.
*   `number_of_squad_members` (Integer, Optional): Total count.
*   `key_workflow_output` (String, Optional): Final deliverable from workflow.
*   `primary_research_focus_areas` (Array of Strings, Optional): Main research topics.

## 4. Markdown Body Structure

*   `# Squad Design Summary & Blueprint: {{ squad_unit_name }}`: Main title.
*   `## 1. Overview & Purpose of this Blueprint`: Explains the document's role.
*   `## 2. Links to Detailed Planning Documents`: **Crucial section** listing paths to all source planning files.
*   `## 3. Executive Summary of the Squad Unit`: High-level mission and primary output.
*   `## 4. Squad Composition Summary`: Table summarizing proposed squad members and roles.
*   `## 5. Workflow & Artifact Flow Overview`: Brief description and optional visual (Mermaid) of the squad's workflow.
*   `## 6. Key Knowledge & Research Requirements Summary`: Highlights critical knowledge needs and MCP use.
*   `## 7. Proposed Next Steps for Development`: Path from this blueprint to mode creation.

This template provides a final consolidation point for the squad design phase, ensuring all planning efforts are summarized and actionable for subsequent development.