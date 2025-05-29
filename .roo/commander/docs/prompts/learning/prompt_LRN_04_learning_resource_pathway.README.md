# Documentation: Prompt Template `prompt_LRN_04_learning_resource_pathway.md`

## 1. Purpose

This prompt template is designed to generate **curated recommendations for learning resources and a suggested learning pathway for a specific skill or topic**. It guides the user to provide details about the skill/topic they wish to learn, their current knowledge level, desired proficiency, and any learning style or resource type preferences. The AI is then tasked with suggesting types of foundational and advanced resources, platforms for practical application, relevant communities, and a logical order for progressing through the learning material.

The goal is to provide a strategic guide to available learning avenues, helping the user navigate the vast amount of information and choose effective resources to achieve their learning objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/learning/prompt_LRN_04_learning_resource_pathway.md](prompt_LRN_04_learning_resource_pathway.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `resource_request_nodejs_learning_path.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Learn-ResourcePathway-NodeJSWebDev-20250528090000`.
    *   `title`: Update to reflect the specific learning goal, e.g., `"Learning Resource Request: Node.js Web Development Pathway"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Skill/Topic to Learn]`.
    *   **Crucially, in Section 1 ("Learning Context & Preferences"):**
        *   Clearly state the `Skill/Topic to Learn`.
        *   Detail your `Current Knowledge Level` and `Desired Outcome/Proficiency Level`.
        *   Optionally, mention `Preferred Learning Styles`, `Types of Resources Preferred`, `Specific Areas of Interest`, and any `Resources Already Explored`.
    *   Section 2 ("Request for Resource & Pathway Curation") contains instructions for the AI and typically does not need modification by the user.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate resource and pathway suggestions.

## 3. TOML Frontmatter Schema (for an instance of `prompt_LRN_04_learning_resource_pathway.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Learn-ResourcePathway-[SkillTopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Learn-ResourcePathway-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this resource curation request.
    *   *Placeholder in template:* `"Learning Resource & Pathway Curation Request"`
*   **`prompt_type` (String, Fixed):** `"recommendation_planning"`
*   **`domain` (String, Fixed):** `"learning_and_development_resource_discovery"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "learning_resources", "educational_pathway", "skill_development", "self_study_guide", "resource_curation"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/learning/prompt_LRN_04_learning_resource_pathway.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_LRN_04_learning_resource_pathway.md`)

*   **Subject Line:** Pre-filled; update `[Skill/Topic to Learn]`.
*   **Section 1: Learning Context & Preferences:**
    *   `Skill/Topic to Learn`: **User must specify this clearly.**
    *   `Current Knowledge Level`: **Essential for tailoring recommendations.**
    *   `Desired Outcome/Proficiency Level`: **Defines the learning goal.**
    *   `Preferred Learning Styles (Optional)`.
    *   `Types of Resources Preferred (Optional)`.
    *   `Specific Areas of Interest or Application within the Topic (if any)`.
    *   `Any Resources Already Explored or Considered (Optional)`.
*   **Section 2: Request for Resource & Pathway Curation:**
    *   This section is pre-filled with instructions for the AI on what the curated list and pathway should include (Foundational Resources, Intermediate/Advanced Resources, Practical Application, Communities, Suggested Pathway, Rationale). The user typically does not modify this section.

This structure ensures the AI receives sufficient information about the learner's needs and preferences to provide relevant and helpful resource and pathway recommendations.