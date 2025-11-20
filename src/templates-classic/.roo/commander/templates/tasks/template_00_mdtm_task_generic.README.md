## Generic MDTM Task Template - Schema Documentation

This document provides the schema and usage guidelines for the `template_00_mdtm_task_generic.md` file. This template is the standard for creating all Markdown-Driven Task Management (MDTM) tasks within the Roo Commander ecosystem.

### Purpose

This template is used by coordinator modes (like `roo-commander` or a Manager mode) to create tasks for specialist modes. Specialist modes, in turn, read these task files to understand their assignments and update them to reflect their progress.

### Usage

1.  Copy the `template_00_mdtm_task_generic.md` file to the appropriate task directory (as defined in `.roo/rules/02-mdtm-task-standard.md`).
2.  Rename the file according to the MDTM naming convention: `TASK-[TEAM_PREFIX]-[YYYYMMDD-HHMMSS].md`.
3.  Populate the TOML frontmatter and Markdown body as described below.

### TOML Frontmatter Schema

The TOML frontmatter provides structured metadata for the MDTM task. All fields are required unless marked as optional.

```toml
# --- Task Specific Fields ---
id = "TASK-[TEAM_PREFIX]-[YYYYMMDD-HHMMSS]" # REQUIRED. Unique ID for the task. Must match the filename core.
                                            # Example: "TASK-PM-20250701-100000", "TASK-TP-20250701-100500"
title = "[Concise Task Title]"             # REQUIRED. A brief, descriptive title for the task.
description = """                             # REQUIRED. Detailed description of the task, its context, and overall goal.
[Detailed description of the task, its context, and overall goal.]
"""
acceptance_criteria = """                    # REQUIRED. Specific, measurable criteria that define successful completion of this task.
[Specific, measurable criteria that define successful completion of this task.]
"""
status = "🟡 To Do"                         # REQUIRED. Current status of the task. Options: "🟡 To Do", "🔵 In Progress", "🟣 Review", "🟢 Done", "🔴 Error", "⚪ Blocked".
type = "[Task Type]"                       # REQUIRED. Categorization of the task (e.g., "code-implementation", "documentation", "planning", "research").
priority = "medium"                         # REQUIRED. Importance of the task. Options: "low", "medium", "high", "critical".
created_date = "{{YYYY-MM-DDTHH:MM:SSZ}}"  # REQUIRED. Timestamp when the task was created (ISO 8601 format).
updated_date = "{{YYYY-MM-DDTHH:MM:SSZ}}"  # REQUIRED. Timestamp of the last update to the task (ISO 8601 format).
assigned_to = "[mode_slug]"                 # REQUIRED. The slug of the AI mode assigned to this task (e.g., "task-executor").
coordinator = "[mode_slug_or_task_id]"    # REQUIRED. The slug of the AI mode (e.g., "roo-commander", "project-manager") or the MDTM Task ID of the parent task that delegated/created this task. This establishes the reporting line.
parent_task_id = "[Parent MDTM Task ID]"   # OPTIONAL. ID of the higher-level task this sub-task belongs to.
input_artifacts = []                        # OPTIONAL. Array of relative paths to input files/artifacts needed for this task.
output_artifacts = []                       # OPTIONAL. Array of relative paths to output files/artifacts produced by this task.
related_docs = []                           # OPTIONAL. Array of relative paths to other relevant documentation.
tags = []                                   # OPTIONAL. Array of relevant keywords for categorization.
```

### Markdown Body Structure

The Markdown body provides the detailed instructions and logging for the task.

#### `## Checklist`

*   A list of actionable sub-tasks for the `assigned_to` mode to complete.
*   Each item should be a Markdown checklist item (`- [ ]`).
*   Modes are responsible for updating the status of these items (`- [✅]`) as they are completed.

#### `## Log Entries / Notes 🪵`

*   This section is used by the `assigned_to` mode to append chronological log entries, progress notes, observations, errors encountered, or significant actions taken.
*   Each entry **MUST** be timestamped (ISO 8601 format) and attribute the action to the responsible mode or user.
*   Example:
    ```
    # [YYYY-MM-DDTHH:MM:SSZ] - [Mode/User]: [Log entry details]
    2025-07-16T10:30:00Z - project-manager: Delegated task to task-planner.
    2025-07-16T11:00:00Z - task-planner: Started task decomposition.
    ```
