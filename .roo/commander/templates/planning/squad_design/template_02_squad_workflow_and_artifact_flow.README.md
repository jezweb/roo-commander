# Documentation: Template `template_02_squad_workflow_and_artifact_flow.md`

## 1. Purpose

This template is used during the **Squad Planning & Design phase** to map out the **operational workflow and the flow of artifacts** for a new "Manager + Squad" unit. It details the sequence of phases, the squad member responsible for each phase, their key inputs, and their primary outputs (including conceptual target paths and templates used).

This document is critical for:
*   Designing the main orchestration procedure (e.g., `01-main-orchestration-flow.md`) for the new Manager mode's Knowledge Base.
*   Ensuring all squad members have clearly defined inputs and outputs within the overall workflow.
*   Visualizing the dependencies and handoffs within the squad's operations.
*   Providing a clear plan for how the squad will collaboratively achieve its overall objective.

## 2. Usage

1.  **Context:** This template is typically used after `[.roo/commander/templates/planning/squad_design/template_00_squad_concept_and_mission.md]` (defining the squad's overall purpose) and multiple instances of `[.roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.md]` (defining each member) have been drafted.
2.  **Copy Template:**
    *   An agent (like `architect-squad-designer`) or a human developer will copy `[.roo/commander/templates/planning/squad_design/template_02_squad_workflow_and_artifact_flow.md](.roo/commander/templates/planning/squad_design/template_02_squad_workflow_and_artifact_flow.md)` into the new squad's planning directory.
3.  **Rename File:** Rename it descriptively (e.g., `02_workflow_data_product_squad.md`).
4.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[SquadUnitNameShort]`, `[Squad Unit Name]`, `[squad_name_tag]`, `[manager-slug]`) with actual values.
    *   `squad_unit_name_ref` **MUST** match the `squad_unit_name` from the corresponding `00_squad_concept_and_mission.md`.
    *   `workflow_name` and `estimated_total_phases` are **REQUIRED**.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Fill in optional "Key Workflow Characteristics" fields if applicable, or remove them.
5.  **Define Workflow in Markdown Body (of the instance file):**
    *   Replace all `{{ ... }}` and `[ ... ]` placeholders with specific information for this squad's workflow.
    *   **Crucially, customize Section 3 ("Sequential Phase Breakdown & Artifact Flow")** to detail each phase of *this specific squad's workflow*. For each phase, specify the responsible squad member slug, their inputs (linking to outputs of previous phases), key activities, and primary output artifacts (including conceptual target filenames, `.roo/` anchored paths, and paths to templates they use).
    *   Create a conceptual diagram (e.g., using Mermaid JS) in Section 4, replacing placeholder slugs.
    *   Detail key dependencies and handoff considerations in Section 5.

## 3. TOML Frontmatter Schema (for an instance of `template_02_squad_workflow_and_artifact_flow.md`)

*   **`id` (String, Required):** Unique ID for this workflow planning document.
    *   *Convention:* `SQUAD-WORKFLOW-[SquadUnitNameShort]-[YYYYMMDD]`
    *   *Placeholder in template:* `"SQUAD-WORKFLOW-[SquadUnitNameShort]-[YYYYMMDD]"`
*   **`title` (String, Required):** Title of the workflow document.
    *   *Placeholder in template:* `"Squad Workflow & Artifact Flow: [Squad Unit Name]"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"proposed"`, `"under-review"`, `"defined"`
*   **`created_date` (String, Required):** Date of creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this workflow document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"squad-planning"`, `"workflow-design"`, `"artifact-flow"`, `"orchestration-planning"`. Add a squad name tag.
    *   *Placeholder in template:* `["squad-planning", "workflow-design", "artifact-flow", "orchestration-planning", "[squad_name_tag]"]`
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/planning/squad_design/template_02_squad_workflow_and_artifact_flow.README.md"`

### Squad & Workflow Identification (TOML)

*   **`squad_unit_name_ref` (String, Required):** Full name of the Squad Unit.
    *   *Placeholder in template:* `"[Full Name of the Squad Unit]"`
*   `squad_concept_doc_id` (String, Optional): ID of the `00_squad_concept_and_mission.md` document.
    *   *Placeholder in template:* `"[ID of the parent squad concept document. Or remove field.]"`
*   `managing_mode_slug_ref` (String, Recommended): Slug of the Manager mode for this squad.
    *   *Placeholder in template:* `"[proposed_managing_mode_slug from 00_squad_concept_and_mission.md]"`
*   **`workflow_name` (String, Required):** Descriptive name for this squad's primary workflow.
    *   *Placeholder in template:* `"[Descriptive Name for this Squad's Primary Workflow]"`
*   `workflow_version` (String, Optional): Version of this specific workflow definition.
    *   *Default in template:* `"1.0"`
*   **`estimated_total_phases` (Integer, Required):** Number of distinct squad member engagements in sequence.
    *   *Placeholder in template:* `0` (to be filled)

### Key Workflow Characteristics (TOML)

*   `overall_workflow_objective` (String, Recommended, Multiline): The ultimate goal this workflow achieves.
    *   *Placeholder in template:* `"[The ultimate goal this entire sequence of squad activities aims to achieve. Or remove field.]"`
*   `key_input_to_workflow_start` (String, Recommended, Multiline): What triggers this workflow or its initial input.
    *   *Placeholder in template:* `"[What triggers this workflow / what's the initial input to the first squad member? Or remove field.]"`
*   `final_output_of_workflow` (String, Recommended, Multiline): The final consolidated artifact produced.
    *   *Placeholder in template:* `"[What is the final consolidated artifact produced at the end of this workflow? Or remove field.]"`

## 4. Markdown Body Structure (for an instance of `template_02_squad_workflow_and_artifact_flow.md`)

*   `# Squad Workflow & Artifact Flow: {{ squad_unit_name_ref }}`: Main title.
*   `## 1. Overview 🗺️`: Purpose of the document, identifies squad, workflow, and managing mode.
*   `## 2. Overall Workflow Objective 🎯`: The main goal.
*   `## 3. Sequential Phase Breakdown & Artifact Flow 🔄`: **The core section.** Details each phase: responsible squad member, inputs, activities, outputs (including conceptual paths and templates used).
*   `## 4. Visual Workflow & Artifact Flow Diagram (Conceptual) 📊`: Encourages a diagram (e.g., Mermaid).
*   `## 5. Key Dependencies & Handoff Points 🔗`: Highlights critical inter-phase requirements.
*   `## 6. Considerations for the Managing Mode ({{ managing_mode_slug_ref }}) 🧠`: Notes on how the Manager will use this workflow.

This template provides a structured way to design the operational flow of a new squad, ensuring clarity on responsibilities, sequences, and the critical path of artifacts, with all path references adhering to workspace standards.