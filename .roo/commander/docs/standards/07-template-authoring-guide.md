+++
# --- Basic Metadata ---
id = "STANDARD-TEMPLATE-AUTHORING-GUIDE-V1"
title = "Standard: Template Authoring Guide"
context_type = "standards_document"
scope = "Provides guidelines and best practices for creating new TOML+Markdown templates and their accompanying schema documentation (.README.md files) within the Roo Commander workspace."
target_audience = ["developers", "system_architects", "ai_modes_involved_in_meta_development"] # Anyone creating new templates
granularity = "guide"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "1.0"
tags = ["standards", "templates", "authoring-guide", "schema-documentation", "toml-md", "development-process"]
related_context = [
    ".roo/commander/docs/standards/02-toml-md-document-format.md", # Templates use this format
    ".roo/commander/docs/standards/01-naming-conventions.md", # For template file naming and path referencing
    ".roo/commander/docs/standards/06-documentation-style-guide.md", # For writing template READMEs
    ".roo/commander/templates/" # Root directory for all templates
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Annually"
+++

# Standard: Template Authoring Guide

## 1. Purpose

This guide provides standard procedures and best practices for creating new TOML+Markdown templates and their essential accompanying schema documentation (`.README.md` files) within the Roo Commander workspace. Adherence to these guidelines ensures that new templates are:

*   Consistent with existing template structures.
*   Easily understandable and usable by both human developers and AI modes (especially those responsible for instantiating templates, like `meta-mode-developer`).
*   Well-documented, clearly defining their purpose, TOML schema, and Markdown structure.
*   Maintainable and integrate smoothly into the Roo Commander ecosystem.

All templates are stored within subdirectories of `[.roo/commander/templates/](.roo/commander/templates/)`.

## 2. General Principles for Template Design

*   **Serve a Clear Purpose:** Each template should address a distinct, recurring need for a structured document type. Avoid creating overly niche or redundant templates.
*   **Minimize Complexity:** Keep the TOML schema and Markdown structure as simple as possible while still capturing necessary information.
*   **Prioritize AI Consumability:** Design TOML fields and Markdown structures that are relatively easy for AI modes to parse, populate, and interpret.
*   **Human Readability:** Ensure the instantiated documents are also clear and readable for human developers.
*   **Consistency:** Follow established patterns from existing templates where appropriate.
*   **Comprehensive Schema Documentation:** Every template `.md` file **MUST** have a corresponding `.README.md` file in the same directory that meticulously documents its schema.

## 3. Creating a New Template (`.md` file)

### 3.1. File Naming and Location
*   **Location:** Place the new template `.md` file in the appropriate subdirectory of `[.roo/commander/templates/](.roo/commander/templates/)` based on its category (e.g., `modes/squad/`, `sessions/artifacts/note/`, `planning/squad_design/`).
*   **Naming:** Follow the convention `template_[NN]_[type_description].md` (e.g., `template_00_squad_concept_and_mission.md`, `template_01_kb_skill.md`). The `[NN]` prefix helps with ordering if multiple templates of a similar type exist. Refer to `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.

### 3.2. TOML Frontmatter Design
*   **Standard Metadata:** All templates **MUST** include a standard set of TOML fields for their own identification and documentation:
    *   `id`: Unique ID for the template itself (e.g., `TEMPLATE-SQUAD-CONCEPT-MISSION-V1`).
    *   `title`: Human-readable title of the template (e.g., `"Template: Squad Concept & Mission"`).
    *   `context_type`: Often `"template_definition"` or similar to distinguish it as a template.
    *   `scope`: Briefly describe what kind of document this template is used to create.
    *   `target_audience`: Who uses this template (e.g., `"developers"`, `"ai_modes"`).
    *   `status`: Lifecycle status of the template (e.g., `"draft"`, `"active"`).
    *   `last_updated`: Date.
    *   `version`: Version of the template.
    *   `tags`: Keywords, including `"template"`.
    *   `template_schema_doc`: **Crucially, this MUST point to its own `.README.md` schema documentation file** using a workspace-root-relative path (e.g., `".roo/commander/templates/planning/squad_design/template_00_squad_concept_and_mission.README.md"`).
*   **Content Placeholders (for the document instance):**
    *   Within the TOML frontmatter of the template (which will become the frontmatter of *instances* created from it), use the placeholder conventions defined in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`:
        *   `{{AUTO_FILLED_VARIABLE}}` for values an AI/script will insert during instantiation (e.g., `created_date = "{{YYYYMMDD}}"`).
        *   `[Descriptive Placeholder for Manual/Contextual Fill]` for values a user or AI will provide based on context (e.g., `title = "Squad Concept & Mission: [Full Name of New Squad Unit]"`).
        *   For optional fields, use placeholders like `"[Describe value or remove field if not applicable]"`.
*   **Field Optionality:** Clearly distinguish in your mind (and document in the README) which fields in the *instance's* TOML will be Required, Recommended, or Optional. All potential fields should be present (uncommented) in the template's TOML.

### 3.3. Markdown Body Design
*   Define the standard sections, headings, and placeholder content for the Markdown body of documents that will be created from this template.
*   Use Markdown formatting consistently as per `[.roo/commander/docs/standards/06-documentation-style-guide.md](.roo/commander/docs/standards/06-documentation-style-guide.md)`.
*   Use placeholders (`{{VARIABLE}}` or `[Descriptive Placeholder]`) in the Markdown body where dynamic or user-supplied content is expected in instances.

## 4. Creating the Schema Documentation (`.README.md` for the Template)

For every new template `.md` file, you **MUST** create a corresponding `.README.md` file in the same directory (e.g., `template_00_squad_concept_and_mission.README.md`). This file documents the template itself.

### 4.1. File Naming
*   The README filename **MUST** match the template filename, with `.README` inserted before `.md`.

### 4.2. Content of the Template's README

*   **Purpose Section:** Clearly state the purpose of the template: what kind of document it is used to create.
*   **Usage Section:** Explain how to use the template:
    *   Where to copy it.
    *   How to rename the instance.
    *   General instructions for populating the TOML frontmatter and Markdown body of an *instance* created from this template.
    *   Specifically explain how AI modes should handle placeholders for Required, Recommended, and Optional fields (i.e., fill Required; fill Recommended if data exists, otherwise remove; fill Optional if data exists, otherwise remove).
*   **TOML Frontmatter Schema Section (CRITICAL):**
    *   This section **MUST** meticulously list and describe **every TOML field that will appear in an *instance* created from this template.**
    *   For each field, specify:
        *   **Field Name** (e.g., `id`, `title`, `squad_unit_name`).
        *   **Data Type** (e.g., String, Integer, Boolean, Array of Strings, ISO 8601 Datetime).
        *   **Required/Recommended/Optional Status:** Clearly state if the field is "Required," "Recommended," or "Optional" in an instance.
        *   **Description/Purpose:** Explain what the field represents.
        *   **Convention/Example Value:** Provide an example or formatting convention (e.g., "Convention: `SQUAD-CONCEPT-[SquadUnitNameShort]-[YYYYMMDD]`", "Example: `true`").
        *   **Placeholder in Template:** Show the placeholder used in the template for this field (e.g., `"[Full Name of New Squad Unit]"`).
*   **Markdown Body Structure Section:**
    *   Describe the standard sections and headings expected in the Markdown body of an *instance* created from this template.
    *   Explain the purpose of each section.
*   **TOML Frontmatter for the README itself:** The README file also has its own TOML frontmatter, which should include:
    *   `id`: Unique ID for the README document itself.
    *   `title`: e.g., `"Documentation: Template template_00_squad_concept_and_mission.md"`
    *   `context_type`: `"template_schema_documentation"` or similar.
    *   `scope`: "Documents the schema and usage of `template_name.md`."
    *   `target_audience`: Typically `"developers"`, `"ai_modes_using_template"`.
    *   And other standard metadata fields (`status`, `last_updated`, `version`, `tags`, `template_schema_doc` pointing to itself).

## 5. Review and Approval Process for New Templates

1.  **Draft:** Create the template `.md` file and its `.README.md` schema documentation.
2.  **Proposal (Optional but Recommended for significant new types):** Briefly document the need for the new template and its intended use. This could be an MDTM task for `manager-workspace-maintenance`.
3.  **Review:** Have the template and its README reviewed by other developers or the `standards-guardian` mode for clarity, completeness, consistency with other standards, and AI-friendliness.
4.  **Testing (Conceptual):** Manually create a few example instances from the template to ensure it works as expected and is easy to use.
5.  **Integration:**
    *   Add the new template to the appropriate location in `[.roo/commander/templates/](.roo/commander/templates/)`.
    *   Update the Master Template Index (`[.roo/commander/docs/developer_guides/04_template_overview.md](.roo/commander/docs/developer_guides/04_template_overview.md)`) to include the new template and a brief description.
6.  **Communication:** Announce the availability and purpose of the new template to relevant team members or AI mode developers.

## 6. Maintaining Existing Templates

*   **Updates:** If an existing template's structure or schema needs to change:
    *   Carefully edit the template `.md` file.
    *   **Crucially, update its corresponding `.README.md` schema documentation** to reflect all changes to TOML fields or Markdown structure.
    *   Increment the `version` in the template's TOML and its README's TOML if the change is significant.
    *   Update the `last_updated` date.
*   **Impact Analysis:** Consider the impact of template changes on existing documents created from older versions of that template and on AI modes that use it. Major structural changes might require a new version of the template rather than modifying the old one in a breaking way.
*   **Deprecation:** If a template is no longer needed, mark its `status` as `"deprecated"` in its TOML and update the Master Template Index. Consider moving it to an `archive/` subfolder within `[.roo/commander/templates/](.roo/commander/templates/)`.

Adherence to these guidelines for creating and managing templates will ensure the Roo Commander system remains built on a foundation of clear, consistent, and well-documented structures, facilitating both human and AI-driven development and operation.