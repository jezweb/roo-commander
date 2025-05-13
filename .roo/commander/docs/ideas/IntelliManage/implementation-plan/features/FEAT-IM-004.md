+++
# --- Feature Metadata ---
id = "FEAT-IM-004"
title = "Implement Session Manager Mode (`session-manager`)"
status = "⚪️ Planned"
type = "🌟 Feature"
created_date = "2025-04-28"
updated_date = "2025-04-28"
project_name = "intellimanage_implementation"
epic_id = "EPIC-IM-001"
priority = "🔥 Highest"
tags = ["session-manager", "mode", "coordination", "ux", "session-state"]
related_docs = ["MODE-SPEC-SESSION-MANAGER-001", "RULES-SESSION-MANAGER-001", "DATA-FORMAT-HANDOVER-001"]
depends_on = ["FEAT-IM-001", "FEAT-IM-006"] # Depends on Core and Summarizer Agent
+++

# Feature: Implement Session Manager Mode (`session-manager`)

## Description ✍️

Create and implement the `session-manager` mode, responsible for user interaction, session state, high-level goal tracking, and primary delegation within IntelliManage.

## Acceptance Criteria ✅

*   - [ ] `session-manager.mode.md` file created according to spec (`MODE-SPEC-SESSION-MANAGER-001`).
*   - [ ] `.roo/rules-session-manager/` directory and rules created according to spec (`RULES-SESSION-MANAGER-001`).
*   - [ ] `.ruru/modes/session-manager/kb/` directory and KB outline implemented (`KB-OUTLINE-SESSION-MANAGER-001`).
*   - [ ] Session start/resume logic correctly loads/ignores handover summaries.
*   - [ ] Session goal elicitation and tracking functions correctly.
*   - [ ] Correctly delegates direct `!pm` commands to CLE.
*   - [ ] Correctly delegates development tasks to `roo-dispatch`.
*   - [ ] Correctly delegates summary generation to `agent-session-summarizer`.
*   - [ ] Correctly reports outcomes from delegates back to the user.
*   - [ ] Session logging to `.ruru/sessions/` is functional.
*   - [ ] Active project context is managed correctly.
*   - [ ] Basic error handling and escalation path to `roo-commander` is implemented.

## Tasks 📝

*   - [ ] **TASK-IM-401:** Create mode definition file `session-manager.mode.md`. (Ref: `MODE-SPEC-SESSION-MANAGER-001`)
*   - [ ] **TASK-IM-402:** Create rules directory and implement rules files. (Ref: `RULES-SESSION-MANAGER-001`)
*   - [ ] **TASK-IM-403:** Create KB directory and populate initial KB content based on outline. (Ref: `KB-OUTLINE-SESSION-MANAGER-001`)
*   - [ ] **TASK-IM-404:** Implement session start/resume logic (handover check, prompts).
*   - [ ] **TASK-IM-405:** Implement session goal management logic.
*   - [ ] **TASK-IM-406:** Implement request parsing and routing logic (CLE vs. roo-dispatch vs. summarizer).
*   - [ ] **TASK-IM-407:** Implement delegation logic for `roo-dispatch`.
*   - [ ] **TASK-IM-408:** Implement delegation logic for `agent-session-summarizer`.
*   - [ ] **TASK-IM-409:** Implement session logging functionality.
*   - [ ] **TASK-IM-410:** Implement active project context tracking.
*   - [ ] **TASK-IM-411:** Implement error handling and escalation logic.
*   - [ ] **TASK-IM-412:** Write tests for session lifecycle management.
*   - [ ] **TASK-IM-413:** Write tests for delegation routing logic.