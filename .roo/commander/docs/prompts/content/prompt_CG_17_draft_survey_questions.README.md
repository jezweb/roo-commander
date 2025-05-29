# Documentation: Prompt Template `prompt_CG_17_draft_survey_questions.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **draft list of questions for a survey or questionnaire**. It guides the user to provide details about the survey's purpose, target respondents, key areas/themes of inquiry, desired question types (conceptual), and preferred tone. The AI is tasked with crafting clear, unbiased, and relevant questions, organized logically, along with brief introductory and concluding text.

This template helps accelerate the initial phase of survey design, providing a solid set of draft questions that can be reviewed, refined, and tested by researchers, marketers, or HR professionals.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_17_draft_survey_questions.md](prompt_CG_17_draft_survey_questions.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_customer_sat_survey_questions_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftSurveyQuestions-CustSatV1-20250528220000`.
    *   `title`: Update to reflect the specific survey, e.g., `"Draft Survey Questions: Customer Satisfaction for Product X"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Purpose of Survey]`.
    *   **In Section 1 ("Survey/Questionnaire Overview & Specifications"):**
        *   Clearly define the `Survey Title/Topic`, `Primary Goal(s)`, `Target Respondents`, `Anonymity/Confidentiality` approach, `Desired Tone & Style`, approximate `Number of Questions Desired`, and list the `Key Areas/Themes of Inquiry`.
    *   **Crucially, in Section 2 ("Question Types & Content Guidance"):**
        *   For each `Theme/Area of Inquiry` identified in Section 1, specify the `Desired Question Types` (e.g., Likert scale, open-ended, multiple choice) and any `Specific aspects to probe`. This guides the AI in formulating appropriate questions.
        *   Indicate if `Demographic/Firmographic Questions` are needed and what they should cover.
        *   Instruct the AI to draft brief `Introductory Text` and `Concluding Text / Thank You`.
    *   In Section 3 ("Additional Instructions"), provide guidance on question phrasing, things to avoid, and conceptual logical flow.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft survey questions.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_17_draft_survey_questions.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftSurveyQuestions-[PurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftSurveyQuestions-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Survey/Questionnaire Draft Questions Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"research_surveys_questionnaire_design"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "survey_questions", "questionnaire_design", "market_research", "customer_feedback", "employee_feedback", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_17_draft_survey_questions.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_17_draft_survey_questions.md`)

*   **Subject Line:** Pre-filled; update `[Purpose of Survey]`.
*   **Section 1: Survey/Questionnaire Overview & Specifications:**
    *   User provides comprehensive details about the survey: title/topic, goals, respondents, anonymity, tone, desired number of questions, and key themes.
*   **Section 2: Question Types & Content Guidance:**
    *   User guides the AI on the types of questions needed for each theme and specific aspects to explore. Instructions for demographic questions, intro/outro text are also provided. **This section is key for shaping the AI's question formulation.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify phrasing emphasis/avoidance and conceptual flow.

This detailed structure provides the AI with clear instructions for generating a relevant and well-structured set of draft survey questions tailored to the user's research objectives.