# Documentation: Prompt Template `prompt_16_seo_strategy_keyword_usage_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an SEO strategy and its associated keyword usage**. It guides the user to provide details about their SEO goals, target audience, scope, competitors, and their list of target keywords (ideally with metrics and content mapping). The critiquing AI is then directed to analyze aspects such as goal alignment, keyword relevance, search intent alignment, competitiveness, topical authority building, and overall strategic soundness.

The goal is to receive actionable feedback to refine the SEO strategy, optimize keyword selection, and improve the likelihood of achieving desired organic search outcomes.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_16_seo_strategy_keyword_usage_critique.md](prompt_16_seo_strategy_keyword_usage_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_blog_seo_strategy_q3.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-SEOStrategyKeywords-BlogQ3-20250527120000`.
    *   `title`: Update to reflect the specific strategy, e.g., `"SEO Strategy Critique: Q3 Blog Content Keywords"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Focus Area/Campaign/Website Section]`.
    *   In Section 1 ("SEO Strategy & Keyword Context"), provide details about SEO goals, target audience, scope, competitors, current performance (if known), and tools used.
    *   **Crucially, in Section 2 ("Keyword List & Content Mapping"):**
        *   **Provide the list of target keywords.** Include metrics like search volume, difficulty, CPC, and intent if available.
        *   Describe any existing or planned **content mapping** for these keywords.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_16_seo_strategy_keyword_usage_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-SEOStrategyKeywords-[FocusAreaShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-SEOStrategyKeywords-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"SEO Strategy & Keyword Usage Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"seo_strategy_keyword_research"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "seo", "seo_strategy", "keyword_research", "content_strategy", "digital_marketing"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_16_seo_strategy_keyword_usage_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_16_seo_strategy_keyword_usage_critique.md`)

*   **Subject Line:** Pre-filled; update `[Focus Area/Campaign/Website Section]`.
*   **Section 1: SEO Strategy & Keyword Context:**
    *   `Overall SEO Goals`.
    *   `Target Audience for SEO Efforts`.
    *   `Scope of this Strategy`.
    *   `Key Competitors (if identified)`.
    *   `Current SEO Performance (Briefly, if known)`.
    *   `Tools Used for Keyword Research (if applicable)`.
*   **Section 2: Keyword List & Content Mapping (if applicable):**
    *   `Provide the List of Target Keywords`: **Crucial for the critique. Include metrics and intent if possible.**
    *   `Content Plan / Keyword Mapping`: How keywords will be used in content.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-J) like "Goal Alignment & Strategy Coherence," "Keyword Selection & Relevance," "Search Intent Alignment," "Competitiveness & Achievability," "Keyword Grouping & Topical Authority," and "Overall Strategy Soundness." The user typically does not modify this section.

This structure ensures the AI receives the necessary strategic context and keyword data to perform a thorough and actionable SEO strategy critique.