Okay, let's brainstorm some more concrete examples of shortcuts you could build for IntelliManage, primarily focusing on triggering predefined **Processes** via custom commands (like `!git` or `!wf`).

These range from simple conveniences to more complex workflow automations.

**I. Task & Artifact Management Shortcuts (`!task`, `!bug`, `!feat`, status shortcuts):**

*   **Shortcut:** `!task <title> [--feature <ID>] [--assignee <user>] [--tags <tags>]`
    *   **Underlying Process:** `create-default-task`
    *   **Action:** Assumes active project, sets type to `🛠️ Task`, status to `🟡 To Do`. Runs `!pm create task --project <active> --type "🛠️ Task" --status "🟡 To Do" --title "<title>" [--feature <ID>] [--assignee <user>] [--tags <tags>]`.
    *   **Benefit:** Very quick task creation for the active project.

*   **Shortcut:** `!bug <title> [--feature <ID>] [--priority <prio>]`
    *   **Underlying Process:** `create-default-bug`
    *   **Action:** Assumes active project, sets type to `🐞 Bug`, status to `🟡 To Do`. Runs `!pm create bug --project <active> --type "🐞 Bug" --status "🟡 To Do" --title "<title>" [--feature <ID>] [--priority <prio>]`.
    *   **Benefit:** Quick bug reporting.

*   **Shortcut:** `!feat <title> --epic <ID>`
    *   **Underlying Process:** `create-default-feature`
    *   **Action:** Assumes active project, sets type `🌟 Feature`, status `⚪️ Backlog`. Runs `!pm create feature --project <active> --type "🌟 Feature" --status "⚪️ Backlog" --title "<title>" --epic <ID>`.
    *   **Benefit:** Quick feature creation.

*   **Shortcut:** `!done <ID>` (e.g., `!done TASK-123`)
    *   **Underlying Process:** `mark-item-done`
    *   **Action:** Determines artifact type from ID prefix. Runs `!pm update <type> <ID> --status "🟢 Done"`. Could potentially prompt for closing comments or linked PRs.
    *   **Benefit:** Quickly close out tasks/bugs.

*   **Shortcut:** `!start <ID>` (e.g., `!start TASK-123`)
    *   **Underlying Process:** `start-task-assigned-to-me`
    *   **Action:** Determines artifact type. Runs `!pm update <type> <ID> --status "🔵 In Progress" --assignee "User:Me"` (assuming user context is available).
    *   **Benefit:** Quickly assign a task to yourself and mark it as started.

*   **Shortcut:** `!review <ID>` (e.g., `!review TASK-123`)
    *   **Underlying Process:** `move-item-to-review`
    *   **Action:** Determines artifact type. Runs `!pm update <type> <ID> --status "🟣 Review"`. Could potentially prompt for reviewers or PR link.
    *   **Benefit:** Quickly move an item to the review stage.

**II. View & Reporting Shortcuts (`!my`, `!show`, `!report` variations):**

*   **Shortcut:** `!my tasks` or `!my`
    *   **Underlying Process:** `list-my-active-tasks`
    *   **Action:** Assumes active project and current user. Runs `!pm list tasks --project <active> --assignee "User:Me" --status "!=🟢 Done" --status "!=🧊 Archived"` (or similar filter for active work).
    *   **Benefit:** Instantly see your current workload.

*   **Shortcut:** `!my bugs`
    *   **Underlying Process:** `list-my-active-bugs`
    *   **Action:** Runs `!pm list bugs --project <active> --assignee "User:Me" --status "!=🟢 Done" --status "!=🧊 Archived"`.
    *   **Benefit:** See bugs assigned to you.

*   **Shortcut:** `!show <ID>` (e.g., `!show FEAT-007`)
    *   **Underlying Process:** `show-item-details`
    *   **Action:** Determines artifact type from ID prefix. Runs `!pm show <type> <ID>`.
    *   **Benefit:** Slightly shorter than `!pm show <type> <ID>`.

*   **Shortcut:** `!report daily`
    *   **Underlying Process:** `generate-daily-standup-report`
    *   **Action:** Could run multiple `!pm list` commands: tasks completed yesterday, tasks in progress today, blockers. Formats into a standup-style report.
    *   **Benefit:** Automate preparation for daily standups.

*   **Shortcut:** `!report sprint` or `!report sprint <ID>`
    *   **Underlying Process:** `generate-current-sprint-report`
    *   **Action:** Identifies current/specified sprint ID. Runs `!pm report sprint-summary --sprint-id <ID>`. Could potentially add burndown data.
    *   **Benefit:** Quick access to sprint status.

**III. Workflow & Git Shortcuts (`!wf`, `!git`):**

*   **Shortcut:** `!wf start-feature --epic <ID> --title "..."`
    *   **Underlying Process:** `start-feature-process` (as discussed)
    *   **Action:** Creates Feature artifact, standard sub-tasks (Design, Dev, Test, Docs) linked via `depends_on` or just listed in description, potentially creates Git branch `feature/FEAT-ID-title-slug`.
    *   **Benefit:** Automates the setup for starting work on a new feature.

*   **Shortcut:** `!wf start-task <TASK_ID>`
    *   **Underlying Process:** `start-task-process`
    *   **Action:** Runs `!start <TASK_ID>` (assigns to self, sets In Progress), potentially creates/checks out a Git branch named `task/TASK_ID-title-slug`.
    *   **Benefit:** Quickly sets up your environment to begin work on a specific task.

*   **Shortcut:** `!git branch <ID>` (e.g., `!git branch TASK-123`)
    *   **Underlying Process:** `create-linked-branch`
    *   **Action:** Fetches artifact title using `!pm show <type> <ID>`. Runs `execute_command git checkout -b <type>/<ID>-<slugified-title>`.
    *   **Benefit:** Creates descriptively named branches linked to work items.

*   **Shortcut:** `!git commit -m "..."`
    *   **Underlying Process:** `smart-commit-process` (as discussed)
    *   **Action:** Runs `execute_command git add .`. Runs `execute_command git commit -m "..."`. Parses the message for `Fixes TASK-ID` etc. For each found ID, triggers `TASK-IM-710` (link commit) and `TASK-IM-711` (suggest status update).
    *   **Benefit:** Atomic commit + task linking + potential status update suggestion.

*   **Shortcut:** `!git push`
    *   **Underlying Process:** `push-current-branch`
    *   **Action:** Gets current branch name. Runs `execute_command git push origin <current_branch>`. Could potentially add upstream tracking (`-u`) if needed.
    *   **Benefit:** Simple push shortcut.

**IV. Session Management Shortcuts (`!session`, `!handover`):**

*   **Shortcut:** `!session goal <new goal description>`
    *   **Underlying Process:** (Handled directly by `session-manager` rules)
    *   **Action:** Updates the current session goal tracked by `session-manager`.
    *   **Benefit:** Explicit way to redirect the AI's focus for the session.

*   **Shortcut:** `!handover` or `!session summary`
    *   **Underlying Process:** `generate-handover-process`
    *   **Action:** Triggers `session-manager` to delegate summary generation to `agent-session-summarizer`.
    *   **Benefit:** Quick way to get the end-of-session summary.

**Implementation Considerations:**

*   **Trigger Parsing:** The main interaction handler needs to recognize these custom shortcuts (like `!git`, `!wf`, `!task`) and map them to the correct `!run process <process_name>` command.
*   **Process Definition:** Each underlying process needs to be carefully defined and implemented in `.ruru/processes/`.
*   **Context:** Processes need access to context like the active project slug and the current user, which `session-manager` should provide when triggering them.
*   **Start Simple:** Begin by implementing shortcuts for the most frequent and impactful actions.

These examples show how combining the structured `!pm` commands with automated Processes triggered by simple shortcuts can create a very powerful and efficient interface for IntelliManage.