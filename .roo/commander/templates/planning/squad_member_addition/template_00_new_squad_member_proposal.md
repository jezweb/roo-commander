+++
# --- Squad Member Addition Proposal ---
id = "SQUAD-MEMBER-ADD-PROP-[ExistingManagerSlugShort]-[ProposedMemberSlugShort]-[YYYYMMDD]" # e.g., SQUAD-MEMBER-ADD-PROP-MDP-DPVIS-20250720
title = "Proposal: Add New Squad Member '[Proposed New Member Name]' to [Existing Manager's Squad Name]"
status = "draft" # Options: draft, proposed, under-review, approved, rejected
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0" # Version of this proposal document
tags = ["squad-planning", "role-addition", "proposal", "[existing_manager_slug_tag]", "[proposed_new_member_domain_tag]"]
template_schema_doc = ".roo/commander/templates/planning/squad_member_addition/template_00_new_squad_member_proposal.README.md"

# --- Proposal Context ---
existing_manager_slug = "[Slug of the Manager mode whose squad is being augmented, e.g., manager-data-product]"
# existing_squad_name = "[Name of the existing squad, e.g., Data Product Design Squad]"
# reason_for_proposal = "[Briefly, why is this proposal being made? e.g., To handle increased demand for X, To add new specialization Y]"

# --- Proposed New Squad Member Details (Summary - details in Markdown) ---
proposed_new_member_slug = "[proposed-slug-for-new-member]" # e.g., "data-product-visualization-specialist"
proposed_new_member_name = "[Proposed Human-Friendly Name with Emoji]" # e.g., "🎨 Data Product Visualization Specialist"
# core_responsibility_new_member = "[One-sentence summary of the new member's primary job]"
# primary_output_new_member = "[Main deliverable of the new member, e.g., Interactive visualization components]"

# --- Impact Assessment (Summary - details in Markdown) ---
# primary_justification_for_new_role = "[e.g., Current squad lacks bandwidth for advanced visualizations, New project requires specialized charting skills not covered by existing roles.]"
# expected_placement_in_workflow = "[e.g., After data simulation and before final documentation, Parallel to interface architect for specific viz tasks]"
# affected_manager_kb_files = [ # Manager KB files that will need updating
#    ".roo/commander/modes/[existing_manager_slug]/kb/procedures/01-main-orchestration-flow.md",
#    ".roo/commander/modes/[existing_manager_slug]/kb/reference/00-squad-composition.md"
# ]
+++

# Proposal: Add New Squad Member '{{ proposed_new_member_name | default: "[Proposed New Member Name]" }}'
## To Squad Managed by: `{{ existing_manager_slug | default: "[Existing Manager Slug]" }}`

## 1. Introduction & Justification

*   **Proposal Date:** `{{ created_date }}`
*   **Reason for Proposal:** `{{ reason_for_proposal | default: "[State the primary driver for needing this new squad member role.]" }}`
*   **Primary Justification:** `{{ primary_justification_for_new_role | default: "[Elaborate on the problem this new role solves or the capability gap it fills within the existing squad.]" }}`

## 2. Proposed New Squad Member Role Definition

### 2.1. Proposed Mode Name & Slug
*   **Name:** `{{ proposed_new_member_name | default: "[Proposed Human-Friendly Name with Emoji]" }}`
*   **Slug:** `{{ proposed_new_member_slug | default: "[proposed-slug-for-new-member]" }}`
*   **Proposed Classification:** `[worker/specialist]`

### 2.2. Core Responsibility & Domain Focus
*   `[Describe in detail the primary responsibilities and the specific domain of expertise for this new squad member. What unique tasks will it perform? What value will it add? This section should contain enough detail to inform its future .mode.md system prompt.]`

### 2.3. Primary Output Artifact(s)
*   **Description:** `[Describe the main tangible deliverable(s) this new mode will produce.]`
*   **Format/Template:** `[Specify the format and, if applicable, the primary template it will use for its output (e.g., path to a new or existing design artifact template).]`
*   **Example Output:** `[Brief example or description of what its output would look like.]`

### 2.4. Key Skills & Knowledge Required
*   `[List essential skills, technologies, or domain knowledge this new mode must possess. This will inform its future KB content.]`
    *   Skill 1
    *   Skill 2

## 3. Integration into Existing Squad Workflow

### 3.1. Placement in Workflow Sequence
*   `[Describe precisely where this new squad member fits into the existing workflow orchestrated by the '{{ existing_manager_slug }}' mode. Does it replace an existing step, augment a step, run in parallel, or add a new sequential step? Refer to the Manager's current 'kb/procedures/01-main-orchestration-flow.md'.]`
*   **Expected Placement:** `{{ expected_placement_in_workflow | default: "[Describe placement]" }}`

### 3.2. Input Artifacts Required
*   `[What specific artifacts (outputs from other existing squad members or the Manager) will this new mode require as input to perform its function? Be specific about source and format.]`
    *   Input 1: From `[Source Mode Slug/Role]` - `[Artifact Name/Type]`
    *   Input 2: ...

### 3.3. Output Artifacts & Downstream Consumers
*   `[What are its primary outputs (already described in 2.3)?]`
*   `[Which existing (or new) squad members will consume these outputs? How will these outputs be used by them? This helps identify changes needed in subsequent squad members' tasks.]`

## 4. Impact on Existing Manager Mode (`{{ existing_manager_slug }}`)

*   **Changes to Manager's Orchestration Flow (`kb/procedures/01-main-orchestration-flow.md`):**
    *   `[Detail the specific modifications needed in the Manager's main KB procedure to incorporate this new role, including new delegation steps, and changes to input/output handling for adjacent squad members.]`
*   **Changes to Manager's Squad Composition Document (`kb/reference/00-squad-composition.md`):**
    *   `[The new member will need to be added to this reference document.]`
*   **Changes to Manager's `.mode.md`:**
    *   The `delegate_to` list in the Manager's TOML metadata will need to be updated to include `{{ proposed_new_member_slug }}`.

## 5. Initial Knowledge & Research Plan (for the New Member)

*   **Key KB `skills/` Topics to Bootstrap:**
    *   `[Skill 1 essential for this new role]`
    *   `[Skill 2 essential for this new role]`
*   **Key KB `wisdom/` Topics to Bootstrap:**
    *   `[Principle 1 relevant to this new role]`
*   **Immediate Research Needs (if any):**
    *   `[Are there any specific topics that need immediate research (potentially using MCP tools) to make this mode effective from the start? Refer to template_03_squad_knowledge_and_research_plan.md for structure if extensive research is needed.]`

## 6. Open Questions & Considerations

[List any unresolved questions, potential challenges, or alternative approaches considered for this new role.]

## 7. Proposed Next Steps (If Approved)

1.  Formally approve this proposal.
2.  Create the `.mode.md` file, core principles rule, and initial KB structure for `{{ proposed_new_member_slug }}` (following `developer_guides/02_creating_new_squad_member_modes.md`).
3.  Populate initial key `skills/` or `wisdom/` articles for the new mode.
4.  Update the `{{ existing_manager_slug }}` mode's `.mode.md` (`delegate_to` list).
5.  Update the `{{ existing_manager_slug }}` mode's KB (`01-main-orchestration-flow.md` and `00-squad-composition.md`).
6.  Test the modified workflow of the `{{ existing_manager_slug }}` including the new member.