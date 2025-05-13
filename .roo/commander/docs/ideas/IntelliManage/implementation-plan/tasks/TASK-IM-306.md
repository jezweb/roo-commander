+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-306"
title = "Implement basic Guidance/Refinement suggestion capability (Analyze artifact -> LLM Suggestion)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔽 Low" # Nice-to-have AI feature, less critical than core functions
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["ai", "llm", "guidance", "suggestion", "refinement", "quality", "best-practices"]
related_docs = ["DOC-AI-SPEC-001", "TASK-IM-301"]
depends_on = ["TASK-IM-301", "TASK-IM-104"] # Depends on AI interface and CLE base (for reading artifacts)
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement basic Guidance/Refinement suggestion capability (Analyze artifact -> LLM Suggestion)

## Description ✍️

Implement a basic capability within the AI Engine to analyze the content of an IntelliManage artifact (e.g., a Task or Story) and provide suggestions for improvement or refinement. This involves:
1.  Receiving a request to analyze a specific artifact (e.g., via `getGuidance(artifactId)` interface from `TASK-IM-301`).
2.  Fetching the artifact's content (TOML and Markdown) via the Core Logic Engine (CLE).
3.  Sending the content to an LLM with a prompt asking it to evaluate specific aspects (e.g., clarity of description, quality of acceptance criteria, potential ambiguity, estimated size/complexity) based on predefined best practices.
4.  Parsing the LLM's response containing suggestions.
5.  Returning the suggestions in a structured format to the caller (coordinator).

Initial focus on simple checks like:
*   Presence and clarity of Acceptance Criteria (AC).
*   Suggesting breaking down potentially large tasks/stories.
*   Suggesting adding relevant tags.

## Acceptance Criteria ✅

*   - [ ] AI Engine exposes a method (e.g., `getGuidance`) as defined in `TASK-IM-301`.
*   - [ ] The method accepts the artifact ID and project slug.
*   - [ ] The method correctly fetches the full artifact content via CLE (`readArtifact`).
*   - [ ] The method formulates an effective prompt for an LLM to analyze the artifact content against predefined quality criteria (e.g., "Does this task have clear, testable acceptance criteria? Is the description clear? Does it seem too large? Suggest relevant tags.").
*   - [ ] The method parses the LLM response to extract actionable suggestions.
*   - [ ] The method returns suggestions in a structured format (e.g., array of strings or objects with suggestion type and text).
*   - [ ] The method handles cases where the LLM provides no specific suggestions.
*   - [ ] The method handles errors during CLE fetch or LLM processing.
*   - [ ] Basic analysis for Acceptance Criteria clarity is functional.
*   - [ ] Basic analysis for potential task size (suggesting breakdown) is functional.
*   - [ ] Basic analysis for suggesting relevant tags is functional.
*   - [ ] Unit tests cover the guidance generation flow using mock CLE and LLM responses.

## Implementation Notes / Details 📝

*   **Prompt Engineering:** This is key. The prompt needs to clearly instruct the LLM on *what* aspects to evaluate and *how* to format the suggestions. Provide examples of good AC or task descriptions within the prompt if possible.
*   **Criteria:** Start with a small, well-defined set of quality criteria:
    *   AC: Are they present? Do they seem specific/testable (using heuristics)?
    *   Size: Does the description imply a large amount of work? (LLM estimation can be unreliable, focus on suggesting review/breakdown).
    *   Tags: Based on keywords in title/description, suggest relevant tags (e.g., "api", "ui", "refactor", "bug").
*   **LLM Output Parsing:** Expect suggestions as text. Parse the LLM response to extract distinct suggestions.
*   **Actionability:** Frame suggestions constructively (e.g., "Consider adding specific acceptance criteria for...", "This task might be large; consider breaking it down into smaller subtasks.", "Suggest adding tags: [tag1, tag2]").
*   **Triggering:** Decide how this guidance is triggered. Initially, it might be via an explicit user command (`!pm suggest refinement TASK-123`) handled by the coordinator, which then calls the AI Engine. Proactive suggestions could be a future enhancement.

## Subtasks / Checklist ☑️

*   - [ ] Implement the `getGuidance` interface method in the AI Engine.
*   - [ ] Implement logic to fetch artifact content via CLE.
*   - [ ] Design and implement LLM prompt templates for artifact analysis (AC, size, tags).
*   - [ ] Implement logic to call the external LLM API with the prompt and artifact content.
*   - [ ] Implement logic to parse the LLM response and extract suggestions.
*   - [ ] Define and implement the return structure for guidance suggestions.
*   - [ ] Implement error handling for CLE/LLM calls.
*   - [ ] Write unit tests mocking LLM/CLE for AC guidance suggestions.
*   - [ ] Write unit tests mocking LLM/CLE for task size guidance suggestions.
*   - [ ] Write unit tests mocking LLM/CLE for tag suggestions.
*   - [ ] Write unit tests for handling cases with no suggestions or errors.