# Documentation: Prompt Template `prompt_PC_06_prompt_evaluation_checklist_generator.md`

## 1. Purpose

This "meta-prompt" template is designed to **assist users in generating a customized evaluation checklist for assessing the effectiveness of AI prompts** they are developing or testing for a specific type of task. The user describes the general task type their prompts are for (e.g., summarization, code generation), the objectives of these prompts, and the desired characteristics of the AI's output. This assistant prompt then guides an AI to create a detailed checklist with relevant criteria for evaluating both the prompt's design (optional) and, more importantly, the quality of the AI's output.

The goal is to provide users with a structured and systematic way to evaluate and compare different prompt variations, facilitating iterative improvement and the selection of the most effective prompts.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/prompt_crafting/prompt_PC_06_prompt_evaluation_checklist_generator.md](prompt_PC_06_prompt_evaluation_checklist_generator.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively based on the type of prompts you'll be evaluating (e.g., `checklist_gen_for_creative_writing_prompts.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Craft-EvalChecklistGen-CreativeWriting-20250528110000`.
    *   `title`: Update to reflect the purpose, e.g., `"Evaluation Checklist Generator for Creative Writing Prompts"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[General Task Type]`.
    *   In Section 1 ("Overview of the Prompts Being Evaluated"), clearly define the **general task type** your prompts are for, their key objectives, typical inputs, and desired output characteristics.
    *   In Section 2 ("Specific Aspects to Consider for Evaluation"), optionally list any particular criteria you want to ensure are included in the checklist.
5.  **Submit to AI:** Provide the completed Markdown content (this instance file) to an AI model. The AI's response will be the generated evaluation checklist.
6.  **Use the Checklist:** Adapt and use the AI-generated checklist to systematically test and evaluate your different prompt variations.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PC_06_prompt_evaluation_checklist_generator.md`)

*   **`id` (String, Required):** Unique ID for this specific checklist generation request.
    *   *Convention:* `PROMPT-Craft-EvalChecklistGen-[TaskTypeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Craft-EvalChecklistGen-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this checklist generation request.
    *   *Placeholder in template:* `"Prompt Evaluation Checklist Generator Assistant"`
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
    *   *Default in template:* `["prompt", "prompt_crafting", "meta_prompt", "prompt_engineering", "prompt_evaluation", "testing_prompts", "checklist_generator"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/prompt_crafting/prompt_PC_06_prompt_evaluation_checklist_generator.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PC_06_prompt_evaluation_checklist_generator.md`)

*   **Subject Line:** Pre-filled; update `[General Task Type]`.
*   **Section 1: Overview of the Prompts Being Evaluated:**
    *   `General Task Type`: **User must clearly state the category of tasks their prompts are for.**
    *   `Key Objectives of These Prompts`.
    *   `Typical Inputs to These Prompts`.
    *   `Desired Characteristics of the AI's Output`.
    *   `Target AI Model`.
*   **Section 2: Specific Aspects to Consider for Evaluation (Optional):**
    *   User can list any specific criteria they want included.
*   **Section 3: Request for Evaluation Checklist Generation:**
    *   This section is pre-filled with instructions for the AI on what the checklist should cover, including categories like "Output Accuracy," "Relevance," "Clarity," "Adherence to Format," etc. It also asks the AI to tailor items to the specified task type. The user typically does not modify this section.

This structure ensures the AI understands the context of the prompts to be evaluated and can generate a relevant and comprehensive checklist for assessing their performance.