# Documentation: Prompt Template `prompt_CG_11_draft_podcast_episode_outline.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **draft outline for a podcast episode, including key talking points for main segments and potentially introductory narration**. It guides the user to provide details about the episode's topic, goals, target audience, number of hosts/guests, desired length, tone, key messages, and call to action. The AI is tasked with creating a structured episode flow with distinct segments and suggestive content for each.

This template helps accelerate the podcast pre-production process by providing a foundational structure and initial content ideas, which can then be fleshed out into a full script by hosts or producers.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_11_draft_podcast_episode_outline.md](prompt_CG_11_draft_podcast_episode_outline.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_podcast_ep3_future_of_ai.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftPodcastOutline-FutureOfAIEp3-20250528160000`.
    *   `title`: Update to reflect the specific episode, e.g., `"Draft Podcast Outline: Episode 3 - The Future of AI"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Episode Title/Topic]`.
    *   **In Section 1 ("Podcast Episode Overview & Specifications"):**
        *   Provide the `Podcast Series Name`, `Episode Title/Topic`, `Primary Goal`, `Target Audience`, details about `Number of Hosts & Roles/Personas`, any `Guest(s)` information, `Desired Episode Length`, `Desired Tone & Style`, `Key Message(s)`, and the `Call to Action (CTA)`.
    *   **Crucially, in Section 2 ("Desired Episode Structure & Segment Details"):**
        *   Indicate any `Standard Segments` typical for the podcast.
        *   Outline `Specific Segments for THIS Episode`. For each segment (especially the introduction and main discussion segments), provide themes or ask the AI to propose them, and instruct the AI to generate key talking points or questions. Specify if introductory narration needs to be drafted.
    *   In Section 3 ("Additional Instructions"), provide guidance on points to emphasize/avoid, interview style, or multi-host interaction style.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft outline and segment content.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_11_draft_podcast_episode_outline.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftPodcastOutline-[EpisodeTopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftPodcastOutline-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Podcast Episode Outline & Key Segment Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_podcast_scripting"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "podcast_outline", "podcast_script", "audio_content", "episode_planning", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_11_draft_podcast_episode_outline.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_11_draft_podcast_episode_outline.md`)

*   **Subject Line:** Pre-filled; update `[Episode Title/Topic]`.
*   **Section 1: Podcast Episode Overview & Specifications:**
    *   User provides comprehensive details about the episode: series name, title/topic, goal, audience, host/guest setup, length, tone, key messages, and CTA.
*   **Section 2: Desired Episode Structure & Segment Details:**
    *   User outlines standard segments and then details specific segments for the current episode, instructing the AI on what to generate for each (e.g., intro narration, talking points for main segments, conclusion points). **This section is key for guiding the AI's structural and content output.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid and styles for interviews or multi-host interactions.

This detailed structure provides the AI with clear instructions for generating a useful podcast episode outline and initial segment drafts, streamlining the content creation workflow.