+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-710"
title = "Implement linking of commits/PRs to `related_commits`/`related_prs` fields"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-007"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing integration logic
# reporter = "..."
priority = "▶️ Medium" # Provides traceability
# estimated_effort = "S" # Small - Primarily updating TOML array field
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["integration", "git", "github", "commit", "pr", "linking", "automation", "cle", "traceability"]
related_docs = ["DOC-GITHUB-SPEC-001", "DOC-SCHEMA-001", "TASK-IM-701", "TASK-IM-709"]
depends_on = ["TASK-IM-709", "TASK-IM-108"] # Depends on commit scanner and CLE Task update logic
# related_commits = [] # This task implements adding to this field
# related_prs = [] # This task implements adding to this field
# related_issues = []
+++

# Task: Implement linking of commits/PRs to `related_commits`/`related_prs` fields

## Description ✍️

Implement the logic within the Integration Layer (`TASK-IM-701`) or Core Logic Engine (CLE) to automatically update the `related_commits` or `related_prs` array field in an IntelliManage artifact's TOML frontmatter when a relevant Git commit or GitHub Pull Request is identified by the scanner (`TASK-IM-709`) or potentially via GitHub webhooks/API polling.

This involves:
1.  Receiving the structured reference data (artifact ID, commit SHA or PR URL/ID, project slug) from the scanner or event handler.
2.  Calling the CLE's `updateArtifact` method for the specified artifact ID.
3.  Providing the commit SHA or PR identifier to be added to the appropriate array field (`related_commits` or `related_prs`).
4.  Ensuring the update logic correctly appends the new reference to the array, avoiding duplicates.

## Acceptance Criteria ✅

*   - [ ] Logic exists to receive structured reference data (artifact ID, commit SHA/PR ID, project slug).
*   - [ ] The logic correctly identifies the target artifact ID and project slug.
*   - [ ] The logic correctly identifies whether the reference is a commit or a PR.
*   - [ ] The logic correctly calls `CLE.updateArtifact` for the target artifact.
*   - [ ] The `updateArtifact` call specifies adding the commit SHA to the `related_commits` array.
*   - [ ] The `updateArtifact` call specifies adding the PR identifier (URL or number) to the `related_prs` array.
*   - [ ] The CLE's `updateArtifact` logic correctly handles appending items to these array fields, preventing duplicates.
*   - [ ] The `updated_date` of the artifact is updated by the CLE upon successful linking.
*   - [ ] Unit/Integration tests verify that commit SHAs are correctly added to `related_commits`.
*   - [ ] Unit/Integration tests verify that PR identifiers are correctly added to `related_prs`.
*   - [ ] Unit/Integration tests verify that duplicates are not added to the arrays.

## Implementation Notes / Details 📝

*   **Trigger:** This logic is triggered by the output of the commit scanner (`TASK-IM-709`) or potentially a future GitHub PR webhook handler.
*   **CLE Update:** The main work here is ensuring the `updateArtifact` method in the CLE (`TASK-IM-108`) can robustly handle updates to array fields, specifically appending unique values.
*   **PR Identification:** Need a way to distinguish PR references from commit references if both are processed. GitHub PRs often have associated commit SHAs, but linking the PR itself (e.g., by URL or `#number`) might be more useful. Define the format for storing PR identifiers.
*   **Error Handling:** Handle cases where the `updateArtifact` call fails (e.g., artifact not found, validation error).

## Subtasks / Checklist ☑️

*   - [ ] Define the structured format for passing reference data (artifact ID, SHA/PR ID, type) from scanner/event handler.
*   - [ ] Implement the receiving logic in the Integration Layer or CLE.
*   - [ ] Enhance CLE's `updateArtifact` method (`TASK-IM-108`) to support appending unique items to `related_commits` array.
*   - [ ] Enhance CLE's `updateArtifact` method (`TASK-IM-108`) to support appending unique items to `related_prs` array.
*   - [ ] Implement the logic to call `updateArtifact` with the correct field (`related_commits` or `related_prs`) and value (SHA or PR ID).
*   - [ ] Add comments explaining the linking update logic.
*   - [ ] Write tests verifying commit SHA is added correctly to `related_commits`.
*   - [ ] Write tests verifying PR ID/URL is added correctly to `related_prs`.
*   - [ ] Write tests verifying duplicate references are ignored.
*   - [ ] Write tests verifying `updated_date` is modified.