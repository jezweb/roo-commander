# Documentation: Prompt Template `prompt_SUM_02_key_takeaways_extraction.md`

## 1. Purpose

This prompt template is designed to guide an AI in **extracting a concise list of key takeaways, action items, or significant points from a longer document or pasted text**. It helps the user provide the source material and specify the desired number and focus of these takeaways, as well as the intended audience for them. The AI is then instructed to identify and present this information in a clear, typically bulleted, format.

The goal is to quickly distill the most important information from a document, making it easier to understand, remember, or act upon.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/summarization/prompt_SUM_02_key_takeaways_extraction.md](prompt_SUM_02_key_takeaways_extraction.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `extract_takeaways_meeting_notes_projectX.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-SUM-KeyTakeaways-MeetingProjectX-20250528070000`.
    *   `title`: Can remain as is, or be made more specific like `"Key Takeaways Request: Project X Meeting Notes"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with the `[Document Title/Topic]`.
    *   In Section 1 ("Document Overview & Context for Takeaways"), provide details about the original document, the target audience for the takeaways, the desired number and focus of takeaways, and preferred format.
    *   **Crucially, in Section 2 ("Document Text for Extraction"):**
        *   Provide a **link to the full document** if the AI can access it and it's preferred.
        *   More commonly, **paste the full text or relevant sections** of the document from which takeaways are to be extracted into the designated code block.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the list of key takeaways.

## 3. TOML Frontmatter Schema (for an instance of `prompt_SUM_02_key_takeaways_extraction.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-SUM-KeyTakeaways-[DocumentNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-SUM-KeyTakeaways-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this prompt request.
    *   *Placeholder in template:* `"Key Takeaways Extraction Request"`
*   **`prompt_type` (String, Fixed):** `"summarization_extraction"`
*   **`domain` (String, Fixed):** `"document_analysis_information_extraction"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "summarization", "key_takeaways", "information_extraction", "bullet_points", "action_items"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/summarization/prompt_SUM_02_key_takeaways_extraction.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_SUM_02_key_takeaways_extraction.md`)

*   **Subject Line:** Pre-filled; update `[Document Title/Topic]`.
*   **Section 1: Document Overview & Context for Takeaways:**
    *   `Document Title/Topic`.
    *   `Original Purpose of the Document`.
    *   `Target Audience for THESE Key Takeaways`.
    *   `Number of Key Takeaways Desired`: **Important for guiding AI output length.**
    *   `Focus of Takeaways (if specific)`: **Key for tailoring relevance.**
    *   `Format of Takeaways`.
*   **Section 2: Document Text for Extraction:**
    *   `Link to the Full Document` (Optional, if AI can access).
    *   `Paste the Full Text or Relevant Sections Here`: **Essential for providing the source material.**
*   **Section 3: Request for Key Takeaways Extraction:**
    *   This section contains pre-filled instructions for the AI on how to approach the extraction task, focusing on identifying significant or actionable information, adhering to formatting and quantity requests, and ensuring clarity. The user typically does not modify this section.

This structure ensures the AI receives the source document and clear instructions on what kind of takeaways to extract and how to present them.