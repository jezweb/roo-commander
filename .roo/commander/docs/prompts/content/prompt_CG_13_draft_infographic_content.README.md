# Documentation: Prompt Template `prompt_CG_13_draft_infographic_content.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **draft of the textual content, key data points, section headings, and logical flow for an infographic**. It guides the user to provide the infographic's topic, primary goal, target audience, key message, core data/facts, and desired call to action. The AI is tasked with structuring this information into a coherent narrative suitable for a visual medium, focusing on clear, concise, and impactful language.

This template helps in the initial content creation phase for infographics, providing a solid foundation of text and data organization that a graphic designer can then visually interpret and design.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_13_draft_infographic_content.md](prompt_CG_13_draft_infographic_content.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_remote_work_infographic_content_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftInfographicContent-RemoteWork-20250528180000`.
    *   `title`: Update to reflect the specific infographic, e.g., `"Draft Infographic Content: Benefits of Remote Work"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Infographic Topic/Title]`.
    *   **In Section 1 ("Infographic Overview & Specifications"):**
        *   Clearly define the `Infographic Topic/Title`, `Primary Goal`, `Target Audience`, `Key Message/Story`, `Desired Tone & Style`, `Brand Voice Elements`, and `Call to Action (CTA)`.
    *   **Crucially, in Section 2 ("Content & Data Points for the Infographic"):**
        *   Provide a `Main Headline` suggestion or ask the AI to propose one.
        *   Write a short `Introductory Snippet/Hook`.
        *   List **`Key Data Points / Statistics / Facts to Include`**. Provide actual data with sources if possible, or ask the AI to suggest relevant types of data points and use placeholders.
        *   If not purely data-driven, list `Key Concepts or Steps to Explain` with brief supporting text.
    *   **In Section 3 ("Desired Infographic Structure & Sections"):**
        *   Instruct the AI to propose a logical flow and structure with 3-6 main sections, or provide your own section themes for the AI to flesh out with content and data.
        *   Optionally, provide conceptual visual ideas for sections to help the AI tailor the text.
    *   In Section 4 ("Additional Instructions"), provide guidance on points to emphasize/avoid and conceptual source citations.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft infographic content and structure.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_13_draft_infographic_content.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftInfographicContent-[TopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftInfographicContent-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Infographic Content & Structure Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_infographics_data_visualization"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "infographic_content", "data_visualization", "visual_content", "content_outline", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_13_draft_infographic_content.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_13_draft_infographic_content.md`)

*   **Subject Line:** Pre-filled; update `[Infographic Topic/Title]`.
*   **Section 1: Infographic Overview & Specifications:**
    *   User provides high-level details: topic, goal, audience, key message, tone, and CTA.
*   **Section 2: Content & Data Points for the Infographic:**
    *   User provides a headline idea, intro snippet, and **key data points/statistics/facts or concepts to explain. This is critical input for the AI.**
*   **Section 3: Desired Infographic Structure & Sections:**
    *   User instructs the AI on the desired flow and sections, or provides themes for the AI to structure. Conceptual visual ideas can also be provided. **This guides the AI in organizing the content.**
*   **Section 4: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid and how to handle source citations.

This detailed structure provides the AI with clear instructions and the necessary raw information to generate a well-organized and textually sound draft for an infographic.