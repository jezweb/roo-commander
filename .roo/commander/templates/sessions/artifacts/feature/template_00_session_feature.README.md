# Template: template_00_session_feature.md - Session Feature-Specific Note

## 1. Purpose

This template is for capturing notes, ideas, requirements, or discussions specifically related to a particular feature or component being worked on or discussed during an active user interaction session. It helps organize feature-related thoughts separately from general session notes.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this feature note.
    *   *Format:* `FEATNOTE-[FeatureName]-[YYMMDDHHMMSS]`
    *   *Example:* `FEATNOTE-UserProfilePage-240101220000`
*   `title` (String, Required): A descriptive title for the feature note.
    *   *Example:* `"Notes on User Profile Page - Avatar Upload Requirements"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this note belongs to.
*   `feature_name_or_id` (String, Optional): Name or identifier of the feature being discussed.
*   `aspect_discussed` (String, Optional): Specific aspect of the feature (e.g., "UI/UX", "API Integration", "Database Schema", "Validation Logic").
*   `tags` (Array of Strings, Optional): Keywords (e.g., "feature", "user-profile", "requirements", "ui").

## 3. Markdown Body Structure

The Markdown body is flexible but should focus on the specific feature:

*   **`## Feature / Component`**:
    *   Identify the feature or component clearly.
*   **`## Aspect / Topic`**:
    *   Specify the particular aspect being noted (e.g., `aspect_discussed`).
*   **`## Notes / Discussion Points / Requirements`**:
    *   Detailed notes, brainstorming, user stories, acceptance criteria snippets, questions, or discussion points related to this feature aspect.
*   **`## Related Artifacts / Links`**:
    *   Links to other relevant session artifacts, design documents, mockups, or external resources.

## 4. Usage Guidelines

*   Use this to keep feature-specific discussions and notes organized.
*   Store these artifacts in the `artifacts/features/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact.
*   This can be particularly useful when a session touches upon multiple features or complex aspects of a single feature.