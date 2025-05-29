# Documentation: Template `template_04_squad_design_summary_and_blueprint.md`

## 1. Purpose

This template is used during the **Squad Planning & Design phase** to create a **Squad Design Summary & Blueprint document**. This is the culminating document of the planning process, designed to:

*   Consolidate and summarize key information from all previously filled-out planning templates:
    *   `template_00_squad_concept_and_mission.md`
    *   Multiple `template_01_squad_member_role_definition.md` files
    *   `template_02_squad_workflow_and_artifact_flow.md`
    *   `template_03_squad_knowledge_and_research_plan.md`
*   Provide a single, high-level overview of the proposed new "Manager + Squad" unit.
*   Serve as a final review and approval document before actual development of the new modes, rules, and KBs begins.
*   Act as a guiding blueprint for the development team, particularly for modes like `meta-mode-developer`.

## 2. Usage

1.  **Context:** This template is used *after* all other squad planning documents (Concept/Mission, Role Definitions, Workflow, Research Plan) have been drafted and are reasonably stable.
2.  **Copy Template:**
    *   An agent (like `architect-squad-designer`) or a human developer will copy `[.roo/commander/templates/planning/squad_design/template_04_squad_design_summary_and_blueprint.md](.roo/commander/templates/planning/squad_design/template_04_squad_design_summary_and_blueprint.md)` into the new squad's planning directory.
3.  **Rename File:** Rename it descriptively (e.g., `04_blueprint_data_product_squad.md`).
4.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[SquadUnitNameShort]`, `[Squad Unit Name]`, `[squad_name_tag]`) with actual values.
    *   `squad_unit_name` **MUST** match the name used in other planning docs.
    *   **Crucially, populate `linked_squad_concept_doc`, `linked_squad_member_role_docs`, `linked_workflow_doc`, and `linked_research_plan_doc`** with the correct, full `.roo/` anchored paths to all the detailed planning documents this summary is based on.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Fill in optional summary fields in TOML (`overall_mission_summary`, `number_of_squad_members`, etc.) by extracting key information from the linked documents, or remove these optional fields.
5.  **Synthesize Content in Markdown Body (of the instance file):**
    *   Replace all `{{ ... }}` and `[ ... ]` placeholders with specific information.
    *   **Section 2 (Links to Detailed Planning Docs):** Ensure all links are correct and use the `.roo/` anchor.
    *   **Sections 3-6:** Carefully summarize the key information from the detailed planning documents. The goal is a concise overview; readers should refer to the linked detailed documents for specifics.
    *   **Section 7 (Proposed Next Steps):** Outline the path from this blueprint to actual development, referencing relevant developer guides.

## 3. TOML Frontmatter Schema (for an instance of `template_04_squad_design_summary_and_blueprint.md`)

*   **`id` (String, Required):** Unique ID for this blueprint document.
    *   *Convention:* `SQUAD-BLUEPRINT-[SquadUnitNameShort]-[YYYYMMDD]`
    *   *Placeholder in template:* `"SQUAD-BLUEPRINT-[SquadUnitNameShort]-[YYYYMMDD]"`
*   **`title` (String, Required):** Title of the blueprint.
    *   *Placeholder in template:* `"Squad Design Summary & Blueprint: [Squad Unit Name]"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"proposed"`, `"under-review"`, `"approved-for-development"`, `"archived"`
*   **`created_date` (String, Required):** Date of creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this blueprint document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"squad-planning"`, `"design-summary"`, `"blueprint"`, `"orchestration-design"`. Add a squad name tag.
    *   *Placeholder in template:* `["squad-planning", "design-summary", "blueprint", "orchestration-design", "[squad_name_tag]"]`
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/planning/squad_design/template_04_squad_design_summary_and_blueprint.README.md"`

### Squad & Blueprint Identification (TOML)

*   **`squad_unit_name` (String, Required):** Full name of the Squad Unit.
    *   *Placeholder in template:* `"[Full Name of the Squad Unit]"`
*   `proposed_managing_mode_slug` (String, Recommended): Slug of the proposed Manager mode.
    *   *Placeholder in template:* `"[proposed_managing_mode_slug from 00_squad_concept_and_mission.md]"`
*   `version_of_planning_inputs` (String, Recommended): Version of the input planning documents this summary is based on.
    *   *Placeholder in template:* `"1.0"`

### Links to Detailed Planning Documents (TOML - CRITICAL)

*   **`linked_squad_concept_doc` (String, Required):** Workspace-root-relative path to the filled `00_squad_concept_and_mission.md`.
    *   *Placeholder in template:* `"[.roo/path/to/the_filled_00_squad_concept_and_mission.md]"`
*   **`linked_squad_member_role_docs` (Array of Strings, Required):** List of workspace-root-relative paths to all filled `01_squad_member_role_definition.md` files.
    *   *Placeholder in template shows examples.*
*   **`linked_workflow_doc` (String, Required):** Workspace-root-relative path to the filled `02_squad_workflow_and_artifact_flow.md`.
    *   *Placeholder in template:* `"[.roo/path/to/the_filled_02_squad_workflow_and_artifact_flow.md]"`
*   **`linked_research_plan_doc` (String, Required):** Workspace-root-relative path to the filled `03_squad_knowledge_and_research_plan.md`.
    *   *Placeholder in template:* `"[.roo/path/to/the_filled_03_squad_knowledge_and_research_plan.md]"`

### Key Summary Points (TOML - Optional, for quick parsing)

*   `overall_mission_summary` (String, Optional, Multiline): 1-2 sentence summary of mission.
    *   *Placeholder in template:* `"[1-2 sentence summary of mission from concept doc. Or remove field.]"`
*   `number_of_squad_members` (Integer, Optional): Total count, to be filled based on `linked_squad_member_role_docs`.
    *   *Placeholder in template:* `0`
*   `key_workflow_output` (String, Optional, Multiline): Final deliverable from workflow.
    *   *Placeholder in template:* `"[Final deliverable from workflow doc. Or remove field.]"`
*   `primary_research_focus_areas` (Array of Strings, Optional): Main research topics from research plan.
    *   *Placeholder in template shows examples and indicates it can be removed.*

## 4. Markdown Body Structure (for an instance of `template_04_squad_design_summary_and_blueprint.md`)

*   `# Squad Design Summary & Blueprint: {{ squad_unit_name }}`: Main title.
*   `## 1. Overview & Purpose of this Blueprint 📜`: Explains the document's role.
*   `## 2. Links to Detailed Planning Documents 🔗`: **Crucial section** listing `.roo/` anchored paths to all source planning files.
*   `## 3. Executive Summary of the Squad Unit 🚀`: High-level mission and primary output.
*   `## 4. Squad Composition Summary 🧑‍🤝‍🧑`: Table summarizing proposed squad members and roles.
*   `## 5. Workflow & Artifact Flow Overview 🔄`: Brief description and optional visual (Mermaid) of the squad's workflow, referencing the detailed workflow document.
*   `## 6. Key Knowledge & Research Requirements Summary 📚`: Highlights critical knowledge needs and MCP use, referencing the detailed research plan.
*   `## 7. Proposed Next Steps for Development 🛠️`: Path from this blueprint to mode creation, referencing relevant developer guides.

This template provides a final consolidation point for the squad design phase, ensuring all planning efforts are summarized and actionable for subsequent development, with all paths correctly anchored.