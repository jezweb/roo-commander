# Documentation: Prompt Template `prompt_CM_01_client_outreach_introduction_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting an initial outreach or introduction email to a prospective client**. It guides the user to provide key information about the prospect, the context for reaching out, their agency's relevant value proposition, and the desired call to action. The AI then generates a draft email, including a subject line and body, tailored to these inputs.

The goal is to create a professional, concise, and compelling first-touch email that aims to secure a follow-up interaction, such as a brief call or meeting.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_01_client_outreach_introduction_email.md](prompt_CM_01_client_outreach_introduction_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_email_to_prospect_jane_doe.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-ClientOutreachEmail-JaneDoe-20250528060000`.
    *   `title`: Update to reflect the specific prospect, e.g., `"Draft Outreach Email: Jane Doe at Innovate Corp"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with the `[Prospect Name] at [Prospect Company]`.
    *   **Crucially, in Section 1 ("Email Context & Objectives"):**
        *   Fill in all bracketed placeholders like `[Full Name of the Prospect]`, `[Name of Prospect's Company]`, `[Context of Initial Contact/Reason for Outreach]`, `[Your Agency Name]`, `[Our Agency's Core Value Proposition (relevant to this prospect)]`, `[Primary Goal of this Email]`, `[Specific Call to Action (CTA)]`, and `[Desired Tone]`.
    *   In Section 2 ("Key Information to Include/Mention"), add any optional details like known pain points or brief, relevant examples.
    *   The example provided at the end of the prompt template shows how to structure this input.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_01_client_outreach_introduction_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-ClientOutreachEmail-[ProspectShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-ClientOutreachEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Initial Client Outreach / Introduction Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_sales"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "client_outreach", "sales_email", "introduction_email", "business_development"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_01_client_outreach_introduction_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_01_client_outreach_introduction_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the email:

*   **Subject Line (of the prompt):** Specifies the prospect and company for clarity.
*   **Section 1: Email Context & Objectives:**
    *   Collects detailed information about the prospect, the reason for outreach, your agency's relevant value, the email's goal, the specific CTA, and desired tone. **All placeholders here must be filled by the user.**
*   **Section 2: Key Information to Include/Mention (Optional):**
    *   Allows the user to specify any known pain points, relevant examples, or mutual connections to potentially incorporate.
*   **Section 3: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (concise, professional, clear CTA, etc.). The user does not typically modify this section.
*   **Example Section:** Shows the user how to fill in the placeholders in Section 1.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a targeted and effective outreach email.