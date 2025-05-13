# Session Artifacts: Context

## Purpose

This directory stores **relevant contextual information for the parent session, which can include actual context files (e.g., text, data, configuration snippets) or references/links to external resources** (URLs, file paths outside the session).

These artifacts capture key information like decisions, learnings, environment details, research findings, code snippets, errors, etc., providing richer context beyond the main session log.

See the main guidelines document for details on standard artifact types and their purpose:
[`.roo/rules/03-session-management-standard.md`](.roo/rules/03-session-management-standard.md)

## File Naming Convention

Files should generally follow the convention: `CONTEXT-[Topic]-[YYMMDDHHMM].[ext]`

*   `[TYPE_PREFIX]`: `CONTEXT` for this directory.
*   `[Topic]`: A short, descriptive, filesystem-safe topic (e.g., `api_schema_v1`, `external_docs_list`, `input_data_sample`).
*   `[YYMMDDHHMM]`: Timestamp of creation.
*   `[ext]`: Appropriate file extension (e.g., `.md`, `.json`, `.txt`, `.yaml`).

**Consult the main guidelines document linked above for the specific prefix and conventions recommended for this directory.**

## Recommended Templates

If applicable, use the relevant TOML+MD template from [` .roo/commander/templates/sessions/artifacts/`](.roo/commander/templates/sessions/artifacts/) (e.g., [`template_00_session_context.md`](.roo/commander/templates/sessions/artifacts/context/template_00_session_context.md) if a specific template for context items is created). For simple text or data files, a template might not be necessary.

## Usage

*   Create or place artifacts here as needed during the session.
*   Ensure the artifact file path (relative to the session directory, e.g., `artifacts/context/CONTEXT-api_schema_v1-2506050100.json`) is added to the `related_artifacts` array in the main `session_log.md`.

## User Contribution

Users can manually add relevant files to this directory, following the naming conventions specified in the main guidelines document.