# Documentation: Prompt Template `prompt_CM_06_addressing_scope_creep_change_request.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a professional email to a client to address scope creep or a formal change request** that falls outside the initially agreed-upon project scope. It guides the user to provide details about the client, project, the specific out-of-scope request, reference to the original scope, potential impacts (timeline, budget, resources), and proposed options for moving forward. The AI then generates a structured draft email.

The goal is to facilitate a clear, professional, and constructive conversation with the client about scope changes, helping to manage expectations, protect project boundaries, and maintain a positive working relationship while addressing new requirements.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_06_addressing_scope_creep_change_request.md](prompt_CM_06_addressing_scope_creep_change_request.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_scope_change_email_project_alpha_feature_y.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-ScopeChangeEmail-AlphaFeatureY-20250528110000`.
    *   `title`: Update to reflect the specific situation, e.g., `"Draft Email: Addressing New Feature Y Request for Project Alpha"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Project Name] - Regarding [Specific Request/Feature]`.
    *   **In Section 1 ("Situation Context & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name / Primary Contact(s)]`, `[Project Name]`, `[Specific Out-of-Scope Request/Feature]`, `[Reference to Original Scope]`, and detail the potential **Timeline, Budget/Cost, and Resource Impacts**.
    *   **In Section 2 ("Proposed Options / Path Forward"):**
        *   Outline 1-3 constructive options for handling the request, following the example format. Indicate your preferred option if applicable.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_06_addressing_scope_creep_change_request.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-ScopeChangeEmail-[ProjectShortName]-[FeatureShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-ScopeChangeEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Addressing Scope Creep / Change Request Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_project_management_scope_control"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "scope_creep", "change_request", "client_communication", "project_management", "contract_management"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_06_addressing_scope_creep_change_request.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_06_addressing_scope_creep_change_request.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the email:

*   **Subject Line (of the prompt):** Specifies the project and the out-of-scope item for clarity.
*   **Section 1: Situation Context & Email Objectives:**
    *   Collects details about the client, project, the specific request, reference to original scope, and critically, the **potential impacts** on timeline, budget, and resources. **All placeholders here must be filled by the user.**
*   **Section 2: Proposed Options / Path Forward:**
    *   User outlines constructive ways to handle the request. **This is key for a solution-oriented email.**
*   **Section 3: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (professional, firm but collaborative, solution-oriented, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective email for managing scope changes with clients.