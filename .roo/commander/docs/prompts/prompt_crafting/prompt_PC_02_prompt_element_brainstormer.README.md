# Documentation: Prompt Template `prompt_PC_02_prompt_element_brainstormer.md`

## 1. Purpose

This "meta-prompt" template is designed to **assist users in brainstorming various options for the key constituent elements of a new AI prompt** they are developing. It helps explore different approaches for defining the AI's persona, phrasing instructions, identifying necessary context, specifying output formats, setting constraints, and considering advanced techniques. The user specifies the core task of their new prompt, and this assistant prompt guides an AI to generate multiple suggestions for each critical prompt component.

The goal is to help users consider a wider range of possibilities and make more informed decisions when constructing the individual parts of their new prompt, leading to a more robust and effective final prompt.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/prompt_crafting/prompt_PC_02_prompt_element_brainstormer.md](prompt_PC_02_prompt_element_brainstormer.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively based on the new prompt you are building (e.g., `brainstorm_elements_for_code_gen_prompt.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Craft-ElementBrainstorm-CodeGenElements-20250528070000`.
    *   `title`: Update to reflect the purpose, e.g., `"Prompt Element Brainstorming: Code Generation Prompt"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Core Task of New Prompt]`.
    *   In Section 1 ("Core Task & Objective of the New Prompt"), clearly define the primary function and desired output quality of the *new prompt you want to build*.
    *   In Section 2 ("Specific Prompt Elements for Brainstorming"), for each element (A-H), fill in your "Current thought (if any)" or leave it as "None yet." This section lists the areas for which you want the AI to provide brainstorming suggestions.
5.  **Submit to AI:** Provide the completed Markdown content (this instance file) to an AI model. The AI's response will be a list of brainstormed ideas and suggestions for each prompt element you requested.
6.  **Select & Incorporate:** Review the AI-generated suggestions and select the most promising ones to incorporate into the actual draft of your new prompt.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PC_02_prompt_element_brainstormer.md`)

*   **`id` (String, Required):** Unique ID for this specific element brainstorming request.
    *   *Convention:* `PROMPT-Craft-ElementBrainstorm-[NewPromptPurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Craft-ElementBrainstorm-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this brainstorming request.
    *   *Placeholder in template:* `"Prompt Element Brainstorming Assistant"`
*   **`prompt_type` (String, Fixed):** `"ideation_and_suggestion"`
*   **`domain` (String, Fixed):** `"prompt_engineering_meta"`
*   **`version` (String, Required):** Version of this brainstorming assistant prompt template.
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling out this brainstorming request.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "prompt_crafting", "meta_prompt", "prompt_engineering", "prompt_design", "brainstorming", "prompt_components"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/prompt_crafting/prompt_PC_02_prompt_element_brainstormer.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PC_02_prompt_element_brainstormer.md`)

*   **Subject Line:** Pre-filled; update `[Core Task of New Prompt]`.
*   **Section 1: Core Task & Objective of the New Prompt:**
    *   `Primary Function`: **User must clearly state what their new prompt should do.**
    *   `Desired Outcome/Output Quality`.
    *   `Target AI Model`.
*   **Section 2: Specific Prompt Elements for Brainstorming:**
    *   This section lists specific elements (A-H) like "AI Persona / Role Definition," "Phrasing of the Core Task Instruction," "Essential Context & Input Variables," etc.
    *   For each element, the user can note their "Current thought (if any)" to guide the AI or leave it blank for open brainstorming.
*   **Section 3: Request for Brainstorming Assistance:**
    *   This section is pre-filled with instructions for the AI on how to provide suggestions for each element listed in Section 2. The user typically does not modify this section.

This structure helps the AI focus its brainstorming efforts on the specific components of a new prompt, providing the user with a rich set of options to consider during their prompt design process.