# Documentation: Template `template_00_new_squad_member_proposal.md`

## 1. Purpose

This template is used during the **Squad Planning & Design phase** to create a **Proposal for Adding a New Squad Member** to an *existing* "Manager + Squad" unit. It provides a structured way to:

*   Justify the need for the new role.
*   Define the core responsibilities, skills, inputs, and outputs of the proposed new squad member.
*   Analyze how the new member will integrate into the existing squad's workflow.
*   Outline the necessary updates to the existing Manager mode's definition and Knowledge Base.
*   Plan for the initial knowledge bootstrapping of the new member.

This template is more focused than the full suite of squad design templates (used for creating an entire new squad unit from scratch) and is intended for incremental expansion of existing squads.

## 2. Usage

1.  **Identify Need:** When an existing Manager + Squad unit requires a new specialization or needs to offload specific responsibilities to a new dedicated role.
2.  **Copy Template:**
    *   Copy `[.roo/commander/templates/planning/squad_member_addition/template_00_new_squad_member_proposal.md](.roo/commander/templates/planning/squad_member_addition/template_00_new_squad_member_proposal.md)` into a relevant planning directory (e.g., `[.roo/commander/planning/squad_enhancements/](.roo/commander/planning/squad_enhancements/)`).
3.  **Rename File:** Rename it descriptively (e.g., `prop_add_viz_specialist_to_dp_squad.md`).
4.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique ID for this proposal.
    *   `title`: `Proposal: Add New Squad Member '[Proposed Name]' to [Existing Manager's Squad Name]`.
    *   `existing_manager_slug`: Crucial for identifying the target squad.
    *   Define `proposed_new_member_slug`, `proposed_new_member_name`, and summarize justification and impact.
5.  **Detail Proposal in Markdown Body:**
    *   Elaborate on the justification (Section 1).
    *   Provide a detailed role definition for the new member (Section 2), similar to a condensed `template_01_squad_member_role_definition.md`.
    *   Critically analyze its integration into the existing workflow (Section 3).
    *   Specify the exact impacts on the existing Manager mode's configuration and KB (Section 4).
    *   Outline initial knowledge needs for the new member (Section 5).

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `SQUAD-MEMBER-ADD-PROP-[MgrSlugShort]-[NewMemberSlugShort]-[YYYYMMDD]`.
*   **`title` (String, Required):** Title of the proposal.
*   **`status` (String, Required):** Lifecycle status (e.g., `"draft"`, `"proposed"`, `"approved"`).
*   **`created_date` (String, Required):** Date.
*   **`updated_date` (String, Required):** Date.
*   **`version` (String, Required):** Version of this proposal.
*   **`tags` (Array of Strings, Required):** Include `"squad-planning"`, `"role-addition"`, `"proposal"`, `"[existing_manager_slug_tag]"`, `"[proposed_new_member_domain_tag]"`.
*   **`template_schema_doc` (String, Required):** Path to this schema doc.

### Proposal Context (TOML)

*   **`existing_manager_slug` (String, Required):** Slug of the Manager whose squad is being augmented.
*   `existing_squad_name` (String, Optional): Name of the existing squad.
*   `reason_for_proposal` (String, Optional, Multiline): Brief reason for this proposal.

### Proposed New Squad Member Details (Summary - TOML)

*   **`proposed_new_member_slug` (String, Required):** Intended slug for the new member.
*   **`proposed_new_member_name` (String, Required):** Intended human-friendly name.
*   `core_responsibility_new_member` (String, Optional): One-sentence summary.
*   `primary_output_new_member` (String, Optional): Main deliverable.

### Impact Assessment (Summary - TOML)

*   `primary_justification_for_new_role` (String, Optional, Multiline): Core reason.
*   `expected_placement_in_workflow` (String, Optional, Multiline): Where it fits.
*   `affected_manager_kb_files` (Array of Strings, Optional): List of Manager KB files needing updates.

## 4. Markdown Body Structure

*   `# Proposal: Add New Squad Member ...`: Main title.
*   `## 1. Introduction & Justification`: Why this new role is needed.
*   `## 2. Proposed New Squad Member Role Definition`: Details of the new role (responsibility, outputs, skills).
*   `## 3. Integration into Existing Squad Workflow`: How it fits, its inputs/outputs within the existing flow.
*   `## 4. Impact on Existing Manager Mode`: Specific changes needed for the Manager's mode def & KB.
*   `## 5. Initial Knowledge & Research Plan (for the New Member)`: Bootstrapping its KB.
*   `## 6. Open Questions & Considerations`: Unresolved items.
*   `## 7. Proposed Next Steps (If Approved)`: Path to implementation.

This template provides a focused structure for proposing and designing the addition of a new specialist role to an existing squad, ensuring all key integration aspects are considered.