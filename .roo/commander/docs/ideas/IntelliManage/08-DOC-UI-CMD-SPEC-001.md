# --- Basic Metadata ---
id = "DOC-UI-CMD-SPEC-001"
title = "IntelliManage: User Interaction & Command Specification"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "project_managers", "users", "contributors", "ai_modes"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md" # Assuming this is the schema doc template
tags = ["intellimanage", "specification", "ux", "ui", "commands", "interaction", "chatops"]
related_docs = ["DOC-ARCH-001", "DOC-FS-SPEC-001", "DOC-SCHEMA-001", "DOC-FUNC-SPEC-001", "DOC-METHODOLOGY-GUIDE-001", "DOC-AI-SPEC-001", "DOC-GITHUB-SPEC-001"] # Link to relevant docs
+++

# IntelliManage: User Interaction & Command Specification

## 1. Introduction / Overview 🎯

This document specifies how users interact with the IntelliManage project management framework within their development environment (e.g., VS Code with Roo Code). It defines the primary interaction methods, command syntax, expected system responses, and user experience principles.

The goal is to provide an intuitive, efficient, and powerful interface for managing projects without leaving the development context, leveraging both explicit commands and AI-driven natural language understanding.

## 2. Core Interaction Principles 💡

*   **Integrated:** Interactions occur primarily within the existing development environment's chat interface or dedicated panels.
*   **Context-Aware:** The system leverages the active project context (`.ruru/projects/[project_slug]/`) for commands, minimizing redundant parameters. Users can explicitly switch or specify project contexts.
*   **Command-Driven (with NLP):** A structured command syntax (`!pm ...`) provides predictable control, while the AI Engine also interprets natural language requests for common actions.
*   **AI-Assisted:** The AI proactively suggests actions (linking, status updates), generates content drafts, provides guidance, and summarizes information.
*   **Feedback-Oriented:** The system provides clear confirmation messages for actions taken and informative error messages.

## 3. Primary Interaction Method: Chat Interface 💬

The primary method for interacting with IntelliManage is through the integrated chat interface, using a dedicated command prefix.

*   **Command Prefix:** `!pm` (for Project Management)
*   **General Syntax:** `!pm <verb> [artifact_type] [identifier] [options...]`

## 4. Command Syntax Overview

*   **`<verb>`:** The action to perform (e.g., `create`, `list`, `show`, `update`, `delete`, `set-active`, `report`, `config`, `sync`, `help`).
*   **`[artifact_type]`:** The type of artifact being acted upon (e.g., `project`, `initiative`, `epic`, `feature`, `task`, `story`, `bug`). Optional for some commands (e.g., `set-active`, `report`). Use singular form.
*   **`[identifier]`:** The unique ID of a specific artifact (e.g., `TASK-123`, `EPIC-005`). Required for `show`, `update`, `delete`.
*   **`[options...]`:** Key-value pairs using flags to provide data or filter results.
    *   Flags use double hyphens (e.g., `--title`, `--status`, `--project`).
    *   Values with spaces **MUST** be enclosed in double quotes (e.g., `--title "Implement New Login Flow"`).
    *   Boolean flags can be specified without a value (e.g., `--archived`) or explicitly (`--archived true`, `--archived false`).

## 5. Detailed Command Specification ⌨️

*(Note: AI Engine should also understand natural language equivalents for common commands.)*

### 5.1. Project Setup & Configuration

*   **Set Active Project:**
    *   **Syntax:** `!pm set-active <project_slug>`
    *   **Description:** Sets the active project context for subsequent commands within the current session.
    *   **Required:** `<project_slug>`
    *   **Example:** `!pm set-active backend-api`
*   **Initialize Project:**
    *   **Syntax:** `!pm init project <project_slug> --name "Project Name" [--methodology <Scrum|Kanban|Custom|None>]`
    *   **Description:** Creates the necessary directory structure and `project_config.toml` for a new project.
    *   **Required:** `<project_slug>`, `--name`
    *   **Optional:** `--methodology` (defaults based on workspace config or "None")
    *   **Example:** `!pm init project frontend-app --name "Frontend Application" --methodology Scrum`
*   **Configure Project:**
    *   **Syntax:** `!pm config project <project_slug> --set <key=value> [--set <key=value>...]`
    *   **Description:** Modifies settings within the specified project's `project_config.toml`.
    *   **Required:** `<project_slug>`, `--set <key=value>`
    *   **Example:** `!pm config project frontend-app --set methodology=Kanban --set default_assignee="Team:UI"`
*   **Configure Workspace (Less Common):**
    *   **Syntax:** `!pm config workspace --add-project <project_slug> | --remove-project <project_slug> | --set <key=value>`
    *   **Description:** Modifies the workspace-level `.ruru/projects/projects_config.toml`.
    *   **Required:** At least one action flag (`--add-project`, `--remove-project`, `--set`).
    *   **Example:** `!pm config workspace --add-project shared-utils`

### 5.2. Artifact CRUD Operations

*(Assume `[--project <slug>]` is optional if an active project is set)*

*   **Create Artifact:**
    *   **Syntax:** `!pm create <initiative|epic|feature|task|story|bug> --title "..." [--project <slug>] [--parent <ID>] [--epic <ID>] [--feature <ID>] [--assignee <user>] [--priority <value>] [--status <value>] [--tags "tag1,tag2"] [--description "..."]`
    *   **Description:** Creates a new artifact file with specified TOML metadata and optional initial Markdown description. Required parent links (`--epic`, `--feature`) depend on artifact type.
    *   **Required:** `<artifact_type>`, `--title`. Parent links (`--epic`, `--feature`) required based on hierarchy. `--project` required if no active project.
    *   **Example:** `!pm create task --project backend-api --feature FEAT-010 --type "🛠️ Task" --title "Implement /users endpoint" --priority "🔼 High" --tags "api,user,backend"`
*   **Show Artifact Details:**
    *   **Syntax:** `!pm show <artifact_type> <ID> [--project <slug>]`
    *   **Description:** Displays the TOML metadata and Markdown content of a specific artifact.
    *   **Required:** `<artifact_type>`, `<ID>`. `--project` required if ID is not globally unique or no active project.
    *   **Example:** `!pm show task TASK-020 --project backend-api`
*   **List Artifacts:**
    *   **Syntax:** `!pm list <initiatives|epics|features|tasks> [--project <slug>] [--status <value>] [--type <value>] [--priority <value>] [--assignee <user>] [--tag <tag>] [--parent <ID>] [--epic <ID>] [--feature <ID>] [--sort <field:asc|desc>] [--limit <number>]`
    *   **Description:** Lists artifacts matching the specified filters. Defaults to listing tasks in the active project.
    *   **Optional:** Filter flags, `--sort`, `--limit`. `--project` required if no active project.
    *   **Example:** `!pm list tasks --project frontend-app --status "🟡 To Do" --assignee "User:Alice" --sort priority:desc`
*   **Update Artifact:**
    *   **Syntax:** `!pm update <artifact_type> <ID> [--project <slug>] [--title "..."] [--status <value>] [--priority <value>] [--assignee <user>] [--parent <ID>] [--epic <ID>] [--feature <ID>] [--add-tag <tag>] [--remove-tag <tag>] [--description "..."] [--add-subtask "..."] [--check-subtask "..."] [--uncheck-subtask "..."]`
    *   **Description:** Modifies fields in the TOML frontmatter or adds/updates the Markdown description/subtasks of an existing artifact.
    *   **Required:** `<artifact_type>`, `<ID>`, at least one update flag. `--project` required if ID is not globally unique or no active project.
    *   **Example:** `!pm update task TASK-020 --project backend-api --status "🔵 In Progress" --assignee "AI:dev-api"`
    *   **Example (Subtask):** `!pm update task TASK-001 --add-subtask "Write unit tests"`
    *   **Example (Subtask):** `!pm update task TASK-001 --check-subtask "Write unit tests"`
*   **Delete/Archive Artifact:**
    *   **Syntax:** `!pm delete <artifact_type> <ID> [--project <slug>]` OR `!pm archive <artifact_type> <ID> [--project <slug>]`
    *   **Description:** Permanently deletes or archives (moves to `archive/` subdirectory, sets status to Archived) an artifact. **Requires user confirmation.**
    *   **Required:** `<artifact_type>`, `<ID>`. `--project` required if ID is not globally unique or no active project.
    *   **Example:** `!pm archive task BUG-003 --project frontend-app`

### 5.3. Linking

*   **Link Items:**
    *   **Syntax:** `!pm link <CHILD_ID> --parent <PARENT_ID>` OR `!pm link <TASK_ID> --depends-on <OTHER_TASK_ID>`
    *   **Description:** Explicitly sets hierarchical (`parent_id`, `epic_id`, `feature_id`) or dependency (`depends_on`) links. The system infers which field to update based on artifact types.
    *   **Required:** Both IDs. Project context inferred or required via `--project`.
    *   **Example:** `!pm link TASK-005 --parent FEAT-002`
*   **Unlink Items:**
    *   **Syntax:** `!pm unlink <CHILD_ID> --parent` OR `!pm unlink <TASK_ID> --depends-on <OTHER_TASK_ID>`
    *   **Description:** Removes a specific link.
    *   **Required:** IDs and link type (`--parent` or `--depends-on`).
    *   **Example:** `!pm unlink TASK-005 --parent`

### 5.4. Reporting & Visualization

*   **Generate Report:**
    *   **Syntax:** `!pm report <report_type> [--project <slug>] [options...]`
    *   **Description:** Generates a specified report type (e.g., `sprint-summary`, `burndown`, `cfd`, `project-status`). Options depend on report type (e.g., `--sprint-id <id>`).
    *   **Required:** `<report_type>`. `--project` required if no active project.
    *   **Example:** `!pm report sprint-summary --project frontend-app --sprint-id sprint_1`
*   **Show Board (Textual):**
    *   **Syntax:** `!pm board [--project <slug>] [--status <value>] [--assignee <user>] [--swimlane <epic|feature>]`
    *   **Description:** Displays a textual representation of a Kanban-style board, grouping tasks by status columns.
    *   **Optional:** Filter flags, `--swimlane` to group rows. `--project` required if no active project.
    *   **Example:** `!pm board --project backend-api --swimlane epic`

### 5.5. GitHub Integration

*   **Trigger Sync:**
    *   **Syntax:** `!pm sync github [--project <slug>] [--force]`
    *   **Description:** Manually triggers a synchronization cycle with GitHub for the specified project (or active project). `--force` may attempt to overwrite based on conflict resolution strategy.
    *   **Optional:** `--project`, `--force`.
    *   **Example:** `!pm sync github --project frontend-app`
*   **Check Sync Status:**
    *   **Syntax:** `!pm status github [--project <slug>]`
    *   **Description:** Reports the status of the GitHub integration for the project (enabled/disabled, last sync time, any errors).
    *   **Optional:** `--project`.
    *   **Example:** `!pm status github`

### 5.6. Help

*   **Syntax:** `!pm help [command_verb]`
*   **Description:** Displays general help or help for a specific command verb.
*   **Example:** `!pm help create`, `!pm help`

## 6. AI Interaction & Confirmation ✅

*   **Natural Language:** Users can express common requests naturally (e.g., "Create a bug report for the login issue in the frontend app", "What tasks are assigned to me for the backend project?", "Mark TASK-123 as done"). The AI Engine parses this and translates it into the corresponding `!pm` command structure for the Core Logic Engine.
*   **Suggestions:** The AI Engine proactively suggests actions:
    *   Linking related items.
    *   Updating status based on Git/chat context.
    *   Breaking down large tasks.
*   **Confirmation Prompts:** Critical actions initiated by AI inference (e.g., changing status based on a commit message) or potentially destructive user commands (`delete`) **MUST** trigger a confirmation prompt to the user before the Core Logic Engine executes the change. The prompt should clearly state the proposed action and the affected artifact(s).

## 7. UI Elements (Future Considerations) ✨

While the primary interface is chat-based, future enhancements could include dedicated UI panels within the IDE:

*   **Project Explorer:** A tree view mirroring the `.ruru/projects/` structure, allowing browsing and potentially right-click actions.
*   **Kanban Board Panel:** A visual representation of the `!pm board` command.
*   **Roadmap View:** Visualizing Epics and Features over time.
*   **Artifact Detail View:** A custom editor or panel to view/edit artifact TOML and Markdown.

## 8. Error Handling & Feedback ⚠️

*   **Syntax Errors:** If a user enters an invalid `!pm` command syntax, the system (Interaction Layer or CLE) should respond with a helpful error message indicating the correct format or suggesting `!pm help`.
*   **Validation Errors:** If an operation violates schema rules or methodology constraints (e.g., invalid status transition), the CLE should reject the operation and provide a clear error message explaining the violation.
*   **Not Found Errors:** If an ID or project slug is invalid, provide a "Not Found" error.
*   **Permission Errors:** If file system operations fail, report a permission error.
*   **AI Errors:** If the AI fails to parse a request or generate content, it should apologize and ask the user to rephrase or provide more specific instructions.

## 9. Conclusion ✅

The IntelliManage user interaction model prioritizes a command-driven approach via the chat interface (`!pm` commands), augmented by AI-powered natural language understanding and proactive assistance. This provides both predictable control for experienced users and intuitive interaction for those preferring natural language. Clear command structures, consistent feedback, user confirmations for critical actions, and defined error handling contribute to a robust and user-friendly project management experience integrated directly into the development workflow.