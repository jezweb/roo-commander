# Documentation: Prompt Template `prompt_PL_02_detailed_content_outline.md`

## 1. Purpose

This prompt template is designed to generate a **detailed, hierarchical content outline for a piece of long-form content** such as an article, whitepaper, research report, or comprehensive guide. It guides the user to provide information about the content's proposed title/topic, type, goals, target audience, key messages, desired tone, and any initial ideas for sections or key information. The AI is then tasked with creating a structured outline including a refined title, introduction, main body sections with sub-sections and key talking points for each, a conclusion, and optional supplementary sections.

The goal is to provide a robust and logical framework that can serve as a strong foundation for writing the actual content, ensuring comprehensive coverage, logical flow, and alignment with objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/planning/prompt_PL_02_detailed_content_outline.md](prompt_PL_02_detailed_content_outline.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `outline_request_ai_impact_whitepaper_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Plan-ContentOutline-AIWhitepaper-20250528070000`.
    *   `title`: Update to reflect the specific content piece, e.g., `"Content Outline Request: Whitepaper on AI in Customer Service"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Proposed Title or Topic of Content]`.
    *   In Section 1 ("Content Overview & Objectives"), provide comprehensive details about the content's title, topic, type, goals, target audience, key messages, tone, desired length, and any call to action.
    *   In Section 2 ("Key Information & Focus Areas"), list main questions the content should answer, any initial ideas for sub-topics, potential sources, and angles to emphasize or avoid.
    *   The more specific the input, the more tailored and useful the generated outline will be.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for outline generation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PL_02_detailed_content_outline.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Plan-ContentOutline-[ContentTopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Plan-ContentOutline-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this outline generation request.
    *   *Placeholder in template:* `"Detailed Content Outline Generation Request"`
*   **`prompt_type` (String, Fixed):** `"planning_and_outlining"`
*   **`domain` (String, Fixed):** `"content_creation_planning_writing"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "planning", "content_outline", "writing_structure", "article_planning", "report_outline", "content_strategy"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/planning/prompt_PL_02_detailed_content_outline.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PL_02_detailed_content_outline.md`)

*   **Subject Line:** Pre-filled; update `[Proposed Title or Topic of Content]`.
*   **Section 1: Content Overview & Objectives:**
    *   `Proposed Title (or Working Title)`.
    *   `Primary Topic/Subject Matter`.
    *   `Type of Content`.
    *   `Primary Goal(s) of this Content Piece`.
    *   `Target Audience`.
    *   `Key Message(s) or Core Argument(s)`.
    *   `Desired Tone & Style`.
    *   `Approximate Desired Length (if known)`.
    *   `Call to Action (if any)`.
*   **Section 2: Key Information & Focus Areas:**
    *   `Main Questions this Content Should Answer`.
    *   `Specific Sub-topics or Sections to Include (if you have initial ideas)`.
    *   `Sources of Information or Data to Reference (if known)`.
    *   `Any Angles or Perspectives to Emphasize or Avoid`.
    *   `Competitor Content (Optional)`.
*   **Section 3: Request for Detailed Content Outline:**
    *   This section instructs the AI on the desired structure of the output, detailing categories (A-E) for "Proposed Title," "Introduction," "Main Body Sections" (with sub-sections and key points), "Conclusion," and optional "Appendix/Glossary." The user typically does not modify these instructions.

This structure ensures the AI receives comprehensive background information and clear directives to generate a detailed and useful content outline.