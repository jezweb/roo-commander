# Documentation: Prompt Template `prompt_CM_02_meeting_confirmation_agenda_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a professional meeting confirmation and agenda email to clients**. It guides the user to provide all necessary meeting details (purpose, date, time, location/link, attendees) and a structured agenda. The AI then generates a draft email, including a subject line and body, to clearly communicate this information.

The goal is to ensure all participants are informed, prepared, and aligned on the meeting's objectives, thereby increasing meeting effectiveness and professionalism.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_02_meeting_confirmation_agenda_email.md](prompt_CM_02_meeting_confirmation_agenda_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_confirm_email_clientx_kickoff_mtg.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-MeetingConfirmEmail-ClientXKickoff-20250528070000`.
    *   `title`: Update to reflect the specific meeting, e.g., `"Draft Confirmation Email: Client X Project Kickoff"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with the `[Meeting Purpose] with [Client Name/Attendees]`.
    *   **Crucially, in Section 1 ("Meeting Details & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name(s) / Primary Attendee(s) from Client Side]`, `[Meeting Purpose/Topic]`, `[Date of Meeting]`, `[Time of Meeting (including timezone)]`, `[Location/Platform & Link]`, etc.
    *   **In Section 2 ("Agenda Items"):**
        *   List each agenda item clearly, optionally specifying the lead and time allocation, following the example format.
    *   In Section 3 ("Pre-Reading or Preparation"), list any materials or questions for the client if applicable.
    *   The example provided at the end of the prompt template shows how to structure this input.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_02_meeting_confirmation_agenda_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-MeetingConfirmEmail-[MeetingPurposeShort]-[ClientShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-MeetingConfirmEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Meeting Confirmation & Agenda Email Draft"`
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
    *   *Default in template:* `["prompt", "drafting", "email_draft", "meeting_confirmation", "meeting_agenda", "client_communication", "professional_communication"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_02_meeting_confirmation_agenda_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_02_meeting_confirmation_agenda_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the email:

*   **Subject Line (of the prompt):** Specifies the meeting purpose and client for clarity.
*   **Section 1: Meeting Details & Email Objectives:**
    *   Collects all logistical details of the meeting and the goal of the confirmation email. **All placeholders here must be filled by the user.**
*   **Section 2: Agenda Items:**
    *   User lists agenda items, ideally with leads and time allocations. **This is crucial for the email content.**
*   **Section 3: Pre-Reading or Preparation (Optional):**
    *   Allows the user to specify any materials or questions for attendees to consider beforehand.
*   **Section 4: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (professional, courteous, organized, etc.). The user does not typically modify this section.
*   **Example Section:** Shows the user how to fill in the placeholders in Sections 1 and 2.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective meeting confirmation email.