# Documentation: Prompt Template `prompt_PC_04_few_shot_example_developer.md`

## 1. Purpose

This "meta-prompt" template is designed to **assist users in developing effective few-shot examples for inclusion in new AI prompts** they are creating. Few-shot learning (providing a few input/output examples within the prompt itself) can significantly improve an LLM's performance on specific tasks, especially for achieving a particular style, format, or nuanced behavior. This assistant prompt guides an AI to help the user generate, refine, and structure such examples.

The user specifies the core task of their new prompt, provides examples of typical inputs and desired outputs, and the AI then helps validate these, generate additional diverse examples, and advises on best practices for structuring them within a prompt.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/prompt_crafting/prompt_PC_04_few_shot_example_developer.md](prompt_PC_04_few_shot_example_developer.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively based on the new prompt you are building (e.g., `develop_few_shot_for_sentiment_prompt.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Craft-FewShotDev-SentimentAnalysis-20250528090000`.
    *   `title`: Update to reflect the purpose, e.g., `"Few-Shot Example Developer for Sentiment Analysis Prompt"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Core Task of New Prompt]`.
    *   In Section 1 ("Overview of the New Prompt's Core Task & Desired Output"), clearly define the function of the *new prompt you want to build*, its desired output characteristics, and why few-shot examples are important.
    *   **Crucially, in Section 2 ("Input for Example Generation"):**
        *   Provide 1-2 examples of **typical inputs** that your new prompt will receive (2.A).
        *   Provide the **ideal corresponding outputs** for those inputs (2.B). This helps the AI understand your target.
        *   Indicate your preference for the number of few-shot examples or ask for suggestions (2.C).
5.  **Submit to AI:** Provide the completed Markdown content (this instance file) to an AI model. The AI's response will include critiques of your examples, new example suggestions, and guidance on structuring them.
6.  **Incorporate Examples:** Use the AI-generated examples and guidance to build the few-shot learning component of your new prompt.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PC_04_few_shot_example_developer.md`)

*   **`id` (String, Required):** Unique ID for this specific few-shot example development request.
    *   *Convention:* `PROMPT-Craft-FewShotDev-[NewPromptPurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Craft-FewShotDev-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this development request.
    *   *Placeholder in template:* `"Few-Shot Example Development Assistant for AI Prompts"`
*   **`prompt_type` (String, Fixed):** `"guidance_and_generation"`
*   **`domain` (String, Fixed):** `"prompt_engineering_meta"`
*   **`version` (String, Required):** Version of this assistant prompt template.
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling out this request.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "prompt_crafting", "meta_prompt", "prompt_engineering", "few_shot_learning", "example_generation", "prompt_design"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/prompt_crafting/prompt_PC_04_few_shot_example_developer.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PC_04_few_shot_example_developer.md`)

*   **Subject Line:** Pre-filled; update `[Core Task of New Prompt]`.
*   **Section 1: Overview of the New Prompt's Core Task & Desired Output:**
    *   `Primary Function of the New Prompt`: **User must clearly state what their new prompt should achieve.**
    *   `Desired Output Characteristics`.
    *   `Target AI Model`.
    *   `Why Few-Shot Examples are Considered Important`.
*   **Section 2: Input for Example Generation:**
    *   `Typical Input(s) to your New Prompt`: **User provides examples of inputs.**
    *   `Ideal Corresponding Output(s) for the Inputs Above`: **User provides ideal outputs for their input examples.**
    *   `Number of Few-Shot Examples Typically Recommended`.
*   **Section 3: Request for Few-Shot Example Development Assistance:**
    *   This section is pre-filled with instructions for the AI on how to help: validating/refining user examples, generating additional diverse examples, advising on structuring examples within a prompt, and outlining principles for good examples for the specific task. The user typically does not modify this section.

This structure ensures the AI understands the task for which few-shot examples are needed and can provide targeted, high-quality assistance in developing them.