# Documentation: Prompt Template `prompt_14_blog_post_impact_seo_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions specifically for a blog post, focusing on its overall impact, reader engagement, and on-page Search Engine Optimization (SEO)**. It guides the user to provide the blog post content (or link), target keywords, audience details, and goals. The critiquing AI is then directed to analyze aspects such as title effectiveness, introduction, content quality, readability, structure, keyword usage, meta descriptions, image SEO, internal/external linking, and calls to action.

The goal is to receive actionable feedback to improve the blog post's quality, search engine visibility, user engagement, and ability to achieve its intended objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_14_blog_post_impact_seo_critique.md](prompt_14_blog_post_impact_seo_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_new_feature_blog_post_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-BlogPostSEO-NewFeature-20250527100000`.
    *   `title`: Update to reflect the specific blog post, e.g., `"Blog Post & SEO Critique: Announcing New Feature X"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Title of Blog Post]`.
    *   In Section 1 ("Blog Post Overview & Context"), provide details about the post's title, goals, target audience, keywords, desired action, and blog niche.
    *   **Crucially, in Section 2 ("The Blog Post for Review"):**
        *   Provide a **direct link to the blog post** if live or in a preview environment.
        *   Alternatively, for drafts, **paste the full blog post text** into the designated code block. It's helpful to indicate HTML structure (headings, paragraphs, etc.) and include proposed meta descriptions and image alt text if available.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_14_blog_post_impact_seo_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-BlogPostSEO-[BlogPostTopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-BlogPostSEO-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Blog Post Impact & SEO Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"content_creation_blog_seo"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "blog_post", "seo", "content_marketing", "writing_review", "on_page_seo"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_14_blog_post_impact_seo_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_14_blog_post_impact_seo_critique.md`)

*   **Subject Line:** Pre-filled; update `[Title of Blog Post]`.
*   **Section 1: Blog Post Overview & Context:**
    *   `Blog Post Title`.
    *   `Primary Goal(s) of this Blog Post`.
    *   `Target Audience`.
    *   `Primary Target Keyword(s) (if any)`.
    *   `Secondary/LSI Keywords (if identified)`.
    *   `Desired Action/Takeaway for the Reader`.
    *   `Blog's General Niche/Topic Area`.
*   **Section 2: The Blog Post for Review:**
    *   `Link to the Blog Post` (Preferred).
    *   `Paste the Full Blog Post Text Here` (Alternative): **Crucial for providing the content to be critiqued, ideally with structural hints and SEO metadata.**
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-I) like "Title & Headline Effectiveness," "Content Quality, Depth & Value," "Readability, Structure & Flow," "On-Page SEO Elements (Keywords, Meta Description, Image SEO, Linking)," "Engagement," and "Call to Action." The user typically does not modify this section.

This structure ensures the AI receives the blog post content and specific SEO-related context to provide a thorough and actionable critique.