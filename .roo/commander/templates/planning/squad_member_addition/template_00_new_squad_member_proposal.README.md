# Documentation: Template `template_00_new_squad_member_proposal.md`

## 1. Purpose

This template is used during the **Squad Planning & Design phase** to create a **Proposal for Adding a New Squad Member** to an *existing* "Manager + Squad" unit. It provides a structured way to:

*   Justify the need for the new role within an existing squad.
*   Define the core responsibilities, skills, inputs, and outputs of the proposed new squad member.
*   Analyze how the new member will integrate into the existing squad's workflow.
*   Outline the necessary updates to the existing Manager mode's definition and Knowledge Base (KB).
*   Plan for the initial knowledge bootstrapping of the new member.

This template is intended for incremental expansion of existing squads, rather than designing a new squad unit from scratch (which uses the full suite of `[.roo/commander/templates/planning/squad_design/]` templates).

## 2. Usage

1.  **Identify Need:** When an existing Manager + Squad unit requires a new specialization or needs to offload specific responsibilities to a new dedicated role.
2.  **Copy Template:**
    *   Copy `[.roo/commander/templates/planning/squad_member_addition/template_00_new_squad_member_proposal.md](.roo/commander/templates/planning/squad_member_addition/template_00_new_squad_member_proposal.md)` into a relevant planning directory (e.g., `[.roo/commander/planning/squad_enhancements/]` or within the existing squad's planning folder).
3.  **Rename File:** Rename it descriptively (e.g., `prop_add_viz_specialist_to_dp_squad.md`).
4.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[ExistingManagerSlugShort]`, `[ProposedMemberSlugShort]`, `[Proposed New Member Name]`, `[Existing Manager's Squad Name]`, `[existing_manager_slug_tag]`, `[proposed_new_member_domain_tag]`) with actual values.
    *   The `id` should be unique.
    *   `existing_manager_slug` and `existing_squad_name` are **REQUIRED** to identify the target squad.
    *   `proposed_new_member_slug` and `proposed_new_member_name` are **REQUIRED**.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Fill in optional summary fields in TOML if desired, or remove them if details are only in Markdown.
5.  **Detail Proposal in Markdown Body (of the instance file):**
    *   Replace all `{{ ... }}` and `[ ... ]` placeholders with specific information.
    *   Elaborate on the justification (Section 1).
    *   Provide a detailed role definition for the new member (Section 2).
    *   Critically analyze its integration into the existing workflow (Section 3), referencing the Manager's current KB procedure using its full `.roo/` path.
    *   Specify the exact impacts on the existing Manager mode's configuration and KB files (Section 4), using full `.roo/` paths.
    *   Outline initial knowledge needs for the new member (Section 5).

## 3. TOML Frontmatter Schema (for an instance of `template_00_new_squad_member_proposal.md`)

*   **`id` (String, Required):** Unique ID for this proposal.
    *   *Convention:* `SQUAD-MEMBER-ADD-PROP-[ExistingManagerSlugShort]-[ProposedMemberSlugShort]-[YYYYMMDD]`
    *   *Placeholder in template:* `"SQUAD-MEMBER-ADD-PROP-[ExistingManagerSlugShort]-[ProposedMemberSlugShort]-[YYYYMMDD]"`
*   **`title` (String, Required):** Title of the proposal.
    *   *Placeholder in template:* `"Proposal: Add New Squad Member '[Proposed New Member Name]' to [Existing Manager's Squad Name]"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"proposed"`, `"under-review"`, `"approved"`, `"rejected"`
*   **`created_date` (String, Required):** Date of proposal creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this proposal document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"squad-planning"`, `"role-addition"`, `"proposal"`. Add tags for the manager and new member.
    *   *Placeholder in template:* `["squad-planning", "role-addition", "proposal", "[existing_manager_slug_tag]", "[proposed_new_member_domain_tag]"]`
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/planning/squad_member_addition/template_00_new_squad_member_proposal.README.md"`

### Proposal Context (TOML)

*   **`existing_manager_slug` (String, Required):** Slug of the Manager whose squad is being augmented.
    *   *Placeholder in template:* `"[slug_of_the_manager_mode_whose_squad_is_being_augmented]"`
*   **`existing_squad_name` (String, Required):** Name of the existing squad.
    *   *Placeholder in template:* `"[Name of the existing squad, e.g., Data Product Design Squad]"`
*   `reason_for_proposal` (String, Optional, Multiline): Brief reason for this proposal.
    *   *Placeholder in template:* `"[Briefly, why is this proposal being made? e.g., To handle increased demand for X, To add new specialization Y. Or remove field.]"`

### Proposed New Squad Member Details (Summary - TOML)

*   **`proposed_new_member_slug` (String, Required):** Intended slug for the new member.
    *   *Placeholder in template:* `"[proposed-slug-for-new-member]"`
*   **`proposed_new_member_name` (String, Required):** Intended human-friendly name.
    *   *Placeholder in template:* `"[Proposed Human-Friendly Name with Emoji]"`
*   `core_responsibility_new_member` (String, Optional, Multiline): One-sentence summary of the new member's primary job.
    *   *Placeholder in template:* `"[One-sentence summary of the new member's primary job. Or remove field.]"`
*   `primary_output_new_member` (String, Optional, Multiline): Main deliverable of the new member.
    *   *Placeholder in template:* `"[Main deliverable of the new member. Or remove field.]"`

### Impact Assessment (Summary - TOML)

*   `primary_justification_for_new_role` (String, Optional, Multiline): Core reason for the new role.
    *   *Placeholder in template:* `"[e.g., Current squad lacks bandwidth for advanced visualizations. Or remove field.]"`
*   `expected_placement_in_workflow` (String, Optional, Multiline): Where the new role fits in the existing workflow.
    *   *Placeholder in template:* `"[e.g., After data simulation and before final documentation. Or remove field.]"`
*   `affected_manager_kb_files` (Array of Strings, Recommended): List of Manager KB files that will need updating, using full `.roo/` anchored paths.
    *   *Placeholder in template shows examples that need path adjustment.*

## 4. Markdown Body Structure (for an instance of `template_00_new_squad_member_proposal.md`)

*   `# Proposal: Add New Squad Member '{{ proposed_new_member_name }}'`
*   `## To Squad Managed by: {{ existing_manager_slug }} ({{ existing_squad_name }})`
*   `## 1. Introduction & Justification 🎯`: Why this new role is needed.
*   `## 2. Proposed New Squad Member Role Definition 👤`: Details of the new role (responsibility, outputs, skills).
*   `## 3. Integration into Existing Squad Workflow 🔄`: How it fits, its inputs/outputs within the existing flow.
*   `## 4. Impact on Existing Manager Mode ({{ existing_manager_slug }}) ⚙️`: Specific changes needed for the Manager's mode def & KB.
*   `## 5. Initial Knowledge & Research Plan (for the New Member) 📚`: Bootstrapping its KB.
*   `## 6. Open Questions & Considerations ❓`: Unresolved items.
*   `## 7. Proposed Next Steps (If Approved) ✅`: Path to implementation.

This template provides a focused structure for proposing and designing the addition of a new specialist role to an existing squad, ensuring all key integration aspects are considered and documented.