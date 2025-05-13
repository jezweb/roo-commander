# Documentation: Template `template_02_manager_squad_composition.md`

## 1. Purpose

This template defines the standard structure for a **Manager Mode's Squad Composition & Roles reference document**. This is a critical Knowledge Base (KB) file, typically named `00-squad-composition.md` (or similar, e.g., `00-[squad_name]-squad-composition.md`) and located in a Manager mode's `kb/reference/` directory.

Its purpose is to provide the Manager mode with a definitive reference for:
*   The members of the specialist "squad" it orchestrates.
*   The specific role and primary responsibility of each squad member within the managed workflow.
*   The typical sequence in which squad members are engaged.
*   The key input artifacts each squad member expects and the key output artifacts they produce.

This document is essential for the Manager mode to correctly plan and delegate MDTM sub-tasks as part of its main orchestration flow (defined in its `kb/procedures/01-orchestration-flow.md`).

## 2. Usage

1.  **Copy Template:** When defining the squad for a new Manager mode:
    *   Copy `.roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.md` to the Manager's `kb/reference/` directory.
2.  **Rename File:** Rename it appropriately, e.g., `00-data-product-squad-composition.md` for `manager-data-product`.
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique, e.g., `KB-REF-MDP-SQUAD-COMP-V1`.
    *   `title`: `"[Manager Mode Name]: [Squad Name] Squad Composition & Roles"`.
    *   `target_audience`: **MUST** be the Manager's slug.
    *   `tags`: Include `"[manager_slug_tag]"`, `"manager"`, `"squad-composition"`, and a tag for the `"[squad_name_tag]"`.
    *   `related_context`: Link to the Manager's `.mode.md` and its main orchestration flow KB procedure.
4.  **Customize Markdown Body:**
    *   Replace all bracketed placeholders like `[Manager Mode Name]`, `[manager_slug]`, `[Squad Name]`, `[Primary Workflow Name / Overall Squad Goal]`.
    *   **Crucially, Section 3 ("Squad Members & Workflow Sequence") MUST be detailed extensively.** List each squad member in operational order, specifying their role, mode slug, responsibility for that phase, typical inputs, and key outputs (including target filename and location).
    *   The Mermaid diagram in Section 4 is optional but highly recommended for visualizing complex flows.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `KB-REF-[MANAGER_SLUG_UPPERCASE]-SQUAD-COMP-V[Version]`.
*   **`title` (String, Required):** Title: `"[Manager Mode Name]: [Squad Name] Squad Composition & Roles"`.
*   **`context_type` (String, Fixed: `"kb_reference"`).**
*   **`scope` (String, Required):** Describes that this document defines the squad for the specific Manager.
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the Manager mode.
*   **`granularity` (String, Fixed: `"detailed_reference"`).**
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Document version.
*   **`tags` (Array of Strings, Required):** **MUST** include `"kb"`, `"reference"`, `"manager"`, `"[manager_slug_tag]"`, `"squad-composition"`, `"[squad_name_tag]"`, `"workflow-definition"`.
*   `related_context` (Array of Strings, Required): Key related documents as listed in the template.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.README.md"`

### Reference Specific Fields (Optional)

*   `primary_workflow_name` (String, Optional): Name of the workflow this squad executes.
*   `overall_squad_goal` (String, Optional): The ultimate deliverable of the squad.

## 4. Markdown Body Structure

*   `# [Manager Mode Name]: [Squad Name] Squad Composition & Roles`: Main title.
*   `## 1. Objective`: Purpose of this document for the specific Manager.
*   `## 2. Squad Overview`: Name of the squad, managing mode, and primary goal.
*   `## 3. Squad Members & Workflow Sequence`: **This is the core, highly customized section.** Details each squad member/phase in sequence: Role, Mode Slug, Responsibility, Inputs, Outputs.
*   `## 4. Artifact Flow Summary (Optional Visual)`: Optional Mermaid diagram.
*   `## 5. Notes on Orchestration`: Brief notes on how the Manager uses this information.

This template provides a structured way for each Manager mode to define and reference the composition and operational flow of its specialist squad.