# Documentation: Prompt Template `prompt_CG_14_draft_webinar_workshop_outline.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **detailed draft outline for a webinar or interactive workshop, including module topics, key talking points per module, and suggested activities or interactive elements**. It guides the user to provide specifications such as the title/topic, primary goals, target audience, format (webinar/workshop), duration, learning objectives, and desired call to action. The AI is tasked with creating a logical flow of content structured into modules, aimed at achieving the learning objectives.

This template helps in the initial planning and structuring of educational or training sessions, providing a solid framework that can be further developed into full presentation content, facilitator guides, and attendee materials.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_14_draft_webinar_workshop_outline.md](prompt_CG_14_draft_webinar_workshop_outline.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_seo_webinar_outline_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftWebinarWorkshopOutline-SEOWebinar-20250528190000`.
    *   `title`: Update to reflect the specific event, e.g., `"Draft Webinar Outline: Advanced SEO Techniques"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Title/Topic]`.
    *   **In Section 1 ("Webinar/Workshop Overview & Specifications"):**
        *   Clearly define the `Title/Topic`, `Primary Goal(s)`, `Target Audience`, `Format` (Webinar or Workshop), `Desired Duration`, `Desired Tone & Style`, list 3-5 `Key Learning Objectives`, and the `Call to Action (CTA)`.
    *   **Crucially, in Section 2 ("Content Outline Structure & Module Details"):**
        *   Confirm or suggest modifications to the `Overall Structure` (standard elements like Intro, Modules, Q&A, Conclusion).
        *   For `Module Details`, either suggest initial themes for modules or ask the AI to propose them. Instruct the AI to develop key talking points/concepts and activity suggestions for each module, linking them back to the learning objectives. Specify the number of modules or ask the AI to determine based on duration.
    *   In Section 3 ("Additional Instructions"), provide guidance on points to emphasize/avoid, conceptual materials for attendees, and any technology considerations.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft outline and module content ideas.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_14_draft_webinar_workshop_outline.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftWebinarWorkshopOutline-[TopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftWebinarWorkshopOutline-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Webinar/Workshop Outline & Module Content Ideas Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_presentations_training_material"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "webinar_outline", "workshop_plan", "training_material", "presentation_structure", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_14_draft_webinar_workshop_outline.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_14_draft_webinar_workshop_outline.md`)

*   **Subject Line:** Pre-filled; update `[Title/Topic]`.
*   **Section 1: Webinar/Workshop Overview & Specifications:**
    *   User provides comprehensive details about the event: title, goal, audience, format, duration, tone, key learning objectives, and CTA.
*   **Section 2: Content Outline Structure & Module Details:**
    *   User confirms standard structural elements and then guides the AI on developing modules by either providing themes or asking the AI to propose them based on objectives. **This section is key for shaping the AI's output into a usable outline with content ideas.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid, conceptual attendee materials, and technology considerations.

This detailed structure provides the AI with clear instructions for generating a relevant and well-structured draft outline for a webinar or workshop, significantly aiding in the planning and content development process.