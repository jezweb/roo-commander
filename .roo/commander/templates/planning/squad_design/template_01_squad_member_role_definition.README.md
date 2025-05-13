# Documentation: Template `template_01_squad_member_role_definition.md`

## 1. Purpose

This template is used during the **Squad Planning & Design phase** to define the specific role, responsibilities, core skills, primary inputs, and key outputs for **each individual Squad Member mode** that will form part of a new "Manager + Squad" unit.

Multiple instances of this document will be created – one for every proposed specialist worker in the new squad. The information captured here serves as a detailed specification that directly informs the creation of the squad member's actual `.mode.md` definition file and the initial structure of its Knowledge Base (KB).

## 2. Usage

1.  **Context:** This template is typically used after the `template_00_squad_concept_and_mission.md` has been filled out, defining the overall purpose of the new squad unit.
2.  **Create One Per Squad Member:**
    *   For each distinct role identified for the new squad, copy `[.roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.md](.roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.md)` into the squad's planning directory (e.g., `[.roo/commander/planning/squad_designs/new_squad_name/](.roo/commander/planning/squad_designs/new_squad_name/)`).
3.  **Rename File:** Rename the copied file to clearly identify the specific squad member role it defines (e.g., `01_role_frontend_builder.md`, `01_role_strategist.md`).
4.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique ID for this role definition document.
    *   `title`: `Squad Member Role Definition: [Proposed Mode Name] for [Squad Unit Name]`.
    *   `squad_unit_name_ref`: Must match the `squad_unit_name` from the corresponding `00_squad_concept_and_mission.md`.
    *   Define `proposed_mode_slug` and `proposed_mode_name`.
    *   Detail `core_responsibility_summary`, `primary_output_artifact_description`, `key_skills_required`, etc.
    *   Add relevant `tags`.
5.  **Define Role in Markdown Body:**
    *   Fill in all sections of the Markdown body, elaborating on the TOML fields and providing a clear, detailed specification for this squad member's function.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID for this role definition document. Convention: `SQUAD-ROLE-[SquadUnitNameShort]-[ProposedModeSlugShort]-[YYYYMMDD]`.
*   **`title` (String, Required):** Title: `"Squad Member Role Definition: [Proposed Mode Name] for [Squad Unit Name]"`.
*   **`status` (String, Required):** Lifecycle status of this definition (e.g., `"draft"`, `"proposed"`, `"defined"`).
*   **`created_date` (String, Required):** Date of creation.
*   **`updated_date` (String, Required):** Date of last update.
*   **`version` (String, Required):** Version of this role definition document.
*   **`tags` (Array of Strings, Required):** Include `"squad-planning"`, `"role-definition"`, `"mode-design"`, `"[squad_name_tag]"`, and `"[specialization_tag]"`.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"`

### Squad & Role Identification (TOML)

*   **`squad_unit_name_ref` (String, Required):** The full name of the Squad Unit this member belongs to.
*   `squad_concept_doc_id` (String, Optional): The `id` of the `00_squad_concept_and_mission.md` document for this squad.
*   **`proposed_mode_slug` (String, Required):** The intended unique slug for this squad member mode.
*   **`proposed_mode_name` (String, Required):** The intended human-friendly name (with emoji) for this mode.
*   `proposed_classification` (String, Optional): Typically `"worker"` or `"specialist"`.

### Core Function & Deliverables (TOML)

*   `core_responsibility_summary` (String, Optional but Recommended, Multiline): One-sentence summary of its job.
*   `primary_output_artifact_description` (String, Optional but Recommended, Multiline): Description of its main deliverable.
*   `primary_output_artifact_template_ref` (String, Optional): Path to the TOML+MD template it will use for its output, if applicable.

### Skills & Knowledge (TOML)

*   `key_skills_required` (Array of Strings, Optional): List of essential skills or technologies.
*   `potential_kb_skill_topics` (Array of Strings, Optional): Ideas for its `kb/skills/` articles.
*   `potential_kb_wisdom_topics` (Array of Strings, Optional): Ideas for its `kb/wisdom/` articles.

### Interactions & Dependencies (TOML)

*   `typical_input_artifacts_expected` (Array of Strings, Optional): Descriptions of primary inputs and their source roles/modes.
*   `downstream_squad_members_dependent_on_output` (Array of Strings, Optional): Slugs of squad members who consume this mode's output.

## 4. Markdown Body Structure

*   `# Squad Member Role Definition: {{ proposed_mode_name }}`: Main title.
*   `## 1. Overview`: Identifies the mode and its squad.
*   `## 2. Core Responsibility & Domain Focus`: Details its main job.
*   `## 3. Primary Output Artifact(s)`: Describes its deliverables.
*   `## 4. Key Skills & Knowledge Required`: Lists necessary skills and potential KB topics.
*   `## 5. Interactions & Dependencies within the Squad Workflow`: Defines its inputs and who uses its outputs.
*   `## 6. Considerations for .mode.md & System Prompt`: Notes for when the actual mode is built.
*   `## 7. Open Questions / Further Definition Needed`: Tracks unresolved design points for this role.

This template helps ensure each proposed Squad Member is thoroughly defined before development begins, clarifying its purpose, interactions, and required expertise within the new squad unit.