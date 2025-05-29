
---

Next, the `README.md` file for this prompt template:

---
**File: `prompt_CD_07_regex_generation_explanation.README.md`**
```markdown
# Documentation: Prompt Template `prompt_CD_07_regex_generation_explanation.md`

## 1. Purpose

This prompt template is designed to request assistance with **generating a new regular expression (regex) based on a described pattern, or explaining an existing regex**. It guides the user to specify whether they need generation or explanation, provide the necessary details (pattern description and examples for generation; the regex itself for explanation), and any context like regex flavor or specific requirements.

The goal is to receive a correct regex (for generation requests) and/or a clear, component-by-component explanation of how a regex functions, making these powerful but often cryptic tools more accessible.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_07_regex_generation_explanation.md](prompt_CD_07_regex_generation_explanation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `generate_regex_for_url_extraction.md` or `explain_complex_log_parser_regex.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-RegexGenExplain-URLExtract-20250528120000`.
    *   `title`: Update to reflect the specific request, e.g., `"Regex Generation: URL Extraction"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Generate/Explain] for [Brief Description of Pattern/Regex]`.
    *   Specify the **Request Type**: `"Generate a new regex"` OR `"Explain an existing regex"`.
    *   **If Generating (Section 1):**
        *   Clearly describe the `Pattern to Match/Validate`.
        *   Provide diverse `Examples of Strings that SHOULD Match`.
        *   Provide `Examples of Strings that SHOULD NOT Match` (especially for validation).
        *   Specify `Regex Flavor/Engine` if known.
        *   Detail any `Specific Requirements` (case sensitivity, capture groups, etc.).
    *   **If Explaining (Section 2):**
        *   **Paste the EXACT regular expression** into the fenced code block.
        *   Optionally, provide `Context of Use`.
    *   Adjust the final request paragraph based on whether generating or explaining.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_07_regex_generation_explanation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-RegexGenExplain-[PurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-RegexGenExplain-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this regex request.
    *   *Placeholder in template:* `"Regular Expression Generation & Explanation Request"`
*   **`prompt_type` (String, Fixed):** `"generation_explanation_technical_regex"`
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
    *   *Default in template:* `["prompt", "coding", "regex", "regular_expression", "pattern_matching", "text_processing", "data_validation"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_07_regex_generation_explanation.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_07_regex_generation_explanation.md`)

*   **Subject Line:** Pre-filled; update `[Generate/Explain] for [Brief Description of Pattern/Regex]`.
*   **Request Type:** User specifies "Generate a new regex" OR "Explain an existing regex".
*   **Section 1: Details for Regex Generation (Used if generating):**
    *   `Pattern to Match/Validate`: **Crucial for defining the regex's purpose.**
    *   `Examples of Strings that SHOULD Match`: **Essential for testing and clarity.**
    *   `Examples of Strings that SHOULD NOT Match`: Important for validation regexes.
    *   `Regex Flavor/Engine`.
    *   `Specific Requirements`.
*   **Section 2: Regex for Explanation (Used if explaining):**
    *   A fenced code block where the **user must paste the regex to be explained.**
    *   `Context of Use (Optional)`.
*   **Section 3: Request:**
    *   Tailored instructions based on whether generating or explaining, requesting the regex, a step-by-step breakdown, and optionally, usage examples.

This structure ensures the AI receives clear instructions and all necessary information for either generating a new regex with an explanation or explaining an existing one.