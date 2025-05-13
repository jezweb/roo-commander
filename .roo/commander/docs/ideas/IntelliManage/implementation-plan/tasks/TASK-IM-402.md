+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-402"
title = "Create rules directory and implement rules files for session-manager"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-004"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔥 Highest" # Defines core mode behavior
# estimated_effort = "M" # Medium - involves translating spec into rule logic
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "session-manager", "rules", "configuration", "logic", "workflow"]
related_docs = ["RULES-SESSION-MANAGER-001", "MODE-SPEC-SESSION-MANAGER-001"]
depends_on = ["TASK-IM-401"] # Depends on the mode definition existing
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Create rules directory and implement rules files for session-manager

## Description ✍️

Create the necessary directory structure for the `session-manager` mode's operational rules (e.g., `.roo/rules-session-manager/`) and implement the initial set of rule files (`.roo`). These rules should codify the core logic and procedures outlined in the `RULES-SESSION-MANAGER-001` specification document.

This involves translating the procedural steps defined in the specification (like session start/resume, request handling, delegation logic, error handling) into the specific rule format used by the Roo Code engine.

## Acceptance Criteria ✅

*   - [ ] The directory `.roo/rules-session-manager/` exists.
*   - [ ] Rule files (`*.roo`) are created within the directory to cover the key procedures from `RULES-SESSION-MANAGER-001`.
*   - [ ] A rule exists implementing the Session Start / Resumption Procedure (checking handover, greeting/prompting).
*   - [ ] A rule exists implementing Active Project Context Management (identifying/confirming context).
*   - [ ] Rule(s) exist implementing User Request Handling & Delegation logic (parsing intent, routing to CLE/dispatch/summarizer).
*   - [ ] A rule exists implementing Session Logging Procedure (writing key events to log file).
*   - [ ] Rule(s) exist implementing Error Handling & Escalation logic (reporting delegate errors, escalating persistent failures).
*   - [ ] The implemented rules correctly reference necessary tools (`list_files`, `read_file`, `ask_followup_question`, `new_task`, `edit` tools, etc.).
*   - [ ] The rules are written according to the Roo Code rule syntax and best practices.
*   - [ ] The rules files are added to version control (Git).

## Implementation Notes / Details 📝

*   This task requires a good understanding of the Roo Code rule engine syntax and capabilities.
*   Break down the procedures from `RULES-SESSION-MANAGER-001` into logical rule files (e.g., `01_session_start.roo`, `02_request_handler.roo`, `03_delegate_dispatch.roo`, `04_logging.roo`, `05_error_handling.roo`).
*   Focus on implementing the core flow and decision logic described in the specification.
*   Ensure rules correctly handle variables for context (e.g., `[Session Goal]`, `[project_slug]`, `[Session Log Path]`).
*   Initial implementation might use placeholder logic for complex parts, to be refined later.

## Subtasks / Checklist ☑️

*   - [ ] Create the directory `.roo/rules-session-manager/`.
*   - [ ] Implement rule(s) for Session Start / Resumption logic.
*   - [ ] Implement rule(s) for Active Project Context management.
*   - [ ] Implement rule(s) for parsing user requests and identifying action type.
*   - [ ] Implement rule(s) for delegating direct PM commands to CLE.
*   - [ ] Implement rule(s) for delegating development tasks to `roo-dispatch`.
*   - [ ] Implement rule(s) for delegating summary generation to `agent-session-summarizer`.
*   - [ ] Implement rule(s) for session logging.
*   - [ ] Implement rule(s) for handling errors reported by delegates.
*   - [ ] Implement rule(s) for escalating to `roo-commander`.
*   - [ ] Add comments within rule files explaining the logic.
*   - [ ] Add the new rule files to Git staging.
*   - [ ] Perform basic validation or linting of rule syntax if tools are available.