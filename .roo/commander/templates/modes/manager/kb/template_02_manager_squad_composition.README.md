# Documentation: Template `template_02_manager_squad_composition.md`

## 1. Purpose

This template defines the standard structure for a **Manager Mode's Squad Composition & Roles reference document**. This is a critical Knowledge Base (KB) file, typically named `00-[squad_name_lc]-squad-composition.md` (e.g., `00-data-product-squad-composition.md`) and located in a Manager mode's `kb/reference/` directory.

Its purpose is to provide the Manager mode with a definitive reference for:
*   The members of the specialist "squad" it orchestrates.
*   The specific role and primary responsibility of each squad member within the managed workflow.
*   The typical sequence in which squad members are engaged.
*   The key input artifacts each squad member expects and the key output artifacts they produce (including target locations and templates used).

This document is essential for the Manager mode to correctly plan and delegate MDTM sub-tasks as part of its main orchestration flow (defined in its `kb/procedures/01-main-orchestration-flow.md` or similar).

## 2. Usage

1.  **Copy Template:** When defining the squad for a new Manager mode by an agent like `meta-kb-editor` or a human developer:
    *   Copy `[.roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.md](.roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.md)` to the Manager's `kb/reference/` directory.
2.  **Rename File:** Rename it appropriately, e.g., `00-data-product-squad-composition.md` for `manager-data-product`.
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[manager_slug_uppercase]`, `[Manager Mode Name]`, `[manager_slug]`, `[Squad Name]`, `[squad_name_tag]`, `[Primary Workflow Name]`) with values specific to THIS Manager mode and its squad.
    *   The `id` should be unique (e.g., `KB-REF-MDP-SQUAD-COMP-V1`).
    *   `target_audience` **MUST** be the Manager's slug.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Ensure `related_context` links to the Manager's `.mode.md` and its main orchestration flow KB procedure. Optionally add links to each squad member's `.mode.md`.
4.  **Customize Markdown Body (of the instance file):**
    *   Replace all bracketed placeholders like `[Manager Mode Name]`, `[manager_slug]`, `[Squad Name]`, `[Primary Workflow Name / Overall Squad Goal]`, `[squad_member_1_slug]`, `[ProductNameOrIdentifier]`, `[ActiveSessionPath]`, `[output_subdir]`.
    *   **Crucially, Section 3 ("Squad Members & Workflow Sequence") MUST be detailed extensively.** List each squad member in operational order, specifying their role, mode slug, responsibility for that phase, typical inputs, key outputs (including target filenames, `.roo/` anchored paths, and paths to templates they use).
    *   The Mermaid diagram in Section 4 is optional but highly recommended for visualizing complex flows.

## 3. TOML Frontmatter Schema (for an instance of `template_02_manager_squad_composition.md`)

*   **`id` (String, Required):** Unique ID.
    *   *Convention:* `KB-REF-[manager_slug_uppercase]-SQUAD-COMP-V[Version]`
    *   *Placeholder in template:* `"KB-REF-[manager_slug_uppercase]-SQUAD-COMP-V[Version]"`
*   **`title` (String, Required):** Title of the reference document.
    *   *Placeholder in template:* `"[Manager Mode Name]: [Squad Name] Squad Composition & Roles"`
*   **`context_type` (String, Fixed: `"kb_reference"`).**
*   **`scope` (String, Required):** Describes the document's purpose for the Manager.
    *   *Placeholder in template:* `"Defines the members, roles, sequence, and key I/O for the '[Squad Name]' squad, managed by the '[Manager Mode Name]' (`[manager_slug]`) mode for the '[Primary Workflow Name]' workflow."`
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the Manager mode.
    *   *Placeholder in template:* `["[manager_slug]"]`
*   **`granularity` (String, Fixed: `"detailed_reference"`).**
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
*   **`created_date` (String, Required):** Date of creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Document version instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"kb"`, `"reference"`, `"manager"`, `"[manager_slug_tag]"`, `"squad-composition"`, `"[squad_name_tag]"`, `"workflow-definition"`.
    *   *Placeholder in template:* `["kb", "reference", "manager", "[manager_slug_tag]", "squad-composition", "[squad_name_tag]", "workflow-definition"]`
*   `related_context` (Array of Strings, Required): Key related documents as listed in the template, with placeholders for mode-specific paths.
*   **`template_schema_doc` (String, Required):** Path to this schema doc.
    *   *Value:* `".roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.README.md"`

### Reference Specific Fields (Optional in the instance's TOML)

*   `primary_workflow_name` (String, Optional): Name of the workflow this squad executes.
    *   *Placeholder in template:* `"[Name of the workflow this squad executes, e.g., Data Product PoC Design. Or remove field.]"`
*   `overall_squad_goal` (String, Optional): The ultimate deliverable of the squad.
    *   *Placeholder in template:* `"[The ultimate deliverable or state this squad aims to achieve. Or remove field.]"`

## 4. Markdown Body Structure (for an instance of `template_02_manager_squad_composition.md`)

*   `# [Manager Mode Name]: [Squad Name] Squad Composition & Roles`: Main title.
*   `## 1. Objective 🎯`: Purpose of this document for the specific Manager.
*   `## 2. Squad Overview 🧑‍🤝‍🧑`: Name of the squad, managing mode, and primary goal.
*   `## 3. Squad Members & Workflow Sequence 🔄`: **The core, highly customized section.** Details each squad member/phase in sequence: Role, Mode Slug, Responsibility, Inputs, Outputs (including paths and templates used).
*   `## 4. Artifact Flow Summary (Optional Visual) 📊`: Optional Mermaid diagram.
*   `## 5. Notes on Orchestration 📝`: Brief notes on how the Manager uses this information.

This template provides a structured way for each Manager mode to define and reference the composition and operational flow of its specialist squad, ensuring clarity for its orchestration logic.