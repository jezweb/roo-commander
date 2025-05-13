+++
# --- Basic Metadata ---
id = "KB-OUTLINE-SESSION-MANAGER-001"
title = "Knowledge Base Outline: session-manager"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["session-manager", "developers", "architects"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md" # Using the guide template schema
tags = ["intellimanage", "kb", "outline", "session-manager", "documentation", "specification"]
related_docs = ["MODE-SPEC-SESSION-MANAGER-001", "RULES-SESSION-MANAGER-001", "DATA-FORMAT-HANDOVER-001"]
+++

# Knowledge Base Outline: `session-manager`

## 1. Introduction / Overview 🎯

This document outlines the planned structure and content for the Knowledge Base (KB) located at `.ruru/modes/session-manager/kb/`. The KB provides the `session-manager` mode with detailed procedures, reference information, and best practices necessary to fulfill its role as the primary user interface and session coordinator for the IntelliManage framework.

## 2. KB Directory Structure 📂

```
.ruru/modes/session-manager/kb/
├── README.md                     # Overview of KB contents
├── 00-kb-usage-strategy.md       # Standard KB usage strategy (how the mode uses its own KB)
├── 01-session-lifecycle.md       # Detailed procedures for session start, resume, end
├── 02-goal-management.md         # Techniques for eliciting and tracking session goals
├── 03-request-parsing.md         # Guidelines for interpreting user input (NL & !pm)
├── 04-delegation-patterns.md     # Rules and examples for delegating to CLE, roo-dispatch, summarizer
├── 05-error-handling-escalation.md # Procedures for handling errors from delegates and escalating
├── 06-session-logging.md         # Standards and examples for session log content
├── 07-context-management.md      # Managing active project context
└── 08-handover-summary-usage.md  # How to interpret and use handover summaries
```

## 3. KB File Content Outlines 📝

### `README.md`

*   **Purpose:** Overview of the `session-manager` KB.
*   **Content:**
    *   Brief description of the `session-manager` role.
    *   Index of the KB files (listing filenames below with brief descriptions).
    *   Instructions on how the `session-manager` mode should use this KB.

### `00-kb-usage-strategy.md`

*   **Purpose:** Define how `session-manager` uses its own KB.
*   **Content:**
    *   Standard procedure for consulting the KB based on task type.
    *   How to reference KB documents in internal reasoning or logs.
    *   *(Based on standard KB usage rule template)*

### `01-session-lifecycle.md`

*   **Purpose:** Detail the exact steps for managing session start, resume, and end.
*   **Content:**
    *   **Session Start (New):** Greeting prompt, goal elicitation, session log initialization procedure.
    *   **Session Resume:** Handover summary directory (`.ruru/context/handovers/`) check logic, identifying latest summary, parsing summary content, confirmation prompt structure, setting initial state based on summary.
    *   **Session End:** Triggering handover summary generation (delegation to `agent-session-summarizer`), final session log entries.

### `02-goal-management.md`

*   **Purpose:** Provide strategies for understanding and tracking user goals.
*   **Content:**
    *   Techniques for asking clarifying questions (`ask_followup_question`) to refine vague goals.
    *   Examples of good vs. bad goal statements.
    *   How to store/update the current `[Session Goal]` internally and in logs.
    *   Handling changes in user goals mid-session.

### `03-request-parsing.md`

*   **Purpose:** Guide the interpretation of user commands.
*   **Content:**
    *   Recognizing `!pm` command syntax vs. natural language.
    *   Mapping natural language phrases to specific IntelliManage actions (e.g., "work on task 123" -> potentially update status, delegate to dispatch; "show me bugs" -> `!pm list bugs`).
    *   Entity extraction techniques (identifying artifact IDs, project slugs, statuses, assignees from text).
    *   Prioritizing explicit `!pm` commands when present.
    *   When to ask for clarification vs. making an assumption.

### `04-delegation-patterns.md`

*   **Purpose:** Define when and how to delegate to other components.
*   **Content:**
    *   **To Core Logic Engine (CLE):** Criteria for identifying direct `!pm` commands suitable for CLE execution. Format for passing commands/parameters. Handling CLE responses (data/errors).
    *   **To `roo-dispatch`:** Criteria for identifying development/test/refactor tasks. Required context to pass (goal, active project, artifact IDs). Structure of the `new_task` message. How to interpret completion reports from `roo-dispatch`.
    *   **To `agent-session-summarizer`:** Trigger conditions (user request, session end). Required context to pass (session log path, plan path, context window info). How to handle the returned summary file path.
    *   **To `roo-commander` (Escalation):** Criteria for escalation (persistent errors, complex planning needs). Required context for escalation message.

### `05-error-handling-escalation.md`

*   **Purpose:** Detail procedures for handling failures reported by delegates.
*   **Content:**
    *   Interpreting error messages from CLE, `roo-dispatch`, `agent-session-summarizer`.
    *   Standard procedure for reporting errors back to the user.
    *   Decision tree for handling persistent failures (retry? different approach? escalate?).
    *   Specific procedure for escalating to `roo-commander` (what context to provide).

### `06-session-logging.md`

*   **Purpose:** Define the standard content and format for session logs.
*   **Content:**
    *   Location: `.ruru/sessions/SESSION-YYYYMMDD-HHMMSS.md`.
    *   Required entries: Session start/goal, major delegations, major outcomes, user goal changes, session end.
    *   Recommended formatting (Markdown, timestamps).
    *   Tool usage (`edit` tools like `insert_content`, `append_to_file`).

### `07-context-management.md`

*   **Purpose:** Guide the management of the active project context.
*   **Content:**
    *   How to identify the active project (command, inference, default).
    *   Procedure for confirming ambiguous project context with the user.
    *   Importance of passing the correct `[project_slug]` during delegations.

### `08-handover-summary-usage.md`

*   **Purpose:** Explain how to parse and utilize the content of handover summary files.
*   **Content:**
    *   Mapping summary sections (Goal, Last Actions, Active Tasks, Next Steps, Blockers) to internal session state upon resumption.
    *   How to present the summary concisely to the user.
    *   Handling cases where the summary might be incomplete or outdated.

## 4. Conclusion ✅

This KB outline provides the necessary structure and content areas for the `session-manager` mode. Populating these documents with detailed procedures and examples will equip the mode to effectively manage user sessions and coordinate the IntelliManage workflow.