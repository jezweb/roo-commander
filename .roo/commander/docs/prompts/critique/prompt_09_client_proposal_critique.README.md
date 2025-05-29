# Documentation: Prompt Template `prompt_09_client_proposal_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a client project proposal**. It guides the user to provide the proposal document (or key sections) and relevant context about the client and project. The critiquing AI is then directed to analyze aspects such as clarity of client needs, value proposition, scope definition, timeline, pricing, persuasiveness, professionalism, risk assessment, and call to action.

The goal is to receive actionable feedback to create a more compelling proposal that maximizes the chances of winning the project while setting clear expectations for successful delivery.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_09_client_proposal_critique.md](prompt_09_client_proposal_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_acme_corp_proposal_v2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-ClientProposal-AcmeCorp-20250526180000`.
    *   `title`: Update to reflect the specific proposal, e.g., `"Client Proposal Critique: Acme Corp Website Redesign"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Project Name / Client Name]`.
    *   In Section 1 ("Proposal Overview & Context"), provide details about the client, their needs, your proposed solution, and the objectives of the proposal.
    *   **Crucially, in Section 2 ("Proposal Document / Key Sections"):**
        *   Provide a **direct link to the proposal document** (e.g., Google Doc, PDF).
        *   Alternatively, or for specific focus, paste the text of key sections (Executive Summary, Scope, Pricing, etc.).
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_09_client_proposal_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-ClientProposal-[ClientNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-ClientProposal-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Client Project Proposal Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"client_communication_sales"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "client_proposal", "sales_document", "project_management", "business_communication"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_09_client_proposal_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_09_client_proposal_critique.md`)

*   **Subject Line:** Pre-filled; update `[Project Name / Client Name]`.
*   **Section 1: Proposal Overview & Context:**
    *   `Client Name & Industry`.
    *   `Project Goal(s) from Client's Perspective`.
    *   `Our Proposed Solution (Brief Summary)`.
    *   `Key Objectives of this Proposal`.
    *   `Relationship with Client`.
*   **Section 2: Proposal Document / Key Sections:**
    *   `Link to the Proposal Document`: **Preferred method for providing the proposal.**
    *   `Paste Key Sections` (Alternative): For focused critique or if linking is not possible.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-J) like "Clarity & Understanding of Client Needs," "Value Proposition & Solution Fit," "Scope of Work & Deliverables," "Pricing, Budget & Investment," "Persuasiveness, Professionalism & Tone," and "Call to Action & Next Steps." The user typically does not modify this section.

This structure ensures the AI receives the full context of the client situation and the proposal content to provide a well-rounded and actionable critique.