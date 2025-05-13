# Template: 38_session_snippet.md - Session Code Snippet

## 1. Purpose

This template is for capturing code snippets that are relevant to an active user interaction session. These could be examples, problematic code, proposed solutions, or reference code from existing projects or external sources.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this code snippet artifact.
    *   *Format:* `SNIPPET-[BriefDescription]-[YYMMDDHHMMSS]`
    *   *Example:* `SNIPPET-AuthFunctionExample-240101200000`
*   `title` (String, Required): A descriptive title for the code snippet.
    *   *Example:* `"Example Authentication Function in Python"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this snippet belongs to.
*   `language` (String, Optional): The programming language of the snippet (e.g., "python", "javascript", "java"). This helps with syntax highlighting.
*   `source_description` (String, Optional): Brief description of where the snippet came from (e.g., "Project X, auth_utils.py", "StackOverflow answer").
*   `tags` (Array of Strings, Optional): Keywords (e.g., "code", "python", "authentication", "example").

## 3. Markdown Body Structure

*   **`## Description / Purpose`**:
    *   Explain what the code snippet does or why it's relevant to the session.
*   **`## Code Snippet`**:
    *   The actual code, enclosed in a Markdown fenced code block with the language specified for syntax highlighting.
    *   Example:
        ```python
        def authenticate_user(username, password):
            # ... authentication logic ...
            return True
        ```
*   **`## Notes / Explanation`**:
    *   Any additional explanation, context, or discussion about the snippet.

## 4. Usage Guidelines

*   Use this to store and reference specific pieces of code relevant to the session.
*   Store these artifacts in the `artifacts/snippets/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact.
*   This is useful for discussions about code, debugging, or sharing examples.