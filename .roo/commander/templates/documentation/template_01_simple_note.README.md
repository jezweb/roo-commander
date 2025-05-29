# Documentation: Template `template_01_simple_note.md`

## 1. Purpose

This template provides a very basic structure for creating **Simple Markdown Notes**. It is intended for quickly capturing ad-hoc information, thoughts, observations, or brief status updates that don't require a highly structured format but still benefit from minimal standard metadata for tracking and discoverability.

This is suitable for:
*   Session artifact notes (e.g., in `artifacts/notes/`).
*   Quick personal or team notes.
*   Drafting initial ideas before they are moved to more formal documents.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/templates/documentation/template_01_simple_note.md](.roo/commander/templates/documentation/template_01_simple_note.md)` to the desired location.
2.  **Rename File:** Rename descriptively (e.g., `NOTE-MeetingSummary-20250515100000.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders. `title` is **REQUIRED**.
    *   `id` should be generated (e.g., `NOTE-[TopicShort]-[YYYYMMDDHHMMSS]`).
    *   `created_date` and `last_updated` should be set by the creating agent/user.
    *   Add relevant `tags`.
    *   Fill or remove optional fields like `related_session_id` or `related_task_id`.
4.  **Add Content in Markdown Body:**
    *   Replace the placeholder title in the Markdown.
    *   Write the note content freely using Markdown.

## 3. TOML Frontmatter Schema (for an instance of `template_01_simple_note.md`)

*   **`id` (String, Required):** Unique ID for the note.
    *   *Convention:* `NOTE-[TopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"NOTE-[TopicShort]-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Brief title or topic of the note.
    *   *Placeholder in template:* `"[Brief Title or Topic of the Note]"`
*   **`created_date` (String, Required):** Date of note creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"note"`. Add other relevant tags.
    *   *Placeholder in template:* `["note", "[relevant_tag_1]", "[relevant_tag_2]"]`
*   `related_session_id` (String, Optional): ID of a related session, if applicable.
    *   *Placeholder in template:* `"[SESSION-ID-if-applicable or remove field]"`
*   `related_task_id` (String, Optional): ID of a related MDTM task, if applicable.
    *   *Placeholder in template:* `"[TASK-ID-if-applicable or remove field]"`
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/documentation/template_01_simple_note.README.md"`

## 4. Markdown Body Structure (for an instance of `template_01_simple_note.md`)

*   `# {{ title }}`: Main title (dynamically from TOML).
*   `*(Created: {{ created_date }})*`: Optional creation date display.
*   **Free-form Markdown content.** Users are encouraged to use headings, lists, etc., as needed for clarity, but the structure is not strictly enforced beyond being valid Markdown.

This template provides a lightweight way to create consistently metadata-tagged notes.