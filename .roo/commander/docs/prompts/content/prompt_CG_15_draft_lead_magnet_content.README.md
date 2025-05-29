# Documentation: Prompt Template `prompt_CG_15_draft_lead_magnet_content.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate the **core content for a short lead magnet**, such as a checklist, cheatsheet, short action guide, resource list, or template preview. It guides the user to specify the type of lead magnet, its topic, primary goal, target audience, the specific value it offers, and key information or structural elements. The AI is tasked with drafting concise, actionable, and valuable content suitable for the chosen lead magnet format.

This template helps accelerate the creation of valuable resources used for lead generation, providing a solid foundation that can be quickly edited, designed, and deployed.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_15_draft_lead_magnet_content.md](prompt_CG_15_draft_lead_magnet_content.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_seo_checklist_leadmagnet_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftLeadMagnet-SEOChecklist-20250528200000`.
    *   `title`: Update to reflect the specific lead magnet, e.g., `"Draft Lead Magnet: SEO Checklist for Small Businesses"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Type of Lead Magnet] on [Topic]`.
    *   **In Section 1 ("Lead Magnet Overview & Specifications"):**
        *   Specify the `Type of Lead Magnet`, `Topic/Title`, `Primary Goal`, `Target Audience`, the `Specific Problem it Solves or Value it Offers`, `Desired Tone & Style`, `Brand Voice Elements`, and an optional `Call to Action (CTA) within the Lead Magnet`.
    *   **Crucially, in Section 2 ("Content Details & Structure"):**
        *   **Tailor your input based on the `Type of Lead Magnet` chosen in Section 1.**
        *   For Checklists/Cheatsheets: Define main sections/categories and either list key items/points or ask the AI to generate them.
        *   For Short Action Guides: Define the overall outcome and provide titles for each step, asking the AI to draft the explanation/action items.
        *   For Resource Lists: Define categories of resources and the type of information needed per resource.
        *   For Templates: Define the purpose and key sections/placeholders for the AI to draft.
        *   Include brief introductory and concluding text prompts for all types.
    *   In Section 3 ("Additional Instructions"), provide guidance on points to emphasize/avoid, conceptual length, and formatting.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft lead magnet content.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_15_draft_lead_magnet_content.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftLeadMagnet-[TypeShort]-[TopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftLeadMagnet-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Lead Magnet Content Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_lead_generation_marketing_funnels"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "lead_magnet", "checklist", "cheatsheet", "short_guide", "content_upgrade", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_15_draft_lead_magnet_content.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_15_draft_lead_magnet_content.md`)

*   **Subject Line:** Pre-filled; update `[Type of Lead Magnet] on [Topic]`.
*   **Section 1: Lead Magnet Overview & Specifications:**
    *   User provides high-level details: type, topic, goal, audience, value proposition, tone, and optional internal CTA.
*   **Section 2: Content Details & Structure:**
    *   **This section is tailored by the user based on the chosen lead magnet type.** User provides specific structural guidance and key information points for the AI to develop. **This is critical for shaping the AI's output to the desired format.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid, conceptual length, and formatting preferences.

This detailed structure, with its adaptable Section 2, provides the AI with clear instructions for generating useful and targeted draft content for various types of lead magnets.