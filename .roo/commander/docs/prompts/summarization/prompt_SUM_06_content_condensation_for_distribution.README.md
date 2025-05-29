# Documentation: Prompt Template `prompt_SUM_06_content_condensation_for_distribution.md`

## 1. Purpose

This prompt template is designed to guide an AI in **condensing a longer piece of content into a shorter version suitable for a specific distribution channel or format** (e.g., social media posts, newsletter blurbs, internal announcements). It helps the user provide the original content, specify the target channel, desired length/format, core message to retain, objective of the condensed piece, and any call to action.

The goal is to effectively repurpose existing content, making it accessible and engaging for different audiences and platforms while driving desired actions.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/summarization/prompt_SUM_06_content_condensation_for_distribution.md](prompt_SUM_06_content_condensation_for_distribution.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `condense_blog_post_for_twitter_thread.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-SUM-ContentCondensation-BlogToTweets-20250528110000`.
    *   `title`: Can remain as is, or be made more specific like `"Content Condensation: Blog Post to Twitter Thread"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Original Content Type]` and `[Target Channel/Format]`.
    *   In Section 1 ("Content & Condensation Context"):
        *   Provide details about the original content (title, type, core message).
        *   **Crucially, specify the `Target Channel/Platform`, `Desired Format & Length`, `Objective`, and `Call to Action` for the condensed version.**
        *   Also specify tone and any relevant hashtags.
    *   In Section 2 ("Original Content for Condensation"):
        *   Provide a **link to the full original content** if the AI can access it.
        *   More commonly, **paste the full text or key sections** of the original content into the designated code block.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the condensed content.

## 3. TOML Frontmatter Schema (for an instance of `prompt_SUM_06_content_condensation_for_distribution.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-SUM-ContentCondensation-[OriginalContentType]To[TargetChannel]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-SUM-ContentCondensation-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this prompt request.
    *   *Placeholder in template:* `"Content Condensation for Distribution Request"`
*   **`prompt_type` (String, Fixed):** `"summarization_repurposing_adaptation"`
*   **`domain` (String, Fixed):** `"content_marketing_social_media_communication"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "summarization", "content_repurposing", "social_media_copy", "newsletter_blurb", "content_adaptation", "concise_writing"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/summarization/prompt_SUM_06_content_condensation_for_distribution.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_SUM_06_content_condensation_for_distribution.md`)

*   **Subject Line:** Pre-filled; update `[Original Content Type]` and `[Target Channel/Format]`.
*   **Section 1: Content & Condensation Context:**
    *   `Original Content Title/Topic`.
    *   `Original Content Type`.
    *   `Core Message/Key Takeaway of Original Content`.
    *   `Target Channel/Platform for Condensed Version`: **Key for tailoring output.**
    *   `Desired Format & Length for Condensed Version`: **Critical for meeting channel constraints.**
    *   `Objective of the Condensed Version on this Channel`.
    *   `Target Audience for the Condensed Version`.
    *   `Call to Action (CTA) for Condensed Version`.
    *   `Tone for Condensed Version`.
    *   `Relevant Hashtags`.
*   **Section 2: Original Content for Condensation:**
    *   `Link to the Full Original Content` (Optional, if AI can access).
    *   `Paste the Full Text or Key Sections of the Original Content Here`: **Essential for providing the source material.**
*   **Section 3: Request for Content Condensation:**
    *   This section contains pre-filled instructions for the AI on how to understand the core message, tailor the content to the specific channel and format, adhere to length constraints, and incorporate CTAs and desired tone. The user typically does not modify this section.

This structure ensures the AI receives the source content and clear instructions on how to adapt and condense it effectively for a different distribution purpose.