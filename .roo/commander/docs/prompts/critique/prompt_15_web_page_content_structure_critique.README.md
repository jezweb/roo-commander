# Documentation: Prompt Template `prompt_15_web_page_content_structure_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for the content and structure of a specific web page**. It guides the user to provide the web page link (or its content and planned structure), its goals, target audience, key messages, and any SEO considerations. The critiquing AI is then directed to analyze aspects such as clarity of purpose, information architecture, content quality (UX writing), persuasiveness, on-page SEO elements, and overall user experience.

The goal is to receive actionable feedback to refine the web page to be more effective in engaging users, achieving its objectives, and performing well in search engines.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_15_web_page_content_structure_critique.md](prompt_15_web_page_content_structure_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_services_page_content_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-WebPageContent-ServicesPage-20250527110000`.
    *   `title`: Update to reflect the specific web page, e.g., `"Web Page Critique: Our Services Page Content & Structure"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name/Purpose of Web Page]`.
    *   In Section 1 ("Web Page Overview & Context"), provide details about the page's title/URL, goals, target audience, key messages, desired user actions, and any target keywords.
    *   **Crucially, in Section 2 ("The Web Page Content & Structure for Review"):**
        *   Provide a **direct link to the live web page** or a staging/preview link.
        *   Alternatively, for new or draft content, **paste the page content and describe its intended structure** (headings, sections, CTAs, etc.) in the designated code block. Include proposed meta title and description if available.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_15_web_page_content_structure_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-WebPageContent-[PageNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-WebPageContent-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Web Page Content & Structure Effectiveness Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"web_content_information_architecture"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "web_page_content", "website_structure", "information_architecture", "ux_writing", "seo"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_15_web_page_content_structure_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_15_web_page_content_structure_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name/Purpose of Web Page]`.
*   **Section 1: Web Page Overview & Context:**
    *   `Web Page Title/URL (or proposed)`.
    *   `Primary Goal(s) of this Web Page`.
    *   `Target Audience for this Page`.
    *   `Key Message(s) this Page Should Convey`.
    *   `Desired User Action(s) on this Page`.
    *   `Relationship to Overall Website Structure`.
    *   `Primary Target Keyword(s) for this Page (if SEO is a focus)`.
*   **Section 2: The Web Page Content & Structure for Review:**
    *   `Link to the Live Web Page or Staging/Preview Link` (Preferred).
    *   `Paste the Page Content and Describe its Structure` (Alternative): **Crucial for providing the content and structural plan to be critiqued, ideally with HTML structural hints and SEO metadata.**
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-I) like "Clarity of Purpose & Value Proposition," "Information Architecture & Content Hierarchy," "Content Quality & Readability (UX Writing)," "Persuasiveness & Conversion Effectiveness," and "On-Page SEO Elements." The user typically does not modify this section.

This structure ensures the AI receives the web page content (or plan) and its strategic context to provide a thorough and actionable critique.