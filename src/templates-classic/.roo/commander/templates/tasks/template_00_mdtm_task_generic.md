+++
id = "MDTM-TASK-GENERIC-V1"
title = "Generic MDTM Task Template"
context_type = "template"
scope = "Standard template for all Markdown-Driven Task Management (MDTM) tasks."
target_audience = ["all"]
granularity = "task"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["template", "mdtm", "task", "workflow"]
related_context = [
    ".roo/rules/01-standard-toml-md-format.md",
    ".roo/rules/02-mdtm-task-standard.md"
]
template_schema_doc = ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"

# --- Task Specific Fields ---
id = "TASK-[TEAM_PREFIX]-[YYYYMMDD-HHMMSS]" # e.g., TASK-PM-20250701-100000, TASK-TP-20250701-100500
title = "[Concise Task Title]"
description = """
[Detailed description of the task, its context, and overall goal.]
"""
acceptance_criteria = """
[Specific, measurable criteria that define successful completion of this task.]
"""
status = "🟡 To Do" # Options: 🟡 To Do, 🔵 In Progress, 🟣 Review, 🟢 Done, 🔴 Error, ⚪ Blocked
type = "[Task Type]" # e.g., "code-implementation", "documentation", "planning", "research"
priority = "medium" # Options: low, medium, high, critical
created_date = "{{YYYY-MM-DDTHH:MM:SSZ}}"
updated_date = "{{YYYY-MM-DDTHH:MM:SSZ}}"
assigned_to = "[mode_slug]" # The slug of the AI mode assigned to this task (e.g., "task-executor")
coordinator = "[mode_slug_or_task_id]" # The slug of the AI mode that delegated this task (e.g., "project-manager") or the ID of the parent MDTM task
parent_task_id = "[Parent MDTM Task ID]" # Optional: ID of the higher-level task this sub-task belongs to
input_artifacts = [] # Optional: Array of relative paths to input files/artifacts needed for this task
output_artifacts = [] # Optional: Array of relative paths to output files/artifacts produced by this task
related_docs = [] # Optional: Array of relative paths to other relevant documentation
tags = [] # Optional: Array of relevant keywords for categorization

# --- Checklist / Sub-Tasks ---
## Checklist
- [ ] [Sub-task 1]
- [ ] [Sub-task 2]
- [ ] [Sub-task 3]

# --- Log Entries / Notes 🪵 ---
## Log Entries
# [YYYY-MM-DDTHH:MM:SSZ] - [Mode/User]: [Log entry details]
# Example: 2025-07-16T10:30:00Z - project-manager: Delegated task to task-planner.
# Example: 2025-07-16T11:00:00Z - task-planner: Started task decomposition.
