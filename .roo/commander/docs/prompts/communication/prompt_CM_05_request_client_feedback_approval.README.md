# Documentation: Prompt Template `prompt_CM_05_request_client_feedback_approval.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a professional email to a client requesting their feedback and/or approval on a specific project deliverable**. It guides the user to provide details about the client, project, deliverable (including how to access it), the type of action needed (feedback or approval), specific areas for focus, and the deadline. The AI then generates a structured draft email, including a subject line and body.

The goal is to facilitate clear, timely, and effective communication for the review and approval stages of a project, helping to keep projects on track and ensure client alignment.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_05_request_client_feedback_approval.md](prompt_CM_05_request_client_feedback_approval.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_feedback_request_design_mockups_clientx.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-ClientFeedbackEmail-DesignV2ClientX-20250528100000`.
    *   `title`: Update to reflect the specific request, e.g., `"Draft Email: Feedback on Design Mockups V2 for Client X"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Deliverable Name] - Project: [Project Name]`.
    *   **In Section 1 ("Request Context & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name / Primary Contact(s)]`, `[Project Name]`, `[Deliverable Name/Version]`, `[Link to Deliverable / How to Access]`, `[Type of Action Requested]`, `[Deadline for Feedback/Approval]`, etc.
    *   **In Section 2 ("Additional Information/Context for Client"), optionally provide:**
        *   A brief recap of previous discussions or key changes from prior versions.
        *   The preferred method for the client to provide feedback.
    *   Use the example formats provided within the prompt for clarity.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_05_request_client_feedback_approval.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-ClientFeedbackEmail-[DeliverableShortName]-[ClientShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-ClientFeedbackEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Request for Client Feedback/Approval Email Draft"`
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
    *   *Default in template:* `["prompt", "drafting", "email_draft", "client_feedback", "client_approval", "project_deliverables", "client_communication"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_05_request_client_feedback_approval.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_05_request_client_feedback_approval.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the request email:

*   **Subject Line (of the prompt):** Specifies the deliverable and project for clarity.
*   **Section 1: Request Context & Email Objectives:**
    *   Collects essential details about the client, project, deliverable, access method, type of action needed, specific feedback areas, deadline, impact of delay, and next steps. **All placeholders here must be filled by the user.**
*   **Section 2: Additional Information/Context for Client (Optional):**
    *   Allows for a brief recap or notes on how to provide feedback.
*   **Section 3: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (clear, action-oriented, professional, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective email for requesting client feedback or approval.