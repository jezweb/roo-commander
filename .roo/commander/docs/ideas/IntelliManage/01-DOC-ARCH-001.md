# --- Basic Metadata ---
id = "DOC-ARCH-001"
title = "IntelliManage: Overall Architecture & Core Principles"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "architects", "contributors"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md"
tags = ["intellimanage", "architecture", "principles", "overview", "documentation"]
related_docs = ["<path_to_whitepaper.md>"] # Link to the White Paper
+++

# IntelliManage: Overall Architecture & Core Principles

## 1. Introduction / Overview 🎯

This document outlines the high-level architecture and core design principles for **IntelliManage**, an AI-enhanced project management framework designed for seamless integration within modern development environments, specifically targeting environments like Roo Code.

Building upon the concepts presented in the IntelliManage White Paper (v1.1), this document provides a more technical overview of the system's components, interactions, and the foundational philosophies guiding its implementation. IntelliManage aims to address the limitations of traditional project management tools by providing a context-aware, developer-centric, multi-project system directly within the workspace, leveraging AI for automation and intelligent assistance.

## 2. Core Principles 💡

The design and implementation of IntelliManage are guided by the following core principles:

1.  **Integrated Experience:** Project management should be a seamless part of the developer workflow, accessible directly within the IDE/development environment, minimizing context switching.
2.  **Text-Based Source of Truth:** Project artifacts (tasks, epics, etc.) are stored as human-readable text files (TOML+MD) within the project repository, enabling version control, easy diffing, and accessibility via standard tools.
3.  **Structured Data:** Leverage TOML frontmatter for essential, machine-readable metadata (status, IDs, links, types, priority) while using Markdown for rich, human-readable descriptions, criteria, and notes.
4.  **Hierarchical Organization:** Implement a clear hierarchy (Initiative > Epic > Feature > Task/Bug > Subtask) to provide structure, traceability, and alignment with strategic goals.
5.  **Multi-Project Workspace:** Natively support the management of multiple distinct but potentially related projects within a single workspace (e.g., monorepo).
6.  **Methodology Flexibility:** Support standard Agile methodologies (Scrum, Kanban) alongside custom workflows on a per-project basis, configured via simple settings.
7.  **AI as a Core Component:** AI is not an add-on but integral to the workflow, assisting with task creation, linking, status tracking, reporting, analysis, and providing guidance.
8.  **Extensibility:** Design the core system with extensibility in mind, allowing for future integrations and feature enhancements.
9.  **User Control & Transparency:** While AI provides automation, the user remains in control. The system should be transparent about AI actions and allow for overrides.
10. **Developer Experience (DX):** Prioritize minimizing friction for developers interacting with the system.

## 3. High-Level Architecture Overview 🏗️

IntelliManage consists of several key conceptual components interacting within the development environment:

```mermaid
graph TD
    subgraph Development Environment (e.g., VS Code with Roo Code)
        UI[Interaction Layer (Chat, Commands, UI Views)]
        CE[Core Logic Engine]
        AIE[AI Engine]
        FS[File System Store (.ruru/projects/)]
        IL[Integration Layer (Git, GitHub)]
    end

    User --> UI;
    UI --> CE;
    CE --> FS;
    CE --> AIE;
    AIE --> CE;
    FS --> CE;
    IL --> CE;
    CE --> IL;

    subgraph External Systems
        GitRepo[Git Repository]
        GitHub[GitHub API]
    end

    FS <--> GitRepo;
    IL <--> GitHub;
    AIE -->|LLM API Calls| LLMService[External LLM Service];

    style FS fill:#f9f,stroke:#333,stroke-width:2px
    style AIE fill:#ccf,stroke:#333,stroke-width:2px
    style CE fill:#cfc,stroke:#333,stroke-width:2px
```

*   **User:** Interacts with the system via the Interaction Layer.
*   **Interaction Layer:** Provides the interface (chat commands, potential future UI elements like tree views or boards) for users to manage projects.
*   **Core Logic Engine:** The central hub responsible for parsing commands, CRUD operations on artifacts, managing state transitions, enforcing hierarchy, validating data based on schemas, and orchestrating interactions between other components.
*   **AI Engine:** Handles AI-specific tasks like natural language understanding, artifact generation, automated linking, status inference, reporting, visualization generation, and providing guidance. It interacts with external LLM services.
*   **File System Store:** The canonical source of truth, storing all project artifacts as TOML+MD files within the `.ruru/projects/` directory structure. Managed via Git.
*   **Integration Layer:** Manages communication with external systems like Git (parsing commit messages) and GitHub (syncing issues, labels, milestones).

## 4. Key Component Details 🧩

*   **File System Store:**
    *   Located at `.ruru/projects/`.
    *   Contains subdirectories for each project managed within the workspace.
    *   Each project directory contains standard subdirectories (e.g., `initiatives`, `epics`, `features`, `tasks`, `decisions`, `reports`).
    *   Artifacts use the TOML+MD format, adhering to defined schemas.
    *   Configuration stored in `project_config.toml` (project-specific) and potentially `projects_config.toml` (workspace-level).
*   **Core Logic Engine:**
    *   Parses TOML+MD files based on schemas.
    *   Handles creation, reading, updating, deletion of artifacts.
    *   Manages status transitions based on methodology (Scrum, Kanban, Custom).
    *   Validates hierarchical links (`parent_id`, `epic_id`, etc.).
    *   Manages the concept of the "active" project context.
    *   Interprets user commands from the Interaction Layer.
*   **AI Engine:**
    *   Processes natural language requests for artifact creation/modification.
    *   Generates draft content (descriptions, acceptance criteria).
    *   Suggests links between related items (e.g., tasks implementing a feature).
    *   Infers status updates from external events (Git commits, PR merges) or chat context.
    *   Generates reports (progress summaries, burndown charts, flow diagrams).
    *   Provides guidance on methodology and best practices.
    *   Learns custom workflows defined by the user.
    *   Requires robust context management to interact effectively with LLMs.
*   **Interaction Layer:**
    *   Primary interface likely through chat commands (e.g., `!pm create epic ...`, `!pm list tasks --project backend_api --status "In Progress"`).
    *   Potential for future UI views (integrated tree view, Kanban board panel, roadmap view).
    *   Provides feedback and results to the user.
*   **Integration Layer:**
    *   **Git:** Monitors commit messages for keywords (e.g., "Fixes TASK-123") to suggest status updates.
    *   **GitHub:** Bi-directional sync (configurable) between IntelliManage artifacts and GitHub Issues/Labels/Milestones via GitHub API.

## 5. Conceptual Data Flow 🌊

*   **User Creates Task:** User Input -> Interaction Layer -> Core Logic Engine -> File System Store (`.md` created) -> Interaction Layer (Confirmation).
*   **AI Generates Report:** Reporting Trigger -> Core Logic Engine (reads FS Store) -> AI Engine (analyzes data, generates report) -> Core Logic Engine -> File System Store (`report.md` saved) -> Interaction Layer (Report ready).
*   **Commit Closes Task:** Git Commit Push -> Integration Layer (parses message) -> Core Logic Engine (updates status in FS Store) -> Interaction Layer (Notification/Confirmation).
*   **GitHub Issue Created:** GitHub Webhook -> Integration Layer -> Core Logic Engine (creates corresponding Task in FS Store) -> Interaction Layer (Notification).

## 6. Conceptual Technology Stack 🛠️

*   **Language:** Likely Node.js/TypeScript (aligning with VS Code extension development).
*   **Parsing:** Libraries for TOML (e.g., `@iarna/toml`) and Markdown (e.g., `marked`, `unified`).
*   **AI/LLM:** Integration with external LLM APIs (OpenAI, Anthropic, Google Vertex AI) via SDKs or direct HTTP calls. Potential use of embedding models for relationship suggestions.
*   **Version Control:** Interaction with Git CLI via `execute_command` or libraries like `simple-git`.
*   **External APIs:** GitHub REST/GraphQL API client (e.g., `@octokit/rest`).
*   **Persistence:** Native File System APIs (Node.js `fs` module).

## 7. Extensibility & Future Considerations ✨

*   **Plugin Architecture:** A future plugin system could allow adding support for other issue trackers (Jira, Linear), methodologies, or reporting formats.
*   **Enhanced Visualizations:** Move beyond text-based reports to interactive boards, roadmaps, and dependency graphs within VS Code panels.
*   **Deeper AI Insights:** Implement AI-driven risk prediction, automated estimation refinement, dependency conflict detection, and proactive bottleneck identification.
*   **Team Collaboration Features:** Real-time updates or locking mechanisms for multi-user scenarios (challenging with a file-based system, might require a backend service).

## 8. Conclusion ✅

The IntelliManage architecture provides a robust, flexible, and integrated foundation for AI-enhanced project management within the development environment. By adhering to core principles like a text-based source of truth, structured data, hierarchy, multi-project support, and deep AI integration, it aims to significantly improve developer productivity, project visibility, and overall workflow efficiency. This architecture serves as the blueprint for building a truly intelligent and developer-centric project management experience.