# Documentation: Prompt Template `prompt_CM_04_project_status_update_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a professional and informative project status update email to clients**. It guides the user to provide details about the project, reporting period, key accomplishments, planned activities, challenges/risks, and any items needed from the client. The AI then generates a structured draft email, including a subject line and body.

The goal is to facilitate clear, consistent, and proactive communication with clients regarding project progress, helping to manage expectations and maintain a strong working relationship.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_04_project_status_update_email.md](prompt_CM_04_project_status_update_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_status_email_project_alpha_wk4.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-ProjectStatusEmail-AlphaWk4-20250528090000`.
    *   `title`: Update to reflect the specific project and period, e.g., `"Draft Status Email: Project Alpha - Week 4 Update"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Project Name] - Period Ending [Date]`.
    *   **In Section 1 ("Project & Reporting Context"):**
        *   Fill in all bracketed placeholders like `[Project Name]`, `[Client Name / Primary Contact(s)]`, `[Reporting Period]`, etc.
    *   **Crucially, in Section 2 ("Status Update Details"):**
        *   List **Key Accomplishments / Progress Made This Period**.
        *   List **Activities Planned for Next Period**.
        *   Detail any **Challenges, Roadblocks, or Risks**, including impact and mitigation.
        *   Optionally, provide **Budget/Timeline Status**.
        *   Clearly list any **Action Items / Information Needed from Client**.
    *   Use the example formats provided within the prompt for clarity.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_04_project_status_update_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-ProjectStatusEmail-[ProjectShortName]-[Period]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-ProjectStatusEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Project Status Update Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_project_management"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "project_status_update", "client_reporting", "project_management", "client_communication"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_04_project_status_update_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_04_project_status_update_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the status update email:

*   **Subject Line (of the prompt):** Specifies the project and reporting period for clarity.
*   **Section 1: Project & Reporting Context:**
    *   Collects essential project identifiers, client details, reporting period information, and the email's goal/tone. **All placeholders here must be filled by the user.**
*   **Section 2: Status Update Details:**
    *   `Key Accomplishments / Progress Made This Period`: **User provides a bulleted list.**
    *   `Activities Planned for Next Period`: **User provides a bulleted list.**
    *   `Challenges, Roadblocks, or Risks (if any)`: **User details issues with impact and mitigation.**
    *   `Budget/Timeline Status (Optional)`.
    *   `Action Items / Information Needed from Client (if any)`: **User lists specific requests.**
*   **Section 3: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (organized, professional, transparent, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective project status update email.