# 🚀 Project Initialization and Documentation Workflow

**Version:** 0.1
**Date:** 2025-03-30

## 🎯 Goal

To establish a standardized, semi-automated workflow for initiating new projects within the Roo Commander environment. This workflow aims to:

1.  Minimize manual setup steps for the user.
2.  Ensure consistent project structure, particularly for persistent documentation.
3.  Facilitate better context management and project tracking across different modes and sessions.
4.  Clearly define responsibilities for maintaining project documentation.

## 💡 Proposed New Modes

1.  **Discovery Agent (`discovery-agent`)**
    *   **Role:** Interacts with the user immediately following a high-level project directive (e.g., "Create a website for Business X").
    *   **Responsibilities:**
        *   Ask clarifying questions about project goals, target audience, key features, desired style/tone, technical constraints, etc., using the `ask_followup_question` tool iteratively.
        *   Continue questioning until sufficient detail is gathered to form a basic project brief.
        *   Summarise the gathered requirements into a concise markdown format.
        *   Report completion and provide the summarised requirements to the orchestrating mode (e.g., `Roo Commander`).
    *   **Permissions:** `ask_followup_question`.

2.  **Project Initializer (`project-initializer`)**
    *   **Role:** Sets up the standard project directory structure and initial documentation files.
    *   **Responsibilities:**
        *   Receive the project topic/name and the requirements summary from the orchestrating mode.
        *   Prompt the user (via `ask_followup_question`) to confirm or provide a unique `project_slug` (used for directory naming), suggesting one based on the topic.
        *   Delegate creation of the base project journal directory: `project_journal/[project_slug]/` to the `code` mode.
        *   Delegate creation of standard subdirectories (`planning`, `wbs`, `sprints`, `decision_log`, `technical_notes`, `formal_docs`) within the project journal directory to the `code` mode.
        *   Delegate creation of initial *empty* placeholder files (e.g., `planning/project_plan.md`, `wbs/work_breakdown_structure.md`) to the `code` mode.
        *   Delegate writing the received requirements summary to `project_journal/[project_slug]/planning/requirements.md` to the `code` mode.
        *   Report completion.
    *   **Permissions:** `ask_followup_question`, `new_task` (to delegate to `code` mode).

## 🔄 Proposed Workflow Sequence

1.  **User Directive:** User provides a high-level goal (e.g., "Create a landing page for my new app").
2.  **Orchestration (`Roo Commander`):** Receives directive, recognizes need for discovery, delegates to `Discovery Agent`.
    *   `new_task`: mode=`discovery-agent`, message="Elicit requirements for project: '[User Directive]'..."
3.  **Discovery (`Discovery Agent`):** Interacts with user via `ask_followup_question` until requirements are clear. Summarises requirements.
    *   `attempt_completion`: result="Requirements gathered: [Summary]"
4.  **Orchestration (`Roo Commander`):** Receives summary, delegates to `Project Initializer`.
    *   `new_task`: mode=`project-initializer`, message="Initialize project for '[Topic]'. Requirements: [Summary]..."
5.  **Initialization (`Project Initializer`):** Prompts user for `project_slug`. Delegates directory/file creation (including `requirements.md`) via `new_task` to `code` mode.
    *   `ask_followup_question`: "Suggest slug '[slug]'. OK?"
    *   `new_task`: mode=`code`, message="Create dir `project_journal/[slug]/...`, create empty files `...`, write requirements to `.../requirements.md`..."
    *   `attempt_completion`: result="Project structure created at `project_journal/[slug]`."
6.  **Planning (`Roo Commander`):** Delegates initial planning tasks, referencing the created files.
    *   `new_task`: mode=`technical-architect`, message="Review `.../requirements.md`. Create initial architecture plan, save notes to `.../planning/strategic_decisions.md`."
    *   `new_task`: mode=`project-manager`, message="Review `.../requirements.md`. Create initial WBS in `.../wbs/work_breakdown_structure.md`."
7.  **Execution (`Project Manager`):** Takes over, breaks down WBS, creates tasks for specialists, manages progress, ensures documentation updates.
    *   `new_task`: mode=`[specialist]`, message="Implement feature X based on WBS item Y..."
    *   *(Ongoing)* Reminds modes to log decisions/notes to relevant files in `project_journal`.

## 📁 Proposed `project_journal` Structure

```
project_journal/
└── [project_slug]/              # Unique identifier for the project
    ├── planning/                # High-level planning documents
    │   ├── project_plan.md      # Overall goals, scope, milestones (Owned by RCE/PM)
    │   ├── strategic_decisions.md # Architecture, tech stack choices (Owned by TA)
    │   ├── requirements.md      # Detailed requirements (Generated by Discovery Agent)
    │   └── commander_strategy_log.md # High-level strategy, decisions, and user discussions (Owned by Roo Commander)
    ├── wbs/                     # Work Breakdown Structure
    │   └── work_breakdown_structure.md # Epics/Features breakdown (Owned by PM)
    ├── sprints/                 # Sprint-specific documents (Optional, if using sprints)
    │   ├── sprint_001_planning.md
    │   └── sprint_001_review.md
    ├── decision_log/            # Log of critical, cross-cutting decisions (Use sparingly)
    │   └── YYYY-MM-DD_log.md
    ├── technical_notes/         # Detailed working notes, research, rationale per mode/task
    │   └── [mode_slug]_[topic].md
    └── formal_docs/             # Finalized outputs
        ├── architecture_v1.svg
        └── user_guide_v1.pdf
```

## 🔑 Key Principle: Documentation Maintenance

*   **Responsibility:** Each management mode (`Roo Commander`, `Project Manager`, `Technical Architect`, `DevOps Manager`) is responsible for ensuring the documents relevant to their role (as indicated in the structure above) are kept up-to-date. Specialist modes contribute detailed notes to `technical_notes/`.
*   **Mechanism:** Updates are performed by the responsible mode formulating the content and then delegating the actual file writing/appending operation to the `code` mode using the `new_task` tool, specifying the exact file path and content. For example, Roo Commander updates `commander_strategy_log.md`, while a specialist mode like `Frontend Developer` would add notes to `technical_notes/frontend-developer_component-design.md`.
*   **Prompting:** Consistent reminders within mode instructions and user prompts are crucial to enforce this documentation habit. Modes should save detailed technical rationale/notes in `technical_notes/` and high-level strategic points (Roo Commander only) in `commander_strategy_log.md`.