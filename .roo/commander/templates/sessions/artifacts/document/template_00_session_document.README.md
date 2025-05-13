# Template: template_00_session_document.md - Session Documentation Snippet

## 1. Purpose

This template is for capturing and referencing specific snippets of existing documentation (internal or external) that are relevant to an active user interaction session. This is useful for quickly pointing to key sections of manuals, guides, or specifications without copying large amounts of text into the session log.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this documentation snippet artifact.
    *   *Format:* `DOCSNIP-[SourceDescription]-[YYMMDDHHMMSS]`
    *   *Example:* `DOCSNIP-APIGuideAuthSection-240101160000`
*   `title` (String, Required): A descriptive title for the snippet.
    *   *Example:* `"API Authentication Guide - Token Usage Section"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this artifact belongs to.
*   `source_document_title` (String, Optional): The title of the source document from which the snippet is taken.
*   `source_url_or_path` (String, Optional): URL or workspace-relative path to the source document.
*   `section_or_page_reference` (String, Optional): Specific section, page number, or anchor link.
*   `tags` (Array of Strings, Optional): Keywords (e.g., "api", "authentication", "documentation", "reference").

## 3. Markdown Body Structure

The Markdown body should contain:

*   **`## Snippet / Excerpt`**:
    *   The actual quoted text snippet. Use Markdown blockquotes.
*   **`## Context / Relevance to Session`**:
    *   Explain why this particular snippet is important or relevant to the current session's work.
    *   How does it inform decisions, tasks, or understanding?

## 4. Usage Guidelines

*   Use this to highlight specific, relevant parts of larger documents.
*   Store these artifacts in the `artifacts/docs/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact.
*   This is preferred over copying large chunks of documentation into other notes, keeping session artifacts concise.