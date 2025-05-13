+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-[SquadUnitNameShort]-[ProposedModeSlugShort]-[YYYYMMDD]" # e.g., SQUAD-ROLE-WEBAPP-FEBUILDER-20250719
title = "Squad Member Role Definition: [Proposed Mode Name] for [Squad Unit Name]"
status = "draft" # Options: draft, proposed, under-review, defined
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0" # Version of this role definition document
tags = ["squad-planning", "role-definition", "mode-design", "[squad_name_tag]", "[specialization_tag]"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "[Full Name of the Squad Unit this member belongs to (matches 'squad_unit_name' from 00_squad_concept_and_mission.md)]"
# squad_concept_doc_id = "SQUAD-CONCEPT-[SquadUnitNameShort]-[YYYYMMDD]" # ID of the parent squad concept document

proposed_mode_slug = "[proposed-slug-for-this-squad-member]" # e.g., "web-app-frontend-builder"
proposed_mode_name = "[Proposed Human-Friendly Name with Emoji]" # e.g., "🖥️ Web App Frontend Builder"
# proposed_classification = "worker" # Or "specialist"

# --- Core Function & Deliverables ---
# core_responsibility_summary = "[One-sentence summary of this mode's primary job within the squad.]"
# primary_output_artifact_description = "[Description of its main deliverable, e.g., 'Set of React components for the UI', 'API specification document in OpenAPI format']"
# primary_output_artifact_template_ref = "[Path to the TOML+MD template it will use for its output, if applicable, e.g., '.roo/commander/templates/design_artifacts/some_template.md']"

# --- Skills & Knowledge ---
# key_skills_required = [ # List of essential skills or technologies
#    "Skill/Technology 1 (e.g., React, Python, Strategic Analysis)",
#    "Skill/Technology 2 (e.g., TypeScript, Persona Development)"
# ]
# potential_kb_skill_topics = [ # Ideas for its kb/skills/ articles
#    "Topic 1 for skills KB",
#    "Topic 2 for skills KB"
# ]
# potential_kb_wisdom_topics = [ # Ideas for its kb/wisdom/ articles
#    "Topic 1 for wisdom KB",
# ]

# --- Interactions & Dependencies ---
# typical_input_artifacts_expected = [ # From where/whom does it get its primary inputs?
#    "Description of input 1 (e.g., Approved UI Mockups from UI/UX Designer)",
#    "Description of input 2 (e.g., Product Strategy Document from Strategist)"
# ]
# downstream_squad_members_dependent_on_output = [ # Who uses its output?
#    "[slug_of_next_squad_member_1]",
#    "[slug_of_next_squad_member_2]"
# ]
+++

# Squad Member Role Definition: {{ proposed_mode_name | default: "[Proposed Mode Name]" }}

## 1. Overview

*   **Proposed Mode Name:** `{{ proposed_mode_name | default: "[Proposed Mode Name]" }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug | default: "[proposed-slug]" }}`
*   **Squad Unit:** `{{ squad_unit_name_ref | default: "[Squad Unit Name]" }}`
*   **Purpose of this Document:** To define the specific role, responsibilities, core skills, primary inputs, and key outputs for the proposed `[Proposed Mode Name]` squad member. This informs the creation of its `.mode.md` file and initial KB structure.

## 2. Core Responsibility & Domain Focus

*   **Summary:** `{{ core_responsibility_summary | default: "[Summarize this mode's main job and area of expertise within the squad's workflow.]" }}`
*   **Detailed Responsibilities:**
    *   [Responsibility 1 specific to this role]
    *   [Responsibility 2 specific to this role]
    *   ...

## 3. Primary Output Artifact(s)

*   **Description:** `{{ primary_output_artifact_description | default: "[Describe the main tangible deliverable(s) this mode will produce.]" }}`
*   **Format/Template:** [Specify the format (e.g., TOML+Markdown, JSON, Code Files) and, if applicable, the primary template it will use for its output (e.g., `{{ primary_output_artifact_template_ref | default: "[path to output template]" }}`)]
*   **Key Characteristics of Output:** [e.g., "Must be well-documented," "Adheres to X standard," "Includes Y sections"]

## 4. Key Skills & Knowledge Required

*   **Essential Skills/Technologies:**
    *   *(Corresponds to `key_skills_required` in TOML)*
    *   [Skill/Technology 1]
    *   [Skill/Technology 2]
    *   ...
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML)*
        *   [Skill Topic 1]
        *   [Skill Topic 2]
    *   **Wisdom (`kb/wisdom/`):**
        *   *(Corresponds to `potential_kb_wisdom_topics` in TOML)*
        *   [Wisdom Topic 1]

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
[Describe the primary information or artifacts this mode needs to receive to begin its work, and which squad member (or the Manager) typically provides them.]
*   *(Corresponds to `typical_input_artifacts_expected` in TOML)*
    *   Input 1: From `[Source Mode Slug/Role]` - [Description]
    *   Input 2: From `[Source Mode Slug/Role]` - [Description]

### 5.2. Downstream Dependencies (Who uses its output?)
[Identify which other squad members will typically consume the output artifacts of this mode.]
*   *(Corresponds to `downstream_squad_members_dependent_on_output` in TOML)*
    *   `[Next Squad Member Slug 1]` will use `[This Mode's Output Artifact]` to `[Perform their task]`.
    *   `[Next Squad Member Slug 2]` ...

## 6. Considerations for `.mode.md` & System Prompt

[Based on the above, outline key elements that should go into this mode's `.mode.md` file, especially its system prompt. What are its core instructions regarding MDTM task handling, artifact creation, and reporting to its Manager?]

## 7. Open Questions / Further Definition Needed

[List any aspects of this role that still require clarification or further design before its `.mode.md` file can be finalized.]