# 👑 Roo Commander: An Advanced Multi-Agent Framework for Roo Code

> Roo Commander helps developers using Roo Code manage complex software projects by orchestrating specialized AI agents within VS Code, improving structure, context management, and task delegation.

Roo Commander is an advanced configuration layer and opinionated workflow system *built specifically for* the [Roo Code](https://github.com/RooVetGit/Roo-Code) VS Code extension. It transforms your Roo Code experience by implementing a sophisticated framework for managing software development projects using a structured, **multi-agent approach**. Imagine having a virtual, specialized software team within your VS Code workspace, orchestrated by the 👑 Roo Commander, to handle tasks with specific expertise and maintain a clear project history.

---

**🐾 Join the Community:** [Roo Commander Discord](https://discord.gg/ESaJBnw7As)

---

## What is Roo Commander?

Roo Commander isn't just a collection of modes; it's an **opinionated workflow and project management system** (meaning it prescribes specific structures and processes for optimal results) built on top of Roo Code. It addresses the challenges of complex projects and context limitations in LLMs by:

*   **Specialized Roles:** Assigning tasks to **AI Agents (modes)** with specific expertise (e.g., React, API Design, Git, AWS, Testing).
*   **Structured Communication:** Using a defined task delegation and reporting system.
*   **Persistent Context:** Leveraging a structured project journal (`.ruru/tasks/`, `.ruru/decisions/`, etc.) and standardized document formats (TOML+Markdown) to maintain state and history effectively.
*   **Standardized Processes:** Defining reusable workflows and procedures for common development activities.

The goal is to bring structure, consistency, traceability, and the power of specialized AI skills to your development process.

## Why Use Roo Commander?

*   **🧠 Specialized Expertise:** Delegate tasks to the right AI expert (e.g., let the `framework-react` mode handle React code, not a generalist).
*   **🏗️ Structured Workflow:** Breaks down complex goals into manageable, trackable tasks using a defined system (MDTM - Markdown Task Management).
*   **💾 Enhanced Context Management:** Mitigates LLM context window limitations through structured logging and dedicated context retrieval agents.
*   **🔍 Traceability & Auditability:** Creates a clear history of tasks, decisions (ADRs), and actions within your project repository.
*   **⚙️ Consistency:** Promotes consistent project structure, documentation formats, and development processes.
*   **🚀 Potential for Automation:** The structured nature enables more reliable automation of complex development sequences.

## Core Concepts

To get the most out of Roo Commander, it helps to understand these key ideas:

1.  **Multi-Agent System (The "Team"):**
    *   Think of Roo Commander as managing a team of specialized **AI agents (called 'modes'** within Roo Code). They have a loose hierarchy (Commander, Managers, Specialists, etc.).
    *   The main Commander mode analyzes your goals and delegates tasks to the most suitable specialist using a specific command (`new_task`).
    *   *(You can find a detailed list of available roles in your installation under `.ruru/modes/roo-commander/kb/kb-available-modes-summary.md`)*

2.  **Structured Project Artifacts (TOML+Markdown):**
    *   Roo Commander maintains project history and context using standardized files. Key information like tasks, decisions, and documentation are stored in dedicated hidden folders (like `.ruru/tasks/`, `.ruru/decisions/`).
    *   These files use a consistent **TOML+Markdown format**: machine-readable TOML metadata at the top (for status, IDs, tags) and human-readable Markdown below. This structure ensures consistency and helps the AI track progress.
    *   *(See rules `01-...` and `02-...` in `.roo/rules/` for format/folder details after installation)*.
    *   **Example Task Snippet (`.ruru/tasks/TASK-001.md`):**
        ```toml
        +++
        id = "TASK-001"
        status = "pending"
        assignee = "framework-react"
        tags = ["ui", "login"]
        +++

        ## Implement Login Button

        Create the main login button component based on the Figma design...
        ```

3.  **Agent Instructions (Rules & Knowledge Bases):** Each AI agent's behavior is guided by:
    *   **Rules (`.roo/rules/`):** Core instructions, procedures, and logic loaded directly into the AI's context for immediate use.
    *   **Knowledge Base (`.ruru/modes/<slug>/kb/`):** Detailed references, templates, and examples specific to an agent's expertise. These are looked up *on demand* when needed, keeping the main context focused while providing deep knowledge access.

## Key Features

*   **👑 Central Coordinator:** Roo Commander orchestrates workflows and delegates tasks.
*   **🚦 Project Onboarding:** Streamlined process for initializing new projects or analyzing existing ones.
*   **📋 Task Management (MDTM):** Structured task tracking using TOML+Markdown files (`.ruru/tasks/`), following the Markdown Task Management system.
*   **📖 Context Management:** Dedicated agents (`agent-context-resolver`, `agent-context-condenser`) help manage and summarize project information.
*   **🛠️ Specialist Modes:** A wide range of modes covering various frameworks (React, Vue, Angular, Next.js, Laravel, Django, FastAPI, etc.), cloud platforms (AWS, Azure, GCP), databases (SQL, NoSQL), design tools (Tailwind, MUI, Bootstrap), testing, DevOps, security, and utilities.
*   **📝 Decision Logging (ADRs):** Formal process for recording significant Architectural Decision Records in `.ruru/decisions/`.
*   **🧩 Standardized Workflows & Processes:** Reusable definitions in `.ruru/workflows/` and `.ruru/processes/`.

## Getting Started (Installation)

> **Prerequisite:** You must have the [Roo Code](https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline) VS Code extension installed and configured first.

The recommended installation method uses the pre-built release:

1.  **Download:** Go to the [Roo Commander Releases page](https://github.com/jezweb/roo-commander/releases) and download the latest `roo-commander-vX.Y.Z-Codename.zip` file. *(Currently: `roo-commander-v7.1.2-Wallaby.zip`)*
2.  **Extract:** Unzip the contents directly into the **root directory** of your VS Code project workspace. This is the top-level folder containing your code, `.git` directory (if applicable), etc.
    *   *This will create/overwrite hidden folders like `.ruru/` and `.roo/` in your workspace root, containing the Roo Commander configurations and modes.*
3.  **Reload VS Code:** Reload the VS Code window (`Ctrl+Shift+P` or `Cmd+Shift+P` -> `"Developer: Reload Window"`) to ensure Roo Code recognizes the new mode configurations.

This will add/overwrite the necessary hidden configuration folders (`.ruru/modes`, `.roo`, `.ruru/templates`, etc.) and files (`.roomodes`).

## Basic Usage

1.  **Activate Commander:** Select the `"👑 Roo Commander"` mode in the Roo Code chat interface.
2.  **State Your Goal:** Tell Commander what you want to achieve (e.g., `"Start planning a new Python API using FastAPI"`, `"Implement the login UI based on the design in .docs/designs/login.md"`, `"Fix the bug described in task BUG-123"`).
3.  **Interact:** Follow Commander's lead. It will likely:
    *   Ask clarifying questions.
    *   Propose a plan or workflow.
    *   Delegate tasks to specialist modes (using `<new_task>`).
    *   Ask for your approval or feedback on steps or results.
4.  **Review:** Check the files created/modified by the modes, especially in the `.ruru/tasks/` directory, to understand the progress and details.

## Recommended Setup (Optional, for Optimal Performance)

While Roo Commander works out-of-the-box, these steps are recommended for the best experience, especially on complex projects:

### 1. Large Context Window API

Roo Commander performs best when connected to an LLM provider offering a large context window (1 million tokens or more). This allows the underlying AI models to maintain more information about your project during complex tasks. *(Note: While free tiers may exist, using large context window models via APIs can incur costs depending on your usage and the provider's pricing. Please check the provider's terms.)*

*   **Recommended Models (via Vertex AI API):**
    *   `gemini-2.5-pro-exp-03-25`
    *   `gemini-2.5-pro-preview-03-25`

*   **Setup Guide:** Learn how to configure the Vertex AI API provider in Roo Code, including accessing models like `gemini-2.5-pro-exp-03-25` potentially for free (as of April 2025):
    *   **Video Tutorial:** [Setting up Gemini 2.5 Pro (Free Tier) via Vertex AI for Roo Code](https://vimeo.com/1075028909/098f77b209)
    *   **Official Roo Code Docs:** [Vertex AI Provider Setup](https://docs.roocode.com/providers/vertex)

### 2. Model Context Protocol (MCP) Servers

MCP (Model Context Protocol) servers are separate helper applications that provide Roo Commander's AI agents with additional tools and capabilities beyond standard LLM functions, such as live web searching or advanced file system interactions. Installing relevant MCP servers is highly recommended.

*   **Vertex AI MCP Server:** Provides tools for web search-augmented queries, documentation lookups, code generation, and advanced file system operations.
    *   **Repository & Installation:** [`shariqriazz/vertex-ai-mcp-server`](https://github.com/shariqriazz/vertex-ai-mcp-server) (Includes easy NPM install option)
*   **GitHub MCP Server:** Offers tools for interacting with GitHub repositories.
    *   **Repository:** [`github/github-mcp-server`](https://github.com/github/github-mcp-server)

*(Refer to Roo Commander's initial prompt (Option 0) or the `agent-mcp-manager` mode for installing and managing MCP servers.)*


## Contributing

*(Optional: Add guidelines if you welcome contributions)*

## License

This project is licensed under the MIT License - see the [`LICENSE`](./LICENSE) file for details.

---

Command your virtual team and build amazing things!
