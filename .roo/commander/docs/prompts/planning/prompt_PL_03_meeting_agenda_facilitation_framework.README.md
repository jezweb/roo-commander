# Documentation: Prompt Template `prompt_PL_03_meeting_agenda_facilitation_framework.md`

## 1. Purpose

This prompt template is designed to generate a **detailed meeting agenda and a supporting facilitation framework** for a specific meeting. It guides the user to provide information about the meeting's purpose, desired outcomes, key topics, attendees, duration, and any required preparation. The AI is then tasked with creating a structured, timed agenda with clear objectives for each item, along with facilitation notes, suggested questions, potential activities, and considerations for running an effective and productive meeting.

The goal is to provide a comprehensive plan that helps organizers prepare thoroughly, facilitate effectively, and ensure the meeting achieves its intended purpose efficiently.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/planning/prompt_PL_03_meeting_agenda_facilitation_framework.md](prompt_PL_03_meeting_agenda_facilitation_framework.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `agenda_request_project_alpha_kickoff.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Plan-MeetingAgenda-AlphaKickoff-20250528080000`.
    *   `title`: Update to reflect the specific meeting, e.g., `"Meeting Agenda Framework: Project Alpha Kickoff"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Purpose/Name of Meeting]`.
    *   In Section 1 ("Meeting Overview & Objectives"), provide comprehensive details about the meeting's title/purpose, desired outcomes, key topics, attendees, duration, format, and any constraints.
    *   In Section 2 ("Preparatory Information"), list any pre-reading materials, decisions to be made, or specific information to be shared.
    *   The more specific the input, especially regarding desired outcomes and key topics, the more tailored the generated agenda and facilitation notes will be.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for agenda and facilitation framework generation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PL_03_meeting_agenda_facilitation_framework.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Plan-MeetingAgenda-[MeetingPurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Plan-MeetingAgenda-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this agenda generation request.
    *   *Placeholder in template:* `"Meeting Agenda & Facilitation Framework Generation Request"`
*   **`prompt_type` (String, Fixed):** `"planning_and_outlining"`
*   **`domain` (String, Fixed):** `"meetings_facilitation_planning"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "planning", "meeting_agenda", "facilitation_guide", "meeting_planning", "productivity", "collaboration"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/planning/prompt_PL_03_meeting_agenda_facilitation_framework.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PL_03_meeting_agenda_facilitation_framework.md`)

*   **Subject Line:** Pre-filled; update `[Purpose/Name of Meeting]`.
*   **Section 1: Meeting Overview & Objectives:**
    *   `Meeting Title/Purpose`.
    *   `Desired Outcome(s)`.
    *   `Key Topics to Cover`.
    *   `Attendees & Their Roles (if known)`.
    *   `Meeting Duration`.
    *   `Meeting Format`.
    *   `Any Known Constraints or Sensitivities`.
*   **Section 2: Preparatory Information:**
    *   `Pre-Reading Materials or Required Preparation (if any)`.
    *   `Decisions to be Made (if any)`.
    *   `Information to be Shared (if any specific items)`.
*   **Section 3: Request for Meeting Agenda & Facilitation Framework:**
    *   This section instructs the AI on the desired structure of the output, detailing categories (A-H) for "Meeting Title & Logistics," "Objectives," "Timed Agenda" (with purpose, lead, time for each item), "Facilitation Notes/Prompts," "Materials & Tools Needed," "Roles," and "Post-Meeting Actions." The user typically does not modify these instructions.

This structure ensures the AI receives comprehensive background information and clear directives to generate a detailed and practical meeting agenda and facilitation guide.