# Documentation: Prompt Template `prompt_CG_04_draft_website_page_copy.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **first draft of the core written content (copy) for a specific website page**. It guides the user to provide detailed specifications, including the page type, primary goal, target audience, key messages, desired tone, primary keywords (if SEO is a focus), a structural outline (or key sections/information to include), and calls to action. The aim is to produce a substantial starting point for website copy that a human writer, editor, or UX writer can then refine, adapt to the visual design, and optimize.

This template helps overcome the "blank page" challenge for website content creation and ensures key strategic elements are considered from the outset.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_04_draft_website_page_copy.md](prompt_CG_04_draft_website_page_copy.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_about_us_page_copy_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftWebPageCopy-AboutUsV1-20250528090000`.
    *   `title`: Update to reflect the specific web page, e.g., `"Draft Website Copy: About Us Page"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Page Name/Purpose]`.
    *   **In Section 1 ("Web Page Overview & Specifications"):**
        *   Clearly define the `Page Name/Type`, `Primary Goal`, `Target Audience`, `Key Message(s)`, `Desired Tone & Brand Voice`, `Primary Keyword(s)`, and `Primary Call to Action (CTA)` (including text and conceptual destination). List any `Secondary CTA(s)`.
    *   **In Section 2 ("Content Structure & Key Sections/Information"):**
        *   Provide a `Main Headline (H1) Suggestion` or ask the AI to propose one.
        *   Outline the `Introductory Paragraph/Section` including a hook.
        *   Detail the `Key Sections/Blocks of Content`, providing headings or key points for each. The more structure provided, the better the AI can follow the desired flow.
        *   Suggest the `Placement of Primary CTA` and list any `Other Important Elements to Include Content For`.
    *   In Section 3 ("Additional Instructions"), provide any other relevant guidance.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft website page copy.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_04_draft_website_page_copy.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftWebPageCopy-[PageNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftWebPageCopy-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Website Page Core Copy Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_website_copy"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "website_copy", "ux_writing", "landing_page_copy", "seo_content", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_04_draft_website_page_copy.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_04_draft_website_page_copy.md`)

*   **Subject Line:** Pre-filled; update `[Page Name/Purpose]`.
*   **Section 1: Web Page Overview & Specifications:**
    *   User provides details about the page: name/type, primary goal, target audience, key messages, tone, keywords, and CTAs.
*   **Section 2: Content Structure & Key Sections/Information:**
    *   User outlines the desired structure: H1, intro, main content sections (with key points for each), CTA placement, and other elements. **This section is key for guiding the AI's output structure and content focus.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid, conceptual length per section, and formatting preferences.

This detailed structure provides the AI with clear instructions and constraints, increasing the likelihood of generating relevant and useful first draft copy for a website page.