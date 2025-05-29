# Documentation: Prompt Template `prompt_07_api_design_documentation_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an API's design and its accompanying documentation**. It guides the user to provide links to or details about the API specification, documentation, and key functionalities. The critiquing AI is then directed to analyze aspects such as design principles (e.g., RESTfulness), clarity, consistency, ease of use (Developer Experience - DX), documentation completeness, error handling, security, and versioning.

The goal is to receive actionable feedback to improve both the API's technical design and the quality of its documentation, ultimately creating a better experience for developers who consume the API.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_07_api_design_documentation_critique.md](prompt_07_api_design_documentation_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_product_api_v2_design_docs.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-APIDesignDocs-ProductAPIv2-20250526160000`.
    *   `title`: Update to reflect the specific API, e.g., `"API Design & Docs Critique: Product Service API v2"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of Your API]`.
    *   In Section 1 ("API Overview & Purpose"), provide context about the API's goals, target consumers, type, and domain.
    *   **Crucially, in Section 2 ("API Design & Documentation Details"):**
        *   Provide a **direct link to the API documentation/specification**. This is the primary artifact for critique.
        *   Optionally, list key resources/endpoints for focused review.
        *   Describe authentication, rate limiting, pagination, and versioning strategies.
        *   Optionally, provide an example request/response.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_07_api_design_documentation_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-APIDesignDocs-[APINameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-APIDesignDocs-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"API Design & Documentation Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"api_design_documentation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "api", "api_design", "api_documentation", "rest_api", "graphql", "developer_experience"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_07_api_design_documentation_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_07_api_design_documentation_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name of Your API]`.
*   **Section 1: API Overview & Purpose:**
    *   `Primary Goal(s)`: API's objective.
    *   `Target Consumers`: Who uses the API.
    *   `Type of API`: e.g., REST, GraphQL.
    *   `Core Domain/Business Area`: Context of the API.
*   **Section 2: API Design & Documentation Details:**
    *   `Link to API Documentation / Specification`: **Crucial for the AI to access the details.**
    *   `Key Resources/Endpoints & Functionalities` (Optional, for focus).
    *   `Authentication & Authorization Mechanisms`.
    *   `Rate Limiting & Pagination Strategies`.
    *   `Versioning Strategy`.
    *   `Example Request & Response` (Optional).
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Design Principles & Conventions," "Clarity & Consistency," "Ease of Use & Developer Experience (DX)," "Completeness & Accuracy of Documentation," "Error Handling," "Security," and "Examples & Tutorials in Documentation." The user typically does not modify this section.

This comprehensive structure ensures the AI reviews both the API's underlying design and the quality of its developer-facing documentation.