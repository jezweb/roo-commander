+++
# --- Basic Metadata ---
id = "CONCEPT-SHORTCUTS-001"
title = "Concept: Application Shortcuts in Roo Code & IntelliManage"
status = "idea"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "users", "community", "architects"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md" # Using documentation template
tags = ["shortcuts", "efficiency", "ux", "power-user", "roo-commander", "intellimanage", "processes", "aliases", "commands"]
related_docs = ["DOC-UI-CMD-SPEC-001", "CONCEPT-PROCESS-VS-WORKFLOW-001"]
+++

# Concept: Application Shortcuts in Roo Code & IntelliManage

## 1. Introduction: The Need for Speed ⚡

As AI-driven development environments like Roo Code become more powerful, managing interactions efficiently is key. While natural language is flexible, repetitive tasks or common operations benefit greatly from **shortcuts** – quicker, more direct ways to invoke specific actions, modes, or sequences.

This document explores various types of shortcuts that exist or could be implemented within Roo Code, with a particular focus on how they can streamline workflows for the proposed **IntelliManage** project management framework. The goal is to create an environment that is both powerful for complex tasks and highly efficient for day-to-day operations, catering especially to power users.

## 2. Why Use Shortcuts? 🤔

*   **Speed:** Directly invoking commands or processes is faster than typing descriptive natural language prompts for routine actions.
*   **Consistency:** Predefined shortcuts (commands, processes) ensure operations are performed the same way every time.
*   **Reduced Errors:** Less chance of misinterpretation compared to complex natural language, especially for structured operations like PM updates.
*   **Power User Appeal:** Experienced users often prefer concise commands and aliases for efficiency.
*   **Automation:** Shortcuts, especially those triggering processes, allow automation of multi-step sequences.

## 3. Types of Shortcuts in Roo Code / IntelliManage

We can think of shortcuts in several categories:

### 3.1. Direct Commands (`!command`)

*   **Concept:** Using a prefix (`!`) followed by a command verb and arguments. This bypasses complex NLP for well-defined actions.
*   **IntelliManage:** The **`!pm` command set** (`DOC-UI-CMD-SPEC-001`) is the foundational shortcut system for IntelliManage. Learning commands like `!pm create task --title "..." --project X` or `!pm list tasks --status "In Progress"` provides direct, efficient control over PM artifacts.
*   **Example:** `!pm update TASK-123 --status "🟢 Done"`

### 3.2. Mode Invocation (`@mode`)

*   **Concept:** Directly switching to or addressing a specific AI agent (mode).
*   **IntelliManage:** Useful for explicitly engaging with `@session-manager` (the primary interface), `@roo-commander` (for strategic tasks), or potentially specific utility agents if needed. It's a shortcut to the right "conversation partner".
*   **Example:** `@session-manager show me my active tasks`

### 3.3. Processes (`!run process` or Custom Triggers like `!git`, `!wf`)

*   **Concept:** Executing predefined, multi-step scripts stored within the Roo Code framework (likely in `.ruru/processes/`). These automate common sequences.
*   **IntelliManage:** This offers huge potential for PM shortcuts. We could create:
    *   A `git-commit-process` triggered by `!git commit -m "..."` that automatically links the commit to mentioned tasks (`TASK-IM-709`/`710`).
    *   A `start-feature-process` triggered by `!wf start-feature --epic <ID> --title "..."` that creates the Feature artifact, standard sub-tasks (Design, Dev, Test), and maybe a Git branch.
    *   A `close-task-process` triggered by `!wf close-task <ID>` that updates status, prompts for PR links, etc.
*   **Custom Triggers:** Commands like `!git` or `!wf` would essentially act as user-friendly aliases or entry points for running specific underlying processes.
*   **Example:** `!git commit -m "Fixes TASK-123 Login button style"` (triggers the commit process)
*   **Example:** `!wf start-feature --epic EPIC-001 --title "User Profile Page"` (triggers the feature setup process)

### 3.4. Templates (`.ruru/templates/`)

*   **Concept:** Using predefined file structures as a starting point.
*   **IntelliManage:** When creating artifacts (`!pm create ...`), the system should use templates containing the standard TOML frontmatter and Markdown sections. This is an implicit shortcut ensuring consistency.
*   **Example:** `!pm create bug --title "..."` uses a bug report template.

### 3.5. User-Defined Aliases (Potential Future Feature)

*   **Concept:** Allowing users to define their own short commands that expand to longer, frequently used commands or command sequences.
*   **IntelliManage:** Power users could create personal shortcuts for their common PM actions.
    *   `alias !mybugs = !pm list bugs --project my-main-project --assignee "User:Me" --status "!=🟢 Done"`
    *   `alias !td = !pm update task %1 --status "🟢 Done"` (where %1 takes the task ID)
*   **Example:** `!mybugs`
*   **Example:** `!td TASK-456`

### 3.6. IDE Keyboard Shortcuts (Potential Future Feature)

*   **Concept:** Mapping IDE keyboard shortcuts (e.g., in VS Code) to specific IntelliManage actions via the Roo Code extension.
*   **IntelliManage:** Could provide the fastest invocation for actions like creating a default task or marking the current task as complete.
*   **Example:** `Ctrl+Shift+P` -> "IntelliManage: Create New Task"

## 4. Implementation Strategy

1.  **Foundation:** Solidify the `!pm` command set as the primary, reliable shortcut mechanism.
2.  **Processes:** Implement key **Processes** (`.ruru/processes/`) for common multi-step workflows (like Git commit linking, starting features/tasks). Create simple triggers like `!git` or `!wf` to run these processes.
3.  **Aliases:** Consider adding a general **User-Defined Alias** feature to Roo Code itself, which would naturally benefit IntelliManage usage.
4.  **Templates:** Ensure artifact creation consistently uses predefined templates.
5.  **Keyboard Shortcuts:** Explore IDE keyboard shortcuts as a later enhancement for hyper-optimization.

## 5. Conclusion

Shortcuts are essential for making a powerful system like IntelliManage efficient and enjoyable for daily use. By leveraging direct commands (`!pm`), automating workflows with Processes (triggered by `!run`, `!git`, `!wf`, etc.), and potentially adding user-defined aliases, we can create a highly productive project management experience directly within Roo Code.