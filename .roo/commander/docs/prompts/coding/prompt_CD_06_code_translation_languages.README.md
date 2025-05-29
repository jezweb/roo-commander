
---

Next, the `README.md` file for this prompt template:

---
**File: `prompt_CD_06_code_translation_languages.README.md`**
```markdown
# Documentation: Prompt Template `prompt_CD_06_code_translation_languages.md`

## 1. Purpose

This prompt template is designed to request the **translation of a code snippet, function, or module from a source programming language to a target programming language**. It guides the user to provide the original code, specify both source and target languages, and outline any specific requirements or context for the translation, such as the need for idiomatic code in the target language or handling of dependencies.

The goal is to receive a functional and readable translation of the code that preserves the original logic while adhering to the conventions of the target language.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_06_code_translation_languages.md](prompt_CD_06_code_translation_languages.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `translate_python_script_to_javascript.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-CodeTranslation-PyToJS-UtilFunc-20250528110000`.
    *   `title`: Update to reflect the specific translation task, e.g., `"Code Translation: Python Utility to JavaScript"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Source Language] to [Target Language] for [Brief Description of Code]`.
    *   **Crucially, in Section 1 ("Original Code (Source Language)"):**
        *   **Paste the EXACT code snippet** from the source language into the fenced code block, specifying the source language in the fence.
    *   In Section 2 ("Translation Requirements & Context"):
        *   Specify the `Source Programming Language & Version`.
        *   Specify the `Target Programming Language & Version`.
        *   Reiterate the `Core Functionality to Preserve`.
        *   Indicate if `Idiomatic Translation Preferred`.
        *   List any `Dependencies / Libraries` in the source.
        *   Mention the `Target Environment` if relevant.
        *   Optionally, list `Specific Areas of Concern for Translation`.
    *   Re-state the source and target languages in the final request paragraph.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the translated code.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_06_code_translation_languages.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-CodeTranslation-[SourceLang]To[TargetLang]-[PurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-CodeTranslation-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this code translation request.
    *   *Placeholder in template:* `"Code Translation Between Languages Request"`
*   **`prompt_type` (String, Fixed):** `"generation_technical_code_translate"`
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
    *   *Default in template:* `["prompt", "coding", "code_translation", "language_conversion", "porting_code", "programming_languages"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_06_code_translation_languages.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_06_code_translation_languages.md`)

*   **Subject Line:** Pre-filled; update `[Source Language] to [Target Language] for [Brief Description of Code]`.
*   **Section 1: Original Code (Source Language):**
    *   A fenced code block where the **user must paste the code to be translated, specifying the source language.**
*   **Section 2: Translation Requirements & Context:**
    *   `Source Programming Language & Version`.
    *   `Target Programming Language & Version`: **User must specify.**
    *   `Core Functionality to Preserve`.
    *   `Idiomatic Translation Preferred`.
    *   `Dependencies / Libraries (Source Language)`.
    *   `Target Environment (if relevant)`.
    *   `Specific Areas of Concern for Translation (Optional)`.
*   **Section 3: Request for Translated Code:**
    *   A pre-filled section outlining the desired characteristics of the translated code (functional equivalence, readability, idiomatic usage, comments for non-obvious choices).

This structure ensures the AI receives the original code and clear instructions about the target language and any specific considerations for the translation process.