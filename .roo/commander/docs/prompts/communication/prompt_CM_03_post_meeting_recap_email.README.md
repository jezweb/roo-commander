# Documentation: Prompt Template `prompt_CM_03_post_meeting_recap_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a professional post-meeting follow-up or recap email to clients**. It guides the user to provide details about the meeting (purpose, date, attendees), summarize key discussion points and decisions, and list clear action items with owners and due dates. The AI then generates a draft email, including a subject line and body, to effectively communicate this information.

The goal is to ensure alignment, accountability, and maintain momentum after client meetings by providing a clear record of what was discussed and agreed upon.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_03_post_meeting_recap_email.md](prompt_CM_03_post_meeting_recap_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_recap_email_clientx_kickoff_followup.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-MeetingRecapEmail-ClientXKickoff-20250528080000`.
    *   `title`: Update to reflect the specific meeting, e.g., `"Draft Recap Email: Client X Project Kickoff Follow-up"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with the `[Meeting Purpose] with [Client Name/Attendees] on [Date]`.
    *   **Crucially, in Section 1 ("Meeting Recap Details & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name(s) / Primary Attendee(s) from Client Side]`, `[Meeting Purpose/Topic]`, `[Date of Meeting]`, etc.
    *   **In Section 2 ("Key Discussion Points & Decisions Made"):**
        *   Summarize the main discussion outcomes and decisions using bullet points.
    *   **In Section 3 ("Action Items"):**
        *   List each action item clearly, specifying the action, owner, and due date.
    *   In Section 4 ("Next Steps"), outline broader upcoming activities.
    *   In Section 5 ("Attachments"), list any files to be attached.
    *   The example provided at the end of the prompt template shows how to structure this input.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_03_post_meeting_recap_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-MeetingRecapEmail-[MeetingPurposeShort]-[ClientShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-MeetingRecapEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Post-Meeting Follow-Up / Recap Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_meeting_management"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "meeting_recap", "follow_up_email", "action_items", "client_communication", "project_management"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_03_post_meeting_recap_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_03_post_meeting_recap_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the recap email:

*   **Subject Line (of the prompt):** Specifies the meeting purpose, client, and date for clarity.
*   **Section 1: Meeting Recap Details & Email Objectives:**
    *   Collects logistical details of the past meeting and the goal of the recap email. **All placeholders here must be filled by the user.**
*   **Section 2: Key Discussion Points & Decisions Made:**
    *   User provides a bulleted summary of important outcomes. **Crucial for the email content.**
*   **Section 3: Action Items:**
    *   User lists specific action items with owners and due dates. **Essential for accountability.**
*   **Section 4: Next Steps (Optional):**
    *   User outlines broader future activities.
*   **Section 5: Attachments (Optional):**
    *   User lists any documents to be attached.
*   **Section 6: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (professional, organized, action-oriented, etc.). The user does not typically modify this section.
*   **Example Section:** Shows the user how to fill in the placeholders in Sections 1, 2, 3, 4, and 5.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective post-meeting recap email.