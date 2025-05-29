# Documentation: Prompt Template `prompt_PL_08_social_media_content_calendar_structure.md`

## 1. Purpose

This prompt template is designed to generate a **structured framework (i.e., suggested columns/fields) for a social media content calendar**. It guides the user to provide details about their brand/client, social media goals, target audience, key platforms, content pillars, desired posting frequency, and any specific campaigns or recurring content types. The AI is then tasked with proposing a comprehensive set of column headers for a content calendar, along with descriptions of what information each column should contain.

The goal is to provide a well-thought-out and practical template structure that can be implemented in a spreadsheet or project management tool to effectively plan, organize, track, and analyze social media content.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/planning/prompt_PL_08_social_media_content_calendar_structure.md](prompt_PL_08_social_media_content_calendar_structure.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `calendar_structure_request_brandx_social_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Plan-SocialMediaCalStructure-BrandX-20250528130000`.
    *   `title`: Update to reflect the specific brand/focus, e.g., `"Social Calendar Structure: BrandX Multi-Platform"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Brand/Client Name or Focus]`.
    *   In Section 1 ("Social Media Context & Objectives"), provide comprehensive details about the brand, social media goals, target audience, primary platforms, content pillars, posting frequency, and brand voice.
    *   In Section 2 ("Key Information for Calendar Structure"), list any specific campaigns, recurring content types, key dates, essential information needed per post, and tools used for calendar management.
    *   The more context provided about content strategy and operational needs, the more relevant the suggested calendar structure will be.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for calendar structure generation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PL_08_social_media_content_calendar_structure.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Plan-SocialMediaCalStructure-[BrandNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Plan-SocialMediaCalStructure-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this calendar structure request.
    *   *Placeholder in template:* `"Social Media Content Calendar Structure Generation Request"`
*   **`prompt_type` (String, Fixed):** `"planning_and_outlining"`
*   **`domain` (String, Fixed):** `"social_media_marketing_content_planning"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "planning", "social_media_calendar", "content_planning", "social_media_strategy", "marketing_operations"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/planning/prompt_PL_08_social_media_content_calendar_structure.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PL_08_social_media_content_calendar_structure.md`)

*   **Subject Line:** Pre-filled; update `[Brand/Client Name or Focus]`.
*   **Section 1: Social Media Context & Objectives:**
    *   `Brand/Client Name`.
    *   `Overall Social Media Goals`.
    *   `Target Audience on Social Media`.
    *   `Primary Social Media Platform(s) to be Covered`.
    *   `Key Content Pillars/Themes`.
    *   `Desired Posting Frequency (Per Platform)`.
    *   `Brand Voice & Tone`.
*   **Section 2: Key Information for Calendar Structure:**
    *   `Campaigns or Promotions to Incorporate`.
    *   `Recurring Content Types or Series`.
    *   `Key Dates or Events`.
    *   `Information Needed for Each Post`.
    *   `Tools Used for Content Calendar Management`.
*   **Section 3: Request for Content Calendar Structure:**
    *   This section instructs the AI to generate a set of **column headers** for a content calendar, providing a **brief description/purpose** for each column and optionally an example entry. It suggests categories like Scheduling, Platform Specifics, Content Details, Strategic Elements, Workflow, Performance Tracking, and Notes. The user typically does not modify these instructions for the output format.

This structure ensures the AI receives comprehensive background information to propose a practical and useful social media content calendar framework tailored to the user's needs.