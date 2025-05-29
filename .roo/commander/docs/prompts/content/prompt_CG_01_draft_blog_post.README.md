# Documentation: Prompt Template `prompt_CG_01_draft_blog_post.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **first draft of a blog post**. It guides the user to provide detailed specifications, including the topic, target audience, desired tone, word count, primary keywords, a structural outline (or key points to cover), and a call to action. The aim is to produce a substantial starting point that a human writer or editor can then refine, fact-check, and personalize.

This template helps overcome the "blank page" challenge and accelerates the blog post creation process.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_01_draft_blog_post.md](prompt_CG_01_draft_blog_post.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_ai_ethics_blog_post_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftBlogPost-AIEthics-20250528060000`.
    *   `title`: Update to reflect the specific blog post, e.g., `"Draft Blog Post Request: AI Ethics in Marketing"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Proposed Blog Post Title or Topic]`.
    *   **Crucially, in Section 1 ("Blog Post Specifications"):**
        *   Clearly define the `Main Topic/Subject`.
        *   Describe the `Target Audience` in detail.
        *   State the `Primary Goal of the Blog Post`.
        *   Specify the `Desired Tone & Style`.
        *   Indicate the `Approximate Word Count`.
        *   List any `Primary Keyword(s)` and optional `Secondary/LSI Keywords`.
    *   **In Section 2 ("Content Structure & Key Points"):**
        *   Outline the desired structure: introduction (including hook), main body sections (with optional headings and key points for each), conclusion, and a specific `Call to Action (CTA)`. The more detail provided here, the more aligned the draft will be.
    *   In Section 3 ("Additional Instructions"), provide any other relevant guidance.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_01_draft_blog_post.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftBlogPost-[TopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftBlogPost-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"First Draft Blog Post Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_blogging"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "blog_post", "first_draft", "writing_assistant", "seo_content"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_01_draft_blog_post.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_01_draft_blog_post.md`)

*   **Subject Line:** Pre-filled; update `[Proposed Blog Post Title or Topic]`.
*   **Section 1: Blog Post Specifications:**
    *   User provides `Proposed Title`, `Main Topic`, `Target Audience`, `Primary Goal`, `Desired Tone & Style`, `Approximate Word Count`, `Primary Keyword(s)`, and optional `Secondary/LSI Keywords`.
*   **Section 2: Content Structure & Key Points:**
    *   User outlines the `Introduction` (hook, problem/topic, gain), `Main Body Sections` (with optional headings and key points/subtopics for each), `Conclusion` (summary, reiterate value), and `Call to Action`. **This section is key for guiding the AI's output structure.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify `Things to Emphasize`, `Things to Avoid`, items to `Include`, and conceptual `Formatting Preferences`.

This detailed structure provides the AI with clear instructions and constraints, increasing the likelihood of generating a relevant and useful first draft blog post.