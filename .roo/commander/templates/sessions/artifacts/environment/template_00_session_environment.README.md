# Template: template_00_session_environment.md - Session Environment Detail

## 1. Purpose

This template is used to document specific details about the environment, tools, systems, or components relevant to an active user interaction session. This can include versions, configurations, access details (placeholders for secrets), or any other environmental context crucial for understanding or reproducing the session's work.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this environment note.
    *   *Format:* `ENV-[ComponentName]-[YYMMDDHHMMSS]`
    *   *Example:* `ENV-APIServerConfig-240101153000`
*   `title` (String, Required): A descriptive title for the environment detail.
    *   *Example:* `"API Server Configuration Details for Staging"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this note belongs to.
*   `component_name` (String, Optional): The specific system, tool, or component being described.
*   `version` (String, Optional): Version number of the component, if applicable.
*   `tags` (Array of Strings, Optional): Keywords (e.g., "staging", "api", "database", "configuration").

## 3. Markdown Body Structure

The Markdown body should provide the specific details:

*   **`## Component/System Description`**:
    *   Briefly describe the component or aspect of the environment.
*   **`## Configuration Details`**:
    *   List key configuration parameters, settings, or values.
    *   **Security Note:** Do NOT store actual secrets (passwords, API keys) here. Use placeholders like `{{API_KEY_STAGING}}` and refer to a secure secret management system.
*   **`## Access Information (If Applicable)`**:
    *   Endpoints, URLs, connection strings (with placeholders for secrets).
*   **`## Notes / Relevance to Session`**:
    *   Explain why this environmental detail is important for the current session.

## 4. Usage Guidelines

*   Use this to capture static or slowly changing environmental context that is critical for the session.
*   Store these artifacts in the `artifacts/environment/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact.
*   This helps in reproducing setups or understanding dependencies.