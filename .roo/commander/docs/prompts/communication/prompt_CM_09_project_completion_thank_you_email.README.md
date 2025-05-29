# Documentation: Prompt Template `prompt_CM_09_project_completion_thank_you_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a professional project completion and thank you email to a client**. It guides the user to provide details about the client, the completed project, key achievements, and any relevant next steps for handover, support, or future collaboration. The AI then generates a draft email.

The goal is to formally mark the successful conclusion of a project, express gratitude for the client's partnership, reinforce the value delivered, and maintain a positive relationship that could lead to future opportunities.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_09_project_completion_thank_you_email.md](prompt_CM_09_project_completion_thank_you_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_completion_email_project_alpha_clientx.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-ProjectCompletionEmail-AlphaClientX-20250528140000`.
    *   `title`: Update to reflect the specific project, e.g., `"Draft Completion Email: Project Alpha for Client X"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Project Name] to [Client Name]`.
    *   **In Section 1 ("Project Completion Context & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name / Primary Contact(s)]`, `[Project Name]`, `[Date of Official Project Completion/Go-Live]`, and list **Key Achievements / Major Successes**.
    *   **In Section 2 ("Immediate Next Steps / Handover / Ongoing Support"), detail any relevant information regarding:**
        *   Handover, warranty/support, training resources, or ongoing maintenance plans.
    *   **In Section 3 ("Future Collaboration / Relationship Building"), optionally include:**
        *   A subtle mention of future work or a soft request for a testimonial/referral.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_09_project_completion_thank_you_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-ProjectCompletionEmail-[ProjectShortName]-[ClientShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-ProjectCompletionEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Project Completion / Thank You & Next Steps Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_project_closure_relationship_management"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "project_completion", "thank_you_email", "client_relationship", "next_steps", "client_communication"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_09_project_completion_thank_you_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_09_project_completion_thank_you_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the project completion email:

*   **Subject Line (of the prompt):** Specifies the project and client for clarity.
*   **Section 1: Project Completion Context & Email Objectives:**
    *   Collects details about the client, project, completion date, and **key achievements**. **All placeholders here must be filled by the user.**
*   **Section 2: Immediate Next Steps / Handover / Ongoing Support (if applicable):**
    *   User details any post-completion logistics or support information.
*   **Section 3: Future Collaboration / Relationship Building (Optional):**
    *   Allows for a soft mention of future work or testimonial requests.
*   **Section 4: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (positive, appreciative, forward-looking, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective project completion email that strengthens client relationships.