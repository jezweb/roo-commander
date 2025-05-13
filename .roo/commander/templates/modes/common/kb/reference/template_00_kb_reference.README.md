# Documentation: Template `template_00_kb_reference.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Reference documents**. These documents are stored within a mode's `kb/reference/` directory and are designed to provide specific, factual information that the mode needs to consult to perform its tasks accurately.

This can include:
*   Lists of known entities (e.g., available squad members for a Manager, supported parameters for a tool).
*   Mappings between different data points or identifiers.
*   Summaries of key configuration settings.
*   Glossaries of terms specific to the mode's domain.
*   Pointers to critical external or internal documentation.

Unlike `kb_procedure` documents (which detail "how to do" something), `kb_reference` documents primarily provide "what is" information.

## 2. Usage

1.  **Copy Template:** When creating a new reference document for a mode's KB:
    *   Copy `.roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.md` to the relevant mode's `kb/reference/` directory (e.g., `.roo/commander/modes/manager-data-product/kb/reference/`).
2.  **Rename File:** Rename the copied file descriptively, often using a numbered prefix and indicating its content (e.g., `00-squad-composition.md`, `01-api-endpoint-list.md`).
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block of the new reference file.
    *   `id`: Unique ID for this KB reference, including mode slug and version (e.g., `KB-REF-MDP-SQUAD-COMP-V1`).
    *   `title`: `"[Mode Name]: Reference - [Descriptive Title]"`.
    *   `scope`: Describe the information this reference provides for the specific mode.
    *   `target_audience`: **MUST** be the slug of the mode this reference is for.
    *   `tags`: Include `"kb"`, `"reference"`, `"[mode_slug_tag]"`, and keywords for the reference content.
    *   `related_context`: Link to the mode's `.mode.md`, its KB `README.md`, and any KB procedure that heavily relies on this reference.
4.  **Define Reference Content in Markdown:**
    *   Replace all bracketed placeholders like `[Mode Name]` and `[mode_slug]` with actual values.
    *   In Section 2 ("Reference Data / Information"), choose or adapt one of the example structures (List/Table, Definition List, Config Snippet, Pointers) or create a custom structure appropriate for the reference material. Delete unused examples.
    *   Clearly present the reference data.
    *   Explain how the mode uses this reference in Section 3.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `KB-REF-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]`.
*   **`title` (String, Required):** Title: `"[Mode Name]: Reference - [Descriptive Title]"`.
*   **`context_type` (String, Fixed: `"kb_reference"`).**
*   **`scope` (String, Required):** Describes the scope of this reference material for the mode.
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
*   **`granularity` (String, Required):** (e.g., `"detailed_reference"`, `"summary_list"`, `"mapping_table"`, `"glossary_section"`).
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Document version.
*   **`tags` (Array of Strings, Required):** **MUST** include `"kb"`, `"reference"`, `"[mode_slug_tag]"`. Add content-specific tags.
*   `related_context` (Array of Strings, Optional): Links to relevant mode files or KB procedures.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.README.md"`

### Reference Specific Fields (Optional in TOML)

*   `data_source` (String, Optional): Where the reference information originates from.
*   `update_frequency` (String, Optional): How often this reference might need updating.
*   `key_entities_referenced` (Array of Strings, Optional): Main entities this reference document is about.

## 4. Markdown Body Structure

*   `# [Mode Name]: Reference - {{ title }}`: Main title.
*   `## 1. Objective / Purpose of this Reference`: Explains what information this document provides and why it's important for the mode.
*   `## 2. Reference Data / Information`: **The core section containing the actual reference material.** This section's format is flexible (tables, lists, definitions, etc.) based on the type of reference. The template provides several examples.
*   `## 3. How [Mode Name] Uses This Reference`: Explains when and how the mode consults this information.
*   `## 4. Maintenance Notes (Optional)`: Information about keeping the reference data current.

This template provides a standardized way to store and manage factual, reference-oriented information within a mode's Knowledge Base.