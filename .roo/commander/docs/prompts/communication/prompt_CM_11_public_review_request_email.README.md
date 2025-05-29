# Documentation: Prompt Template `prompt_CM_11_public_review_request_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a polite and professional email to a satisfied client requesting they leave a public review** for the agency's services on a specific online platform (e.g., Google Reviews, G2, Clutch). It guides the user to provide details about the client, the successful project or service, the specific review platform, and a direct link for leaving the review. The AI then generates a draft email.

The goal is to leverage positive client experiences to build online reputation and social proof, making the request easy and comfortable for the client to fulfill.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_11_public_review_request_email.md](prompt_CM_11_public_review_request_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_review_request_clientx_g2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-PublicReviewRequestEmail-ClientXG2-20250528160000`.
    *   `title`: Update to reflect the specific request, e.g., `"Draft Public Review Request Email: Client X for G2"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Client Name] for [Project/Service] on [Platform]`.
    *   **In Section 1 ("Request Context & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name / Primary Contact(s)]`, `[Project Name or Service Provided]`, the **Key Success/Positive Outcome**, the **Specific Review Platform**, and crucially, the **Direct Link to Your Profile/Page on the Review Platform**.
        *   Explain `[Why Their Review is Important to You]`.
        *   Optionally, provide `[Any Specific Instructions for the Review]` but use this ethically and sparingly.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_11_public_review_request_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-PublicReviewRequestEmail-[ClientShortName]-[PlatformShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-PublicReviewRequestEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Public Review Request Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_marketing_reputation"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "review_request", "online_reviews", "reputation_management", "client_advocacy", "marketing"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_11_public_review_request_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_11_public_review_request_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the review request email:

*   **Subject Line (of the prompt):** Specifies the client, project/service, and platform for clarity.
*   **Section 1: Request Context & Email Objectives:**
    *   Collects details about the client, the successful project/service, a key positive outcome to remind them of value, the **specific review platform and a direct link to it**. **All placeholders here must be filled by the user.**
*   **Section 2: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (warm, appreciative, clear, easy for the client, no pressure, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective email for requesting public client reviews.