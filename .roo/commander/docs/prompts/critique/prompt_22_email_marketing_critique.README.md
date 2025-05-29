# Documentation: Prompt Template `prompt_22_email_marketing_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a marketing email's copy and design (if applicable)**. It guides the user to provide the email's subject line, preheader, body copy, CTA details, and information about its purpose, target audience, and goals. The critiquing AI is then directed to analyze aspects such as subject line effectiveness, copy clarity and persuasiveness, CTA strength, design appeal (if visual information is provided), mobile responsiveness considerations, and overall conversion potential.

The goal is to receive actionable feedback to refine the email, making it more engaging, effective, and increasing its likelihood of achieving its marketing objectives (e.g., higher open rates, click-through rates, and conversions).

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_22_email_marketing_critique.md](prompt_22_email_marketing_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_newsletter_promo_email_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-EmailMarketing-NewsletterPromo-20250527180000`.
    *   `title`: Update to reflect the specific email, e.g., `"Email Marketing Critique: Weekly Newsletter Promotion"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Purpose/Name of Email]`.
    *   In Section 1 ("Email Overview & Context"), provide details about the email's purpose, target audience, stage in customer journey, offer, key metrics, and sequence context.
    *   **Crucially, in Section 2 ("The Email Content & Design for Review"):**
        *   Paste the **Subject Line** and **Preheader Text**.
        *   Paste the **full Email Body Content (Copy)**.
        *   If design is a factor, provide a **link to a preview/mockup** or describe the layout.
        *   Detail the **Call(s) to Action (CTAs)** including text and links.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_22_email_marketing_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-EmailMarketing-[EmailPurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-EmailMarketing-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Email Marketing Copy & Design Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"email_marketing_copywriting_design"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "email_marketing", "email_copywriting", "email_design", "conversion_rate_optimization", "ctr"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_22_email_marketing_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_22_email_marketing_critique.md`)

*   **Subject Line:** Pre-filled; update `[Purpose/Name of Email]`.
*   **Section 1: Email Overview & Context:**
    *   `Email Purpose/Goal`.
    *   `Target Audience Segment`.
    *   `Stage in Customer Journey/Funnel`.
    *   `Product/Service/Offer Being Promoted`.
    *   `Key Metrics for Success`.
    *   `Part of a Sequence/Campaign`.
*   **Section 2: The Email Content & Design for Review:**
    *   `Subject Line`: **User must paste the subject line.**
    *   `Preheader Text`: **User must paste the preheader text.**
    *   `Email Body Content (Copy)`: **User must paste the email copy.**
    *   `Design/Layout`: User provides a link to a preview/mockup or describes the layout.
    *   `Call(s) to Action (CTAs)`: User details CTA text and links.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-I) like "Subject Line & Preheader Text," "Email Copy (Body Content)," "Call(s) to Action," "Design & Layout," "Offer & Incentive," and "Deliverability Considerations." The user typically does not modify this section.

This structure ensures the AI receives all necessary components of the email and its strategic context to provide a thorough and actionable critique.