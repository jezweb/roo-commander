# Template: template_00_session_context.md - Session General Context Item

## 1. Purpose

This template is for capturing general contextual items during an active user interaction session. These items can be diverse, including actual content (e.g., a small piece of data, a configuration setting), references to external files or URLs, or any other piece of information that provides relevant background or context for the session's activities.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this context item.
    *   *Format:* `CTX-[BriefDescription]-[YYMMDDHHMMSS]`
    *   *Example:* `CTX-UserAuthConfigSettings-240101230000`
*   `title` (String, Required): A brief, descriptive title for the context item.
    *   *Example:* `"User Authentication Configuration Settings"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this item belongs to.
*   `context_type` (String, Optional): Type of context.
    *   *Example:* `"Configuration", "Data Sample", "External Link", "User Preference", "System State"`
*   `source_description` (String, Optional): Where this context item originated from (e.g., "User input", "System query", "File: .env.example").
*   `tags` (Array of Strings, Optional): Keywords for discoverability.

## 3. Markdown Body Structure

*   **`## Context Item Details`**:
    *   The main content of the context item. This could be:
        *   Pasted data or configuration.
        *   A detailed description of an external resource.
        *   Notes about a specific system state.
*   **`## Relevance to Session`**:
    *   Explain why this context item is important for the current session.

## 4. Usage Guidelines

*   Use this for miscellaneous contextual information that doesn't fit other specific artifact types but is relevant to the session.
*   Store these artifacts in the `artifacts/context/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact.
*   This helps in preserving important background information that might be needed to understand the session's progression.