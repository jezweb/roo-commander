+++
# --- Basic Metadata ---
id = "CONCEPT-PROCESS-VS-WORKFLOW-001"
title = "Concept: Processes vs. Workflows in Roo Code & IntelliManage"
status = "definition"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "users", "community", "architects"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md" # Using documentation template
tags = ["process", "workflow", "definition", "concepts", "roo-commander", "intellimanage", "automation", "status"]
related_docs = ["CONCEPT-SHORTCUTS-001"]
+++

# Concept: Processes vs. Workflows in Roo Code & IntelliManage

## 1. Introduction: Clarifying Terminology ❓

When discussing automation and how work gets done in systems like Roo Code and IntelliManage, the terms "Process" and "Workflow" are often used. While related, they typically refer to distinct concepts within this context. Understanding the difference is key to designing and using the system effectively. This document aims to clarify these terms.

## 2. Defining "Process" (Roo Code Context) ⚙️

*   **What it is:** A **Process** refers to a **specific, predefined, and executable sequence of automated steps** defined within the Roo Code framework.
*   **Location:** These are typically defined as scripts or configuration files stored in a dedicated location, likely `.ruru/processes/`.
*   **Purpose:** To **automate** a concrete, repeatable, multi-step operation that might otherwise require multiple manual commands or interactions.
*   **Characteristics:**
    *   Has defined steps/logic.
    *   Can potentially accept input parameters.
    *   Is invoked explicitly (e.g., via `!run process <name>`, or a shortcut like `!git` that triggers a process).
    *   Often involves calling specific tools (MCP commands) or delegating tasks to specific modes (AI agents).
*   **Analogy:** A shell script (`.sh`), a macro in a program, a specific recipe in a cookbook.
*   **Examples:**
    *   `git-commit-process`: Takes a message, runs `git add .`, runs `git commit`, parses the message to link mentioned IntelliManage tasks. Triggered by `!git commit ...`.
    *   `start-feature-process`: Takes an Epic ID and title, creates a Feature artifact using `!pm create feature`, creates standard sub-tasks using `!pm create task`, potentially creates a Git branch using `execute_command git checkout -b ...`. Triggered by `!wf start-feature ...`.

## 3. Defining "Workflow" (General & PM Context) 🌊

*   **What it is:** A **Workflow** is generally a **broader, often more conceptual description of how work progresses or flows** from one state or activity to another. It describes the *path* work takes.
*   **Common Meanings:**
    *   **a) Status Workflow (e.g., Kanban/Scrum Workflow):** This refers to the defined sequence of **statuses** an IntelliManage artifact (like a Task or Feature) moves through.
        *   *Example:* `⚪️ Backlog` -> `🟡 To Do` -> `🔵 In Progress` -> `🟣 Review` -> `🟢 Done`.
        *   *Defined by:* Team agreement, methodology choice (`project_config.toml`), and represented by the `status` field in artifacts.
    *   **b) User/Activity Workflow:** This refers to the typical **sequence of actions a user performs** to achieve a larger goal, often involving multiple tools, commands, and decisions.
        *   *Example (Fixing a Bug):* Assign bug (`!pm update BUG-1...`) -> Create branch (`git checkout -b ...`) -> Find code (`@dev-python find ...`) -> Fix code (Edit) -> Write test (`@test-unit write ...`) -> Run tests (`!run process run-tests`) -> Commit (`!git commit ...`) -> Create PR -> Update bug status (`!pm update BUG-1...`).
*   **Purpose:** To **describe or model** the stages of completion or the sequence of activities involved in getting work done.
*   **Characteristics:**
    *   Often descriptive or conceptual.
    *   Represents a path or sequence of states/activities.
    *   Not typically "executed" as a single command (you *follow* a workflow).
*   **Analogy:** The stages on a factory assembly line (Status Workflow), the overall process of building a house from foundation to finishing touches (User/Activity Workflow).

## 4. Key Differences Summarized

| Feature         | Process (Roo Code)                     | Workflow (General/PM)                     |
| :-------------- | :------------------------------------- | :---------------------------------------- |
| **Nature**      | Executable, Automated Script           | Descriptive, Conceptual Path/Sequence     |
| **Scope**       | Specific, Multi-Step Operation         | Broader Flow of Work (Statuses or Actions)|
| **Invocation**  | Explicit (`!run process`, `!git`, etc.) | Followed by user / Tracked via status     |
| **Purpose**     | Automate Repetitive Tasks              | Describe/Model How Work Progresses        |
| **Location**    | `.ruru/processes/` (Likely)            | Team Agreement, Config (`status`), Actions|
| **Granularity** | Concrete sequence of actions           | Higher-level stages or activities         |

## 5. Relationship: Processes Support Workflows

The key relationship is that **Processes are created to automate or streamline parts of Workflows.**

*   You might identify a repetitive part of your **User Workflow** (like committing code and linking it to a task) and create a **Process** (`git-commit-process`) triggered by a shortcut (`!git commit`) to automate it.
*   The **Status Workflow** (e.g., Backlog -> Done) defines the valid states a task can be in, and **Processes** or manual commands (`!pm update task ... --status ...`) are used to move tasks *through* that workflow.

Using the `!wf start-feature` example:
*   The **User Workflow** is "Starting work on a new feature".
*   The **Process** `start-feature-process` automates the *initial steps* of that workflow (creating artifacts, tasks, branch).
*   The artifacts created will then move through the **Status Workflow** as development progresses.

## 6. Conclusion

Understanding the distinction is helpful:

*   Use **Workflow** to talk about the overall flow of work – either the stages a task goes through (Status Workflow) or the sequence of activities a person performs (User Workflow).
*   Use **Process** to refer to the specific, automated scripts within Roo Code (`.ruru/processes/`) that execute a defined sequence of steps, often triggered by shortcuts (`!run`, `!git`, `!wf`).

By defining robust Processes, we can make common Workflows much more efficient within Roo Code and IntelliManage.