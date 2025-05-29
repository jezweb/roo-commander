# Documentation: Prompt Template `prompt_CD_03_debugging_assistance_error_analysis.md`

## 1. Purpose

This prompt template is designed to request **assistance with debugging problematic code and analyzing error messages**. It guides the user to provide the relevant code snippet, the full error message and stack trace (if available), a description of the observed versus expected behavior, and the programming language/environment.

The goal is to receive a clear explanation of the probable cause of the error or unexpected behavior, and actionable suggestions (including corrected code snippets) on how to fix the issue. It can also solicit advice on preventative measures or best practices.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_03_debugging_assistance_error_analysis.md](prompt_CD_03_debugging_assistance_error_analysis.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `debug_python_keyerror_in_dict_processing.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-DebuggingHelp-PyKeyError-20250528080000`.
    *   `title`: Update to reflect the specific problem, e.g., `"Debugging Help: Python KeyError in Dictionary Processing"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with a `[Brief Description of Problem/Error] in [Language/File]`.
    *   **Crucially, in Section 1 ("Code Snippet Causing Issues"):**
        *   **Paste the RELEVANT code snippet** into the fenced code block, specifying the language.
    *   **In Section 2 ("Error Message & Stack Trace"):**
        *   **Paste the FULL error message and stack trace** if an error is occurring. This is very important.
    *   In Section 3 ("Problem Description & Context"):
        *   Specify the `Programming Language & Environment`.
        *   Clearly describe the `Observed Behavior` and `Expected Behavior`.
        *   List `Steps to Reproduce` if needed.
        *   Optionally, mention `What You've Tried So Far`.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to get debugging assistance.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_03_debugging_assistance_error_analysis.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-DebuggingHelp-[Language][ErrorTypeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-DebuggingHelp-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this debugging request.
    *   *Placeholder in template:* `"Debugging Assistance & Error Analysis Request"`
*   **`prompt_type` (String, Fixed):** `"assistance_technical_code_debug"`
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
    *   *Default in template:* `["prompt", "coding", "debugging", "error_analysis", "troubleshooting", "code_fix"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_03_debugging_assistance_error_analysis.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_03_debugging_assistance_error_analysis.md`)

*   **Subject Line:** Pre-filled; update `[Brief Description of Problem/Error] in [Language/File]`.
*   **Section 1: Code Snippet Causing Issues:**
    *   A fenced code block where the **user must paste the relevant code causing problems.**
*   **Section 2: Error Message & Stack Trace (if applicable):**
    *   A text block where the **user must paste the full error message and stack trace.**
*   **Section 3: Problem Description & Context:**
    *   `Programming Language & Environment`.
    *   `Observed Behavior`: **Crucial for understanding the issue.**
    *   `Expected Behavior`: **Crucial for defining success.**
    *   `Steps to Reproduce (if not obvious)`.
    *   `What You've Tried So Far (Optional)`.
*   **Section 4: Request for Debugging Assistance:**
    *   A pre-filled section outlining what the user seeks: probable cause, explanation, suggested fixes, and preventative measures.

This structured approach ensures the AI receives all necessary information (code, error, context) to provide effective debugging help.