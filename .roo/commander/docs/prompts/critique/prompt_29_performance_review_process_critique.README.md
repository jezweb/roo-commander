# Documentation: Prompt Template `prompt_29_performance_review_process_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an organization's performance review process or specific review templates/forms**. It guides the user to provide details about their current performance management system, including its goals, target employee groups, frequency, key components, and any relevant documentation like policies or templates. The critiquing AI is then directed to analyze aspects such as clarity of criteria, fairness, developmental focus, goal alignment, employee participation, manager preparedness, efficiency, and overall impact on culture.

The goal is to receive actionable feedback to refine the performance review system, making it a more valuable tool for employee growth, fair assessment, motivation, and organizational alignment.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_29_performance_review_process_critique.md](prompt_29_performance_review_process_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_annual_review_template_v3.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-PerfReviewProcess-AnnualRevV3-20250528010000`.
    *   `title`: Update to reflect the specific focus, e.g., `"Performance Review Critique: Annual Manager Assessment Form"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Focus: e.g., Overall Process, Specific Template, Feedback Quality]`.
    *   In Section 1 ("Performance Review Overview & Context"), provide details about goals, target employees, frequency, components, and challenges.
    *   **Crucially, in Section 2 ("Process/Template Details for Review"):**
        *   Provide a **link to any performance review policy or process documentation**.
        *   Provide a **link to or paste key sections/questions from the performance review template(s)/form(s)** being critiqued.
        *   Describe feedback mechanisms and any training provided.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_29_performance_review_process_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-PerfReviewProcess-[FocusShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-PerfReviewProcess-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Performance Review Process/Template Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"hr_performance_management_feedback"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "performance_review", "performance_management", "hr_processes", "employee_feedback", "talent_development"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_29_performance_review_process_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_29_performance_review_process_critique.md`)

*   **Subject Line:** Pre-filled; update `[Focus: e.g., Overall Process, Specific Template, Feedback Quality]`.
*   **Section 1: Performance Review Overview & Context:**
    *   `Primary Goal(s) of the Performance Review System`.
    *   `Target Employee Group(s)`.
    *   `Frequency of Reviews`.
    *   `Key Components of the Review Cycle`.
    *   `Link to Company Values or Competency Framework (if applicable)`.
    *   `Current Perceived Challenges or Issues`.
*   **Section 2: Process/Template Details for Review:**
    *   `Link to Performance Review Policy/Process Documentation`.
    *   `Link to or Paste Performance Review Template(s) / Form(s)`: **Crucial for providing the specific forms/questions to be critiqued.**
    *   `Description of Feedback Mechanisms`.
    *   `Training or Guidance Provided to Managers/Employees (if any)`.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Clarity & Relevance of Review Criteria," "Fairness & Objectivity," "Developmental Focus," "Goal Alignment," "Efficiency," and "Impact on Culture." The user typically does not modify this section.

This structure ensures the AI receives comprehensive information about the current performance review system to provide a thorough and actionable critique aimed at improving its effectiveness and fairness.