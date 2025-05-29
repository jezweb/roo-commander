# Documentation: Prompt Template `prompt_ID_08_event_workshop_theme_activity_ideation.md`

## 1. Purpose

This prompt template is designed to **brainstorm potential themes, catchy titles, and interactive activities/segments for an upcoming event or workshop**. It guides the user to provide context about the event/workshop type, its goals, target audience, general topic, duration, format, and desired tone. The AI is then tasked with generating a specified number of theme concepts, title options, and distinct interactive activity ideas, each with a description, objective, estimated duration, and required materials.

The goal is to generate a diverse set of creative and practical ideas to help plan an engaging, memorable, and effective event or workshop that achieves its intended outcomes.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/ideation/prompt_ID_08_event_workshop_theme_activity_ideation.md](prompt_ID_08_event_workshop_theme_activity_ideation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `ideation_request_team_strategy_workshop.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Ideation-EventWorkshopIdeas-TeamStrategyWS-20250528130000`.
    *   `title`: Update to reflect the specific event, e.g., `"Event Ideation: Team Strategy Workshop Themes & Activities"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Type of Event/Workshop]` and `[General Topic/Purpose]`.
    *   In Section 1 ("Event/Workshop Context & Objectives"), provide comprehensive details about the event type, goals, target audience, topic, duration, format, desired tone, key information to convey, and any budget considerations for activities.
    *   Specify the `[Number]` of options desired for themes, titles, and activities in Section 2.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for ideation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_ID_08_event_workshop_theme_activity_ideation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Ideation-EventWorkshopIdeas-[EventNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Ideation-EventWorkshopIdeas-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this ideation request.
    *   *Placeholder in template:* `"Event/Workshop Theme & Activity Ideation Request"`
*   **`prompt_type` (String, Fixed):** `"ideation_and_brainstorming"`
*   **`domain` (String, Fixed):** `"event_planning_workshop_design_engagement"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "ideation", "brainstorming", "event_planning", "workshop_design", "event_themes", "interactive_activities", "audience_engagement"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/ideation/prompt_ID_08_event_workshop_theme_activity_ideation.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_ID_08_event_workshop_theme_activity_ideation.md`)

*   **Subject Line:** User specifies the type of event/workshop and its general topic/purpose.
*   **Section 1: Event/Workshop Context & Objectives:**
    *   `Type of Event/Workshop`: **Crucial for tailoring ideas.**
    *   `Primary Goal(s) of the Event/Workshop`: **Defines desired outcomes.**
    *   `Target Audience`: **Influences theme, title, and activity appeal.**
    *   `General Topic/Subject Area`.
    *   `Approximate Duration`.
    *   `Format/Setting` (Virtual/In-person).
    *   `Desired Tone/Atmosphere`.
    *   `Key Information or Skills to be Conveyed`.
    *   `Budget Considerations for Activities (Optional)`.
*   **Section 2: Request for Themes, Titles & Activities:**
    *   `A. Potential Event/Workshop Themes`: User specifies number; AI provides theme name and rationale.
    *   `B. Catchy Event/Workshop Titles`: User specifies number.
    *   `C. Interactive Activities/Segments`: User specifies number; AI provides activity name, description, objective, duration, materials, and audience engagement rationale.
*   **Guidelines for Generation:** Pre-filled instructions for the AI to ensure themes are cohesive, titles compelling, and activities practical and engaging.

This structure ensures the AI receives clear direction and sufficient context to generate creative and relevant ideas for planning a successful event or workshop.