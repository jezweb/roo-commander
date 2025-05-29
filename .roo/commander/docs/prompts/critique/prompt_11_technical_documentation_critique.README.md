# Documentation: Prompt Template `prompt_11_technical_documentation_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a piece of technical documentation**. It guides the user to provide the document (or key sections), its purpose, target audience, and type. The critiquing AI is then directed to analyze aspects such as clarity, accuracy, completeness, structure, navigability, actionability, consistency, use of examples/visuals, and overall effectiveness for the intended audience.

The goal is to receive actionable feedback to create documentation that is exceptionally clear, helpful, accurate, and enables the target audience to succeed with minimal friction.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_11_technical_documentation_critique.md](prompt_11_technical_documentation_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_api_auth_guide_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-TechDocs-APIAuthGuide-20250526200000`.
    *   `title`: Update to reflect the specific document, e.g., `"Technical Documentation Critique: API Authentication Guide"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Title of the Document / System Documented]`.
    *   In Section 1 ("Documentation Overview & Context"), provide details about the document's title/topic, purpose, target audience, and type.
    *   **Crucially, in Section 2 ("Documentation Details"):**
        *   Provide a **direct link to the documentation** or **paste key sections/full text** into the designated code block.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_11_technical_documentation_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-TechDocs-[DocNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-TechDocs-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Technical Documentation Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"technical_writing_documentation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "technical_documentation", "user_manuals", "api_guides", "knowledge_base"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_11_technical_documentation_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_11_technical_documentation_critique.md`)

*   **Subject Line:** Pre-filled; update `[Title of the Document / System Documented]`.
*   **Section 1: Documentation Overview & Context:**
    *   `Document Title/Topic`.
    *   `Purpose of the Documentation`.
    *   `Target Audience` (including technical proficiency).
    *   `Type of Documentation` (e.g., user manual, API reference).
*   **Section 2: Documentation Details:**
    *   `Link to the Documentation`: **Preferred method.**
    *   `Paste Key Sections or the Full Text` (Alternative): **Crucial for providing the content to be critiqued.**
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-I) like "Clarity & Understandability," "Accuracy & Completeness," "Structure & Navigability," "Actionability & Usefulness," "Examples, Illustrations & Visuals," and "Language, Tone & Style." The user typically does not modify this section.

This structure ensures the AI receives the actual documentation content and sufficient context about its purpose and audience to provide a thorough and useful critique.