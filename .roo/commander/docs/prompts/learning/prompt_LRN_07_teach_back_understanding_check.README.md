# Documentation: Prompt Template `prompt_LRN_07_teach_back_understanding_check.md`

## 1. Purpose

This prompt template is designed to help users **validate their understanding of a newly learned concept or topic by "teaching it back"** and receiving constructive feedback on their explanation. The user provides their own explanation of a concept, specifies their intended audience for that explanation, and then requests the AI to critique their articulation for accuracy, clarity, completeness, and structure.

The goal is to provide a mechanism for self-assessment and refinement of understanding, helping learners identify gaps in their knowledge and improve their ability to communicate complex ideas effectively.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/learning/prompt_LRN_07_teach_back_understanding_check.md](prompt_LRN_07_teach_back_understanding_check.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `teach_back_check_agile_scrum_explanation.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Learn-TeachBackCheck-AgileScrum-20250528120000`.
    *   `title`: Update to reflect the specific concept, e.g., `"Teach Back Check: My Explanation of Agile Scrum"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Concept/Topic Name]`.
    *   In Section 1 ("Context of My Learning & Explanation"):
        *   Clearly state the `Concept/Topic I Am Explaining`.
        *   Define `My Intended Audience for This Explanation`.
        *   Optionally, mention `Key Sources of My Learning` and any `Specific Areas I'm Unsure About`.
    *   **Crucially, in Section 2 ("My Explanation of [Concept/Topic Name]"):**
        *   **Paste your full explanation of the concept/topic** into the designated code block.
    *   Section 3 ("Request for Feedback on My Explanation") contains instructions for the AI and typically does not need modification by the user.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to receive feedback on your explanation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_LRN_07_teach_back_understanding_check.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Learn-TeachBackCheck-[ConceptShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Learn-TeachBackCheck-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this feedback request.
    *   *Placeholder in template:* `"\"Teach Back\" Understanding & Articulation Check Request"`
*   **`prompt_type` (String, Fixed):** `"feedback_assessment"`
*   **`domain` (String, Fixed):** `"learning_and_development_knowledge_validation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "teach_back", "understanding_check", "learning_assessment", "knowledge_articulation", "feedback_on_explanation"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/learning/prompt_LRN_07_teach_back_understanding_check.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_LRN_07_teach_back_understanding_check.md`)

*   **Subject Line:** Pre-filled; update `[Concept/Topic Name]`.
*   **Section 1: Context of My Learning & Explanation:**
    *   `Concept/Topic I Am Explaining`: **User must specify this clearly.**
    *   `My Intended Audience for This Explanation`: **Essential for tailoring feedback on clarity.**
    *   `Key Sources of My Learning (Optional)`.
    *   `Specific Areas I'm Unsure About or Want Feedback On (Optional)`.
*   **Section 2: My Explanation of [Concept/Topic Name]:**
    *   **User must paste their full explanation into the code block here.**
*   **Section 3: Request for Feedback on My Explanation:**
    *   This section is pre-filled with instructions for the AI on what aspects of the explanation to critique (Accuracy, Clarity, Completeness, Structure, Examples, Articulation). The user typically does not modify this section.

This structure ensures the AI understands what concept is being explained, to whom it's targeted, and receives the user's actual explanation to provide specific and constructive feedback.