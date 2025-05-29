# Documentation: Prompt Template `prompt_PC_05_output_format_constraint_specifier.md`

## 1. Purpose

This "meta-prompt" template is designed to **assist users in clearly defining and articulating the desired output format and necessary constraints for a new AI prompt** they are developing. It helps users specify how an LLM's response should be structured, formatted, and limited to ensure it meets their specific requirements. The user describes the core task of their new prompt and their general output needs, and this assistant prompt guides an AI to suggest optimal output formats, phrasing for formatting instructions, and relevant constraints.

The goal is to help users create prompts that yield predictable, useful, and precisely structured outputs from AI models, especially when the output needs to be machine-readable or adhere to strict guidelines.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/prompt_crafting/prompt_PC_05_output_format_constraint_specifier.md](prompt_PC_05_output_format_constraint_specifier.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively based on the new prompt you are building (e.g., `specify_output_for_data_extraction_prompt.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Craft-OutputConstraintSpec-DataExtract-20250528100000`.
    *   `title`: Update to reflect the purpose, e.g., `"Output Specifier for Data Extraction Prompt"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Core Task of New Prompt]`.
    *   In Section 1 ("Overview of the New Prompt's Core Task & Desired Output Nature"), clearly define the function of the *new prompt you want to build*, the general nature of its output, and why specific formatting/constraints are important.
    *   In Section 2 ("Initial Thoughts on Output Format & Constraints"), provide any preliminary ideas you have about the desired format or constraints. This is optional but can help guide the AI.
5.  **Submit to AI:** Provide the completed Markdown content (this instance file) to an AI model. The AI's response will include recommendations for output formats, specific phrasing for instructions, and a list of relevant constraints.
6.  **Incorporate into Your New Prompt:** Use the AI-generated suggestions to write clear output formatting and constraint instructions within your new prompt.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PC_05_output_format_constraint_specifier.md`)

*   **`id` (String, Required):** Unique ID for this specific output specification request.
    *   *Convention:* `PROMPT-Craft-OutputConstraintSpec-[NewPromptPurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Craft-OutputConstraintSpec-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this specification request.
    *   *Placeholder in template:* `"Output Format & Constraint Specification Assistant for AI Prompts"`
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
    *   *Default in template:* `["prompt", "prompt_crafting", "meta_prompt", "prompt_engineering", "output_formatting", "constraints", "prompt_design", "structured_output"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/prompt_crafting/prompt_PC_05_output_format_constraint_specifier.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PC_05_output_format_constraint_specifier.md`)

*   **Subject Line:** Pre-filled; update `[Core Task of New Prompt]`.
*   **Section 1: Overview of the New Prompt's Core Task & Desired Output Nature:**
    *   `Primary Function of the New Prompt`: **User must clearly state what their new prompt should achieve.**
    *   `General Nature of Desired Output`.
    *   `Target AI Model`.
    *   `Why specific formatting/constraints are important`.
*   **Section 2: Initial Thoughts on Output Format & Constraints (if any):**
    *   `Desired Output Structure/Format (Initial Idea)`: User can provide their current thoughts or examples.
    *   `Key Constraints Considered So Far`.
*   **Section 3: Request for Output Specification & Constraint Development Assistance:**
    *   This section is pre-filled with instructions for the AI on how to help: recommending optimal output formats, generating specific formatting instructions, brainstorming essential constraints, phrasing constraint instructions, handling variability, and ensuring machine readability. The user typically does not modify this section.

This structure ensures the AI understands the user's needs for structured output and can provide targeted, practical advice on how to instruct an LLM to achieve it.