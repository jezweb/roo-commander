# Documentation: Prompt Template `prompt_CG_08_draft_press_release.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **first draft of a press release**. It guides the user to provide all essential information for a standard press release, including the headline/key announcement, dateline, introductory "who, what, when, where, why, how," supporting details, quotes, company boilerplate, and media contact information. The AI is tasked with structuring this information into a newsworthy and professionally formatted document.

This template helps accelerate the creation of press releases for various announcements, providing a solid foundation for review and finalization by PR or communications professionals.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_08_draft_press_release.md](prompt_CG_08_draft_press_release.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_product_y_launch_pr_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftPressRelease-ProductYLaunch-20250528130000`.
    *   `title`: Update to reflect the specific announcement, e.g., `"Draft Press Release: Product Y Launch Announcement"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Headline/Key Announcement]`.
    *   **In Section 1 ("Press Release Overview & Key Information"):**
        *   Provide a `Headline` (or ask AI to suggest).
        *   Specify the `Dateline`.
        *   Detail the core information for the `Introduction / Lead Paragraph` (Key Announcement, Company, Date, Significance).
        *   State the `Primary Goal` and `Target Audience` for the press release.
    *   **In Section 2 ("Body Paragraphs - Supporting Details & Elaboration"):**
        *   Provide details for `Paragraph 2 - Elaboration on the News`.
        *   Provide actual quotes or request draft quotes for `Paragraph 3 - Quote(s)`, specifying spokesperson details.
        *   Optionally, provide context for `Paragraph 4`.
    *   **Crucially, in Section 3 ("Boilerplate / About [Your Company Name]"), paste your standard company boilerplate.**
    *   In Section 4 ("Contact Information"), provide all necessary media contact details.
    *   Specify any `Call to Action` in Section 5.
    *   In Section 7 ("Additional Instructions"), provide guidance on tone, keywords, and points to emphasize/avoid.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft press release.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_08_draft_press_release.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftPressRelease-[AnnouncementShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftPressRelease-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Press Release First Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_public_relations"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "press_release", "public_relations", "media_relations", "announcement", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_08_draft_press_release.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_08_draft_press_release.md`)

*   **Subject Line:** Pre-filled; update `[Headline/Key Announcement]`.
*   **Section 1: Press Release Overview & Key Information:** User provides headline idea, dateline, core news for the lead paragraph, goal, and audience.
*   **Section 2: Body Paragraphs:** User provides details for elaboration, information for quotes (or requests drafts), and optional further context.
*   **Section 3: Boilerplate:** **User must paste their standard company boilerplate.**
*   **Section 4: Contact Information:** User provides all media contact details.
*   **Section 5: Call to Action:** User specifies any desired CTA.
*   **Section 6: Ending:** Standard "###".
*   **Section 7: Additional Instructions:** User provides guidance on tone, keywords, etc.

This comprehensive structure ensures the AI has all the necessary components to draft a standard, newsworthy press release.