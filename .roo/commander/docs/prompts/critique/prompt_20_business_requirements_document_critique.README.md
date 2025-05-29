# Documentation: Prompt Template `prompt_20_business_requirements_document_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a Business Requirements Document (BRD)**. It guides the user to provide the BRD itself (or key sections), along with context about the project/system, its goals, stakeholders, and intended audience. The critiquing AI is then directed to analyze aspects such as clarity, completeness, testability, consistency, scope definition, and overall fitness for purpose of the requirements.

The goal is to receive actionable feedback to refine the BRD, ensuring it serves as a clear, unambiguous, and comprehensive foundation for successful project design, development, and execution.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_20_business_requirements_document_critique.md](prompt_20_business_requirements_document_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_crm_brd_v1.2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-BRD-CRMv1-20250527160000`.
    *   `title`: Update to reflect the specific BRD, e.g., `"BRD Critique: New CRM Implementation Requirements"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Project/System Name]`.
    *   In Section 1 ("BRD Overview & Context"), provide details about the project/system, its goals, stakeholders, BRD audience, and relationship to other documents.
    *   **Crucially, in Section 2 ("The Business Requirements Document (BRD) for Review"):**
        *   Provide a **direct link to the full BRD document** (preferred).
        *   Alternatively, or for specific focus, **paste key sections** (especially the requirements list, scope, goals) into the designated area.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_20_business_requirements_document_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-BRD-[ProjectNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-BRD-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Business Requirements Document (BRD) Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"requirements_analysis_documentation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "brd", "business_requirements", "requirements_document", "product_management", "project_management"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_20_business_requirements_document_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_20_business_requirements_document_critique.md`)

*   **Subject Line:** Pre-filled; update `[Project/System Name]`.
*   **Section 1: BRD Overview & Context:**
    *   `Project/System Name`.
    *   `Overall Goal of the Project/System`.
    *   `Key Business Stakeholders`.
    *   `Intended Audience for the BRD`.
    *   `Relationship to Other Documents (if any)`.
*   **Section 2: The Business Requirements Document (BRD) for Review:**
    *   `Link to the BRD` (Preferred).
    *   `Paste Key Sections` (Alternative): **Crucial for providing the requirements and scope to be critiqued.**
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Clarity & Unambiguity of Requirements," "Completeness & Coverage," "Testability & Verifiability," "Consistency," "Scope Definition," and "Focus on 'What' vs. 'How'." The user typically does not modify this section.

This structure ensures the AI receives the BRD content and sufficient project context to provide a thorough and insightful critique from a business analysis perspective.