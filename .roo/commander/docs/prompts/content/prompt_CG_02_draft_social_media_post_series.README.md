# Documentation: Prompt Template `prompt_CG_02_draft_social_media_post_series.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **first draft for a series of related social media posts**. It guides the user to provide specifications for the overall series (theme, number of posts, target platform(s), goals, audience, tone) and for each individual post within the series (specific angle, visual suggestion, CTA). The aim is to produce a cohesive set of draft posts that can be further refined, scheduled, and published as part of a coordinated social media effort.

This template helps in planning and drafting multi-post content for campaigns, announcements, or thematic content pushes.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_02_draft_social_media_post_series.md](prompt_CG_02_draft_social_media_post_series.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_new_feature_social_series_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftSocialSeries-NewFeature-20250528070000`.
    *   `title`: Update to reflect the specific series, e.g., `"Draft Social Media Series: New Feature Launch"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Theme/Campaign Name]`.
    *   **In Section 1 ("Series Overview & Specifications"):**
        *   Clearly define the `Overall Theme/Topic/Campaign Name`.
        *   Specify the `Number of Posts in Series`.
        *   List the `Target Platform(s)`.
        *   State the `Primary Goal of the Series`.
        *   Describe the `Target Audience`.
        *   Define the `Overall Tone & Brand Voice`.
        *   List any `Key Hashtags for the Series` and an `Overall Call to Action` if applicable.
        *   Note any strict `Character Limit Considerations`.
    *   **Crucially, in Section 2 ("Individual Post Details"):**
        *   **Repeat the "Post # [Number]" block for each post you want drafted.**
        *   For each post, specify its `Specific Angle/Key Message`, provide a `Visual Suggestion`, detail any `Specific Call to Action`, and list any unique `Keywords/Specific Hashtags` or `Link(s) to Include`.
    *   In Section 3 ("Additional Instructions"), provide any other relevant guidance for the series.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft series.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_02_draft_social_media_post_series.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftSocialSeries-[ThemeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftSocialSeries-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Social Media Post Series Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_social_media"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "social_media_posts", "content_series", "social_media_marketing", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_02_draft_social_media_post_series.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_02_draft_social_media_post_series.md`)

*   **Subject Line:** Pre-filled; update `[Theme/Campaign Name]`.
*   **Section 1: Series Overview & Specifications:**
    *   User provides details about the overall series: theme, number of posts, platforms, goals, audience, tone, series hashtags, and overall CTA.
*   **Section 2: Individual Post Details:**
    *   **This section is repeated for each post in the series.** User provides the specific angle/message, visual suggestion, CTA, keywords/hashtags, and links for that individual post. **This is key for guiding the AI on the content of each piece.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify overall points to emphasize/avoid, emoji usage, and conceptual tagging.

This detailed structure provides the AI with clear instructions for both the overarching series and each individual post, increasing the likelihood of generating a relevant and useful set of draft social media content.