# Documentation: Prompt Template `prompt_SUM_08_technical_doc_section_summary.md`

## 1. Purpose

This prompt template is designed to guide an AI in **summarizing a specific section of a larger technical document** (e.g., API specification, system architecture document, technical manual). It helps the user provide the text of the section (or a link to it within a document), context about the full document, the purpose of the summary, the target audience for the summary, and any specific requirements for length, format, and level of technical detail.

The goal is to create a concise and accurate overview of a complex technical section, making its key information more accessible to a potentially broader or less specialized audience, or for quick reference.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/summarization/prompt_SUM_08_technical_doc_section_summary.md](prompt_SUM_08_technical_doc_section_summary.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `summarize_tech_doc_auth_section.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-SUM-TechDocSection-APISpecAuth-20250528130000`.
    *   `title`: Can remain as is, or be made more specific like `"Tech Doc Section Summary: API Auth Methods"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with the `[Section Title/Topic]` and `[Document Name]`.
    *   In Section 1 ("Section & Document Context for Summary"):
        *   Provide the `Full Document Name` and its `Overall Purpose`.
        *   Clearly identify the `Specific Section Title/Topic to be Summarized`.
        *   Define the `Purpose of THIS Summary`, its `Target Audience`, `Key Information to Capture`, `Desired Length/Format`, and `Level of Technical Detail`.
    *   **Crucially, in Section 2 ("Text of the Technical Document Section for Summarization"):**
        *   Provide a **link to the full document** if the AI can access it and easily navigate to the section (include page numbers or anchor links if possible).
        *   More reliably, **paste the full text of the specific section** to be summarized into the designated code block.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the section summary.

## 3. TOML Frontmatter Schema (for an instance of `prompt_SUM_08_technical_doc_section_summary.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-SUM-TechDocSection-[DocNameShort]-[SectionShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-SUM-TechDocSection-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this prompt request.
    *   *Placeholder in template:* `"Technical Document Section Summary Request"`
*   **`prompt_type` (String, Fixed):** `"summarization_explanation_technical"`
*   **`domain` (String, Fixed):** `"technical_writing_documentation_comprehension"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "summarization", "technical_documentation", "section_summary", "api_docs", "specification_summary", "knowledge_distillation"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/summarization/prompt_SUM_08_technical_doc_section_summary.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_SUM_08_technical_doc_section_summary.md`)

*   **Subject Line:** Pre-filled; update `[Section Title/Topic]` and `[Document Name]`.
*   **Section 1: Section & Document Context for Summary:**
    *   `Full Document Name`.
    *   `Overall Purpose of the Full Document`.
    *   `Specific Section Title/Topic to be Summarized`.
    *   `Purpose of THIS Summary`.
    *   `Target Audience for THIS Summary`: **Key for tailoring the summary's complexity.**
    *   `Key Information to Capture in the Summary`.
    *   `Desired Length/Format of Summary`.
    *   `Level of Technical Detail for Summary`: **Guides how much jargon to retain/explain.**
*   **Section 2: Text of the Technical Document Section for Summarization:**
    *   `Link to the Full Document` (Optional, with navigation hints).
    *   `Paste the Full Text of the Specific Section Here`: **Essential for providing the source material.**
*   **Section 3: Request for Section Summary Generation:**
    *   This section contains pre-filled instructions for the AI on how to analyze the technical section, identify critical information, and synthesize it into a summary tailored for the specified audience, length, and level of detail. The user typically does not modify this section.

This structure ensures the AI receives the specific technical text and clear instructions on how to summarize it effectively for the intended purpose and audience.