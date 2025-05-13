# Template: 42_session_deferred.md - Session Deferred Item

## 1. Purpose

This template is for capturing tasks, ideas, questions, or other items that arise during an active user interaction session but are intentionally deferred for later action or consideration. This helps ensure these items are not lost and can be picked up in a future session or task.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this deferred item.
    *   *Format:* `DEFERRED-[BriefDescription]-[YYMMDDHHMMSS]`
    *   *Example:* `DEFERRED-RefactorAuthModule-240101233000`
*   `title` (String, Required): A concise title for the deferred item.
    *   *Example:* `"Defer Refactoring of Authentication Module"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session where this item was deferred.
*   `deferred_item_type` (String, Optional): Type of item being deferred.
    *   *Options:* `"Task"`, `"Idea"`, `"Question"`, `"Research"`, `"Bug"`
*   `reason_for_deferral` (String, Optional): Brief explanation why the item is being deferred (e.g., "Out of scope for current session", "Requires further input", "Lower priority").
*   `estimated_effort` (String, Optional): Rough estimate of effort if it's a task (e.g., "Small", "Medium", "Large", "2 hours").
*   `potential_assignee_or_mode` (String, Optional): Suggested mode or person to handle this later.
*   `tags` (Array of Strings, Optional): Keywords (e.g., "deferred", "refactor", "future-task", "planning").

## 3. Markdown Body Structure

*   **`## Deferred Item Description`**:
    *   Detailed description of the task, idea, question, etc.
*   **`## Reason for Deferral`**:
    *   Elaborate on `reason_for_deferral`.
*   **`## Context / Background`**:
    *   Provide any necessary background or context from the original session that would be helpful when revisiting this item.
*   **`## Potential Next Steps (When Re-addressed)`**:
    *   Initial thoughts on how to approach this item when it's picked up again.

## 4. Usage Guidelines

*   Use this to formally log items that won't be addressed in the current session but shouldn't be forgotten.
*   Store these artifacts in the `artifacts/deferred/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact.
*   These items can be reviewed periodically to be scheduled into new tasks or sessions.