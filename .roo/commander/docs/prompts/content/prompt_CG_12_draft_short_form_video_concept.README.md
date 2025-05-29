# Documentation: Prompt Template `prompt_CG_12_draft_short_form_video_concept.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate **concepts, visual sequence ideas, and initial script snippets or text overlay ideas for short-form videos** (e.g., TikTok, Instagram Reels, YouTube Shorts). It guides the user to provide details about the video's topic/theme, target platform, goals, audience, desired length, tone, key message, and any specific trends or sounds to incorporate. The AI is tasked with developing a creative concept and outlining the visual flow with corresponding brief text elements.

This template helps kickstart the creative process for engaging short-form video content, providing a foundation that can be further developed by content creators, videographers, and social media managers.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_12_draft_short_form_video_concept.md](prompt_CG_12_draft_short_form_video_concept.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_tiktok_hack_video_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftShortVideoConcept-TikTokHack-20250528170000`.
    *   `title`: Update to reflect the specific video concept, e.g., `"Draft Short Video Concept: TikTok Productivity Hack"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Video Topic/Theme] for [Platform]`.
    *   **In Section 1 ("Video Overview & Specifications"):**
        *   Clearly define the `Video Topic/Theme`, `Target Platform(s)`, `Primary Goal`, `Target Audience`, `Desired Video Length`, `Desired Tone & Style`, `Key Message`, `Call to Action (CTA)`, and any `Specific Trend, Sound, or Challenge`.
    *   **Crucially, in Section 2 ("Video Concept & Content Elements"):**
        *   Ask the AI to propose an `Overall Video Concept/Angle` or provide your own idea.
        *   Instruct the AI to suggest a `Key Visual Sequence / Scenes`, including a strong hook and CTA/end screen.
        *   Request draft `Script Snippets / Text Overlays / Voiceover Points` that are concise and align with the visual sequence.
        *   Provide a conceptual `Music/Sound Suggestion`.
    *   In Section 3 ("Additional Instructions"), provide guidance on points to emphasize/avoid, emoji usage, and subtle branding.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft concept and script elements.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_12_draft_short_form_video_concept.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftShortVideoConcept-[ThemeShort]-[PlatformShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftShortVideoConcept-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Short-Form Video Concept & Script Snippets Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_short_form_video"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "short_form_video", "tiktok_ideas", "instagram_reels", "youtube_shorts", "video_concepts", "script_snippets"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_12_draft_short_form_video_concept.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_12_draft_short_form_video_concept.md`)

*   **Subject Line:** Pre-filled; update `[Video Topic/Theme] for [Platform]`.
*   **Section 1: Video Overview & Specifications:**
    *   User provides comprehensive details about the video: topic, platform, goal, audience, length, tone, key message, CTA, and any trends/sounds.
*   **Section 2: Video Concept & Content Elements:**
    *   User instructs the AI on the `Overall Video Concept/Angle`, `Key Visual Sequence / Scenes`, `Script Snippets / Text Overlays / Voiceover Points`, and `Music/Sound Suggestion`. **This section is key for guiding the AI's creative output for the short, punchy format.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid, emoji usage, and branding elements.

This detailed structure provides the AI with clear instructions for generating creative and platform-appropriate concepts and initial script elements for short-form videos.