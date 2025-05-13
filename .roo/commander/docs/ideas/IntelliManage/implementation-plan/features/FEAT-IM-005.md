+++
# --- Feature Metadata ---
id = "FEAT-IM-005"
title = "Implement Roo Dispatch Mode (`roo-dispatch`)"
status = "⚪️ Planned"
type = "🌟 Feature"
created_date = "2025-04-28"
updated_date = "2025-04-28"
project_name = "intellimanage_implementation"
epic_id = "EPIC-IM-001"
priority = "🔥 Highest"
tags = ["roo-dispatch", "mode", "coordination", "delegation", "stateless", "efficiency"]
related_docs = ["MODE-SPEC-ROO-DISPATCH-001", "RULES-ROO-DISPATCH-001"]
depends_on = ["FEAT-IM-001"] # Depends on Core Framework
+++

# Feature: Implement Roo Dispatch Mode (`roo-dispatch`)

## Description ✍️

Create and implement the `roo-dispatch` mode, responsible for lightweight, stateless coordination of specific development tasks by delegating to operational specialists.

## Acceptance Criteria ✅

*   - [ ] `roo-dispatch.mode.md` file created according to spec (`MODE-SPEC-ROO-DISPATCH-001`).
*   - [ ] `.roo/rules-roo-dispatch/` directory and rules created according to spec (`RULES-ROO-DISPATCH-001`).
*   - [ ] `.ruru/modes/roo-dispatch/kb/` directory and KB outline implemented (`KB-OUTLINE-ROO-DISPATCH-001`).
*   - [ ] Correctly receives task goal and context from `session-manager`.
*   - [ ] Correctly retrieves detailed artifact context via CLE.
*   - [ ] Implements specialist selection logic based on task and project context.
*   - [ ] Correctly delegates sub-tasks to selected specialists via `new_task`.
*   - [ ] Correctly monitors specialist completion.
*   - [ ] Correctly aggregates results and reports final outcome (success/failure/blocker) back to `session-manager`.
*   - [ ] Handles errors reported by specialists gracefully by reporting them upwards.

## Tasks 📝

*   - [ ] **TASK-IM-501:** Create mode definition file `roo-dispatch.mode.md`. (Ref: `MODE-SPEC-ROO-DISPATCH-001`)
*   - [ ] **TASK-IM-502:** Create rules directory and implement rules files. (Ref: `RULES-ROO-DISPATCH-001`)
*   - [ ] **TASK-IM-503:** Create KB directory and populate initial KB content based on outline. (Ref: `KB-OUTLINE-ROO-DISPATCH-001`)
*   - [ ] **TASK-IM-504:** Implement task intake and context retrieval logic (using CLE).
*   - [ ] **TASK-IM-505:** Implement specialist selection algorithm (using Stack Profile, mode summary/tags).
*   - [ ] **TASK-IM-506:** Implement specialist `new_task` delegation logic (including context preparation).
*   - [ ] **TASK-IM-507:** Implement logic for monitoring `attempt_completion` from specialists.
*   - [ ] **TASK-IM-508:** Implement result aggregation and final reporting logic (to `session-manager`).
*   - [ ] **TASK-IM-509:** Write tests for specialist selection logic.
*   - [ ] **TASK-IM-510:** Write tests for delegation and result reporting flow.