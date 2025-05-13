+++
# --- Feature Metadata ---
id = "FEAT-IM-006"
title = "Implement Supporting Agent (`agent-session-summarizer`)"
status = "⚪️ Planned"
type = "🌟 Feature"
created_date = "2025-04-28"
updated_date = "2025-04-28"
project_name = "intellimanage_implementation"
epic_id = "EPIC-IM-001"
priority = "🔼 High"
tags = ["agent", "session-summarizer", "handover", "context"]
related_docs = ["MODE-SPEC-AGENT-SESSION-SUMMARIZER-001", "DATA-FORMAT-HANDOVER-001"]
depends_on = ["FEAT-IM-001"] # Depends on Core Framework
+++

# Feature: Implement Supporting Agent (`agent-session-summarizer`)

## Description ✍️

Create and implement the `agent-session-summarizer` mode, responsible for reading session artifacts and generating structured handover summaries.

## Acceptance Criteria ✅

*   - [ ] `agent-session-summarizer.mode.md` file created according to spec (`MODE-SPEC-AGENT-SESSION-SUMMARIZER-001`).
*   - [ ] Rules and KB for the agent are created.
*   - [ ] Agent can correctly receive requests from `session-manager`.
*   - [ ] Agent can read specified session logs, planning docs, and task files via CLE.
*   - [ ] Agent can extract key information (goals, actions, tasks, blockers).
*   - [ ] Agent correctly populates the handover summary template (`DATA-FORMAT-HANDOVER-001`).
*   - [ ] Agent correctly writes the timestamped summary file to `.ruru/context/handovers/`.
*   - [ ] Agent reports the path to the generated summary file back successfully.
*   - [ ] Agent handles errors (e.g., missing input files) gracefully.

## Tasks 📝

*   - [ ] **TASK-IM-601:** Create mode definition file `agent-session-summarizer.mode.md`. (Ref: `MODE-SPEC-AGENT-SESSION-SUMMARIZER-001`)
*   - [ ] **TASK-IM-602:** Create rules and KB directory/content for the agent.
*   - [ ] **TASK-IM-603:** Implement logic for reading input artifacts via CLE.
*   - [ ] **TASK-IM-604:** Implement logic for extracting required information from artifacts.
*   - [ ] **TASK-IM-605:** Implement logic for populating the handover summary template. (Ref: `DATA-FORMAT-HANDOVER-001`)
*   - [ ] **TASK-IM-606:** Implement logic for generating timestamped filename and writing summary file to `.ruru/context/handovers/`.
*   - [ ] **TASK-IM-607:** Implement result reporting logic.
*   - [ ] **TASK-IM-608:** Write tests for information extraction and template population.