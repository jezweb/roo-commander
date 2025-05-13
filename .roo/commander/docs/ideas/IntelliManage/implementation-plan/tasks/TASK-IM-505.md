+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-505"
title = "Implement specialist selection algorithm (using Stack Profile, mode summary/tags)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-005"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Dev implementing roo-dispatch rules/logic
# reporter = "..."
priority = "🔥 Highest" # Core intelligence of roo-dispatch
# estimated_effort = "L" # Large - Involves complex logic and context reading
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["mode", "roo-dispatch", "implementation", "rules", "specialist-selection", "delegation", "ai", "context"]
related_docs = ["RULES-ROO-DISPATCH-001", "MODE-SPEC-ROO-DISPATCH-001", "KB-OUTLINE-ROO-DISPATCH-001"]
depends_on = ["TASK-IM-502", "TASK-IM-504"] # Depends on rules structure and having retrieved task context
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement specialist selection algorithm (using Stack Profile, mode summary/tags)

## Description ✍️

Implement the core logic within the `roo-dispatch` mode's rules (`TASK-IM-502`) to select the most appropriate operational specialist mode(s) for executing the task whose context was retrieved in `TASK-IM-504`. This algorithm should be based on the guidelines specified in `RULES-ROO-DISPATCH-001`, Section 3 and detailed in the KB (`KB-OUTLINE-ROO-DISPATCH-001`, file `01-specialist-selection.md`).

This involves:
1.  Analyzing the retrieved task artifact content (description, type, tags, potentially checklist items).
2.  Reading relevant context files:
    *   The project's Stack Profile (`.ruru/context/stack_profile.json`).
    *   The summary of available modes and their capabilities/tags (e.g., `.ruru/modes/roo-commander/kb/kb-available-modes-summary.md`).
3.  Applying matching logic to find the specialist mode(s) whose capabilities align best with the task requirements and the project's technology stack.
4.  Handling cases where multiple specialists might fit or none are found.
5.  Storing the selected specialist mode ID(s) for use in the delegation step (`TASK-IM-506`).

## Acceptance Criteria ✅

*   - [ ] Rule(s) exist within `roo-dispatch` dedicated to specialist selection.
*   - [ ] The rule(s) correctly read and parse the project's Stack Profile using CLE/`read_file`.
*   - [ ] The rule(s) correctly read and parse the available modes summary using CLE/`read_file`.
*   - [ ] The rule(s) analyze the task artifact content (type, keywords in description/title, tags) to identify required skills/actions.
*   - [ ] Matching logic correctly correlates task requirements and stack profile with specialist mode capabilities/tags from the mode summary.
*   - [ ] The logic prioritizes more specific specialists over generalists where appropriate (e.g., prefers `dev-react` over `dev-frontend` for a React task).
*   - [ ] The ID(s) of the selected specialist(s) are stored in rule variables.
*   - [ ] If no suitable specialist is found, the rule triggers an error report back to `session-manager`.
*   - [ ] If multiple specialists seem equally suitable (ambiguity), the rule either picks a default/preferred one or reports the ambiguity back to `session-manager` (define behavior).
*   - [ ] Unit tests (or rule tests) verify the selection logic for various task types and stack profiles using mock context files and task data.

## Implementation Notes / Details 📝

*   This is likely the most complex part of `roo-dispatch`'s logic.
*   The "available modes summary" needs to be kept up-to-date and contain parseable information about each specialist's capabilities and tags.
*   The matching logic might involve:
    *   Keyword matching between task description/tags and mode capabilities/tags.
    *   Checking if mode's supported technologies align with the Stack Profile.
    *   Using the task `type` (e.g., "🛠️ Task", "🧪 Test", "🐞 Bug") to narrow down choices.
*   Define the strategy for handling ambiguity (e.g., prefer lead roles? prefer modes with fewer active tasks? ask `session-manager`?). Asking `session-manager` adds complexity but might be necessary initially.
*   Consider caching the parsed Stack Profile and mode summary within a rule execution if they are accessed multiple times.

## Subtasks / Checklist ☑️

*   - [ ] Identify/Create the specific rule file(s) for specialist selection.
*   - [ ] Implement logic to read and parse the Stack Profile JSON.
*   - [ ] Implement logic to read and parse the available modes summary Markdown.
*   - [ ] Implement logic to analyze the task artifact content for keywords, type, tags.
*   - [ ] Design and implement the core matching algorithm (task requirements + stack profile vs. mode capabilities + tags).
*   - [ ] Implement prioritization logic (specific vs. generalist).
*   - [ ] Implement logic to store the selected specialist ID(s).
*   - [ ] Implement error handling for "no suitable specialist found".
*   - [ ] Define and implement ambiguity handling strategy.
*   - [ ] Add comments to rules explaining the selection logic.
*   - [ ] Write tests verifying specialist selection for coding tasks (e.g., Python, React, CSS).
*   - [ ] Write tests verifying specialist selection for testing tasks (e.g., unit, integration, e2e).
*   - [ ] Write tests verifying specialist selection for refactoring or documentation tasks.
*   - [ ] Write tests verifying handling of "no specialist found" scenario.
*   - [ ] Write tests verifying handling of ambiguous selection scenario.