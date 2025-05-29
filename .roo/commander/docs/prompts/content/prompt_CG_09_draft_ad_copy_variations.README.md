# Documentation: Prompt Template `prompt_CG_09_draft_ad_copy_variations.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate **multiple variations of text ad copy (headlines and descriptions)** for platforms like Google Ads or Microsoft Advertising. It guides the user to provide details about the product/service being advertised, target audience, unique selling propositions (USPs), campaign goals, target platform, character limits, and desired number of ad concepts/angles. The AI is tasked with creating distinct sets of ad copy that can be used for A/B testing and optimizing ad performance.

This template helps accelerate the creation of diverse ad creatives, providing a range of options for paid advertising campaigns.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_09_draft_ad_copy_variations.md](prompt_CG_09_draft_ad_copy_variations.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_google_ads_summer_sale_copy_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftAdCopyVars-GoogleSummerSale-20250528140000`.
    *   `title`: Update to reflect the specific campaign, e.g., `"Draft Ad Copy: Google Ads Summer Sale Variations"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Product/Service/Campaign Name] - [Platform]`.
    *   **In Section 1 ("Ad Campaign Overview & Specifications"):**
        *   Clearly describe the `Product/Service/Offer`, `Target Audience`, `Unique Selling Proposition(s)`, `Primary Goal`, `Target Platform & Ad Format`, `Key Call to Action (CTA) Message`, `Destination URL`, and `Primary Target Keywords`.
    *   **Crucially, in Section 2 ("Ad Copy Requirements & Variations"):**
        *   Specify the `Number of Distinct Ad Concepts/Angles to Explore`.
        *   For each concept, detail requirements for `Headlines` (number, character limits, key elements) and `Descriptions` (number, character limits, key elements).
        *   Optionally, provide guidance for `Path Fields / Display URL`.
    *   Section 3 provides an illustrative example of how to define one concept/angle; the user should instruct the AI to generate the requested number of *distinct* concepts.
    *   In Section 4 ("Additional Instructions"), provide guidance on tone, points to emphasize/avoid, and any promotional details.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft ad copy variations.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_09_draft_ad_copy_variations.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftAdCopyVars-[CampaignShort]-[PlatformShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftAdCopyVars-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Ad Copy Variations Draft Generation Request (Text Ads)"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_advertising_copy"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "ad_copy", "ppc_advertising", "google_ads", "text_ads", "marketing_copy", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_09_draft_ad_copy_variations.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_09_draft_ad_copy_variations.md`)

*   **Subject Line:** Pre-filled; update `[Product/Service/Campaign Name] - [Platform]`.
*   **Section 1: Ad Campaign Overview & Specifications:**
    *   User provides comprehensive details about what's being advertised, the audience, USPs, goals, platform, CTA, landing page, and keywords.
*   **Section 2: Ad Copy Requirements & Variations:**
    *   User specifies the number of ad concepts and, for each, the requirements for headlines and descriptions (number of variations, character limits, key elements). **This section is key for guiding the AI's creative output and ensuring platform compliance.**
*   **Section 3: Example of One Ad Concept/Angle:**
    *   Illustrative example to show the AI the desired structure for one concept; the AI is expected to generate multiple *different* concepts.
*   **Section 4: Additional Instructions (Optional):**
    *   User can specify tone, points to emphasize/avoid, and promotional details.

This detailed structure provides the AI with clear instructions and constraints for generating multiple, distinct ad copy variations suitable for A/B testing and campaign optimization.