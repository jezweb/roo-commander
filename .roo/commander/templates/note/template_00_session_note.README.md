# Template: template_00_session_note.md - Session General Note

## 1. Purpose

This template is for capturing general notes, observations, or ad-hoc information during an active user interaction session. These notes serve as flexible artifacts to record details that don't fit into more structured session artifacts like learnings, blockers, or decisions.

## 2. TOML Frontmatter Schema

This template typically has minimal TOML frontmatter, primarily for identification and linking:

*   `id` (String, Required, Auto-generated Format): Unique identifier for this note.
    *   *Format:* `NOTE-[BriefDescription]-[YYMMDDHHMMSS]`
    *   *Example:* `NOTE-InitialPlanningIdeas-240101120500`
*   `title` (String, Required): A brief, descriptive title for the note.
    *   *Example:* `"Initial Planning Ideas for Feature X"`
*   `created_date` (String, Required, Timestamp): Timestamp of note creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this note belongs to.
*   `tags` (Array of Strings, Optional): Keywords for discoverability.
    *   *Example:* `["planning", "feature-x", "brainstorming"]`

## 3. Markdown Body Structure

The Markdown body is free-form, allowing for flexible content such as:

*   Bulleted lists of ideas.
*   Quick observations.
*   Links to external resources.
*   Rough thoughts or questions to explore later.

## 4. Usage Guidelines

*   Use this template for miscellaneous notes taken during a session.
*   Store these notes in the `notes/` subdirectory of the relevant session folder (e.g., `.mdtm/sessions/[SessionID]/notes/`).
*   The `session_log.md` for the session should reference this note in its `related_artifacts` field.
*   For more structured information like decisions, learnings, or blockers, use their respective dedicated templates.
