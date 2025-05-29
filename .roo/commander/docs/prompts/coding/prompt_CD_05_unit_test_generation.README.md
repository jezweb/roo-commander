
---

Next, the `README.md` file for this prompt template:

---
**File: `prompt_CD_05_unit_test_generation.README.md`**
```markdown
# Documentation: Prompt Template `prompt_CD_05_unit_test_generation.md`

## 1. Purpose

This prompt template is designed to request the **generation of unit tests for a provided piece of code** (function, method, class, or module). It guides the user to supply the code to be tested, specify the programming language, the desired testing framework/library, key functionalities to cover, and any relevant edge cases or mocking/stubbing needs.

The goal is to receive a well-structured set of unit tests that help ensure the correctness and reliability of the code, covering various scenarios and assertions. This can significantly speed up the test creation process.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_05_unit_test_generation.md](prompt_CD_05_unit_test_generation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `generate_tests_for_js_discount_func.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-UnitTestGen-JSDiscountFunc-20250528100000`.
    *   `title`: Update to reflect the specific request, e.g., `"Unit Test Generation: JavaScript Discount Function"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Function/Method/Class Name] in [Language]`.
    *   **Crucially, in Section 1 ("Code to be Tested"):**
        *   **Paste the EXACT code snippet** for which you want unit tests into the fenced code block, specifying the language.
    *   In Section 2 ("Testing Context & Requirements"):
        *   Specify the `Programming Language & Version`.
        *   State the desired `Testing Framework/Library` (or ask for a suggestion).
        *   List `Key Functionalities to Test`.
        *   Mention any `Edge Cases to Consider`.
        *   Describe `Mocking/Stubbing Needs` if any.
        *   Optionally, specify `Desired Test Structure/Style`.
    *   Re-state the testing framework and language in the final request paragraph.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the unit tests.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_05_unit_test_generation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-UnitTestGen-[Language][FunctionShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-UnitTestGen-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this unit test generation request.
    *   *Placeholder in template:* `"Unit Test Generation Request"`
*   **`prompt_type` (String, Fixed):** `"generation_technical_code_test"`
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
    *   *Default in template:* `["prompt", "coding", "unit_testing", "test_generation", "jest", "pytest", "junit", "software_quality"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_05_unit_test_generation.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_05_unit_test_generation.md`)

*   **Subject Line:** Pre-filled; update `[Function/Method/Class Name] in [Language]`.
*   **Section 1: Code to be Tested:**
    *   A fenced code block where the **user must paste the code for which tests are needed.**
*   **Section 2: Testing Context & Requirements:**
    *   `Programming Language & Version`.
    *   `Testing Framework/Library`: **User must specify or ask for a suggestion.**
    *   `Key Functionalities to Test`: **Crucial for guiding test case generation.**
    *   `Edge Cases to Consider`.
    *   `Mocking/Stubbing Needs (if any)`.
    *   `Desired Test Structure/Style (Optional)`.
*   **Section 3: Request for Unit Tests:**
    *   A pre-filled section outlining the desired characteristics of the generated tests (coverage, assertions, structure, setup/teardown).

This structure ensures the AI receives the code to be tested and clear requirements for the unit tests, leading to more relevant and useful test code generation.