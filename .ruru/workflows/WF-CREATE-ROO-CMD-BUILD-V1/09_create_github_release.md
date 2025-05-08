+++
# --- Step Metadata ---
step_id = "WF-CREATE-ROO-CMD-BUILD-V1-09-CREATE-GITHUB-RELEASE"
title = "Step 09: Create GitHub Release"
description = """
Creates a new release on GitHub, uploads the packaged artifact, and publishes the release notes.
"""

# --- Flow Control ---
depends_on = ["WF-CREATE-ROO-CMD-BUILD-V1-08-GENERATE-RELEASE-NOTES"]
next_step = "10_notify_stakeholders.md"
error_step = "EE_handle_github_release_error.md"

# --- Execution ---
delegate_to = "lead-devops" # Or a more specific GitHub specialist if available

# --- Interface ---
inputs = [
    "Output from step WF-CREATE-ROO-CMD-BUILD-V1-01-VALIDATE-PARAMS: validated_build_params", # Contains version, repo info
    "Output from step WF-CREATE-ROO-CMD-BUILD-V1-05-PACKAGE-ARTIFACTS: packaged_artifact_paths", # Array of paths
    "Output from step WF-CREATE-ROO-CMD-BUILD-V1-08-GENERATE-RELEASE-NOTES: release_notes_path",
    "Output from step WF-CREATE-ROO-CMD-BUILD-V1-08-GENERATE-RELEASE-NOTES: generate_notes_status" # Prerequisite
]
outputs = [
    "github_release_url: URL of the created GitHub release.",
    "github_release_status: Success or Failure.",
]

# --- Housekeeping ---
last_updated = "2025-08-05"
template_schema_doc = ".ruru/templates/toml-md/25_workflow_step_standard.md"
+++

# Step 09: Create GitHub Release

## Actions

1.  **Receive Context:** Get `validated_build_params` (especially `version`, `create_github_release`, `github_owner`, `github_repo_name`), `packaged_artifact_paths` (array), `release_notes_path`, and `generate_notes_status`.
2.  **Check Prerequisite:**
    *   If `generate_notes_status` is Failure, immediately skip to `EE_handle_github_release_error.md`.
    *   If `validated_build_params.create_github_release` is `false`, set `github_release_status` to "Skipped" and proceed to `next_step`.
3.  **Read Release Notes:** Read the content of the `release_notes_path` file.
4.  **Create GitHub Release (using `gh` CLI):**
    *   This step uses the `gh` command-line tool to create the release. Ensure `gh` is authenticated and available in the execution environment.
    *   The `owner` and `repo_name` must be available from `validated_build_params` (e.g., `validated_build_params.github_owner`, `validated_build_params.github_repo_name`).
    *   **Tool:** `execute_command`
        *   `command`: `gh release create ${validated_build_params.version} -R ${validated_build_params.github_owner}/${validated_build_params.github_repo_name} --title "Release ${validated_build_params.version}" --notes-file ${release_notes_path} --draft=false --prerelease=false`
        *   Ensure variables like `${validated_build_params.version}`, `${validated_build_params.github_owner}`, `${validated_build_params.github_repo_name}`, and `${release_notes_path}` are correctly substituted by the workflow engine.

5.  **Upload Artifacts (using `gh` CLI):**
    *   If release creation was successful, this step uses the `gh` command-line tool to upload each packaged artifact from the `packaged_artifact_paths` array.
    *   **For each `artifact_path` in `packaged_artifact_paths`:**
        *   **Tool:** `execute_command`
        *   `command`: `gh release upload ${validated_build_params.version} -R ${validated_build_params.github_owner}/${validated_build_params.github_repo_name} ${artifact_path}`
        *   Ensure variables are correctly substituted by the workflow engine for each iteration.
6.  **Set Status:** Set `github_release_status` to Success if all GitHub operations complete, otherwise Failure.
7.  **Prepare Output:** Provide `github_release_url` (from `create_release` output) and `github_release_status`.

## Acceptance Criteria

*   Step proceeds only if `generate_notes_status` was Success and `create_github_release` is true.
*   GitHub release is created with the correct tag, name, and body.
*   All packaged build artifacts from `packaged_artifact_paths` are uploaded to the GitHub release.
*   `github_release_url` and `github_release_status` are accurately provided.

## Error Handling

*   If prerequisite checks fail, proceed to `EE_handle_github_release_error.md`.
*   If any GitHub MCP tool call fails, set `github_release_status` to Failure and proceed to `EE_handle_github_release_error.md`.