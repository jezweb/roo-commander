# Documentation: Template `template_00_kb_example_file.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Example Files**. These files are stored within a mode's `kb/examples/` directory and are used to provide concrete illustrations of various artifacts, task structures, or other important document types used within the Roo Commander V8 ecosystem.

Each KB Example File acts as a wrapper, providing metadata about the example itself, and then embeds the actual example content. This helps in organizing and understanding the purpose of different examples.

## 2. Usage

1.  **Copy Template:** When creating a new example file for a mode's KB:
    *   Copy `.roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.md` to the relevant mode's `kb/examples/` directory (e.g., `.roo/commander/modes/manager-data-product/kb/examples/`).
2.  **Rename File:** Rename the copied file descriptively, often using a numbered prefix and indicating what it exemplifies (e.g., `01-sample-input-mdtm-task-for-manager.md`).
3.  **Populate TOML Frontmatter (for the Example File Wrapper):**
    *   Fill in all placeholders in the TOML block of the new example file.
    *   `id`: Unique ID for this KB example document itself (e.g., `KB-EX-MDP-INPUT-TASK-V1`).
    *   `title`: Descriptive title for the example (e.g., `"Example: MDTM Task for Manager Data Product (from Roo Commander)"`).
    *   `scope`: Describe what this example illustrates and for which mode.
    *   `target_audience`: Include the mode slug for which this example is primarily intended.
    *   `tags`: Include `"kb"`, `"example"`, the mode's slug tag, and a tag for the artifact type being shown.
    *   `related_context`: **Crucially, link to the template file that the embedded example is an instance of** (e.g., `template_00_mdtm_task_generic.md`). Also link to the mode definition this example is for.
    *   `illustrates_artifact_type`: Specify what kind of document the example content represents (e.g., "MDTM Task", "Product Strategy Document").
    *   Customize other optional fields like `scenario_description`, `source_for_example_content`, `key_takeaway_from_example`.
4.  **Embed Example Content in Markdown Body:**
    *   In Section 2 ("Example Content") of the Markdown body, place the actual example.
    *   If the example itself is a TOML+Markdown document (like an MDTM task), **it MUST include its own `+++` TOML frontmatter block and subsequent Markdown body.** This clearly delineates the example artifact within the wrapper. Use a fenced code block with `toml` or `markdown` language identifier if you want to show the raw text, or paste it directly if it should be rendered as part of the example page. For clarity, showing it as if it's a direct include is often best.

## 3. TOML Frontmatter Schema (for the Example File Wrapper)

*   **`id` (String, Required):** Unique ID for the KB Example document. Convention: `KB-EX-[MODE_PREFIX]-[ShortDescription]-V[Version]`.
*   **`title` (String, Required):** Descriptive title of the example.
*   **`context_type` (String, Fixed: `"kb_example"`).**
*   **`scope` (String, Required):** What this example illustrates and for which mode.
*   **`target_audience` (Array of Strings, Required):** Mode slug(s) and relevant human roles.
*   **`granularity` (String, Fixed: `"specific_instance"`).**
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Version of this example document.
*   **`tags` (Array of Strings, Required):** Include `"kb"`, `"example"`, `"[mode_slug_tag]"`, `"[artifact_type_tag]"`.
*   `related_context` (Array of Strings, Required): Path to the template being exemplified and the relevant mode definition.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md"`

### Example Specific Fields (Customize as needed in TOML)

*   **`illustrates_artifact_type` (String, Required):** The type of document or artifact the embedded example represents (e.g., "MDTM Task", "Session Log", "Product Strategy Document").
*   `scenario_description` (String, Optional): A brief description of the context or scenario this example pertains to.
*   `source_for_example_content` (String, Optional): Where the example content was derived from (e.g., "Based on template_X.md", "Manually crafted").
*   `key_takeaway_from_example` (String, Optional): The main point or learning this example is meant to convey.

## 4. Markdown Body Structure (for the Example File Wrapper)

*   `# Example: {{ title }}`: Main title.
*   `## 1. Purpose of this Example`: Explains what the example shows and for whom.
*   `## 2. Example Content`: This section contains the actual embedded example. If the example is a TOML+MD file, it starts with its own `+++`.
*   `## 3. How to Use This Example`: Guidance for modes or humans on interpreting or using the example.

This template provides a standardized way to create and document examples within any mode's Knowledge Base, improving clarity and reusability.