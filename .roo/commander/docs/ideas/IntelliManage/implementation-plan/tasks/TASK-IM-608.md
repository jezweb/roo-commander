+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-608"
title = "Write tests for information extraction and template population for agent-session-summarizer"
status = "⚪️ Planned"
type = "🧪 Test" # Changed type to Test
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-006"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing agent tests
# reporter = "..."
priority = "🔼 High" # Tests the core logic of the summarizer
# estimated_effort = "M" # Medium - Requires creating various mock inputs
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "agent", "session-summarizer", "test", "unit-test", "rule-test", "parsing", "extraction", "template", "formatting"]
related_docs = ["RULES-AGENT-SESSION-SUMMARIZER-001", "DATA-FORMAT-HANDOVER-001", "TASK-IM-604", "TASK-IM-605"]
depends_on = ["TASK-IM-604", "TASK-IM-605"] # Depends on implementation of extraction and population logic
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Write tests for information extraction and template population for agent-session-summarizer

## Description ✍️

Create unit tests (or rule tests) for the `agent-session-summarizer` mode's core logic: extracting information from mock input artifacts (`TASK-IM-604`) and correctly populating the handover summary template (`TASK-IM-605`).

These tests should verify that given various simulated inputs (session logs, task data, planning docs), the agent correctly identifies the required information and generates the final Markdown summary string accurately according to the template (`DATA-FORMAT-HANDOVER-001`).

## Acceptance Criteria ✅

*   **Information Extraction (`TASK-IM-604`):**
    *   - [ ] Tests verify correct extraction of Current Goal(s) from mock session logs.
    *   - [ ] Tests verify correct extraction of Last Key Action(s) from mock session logs.
    *   - [ ] Tests verify correct extraction of Active/Pending Task details (ID, Title, Status, Assignee) from mock logs/task data.
    *   - [ ] Tests verify correct extraction of Next Planned Step(s) from mock plans/logs.
    *   - [ ] Tests verify correct extraction of Blockers/Open Questions from mock logs/tasks.
    *   - [ ] Tests verify handling of cases where optional information (e.g., blockers) is missing in mock inputs.
*   **Template Population (`TASK-IM-605`):**
    *   - [ ] Tests verify that the final generated Markdown string correctly incorporates the extracted data into the appropriate sections.
    *   - [ ] Tests verify correct formatting of lists (goals, actions, tasks, steps, blockers).
    *   - [ ] Tests verify correct replacement of placeholders like `{{TIMESTAMP}}`, `{{CONTEXT_WINDOW}}`, `{{COORDINATION_TASK_LINK}}`, etc. (using mock inputs for these).
    *   - [ ] Tests verify graceful handling of empty extracted lists (e.g., outputting "- None" or similar).
    *   - [ ] Tests verify the overall structure matches `DATA-FORMAT-HANDOVER-001`.
*   **General:**
    *   - [ ] Tests use mock input strings representing the content of session logs, planning docs, task files, and the handover template.
    *   - [ ] Tests assert the final generated Markdown string against expected output strings for various scenarios.
    *   - [ ] Tests are added to the project's automated test suite.

## Implementation Notes / Details 📝

*   Use the project's standard unit/rule testing framework.
*   **Mock Inputs:** Create realistic (but controlled) mock string content for:
    *   Session logs (containing examples of goal setting, delegations, outcomes, blockers).
    *   Planning docs (containing next steps).
    *   Task artifact data (if needed for extracting active task details).
    *   The handover template itself.
*   **Testing Focus:** Isolate the extraction logic and the template population logic. Test them together by providing mock input strings and asserting the final output string.
*   Consider edge cases: empty logs, logs with only certain types of entries, tasks with missing optional fields, etc.

## Subtasks / Checklist ☑️

*   - [ ] Set up test file/suite structure for summarizer logic tests.
*   - [ ] Create mock session log content examples.
*   - [ ] Create mock planning document content examples.
*   - [ ] Create mock task data examples (if needed).
*   - [ ] Create mock handover template content.
*   - [ ] Write test case: Extract and populate with complete information available.
*   - [ ] Write test case: Extract and populate when no blockers are found.
*   - [ ] Write test case: Extract and populate when no active tasks are found.
*   - [ ] Write test case: Extract and populate with multiple items in each list section.
*   - [ ] Write test case: Verify correct timestamp and context window population.
*   - [ ] Write test case: Verify correct link population.
*   - [ ] Verify final output string matches expected Markdown format exactly for each test case.
*   - [ ] Integrate tests into the CI/CD pipeline if applicable.