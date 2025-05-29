# Documentation: Prompt Template `prompt_PC_03_prompt_refinement_clarity.md`

## 1. Purpose

This "meta-prompt" template is designed to **assist users in refining an existing draft AI prompt to enhance its clarity, effectiveness, and robustness**. The user provides their draft prompt and some context about its intended use. This assistant prompt then guides an AI to act as an expert prompt engineer, meticulously reviewing the draft and offering specific, actionable suggestions for improvement across various elements like task definition, role setting, context guidance, output specifications, and constraints.

The goal is to leverage AI to help users improve their own prompt engineering skills by getting targeted feedback on their draft prompts, leading to higher quality interactions with LLMs.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/prompt_crafting/prompt_PC_03_prompt_refinement_clarity.md](prompt_PC_03_prompt_refinement_clarity.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively based on the draft prompt being reviewed (e.g., `refine_my_summary_prompt_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Craft-RefineClarity-SummaryPromptV1-20250528080000`.
    *   `title`: Update to reflect the purpose, e.g., `"Refinement Assistant for Draft Summary Prompt"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Core Task of Draft Prompt]`.
    *   **Crucially, in Section 1 ("Draft Prompt for Review"), paste the ENTIRE text of the draft prompt you want the AI to critique and help refine.**
    *   In Section 2 ("Context for the Draft Prompt"), provide details about the draft prompt's goal, target AI, desired output characteristics, and any specific concerns you have about your draft.
5.  **Submit to AI:** Provide the completed Markdown content (this instance file) to an AI model. The AI's response will be a critique and suggestions for improving your draft prompt.
6.  **Revise Your Draft Prompt:** Use the AI-generated feedback to revise and improve your original draft prompt.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PC_03_prompt_refinement_clarity.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt refinement request.
    *   *Convention:* `PROMPT-Craft-RefineClarity-[DraftPromptPurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Craft-RefineClarity-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this refinement request.
    *   *Placeholder in template:* `"Prompt Refinement & Clarity Enhancement Assistant"`
*   **`prompt_type` (String, Fixed):** `"critique_and_refinement"`
*   **`domain` (String, Fixed):** `"prompt_engineering_meta"`
*   **`version` (String, Required):** Version of this refinement assistant prompt template.
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling out this refinement request.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "prompt_crafting", "meta_prompt", "prompt_engineering", "prompt_design", "refinement", "clarity_check"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/prompt_crafting/prompt_PC_03_prompt_refinement_clarity.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PC_03_prompt_refinement_clarity.md`)

*   **Subject Line:** Pre-filled; update `[Core Task of Draft Prompt]`.
*   **Section 1: Draft Prompt for Review:**
    *   **User must paste the entire text of their draft prompt here.** This is the primary input for the critique.
*   **Section 2: Context for the Draft Prompt:**
    *   `Intended Primary Goal/Task`.
    *   `Target AI Model`.
    *   `Desired Output Characteristics`.
    *   `Specific Concerns or Areas of Uncertainty`.
*   **Section 3: Request for Refinement & Clarity Enhancement:**
    *   This section is pre-filled with detailed instructions for the AI on what aspects of the draft prompt to analyze and provide feedback on (A-I), such as "Improve Clarity & Reduce Ambiguity," "Enhance Task Explicitness," "Refine Output Specifications," and "Incorporate Prompt Engineering Best Practices." The user typically does not modify this section.

This structure ensures the AI understands both the draft prompt and its intended purpose, enabling it to provide targeted, constructive feedback for refinement.