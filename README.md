# 👑 Roo Commander: An Advanced Multi-Agent Framework for Roo Code

Roo Commander transforms your [Roo Code](https://github.com/roocode/roo) experience by implementing a sophisticated framework for managing software development projects using a structured, **multi-agent approach**. Imagine having a virtual, specialized software team within your VS Code workspace, orchestrated by the 👑 Roo Commander, to handle tasks with specific expertise and maintain a clear project history.

---

**🐾 Join the Community:** [Roo Commander Discord](https://discord.gg/ESaJBnw7As)

---

## What is Roo Commander?

Roo Commander isn't just a collection of modes; it's an **opinionated workflow and project management system** built on top of Roo Code. It addresses the challenges of complex projects and context limitations in LLMs by:

*   **Specialized Roles:** Assigning tasks to AI agents (modes) with specific expertise (e.g., React, API Design, Git, AWS, Testing).
*   **Structured Communication:** Using a defined task delegation and reporting system.
*   **Persistent Context:** Leveraging a structured project journal (`.ruru/tasks/`, `.ruru/decisions/`, etc.) and standardized document formats (TOML+Markdown) to maintain state and history effectively.
*   **Standardized Processes:** Defining reusable workflows and procedures for common development activities.

The goal is to bring structure, consistency, traceability, and the power of specialized AI skills to your development process.

## Why Use Roo Commander?

*   **🧠 Specialized Expertise:** Delegate tasks to the right AI expert (e.g., let the `framework-react` mode handle React code, not a generalist).
*   **🏗️ Structured Workflow:** Breaks down complex goals into manageable, trackable tasks using a defined system (MDTM).
*   **💾 Enhanced Context Management:** Mitigates LLM context window limitations through structured logging and dedicated context retrieval agents.
*   **🔍 Traceability & Auditability:** Creates a clear history of tasks, decisions (ADRs), and actions within your project repository.
*   **⚙️ Consistency:** Promotes consistent project structure, documentation formats, and development processes.
*   **🚀 Potential for Automation:** The structured nature enables more reliable automation of complex development sequences.

## Core Concepts

Understanding these concepts is key to using Roo Commander effectively:

1.  **Multi-Agent System (The "Team"):**
    *   **Hierarchy:** Modes are organized loosely into roles: Commander (Coordination), Managers (Planning), Leads (Domain Oversight), Agents (Support), and Specialists (Execution).
    *   **Delegation:** Commander analyzes user goals and delegates tasks to the most appropriate Manager, Lead, or Specialist mode using the `new_task` tool.
    *   **(See `.ruru/modes/roo-commander/kb/kb-available-modes-summary.md` for a list of roles in your current build).**

2.  **Structured Project Artifacts (TOML+Markdown):**
    *   **Standard Folders:** Uses hidden folders like `.ruru/tasks`, `.ruru/decisions`, `.ruru/docs`, `.ruru/context`, `.ruru/workflows`, `.ruru/processes` for specific artifact types. (See `.roo/rules/02-workspace-default-folders.md`).
    *   **TOML+MD Format:** Combines machine-readable TOML metadata (for status, IDs, tags, etc.) with human-readable Markdown content in files like tasks and ADRs. Ensures consistency and facilitates automation. (See `.roo/rules/01-standard-toml-md-format.md`).

3.  **Knowledge Bases (KB) & Rules:**
    *   **Rules (`.roo/rules-/`):** Define core operational logic, standard procedures, and triggers for each mode. Loaded into the AI's context.
    *   **Knowledge Base (`.ruru/modes/<slug>/kb/`):** Contains detailed reference information, complex procedures, templates, and examples specific to a mode. Looked up *on demand* based on rules. This balances context size with detailed knowledge access.

## Key Features

*   **👑 Central Coordinator:** Roo Commander orchestrates workflows and delegates tasks.
*   **🚦 Project Onboarding:** Streamlined process for initializing new projects or analyzing existing ones.
*   **📋 Task Management (MDTM):** Structured task tracking using TOML+Markdown files in `.ruru/tasks/`.
*   **📖 Context Management:** Dedicated agents (`agent-context-resolver`, `agent-context-condenser`) help manage and summarize project information.
*   **🛠️ Specialist Modes:** A wide range of modes covering various frameworks (React, Vue, Angular, Next.js, Laravel, Django, FastAPI, etc.), cloud platforms (AWS, Azure, GCP), databases (SQL, NoSQL), design tools (Tailwind, MUI, Bootstrap), testing, DevOps, security, and utilities.
*   **📝 Decision Logging (ADRs):** Formal process for recording significant architectural decisions in `.ruru/decisions/`.
*   **🧩 Standardized Workflows & Processes:** Reusable definitions in `.ruru/workflows/` and `.ruru/processes/`.

## Getting Started (Installation)

**Prerequisite:** You need the [Roo Code](https://marketplace.visualstudio.com/items?itemName=RooCode.roo-code) VS Code extension installed.

The recommended installation method uses the pre-built release:

1.  **Download:** Go to the [GitHub Project Releases](https://github.com/jezweb/roo-commander/releases) and download the `roo-commander-vX.Y.Z-Codename.zip` file from the latest version. *(Currently: v7.1.1 (Wallaby))*
2.  **Extract:** Unzip the contents directly into the **root directory** of your VS Code project workspace. This is the top-level folder containing your code, `.git` directory (if applicable), etc.
3.  **Reload VS Code:** Reload the VS Code window (`Ctrl+Shift+P` or `Cmd+Shift+P` -> "Developer: Reload Window") to ensure Roo Code recognizes the new mode configurations.

This will add/overwrite the necessary hidden configuration folders (`.ruru/modes`, `.roo`, `.ruru/templates`, etc.) and files (`.roomodes`).

## Basic Usage

1.  **Activate Commander:** Select the "👑 Roo Commander" mode in the Roo Code chat interface.
2.  **State Your Goal:** Tell Commander what you want to achieve (e.g., "Start planning a new Python API using FastAPI", "Implement the login UI based on the design in .docs/designs/login.md", "Fix the bug described in task BUG-123").
3.  **Interact:** Follow Commander's lead. It will likely:
    *   Ask clarifying questions.
    *   Propose a plan or workflow.
    *   Delegate tasks to specialist modes (using `<new_task>`).
    *   Ask for your approval or feedback on steps or results.
4.  **Review:** Check the files created/modified by the modes, especially in the `.ruru/tasks/` directory, to understand the progress and details.

## Contributing

*(Optional: Add guidelines if you welcome contributions)*

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

Command your virtual team and build amazing things!
