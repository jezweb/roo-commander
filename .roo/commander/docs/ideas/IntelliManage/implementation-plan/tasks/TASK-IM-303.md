+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-303"
title = "Implement Automated Linking suggestion logic (Keyword analysis -> CLE Query -> Suggestion)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "▶️ Medium" # Helpful feature, less critical than core generation/status
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["ai", "automation", "linking", "suggestion", "nlp", "cle", "hierarchy"]
related_docs = ["DOC-AI-SPEC-001", "DOC-FUNC-SPEC-001", "TASK-IM-301"]
depends_on = ["TASK-IM-301", "TASK-IM-104"] # Depends on AI interface and CLE base (for querying)
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement Automated Linking suggestion logic (Keyword analysis -> CLE Query -> Suggestion)

## Description ✍️

Implement the AI Engine capability to automatically suggest potential links (hierarchical parent/child or dependency) between IntelliManage artifacts. The core logic involves:
1.  Receiving a trigger, typically after an artifact is created or significantly updated (via the interface defined in `TASK-IM-301`, e.g., `suggestLinks(artifactId)`).
2.  Analyzing the content (title, description, tags) of the specified artifact for keywords or references to other artifacts (e.g., mentions of "Epic X", "feature Y", "TASK-123").
3.  Querying the Core Logic Engine (CLE) using `findArtifacts` to search for existing artifacts that might be related based on the analysis (e.g., find Epic with title "Epic X", find tasks related to "feature Y").
4.  Evaluating potential matches based on type compatibility (e.g., suggest an Epic as a parent for a Feature, suggest a Task as a dependency for another Task) and relevance.
5.  Returning a list of suggested links (e.g., "Suggest linking FEAT-005 to parent EPIC-002", "Suggest FEAT-005 depends_on TASK-101") back to the calling coordinator.

## Acceptance Criteria ✅

*   - [ ] AI Engine exposes a method (e.g., `suggestLinks`) as defined in `TASK-IM-301`.
*   - [ ] The method accepts the ID and project slug of the artifact to analyze.
*   - [ ] The method correctly fetches the artifact's content via the CLE (`readArtifact`).
*   - [ ] The method implements basic keyword/reference extraction from the artifact's title and description.
*   - [ ] The method formulates appropriate queries for the CLE (`findArtifacts`) to search for potentially related artifacts.
*   - [ ] The method filters potential matches based on logical hierarchical relationships (e.g., Feature should link to Epic, Task to Feature).
*   - [ ] The method filters potential matches based on dependency relationships (e.g., Task depends on Task/Bug).
*   - [ ] The method returns a structured list of suggested links (e.g., `{ sourceId: 'FEAT-005', targetId: 'EPIC-002', linkType: 'parent' }`).
*   - [ ] The method handles cases where no relevant links are found (returns empty list).
*   - [ ] The method avoids suggesting links that already exist.
*   - [ ] Unit tests cover the suggestion logic for different artifact types and scenarios (parent, dependency, no suggestion).

## Implementation Notes / Details 📝

*   **Keyword Analysis:** Start with simple heuristics:
    *   Look for explicit mentions of other artifact IDs (`EPIC-XXX`, `FEAT-XXX`, `TASK-XXX`).
    *   Look for keywords matching titles of potential parent artifacts (e.g., if a Task title mentions "Login Feature", search for Features with "Login" in the title).
    *   Consider using tags for matching.
    *   (Future) More advanced NLP or embedding techniques could be used for semantic similarity.
*   **CLE Queries:** Formulate `findArtifacts` queries effectively. Search within the same project first. Consider searching for potential parents (Epics for Features, Features for Tasks) or potential dependencies (other Tasks/Bugs).
*   **Filtering:** After getting potential matches from CLE, apply rules:
    *   Don't suggest linking an item to itself.
    *   Check if the link already exists in the source artifact's TOML.
    *   Enforce hierarchy: Suggest Epics as parents for Features, Features for Tasks.
    *   Allow Tasks/Bugs as dependencies for Tasks/Stories/Bugs.
*   **Suggestion Format:** Define a clear return format that the coordinator (`session-manager`) can easily present to the user for confirmation.

## Subtasks / Checklist ☑️

*   - [ ] Implement the `suggestLinks` interface method in the AI Engine.
*   - [ ] Implement logic to fetch artifact content via CLE.
*   - [ ] Implement basic keyword/ID extraction logic from text.
*   - [ ] Implement logic to formulate CLE `findArtifacts` queries based on extracted keywords/IDs.
*   - [ ] Implement filtering logic for potential matches based on hierarchy and existing links.
*   - [ ] Implement filtering logic for potential matches based on dependency rules.
*   - [ ] Define and implement the return structure for suggested links.
*   - [ ] Write unit tests for keyword extraction.
*   - [ ] Write unit tests for suggesting parent links (Feature -> Epic, Task -> Feature).
*   - [ ] Write unit tests for suggesting dependency links (Task -> Task).
*   - [ ] Write unit tests for scenarios where no links should be suggested.
*   - [ ] Write unit tests for filtering out existing links.