# Documentation: Prompt Template `prompt_CG_03_draft_email_marketing_copy.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate **draft copy for a single marketing email or a multi-email sequence**. It guides the user to provide specifications for the overall email/sequence (purpose, audience, brand voice, key offer) and for each individual email (specific goal, subject line ideas, key talking points, CTA). The aim is to produce a solid first draft of email content that can then be reviewed, edited, and integrated into an email marketing platform.

This template helps accelerate the creation of email marketing campaigns by providing a structured starting point for copy.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_03_draft_email_marketing_copy.md](prompt_CG_03_draft_email_marketing_copy.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_welcome_email_series_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftEmailCopy-WelcomeSeriesV1-20250528080000`.
    *   `title`: Update to reflect the specific email/sequence, e.g., `"Draft Email Copy: New Subscriber Welcome Series"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Purpose/Name of Email or Sequence]`.
    *   **In Section 1 ("Email/Sequence Overview & Specifications"):**
        *   Clearly define the `Purpose/Name`, `Type` (Single or Sequence), `Number of Emails`, `Primary Goal`, `Target Audience Segment`, `Brand Voice & Tone`, `Key Offer/Message`, and `Main Call to Action`.
    *   **Crucially, in Section 2 ("Individual Email Details"):**
        *   **Complete the "Email # [Number]" block for each email you want drafted.** If it's a single email, only complete "Email #1".
        *   For each email, specify its `Specific Goal`, provide a `Proposed Subject Line` (or ask the AI to suggest), optional `Proposed Preheader Text`, list `Key Talking Points/Content to Cover`, detail the `Specific Call to Action (CTA)` with text and a link placeholder, suggest a `Desired Length`, and a conceptual `Visual Element Suggestion`.
    *   In Section 3 ("Additional Instructions"), provide any other relevant guidance.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft email copy.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_03_draft_email_marketing_copy.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftEmailCopy-[PurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftEmailCopy-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Email Marketing Copy Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_email_marketing"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "email_marketing", "email_copywriting", "marketing_automation", "drafting", "email_sequence"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_03_draft_email_marketing_copy.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_03_draft_email_marketing_copy.md`)

*   **Subject Line:** Pre-filled; update `[Purpose/Name of Email or Sequence]`.
*   **Section 1: Email/Sequence Overview & Specifications:**
    *   User provides details about the overall email or sequence: purpose, type, number of emails, primary goal, audience, brand voice, key offer, and main CTA.
*   **Section 2: Individual Email Details:**
    *   **This section is repeated for each email in the sequence (or completed once for a single email).** User provides the specific goal, subject/preheader ideas, key talking points, specific CTA, desired length, and visual suggestions for that individual email. **This is key for guiding the AI on the content of each piece.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify overall points to emphasize/avoid, personalization tokens, and desired email body structure.

This detailed structure provides the AI with clear instructions for both the overarching strategy of the email(s) and the specific content requirements for each piece, increasing the likelihood of generating relevant and useful draft copy.