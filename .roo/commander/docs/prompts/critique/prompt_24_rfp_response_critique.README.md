# Documentation: Prompt Template `prompt_24_rfp_response_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an agency's draft response to a Request for Proposal (RFP)**. It guides the user to provide both the original RFP document and the agency's draft response, along with context about the client, project goals, and key differentiators. The critiquing AI is then directed to analyze aspects such as compliance with RFP requirements, clarity of the proposed solution, demonstration of understanding client needs, persuasiveness, professionalism, pricing clarity, and overall competitiveness.

The goal is to receive actionable feedback to refine the RFP response, making it more compelling, fully compliant, and maximizing the chances of being shortlisted or winning the contract.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_24_rfp_response_critique.md](prompt_24_rfp_response_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_clientx_rfp_response_draft_v2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-RFPResponse-ClientXGov-20250527200000`.
    *   `title`: Update to reflect the specific RFP response, e.g., `"RFP Response Critique: Client X Government Services"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[RFP Name / Client Name]`.
    *   In Section 1 ("RFP Response Overview & Context"), provide details about the RFP title, issuing organization, our agency's goals, client objectives, our proposed solution, differentiators, competitors, and submission deadline.
    *   **Crucially, in Section 2 ("The RFP & Our Response Documents for Review"):**
        *   Provide a **direct link to the original RFP document** issued by the client.
        *   Provide a **direct link to your agency's draft RFP response document**.
        *   Alternatively, or for specific focus, paste key sections of your response.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_24_rfp_response_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-RFPResponse-[ClientNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-RFPResponse-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Request for Proposal (RFP) Response Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"sales_proposals_rfp_responses"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "rfp_response", "proposal_writing", "sales_document", "bid_management", "government_contracts"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_24_rfp_response_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_24_rfp_response_critique.md`)

*   **Subject Line:** Pre-filled; update `[RFP Name / Client Name]`.
*   **Section 1: RFP Response Overview & Context:**
    *   `RFP Title/Reference Number`.
    *   `Issuing Organization (Client)`.
    *   `Our Agency's Primary Goal for this RFP Response`.
    *   `Key Objectives/Needs of the Client (as understood from the RFP)`.
    *   `Our Proposed Solution (High-Level Summary)`.
    *   `Key Differentiators/Strengths We Aim to Highlight`.
    *   `Known Competitors (if any)`.
    *   `Submission Deadline`.
*   **Section 2: The RFP & Our Response Documents for Review:**
    *   `Link to the Original RFP Document`: **Essential for the AI to understand requirements.**
    *   `Link to Our Draft RFP Response Document`: **Essential for providing the content to be critiqued.**
    *   `Paste Key Sections of Our Response` (Alternative).
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-K) like "Compliance & Responsiveness," "Understanding of Client Needs," "Clarity & Strength of Proposed Solution," "Differentiation & Value Proposition," "Pricing & Commercials," and "Overall Impression." The user typically does not modify this section.

This structure ensures the AI receives both the client's requirements (the RFP) and the agency's proposed response, enabling a thorough comparative critique.