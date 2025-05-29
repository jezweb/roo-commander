# Documentation: Prompt Template `prompt_CM_12_project_welcome_pre_kickoff_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a project welcome and pre-kickoff email to a new client**. This email is typically sent after a contract is signed but before the formal project kickoff meeting. It guides the user to provide details about the client, project, key agency contacts, kickoff meeting information (if set), and any light preparatory materials or thinking points for the client. The AI then generates a draft email.

The goal is to officially welcome the client, set a positive tone for the project, introduce the core team, manage initial expectations, and ensure the client feels informed and prepared leading up to the kickoff meeting.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_12_project_welcome_pre_kickoff_email.md](prompt_CM_12_project_welcome_pre_kickoff_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_welcome_email_project_alpha_clientx.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-ProjectWelcomeEmail-AlphaClientX-20250528170000`.
    *   `title`: Update to reflect the specific project, e.g., `"Draft Welcome Email: Project Alpha for Client X"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Project Name] to [Client Name]`.
    *   **In Section 1 ("Project Welcome Context & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name / Primary Contact(s)]`, `[Project Name]`, `[Brief Reiteration of Project Goal]`, details of **Key Contact(s) from Our Agency**, and **Scheduled Kickoff Meeting Details**.
    *   **In Section 2 ("Information to Share Pre-Kickoff"):**
        *   Briefly outline **What to Expect in the Kickoff Meeting**.
        *   Include any **Light Pre-Reading or "Thinking Points"** (optional and should be minimal).
        *   Mention any **Access to Shared Drive/Project Management Tool** being set up.
        *   State any **Immediate Housekeeping Items**.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_12_project_welcome_pre_kickoff_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-ProjectWelcomeEmail-[ProjectShortName]-[ClientShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-ProjectWelcomeEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Project Welcome / Pre-Kickoff Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_project_onboarding"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "project_welcome", "pre_kickoff", "client_onboarding", "project_management", "client_communication"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_12_project_welcome_pre_kickoff_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_12_project_welcome_pre_kickoff_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the welcome email:

*   **Subject Line (of the prompt):** Specifies the project and client for clarity.
*   **Section 1: Project Welcome Context & Email Objectives:**
    *   Collects details about the client, project, project goal, key agency contacts, and kickoff meeting details. **All placeholders here must be filled by the user.**
*   **Section 2: Information to Share Pre-Kickoff:**
    *   User outlines what to expect in the kickoff, any light preparatory information, and initial logistical setups. **This section is key for setting client expectations.**
*   **Section 3: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (warm, welcoming, informative, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective project welcome email that starts the client relationship on a positive note.