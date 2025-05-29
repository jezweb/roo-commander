# Documentation: Prompt Template `prompt_23_social_media_content_strategy_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for social media content and/or strategy**. It can be used to review an overall strategy, a specific campaign, a platform-specific plan, or a content calendar. It guides the user to provide details about their goals, target audience, platforms, brand voice, content themes, and examples of content or plans. The critiquing AI is then directed to analyze aspects such as strategic alignment, platform effectiveness, audience resonance, content quality, brand voice consistency, engagement potential, and use of platform features like hashtags.

The goal is to receive actionable feedback to refine social media efforts, making them more engaging, effective in achieving objectives, and authentically representative of the brand.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_23_social_media_content_strategy_critique.md](prompt_23_social_media_content_strategy_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_instagram_q3_plan_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-SocialMediaStrategy-InstaQ3-20250527190000`.
    *   `title`: Update to reflect the specific focus, e.g., `"Social Media Critique: Instagram Q3 Content Plan"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Focus: e.g., Overall Strategy, Specific Campaign, Platform Plan, Content Calendar]`.
    *   In Section 1 ("Social Media Overview & Context"), provide details about goals, target audience, platforms, brand voice, content themes, competitors, and current challenges.
    *   **Crucially, in Section 2 ("Content / Strategy Details for Review"):**
        *   Provide **links to social media profiles** if reviewing an existing presence.
        *   Provide **links to content calendars, strategy documents, or campaign briefs**.
        *   Alternatively, or for specific examples, **paste example posts or describe planned content**, including visual descriptions and platform specifics.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_23_social_media_content_strategy_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-SocialMediaStrategy-[FocusShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-SocialMediaStrategy-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Social Media Content & Strategy Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"social_media_marketing_content_strategy"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "social_media_marketing", "content_strategy", "social_media_content", "engagement", "brand_voice"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_23_social_media_content_strategy_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_23_social_media_content_strategy_critique.md`)

*   **Subject Line:** Pre-filled; update `[Focus: e.g., Overall Strategy, Specific Campaign, Platform Plan, Content Calendar]`.
*   **Section 1: Social Media Overview & Context:**
    *   `Primary Goal(s) for this Social Media Effort`.
    *   `Target Audience on Social Media`.
    *   `Platform(s) in Focus`.
    *   `Brand Voice & Personality`.
    *   `Key Themes/Content Pillars`.
    *   `Competitor Examples (Optional)`.
    *   `Current Performance/Challenges (if known)`.
*   **Section 2: Content / Strategy Details for Review:**
    *   `Link to Social Media Profile(s)`.
    *   `Link to Content Calendar, Strategy Document, or Campaign Brief`.
    *   `Paste Example Posts or Describe Planned Content` (Alternative/supplement): **Crucial for providing specific content examples or plans to be critiqued.**
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Strategic Alignment," "Platform-Specific Effectiveness," "Target Audience Resonance," "Content Quality & Mix," "Engagement & Community Building," and "Use of Hashtags." The user typically does not modify this section.

This structure ensures the AI receives comprehensive information about the social media efforts, including strategic context and concrete examples, to provide a thorough and actionable critique.