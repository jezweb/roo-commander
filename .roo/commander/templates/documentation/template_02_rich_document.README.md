# Documentation: Template `template_02_rich_document.md`

## 1. Purpose

This template provides a flexible but structured starting point for creating **General Rich Markdown Documents**. It is intended for longer-form content that requires more organization than a simple note, such as:

*   Detailed explanations or guides.
*   Design documents or proposals not fitting other specific planning templates.
*   In-depth research summaries.
*   Comprehensive meeting minutes.
*   More elaborate KB articles that don't strictly fit the `skill`, `wisdom`, or `procedure` common templates but still need good structure.

It encourages the use of sections, subsections, and standard metadata for better organization and discoverability.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/templates/documentation/template_02_rich_document.md](.roo/commander/templates/documentation/template_02_rich_document.md)` to the desired location (e.g., a specific `docs/` subdirectory, a session's `artifacts/docs/` or `artifacts/research/`).
2.  **Rename File:** Rename descriptively (e.g., `detailed_api_design_v1.2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders. `title` is **REQUIRED**.
    *   `id` should be generated (e.g., `DOC-[TopicShort]-[YYYYMMDDHHMMSS]`).
    *   `created_date` and `last_updated` should be set by the creating agent/user.
    *   Fill or remove optional fields like `subtitle`, `document_type`, `authors`, `reviewers`, `related_context`.
    *   Add relevant `tags`.
4.  **Structure and Write Markdown Body:**
    *   Replace placeholder titles and content.
    *   Use the suggested section structure (Introduction, Main Sections, Conclusion, Appendix) as a starting point, adapting it as needed.
    *   For longer documents, manually create or plan for a Table of Contents.
    *   Adhere to `[.roo/commander/docs/standards/06-documentation-style-guide.md](.roo/commander/docs/standards/06-documentation-style-guide.md)`.

## 3. TOML Frontmatter Schema (for an instance of `template_02_rich_document.md`)

*   **`id` (String, Required):** Unique ID for the document.
    *   *Convention:* `DOC-[TopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"DOC-[TopicShort]-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Full title of the document.
    *   *Placeholder in template:* `"[Full Title of the Document]"`
*   `subtitle` (String, Optional): Optional subtitle for additional context.
    *   *Placeholder in template:* `"[Optional Subtitle for Additional Context or remove field]"`
*   `document_type` (String, Optional): Describes the nature of the document.
    *   *Placeholder in template:* `"[e.g., Design Document, Research Summary, Technical Explanation, Meeting Minutes (Detailed). Or remove field.]"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"in-review"`, `"finalized"`, `"living-document"`, `"archived"`
*   **`created_date` (String, Required):** Date of document creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this document instance.
*   `authors` (Array of Strings, Optional): Names or mode slugs of authors.
    *   *Placeholder in template:* `["[Author Name/Mode Slug or remove array field]"]`
*   `reviewers` (Array of Strings, Optional): Names or mode slugs of reviewers.
    *   *Placeholder in template:* `["[Reviewer Name/Mode Slug or remove array field]"]`
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"documentation"`. Add other relevant topic tags.
    *   *Placeholder in template:* `["documentation", "[primary_topic_tag]", "[secondary_topic_tag]"]`
*   `related_context` (Array of Strings, Optional): `.roo/` anchored paths to related documents, tasks, or sessions.
    *   *Placeholder in template shows examples and indicates it can be removed.*
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/documentation/template_02_rich_document.README.md"`

## 4. Markdown Body Structure (for an instance of `template_02_rich_document.md`)

*   `# {{ title }}`: Main title.
*   `{{ subtitle }}`: Optional subtitle.
*   Metadata line: Created, Last Updated, Version, Authors.
*   `## Table of Contents (Optional - Recommended for longer documents)`
*   `## 1. Introduction / Overview 🎯 (Example Section)`
*   `## 2. Main Section Title 📄 (Example Section)`
    *   `### 2.1. Subsection Title (Example Section)`
*   `(Additional Main Sections and Subsections as needed)`
*   `## X. Conclusion / Summary (Optional) ✅`
*   `## Appendix (Optional)`
    *   `### A.1. Related Resources`
    *   `### A.2. Glossary of Terms Used (If specific to this document)`

This template provides a flexible yet organized structure for creating more detailed and comprehensive Markdown documents within the Roo Commander workspace.