# Documentation: Prompt Template `prompt_30_employee_feedback_mechanism_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an organization's employee feedback mechanism** (e.g., surveys, suggestion boxes, "Ask Me Anything" sessions, exit interviews). It guides the user to provide details about the specific mechanism, its goals, target employees, frequency, method of collection, and processes for analysis and follow-up. The critiquing AI is then directed to analyze aspects such as clarity of purpose, design quality (e.g., survey questions), accessibility, trust/anonymity, communication, actionability of feedback, and overall impact on employee engagement and organizational culture.

The goal is to receive actionable feedback to refine the chosen feedback mechanism, making it a more trusted, valuable, and effective tool for gathering employee insights and driving positive organizational change.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_30_employee_feedback_mechanism_critique.md](prompt_30_employee_feedback_mechanism_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_annual_engagement_survey_v2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-EmployeeFeedbackMech-AnnualSurvey-20250528020000`.
    *   `title`: Update to reflect the specific mechanism, e.g., `"Employee Feedback Critique: Annual Engagement Survey Design"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name/Type of Mechanism]`.
    *   In Section 1 ("Feedback Mechanism Overview & Context"), provide details about the mechanism's name, goals, target employees, frequency, collection method, anonymity, and challenges.
    *   **Crucially, in Section 2 ("Mechanism Details for Review"):**
        *   Provide a **link to survey questions/forms/platforms** if applicable.
        *   Describe how the mechanism is **communicated**, how feedback is **reviewed/analyzed**, and how **outcomes are communicated/acted upon**.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_30_employee_feedback_mechanism_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-EmployeeFeedbackMech-[MechanismNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-EmployeeFeedbackMech-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Employee Feedback Mechanism Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"hr_employee_engagement_feedback_systems"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "employee_feedback", "employee_surveys", "suggestion_box", "hr_processes", "employee_engagement", "organizational_culture"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_30_employee_feedback_mechanism_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_30_employee_feedback_mechanism_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name/Type of Mechanism]`.
*   **Section 1: Feedback Mechanism Overview & Context:**
    *   `Name/Type of Feedback Mechanism`.
    *   `Primary Goal(s) of this Mechanism`.
    *   `Target Employee Group(s)`.
    *   `Frequency or Cadence`.
    *   `Method of Feedback Collection`.
    *   `Anonymity/Confidentiality`.
    *   `Current Perceived Challenges or Issues`.
*   **Section 2: Mechanism Details for Review:**
    *   `Link to Survey Questions / Form / Platform (if applicable)`: **Crucial for survey/form critiques.**
    *   `Communication About the Mechanism`.
    *   `Process for Reviewing & Analyzing Feedback`.
    *   `Process for Acting On & Communicating Outcomes of Feedback`.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-K) like "Clarity of Purpose," "Design & Question Quality," "Trust & Anonymity," "Actionability & Follow-Through," and "Communication of Results." The user typically does not modify this section.

This structure ensures the AI receives comprehensive information about the specific employee feedback mechanism and its operational context to provide a thorough and actionable critique.