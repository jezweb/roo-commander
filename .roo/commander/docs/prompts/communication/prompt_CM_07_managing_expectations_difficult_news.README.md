# Documentation: Prompt Template `prompt_CM_07_managing_expectations_difficult_news.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a professional and sensitive email to a client for the purpose of managing their expectations or delivering difficult news** regarding a project (e.g., potential delays, unforeseen challenges, budget adjustments). It guides the user to provide details about the client, project, the specific issue, its reasons, potential impacts, and the proposed solutions or mitigation plans. The AI then generates a structured draft email.

The goal is to facilitate transparent, accountable, and solution-oriented communication during challenging project situations, aiming to maintain client trust and collaborate on a path forward.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_07_managing_expectations_difficult_news.md](prompt_CM_07_managing_expectations_difficult_news.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_difficult_news_email_project_alpha_delay.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-DifficultNewsEmail-AlphaDelay-20250528120000`.
    *   `title`: Update to reflect the specific situation, e.g., `"Draft Email: Managing Expectations for Project Alpha Timeline"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Brief, Neutral Statement of Issue] for [Project Name]`.
    *   **In Section 1 ("Situation Context & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name / Primary Contact(s)]`, `[Project Name]`, `[The Difficult News / Expectation to Manage (Be Clear & Factual)]`, `[Reason(s) for the Issue]`.
        *   Crucially, detail the **Impact on Project** (Timeline, Budget, Scope, Quality).
        *   Outline **Our Proposed Solution / Mitigation Plan / Next Steps**.
    *   **In Section 2 ("Request for Client Input/Discussion"), optionally specify:**
        *   Any specific questions for the client or options for them to consider.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_07_managing_expectations_difficult_news.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-DifficultNewsEmail-[ProjectShortName]-[IssueShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-DifficultNewsEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Managing Client Expectations / Difficult News Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_project_management_crisis_communication"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "difficult_news", "client_expectations", "crisis_communication", "client_management", "project_management"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_07_managing_expectations_difficult_news.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_07_managing_expectations_difficult_news.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the sensitive email:

*   **Subject Line (of the prompt):** Specifies the project and a neutral statement of the issue.
*   **Section 1: Situation Context & Email Objectives:**
    *   Collects details about the client, project, the specific difficult news, reasons, **impacts (timeline, budget, scope, quality)**, and critically, **your proposed solution or mitigation plan**. **All placeholders here must be filled by the user.**
*   **Section 2: Request for Client Input/Discussion (Optional):**
    *   Allows for specifying questions or options for the client.
*   **Section 3: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (clear, factual, empathetic, solution-oriented, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional, transparent, and constructive email for managing difficult client communications.