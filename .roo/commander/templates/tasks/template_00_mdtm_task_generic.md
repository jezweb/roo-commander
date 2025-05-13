+++
# --- MDTM Task Generic ---
id = "TASK-[TEAM_PREFIX]-[YYYYMMDD-HHMMSS]" # e.g., TASK-MDP-20250701-100000, TASK-DPSTRAT-20250701-100500
title = "[Concise Task Title]"
status = "🟡 To Do" # Options: "🟡 To Do", "🔵 In Progress", "🟢 Done", "🔴 Error", "⚪ Blocked", "🟣 Review"
type = "⚙️ Task" # Default. Can be overridden (e.g., "🌟 Feature", "🐞 BugFix", "📖 Documentation", "📊 DataProductDesignPhase")
priority = "▶️ Medium" # Options: "🚨 Critical", "🟧 High", "▶️ Medium", "🔽 Low", "🧊 Lowest"

created_date = "[YYYY-MM-DDTHH:MM:SSZ]" # ISO 8601 format
updated_date = "[YYYY-MM-DDTHH:MM:SSZ]" # ISO 8601 format
# due_date = "[YYYY-MM-DD]" # Optional

assigned_to = "[mode_slug]" # Slug of the mode responsible for executing this task
coordinator = "[mode_slug_or_task_id]" # Slug of the delegating mode OR its MDTM Task ID
# parent_task_id = "" # Optional: ID of the parent MDTM task, if this is a sub-task

# --- Task Context & I/O ---
input_artifacts = [
    # List of relative paths (from workspace root or session artifacts root) to files needed for this task
    # e.g., ".roo/commander/sessions/SESSION_XYZ/artifacts/design_outputs/product_strategy_v1.md"
]
output_artifacts = [
    # List of relative paths (from workspace root or session artifacts root) to files created/modified by this task
]
related_docs = [
    # List of paths to other relevant documents, specifications, ADRs, etc.
]
tags = ["mdtm"] # Add specific task-related tags (e.g., "strategy-phase", "persona-dev", "data-schema")
template_schema_doc = ".roo/commander/templates/template_00_mdtm_task_generic.README.md" # Path to this task's schema

# --- AI Interaction Hints (Optional) ---
# context_type = "task_definition"
# target_audience = ["assigned_mode"] # Typically the mode in assigned_to
# granularity = "detailed_task"
+++

# Task: {{ title | default: "[Specify Task Title]" }}

## 1. Description ✍️

*   **Goal:** [Clearly state the primary objective of this task.]
*   **Context:** [Briefly explain the background or context for this task. Why is it needed?]
*   **Scope:** [Define what is included and, if necessary, what is explicitly excluded from this task.]

## 2. Acceptance Criteria ✅

*List specific, measurable, achievable, relevant, and time-bound (SMART-like) criteria that must be met for this task to be considered complete.*

*   - [ ] Criterion 1:
*   - [ ] Criterion 2:
*   - [ ] ...

## 3. Checklist / Sub-Tasks 📝

*Break down the task into actionable steps for the assigned mode. The assigned mode will update the status of these checklist items (`- [ ]` -> `- [✅]`) as it progresses.*

*   - [ ] Step 1: [Detailed action for the assigned mode]
*   - [ ] Step 2: [Detailed action for the assigned mode]
    *   - [ ] Sub-step 2a (if applicable)
*   - [ ] Step 3: [If this step involves creating a specific file, note the target path, e.g., "Create `product_strategy.md` in session artifacts."]
*   - [ ] Step 4: [Update this task's `output_artifacts` TOML field with the path(s) to created file(s).]
*   - [ ] Step 5: [Update this task's `status` TOML field to '🟢 Done' (or other appropriate status).]
*   - [ ] Step 6: [Report completion to the coordinator.]

## 4. Log Entries / Notes 🪵

*(The assigned mode should append its progress updates, observations, errors encountered, and significant actions here. Timestamps are recommended.)*

*   `[YYYY-MM-DDTHH:MM:SSZ] - [Mode Slug]: Starting task.`
*   `[YYYY-MM-DDTHH:MM:SSZ] - [Mode Slug]: Completed Step 1.`