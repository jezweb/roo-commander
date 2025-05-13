# Session Artifacts: Environment

## Purpose

This directory stores **details about the system, setup, or configuration relevant to the parent session**.

These artifacts capture key information like decisions, learnings, environment details, research findings, code snippets, errors, etc., providing richer context beyond the main session log.

See the main guidelines document for details on standard artifact types and their purpose:
[.ruru/docs/standards/session_artifact_guidelines_v1.md](/.ruru/docs/standards/session_artifact_guidelines_v1.md)

## File Naming Convention

Files should generally follow the convention: `ENV-[Topic]-[YYMMDDHHMM].md`

*   `[TYPE_PREFIX]`: `ENV` for this directory.
*   `[Topic]`: A short, descriptive, filesystem-safe topic (e.g., `db_schema_v2`, `dependency_versions`).
*   `[YYMMDDHHMM]`: Timestamp of creation.
*   `[ext]`: `.md` is recommended.

**Consult the main guidelines document linked above for the specific prefix and conventions recommended for this directory.**

## Recommended Templates

If applicable, use the relevant TOML+MD template from `/.ruru/templates/toml-md/` (e.g., `33_session_environment.md`).

## Usage

*   Create artifacts here as needed during the session.
*   Ensure the artifact file path (relative to the session directory, e.g., `artifacts/environment/ENV-db_schema_v2-2506050100.md`) is added to the `related_artifacts` array in the main `session_log.md`.

## User Contribution

Users can manually add relevant files to this directory, following the naming conventions specified in the main guidelines document.