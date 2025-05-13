# Session Artifacts: Questions

## Purpose

This directory stores **specific questions raised during the parent session** (for users, other modes, or future investigation).

These artifacts capture key information like decisions, learnings, environment details, research findings, code snippets, errors, etc., providing richer context beyond the main session log.

See the main guidelines document for details on standard artifact types and their purpose:
[.ruru/docs/standards/session_artifact_guidelines_v1.md](/.ruru/docs/standards/session_artifact_guidelines_v1.md)

## File Naming Convention

Files should generally follow the convention: `QUESTION-[Topic]-[YYMMDDHHMM].md`

*   `[TYPE_PREFIX]`: `QUESTION` for this directory.
*   `[Topic]`: A short, descriptive, filesystem-safe topic (e.g., `clarify_api_response`, `user_intent_for_feature_x`).
*   `[YYMMDDHHMM]`: Timestamp of creation.
*   `[ext]`: `.md` is recommended.

**Consult the main guidelines document linked above for the specific prefix and conventions recommended for this directory.**

## Recommended Templates

If applicable, use the relevant TOML+MD template from `/.ruru/templates/toml-md/` (e.g., `37_session_qna.md`).

## Usage

*   Create artifacts here as needed during the session.
*   Ensure the artifact file path (relative to the session directory, e.g., `artifacts/questions/QUESTION-clarify_api_response-2506050100.md`) is added to the `related_artifacts` array in the main `session_log.md`.

## User Contribution

Users can manually add relevant files to this directory, following the naming conventions specified in the main guidelines document.