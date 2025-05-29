# Documentation: Prompt Template `prompt_LRN_05_practice_project_exercise_ideas.md`

## 1. Purpose

This prompt template is designed to generate **ideas for practical projects and smaller exercises to help users apply and solidify newly learned skills or technologies**. It guides the user to specify the skill/technology they are learning, their current proficiency level, any specific concepts they want to practice, and optionally, their areas of interest or desired project complexity. The AI is then tasked with suggesting distinct project concepts and targeted exercises, outlining key skills applied, potential features/tasks, and expected learning outcomes.

The goal is to provide learners with actionable and engaging ideas for hands-on practice, which is crucial for reinforcing knowledge and building real-world competence.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/learning/prompt_LRN_05_practice_project_exercise_ideas.md](prompt_LRN_05_practice_project_exercise_ideas.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `practice_ideas_request_figma_beginner.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Learn-PracticeIdeas-FigmaBeginner-20250528100000`.
    *   `title`: Update to reflect the specific request, e.g., `"Practice Ideas Request: Figma for UI Beginners"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Skill/Technology Being Learned]`.
    *   **Crucially, in Section 1 ("Learning & Practice Context"):**
        *   Clearly state the `Skill/Technology Being Learned`.
        *   Detail your `Current Proficiency Level`.
        *   Specify any `Specific Concepts or Techniques to Practice`.
        *   Optionally, indicate `Desired Project Scale/Complexity`, `Areas of Personal or Professional Interest`, and `Tools/Resources Available`.
    *   In Section 2 ("Request for Project & Exercise Ideas"), specify the desired number of project and exercise ideas. The rest of this section contains instructions for the AI.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate project and exercise ideas.

## 3. TOML Frontmatter Schema (for an instance of `prompt_LRN_05_practice_project_exercise_ideas.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Learn-PracticeIdeas-[SkillShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Learn-PracticeIdeas-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this ideation request.
    *   *Placeholder in template:* `"Practice Project & Exercise Ideation Request"`
*   **`prompt_type` (String, Fixed):** `"ideation_recommendation"`
*   **`domain` (String, Fixed):** `"learning_and_development_skill_application"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "practice_projects", "learning_exercises", "skill_application", "hands_on_learning", "portfolio_projects"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/learning/prompt_LRN_05_practice_project_exercise_ideas.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_LRN_05_practice_project_exercise_ideas.md`)

*   **Subject Line:** Pre-filled; update `[Skill/Technology Being Learned]`.
*   **Section 1: Learning & Practice Context:**
    *   `Skill/Technology Being Learned`: **User must specify this clearly.**
    *   `Current Proficiency Level`: **Essential for tailoring idea complexity.**
    *   `Specific Concepts or Techniques to Practice (if any)`.
    *   `Desired Project Scale/Complexity (Optional)`.
    *   `Areas of Personal or Professional Interest (Optional)`.
    *   `Tools/Resources Available (if relevant)`.
*   **Section 2: Request for Project & Exercise Ideas:**
    *   User specifies the desired `[Number]` of project and exercise ideas.
    *   The rest of this section is pre-filled with instructions for the AI on how to structure the ideas (Project Title, Description, Skills Applied, Features/Tasks, Extension Ideas; Exercise Focus, Task Description, Expected Outcome). The user typically does not modify these structural instructions.

This structure ensures the AI receives sufficient information about the learner's current state and goals to generate relevant, actionable, and appropriately challenging practice ideas.