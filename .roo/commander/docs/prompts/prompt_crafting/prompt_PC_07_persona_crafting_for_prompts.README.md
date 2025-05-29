# Documentation: Prompt Template `prompt_PC_07_persona_crafting_for_prompts.md`

## 1. Purpose

This "meta-prompt" template is designed to **assist users in crafting detailed and effective AI persona descriptions for inclusion in new AI prompts**. Defining a clear persona for the AI to adopt can significantly influence the tone, style, and approach of its output, making it more appropriate and effective for the intended task and audience. This assistant prompt guides an AI to help the user develop one or more such persona descriptions.

The user specifies the core task of their new prompt, the target audience for the AI's output, and the desired tone/style. The AI then helps generate rich persona descriptions, including role titles, key attributes, communication styles, motivations, and even illustrative phrasing.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/prompt_crafting/prompt_PC_07_persona_crafting_for_prompts.md](prompt_PC_07_persona_crafting_for_prompts.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively based on the new prompt you are building (e.g., `craft_persona_for_support_bot_prompt.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Craft-PersonaCraft-SupportBot-20250528120000`.
    *   `title`: Update to reflect the purpose, e.g., `"Persona Crafting for Customer Support Bot Prompt"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Core Task of New Prompt]`.
    *   In Section 1 ("Overview of the New Prompt's Core Task & Desired Output Style"), clearly define the function of the *new prompt you want to build*, the target audience for its output, and the desired tone/style.
    *   In Section 2 ("Initial Thoughts on the AI Persona"), provide any preliminary ideas you have for the persona.
5.  **Submit to AI:** Provide the completed Markdown content (this instance file) to an AI model. The AI's response will be one or more detailed persona descriptions.
6.  **Incorporate Persona into Your New Prompt:** Select or adapt the AI-generated persona description and include it in the instructional part of your new prompt (e.g., "You are [Persona Description]. Your task is to...").

## 3. TOML Frontmatter Schema (for an instance of `prompt_PC_07_persona_crafting_for_prompts.md`)

*   **`id` (String, Required):** Unique ID for this specific persona crafting request.
    *   *Convention:* `PROMPT-Craft-PersonaCraft-[NewPromptPurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Craft-PersonaCraft-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this persona crafting request.
    *   *Placeholder in template:* `"AI Persona Crafting Assistant for Prompts"`
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
    *   *Default in template:* `["prompt", "prompt_crafting", "meta_prompt", "prompt_engineering", "ai_persona", "role_definition", "prompt_design", "tone_and_style"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/prompt_crafting/prompt_PC_07_persona_crafting_for_prompts.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PC_07_persona_crafting_for_prompts.md`)

*   **Subject Line:** Pre-filled; update `[Core Task of New Prompt]`.
*   **Section 1: Overview of the New Prompt's Core Task & Desired Output Style:**
    *   `Primary Function of the New Prompt`: **User must clearly state what their new prompt should achieve.**
    *   `Target Audience for the AI's Output`.
    *   `Desired Tone of the AI's Output`.
    *   `Desired Style of the AI's Output`.
    *   `Key Objective of the AI's Communication`.
    *   `Target AI Model`.
*   **Section 2: Initial Thoughts on the AI Persona (if any):**
    *   User can provide their preliminary ideas.
*   **Section 3: Request for Persona Crafting Assistance:**
    *   This section is pre-filled with instructions for the AI on what elements the persona description should cover (A-G), such as "Role Title/Descriptor," "Key Attributes & Expertise," "Communication Style & Tone," "Motivations & Goals," and "Example Phrasing." The user typically does not modify this section.

This structure ensures the AI understands the context and requirements for the persona, enabling it to generate creative and fitting persona descriptions to enhance the user's new prompt.