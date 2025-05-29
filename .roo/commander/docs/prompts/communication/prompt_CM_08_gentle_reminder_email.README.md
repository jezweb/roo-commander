# Documentation: Prompt Template `prompt_CM_08_gentle_reminder_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a polite and professional "gentle reminder" email to a client** regarding an outstanding item, such as pending feedback, information, approval, or an overdue payment. It guides the user to provide details about the client, the specific pending item, original request/due dates, and any relevant context. The AI then generates a draft email.

The goal is to effectively follow up on outstanding items in a courteous manner that encourages client action while maintaining a positive relationship.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_08_gentle_reminder_email.md](prompt_CM_08_gentle_reminder_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_reminder_email_clientx_feedback.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-GentleReminderEmail-ClientXFeedback-20250528130000`.
    *   `title`: Update to reflect the specific reminder, e.g., `"Draft Reminder Email: Feedback on Designs for Client X"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Client Name] Regarding [Pending Item]`.
    *   **In Section 1 ("Reminder Context & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name / Primary Contact(s)]`, `[Specific Pending Item]`, `[Original Request Date / Due Date]`.
        *   Provide a `[Link to Previous Email/Document]` if helpful.
        *   Optionally, describe the `[Impact of Delay]` and the `[Number of Previous Reminders]`.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_08_gentle_reminder_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-GentleReminderEmail-[ItemShortName]-[ClientShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-GentleReminderEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Gentle Reminder Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_follow_up"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "reminder_email", "follow_up", "client_communication", "accounts_receivable", "project_management"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_08_gentle_reminder_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_08_gentle_reminder_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the reminder email:

*   **Subject Line (of the prompt):** Specifies the client and pending item for clarity.
*   **Section 1: Reminder Context & Email Objectives:**
    *   Collects details about the client, the specific item outstanding, relevant dates, and any context about previous communication or impact of delay. **All placeholders here must be filled by the user.**
*   **Section 2: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (polite, clear, helpful, not accusatory, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective gentle reminder email.