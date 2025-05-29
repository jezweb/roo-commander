# Documentation: Prompt Template `prompt_LRN_08_industry_trend_briefing_prep.md`

## 1. Purpose

This prompt template is designed to help users **prepare a structured outline for an industry trend briefing note or internal presentation**. It guides the user to specify the industry trend they need to research, the target audience for the briefing, and its primary purpose. The AI is then tasked with generating a comprehensive outline covering key aspects such as the trend's definition, current state, key players, impact, opportunities, challenges, future outlook, and potential recommendations.

The goal is to provide a robust framework that can guide research efforts and ensure the final briefing is well-organized, thorough, and effectively communicates essential information about the trend to the intended audience.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/learning/prompt_LRN_08_industry_trend_briefing_prep.md](prompt_LRN_08_industry_trend_briefing_prep.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `trend_brief_outline_request_ai_in_retail.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Learn-TrendBriefPrep-AIinRetail-20250528130000`.
    *   `title`: Update to reflect the specific trend, e.g., `"Trend Briefing Outline: AI in Retail Sector"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Specific Industry Trend]`.
    *   **Crucially, in Section 1 ("Briefing Context & Goals"):**
        *   Clearly state the `Specific Industry Trend`.
        *   Define the `Target Audience for the Briefing` and their likely current understanding.
        *   Explain the `Primary Purpose of the Briefing`.
        *   Optionally, specify the `Desired Length/Format` and any `Specific Questions to Address`.
        *   In Section 2, under points D, E, F, and H, ensure you specify `[Our Company/Our Clients/Our Specific Area of Focus]` if the briefing needs to be tailored beyond general industry impact.
    *   Section 2 ("Request for Briefing Outline") contains instructions for the AI on the desired structure and typically does not need extensive modification by the user beyond the tailoring mentioned above.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the briefing outline.

## 3. TOML Frontmatter Schema (for an instance of `prompt_LRN_08_industry_trend_briefing_prep.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Learn-TrendBriefPrep-[TrendShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Learn-TrendBriefPrep-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this outline request.
    *   *Placeholder in template:* `"Industry Trend Briefing Preparation Outline Request"`
*   **`prompt_type` (String, Fixed):** `"planning_outlining"`
*   **`domain` (String, Fixed):** `"learning_and_development_research_synthesis"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "industry_trends", "research_outline", "briefing_note_prep", "market_analysis", "strategic_awareness"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/learning/prompt_LRN_08_industry_trend_briefing_prep.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_LRN_08_industry_trend_briefing_prep.md`)

*   **Subject Line:** Pre-filled; update `[Specific Industry Trend]`.
*   **Section 1: Briefing Context & Goals:**
    *   `Specific Industry Trend`: **User must specify this clearly.**
    *   `Target Audience for the Briefing`: **Essential for tailoring the depth and focus.**
    *   `Primary Purpose of the Briefing`.
    *   `Desired Length/Format of Final Briefing (Optional)`.
    *   `Specific Questions to Address (if any)`.
*   **Section 2: Request for Briefing Outline:**
    *   This section is pre-filled with instructions for the AI on the desired sections of the outline (Introduction, Current State, Key Players, Impact, Opportunities, Challenges, Future Outlook, Recommendations, Sources). The user should tailor the `[Our Company/Our Clients/Our Specific Area of Focus]` placeholders within these instructions to get a more relevant outline.

This structure ensures the AI understands the specific trend and the objectives of the briefing, enabling it to generate a useful and comprehensive outline for research and content creation.