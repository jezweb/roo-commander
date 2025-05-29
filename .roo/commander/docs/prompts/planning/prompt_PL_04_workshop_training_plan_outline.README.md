# Documentation: Prompt Template `prompt_PL_04_workshop_training_plan_outline.md`

## 1. Purpose

This prompt template is designed to generate a **detailed plan outline for a workshop or training session**. It guides the user to provide information about the session's title/topic, learning objectives, target audience, duration, format, and any key concepts or activities to be included. The AI is then tasked with creating a structured outline including a timed agenda with modules/segments, learning objectives per module, key content points, suggested activities/exercises, facilitation notes, and lists of materials needed.

The goal is to provide a comprehensive framework that helps organizers and facilitators design and deliver an engaging, effective, and well-structured learning experience that achieves its intended objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/planning/prompt_PL_04_workshop_training_plan_outline.md](prompt_PL_04_workshop_training_plan_outline.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `plan_request_crm_training_session_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Plan-WorkshopTrainingOutline-CRMTraining-20250528090000`.
    *   `title`: Update to reflect the specific session, e.g., `"Training Plan Outline: New CRM System Usage"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Title/Topic of Session]`.
    *   In Section 1 ("Session Overview & Objectives"), provide comprehensive details about the session's title, learning objectives, target audience, duration, format, desired atmosphere, and any pre-existing materials.
    *   In Section 2 ("Key Information & Focus Areas"), list key concepts/skills, initial ideas for activities, assessment methods, and logistical considerations.
    *   The more specific the input, particularly regarding learning objectives and target audience needs, the more effective the generated plan will be.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for plan outline generation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PL_04_workshop_training_plan_outline.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Plan-WorkshopTrainingOutline-[SessionTopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Plan-WorkshopTrainingOutline-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this plan generation request.
    *   *Placeholder in template:* `"Workshop/Training Session Plan Outline Generation Request"`
*   **`prompt_type` (String, Fixed):** `"planning_and_outlining"`
*   **`domain` (String, Fixed):** `"learning_development_facilitation_planning"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "planning", "workshop_plan", "training_outline", "learning_design", "facilitation_guide", "curriculum_development"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/planning/prompt_PL_04_workshop_training_plan_outline.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PL_04_workshop_training_plan_outline.md`)

*   **Subject Line:** Pre-filled; update `[Title/Topic of Session]`.
*   **Section 1: Session Overview & Objectives:**
    *   `Session Title/Topic`.
    *   `Primary Learning Objective(s)`.
    *   `Target Audience/Participants`.
    *   `Session Duration`.
    *   `Session Format`.
    *   `Desired Atmosphere/Tone`.
    *   `Any Pre-existing Materials or Content to Incorporate`.
*   **Section 2: Key Information & Focus Areas:**
    *   `Key Concepts or Skills to be Covered`.
    *   `Specific Activities or Exercises (if you have initial ideas)`.
    *   `Assessment or Knowledge Check Methods (if applicable)`.
    *   `Logistical Considerations (if known)`.
*   **Section 3: Request for Workshop/Training Session Plan Outline:**
    *   This section instructs the AI on the desired structure of the output, detailing categories (A-G) for "Session Title & Overview," "Pre-Session Preparation," "Detailed Session Agenda/Flow (with timings, objectives, content, activities per module)," "Facilitation Notes & Tips," "Materials & Resources List," "Post-Session Activities," and optional "Contingency Planning." The user typically does not modify these instructions.

This structure ensures the AI receives comprehensive background information and clear directives to generate a detailed and practical workshop or training session plan.