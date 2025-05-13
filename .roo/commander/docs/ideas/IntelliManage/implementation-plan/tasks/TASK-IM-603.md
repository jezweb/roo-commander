+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-603"
title = "Implement logic for reading input artifacts via CLE for agent-session-summarizer"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-006"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing agent logic/rules
# reporter = "..."
priority = "🔼 High" # Essential for getting data to summarize
# estimated_effort = "S" # Small - Primarily using existing tools/CLE interface
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "agent", "session-summarizer", "implementation", "rules", "cle", "read", "context"]
related_docs = ["RULES-AGENT-SESSION-SUMMARIZER-001", "MODE-SPEC-AGENT-SESSION-SUMMARIZER-001", "DOC-FUNC-SPEC-001"]
depends_on = ["TASK-IM-602", "TASK-IM-104"] # Depends on agent rules structure and CLE base interface
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement logic for reading input artifacts via CLE for agent-session-summarizer

## Description ✍️

Implement the specific logic within the `agent-session-summarizer` mode's rules (`TASK-IM-602`) to read the necessary input artifacts using the Core Logic Engine (CLE) or appropriate file reading tools.

This involves:
1.  Identifying the paths to the required source files based on the context received from `session-manager` (e.g., session log path, planning doc path, active project slug).
2.  Potentially using `list_files` or `findArtifacts` via CLE to identify relevant active task files if not explicitly provided.
3.  Using `read_file` (or equivalent CLE method like `readArtifact`) to load the content of:
    *   The specified session log file.
    *   The specified planning document file.
    *   Relevant task artifact files.
    *   The handover summary template file (`.ruru/templates/handover_summary_template.md`).
4.  Storing the retrieved content in rule variables for the subsequent extraction step (`TASK-IM-604`).
5.  Handling errors gracefully if required files cannot be read.

## Acceptance Criteria ✅

*   - [ ] Rule logic correctly identifies the path to the session log file from the input context.
*   - [ ] Rule logic correctly identifies the path to the planning document file from the input context.
*   - [ ] Rule logic correctly identifies the path(s) to relevant task artifact files (either from input context or by querying CLE/listing files based on project slug and status).
*   - [ ] Rule logic correctly identifies the path to the handover summary template.
*   - [ ] Rule logic correctly executes `read_file` (or CLE equivalent) for all required source files and the template.
*   - [ ] Retrieved file content is stored in accessible rule variables.
*   - [ ] If any required source file cannot be read, the rule triggers an error report via `attempt_completion` specifying the missing file.
*   - [ ] Unit tests (or rule tests) verify the correct identification and reading of input files using mocked file system/CLE responses.
*   - [ ] Unit tests verify correct error handling for missing/unreadable files.

## Implementation Notes / Details 📝

*   This logic occurs early in the agent's execution flow, after parsing the initial request.
*   Requires robust handling of file paths passed from `session-manager`.
*   If task IDs aren't passed explicitly, the logic to find "relevant active tasks" needs to be defined (e.g., query CLE for tasks in "In Progress" or "To Do" status for the active project).
*   Use the appropriate tool for reading files (`read_file` or a potential CLE method).

## Subtasks / Checklist ☑️

*   - [ ] Implement rule logic to extract source file paths from input context.
*   - [ ] Implement rule logic to determine relevant task file paths (if needed, via CLE query or `list_files`).
*   - [ ] Implement rule logic to read the session log file.
*   - [ ] Implement rule logic to read the planning document file.
*   - [ ] Implement rule logic to read the relevant task files.
*   - [ ] Implement rule logic to read the handover summary template file.
*   - [ ] Implement logic to store retrieved content in variables.
*   - [ ] Implement error handling for file read failures.
*   - [ ] Add comments to rules explaining the file reading logic.
*   - [ ] Write tests verifying reading of all required files (using mocks).
*   - [ ] Write tests verifying error handling for missing session log.
*   - [ ] Write tests verifying error handling for missing template file.
*   - [ ] Write tests verifying logic for finding active task files (if implemented).