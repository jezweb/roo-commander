# Documentation: Prompt Template `prompt_ID_05_tagline_headline_valueprop_brainstorm.md`

## 1. Purpose

This prompt template is designed to **brainstorm a variety of taglines, headlines, and core value proposition statements** for a specific brand, product, service, or campaign. It guides the user to provide context about the offering, its target audience, unique selling propositions (USPs), key benefits, desired brand voice, and the primary goal of the messaging. The AI is then tasked with generating multiple options for each messaging element (taglines, headlines, value propositions), aiming for variety in approach and style.

The goal is to generate a diverse pool of compelling and strategically aligned messaging options that can be further tested, refined, and used in various marketing and branding materials.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/ideation/prompt_ID_05_tagline_headline_valueprop_brainstorm.md](prompt_ID_05_tagline_headline_valueprop_brainstorm.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `ideation_request_zenith_watch_messaging.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Ideation-TaglineHeadlineVP-ZenithWatch-20250528100000`.
    *   `title`: Update to reflect the specific subject, e.g., `"Messaging Brainstorm: Zenith Smartwatch Taglines & Headlines"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with the `[Brand/Product/Service/Campaign Name]`.
    *   In Section 1 ("Context & Objectives"), provide comprehensive details about the offering, target audience, USPs, benefits, brand voice, messaging goals, usage context, and any relevant keywords.
    *   Specify the `[Number]` of options desired for taglines, headlines, and value propositions in Section 2.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for ideation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_ID_05_tagline_headline_valueprop_brainstorm.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Ideation-TaglineHeadlineVP-[SubjectNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Ideation-TaglineHeadlineVP-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this ideation request.
    *   *Placeholder in template:* `"Tagline, Headline & Value Proposition Brainstorming Request"`
*   **`prompt_type` (String, Fixed):** `"ideation_and_brainstorming"`
*   **`domain` (String, Fixed):** `"branding_marketing_copywriting"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "ideation", "brainstorming", "taglines", "headlines", "value_proposition", "branding", "marketing_copy", "copywriting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/ideation/prompt_ID_05_tagline_headline_valueprop_brainstorm.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_ID_05_tagline_headline_valueprop_brainstorm.md`)

*   **Subject Line:** User specifies the brand/product/service/campaign name.
*   **Section 1: Context & Objectives:**
    *   `Brand/Product/Service/Campaign Name`: **The subject of the messaging.**
    *   `Core Offering/Purpose`: **What it is/does.**
    *   `Target Audience`: **Crucial for tailoring the message.**
    *   `Unique Selling Proposition(s) (USPs)`: **What makes it different.**
    *   `Key Benefits`: **What's in it for the audience.**
    *   `Desired Brand Voice/Tone`.
    *   `Overall Goal of Messaging`.
    *   `Where will this messaging primarily be used?` (Context for headlines).
    *   `Keywords to Consider (Optional)`.
*   **Section 2: Request for Messaging Elements:**
    *   `A. Taglines`: User specifies the number of options.
    *   `B. Headlines`: User specifies the number of options (per context if needed).
    *   `C. Core Value Proposition Statements`: User specifies the number of options.
*   **Guidelines for Generation:** Pre-filled instructions for the AI to ensure variety, audience focus, and context consideration.

This structure ensures the AI receives clear direction and sufficient context to generate a diverse and strategically relevant set of taglines, headlines, and value propositions.