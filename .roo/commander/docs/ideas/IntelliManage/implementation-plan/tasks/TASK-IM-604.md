+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-604"
title = "Implement logic for extracting required information from artifacts for agent-session-summarizer"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-006"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing agent logic/rules
# reporter = "..."
priority = "🔼 High" # Core logic of the summarizer
# estimated_effort = "M" # Medium - Involves text parsing/extraction logic
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "agent", "session-summarizer", "implementation", "rules", "parsing", "extraction", "context", "markdown"]
related_docs = ["RULES-AGENT-SESSION-SUMMARIZER-001", "MODE-SPEC-AGENT-SESSION-SUMMARIZER-001", "DATA-FORMAT-HANDOVER-001", "KB-OUTLINE-SESSION-MANAGER-001"] # KB file 01-summary-procedure.md relevant
depends_on = ["TASK-IM-602", "TASK-IM-603"] # Depends on rules structure and having read the artifacts
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement logic for extracting required information from artifacts for agent-session-summarizer

## Description ✍️

Implement the core logic within the `agent-session-summarizer` mode's rules (`TASK-IM-602`) to parse the content of the input artifacts (retrieved in `TASK-IM-603`) and extract the specific pieces of information needed to populate the handover summary template (`DATA-FORMAT-HANDOVER-001`).

This involves processing the content of:
*   Session log file(s).
*   Planning document(s).
*   Relevant Task/Story/Bug artifact files.

And extracting:
*   Current High-Level Goal(s).
*   Last Key Action(s) Completed.
*   Active / Pending Delegated Tasks (ID, Title, Status, Assignee).
*   Next Planned Step(s).
*   Blockers / Open Questions.

## Acceptance Criteria ✅

*   - [ ] Rule logic correctly parses the session log content to identify the current goal(s).
*   - [ ] Rule logic correctly parses the session log content to identify the last significant completed actions/outcomes.
*   - [ ] Rule logic correctly parses session log or task artifact data to identify active/pending tasks and extract their ID, Title, Status, and Assignee.
*   - [ ] Rule logic correctly parses the planning document or session log to identify the next planned step(s).
*   - [ ] Rule logic correctly parses session logs or task artifacts (e.g., status="🚧 Blocked") to identify blockers or open questions.
*   - [ ] Extracted information is stored in rule variables corresponding to the template placeholders (e.g., `[Current Goal List]`, `[Last Actions List]`, `[Active Tasks List]`, `[Next Steps List]`, `[Blockers List]`).
*   - [ ] Logic handles cases where specific information might be missing from source files (e.g., no blockers found).
*   - [ ] Extraction logic is reasonably robust against minor variations in formatting within the source files (within limits).
*   - [ ] Unit tests (or rule tests) verify the correct extraction of each type of information from various mock artifact content examples.

## Implementation Notes / Details 📝

*   This task likely involves significant text processing within the Roo rules.
*   **Parsing Strategy:** Use regular expressions, string manipulation functions, or potentially leverage an LLM (if deemed necessary and efficient for specific extraction tasks, though direct parsing is preferred for reliability).
*   **Session Log Parsing:** Define conventions for how goals, actions, delegations, outcomes, and blockers are logged (`TASK-IM-409`) to make parsing easier. Look for specific markers or keywords (e.g., `**Goal:**`, `[OUTCOME] Success: TASK-123`, `[BLOCKER]`).
*   **Task Data Extraction:** If reading task files, parse the TOML frontmatter for ID, Title, Status, Assignee.
*   **Conciseness:** Extract only the essential information needed for the summary template.
*   **KB Reference:** Refer to the agent's KB (`01-summary-procedure.md`) for detailed extraction patterns.

## Subtasks / Checklist ☑️

*   - [ ] Implement rule logic to parse session log for Current Goal(s).
*   - [ ] Implement rule logic to parse session log for Last Key Action(s).
*   - [ ] Implement rule logic to identify and extract Active/Pending Task details (ID, Title, Status, Assignee) from logs or task files.
*   - [ ] Implement rule logic to parse planning doc/log for Next Planned Step(s).
*   - [ ] Implement rule logic to parse logs/tasks for Blockers/Open Questions.
*   - [ ] Implement logic to store extracted data into appropriately named rule variables.
*   - [ ] Handle cases where expected information is not found in sources.
*   - [ ] Add comments to rules explaining the extraction logic.
*   - [ ] Write tests verifying extraction of Goals from mock logs.
*   - [ ] Write tests verifying extraction of Last Actions from mock logs.
*   - [ ] Write tests verifying extraction of Active Task details from mock logs/tasks.
*   - [ ] Write tests verifying extraction of Next Steps from mock plans/logs.
*   - [ ] Write tests verifying extraction of Blockers from mock logs/tasks.