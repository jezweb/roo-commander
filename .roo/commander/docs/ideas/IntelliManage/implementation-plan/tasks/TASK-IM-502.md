+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-502"
title = "Create rules directory and implement rules files for roo-dispatch"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-005"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing roo-dispatch rules/logic
# reporter = "..."
priority = "🔥 Highest" # Defines core mode behavior
# estimated_effort = "M" # Medium - involves translating spec into rule logic
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "roo-dispatch", "rules", "configuration", "logic", "workflow", "delegation"]
related_docs = ["RULES-ROO-DISPATCH-001", "MODE-SPEC-ROO-DISPATCH-001"]
depends_on = ["TASK-IM-501"] # Depends on the mode definition existing
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Create rules directory and implement rules files for roo-dispatch

## Description ✍️

Create the necessary directory structure for the `roo-dispatch` mode's operational rules (e.g., `.roo/rules-roo-dispatch/`) and implement the initial set of rule files (`.roo`). These rules should codify the core logic and procedures outlined in the `RULES-ROO-DISPATCH-001` specification document.

This involves translating the procedural steps defined in the specification (like task intake, context retrieval, specialist selection, delegation, monitoring, and reporting) into the specific rule format used by the Roo Code engine.

## Acceptance Criteria ✅

*   - [ ] The directory `.roo/rules-roo-dispatch/` exists.
*   - [ ] Rule files (`*.roo`) are created within the directory to cover the key procedures from `RULES-ROO-DISPATCH-001`.
*   - [ ] A rule exists implementing the Task Intake and Context Retrieval procedure (parsing input message, calling CLE/`read_file` for artifact details).
*   - [ ] Rule(s) exist implementing the Specialist Selection logic (analyzing requirements, consulting Stack Profile/mode summary, choosing specialist).
*   - [ ] Rule(s) exist implementing the Task Delegation logic (preparing context, calling `new_task` targeting the selected specialist).
*   - [ ] Rule(s) exist implementing the Monitoring and Result Aggregation logic (handling `attempt_completion` from specialists).
*   - [ ] A rule exists implementing the final Outcome Reporting logic (calling `attempt_completion` back to `session-manager`).
*   - [ ] Rule(s) exist implementing Error Handling (reporting specialist errors back to `session-manager`).
*   - [ ] The implemented rules correctly reference necessary tools (`read_file`, `new_task`, `complete`, potentially `list_files` or others for context).
*   - [ ] The rules are written according to the Roo Code rule syntax and best practices, emphasizing efficiency and statelessness.
*   - [ ] The rules files are added to version control (Git).

## Implementation Notes / Details 📝

*   This task requires a good understanding of the Roo Code rule engine syntax and capabilities.
*   Break down the procedures from `RULES-ROO-DISPATCH-001` into logical rule files (e.g., `01_intake_context.roo`, `02_select_specialist.roo`, `03_delegate_execute.roo`, `04_handle_completion.roo`, `05_report_outcome.roo`).
*   Focus on implementing the streamlined, stateless workflow described in the specification.
*   Ensure rules correctly handle variables passed in the initial delegation message (goal, project slug, artifact IDs).
*   Specialist selection logic might involve complex conditional checks based on task details and context files.

## Subtasks / Checklist ☑️

*   - [ ] Create the directory `.roo/rules-roo-dispatch/`.
*   - [ ] Implement rule(s) for Task Intake and Context Retrieval (parsing message, reading artifacts).
*   - [ ] Implement rule(s) for Specialist Selection (analyzing task, consulting context, choosing mode).
*   - [ ] Implement rule(s) for preparing context and delegating via `new_task` to specialists.
*   - [ ] Implement rule(s) for handling `attempt_completion` from specialists.
*   - [ ] Implement rule(s) for aggregating results.
*   - [ ] Implement rule(s) for reporting final outcome back to `session-manager` via `attempt_completion`.
*   - [ ] Implement rule(s) for handling and reporting errors from specialists.
*   - [ ] Add comments within rule files explaining the logic.
*   - [ ] Add the new rule files to Git staging.
*   - [ ] Perform basic validation or linting of rule syntax if tools are available.