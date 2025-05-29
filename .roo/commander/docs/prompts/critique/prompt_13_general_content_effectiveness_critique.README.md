# Documentation: Prompt Template `prompt_13_general_content_effectiveness_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for any general written content piece**. This includes articles, blog posts, website copy, whitepapers, case studies, video scripts, email newsletters, and more. It guides the user to provide the content itself, along with context about its purpose, target audience, and intended publication channel. The critiquing AI is then directed to analyze aspects such as clarity, engagement, structure, accuracy, tone, persuasiveness, grammar, originality, and overall effectiveness in achieving its goals.

The goal is to receive actionable feedback to significantly improve the quality, impact, and success of the content.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_13_general_content_effectiveness_critique.md](prompt_13_general_content_effectiveness_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_sustainability_article_v2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-GeneralContent-SustainArticle-20250527090000`.
    *   `title`: Update to reflect the specific content piece, e.g., `"Content Critique: Article on Sustainable Packaging"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Title or Brief Description of Content]`.
    *   In Section 1 ("Content Overview & Context"), provide details about the content's title, type, goals, target audience, desired action, and publication channel.
    *   **Crucially, in Section 2 ("The Content Piece for Review"):**
        *   Provide a **direct link to the content** if hosted online (preferred).
        *   Alternatively, **paste the full text of the content** into the designated code block. For very long pieces, a significant representative section can be used if full text is impractical, but this should be noted.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_13_general_content_effectiveness_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-GeneralContent-[ContentNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-GeneralContent-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"General Content Piece Effectiveness Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"content_creation_general"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "content_creation", "writing_review", "editing", "communication_effectiveness"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_13_general_content_effectiveness_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_13_general_content_effectiveness_critique.md`)

*   **Subject Line:** Pre-filled; update `[Title or Brief Description of Content]`.
*   **Section 1: Content Overview & Context:**
    *   `Content Title (if applicable)`.
    *   `Type of Content`.
    *   `Primary Goal(s) of this Content`.
    *   `Target Audience`.
    *   `Desired Action/Takeaway for the Audience`.
    *   `Publication Channel/Platform (if known)`.
*   **Section 2: The Content Piece for Review:**
    *   `Link to the Content` (Preferred).
    *   `Paste the Content Text Here` (Alternative): **Crucial for providing the content to be critiqued.**
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-K) like "Clarity & Understandability," "Engagement & Interest," "Structure & Flow," "Accuracy & Credibility," "Grammar, Style & Mechanics," "Originality & Value," and "Call to Action." The user typically does not modify this section.

This structure ensures the AI receives the actual content and sufficient context about its purpose and audience to provide a thorough and useful critique.