# Documentation: Prompt Template `prompt_26_internal_communication_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an organization's internal communication strategy or specific communication channels**. It guides the user to provide details about their internal communication goals, target audiences (employees), types of information shared, current channels used, desired company culture, and any known challenges. The critiquing AI is then directed to analyze aspects such as strategic alignment, channel effectiveness, message clarity, information flow, employee engagement, consistency, and impact on company culture.

The goal is to receive actionable feedback to refine internal communication practices, making them more effective in fostering an informed, engaged, and aligned workforce, and supporting overall business objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_26_internal_communication_critique.md](prompt_26_internal_communication_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_slack_usage_policy.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-InternalComms-SlackPolicy-20250527220000`.
    *   `title`: Update to reflect the specific focus, e.g., `"Internal Communication Critique: Slack Usage Policy & Effectiveness"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Focus: e.g., Overall Strategy, Specific Channel like Slack, Email Newsletter Effectiveness]`.
    *   In Section 1 ("Internal Communication Overview & Context"), provide details about goals, audiences, information types, current channels, desired culture, and challenges.
    *   In Section 2 ("Strategy/Channel Details for Review"):
        *   Provide a **link to any documented internal communication strategy** if available.
        *   If focusing on specific channels, **describe their current usage** in detail.
        *   Optionally, provide **examples of recent communications**.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_26_internal_communication_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-InternalComms-[FocusShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-InternalComms-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Internal Communication Strategy/Channel Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"workplace_management_communication"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "internal_communications", "employee_engagement", "communication_channels", "company_culture", "information_flow"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_26_internal_communication_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_26_internal_communication_critique.md`)

*   **Subject Line:** Pre-filled; update `[Focus: e.g., Overall Strategy, Specific Channel like Slack, Email Newsletter Effectiveness]`.
*   **Section 1: Internal Communication Overview & Context:**
    *   `Primary Goal(s) of Internal Communication`.
    *   `Target Internal Audience(s)`.
    *   `Key Types of Information Typically Communicated`.
    *   `Current Communication Channels Used`.
    *   `Desired Company Culture & Communication Style`.
    *   `Current Perceived Challenges or Issues`.
*   **Section 2: Strategy/Channel Details for Review:**
    *   `Link to Internal Communication Strategy Document` (if exists).
    *   `Description of Specific Channel(s) in Focus`: **Crucial if not an overall strategy review.**
    *   `Examples of Recent Communications` (Optional).
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Strategic Alignment," "Channel Effectiveness," "Message Clarity," "Information Flow," "Engagement & Two-Way Communication," and "Impact on Culture." The user typically does not modify this section.

This structure ensures the AI receives comprehensive information about the current state of internal communications to provide a thorough and actionable critique.