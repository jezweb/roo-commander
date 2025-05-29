# Documentation: Prompt Template `prompt_CG_07_draft_case_study_framework.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **draft framework and key narrative points for a case study or success story**. It guides the user to provide essential information about the client/project, the challenge faced, the solution provided by their agency/company, and the quantifiable and qualitative results achieved. The AI is tasked with structuring this information into a compelling narrative, typically following a standard case study format (Challenge, Solution, Results), and suggesting copy for key sections.

This template helps accelerate the creation of persuasive marketing collateral that showcases expertise and demonstrates value to potential clients.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_07_draft_case_study_framework.md](prompt_CG_07_draft_case_study_framework.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_client_x_casestudy_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftCaseStudyFrame-ClientX-20250528120000`.
    *   `title`: Update to reflect the specific case study, e.g., `"Draft Case Study Framework: Client X E-commerce Growth"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Client/Project Name]`.
    *   **In Section 1 ("Case Study Overview & Context"):**
        *   Provide the `Client/Project Name`, `Client Industry`, `Primary Goal of this Case Study`, `Target Audience`, `Key Product/Service Provided by Us`, `Overall Desired Tone & Style`, and `Core Message/Key Takeaway`.
    *   **Crucially, in Section 2 ("Key Information for the Case Study Narrative"):**
        *   Detail `The Challenge / Problem Faced by the Client`.
        *   Describe `Our Proposed Solution / The Approach Taken`.
        *   Briefly mention `The Implementation Process` if relevant.
        *   Provide specific **`Quantifiable Results`** and **`Qualitative Results/Benefits`**. This is vital.
        *   Include a `Client Testimonial / Quote` (actual or placeholder).
    *   In Section 3 ("Desired Case Study Structure"), confirm or modify the standard sections (Title, Summary, Challenge, Solution, Results, Conclusion, CTA).
    *   In Section 4 ("Additional Instructions"), provide any other relevant guidance.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft framework and narrative points.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_07_draft_case_study_framework.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftCaseStudyFrame-[ClientProjectShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftCaseStudyFrame-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Case Study / Success Story Draft Framework Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_case_studies_storytelling"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "case_study", "success_story", "marketing_collateral", "storytelling", "drafting_framework"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_07_draft_case_study_framework.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_07_draft_case_study_framework.md`)

*   **Subject Line:** Pre-filled; update `[Client/Project Name]`.
*   **Section 1: Case Study Overview & Context:**
    *   User provides high-level details: client/project, industry, case study goal, audience, service provided, tone, and core message.
*   **Section 2: Key Information for the Case Study Narrative:**
    *   User details the Challenge, Solution, Implementation (briefly), **Results (quantifiable and qualitative - this is critical)**, and a client testimonial.
*   **Section 3: Desired Case Study Structure:**
    *   User confirms or modifies the standard case study sections for the AI to populate.
*   **Section 4: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid and conceptual length.

This detailed structure provides the AI with all the necessary components and context to generate a well-structured and compelling draft framework for a case study.