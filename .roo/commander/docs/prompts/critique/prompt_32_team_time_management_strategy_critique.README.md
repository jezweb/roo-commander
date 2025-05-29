# Documentation: Prompt Template `prompt_32_team_time_management_strategy_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a team's overall time management and productivity strategy or specific practices**. It guides the user to provide details about their team, its goals, work types, current time management philosophies, tools used, and any perceived challenges related to productivity, focus, or workload management. The critiquing AI is then directed to analyze aspects such as prioritization methods, meeting culture, interruption management, support for deep work, planning processes, and communication habits.

The goal is to receive actionable feedback to refine the team's approach, helping them work smarter, reduce stress, improve focus, and consistently achieve objectives while promoting well-being.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_32_team_time_management_strategy_critique.md](prompt_32_team_time_management_strategy_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_dev_team_productivity_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-TeamTimeMgmt-DevTeamFocus-20250528040000`.
    *   `title`: Update to reflect the specific team/focus, e.g., `"Team Productivity Critique: Dev Team Focus Strategies"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Team Name/Focus Area]`.
    *   In Section 1 ("Team & Productivity Overview & Context"), provide details about the team, its goals, work types, current strategies, tools, challenges, and culture around work hours.
    *   **Crucially, in Section 2 ("Current Practices & Behaviors for Review"):**
        *   Describe current **prioritization methods**.
        *   Describe the **meeting culture**.
        *   Explain how **interruptions and unplanned work** are handled.
        *   Detail approaches to **focus and deep work**.
        *   Outline **planning and review cadences**.
        *   Describe **communication norms** impacting time.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_32_team_time_management_strategy_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-TeamTimeMgmt-[TeamNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-TeamTimeMgmt-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Team Time Management & Productivity Strategy Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"workplace_productivity_time_management_team_effectiveness"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "time_management", "team_productivity", "workflow_efficiency", "focus_management", "work_habits"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_32_team_time_management_strategy_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_32_team_time_management_strategy_critique.md`)

*   **Subject Line:** Pre-filled; update `[Team Name/Focus Area]`.
*   **Section 1: Team & Productivity Overview & Context:**
    *   `Team Name/Description`.
    *   `Primary Goals/Responsibilities of the Team`.
    *   `Typical Work Types & Cadence`.
    *   `Current Time Management/Productivity Philosophy or Stated Strategy (if any)`.
    *   `Tools Used for Time Tracking, Planning, or Focus (if any)`.
    *   `Current Perceived Challenges or Issues`.
    *   `Team Culture Around Work Hours & Breaks`.
*   **Section 2: Current Practices & Behaviors for Review:**
    *   `Prioritization Methods`: **Crucial for understanding decision-making.**
    *   `Meeting Culture & Management`: **Key for identifying time sinks.**
    *   `Handling of Interruptions & Unplanned Work`.
    *   `Focus & Deep Work` practices.
    *   `Planning & Review Cadences`.
    *   `Communication Norms Impacting Time`.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Effectiveness of Prioritization," "Impact of Meeting Culture," "Management of Interruptions," "Support for Deep Work," "Workload Balance," and "Alignment with Team Goals." The user typically does not modify this section.

This structure ensures the AI receives a holistic view of the team's current time management and productivity landscape to provide a thorough and actionable critique.