# Documentation: Prompt Template `prompt_LRN_01_structured_learning_plan.md`

## 1. Purpose

This prompt template is designed to generate a **structured, personalized learning plan for acquiring a new skill or understanding a complex topic**. It guides the user to provide details about the skill/topic they wish to learn, their current knowledge level, desired proficiency, time commitment, and any learning preferences. The AI is then tasked with creating a modular plan that includes key topics, learning objectives, suggested activities and resource types, practice exercises, and progress tracking milestones.

The goal is to provide a clear roadmap for self-study or guided learning, making the process more organized, efficient, and effective.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/learning/prompt_LRN_01_structured_learning_plan.md](prompt_LRN_01_structured_learning_plan.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `learning_plan_request_python_for_da_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Learn-StructPlan-PythonForDA-20250528060000`.
    *   `title`: Update to reflect the specific learning goal, e.g., `"Learning Plan Request: Python for Data Analysis"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Skill/Topic to Learn]`.
    *   **Crucially, in Section 1 ("Learning Context & Goals"):**
        *   Clearly state the `Skill/Topic to Learn`.
        *   Detail your `Current Knowledge Level`.
        *   Specify the `Desired Outcome/Proficiency Level`.
        *   Explain your `Primary Reason for Learning`.
        *   Indicate your `Available Time Commitment` and `Preferred Learning Duration` (if any).
        *   Optionally, mention `Preferred Learning Styles/Resources`.
    *   Section 2 ("Request for Learning Plan Structure") contains instructions for the AI and typically does not need modification by the user.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the learning plan.

## 3. TOML Frontmatter Schema (for an instance of `prompt_LRN_01_structured_learning_plan.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Learn-StructPlan-[SkillTopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Learn-StructPlan-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this learning plan request.
    *   *Placeholder in template:* `"Structured Skill/Topic Learning Plan Generation Request"`
*   **`prompt_type` (String, Fixed):** `"generation_planning"`
*   **`domain` (String, Fixed):** `"learning_and_development_skill_acquisition"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "learning_plan", "skill_development", "education_plan", "self_study", "training_outline"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/learning/prompt_LRN_01_structured_learning_plan.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_LRN_01_structured_learning_plan.md`)

*   **Subject Line:** Pre-filled; update `[Skill/Topic to Learn]`.
*   **Section 1: Learning Context & Goals:**
    *   `Skill/Topic to Learn`: **User must specify this clearly.**
    *   `Current Knowledge Level`: **Essential for tailoring the plan.**
    *   `Desired Outcome/Proficiency Level`: **Defines the end goal.**
    *   `Primary Reason for Learning`.
    *   `Available Time Commitment`.
    *   `Preferred Learning Duration (if any)`.
    *   `Preferred Learning Styles/Resources (Optional)`.
*   **Section 2: Request for Learning Plan Structure:**
    *   This section is pre-filled with instructions for the AI on how to structure the learning plan (Modular Breakdown, Suggested Activities, Practice, Milestones, Tips). The user typically does not modify this section.

This structure ensures the AI receives all necessary information to generate a relevant, personalized, and actionable learning plan.