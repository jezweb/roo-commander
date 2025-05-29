# Documentation: Prompt Template `prompt_CM_10_testimonial_referral_request_email.md`

## 1. Purpose

This prompt template is designed to assist in **drafting a polite and professional email to a satisfied client requesting a testimonial and/or referral**. It guides the user to provide details about the client, the successful project or service, and specific preferences for the testimonial (format, platform) or referral (ideal profile). The AI then generates a draft email.

The goal is to leverage positive client relationships to obtain valuable social proof (testimonials) and generate warm leads (referrals) for business development, while making the request easy and comfortable for the client.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/communication/prompt_CM_10_testimonial_referral_request_email.md](prompt_CM_10_testimonial_referral_request_email.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_testimonial_request_clientx.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID for this specific email draft instance, e.g., `PROMPT-Draft-TestimonialReferralEmail-ClientX-20250528150000`.
    *   `title`: Update to reflect the specific request, e.g., `"Draft Testimonial Request Email: Client X"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name or mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line of the prompt with `[Client Name] for [Project/Service]`.
    *   **In Section 1 ("Request Context & Email Objectives"):**
        *   Fill in all bracketed placeholders like `[Client Name / Primary Contact(s)]`, `[Project Name or Service Provided]`, and the **Key Success/Positive Outcome**.
        *   Specify the **Type of Request** (Testimonial, Referral, or both).
        *   If requesting a testimonial, detail the **Preferred Format/Platform** and optional **Key Points to Guide**.
        *   If requesting a referral, describe the **Ideal Referral Profile** and how to make it easy.
        *   Optionally, mention any offer/incentive.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model to generate the email draft.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CM_10_testimonial_referral_request_email.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Draft-TestimonialReferralEmail-[ClientShortName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Draft-TestimonialReferralEmail-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this email drafting request.
    *   *Placeholder in template:* `"Testimonial/Referral Request Email Draft"`
*   **`prompt_type` (String, Fixed):** `"drafting_communication"`
*   **`domain` (String, Fixed):** `"client_communication_relationship_management_marketing"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "drafting", "email_draft", "testimonial_request", "referral_request", "client_advocacy", "marketing", "client_communication"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/communication/prompt_CM_10_testimonial_referral_request_email.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CM_10_testimonial_referral_request_email.md`)

The Markdown body of the prompt instance is structured to gather all necessary information for the AI to draft the request email:

*   **Subject Line (of the prompt):** Specifies the client and project/service for clarity.
*   **Section 1: Request Context & Email Objectives:**
    *   Collects details about the client, the successful project/service, a key positive outcome, the specific type of request (testimonial/referral), and preferences for how the client can fulfill it. **All placeholders here must be filled by the user.**
*   **Section 2: Request for Email Draft:**
    *   This section is pre-filled with instructions for the AI on what the email draft should include (subject line, body) and key characteristics (warm, appreciative, clear, easy for the client, no pressure, etc.). The user does not typically modify this section.

This structured approach ensures that the AI receives clear and comprehensive inputs to generate a professional and effective email for requesting client testimonials or referrals.