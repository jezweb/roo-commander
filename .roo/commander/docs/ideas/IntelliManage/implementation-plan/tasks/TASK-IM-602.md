+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-602"
title = "Create rules and KB directory/content for the agent-session-summarizer"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-006"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing agent logic
# reporter = "..."
priority = "🔼 High" # Defines agent behavior
# estimated_effort = "S" # Small - Agent logic is relatively simple
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "agent", "session-summarizer", "rules", "kb", "documentation", "configuration"]
related_docs = ["MODE-SPEC-AGENT-SESSION-SUMMARIZER-001", "DATA-FORMAT-HANDOVER-001"]
depends_on = ["TASK-IM-601"] # Depends on the mode definition existing
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Create rules and KB directory/content for the agent-session-summarizer

## Description ✍️

Create the necessary directory structures and initial content for the `agent-session-summarizer` mode's operational rules and Knowledge Base (KB).

This involves:
1.  Creating the rules directory (e.g., `.roo/rules-agent-session-summarizer/`) and implementing basic rule file(s) (`.roo`) to handle the summarization task based on `MODE-SPEC-AGENT-SESSION-SUMMARIZER-001`.
2.  Creating the KB directory (`.ruru/modes/agent-session-summarizer/kb/`) and populating initial KB files (`.md`) outlining the summarization procedure and template usage.

Since this agent has a very focused task, the rules and KB might be simpler compared to coordinator modes.

## Acceptance Criteria ✅

*   **Rules:**
    *   - [ ] The directory `.roo/rules-agent-session-summarizer/` exists.
    *   - [ ] A rule file exists to handle the incoming `new_task` request from `session-manager`.
    *   - [ ] Rule logic correctly parses input context (log path, plan path, etc.).
    *   - [ ] Rule logic correctly uses `read_file` to load the handover template (`.ruru/templates/handover_summary_template.md`).
    *   - [ ] Rule logic correctly uses `read_file` / `list_files` to load source artifacts (session log, tasks, plan).
    *   - [ ] Rule logic implements the extraction of key information (goals, actions, tasks, blockers).
    *   - [ ] Rule logic correctly populates the template content.
    *   - [ ] Rule logic correctly generates the timestamped output filename.
    *   - [ ] Rule logic correctly uses `write_to_file` to save the summary in `.ruru/context/handovers/`.
    *   - [ ] Rule logic correctly uses `attempt_completion` to report the output file path or errors.
    *   - [ ] Rules files are added to version control.
*   **Knowledge Base:**
    *   - [ ] The directory `.ruru/modes/agent-session-summarizer/kb/` exists.
    *   - [ ] A `README.md` exists outlining the KB structure.
    *   - [ ] A `00-kb-usage-strategy.md` exists.
    *   - [ ] A `01-summary-procedure.md` exists detailing the steps for reading sources, extracting info, and populating the template.
    *   - [ ] A `02-template-usage.md` exists explaining the handover template structure (`DATA-FORMAT-HANDOVER-001`) and placeholders.
    *   - [ ] KB files contain initial content relevant to the agent's function.
    *   - [ ] KB files are added to version control.

## Implementation Notes / Details 📝

*   **Rules Simplicity:** The core logic might fit into a single main rule file. Focus on the sequence: parse input -> read template -> read sources -> extract -> populate -> write output -> report completion.
*   **KB Focus:** The KB should primarily document the expected input context, the template structure, and the extraction logic for the agent itself.
*   **Template Path:** Ensure rules correctly reference the path to `handover_summary_template.md`. This might be configurable via `agent-session-summarizer.mode.md`'s `[config]` section.
*   **Extraction Logic:** This might involve simple text processing or regex within the rules, or potentially calling an LLM if more sophisticated summarization is desired (though the spec implies direct extraction).

## Subtasks / Checklist ☑️

*   **Rules:**
    *   - [ ] Create directory `.roo/rules-agent-session-summarizer/`.
    *   - [ ] Create main rule file(s) (e.g., `generate_summary.roo`).
    *   - [ ] Implement rule logic for parsing input context.
    *   - [ ] Implement rule logic for reading template and source files.
    *   - [ ] Implement rule logic for extracting data.
    *   - [ ] Implement rule logic for populating template content.
    *   - [ ] Implement rule logic for generating filename and writing output file.
    *   - [ ] Implement rule logic for reporting completion/errors via `attempt_completion`.
    *   - [ ] Add rules files to Git.
*   **Knowledge Base:**
    *   - [ ] Create directory `.ruru/modes/agent-session-summarizer/kb/`.
    *   - [ ] Create and populate `README.md`.
    *   - [ ] Create and populate `00-kb-usage-strategy.md`.
    *   - [ ] Create and populate `01-summary-procedure.md`.
    *   - [ ] Create and populate `02-template-usage.md`.
    *   - [ ] Add KB files to Git.