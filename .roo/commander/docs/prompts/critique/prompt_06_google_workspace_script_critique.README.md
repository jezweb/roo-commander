# Documentation: Prompt Template `prompt_06_google_workspace_script_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a Google Apps Script or other Google Workspace automation**. It guides the user to provide the script code, its purpose, target applications, triggers, and other relevant details. The critiquing AI is then directed to analyze aspects such as code quality, efficiency, error handling, security, adherence to Apps Script best practices, and user experience (if applicable).

The goal is to receive actionable feedback to improve the script's robustness, performance, security, and maintainability.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_06_google_workspace_script_critique.md](prompt_06_google_workspace_script_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_sheet_automation_script_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-GoogleWorkspaceScript-SheetAutomate-20250526150000`.
    *   `title`: Update to reflect the specific script, e.g., `"Google Apps Script Critique: Sheet Data Processor"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name/Purpose of the Script]`.
    *   In Section 1 ("Script Overview & Purpose"), provide details about the script's goals, target Google Workspace app(s), triggers, and key functionality.
    *   **Crucially, in Section 2 ("Script Details"):**
        *   Paste the **Google Apps Script code** into the designated code block under "The Script Code."
        *   Provide information on `Required Scopes/Permissions`, `External Services Called`, and `User Interface Elements` if applicable.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_06_google_workspace_script_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-GoogleWorkspaceScript-[ScriptNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-GoogleWorkspaceScript-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Google Workspace Script/Automation Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"google_workspace_automation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "google_apps_script", "google_workspace", "automation", "scripting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_06_google_workspace_script_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_06_google_workspace_script_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name/Purpose of the Script]`.
*   **Section 1: Script Overview & Purpose:**
    *   `Primary Goal(s)`: Script's objective.
    *   `Target Google Workspace App(s)`: e.g., Sheets, Docs, Gmail.
    *   `Trigger(s) / Execution Method`: How the script runs.
    *   `Key Functionality`: Main actions performed.
*   **Section 2: Script Details:**
    *   `The Script Code`: **User must paste the Google Apps Script code here.**
    *   `Required Scopes/Permissions` (if known).
    *   `External Services Called` (if any).
    *   `User Interface Elements` (if any).
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-I) like "Code Quality & Readability," "Efficiency & Performance," "Error Handling & Resilience," "Security & Permissions," and "Adherence to Google Apps Script Best Practices & Quotas." The user typically does not modify this section.

This structure ensures the critiquing AI receives the actual script code and its operational context within Google Workspace, enabling a focused and practical review.