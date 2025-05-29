# Documentation: Template `template_00_kb_example_file.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Example Files**. These files are stored within a mode's `kb/examples/` directory and are used to provide concrete illustrations of various artifacts (like MDTM tasks, session artifacts, design documents), task structures, or other important document types used by or relevant to that specific mode within the Roo Commander ecosystem.

Each KB Example File acts as a wrapper, providing metadata about the example itself, and then embeds the actual example content. This helps in organizing, understanding, and utilizing examples effectively.

## 2. Usage

1.  **Copy Template:** When creating a new example file for a mode's KB by an agent like `meta-kb-editor` or a human developer:
    *   Copy `[.roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.md](.roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.md)` to the relevant mode's `kb/examples/` directory (e.g., `[.roo/commander/modes/manager-data-product/kb/examples/]`).
2.  **Rename File:** Rename the copied file descriptively, often using a numbered prefix and indicating what it exemplifies (e.g., `01-sample-input-mdtm-task-for-manager.md`).
3.  **Populate TOML Frontmatter (for the Example File Wrapper - the instance of this template):**
    *   Replace all placeholders (e.g., `[mode_slug_uppercase]`, `[Mode Name]`, `[mode_slug]`, `[ShortDescription]`, `[artifact_type_tag]`) with values specific to the mode and the example.
    *   The `id` should be unique (e.g., `KB-EX-MDP-INPUT-TASK-V1`).
    *   `target_audience` **MUST** include the mode's slug.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   In `related_context`, **crucially link to the template file that the embedded example is an instance of** (if applicable, e.g., `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.md]`). Also link to the mode definition this example is for.
    *   Fill in "Example Specific Fields" (`illustrates_artifact_type`, `scenario_description`, etc.) if applicable, or remove them.
4.  **Embed Example Content in Markdown Body (of the instance file):**
    *   Replace `[Mode Name]` and `[mode_slug]` placeholders.
    *   In Section 2 ("Example Content"), place the actual example.
    *   If the example itself is a TOML+Markdown document (like an MDTM task), it **MUST include its own `+++` TOML frontmatter block and subsequent Markdown body.** This clearly delineates the example artifact within the wrapper.
    *   Ensure all file paths within the embedded example content also adhere to the `.roo/` anchored workspace-root-relative path standard.

## 3. TOML Frontmatter Schema (for an instance of `template_00_kb_example_file.md`)

*   **`id` (String, Required):** Unique ID for the KB Example document.
    *   *Convention:* `KB-EX-[mode_slug_uppercase]-[ShortDescription]-V[Version]`
    *   *Placeholder in template:* `"KB-EX-[mode_slug_uppercase]-[ShortDescription]-V[Version]"`
*   **`title` (String, Required):** Descriptive title of the example.
    *   *Placeholder in template:* `"[Mode Name]: Example - [Descriptive Title of What This Example Illustrates]"`
*   **`context_type` (String, Fixed: `"kb_example"`).**
*   **`scope` (String, Required):** What this example illustrates and for which mode.
    *   *Placeholder in template:* `"Provides a concrete example of [artifact_type_being_exemplified] relevant to the '[Mode Name]' (`[mode_slug]`) mode."`
*   **`target_audience` (Array of Strings, Required):** Mode slug(s) and relevant human roles.
    *   *Placeholder in template:* `["[mode_slug]", "developers_maintaining_mode", "users_learning_system"]`
*   **`granularity` (String, Fixed: `"specific_instance"`).**
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"active"`, `"deprecated"`
*   **`created_date` (String, Required):** Date of example article creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this example document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"kb"`, `"example"`, `"[mode_slug_tag]"`. Add a tag for the artifact type being shown.
    *   *Placeholder in template:* `["kb", "example", "[mode_slug_tag]", "[artifact_type_tag]"]`
*   `related_context` (Array of Strings, Required): Path to the template being exemplified (if any) and the relevant mode definition.
    *   *Placeholders in template show examples.*
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md"`

### Example Specific Fields (Optional in the instance's TOML)

*   `illustrates_artifact_type` (String, Optional): The type of document or artifact the embedded example represents.
    *   *Placeholder in template:* `"[e.g., MDTM Task, Session Log, Product Strategy Document, Squad Sub-Task. Or remove field.]"`
*   `scenario_description` (String, Optional, Multiline): A brief description of the context or scenario this example pertains to.
    *   *Placeholder in template:* `"[Brief description of the scenario this example represents. Or remove field.]"`
*   `source_for_example_content` (String, Optional): Where the example content was derived from.
    *   *Placeholder in template:* `"[e.g., Based on template_X.md, Manually crafted for illustration. Or remove field.]"`
*   `key_takeaway_from_example` (String, Optional, Multiline): The main point or learning this example is meant to convey.
    *   *Placeholder in template:* `"[What is the main point this example demonstrates? Or remove field.]"`

## 4. Markdown Body Structure (for an instance of `template_00_kb_example_file.md`)

*   `# [Mode Name]: Example - {{ title }}`: Main title.
*   `## 1. Purpose of this Example 🎯`: Explains what the example shows and for whom.
*   `## 2. Example Content 📄`: This section contains the actual embedded example. If the example is a TOML+MD file, it starts with its own `+++`.
*   `## 3. How [Mode Name] Uses This Example (Interpretation Guide) ⚙️`: Guidance for modes or humans on interpreting or using the example.

This template provides a standardized way to create and document examples within any mode's Knowledge Base, improving clarity, reusability, and understanding of how various artifacts should be structured and used.