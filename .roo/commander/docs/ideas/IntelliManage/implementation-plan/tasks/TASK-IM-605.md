+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-605"
title = "Implement logic for populating the handover summary template"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-006"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing agent logic/rules
# reporter = "..."
priority = "🔼 High" # Core output generation step
# estimated_effort = "S" # Small - Primarily string replacement/formatting
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "agent", "session-summarizer", "implementation", "rules", "template", "formatting", "output", "markdown"]
related_docs = ["RULES-AGENT-SESSION-SUMMARIZER-001", "MODE-SPEC-AGENT-SESSION-SUMMARIZER-001", "DATA-FORMAT-HANDOVER-001", "KB-OUTLINE-SESSION-MANAGER-001"] # KB file 02-template-usage.md relevant
depends_on = ["TASK-IM-602", "TASK-IM-603", "TASK-IM-604"] # Depends on rules, reading artifacts, and extracting info
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement logic for populating the handover summary template

## Description ✍️

Implement the logic within the `agent-session-summarizer` mode's rules (`TASK-IM-602`) to take the information extracted in `TASK-IM-604` and populate the standard handover summary template (`.ruru/templates/handover_summary_template.md`, format defined in `DATA-FORMAT-HANDOVER-001`).

This involves:
1.  Reading the content of the template file.
2.  Replacing defined placeholders within the template (e.g., `{{CURRENT_GOAL}}`, `{{ACTIVE_TASK_X_ID}}`, `{{TIMESTAMP}}`) with the corresponding data stored in rule variables from the extraction step.
3.  Formatting the extracted data appropriately for Markdown display (e.g., creating bulleted lists from arrays of tasks or actions).
4.  Handling cases where optional information (like blockers) was not found during extraction (e.g., replacing the placeholder with "None" or omitting the section).
5.  Storing the final, populated Markdown content in a rule variable ready for writing to a file (`TASK-IM-606`).

## Acceptance Criteria ✅

*   - [ ] Rule logic correctly reads the handover summary template file content (`TASK-IM-603`).
*   - [ ] Rule logic correctly replaces the `{{TIMESTAMP}}` placeholder with the current timestamp.
*   - [ ] Rule logic correctly replaces the `{{CONTEXT_WINDOW}}` placeholder with info passed from `session-manager`.
*   - [ ] Rule logic correctly replaces the `{{CURRENT_GOAL}}` placeholder with the extracted goal(s), formatted as a list if necessary.
*   - [ ] Rule logic correctly replaces `{{LAST_ACTION_X}}` placeholders (or iterates) to create a list of last actions.
*   - [ ] Rule logic correctly replaces `{{ACTIVE_TASK_X_...}}` placeholders (or iterates) to create a formatted list of active tasks.
*   - [ ] Rule logic correctly replaces `{{NEXT_STEP_X}}` placeholders (or iterates) to create a list of next steps.
*   - [ ] Rule logic correctly replaces `{{BLOCKER_X}}`/`{{OPEN_QUESTION_X}}` placeholders (or iterates) to create a list of blockers/questions, handling the "None found" case gracefully.
*   - [ ] Rule logic correctly replaces `{{COORDINATION_TASK_LINK}}` and `{{PLANNING_DOC_LINK}}` with the paths provided by `session-manager`.
*   - [ ] The final output is well-formatted Markdown according to `DATA-FORMAT-HANDOVER-001`.
*   - [ ] The populated Markdown content is stored in a rule variable.
*   - [ ] Unit tests (or rule tests) verify the correct population of the template with various sets of mock extracted data.

## Implementation Notes / Details 📝

*   This task primarily involves string manipulation within the Roo rules.
*   Use simple string replacement functions or template literals available in the rule engine's environment.
*   Pay attention to formatting lists correctly in Markdown (using `- ` or `* ` prefixes).
*   Define clear placeholder names in the template file (`.ruru/templates/handover_summary_template.md`) that are easy to target for replacement.
*   Ensure graceful handling of empty lists (e.g., if no blockers were extracted, the output should reflect that clearly, like "- None").

## Subtasks / Checklist ☑️

*   - [ ] Implement rule logic to read the template file content.
*   - [ ] Implement replacement logic for `{{TIMESTAMP}}` and `{{CONTEXT_WINDOW}}`.
*   - [ ] Implement replacement/formatting logic for `{{CURRENT_GOAL}}`.
*   - [ ] Implement replacement/formatting logic for `{{LAST_ACTION_X}}` list.
*   - [ ] Implement replacement/formatting logic for `{{ACTIVE_TASK_X_...}}` list.
*   - [ ] Implement replacement/formatting logic for `{{NEXT_STEP_X}}` list.
*   - [ ] Implement replacement/formatting logic for `{{BLOCKER_X}}`/`{{OPEN_QUESTION_X}}` list (including "None" case).
*   - [ ] Implement replacement logic for `{{COORDINATION_TASK_LINK}}` and `{{PLANNING_DOC_LINK}}`.
*   - [ ] Store the final populated string in a rule variable.
*   - [ ] Add comments to rules explaining the template population logic.
*   - [ ] Write tests verifying template population with complete mock data.
*   - [ ] Write tests verifying template population with some optional sections empty (e.g., no blockers).
*   - [ ] Write tests verifying correct Markdown list formatting.