+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-205"
title = "Design mechanism for monitoring WIP limits (may involve AI Engine querying CLE)"
status = "⚪️ Planned"
type = "🛠️ Task" # Could also be considered a Spike/Research task initially
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-002"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Likely Architect/Senior Dev
# reporter = "..."
priority = "▶️ Medium" # Important for Kanban, but monitoring is less critical than core CRUD
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["design", "architecture", "cle", "ai", "methodology", "kanban", "wip-limits", "monitoring"]
related_docs = ["DOC-METHODOLOGY-GUIDE-001", "DOC-SCHEMA-001", "DOC-AI-SPEC-001", "TASK-IM-110"]
depends_on = ["TASK-IM-110"] # Depends on loading config where limits are defined
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Design mechanism for monitoring WIP limits

## Description ✍️

Design a mechanism within the IntelliManage framework to monitor Work-In-Progress (WIP) limits for projects configured with the "Kanban" methodology. This involves:
1.  Defining how WIP limits are stored in `project_config.toml`.
2.  Determining which component (CLE, AI Engine, Interaction Layer) is responsible for checking the limits.
3.  Defining the trigger points for checking WIP limits (e.g., before moving a task *into* a limited status).
4.  Defining the action to take when a limit is exceeded (e.g., warning message, preventing the move).

Direct *enforcement* (preventing the move) can be complex in a distributed/file-based system, so the initial focus might be on *monitoring and warning*.

## Acceptance Criteria ✅

*   - [ ] The `project_config.toml` schema (`TASK-IM-103`) includes a clear structure for defining WIP limits per status (e.g., `[wip_limits]` table).
*   - [ ] The configuration loading logic (`TASK-IM-110`) correctly parses WIP limit definitions.
*   - [ ] A clear decision is documented on *which component* performs the WIP check (e.g., AI Engine proactively monitors, CLE checks during `updateArtifact`, Interaction Layer checks before sending command).
*   - [ ] A clear decision is documented on *when* the WIP check is triggered (e.g., before status update, periodically, on user request).
*   - [ ] A clear decision is documented on the *action* taken when a limit is exceeded (e.g., Warning message via Interaction Layer, Error preventing status update).
*   - [ ] The design considers potential race conditions or inconsistencies in a file-based system.
*   - [ ] The design document outlines the necessary interactions between components (e.g., AI Engine querying CLE for current counts per status).

## Implementation Notes / Details 📝

*   **Storage:** The schema (`DOC-SCHEMA-001`) suggests `[wip_limits]` table in `project_config.toml`, e.g., `[wip_limits] \n "🔵 In Progress" = 5 \n "🟣 Review" = 3`. Ensure this is formally added.
*   **Checking Component:**
    *   **CLE:** Checking during `updateArtifact` allows potential *enforcement* but might slow down updates. Requires CLE to perform a list/count operation before the update.
    *   **AI Engine:** Can monitor periodically or on demand (`!pm check wip`). Queries CLE for counts. Can only *warn* or *advise*, cannot directly enforce unless integrated tightly with the command flow.
    *   **Interaction Layer/Coordinators (`session-manager`):** Can check *before* sending the `updateArtifact` command to CLE. Requires querying counts first. Provides a good point for user warning/confirmation.
*   **Trigger Points:** Checking *before* moving an item *into* a limited status is the most common Kanban practice.
*   **Action:** A user warning is the simplest and safest initial implementation. Enforcement adds complexity.
*   **Mechanism:** The check involves:
    1.  Getting the target status and project slug.
    2.  Checking if the project methodology is Kanban.
    3.  Reading the WIP limit for the target status from the project config.
    4.  Querying the CLE (`findArtifacts`/`listArtifacts`) to count items *currently* in the target status for that project.
    5.  Comparing the count (+1 for the item being moved) against the limit.

## Design Decisions to Make & Document ✏️

1.  **Finalize Config Schema:** Confirm the `[wip_limits]` table structure in `project_config.toml`.
2.  **Checking Component:** Choose and justify: CLE, AI Engine, or Interaction Layer/Coordinator. (Recommendation: Interaction Layer/Coordinator for warnings, CLE if strict enforcement is desired later).
3.  **Trigger Point:** Define: Before `updateArtifact` call, during `updateArtifact`, periodic AI check, or manual command? (Recommendation: Before `updateArtifact` call initiated by user/coordinator).
4.  **Action on Exceeding Limit:** Define: Warning only, prevent action, require override? (Recommendation: Warning only for v1.0).
5.  **Interface for Count Query:** Define how the checking component gets the current count per status from the CLE (e.g., extend `listArtifacts` or add a dedicated `countArtifactsByStatus` method).

## Subtasks / Checklist ☑️

*   - [ ] Update `project_config.toml` schema (`TASK-IM-103`) to formally include `[wip_limits]`.
*   - [ ] Update config loading (`TASK-IM-110`) to parse `wip_limits`.
*   - [ ] **DECISION:** Document the chosen Checking Component.
*   - [ ] **DECISION:** Document the chosen Trigger Point.
*   - [ ] **DECISION:** Document the chosen Action on Exceeding Limit.
*   - [ ] Design the CLE interface needed to get counts per status.
*   - [ ] Create a design document/section summarizing the chosen mechanism, interactions, and rationale.
*   - [ ] (Optional - Implementation Task) Implement the count query logic in CLE.
*   - [ ] (Optional - Implementation Task) Implement the checking logic in the chosen component.