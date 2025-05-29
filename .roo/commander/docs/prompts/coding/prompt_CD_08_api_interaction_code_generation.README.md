# Documentation: Prompt Template `prompt_CD_08_api_interaction_code_generation.md`

## 1. Purpose

This prompt template is designed to request the **generation of a code snippet for interacting with a specific API endpoint**. It guides the user to provide details such as the programming language, preferred HTTP library/method, API base URL, endpoint path, HTTP method, required headers, path/query parameters, request body structure (if applicable), and basic error handling needs.

The goal is to receive a functional code snippet that correctly makes the specified API request, handles the response at a basic level, and includes necessary error checking, accelerating the development of API integration tasks.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_08_api_interaction_code_generation.md](prompt_CD_08_api_interaction_code_generation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `generate_code_python_post_user_api.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-APICallGen-PyPostUser-20250528130000`.
    *   `title`: Update to reflect the specific request, e.g., `"API Code Gen: Python POST to /users"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[HTTP Method] to [Endpoint Path] for [Brief Purpose]`.
    *   **Crucially, in Section 1 ("API Interaction Specifications"):**
        *   Specify the `Programming Language & Key Library/Method`.
        *   Provide `Base URL` (or indicate placeholder).
        *   Define the `Endpoint Path` and `HTTP Method`.
        *   List any `Request Headers`.
        *   Detail `Path Parameters` and `Query Parameters` if used.
        *   Describe and exemplify the `Request Body` for methods like POST, PUT, PATCH.
        *   Briefly describe the `Expected Success Response`.
        *   Specify `Basic Error Handling` requirements.
    *   Optionally, provide `Example Usage Context` in Section 2.
    *   Re-state the language and library in the final request paragraph.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the API interaction code.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_08_api_interaction_code_generation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-APICallGen-[Language][Method][EndpointShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-APICallGen-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this API interaction code request.
    *   *Placeholder in template:* `"API Interaction Code Generation Request"`
*   **`prompt_type` (String, Fixed):** `"generation_technical_code_api"`
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
    *   *Default in template:* `["prompt", "coding", "api_interaction", "http_request", "rest_api", "fetch", "axios", "requests_python"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_08_api_interaction_code_generation.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_08_api_interaction_code_generation.md`)

*   **Subject Line:** Pre-filled; update `[HTTP Method] to [Endpoint Path] for [Brief Purpose]`.
*   **Section 1: API Interaction Specifications:**
    *   `Programming Language & Key Library/Method`: **User must specify.**
    *   `Base URL`.
    *   `Endpoint Path`: **User must specify.**
    *   `HTTP Method`: **User must specify.**
    *   `Request Headers`.
    *   `Path Parameters`.
    *   `Query Parameters`.
    *   `Request Body` (for POST, PUT, PATCH): **Crucial for these methods.**
    *   `Expected Success Response`.
    *   `Basic Error Handling`.
*   **Section 2: Example Usage Context (Optional):**
    *   Brief description of where the code will be used.
*   **Section 3: Request for Code Snippet:**
    *   A pre-filled section outlining the desired characteristics of the generated code (correct construction, headers, body, response handling, error handling, comments).

This structure ensures the AI receives all necessary details about the API endpoint and desired interaction to generate a relevant and functional code snippet.