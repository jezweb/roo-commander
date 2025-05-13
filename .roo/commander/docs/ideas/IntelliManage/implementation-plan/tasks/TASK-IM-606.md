+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-606"
title = "Implement logic for generating timestamped filename and writing summary file to `.ruru/context/handovers/`"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-006"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing agent logic/rules
# reporter = "..."
priority = "🔼 High" # Essential for saving the generated summary
# estimated_effort = "S" # Small - Primarily filename generation and file write call
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "agent", "session-summarizer", "implementation", "rules", "output", "file-system", "handover"]
related_docs = ["RULES-AGENT-SESSION-SUMMARIZER-001", "MODE-SPEC-AGENT-SESSION-SUMMARIZER-001", "DATA-FORMAT-HANDOVER-001", "DOC-FS-SPEC-001"]
depends_on = ["TASK-IM-602", "TASK-IM-605"] # Depends on rules structure and having populated the summary content
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement logic for generating timestamped filename and writing summary file to `.ruru/context/handovers/`

## Description ✍️

Implement the logic within the `agent-session-summarizer` mode's rules (`TASK-IM-602`) to:
1.  Generate a unique, timestamped filename for the handover summary according to the convention `handover_YYYYMMDD_HHMMSS.md`.
2.  Construct the full path to the output file within the `.ruru/context/handovers/` directory.
3.  Use the appropriate file writing tool (e.g., `write_to_file` or CLE equivalent) to save the populated Markdown summary content (generated in `TASK-IM-605`) to the generated path.
4.  Handle potential file writing errors.
5.  Prepare the full path of the successfully written file for reporting back in the final step (`TASK-IM-607`).

## Acceptance Criteria ✅

*   - [ ] Rule logic correctly generates a filename matching the `handover_YYYYMMDD_HHMMSS.md` format using the current time.
*   - [ ] Rule logic correctly constructs the full output path within `.ruru/context/handovers/`.
*   - [ ] Rule logic correctly calls `write_to_file` (or equivalent) with the correct path and the populated summary content.
*   - [ ] File writing errors (e.g., permissions, disk full) are caught and handled (triggering error reporting in `TASK-IM-607`).
*   - [ ] The full path of the successfully written file is stored in a rule variable for the final reporting step.
*   - [ ] Unit tests (or rule tests) verify correct filename generation.
*   - [ ] Unit tests verify the correct call to the mocked `write_to_file` tool with the expected path and content.
*   - [ ] Unit tests verify error handling for simulated file write failures.

## Implementation Notes / Details 📝

*   Requires access to the current date and time within the rule engine's environment to generate the timestamp. Ensure the format matches `YYYYMMDD_HHMMSS` precisely for consistency.
*   Use standard path joining functions to construct the full output path reliably across different operating systems.
*   Ensure the `.ruru/context/handovers/` directory exists. The `write_to_file` tool might handle directory creation, or the rules may need to ensure it exists beforehand (perhaps during initial setup or checked here).
*   Use the appropriate file writing tool provided by the Roo Code platform.

## Subtasks / Checklist ☑️

*   - [ ] Implement rule logic to get the current timestamp.
*   - [ ] Implement rule logic to format the timestamp into `YYYYMMDD_HHMMSS`.
*   - [ ] Implement rule logic to construct the filename `handover_[timestamp].md`.
*   - [ ] Implement rule logic to construct the full output path `.ruru/context/handovers/[filename]`.
*   - [ ] Implement the call to `write_to_file` with the path and populated summary content variable.
*   - [ ] Implement error handling around the `write_to_file` call.
*   - [ ] Store the successful output path in a rule variable.
*   - [ ] Add comments to rules explaining filename generation and file writing.
*   - [ ] Write tests verifying filename generation format.
*   - [ ] Write tests verifying the call to mock `write_to_file` with correct parameters.
*   - [ ] Write tests verifying error handling for mock `write_to_file` failures.