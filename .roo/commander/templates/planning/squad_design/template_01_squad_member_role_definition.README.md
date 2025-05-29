# Documentation: Template `template_01_squad_member_role_definition.md`

## 1. Purpose

This template is used during the **Squad Planning & Design phase** to define the specific role, responsibilities, core skills, primary inputs, and key outputs for **each individual Squad Member mode** that will form part of a new "Manager + Squad" unit.

Multiple instances of this document will be created – one for every proposed specialist worker in the new squad. The information captured here serves as a detailed specification that directly informs the creation of the squad member's actual `.mode.md` definition file (including its `roleDefinition` and `metadata`) and the initial structure and content ideas for its Knowledge Base (KB).

## 2. Usage

1.  **Context:** This template is typically used after the `[.roo/commander/templates/planning/squad_design/template_00_squad_concept_and_mission.md]` has been filled out, defining the overall purpose of the new squad unit.
2.  **Create One Per Squad Member:**
    *   For each distinct role identified for the new squad, an agent (like `architect-squad-designer`) or a human developer will copy `[.roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.md](.roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.md)` into the squad's planning directory (e.g., `[.roo/commander/planning/squad_designs/new_squad_name/]`).
3.  **Rename File:** Rename the copied file to clearly identify the specific squad member role it defines (e.g., `01_role_frontend_builder.md`, `01_role_data_product_strategist.md`).
4.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[SquadUnitNameShort]`, `[ProposedModeSlugShort]`, `[Proposed Mode Name]`, `[Squad Unit Name]`, `[squad_name_tag]`, `[specialization_tag]`) with actual values.
    *   `squad_unit_name_ref` **MUST** match the `squad_unit_name` from the corresponding `00_squad_concept_and_mission.md`.
    *   `proposed_mode_slug` and `proposed_mode_name` are **REQUIRED**.
    *   `proposed_classification` **MUST be `"squad"`**.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Fill in "Core Function & Deliverables," "Skills & Knowledge," and "Interactions & Dependencies" sections in the TOML with summary information, or remove fields if not applicable (as per placeholder guidance).
5.  **Define Role in Markdown Body (of the instance file):**
    *   Replace all `{{ ... }}` and `[ ... ]` placeholders with specific information for this role.
    *   Elaborate on the TOML fields, providing detailed descriptions for responsibilities, outputs, skills, KB topics, and workflow interactions. Ensure all paths use the `.roo/` anchor.

## 3. TOML Frontmatter Schema (for an instance of `template_01_squad_member_role_definition.md`)

*   **`id` (String, Required):** Unique ID for this role definition document.
    *   *Convention:* `SQUAD-ROLE-[SquadUnitNameShort]-[ProposedModeSlugShort]-[YYYYMMDD]`
    *   *Placeholder in template:* `"SQUAD-ROLE-[SquadUnitNameShort]-[ProposedModeSlugShort]-[YYYYMMDD]"`
*   **`title` (String, Required):** Title of the role definition.
    *   *Placeholder in template:* `"Squad Member Role Definition: [Proposed Mode Name] for [Squad Unit Name]"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"proposed"`, `"under-review"`, `"defined"`
*   **`created_date` (String, Required):** Date of creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this role definition document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"squad-planning"`, `"role-definition"`, `"mode-design"`. Add tags for squad name and specialization.
    *   *Placeholder in template:* `["squad-planning", "role-definition", "mode-design", "[squad_name_tag]", "[specialization_tag]"]`
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"`

### Squad & Role Identification (TOML)

*   **`squad_unit_name_ref` (String, Required):** The full name of the Squad Unit this member belongs to.
    *   *Placeholder in template:* `"[Full Name of the Squad Unit this member belongs to]"`
*   `squad_concept_doc_id` (String, Optional): The `id` of the `00_squad_concept_and_mission.md` document for this squad.
    *   *Placeholder in template:* `"[ID of the parent squad concept document. Or remove field.]"`
*   **`proposed_mode_slug` (String, Required):** The intended unique slug for this squad member mode.
    *   *Placeholder in template:* `"[proposed-slug-for-this-squad-member]"`
*   **`proposed_mode_name` (String, Required):** The intended human-friendly name (with emoji) for this mode.
    *   *Placeholder in template:* `"[Proposed Human-Friendly Name with Emoji]"`
*   **`proposed_classification` (String, Required):** Classification of the mode.
    *   *Default in template:* `"squad"` (This template is for squad members).

### Core Function & Deliverables (TOML)

*   `core_responsibility_summary` (String, Recommended, Multiline): One-sentence summary of its job.
    *   *Placeholder in template:* `"[One-sentence summary of this mode's primary job within the squad. Or remove field.]"`
*   `primary_output_artifact_description` (String, Recommended, Multiline): Description of its main deliverable.
    *   *Placeholder in template:* `"[Description of its main deliverable, e.g., 'Set of React components for the UI'. Or remove field.]"`
*   `primary_output_artifact_template_ref` (String, Optional): Path (workspace-root-relative) to the TOML+MD template it will use for its output, if applicable.
    *   *Placeholder in template:* `"[.roo/path/to/output_template.md or remove field.]"`

### Skills & Knowledge (TOML)

*   `key_skills_required` (Array of Strings, Recommended): List of essential skills or technologies.
    *   *Placeholder in template:* `["[Skill/Technology 1]", "[Skill/Technology 2 or remove array field]"]`
*   `potential_kb_skill_topics` (Array of Strings, Optional): Ideas for its `kb/skills/` articles.
    *   *Placeholder in template:* `["[Topic 1 for skills KB]", "[Topic 2 for skills KB or remove array field]"]`
*   `potential_kb_wisdom_topics` (Array of Strings, Optional): Ideas for its `kb/wisdom/` articles.
    *   *Placeholder in template:* `["[Topic 1 for wisdom KB or remove array field]"]`

### Interactions & Dependencies (TOML)

*   `typical_input_artifacts_expected` (Array of Strings, Recommended): Descriptions of primary inputs and their source roles/modes.
    *   *Placeholder in template:* `["[Description of input 1 (Source: [Mode/Role])]", "[Description of input 2 (Source: [Mode/Role]) or remove array field]"]`
*   `downstream_squad_members_dependent_on_output` (Array of Strings, Optional): Slugs of squad members who consume this mode's output.
    *   *Placeholder in template:* `["[slug_of_next_squad_member_1 or remove array field]", "[slug_of_next_squad_member_2 or remove array field]"]`

## 4. Markdown Body Structure (for an instance of `template_01_squad_member_role_definition.md`)

*   `# Squad Member Role Definition: {{ proposed_mode_name }}`: Main title.
*   `## 1. Overview 📝`: Identifies the mode, its proposed slug, classification, and squad.
*   `## 2. Core Responsibility & Domain Focus 🎯`: Details its main job and area of expertise.
*   `## 3. Primary Output Artifact(s) 📄➡️`: Describes its deliverables, format, and template.
*   `## 4. Key Skills & Knowledge Required 🧠`: Lists necessary skills and potential KB topics.
*   `## 5. Interactions & Dependencies within the Squad Workflow 🔄`: Defines its inputs and who uses its outputs.
*   `## 6. Considerations for .mode.md & System Prompt 💡`: Notes for when the actual mode is built, focusing on `roleDefinition` and key metadata.
*   `## 7. Open Questions / Further Definition Needed ❓`: Tracks unresolved design points for this role.

This template helps ensure each proposed Squad Member is thoroughly defined before development begins, clarifying its purpose, interactions, and required expertise within the new squad unit.