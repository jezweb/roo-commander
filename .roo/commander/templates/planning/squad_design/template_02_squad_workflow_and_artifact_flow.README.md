# Documentation: Template `template_02_squad_workflow_and_artifact_flow.md`

## 1. Purpose

This template is used during the **Squad Planning & Design phase** to map out the **operational workflow and the flow of artifacts** for a new "Manager + Squad" unit. It details the sequence of phases, the squad member responsible for each phase, their key inputs, and their primary outputs.

This document is critical for:
*   Designing the main orchestration procedure (`01-main-orchestration-flow.md`) for the new Manager mode.
*   Ensuring all squad members have clearly defined inputs and outputs.
*   Visualizing the dependencies and handoffs within the squad's workflow.
*   Providing a clear plan for how the squad will collaboratively achieve its overall objective.

## 2. Usage

1.  **Context:** This template is typically used after `template_00_squad_concept_and_mission.md` (defining the squad's overall purpose) and multiple instances of `template_01_squad_member_role_definition.md` (defining each member) have been drafted.
2.  **Copy Template:**
    *   Copy `[.roo/commander/templates/planning/squad_design/template_02_squad_workflow_and_artifact_flow.md](.roo/commander/templates/planning/squad_design/template_02_squad_workflow_and_artifact_flow.md)` into the new squad's planning directory.
3.  **Rename File:** Rename it descriptively (e.g., `02_workflow_web_app_squad.md`).
4.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique ID for this workflow planning document.
    *   `title`: `Squad Workflow & Artifact Flow: [Squad Unit Name]`.
    *   `squad_unit_name_ref`: Must match the `squad_unit_name` from the corresponding `00_squad_concept_and_mission.md`.
    *   Define `workflow_name`, `overall_workflow_objective`, `key_input_to_workflow_start`, and `final_output_of_workflow`.
    *   Add relevant `tags`.
5.  **Define Workflow in Markdown Body:**
    *   Replace all bracketed placeholders like `[Squad Unit Name]`, `[manager_slug]`, etc.
    *   **Crucially, customize Section 3 ("Sequential Phase Breakdown & Artifact Flow")** to detail each phase of *this specific squad's workflow*. For each phase, specify the responsible squad member slug, their inputs (linking to outputs of previous phases), key activities, and primary output artifacts (including target filenames and storage location concepts).
    *   Create a conceptual diagram (e.g., using Mermaid JS) in Section 4.
    *   Detail key dependencies and handoff considerations in Section 5.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `SQUAD-WORKFLOW-[SquadUnitNameShort]-[YYYYMMDD]`.
*   **`title` (String, Required):** Title: `"Squad Workflow & Artifact Flow: [Squad Unit Name]"`.
*   **`status` (String, Required):** Lifecycle status (e.g., `"draft"`, `"proposed"`, `"defined"`).
*   **`created_date` (String, Required):** Date of creation.
*   **`updated_date` (String, Required):** Date of last update.
*   **`version` (String, Required):** Version of this workflow document.
*   **`tags` (Array of Strings, Required):** Include `"squad-planning"`, `"workflow-design"`, `"artifact-flow"`, `"orchestration-planning"`, and `"[squad_name_tag]"`.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/planning/squad_design/template_02_squad_workflow_and_artifact_flow.README.md"`

### Squad & Workflow Identification (TOML)

*   **`squad_unit_name_ref` (String, Required):** Full name of the Squad Unit.
*   `squad_concept_doc_id` (String, Optional): ID of the `00_squad_concept_and_mission.md` document.
*   `managing_mode_slug_ref` (String, Optional but Recommended): Slug of the Manager mode for this squad.
*   **`workflow_name` (String, Required):** Descriptive name for this squad's primary workflow.
*   `workflow_version` (String, Optional): Version of this specific workflow definition.
*   `estimated_total_phases` (Integer, Optional): Number of distinct squad member engagements.

### Key Workflow Characteristics (TOML)

*   `overall_workflow_objective` (String, Optional but Recommended, Multiline): The ultimate goal this workflow achieves.
*   `key_input_to_workflow_start` (String, Optional, Multiline): What triggers this workflow or its initial input.
*   `final_output_of_workflow` (String, Optional but Recommended, Multiline): The final consolidated artifact produced.

## 4. Markdown Body Structure

*   `# Squad Workflow & Artifact Flow: {{ squad_unit_name_ref }}`: Main title.
*   `## 1. Overview`: Purpose of the document, identifies squad and workflow.
*   `## 2. Overall Workflow Objective`: The main goal.
*   `## 3. Sequential Phase Breakdown & Artifact Flow`: **The core section.** Details each phase: responsible squad member, inputs, activities, outputs.
*   `## 4. Visual Workflow & Artifact Flow Diagram (Conceptual)`: Encourages a diagram (e.g., Mermaid).
*   `## 5. Key Dependencies & Handoff Points`: Highlights critical inter-phase requirements.
*   `## 6. Considerations for the Managing Mode`: Notes on how the Manager will use this workflow.

This template provides a structured way to design the operational flow of a new squad, ensuring clarity on responsibilities, sequences, and the critical path of artifacts.