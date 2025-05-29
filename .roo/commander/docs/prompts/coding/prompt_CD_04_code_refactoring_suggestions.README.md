# Documentation: Prompt Template `prompt_CD_04_code_refactoring_suggestions.md`

## 1. Purpose

This prompt template is designed to request **suggestions for refactoring a provided piece of code**. Refactoring aims to improve the internal structure, quality, readability, performance, or maintainability of code without changing its external behavior. The user provides the code snippet, its language, and specifies their primary refactoring objectives (e.g., improve readability, enhance performance, reduce complexity).

The goal is to receive specific, actionable suggestions, including explanations of why the changes are beneficial and examples of the refactored code.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_04_code_refactoring_suggestions.md](prompt_CD_04_code_refactoring_suggestions.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `refactor_suggestions_python_user_processing_func.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-CodeRefactor-PyUserFunc-20250528090000`.
    *   `title`: Update to reflect the specific request, e.g., `"Refactoring Suggestions: Python User Data Processing Function"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with a `[Brief Description of Code/Functionality]`.
    *   **Crucially, in Section 1 ("Code for Refactoring"):**
        *   **Paste the EXACT code snippet** you want refactoring suggestions for into the fenced code block, specifying the language.
    *   In Section 2 ("Context & Refactoring Goals"):
        *   Specify the `Programming Language & Version`.
        *   Describe any `Current Issues or Concerns with the Code`.
        *   State your `Primary Refactoring Objectives`.
        *   List any `Constraints or Limitations`.
        *   Optionally, mention `Specific Design Patterns or Idioms to Consider`.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to get refactoring suggestions.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_04_code_refactoring_suggestions.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-CodeRefactor-[Language][PurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-CodeRefactor-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this refactoring request.
    *   *Placeholder in template:* `"Code Refactoring Suggestions Request"`
*   **`prompt_type` (String, Fixed):** `"improvement_technical_code_refactor"`
*   **`domain` (String, Fixed):** `"coding_and_technical"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "coding", "refactoring", "code_quality", "optimization", "maintainability", "best_practices"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_04_code_refactoring_suggestions.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_04_code_refactoring_suggestions.md`)

*   **Subject Line:** Pre-filled; update `[Brief Description of Code/Functionality]`.
*   **Section 1: Code for Refactoring:**
    *   A fenced code block where the **user must paste the code to be refactored.**
*   **Section 2: Context & Refactoring Goals:**
    *   `Programming Language & Version`.
    *   `Current Issues or Concerns with the Code`: Helps focus the AI.
    *   `Primary Refactoring Objectives`: **Crucial for guiding the type of suggestions.**
    *   `Constraints or Limitations`.
    *   `Specific Design Patterns or Idioms to Consider (Optional)`.
*   **Section 3: Request for Refactoring Suggestions:**
    *   A pre-filled section outlining the desired format of suggestions: identify area, explain rationale, provide refactored code, discuss trade-offs.

This structure ensures the AI receives the code, context about its problems, and clear objectives for improvement, leading to targeted and useful refactoring advice.