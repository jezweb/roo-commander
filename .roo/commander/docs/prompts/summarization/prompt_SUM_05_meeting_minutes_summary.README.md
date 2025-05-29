# Documentation: Prompt Template `prompt_SUM_05_meeting_minutes_summary.md`

## 1. Purpose

This prompt template is designed to guide an AI in **processing raw meeting notes or a transcript to generate a structured summary, including key discussion points, decisions made, and a clear list of action items**. It helps the user provide the source material (notes/transcript) and context about the meeting, such as its purpose and any specific formatting or information extraction priorities.

The goal is to quickly transform often messy or lengthy meeting records into a concise, organized, and actionable document that can be easily shared and used for follow-up.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/summarization/prompt_SUM_05_meeting_minutes_summary.md](prompt_SUM_05_meeting_minutes_summary.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `summarize_minutes_project_alpha_20250528.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-SUM-MeetingMinutes-ProjAlpha20250528-20250528100000`.
    *   `title`: Can remain as is, or be made more specific like `"Meeting Summary Request: Project Alpha Sync 2025-05-28"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with the `[Meeting Name/Date]`.
    *   In Section 1 ("Meeting Context for Summary"), provide details about the meeting's name/topic, date, purpose, attendees (optional), desired output format, and any specific information to prioritize.
    *   **Crucially, in Section 2 ("Meeting Notes/Transcript for Processing"):**
        *   Provide a **link to the meeting notes/transcript document** if the AI can access it.
        *   More commonly, **paste the full raw meeting notes or transcript** into the designated code block. The AI is designed to parse through potentially unstructured text.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the summary and action item list.

## 3. TOML Frontmatter Schema (for an instance of `prompt_SUM_05_meeting_minutes_summary.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-SUM-MeetingMinutes-[MeetingNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-SUM-MeetingMinutes-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this prompt request.
    *   *Placeholder in template:* `"Meeting Minutes Summary & Action Item List Generation Request"`
*   **`prompt_type` (String, Fixed):** `"summarization_extraction_structuring"`
*   **`domain` (String, Fixed):** `"meeting_documentation_task_tracking"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "summarization", "meeting_minutes", "action_items", "decision_log", "meeting_summary", "task_extraction"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/summarization/prompt_SUM_05_meeting_minutes_summary.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_SUM_05_meeting_minutes_summary.md`)

*   **Subject Line:** Pre-filled; update `[Meeting Name/Date]`.
*   **Section 1: Meeting Context for Summary:**
    *   `Meeting Name/Topic`.
    *   `Meeting Date`.
    *   `Primary Purpose of the Meeting`.
    *   `Key Attendees (Optional)`.
    *   `Desired Format for the Output`: **Guides the structure of the AI's response.**
    *   `Specific Information to Prioritize/Extract (if any)`.
*   **Section 2: Meeting Notes/Transcript for Processing:**
    *   `Link to Meeting Notes/Transcript Document` (Optional, if AI can access).
    *   `Paste the Full Meeting Notes/Transcript Here`: **Essential for providing the source material.**
*   **Section 3: Request for Summary & Action Item List Generation:**
    *   This section contains pre-filled instructions for the AI on how to review the notes, extract key discussion points, identify decisions, compile action items (with owners and deadlines if mentioned), and organize the output. The user typically does not modify this section.

This structure ensures the AI receives the raw meeting information and clear instructions on how to distill and structure it into a useful summary and action list.