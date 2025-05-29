# Documentation: Prompt Template `prompt_03_json_schema_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a JSON data structure or a formal JSON Schema**. It guides the user to provide the JSON snippet or schema, along with its context of use, and then directs the critiquing AI to analyze aspects like clarity, efficiency, completeness, maintainability, and adherence to best practices.

The goal is to receive actionable feedback to improve the design, robustness, and usability of the JSON structure or schema.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_03_json_schema_critique.md](prompt_03_json_schema_critique.md)` to your working directory or the location where you'll prepare the critique request.
2.  **Rename File (Instance):** Rename the copied file descriptively for your specific critique session (e.g., `critique_request_user_profile_json_v2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter of your new instance file.
    *   `id`: Generate a unique ID for this specific prompt usage, e.g., `PROMPT-Critique-JSONSchema-UserProfile-20250526120000`.
    *   `title`: Update to reflect the specific JSON structure/schema being critiqued, e.g., `"JSON Structure Critique: User Profile Data"`.
    *   `created_date` and `last_updated`: Set to the current date/timestamp.
    *   `authors`: Add your name or mode slug.
    *   Adjust `tags` if needed.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   In the main Markdown body of the prompt:
        *   Update the `Subject` line with the `[Name/Purpose of the JSON]`.
        *   **Crucially, in Section 1 ("JSON Structure / Schema Details"), paste your actual JSON example or JSON Schema into the provided code block.**
        *   In Section 2 ("Context of Use"), fill in the details about how and where this JSON is used.
    *   The more context provided, especially regarding the use case, the more relevant the critique will be.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model you are using for the critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_03_json_schema_critique.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Critique-JSONSchema-[SpecificJSONName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-JSONSchema-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"JSON Structure/Schema Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** Type of prompt.
    *   *Value:* `"critique_and_improvement"`
*   **`domain` (String, Fixed):** Primary domain of the prompt.
    *   *Value:* `"data_structures_json"`
*   **`version` (String, Required):** Version of the prompt template itself.
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "json", "json_schema", "data_modeling", "api_design"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_03_json_schema_critique.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_03_json_schema_critique.md`)

The Markdown body of the prompt instance is structured as follows:

*   **Subject Line:** Pre-filled, but the `[Name/Purpose of the JSON]` placeholder needs to be updated.
*   **Section 1: JSON Structure / Schema Details:**
    *   A code block where the user **must paste their JSON example or JSON Schema**.
*   **Section 2: Context of Use:**
    *   `Primary Use Case(s)`: User describes how the JSON is used.
    *   `Key Consumers/Producers`: User identifies who/what interacts with the JSON.
    *   `Expected Data Volume/Frequency`: User provides scale information.
    *   `Existing conventions or standards`: User notes any relevant standards.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   This section is pre-filled with detailed questions categorized by aspects (A-H) like "Clarity & Readability," "Efficiency & Performance," "Extensibility & Maintainability," etc. The user does not typically modify this section.

This structure ensures the critiquing AI receives the actual data structure and its operational context, enabling a focused and practical review.