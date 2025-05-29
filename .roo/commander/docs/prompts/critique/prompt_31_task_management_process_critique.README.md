# Documentation: Prompt Template `prompt_31_task_management_process_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an organization's or team's task management system or process**. It guides the user to provide details about their current approach, including goals, users, types of tasks, tools used, workflow steps, and any known challenges. The critiquing AI is then directed to analyze aspects such as process clarity, task definition, ownership, prioritization, status tracking, efficiency, tool utilization, collaboration, and overall effectiveness.

The goal is to receive actionable feedback to refine the task management system/process, making it more efficient, transparent, and supportive of the team's ability to deliver quality work on time and manage workloads effectively.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_31_task_management_process_critique.md](prompt_31_task_management_process_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_marketing_asana_usage_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-TaskManagement-MktgAsana-20250528030000`.
    *   `title`: Update to reflect the specific focus, e.g., `"Task Management Critique: Marketing Team Asana Process"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Focus: e.g., Team X's Process, Specific Tool Usage like Asana/Jira, Cross-Team Handoffs]`.
    *   In Section 1 ("Task Management Overview & Context"), provide details about goals, users, task types, tools, workflow, and challenges.
    *   **Crucially, in Section 2 ("System/Process Details for Review"):**
        *   Provide a **link to any process documentation or tool configurations/templates**.
        *   Describe **key process steps and conventions** in detail, especially around task creation, assignment, prioritization, status tracking, and communication.
        *   Optionally, provide **examples of typical tasks**.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_31_task_management_process_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-TaskManagement-[FocusShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-TaskManagement-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Task Management System/Process Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"workplace_productivity_task_management"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "task_management", "project_management_tools", "productivity_systems", "workflow_optimization", "team_collaboration"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_31_task_management_process_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_31_task_management_process_critique.md`)

*   **Subject Line:** Pre-filled; update `[Focus: e.g., Team X's Process, Specific Tool Usage like Asana/Jira, Cross-Team Handoffs]`.
*   **Section 1: Task Management Overview & Context:**
    *   `Primary Goal(s) of this Task Management System/Process`.
    *   `Team(s) / Individual(s) Using this System/Process`.
    *   `Types of Tasks Managed`.
    *   `Key Tools Used`.
    *   `Current Workflow/Process Steps (High-Level)`.
    *   `Current Perceived Challenges or Issues`.
*   **Section 2: System/Process Details for Review:**
    *   `Link to Process Documentation or Tool Configuration`: **Important for providing documented standards.**
    *   `Description of Key Process Steps & Conventions`: **Crucial for understanding actual usage and conventions.**
    *   `Examples of Typical Tasks` (Optional).
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-M) like "Clarity & Consistency," "Task Definition," "Ownership & Accountability," "Prioritization," "Efficiency & Flow," "Tool Utilization," and "Collaboration." The user typically does not modify this section.

This structure ensures the AI receives comprehensive information about the current task management practices to provide a thorough and actionable critique aimed at improving team productivity and workflow.