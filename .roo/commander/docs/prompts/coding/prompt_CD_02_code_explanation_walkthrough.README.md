# Documentation: Prompt Template `prompt_CD_02_code_explanation_walkthrough.md`

## 1. Purpose

This prompt template is designed to request a **detailed explanation and walkthrough of a provided piece of code** (snippet, function, class, or module). It guides the user to supply the code itself, specify the programming language, and provide any relevant context, such as the code's source, its general purpose, or specific areas of confusion.

The goal is to receive a clear, step-by-step explanation of what the code does, how it works, the concepts it employs, and potentially, its assumptions or edge cases. This is useful for understanding unfamiliar code, debugging, or learning.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_02_code_explanation_walkthrough.md](prompt_CD_02_code_explanation_walkthrough.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `explain_python_data_parser_function.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-CodeExplanation-PyDataParse-20250528070000`.
    *   `title`: Update to reflect the specific request, e.g., `"Code Explanation Request: Python Data Parser Function"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with a `[Brief Description of Code or its Source]`.
    *   **Crucially, in Section 1 ("Code for Explanation"):**
        *   **Paste the EXACT code snippet** you want explained into the fenced code block.
        *   Specify the language in the fence (e.g., ```python).
    *   In Section 2 ("Context (If Necessary)"):
        *   Confirm the `Programming Language`.
        *   Provide `Source/Purpose` if known.
        *   List any `Specific Questions or Areas of Confusion`.
        *   Indicate the `Desired Level of Detail`.
    *   Adjust the final request paragraph if needed, particularly the assumed familiarity level.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to receive the code explanation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_02_code_explanation_walkthrough.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-CodeExplanation-[Language][PurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-CodeExplanation-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this code explanation request.
    *   *Placeholder in template:* `"Code Explanation & Walkthrough Request"`
*   **`prompt_type` (String, Fixed):** `"explanation_technical_code"`
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
    *   *Default in template:* `["prompt", "coding", "code_explanation", "code_review", "debugging", "learning_code"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_02_code_explanation_walkthrough.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_02_code_explanation_walkthrough.md`)

*   **Subject Line:** Pre-filled; update `[Brief Description of Code or its Source]`.
*   **Section 1: Code for Explanation:**
    *   A fenced code block where the **user must paste the code to be explained.** The language should be specified in the fence.
*   **Section 2: Context (If Necessary):**
    *   `Programming Language`: Confirmation of the language.
    *   `Source/Purpose (if known)`: Helps AI understand intent.
    *   `Specific Questions or Areas of Confusion`: Allows user to guide the explanation.
    *   `Desired Level of Detail`: Helps tailor the explanation's depth.
*   **Section 3: Request for Explanation:**
    *   A pre-filled section outlining the desired components of the explanation (Overall Purpose, Inputs/Outputs, Step-by-Step Walkthrough, Key Concepts, Edge Cases). The user can adjust the final sentence to specify their familiarity level.

This structure ensures the AI receives the code and sufficient context to provide a clear, targeted, and helpful explanation.