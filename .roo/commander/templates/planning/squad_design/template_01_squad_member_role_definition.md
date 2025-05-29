+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-[SquadUnitNameShort]-[ProposedModeSlugShort]-[YYYYMMDD]" # Placeholder: e.g., SQUAD-ROLE-WEBAPP-FEBUILDER-20250719
title = "Squad Member Role Definition: [Proposed Mode Name] for [Squad Unit Name]" # Placeholder
status = "draft" # Default. Options: draft, proposed, under-review, defined
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this role definition document instance
tags = ["squad-planning", "role-definition", "mode-design", "[squad_name_tag]", "[specialization_tag]"] # Placeholder: Add specific tags
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "[Full Name of the Squad Unit this member belongs to]" # REQUIRED - Placeholder: Matches 'squad_unit_name' from 00_squad_concept_and_mission.md
squad_concept_doc_id = "[ID of the parent squad concept document. Or remove field.]" # OPTIONAL - Placeholder: e.g., "SQUAD-CONCEPT-[SquadUnitNameShort]-[YYYYMMDD]" or remove

proposed_mode_slug = "[proposed-slug-for-this-squad-member]" # REQUIRED - Placeholder: e.g., "web-app-frontend-builder"
proposed_mode_name = "[Proposed Human-Friendly Name with Emoji]" # REQUIRED - Placeholder: e.g., "🖥️ Web App Frontend Builder"
proposed_classification = "squad" # REQUIRED - Defaulted to "squad" for squad members

# --- Core Function & Deliverables ---
core_responsibility_summary = "[One-sentence summary of this mode's primary job within the squad. Or remove field.]" # RECOMMENDED - Placeholder or remove
primary_output_artifact_description = "[Description of its main deliverable, e.g., 'Set of React components for the UI'. Or remove field.]" # RECOMMENDED - Placeholder or remove
primary_output_artifact_template_ref = "[.roo/path/to/output_template.md or remove field.]" # OPTIONAL - Placeholder or remove

# --- Skills & Knowledge ---
key_skills_required = ["[Skill/Technology 1]", "[Skill/Technology 2 or remove array field]"] # RECOMMENDED - Placeholder or remove
potential_kb_skill_topics = ["[Topic 1 for skills KB]", "[Topic 2 for skills KB or remove array field]"] # OPTIONAL - Placeholder or remove
potential_kb_wisdom_topics = ["[Topic 1 for wisdom KB or remove array field]"] # OPTIONAL - Placeholder or remove

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = ["[Description of input 1 (Source: [Mode/Role])]", "[Description of input 2 (Source: [Mode/Role]) or remove array field]"] # RECOMMENDED - Placeholder or remove
downstream_squad_members_dependent_on_output = ["[slug_of_next_squad_member_1 or remove array field]", "[slug_of_next_squad_member_2 or remove array field]"] # OPTIONAL - Placeholder or remove
+++

# Squad Member Role Definition: {{ proposed_mode_name | default: "[Proposed Mode Name]" }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name | default: "[Proposed Mode Name]" }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug | default: "[proposed-slug]" }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref | default: "[Squad Unit Name]" }}`
*   **Purpose of this Document:** To define the specific role, responsibilities, core skills, primary inputs, and key outputs for the proposed `{{ proposed_mode_name }}` squad member. This informs the creation of its `.mode.md` file and initial KB structure.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary | default: "[Summarize this mode's main job and area of expertise within the squad's workflow. This will heavily influence its .mode.md `roleDefinition`.]" }}`
*   **Detailed Responsibilities:**
    *   [Responsibility 1 specific to this role, e.g., "Develop responsive UI components based on provided mockups."]
    *   [Responsibility 2 specific to this role, e.g., "Write unit tests for all created components."]
    *   ...

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description | default: "[Describe the main tangible deliverable(s) this mode will produce. This will inform its .mode.md metadata `primary_output_description`.]" }}`
*   **Format/Template:** `[Specify the format (e.g., TOML+Markdown, JSON, Code Files) and, if applicable, the primary template it will use for its output (e.g., `{{ primary_output_artifact_template_ref | default: "[.roo/path/to/output_template.md]" }}` if applicable, or state 'N/A'). This will inform its .mode.md metadata `primary_output_template`.]`
*   **Key Characteristics of Output:** `[e.g., "Must be well-documented," "Adheres to X standard," "Includes Y sections"]`

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   *(Corresponds to `key_skills_required` in TOML. List each skill/technology.)*
    *   `[Skill/Technology 1]`
    *   `[Skill/Technology 2]`
    *   ...
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. List potential skill articles.)*
        *   `[Skill Topic 1, e.g., "Using [Framework X] for [Specific Task]"]`
        *   `[Skill Topic 2]`
    *   **Wisdom (`kb/wisdom/`):**
        *   *(Corresponds to `potential_kb_wisdom_topics` in TOML. List potential wisdom articles.)*
        *   `[Wisdom Topic 1, e.g., "Best Practices for [Domain-Specific Challenge]"]`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
[Describe the primary information or artifacts this mode needs to receive to begin its work, and which squad member (or the Manager) typically provides them. Use `.roo/` anchored paths for known artifact types if possible.]
*   *(Corresponds to `typical_input_artifacts_expected` in TOML. List each expected input.)*
    *   Input 1: From `[Source Mode Slug/Role]` - `[Description of artifact or path, e.g., "Approved UI Mockups from ui-designer (.roo/.../mockup.md)"]`
    *   Input 2: From `[Source Mode Slug/Role]` - `[Description]`

### 5.2. Downstream Dependencies (Who uses its output?)
[Identify which other squad members will typically consume the output artifacts of this mode.]
*   *(Corresponds to `downstream_squad_members_dependent_on_output` in TOML. List each.)*
    *   `[Next Squad Member Slug 1]` will use `[This Mode's Output Artifact]` to `[Perform their task]`.
    *   `[Next Squad Member Slug 2]` ...

## 6. Considerations for `.mode.md` & System Prompt 💡

[Based on the above, outline key elements that should go into this mode's `.mode.md` file, especially its `roleDefinition` (which should be concise and define its place in the hierarchy, core function, and main output) and the `[metadata]` fields like `squad_name`, `primary_output_description`, `primary_output_template`, and `reports_to`.]

## 7. Open Questions / Further Definition Needed ❓

[List any aspects of this role that still require clarification or further design before its `.mode.md` file can be finalized.]