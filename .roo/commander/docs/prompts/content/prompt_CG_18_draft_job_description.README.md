# Documentation: Prompt Template `prompt_CG_18_draft_job_description.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **first draft of a job description** for a specific role. It guides the user to provide essential details such as the job title, department, reporting structure, primary purpose of the role, key responsibilities (or ask the AI to generate them), required skills and qualifications, information about company culture, and application instructions. The AI is tasked with structuring this information into a clear, comprehensive, and engaging job description.

This template helps accelerate the recruitment process by providing a solid starting point for a job posting, which can then be reviewed and refined by HR professionals and hiring managers.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_18_draft_job_description.md](prompt_CG_18_draft_job_description.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_senior_designer_jd_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftJobDescription-SrDesigner-20250528230000`.
    *   `title`: Update to reflect the specific role, e.g., `"Draft Job Description: Senior Graphic Designer"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Job Title]`.
    *   **In Section 1 ("Job Role Overview & Specifications"):**
        *   Provide the `Job Title`, `Department/Team`, `Reporting To`, `Location`, `Employment Type` (optional), `Primary Goal/Purpose of this Role`, and a brief `Ideal Candidate Profile`.
    *   **In Section 2 ("Key Responsibilities & Duties"):**
        *   Either ask the AI to generate a list of 5-10 responsibilities OR provide your own list for the AI to refine/expand.
    *   **In Section 3 ("Required Skills & Qualifications"):**
        *   Specify `Education/Certifications`, `Years of Experience`, and either list or ask the AI to generate `Technical Skills` and `Soft Skills`. Include any `"Nice-to-Haves"`.
    *   **In Section 4 ("Company Culture & Values"):** Provide bullet points or a short paragraph describing company culture.
    *   In Section 5 ("Benefits & Perks"), list key benefits or ask for a generic placeholder.
    *   In Section 6 ("Call to Action & Application Instructions"), provide application details and instruct AI on the EEO statement.
    *   In Section 7 ("Additional Instructions"), guide the AI on tone and points to emphasize/avoid.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft job description.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_18_draft_job_description.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftJobDescription-[JobTitleShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftJobDescription-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Job Description Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"hr_recruitment_job_postings"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "job_description", "recruitment", "hr_documents", "job_posting", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_18_draft_job_description.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_18_draft_job_description.md`)

*   **Subject Line:** Pre-filled; update `[Job Title]`.
*   **Section 1: Job Role Overview & Specifications:** User provides core details about the role.
*   **Section 2: Key Responsibilities & Duties:** User either lists responsibilities or asks AI to generate them based on the role.
*   **Section 3: Required Skills & Qualifications:** User details education, experience, technical skills, and soft skills, or asks AI for suggestions.
*   **Section 4: Company Culture & Values:** User provides input on company culture.
*   **Section 5: Benefits & Perks:** User lists benefits or requests a placeholder.
*   **Section 6: Call to Action & Application Instructions:** User provides application details.
*   **Section 7: Additional Instructions (Optional):** User guides tone and emphasis.

This comprehensive structure ensures the AI has all necessary information to generate a well-rounded and appealing job description draft.