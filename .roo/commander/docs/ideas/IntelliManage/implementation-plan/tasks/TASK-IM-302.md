+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-302"
title = "Implement AI Artifact Generation capability (NL -> Draft TOML/MD -> CLE Create)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔼 High" # Core AI interaction feature
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["ai", "llm", "automation", "generation", "crud", "nlp", "cle"]
related_docs = ["DOC-AI-SPEC-001", "DOC-SCHEMA-001", "TASK-IM-301"]
depends_on = ["TASK-IM-301", "TASK-IM-104"] # Depends on AI interface definition and CLE base
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement AI Artifact Generation capability (NL -> Draft TOML/MD -> CLE Create)

## Description ✍️

Implement the AI Engine capability to generate draft IntelliManage artifacts (Initiatives, Epics, Features, Tasks, Stories, Bugs) based on natural language (NL) prompts from a user or coordinator. This involves:
1.  Receiving the NL prompt and necessary context (e.g., target project, desired artifact type, potential parent IDs) via the interface defined in `TASK-IM-301`.
2.  Using an LLM to parse the prompt and generate draft content, including:
    *   Relevant TOML frontmatter fields (extracting title, inferring type/status, etc.).
    *   A draft Markdown body (description, potentially initial acceptance criteria or subtasks).
3.  Formatting the generated content into the TOML+MD structure.
4.  Calling the Core Logic Engine's (CLE) `createArtifact` method with the generated data.
5.  Returning the result (success with path/ID, or error) back to the caller.

## Acceptance Criteria ✅

*   - [ ] AI Engine exposes a method (e.g., `generateDraftArtifact`) as defined in `TASK-IM-301`.
*   - [ ] The method accepts NL prompt, target project, desired type, and optional context (e.g., parent IDs).
*   - [ ] The method correctly formulates a prompt for an external LLM to generate draft TOML fields and Markdown content.
*   - [ ] The method parses the LLM response to extract structured TOML data and Markdown body.
*   - [ ] Generated TOML data includes essential fields (title, type, initial status) inferred or extracted from the prompt.
*   - [ ] Generated TOML data respects provided context (e.g., includes `project_name`, `epic_id`, `feature_id` if supplied).
*   - [ ] The method calls `CLE.createArtifact` with the generated, structured data.
*   - [ ] The method correctly handles success responses from the CLE (e.g., returns the new artifact ID/path).
*   - [ ] The method correctly handles error responses from the LLM (e.g., API errors, content filtering) or the CLE (e.g., validation errors) and reports them back.
*   - [ ] Basic generation works for Tasks/Stories/Bugs.
*   - [ ] Basic generation works for Features (requiring parent Epic context).
*   - [ ] Basic generation works for Epics.
*   - [ ] Unit tests cover the flow from NL prompt to CLE call for different artifact types.

## Implementation Notes / Details 📝

*   **Prompt Engineering:** Designing effective LLM prompts is crucial. Prompts should instruct the LLM to:
    *   Identify the artifact type (if not explicitly given).
    *   Extract the title.
    *   Set a default initial status (e.g., "⚪️ Planned" or "🟡 To Do").
    *   Generate a relevant description based on the prompt.
    *   (Optional) Generate initial Acceptance Criteria or Subtasks based on the prompt.
    *   Output the result in a structured format (e.g., JSON containing TOML fields and Markdown string) for easier parsing.
*   **Context:** Pass relevant context to the LLM, such as the target project name and any specified parent artifact IDs/titles.
*   **Parsing LLM Output:** Implement robust parsing for the expected structured output from the LLM. Handle cases where the LLM output might be malformed.
*   **Validation:** While the LLM generates a draft, the final validation against the TOML schema happens within the CLE (`TASK-IM-103`). The AI Engine should aim to generate schema-compliant drafts.
*   **Error Handling:** Implement retries for transient LLM errors. Report persistent LLM errors or CLE validation errors clearly.

## Subtasks / Checklist ☑️

*   - [ ] Implement the `generateDraftArtifact` interface method in the AI Engine.
*   - [ ] Design and implement LLM prompt templates for artifact generation.
*   - [ ] Implement logic to call the external LLM API with the prompt and context.
*   - [ ] Implement logic to parse the structured response from the LLM.
*   - [ ] Implement logic to format the parsed data into the structure expected by `CLE.createArtifact`.
*   - [ ] Implement the call to `CLE.createArtifact`.
*   - [ ] Implement error handling for LLM API calls and CLE calls.
*   - [ ] Implement result handling (returning success/failure).
*   - [ ] Write unit tests mocking the LLM and CLE to test the generation flow for Tasks.
*   - [ ] Write unit tests mocking the LLM and CLE to test the generation flow for Features.
*   - [ ] Write unit tests mocking the LLM and CLE to test the generation flow for Epics.
*   - [ ] Write unit tests for handling LLM/CLE errors during generation.