# Documentation: Prompt Template `prompt_CM_13_request_client_digital_assets_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a professional email to a client requesting specific digital assets** required for a project. It guides the user to provide details about the client, project, a clear list of needed assets (including preferred formats and requirements), the reason they are needed, the deadline for submission, and the preferred sharing method. The AI then generates a structured draft email.

The goal is to facilitate clear, organized, and timely collection of necessary client-provided materials, minimizing project delays and ensuring the agency has what it needs to proceed effectively.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_13_request_client_digital_assets_email.md](prompt_CM_13_request_client_digital_assets_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_asset_request_email_project_alpha_phase1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-RequestClientAssetsEmail-AlphaPhase1-20250528180000`.
    *   `title`: Update to reflect the specific request, e.g., `"Draft Asset Request Email: Project Alpha Phase 1"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Project Name] from [Client Name]`.
    *   **In Section 1 ("Asset Request Context & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name / Primary Contact(s)]`, `[Project Name]`, `[Reason Assets Are Needed Now]`, `[Deadline for Receiving Assets]`, `[Impact of Not Receiving Assets by Deadline]`, and `[Preferred Method/Location for Client to Upload/Share Assets]`.
    *   **Crucially, in Section 2 ("List of Required Digital Assets"):**
        *   Clearly list each asset needed, specifying preferred file formats and any specific requirements for each, following the example format. This detailed list is vital.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_13_request_client_digital_assets_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-RequestClientAssetsEmail-[ProjectShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-RequestClientAssetsEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Requesting Client Digital Assets Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_project_management_asset_collection"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "client_assets", "digital_assets", "project_requirements", "client_communication", "project_management"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_13_request_client_digital_assets_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_13_request_client_digital_assets_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the asset request email:

*   **Subject Line (of the prompt):** Specifies the project and client for clarity.
*   **Section 1: Asset Request Context & Email Objectives:**
    *   Collects details about the client, project, why assets are needed, the deadline, impact of delays, and preferred sharing method. **All placeholders here must be filled by the user.**
*   **Section 2: List of Required Digital Assets:**
    *   User provides a clear, itemized list of assets, including specifications for format and requirements. **This is the core of the request.**
*   **Section 3: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (clear, organized, professional, action-oriented, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective email for requesting necessary digital assets from clients.