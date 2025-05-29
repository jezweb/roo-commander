# Roo Hierarchical Mode System Documentation

## 1. Overview

### Purpose
The Roo Hierarchical Mode System is designed to structure and manage complex software development tasks by organising specialised AI agents (modes) into a clear hierarchy. This system mirrors a typical organisational structure with Executive, Management, and Specialist levels, enabling efficient delegation and coordination.

### Benefits
*   **Clear Delegation:** Tasks flow logically from high-level objectives (Executive) to specific implementation details (Specialists).
*   **Separation of Concerns:** Each mode focuses on its specific area of expertise, preventing overlap and ensuring focused effort.
*   **Focused Expertise:** Specialist modes encapsulate deep knowledge and best practices for specific technologies, domains, or tasks.
*   **Scalability & Maintainability:** The modular nature makes it easier to add, update, or remove modes without disrupting the entire system.

### Hierarchy Levels
The system is conceptually divided into three levels, often defined in a `hierarchy.md` file (though the physical file is not strictly required for the system to function):

1.  **Executive Level:** Sets overall direction and initiates tasks (e.g., `Roo Chief Executive`).
2.  **Management Level:** Coordinates specific domains, breaks down tasks, and delegates to Specialists (e.g., `Project Manager`, `Technical Architect`, `DevOps Manager`).
3.  **Specialist Level:** Executes specific technical tasks within their domain (e.g., `Frontend Developer`, `API Developer`, `Database Specialist`, `Security Specialist`).

## 2. Usage Guide

### Typical Workflow
1.  **Initiation:** A user typically starts a complex task by interacting with the `Roo Chief Executive` mode. The user provides the high-level goals or requirements.
2.  **Delegation to Management:** The Chief Executive analyses the request and delegates relevant parts to the appropriate Management-level modes (e.g., Project Manager for planning, Technical Architect for design).
3.  **Coordination & Specialist Delegation:** Managers further break down their assigned tasks and delegate specific implementation work to Specialist modes within their domain. For example:
    *   The `Technical Architect` might delegate API design to the `API Developer` and database schema design to the `Database Specialist`.
    *   The `Project Manager` might coordinate timelines and ensure tasks are tracked.
4.  **Execution:** Specialist modes perform their assigned tasks, potentially collaborating with other specialists as coordinated by their Manager.
5.  **Reporting/Completion:** Results flow back up the hierarchy, allowing Managers and the Executive to track progress and ensure the overall goal is met.

## 3. Creating and Configuring Modes

### Mode Definition Structure (`.json` object):

Each mode is defined by a JSON object following this structure:

```json
{
  "slug": "unique-mode-identifier", // Lowercase, hyphenated identifier
  "name": "User-Friendly Mode Name", // Display name
  "roleDefinition": "Detailed description of the mode's purpose, expertise, and responsibilities.",
  "customInstructions": [ // Array of instruction blocks
    {
      "title": "Core Workflow",
      "content": "Step-by-step guidance on how this mode should operate..."
    },
    {
      "title": "Collaboration Points",
      "content": "Instructions on how to interact with other modes (Managers, Specialists)..."
    },
    {
      "title": "Key Knowledge/Patterns", // Embed essential information for specialists
      "content": "Specific code patterns, API usage, best practices..."
    }
    // Add more instruction blocks as needed
  ],
  "groups": ["specialist", "frontend"], // Categorisation for organisation/permissions
  "fileRegex": [ // Optional: Regex patterns for allowed file edits
    "\\.js$",
    "\\.jsx$",
    "\\.css$"
  ]
}
```

### Mode Templates and Collections

The system provides a set of pre-defined mode templates and collections for users to draw from:

*   **Mode Templates (`mode_templates/`):** This directory contains the canonical JSON definition for *individual* modes (e.g., `frontend-developer.json`, `technical-architect.json`). Each file represents a single mode template (a JSON object like the one shown above).
*   **Mode Collections (`mode_templates/mode_collections/`):** This subdirectory contains JSON files that group related mode templates together for convenience (e.g., `custom_modes_specialists_web.json`). Each file in this directory is a JSON *array* `[...]` containing multiple mode definition objects copied from the individual templates.

**Important:** The system does **not** automatically load modes directly from the `mode_templates/` or `mode_templates/mode_collections/` directories. These directories serve as a library or repository of available modes.

### Activating Modes

To activate modes for use in Cline, you must **copy** the desired mode definitions into your actual runtime configuration. This can be done in two main ways:

1.  **Copy individual mode definitions:** Copy the JSON object from a specific file in `mode_templates/` (e.g., the content of `mode_templates/react-specialist.json`).
2.  **Copy an entire collection:** Copy the entire JSON array content from a file in `mode_templates/mode_collections/` (e.g., the content of `mode_templates/mode_collections/custom_modes_specialists_web.json`).

Paste the copied JSON (either a single object or an array of objects) into the appropriate configuration file, such as:
*   The project-specific `context/cline_custom_modes.json` file (which should contain a top-level JSON array `[...]`).
*   Your global Cline settings file (often located in a path like `~/.config/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/custom_modes.json`, also expecting a top-level JSON array).

Ensure the final structure in your configuration file is a valid JSON array containing mode definition objects. The system merges modes from global settings and project-specific files, with project-specific definitions overriding global ones if slugs conflict.

### Best Practices for `customInstructions`:

*   **Be Clear and Specific:** Provide actionable steps and guidance.
*   **Define Workflow:** Outline the typical process the mode should follow.
*   **Specify Collaboration:** Detail how the mode should interact with Managers and other Specialists. Who does it report to? Who does it delegate to (if applicable)?
*   **Embed Core Knowledge (for Specialists):** Include essential information, code snippets, API patterns, configuration details, or best practices directly within the instructions. This makes the specialist effective without needing extensive external context retrieval.
*   **Use Markdown:** Format instructions for readability within the `content` fields.
*   **Keep it Focused:** Instructions should reinforce the mode's specific role.

### Defining File Permissions:

*   **`groups`:** Assign modes to logical groups (e.g., `backend`, `frontend`, `database`, `testing`). This can be used for broader permission schemes if implemented.
*   **`fileRegex`:** Use an array of regular expressions (as strings) to explicitly define which file patterns the mode is allowed to modify using tools like `write_to_file`. This enforces separation of concerns (e.g., a `Frontend Developer` shouldn't modify backend Python files). If omitted or empty, the mode might have broader or no file editing restrictions, depending on system configuration.

### Example: Creating a New Technology Specialist Mode (e.g., OpenAI API Specialist)

Let's outline creating a specialist mode for interacting with the OpenAI API and adding it to your configuration.

1.  **Define Role (`roleDefinition`):** "Specialises in integrating OpenAI API functionalities (e.g., completions, embeddings) into applications. Understands API parameters, best practices for prompt engineering, and error handling."
2.  **Embed Knowledge (`customInstructions`):**
    *   Include sections on:
        *   Common API endpoints (`/v1/chat/completions`, `/v1/embeddings`).
        *   Key parameters (`model`, `messages`, `temperature`, `max_tokens`).
        *   Example request/response structures (JSON).
        *   Best practices for structuring prompts for different tasks.
        *   Handling rate limits and errors.
        *   Security considerations (API key management - likely handled via environment variables or secure config).
3.  **Set Permissions (`fileRegex`):** Allow editing relevant files, e.g., `config/openai_config.json`, `src/services/openai_service.js`, `*.py` if it's a Python project.
4.  **Define Slug/Name:** `openai-api-specialist`, "OpenAI API Specialist".
5.  **Assign Groups:** `["specialist", "ai", "api"]`.
6.  **Assemble the JSON Object:** Create the complete JSON object for this mode based on the structure defined earlier.
7.  **Add to Configuration:** Copy this JSON object and paste it into the JSON array within your chosen configuration file (e.g., `context/cline_custom_modes.json` or your global settings file).

### Example: MCP Server Creator Modes

Modes like `mcp-server-creator-ts` (TypeScript) and `mcp-server-creator-py` (Python) are specialised modes designed to generate the boilerplate code for creating new Model Context Protocol (MCP) servers. Their definitions can be found as individual templates in `mode_templates/`.

*   **Purpose:** To accelerate the development of new MCP-compliant tools or integrations for Roo/Cline.
*   **Knowledge:** These modes have embedded knowledge of the MCP specification, including required endpoints, data structures, and communication patterns, found within their `customInstructions`.
*   **Usage:** A developer wanting to create a new MCP server (e.g., for a custom tool) could activate one of these modes (by copying its definition into their configuration) and then invoke it.
*   **Getting Started:** Users creating *similar* generator modes (or needing to understand the setup process) can leverage the `fetch_instructions` tool:
    ```xml
    <fetch_instructions>
    <task>create_mcp_server</task>
    </fetch_instructions>
    ```
    This provides foundational guidance on setting up an MCP server environment.

## 4. Mode Reference (Examples from Templates)

This is a non-exhaustive list of some modes available as templates. For complete details, refer to the individual JSON files in the `mode_templates/` directory. Collections of these templates can be found in `mode_templates/mode_collections/`. Remember to copy definitions into your configuration files to activate them.

*   **`roo-chief-executive`:** Top-level mode for initiating and overseeing complex tasks.
*   **`project-manager`:** Manages project timelines, resources, and task coordination.
*   **`technical-architect`:** Designs system architecture, defines technical standards, and guides technical implementation.
*   **`devops-manager`:** Oversees infrastructure, CI/CD pipelines, and deployment processes.
*   **`frontend-developer`:** Specialises in building user interfaces and client-side logic.
*   **`api-developer`:** Specialises in designing, building, and maintaining APIs.
*   **`database-specialist`:** Manages database design, implementation, and optimisation.
*   **`security-specialist`:** Focuses on application and infrastructure security.
*   **`integration-tester`:** Develops and executes tests to ensure different components work together correctly.
*   **`technical-writer`:** Creates and maintains technical documentation.