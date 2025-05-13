# Developer Guide: Creating and Managing System Templates

## 1. Introduction

The Roo Commander V8 system utilizes a comprehensive set of TOML+Markdown templates to ensure consistency and structure for all key documents and definitions. This includes templates for AI Mode Definitions, Workspace and Mode-Specific Rules, Knowledge Base (KB) articles, MDTM Task Files, Session Logs, Session Artifacts, and Design Artifacts produced by specialist squads.

This guide is for developers and system architects who need to:
*   Understand how to use existing templates.
*   Propose and create new template types for new kinds_of documents or components.
*   Maintain the template library.

All system templates are centrally located in: `.roo/commander/templates/`

An overview of all available templates can be found in `[./04_template_overview.md](./04_template_overview.md)`.

## 2. Why Templates are Critical

*   **Consistency:** Ensure all instances of a document type (e.g., all MDTM tasks, all mode definitions) have a standard structure and metadata.
*   **Machine Readability:** Provide a predictable format for AI modes and tools to parse and process information.
*   **Human Readability & Understanding:** A consistent structure makes it easier for developers and users to find information and understand the purpose of different files.
*   **Reduced Errors:** Starting from a template reduces the chance of missing required fields or using incorrect formatting.
*   **Maintainability:** Changes to a standard document structure can be managed by updating the template and its schema.

## 3. Using Existing Templates

When you need to create a new document that follows a standard structure (e.g., a new MDTM task, a new mode's KB README, a new skill article for a mode's KB):

1.  **Identify the Correct Template:**
    *   Consult the `[./04_template_overview.md](./04_template_overview.md)` to find the appropriate template for the type of document you need to create. This overview lists templates and their purposes.
    *   Templates are organized into subdirectories within `.roo/commander/templates/` by category (e.g., `modes/`, `rules/`, `tasks/`, `sessions/`, `design_artifacts/`). Mode KB article templates are further organized under `modes/common/kb/`.
2.  **Review the Template's Schema Documentation (`.README.md`):**
    *   **Crucially, every template `.md` file has an accompanying `.[template_name].README.md` file in the same directory.** This README file is the **schema documentation** for that template.
    *   It details:
        *   The purpose of the template.
        *   How to use it (copying, renaming).
        *   A detailed breakdown of all **TOML frontmatter fields**: their names, data types, whether they are required or optional, and example values.
        *   An explanation of the **Markdown body structure** and the purpose of its standard sections.
    *   **Thoroughly read this README before using the template.**
3.  **Copy and Rename the Template `.md` File:**
    *   Copy the template `.md` file (e.g., `template_00_mdtm_task_generic.md`) to the correct location in the workspace where your new document instance will reside (e.g., into `.roo/commander/tasks/` for a new task).
    *   Rename the file according to the established naming conventions (see `[../standards/01-naming-conventions.md](../standards/01-naming-conventions.md)`).
4.  **Populate the New File:**
    *   Open your newly copied and renamed file.
    *   Fill in the TOML frontmatter fields according to the schema defined in the template's README. Pay close attention to required fields and correct data types.
    *   Populate the Markdown body with your specific content, following the structure outlined in the template and its README.

## 4. Proposing and Creating NEW Template Types

If the existing templates in `.roo/commander/templates/` do not adequately cover a new type of structured document or component you need to introduce:

1.  **Identify the Need & Justification:**
    *   Clearly define the purpose of the new document type.
    *   Why do existing templates not suffice?
    *   What specific metadata (TOML fields) and content structure (Markdown sections) are required?
    *   How will this new template improve consistency or functionality?
2.  **Proposal (Recommended for significant new types):**
    *   Consider drafting a brief proposal or discussing with the team/architect to ensure the new template type is necessary and well-designed.
3.  **Design the New Template (`.md` file):**
    *   **Location:** Create the new template `.md` file in the appropriate subdirectory of `.roo/commander/templates/` (e.g., if it's a new type of rule template, it goes in `templates/rules/`).
    *   **Naming:** Follow the convention `template_[NN]_[type_description].md`.
    *   **TOML Frontmatter:** Define all necessary TOML fields. For each field, consider:
        *   Descriptive name (lowercase_snake_case).
        *   Data type (String, Array, Boolean, Integer, Datetime, etc.).
        *   Whether it's Required or Optional.
        *   Example values.
        *   Clear comments in the template explaining each field.
        *   Include a `template_schema_doc` field that will point to its own `.README.md` file.
    *   **Markdown Body:** Define the standard sections, headings, and placeholder content for the Markdown part of documents created from this template.
4.  **Create the Schema Documentation (`.README.md` file) for the New Template:**
    *   For every new template `.md` file, you **MUST** create a corresponding `.README.md` file in the same directory (e.g., `template_my_new_type.README.md`).
    *   **Use an existing template README as a model** (e.g., copy `template_00_workspace_rule.README.md` and adapt it).
    *   This README **MUST** detail:
        *   The purpose of the new template.
        *   How to use it.
        *   A comprehensive **TOML Frontmatter Schema** section, listing every TOML field defined in your new template, its data type, purpose, if it's required/optional, and an example.
        *   An explanation of the **Markdown Body Structure**.
5.  **Update Template Overview:**
    *   Add your new template and a brief description to the main `[./04_template_overview.md](./04_template_overview.md)` document so others can discover and use it.
6.  **Review & Test:**
    *   Have the new template and its README reviewed.
    *   Create a few example instances of documents using the new template to ensure it works as expected and is easy to use.
7.  **Communication:** Announce the availability of the new template to relevant team members or mode developers.

## 5. Maintaining Existing Templates

*   **Updates:** If an existing template's structure or schema needs to change:
    *   Carefully edit the template `.md` file.
    *   **Crucially, update its corresponding `.README.md` schema documentation** to reflect all changes to TOML fields or Markdown structure.
    *   Increment the `version` in the template's TOML if the change is significant.
    *   Update the `last_updated` date.
*   **Impact Analysis:** Consider the impact of template changes on existing documents created from older versions of that template. Major structural changes might require a new version of the template rather than modifying the old one in a breaking way.
*   **Deprecation:** If a template is no longer needed, mark its `status` as `"deprecated"` in its TOML and update the `04_template_overview.md`. Consider moving it to an `archive/` subfolder within `templates/`.

Adherence to these guidelines for creating and managing templates will ensure the Roo Commander V8 system remains built on a foundation of clear, consistent, and well-documented structures.