# Documentation: Prompt Template `prompt_28_employee_onboarding_process_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an organization's employee onboarding process**. It guides the user to provide details about their current onboarding program, including its goals, target new hire profiles, duration, structure, key activities, and any relevant documentation or materials. The critiquing AI is then directed to analyze aspects such as process clarity, effectiveness in achieving goals, new hire experience, role clarity, content delivery, stakeholder coordination, cultural immersion, and feedback mechanisms.

The goal is to receive actionable feedback to refine the onboarding process, making it a more welcoming, engaging, and effective experience that sets new hires up for success and accelerates their integration and productivity.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_28_employee_onboarding_process_critique.md](prompt_28_employee_onboarding_process_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_tech_team_onboarding_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-EmployeeOnboarding-TechTeam-20250528000000`.
    *   `title`: Update to reflect the specific focus, e.g., `"Employee Onboarding Critique: Technical Team Process"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Focus Area, e.g., Overall Process, First Week Experience, Remote Onboarding]`.
    *   In Section 1 ("Onboarding Process Overview & Context"), provide details about goals, new hire profiles, duration, stakeholders, structure, and challenges.
    *   **Crucially, in Section 2 ("Onboarding Process Details & Materials for Review"):**
        *   Provide a **link to any documented onboarding plans, checklists, or new hire portals**.
        *   Describe **key onboarding activities and content** for each phase.
        *   Optionally, link to or describe examples of materials provided to new hires.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_28_employee_onboarding_process_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-EmployeeOnboarding-[FocusShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-EmployeeOnboarding-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Employee Onboarding Process Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"hr_employee_experience_onboarding"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "employee_onboarding", "hr_processes", "new_hire_experience", "employee_engagement", "talent_management"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_28_employee_onboarding_process_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_28_employee_onboarding_process_critique.md`)

*   **Subject Line:** Pre-filled; update `[Focus Area, e.g., Overall Process, First Week Experience, Remote Onboarding]`.
*   **Section 1: Onboarding Process Overview & Context:**
    *   `Primary Goal(s) of the Onboarding Process`.
    *   `Target New Hire Profile(s)`.
    *   `Duration of the Onboarding Program`.
    *   `Key Stakeholders Involved in Onboarding`.
    *   `Current Onboarding Structure/Phases`.
    *   `Current Perceived Challenges or Issues with Onboarding`.
*   **Section 2: Onboarding Process Details & Materials for Review:**
    *   `Link to Onboarding Plan / Checklist / Documentation`: **Crucial for providing the documented process.**
    *   `Description of Key Onboarding Activities & Content`: Important if full docs are not linkable or to add detail.
    *   `Examples of Materials Provided to New Hires` (Optional).
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Clarity & Structure," "New Hire Experience & Engagement," "Role Clarity," "Content & Information Delivery," "Cultural Immersion," and "Feedback Mechanisms." The user typically does not modify this section.

This structure ensures the AI receives comprehensive information about the current onboarding process to provide a thorough and actionable critique aimed at enhancing the new employee experience.