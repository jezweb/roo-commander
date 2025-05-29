# Documentation: Prompt Template `prompt_25_meeting_effectiveness_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for the effectiveness of a specific recurring or important meeting**. It guides the user to provide details about the meeting's purpose, attendees, frequency, duration, typical agenda, and any known challenges. The critiquing AI is then directed to analyze aspects such as clarity of purpose, agenda effectiveness, time management, attendee engagement, decision-making processes, action item follow-up, and overall value.

The goal is to receive actionable feedback to refine the meeting, making it more productive, focused, valuable for attendees, and successful in achieving its stated objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_25_meeting_effectiveness_critique.md](prompt_25_meeting_effectiveness_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_weekly_project_sync_meeting.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-MeetingEffectiveness-WeeklyProjectSync-20250527210000`.
    *   `title`: Update to reflect the specific meeting, e.g., `"Meeting Effectiveness Critique: Weekly Project Sync"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name/Purpose of Meeting]`.
    *   In Section 1 ("Meeting Overview & Context"), provide details about the meeting's name, purpose, frequency, duration, attendees, format, and any current challenges.
    *   In Section 2 ("Meeting Artifacts & Typical Practices"), describe or paste a typical agenda, expected pre-meeting prep, tools used, and post-meeting follow-up.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_25_meeting_effectiveness_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-MeetingEffectiveness-[MeetingNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-MeetingEffectiveness-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Meeting Effectiveness Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"workplace_management_productivity"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "meeting_effectiveness", "productivity", "time_management", "team_collaboration", "meeting_facilitation"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_25_meeting_effectiveness_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_25_meeting_effectiveness_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name/Purpose of Meeting]`.
*   **Section 1: Meeting Overview & Context:**
    *   `Meeting Name/Series`.
    *   `Stated Purpose/Goal(s) of this Meeting`.
    *   `Frequency & Duration`.
    *   `Typical Attendees & Their Roles`.
    *   `Meeting Format (if consistent)`.
    *   `Current Perceived Challenges or Inefficiencies (if any)`.
*   **Section 2: Meeting Artifacts & Typical Practices:**
    *   `Typical Agenda Structure`: **User describes or pastes a typical agenda.**
    *   `Pre-Meeting Preparation Expected (if any)`.
    *   `Tools Used During Meeting`.
    *   `Post-Meeting Follow-up Process (if any)`.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-K) like "Clarity & Relevance of Purpose," "Agenda Effectiveness," "Time Management & Efficiency," "Facilitation & Participation," "Decision-Making & Action Items," and "Overall Value & Necessity." The user typically does not modify this section.

This structure ensures the AI receives comprehensive information about the meeting's current state and practices to provide a thorough and actionable critique.