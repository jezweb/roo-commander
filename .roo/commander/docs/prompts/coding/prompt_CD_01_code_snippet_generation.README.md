# Documentation: Prompt Template `prompt_CD_01_code_snippet_generation.md`

## 1. Purpose

This prompt template is designed to request the **generation of a functional code snippet** in a specified programming language for a particular, well-defined task or logic. It guides the user to provide essential details such as the programming language, the core task the code should perform, expected inputs and outputs, preferred libraries (if any), and basic error handling requirements.

The goal is to receive a clear, correct, and reasonably efficient code snippet that can be used as a starting point or a direct solution for a specific coding problem, helping to accelerate development tasks.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_01_code_snippet_generation.md](prompt_CD_01_code_snippet_generation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `request_python_csv_reader_snippet.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-CodeSnippetGen-PythonCSVRead-20250528060000`.
    *   `title`: Update to reflect the specific request, e.g., `"Code Snippet Request: Python CSV Reader Function"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with a `[Brief Description of Desired Functionality]`.
    *   **Crucially, in Section 1 ("Desired Functionality & Specifications"):**
        *   Specify the **Programming Language**.
        *   Clearly describe the **Core Task**.
        *   Detail any **Inputs** the code should accept.
        *   Detail the **Outputs** or expected results.
        *   Mention any **Key Libraries/Frameworks** to use or avoid.
        *   Outline basic **Error Handling** requirements.
        *   Optionally, add `Style/Context`.
    *   In Section 2 ("Example"), provide concrete examples of inputs and corresponding outputs, especially for more complex requests. This greatly improves the AI's understanding.
    *   Re-state the programming language in the final request paragraph.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the code snippet.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_01_code_snippet_generation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-CodeSnippetGen-[Language][FunctionShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-CodeSnippetGen-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this code snippet request.
    *   *Placeholder in template:* `"Code Snippet Generation Request"`
*   **`prompt_type` (String, Fixed):** `"generation_technical_code"`
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
    *   *Default in template:* `["prompt", "coding", "code_generation", "snippet", "scripting", "programming_assistance"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_01_code_snippet_generation.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_01_code_snippet_generation.md`)

*   **Subject Line:** Pre-filled; update `[Brief Description of Desired Functionality]`.
*   **Section 1: Desired Functionality & Specifications:**
    *   `Programming Language`: **User must specify.**
    *   `Core Task`: **User must describe clearly.**
    *   `Inputs (if any)`: User details expected inputs.
    *   `Outputs (Expected Result)`: User details expected outputs.
    *   `Key Libraries/Frameworks to Use (if specific)`.
    *   `Error Handling (Basic Requirements, if any)`.
    *   `Style/Context (Optional)`.
*   **Section 2: Example (Optional but Highly Recommended):**
    *   `Example Input`: Concrete input example.
    *   `Example Output`: Expected output for the example input.
*   **Request for Code Snippet:**
    *   A concluding paragraph re-stating the language and requesting the snippet with brief comments. The user typically does not modify this heavily beyond ensuring the language is correct.

This structured approach ensures the AI receives clear and specific instructions, increasing the likelihood of generating a correct and useful code snippet.