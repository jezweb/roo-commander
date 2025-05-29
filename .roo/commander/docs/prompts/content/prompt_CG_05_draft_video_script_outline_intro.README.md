# Documentation: Prompt Template `prompt_CG_05_draft_video_script_outline_intro.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **first draft of a video script outline and the introductory narration (e.g., first 15-30 seconds)**. It guides the user to provide specifications such as the video topic, primary goal, target audience, desired length, format/style, key messages, and call to action. The AI is tasked with creating a compelling introduction and a logical outline for the main body and conclusion, including conceptual visual ideas.

This template helps kickstart the video production process by providing a structured framework and initial narrative content, which can then be expanded and refined by a scriptwriter or content creator.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_05_draft_video_script_outline_intro.md](prompt_CG_05_draft_video_script_outline_intro.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_product_demo_video_script_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftVideoScriptOutlineIntro-ProductDemo-20250528100000`.
    *   `title`: Update to reflect the specific video, e.g., `"Draft Video Script Outline: Product Demo for Feature Z"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Video Title/Topic]`.
    *   **In Section 1 ("Video Overview & Specifications"):**
        *   Clearly define the `Video Title/Topic`, `Primary Goal`, `Target Audience`, `Desired Video Length`, `Video Format/Style`, `Desired Tone & Pacing`, `Key Message(s)`, and `Call to Action (CTA)`.
    *   **Crucially, in Section 2 ("Content Outline & Introduction Details"):**
        *   For the `Introduction`, specify requirements for the hook, purpose statement, and optional teaser. The AI will draft this narration.
        *   For the `Main Body Sections`, instruct the AI to develop a logical flow of sections or provide high-level themes for the AI to flesh out with talking points.
        *   For the `Conclusion`, instruct the AI to outline a summary and incorporate the CTA.
        *   Provide conceptual `Visual Ideas` to guide the AI's thinking about narration.
    *   In Section 3 ("Additional Instructions"), provide any other relevant guidance.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft outline and introduction.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_05_draft_video_script_outline_intro.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftVideoScriptOutlineIntro-[VideoTopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftVideoScriptOutlineIntro-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Video Script Outline & Introduction Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_video_scripting"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "video_script", "script_outline", "explainer_video", "video_marketing", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_05_draft_video_script_outline_intro.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_05_draft_video_script_outline_intro.md`)

*   **Subject Line:** Pre-filled; update `[Video Title/Topic]`.
*   **Section 1: Video Overview & Specifications:**
    *   User provides details about the video: title/topic, goal, audience, length, format, tone, key messages, and CTA.
*   **Section 2: Content Outline & Introduction Details:**
    *   User specifies requirements for the `Introduction` (hook, purpose, teaser) for which the AI will draft narration.
    *   User instructs the AI on how to develop the `Main Body Sections` outline (either by providing themes or asking the AI to create a flow).
    *   User instructs the AI on the `Conclusion` (summary, CTA).
    *   User provides conceptual `Visual Ideas`.
    **This section is key for guiding the AI's structural and initial narrative output.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid, language complexity, and conceptual narration pacing.

This detailed structure provides the AI with clear instructions for generating a useful video script outline and a compelling introductory narration, significantly speeding up the video pre-production process.