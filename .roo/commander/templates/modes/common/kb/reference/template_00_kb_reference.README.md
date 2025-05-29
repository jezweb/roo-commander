# Documentation: Template `template_00_kb_reference.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Reference documents**. These documents are stored within a mode's `kb/reference/` directory and are designed to provide specific, factual information that the mode needs to consult to perform its tasks accurately.

This can include:
*   Lists of known entities (e.g., available squad members for a Manager, supported parameters for a tool).
*   Mappings between different data points or identifiers.
*   Summaries of key configuration settings relevant to the mode.
*   Glossaries of terms specific to the mode's domain.
*   Pointers to critical external or internal documentation that the mode needs to reference.

Unlike `kb_procedure` documents (which detail "how to do" something) or `kb_skill` documents (which detail specific techniques), `kb_reference` documents primarily provide "what is" or "where to find" information.

## 2. Usage

1.  **Copy Template:** When creating a new reference document for a mode's KB by an agent like `meta-kb-editor` or a human developer:
    *   Copy `[.roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.md](.roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.md)` to the relevant mode's `kb/reference/` directory (or a relevant subdirectory within `reference/`).
2.  **Rename File:** Rename the copied file descriptively, often using a numbered prefix and indicating its content (e.g., `00-squad-composition.md`, `01-api-endpoint-list.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[mode_slug_uppercase]`, `[Mode Name]`, `[mode_slug]`, `[topic]`, `[reference_topic_tag]`) with values specific to the mode and the reference material.
    *   The `id` should be unique (e.g., `KB-REF-MDP-SQUAD-COMP-V1`).
    *   `target_audience` **MUST** include the mode's slug.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Fill in optional "Reference Specific Fields" (`data_source`, `update_frequency`, etc.) if applicable, or remove them.
4.  **Define Reference Content in Markdown (of the instance file):**
    *   Replace all `[Mode Name]` and `[mode_slug]` placeholders.
    *   In Section 2 ("Reference Data / Information"), choose or adapt one of the example structures (List/Table, Definition List, Config Snippet, Pointers) or create a custom structure appropriate for the reference material. Delete unused examples from the instance.
    *   Clearly present the reference data in a way that is easily parsable by the target AI mode.
    *   Explain how the mode uses this reference in Section 3.

## 3. TOML Frontmatter Schema (for an instance of `template_00_kb_reference.md`)

*   **`id` (String, Required):** Unique ID for the KB Reference document.
    *   *Convention:* `KB-REF-[mode_slug_uppercase]-[ShortName]-V[Version]`
    *   *Placeholder in template:* `"KB-REF-[mode_slug_uppercase]-[ShortName]-V[Version]"`
*   **`title` (String, Required):** Title of the reference article.
    *   *Placeholder in template:* `"[Mode Name]: Reference - [Descriptive Title of the Reference Material]"`
*   **`context_type` (String, Fixed: `"kb_reference"`).**
*   **`scope` (String, Required):** Describes the information this reference provides for the mode.
    *   *Placeholder in template:* `"Provides reference material on [topic] for the '[Mode Name]' (`[mode_slug]`) mode."`
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
    *   *Placeholder in template:* `["[mode_slug]"]`
*   **`granularity` (String, Required):** Describes the nature of the reference material.
    *   *Options:* `"detailed_reference"`, `"summary_list"`, `"mapping_table"`, `"glossary_section"`, `"configuration_summary"`
    *   *Placeholder in template:* `"detailed_reference"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"active"`, `"deprecated"`
*   **`created_date` (String, Required):** Date of reference article creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this reference document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"kb"`, `"reference"`, `"[mode_slug_tag]"`. Add content-specific tags.
    *   *Placeholder in template:* `["kb", "reference", "[mode_slug_tag]", "[reference_topic_tag]"]`
*   `related_context` (Array of Strings, Optional): Links to relevant mode files or other KB articles.
    *   *Placeholders in template show examples.*
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.README.md"`

### Reference Specific Fields (Optional in the instance's TOML)

*   `data_source` (String, Optional): Where the reference information originates from.
    *   *Placeholder in template:* `"[e.g., Derived from workspace analysis, External documentation URL, Curated list. Or remove field.]"`
*   `update_frequency` (String, Optional): How often this reference might need updating.
    *   *Placeholder in template:* `"[e.g., As needed, Quarterly, When new X is added. Or remove field.]"`
*   `key_entities_referenced` (Array of Strings, Optional): Main entities this reference document is about.
    *   *Placeholder in template:* `["[Entity1 or remove array field]", "[Entity2 or remove array field]"]`

## 4. Markdown Body Structure (for an instance of `template_00_kb_reference.md`)

*   `# [Mode Name]: Reference - {{ title }}`: Main title.
*   `## 1. Objective / Purpose of this Reference 🎯`: Explains what information this document provides and why it's important for the mode.
*   `## 2. Reference Data / Information 📚`: **The core section containing the actual reference material.** This section's format is flexible (tables, lists, definitions, etc.) based on the type of reference. The template provides several examples.
*   `## 3. How [Mode Name] Uses This Reference ⚙️`: Explains when and how the mode consults this information.
*   `## 4. Maintenance Notes (Optional) 🛠️`: Information about keeping the reference data current.

This template provides a standardized way to store and manage factual, reference-oriented information within a mode's Knowledge Base, ensuring it's accessible and usable by the AI mode.