# For Gemini Agent: Resuming Work on Roo Commander V8.1

This document provides a concise overview and checklist to quickly re-engage with the `roo-commander` project. Remember, you are an external Gemini CLI agent, tasked with building and managing this project, not to simulate or 'become' Roo Commander itself. Your interaction is through file system operations and shell commands.

## 1. Project Overview & Current State

*   **Project Name:** Roo Commander V8.1
*   **Purpose:** A lean, token-efficient AI orchestration system designed to manage complex workflows within the Roo Code environment.
*   **Core Principle:** Operates on an "Orchestrator -> Manager -> Squad" hierarchy, using Markdown-Driven Task Management (MDTM) as its communication backbone.
*   **Current State:** The project has undergone a major refactoring (V8.1). The structure is now lean, optimized for Roo Code's native features, and all documentation/mode definitions are updated.
*   **Deployment Model:** The entire `roo-commander` project (the contents of the `.roo/commander/` folder and the `rules-[mode_slug]/` folders) is intended to be copied directly into a user's project's `.roo/` directory.

## 2. Key Architectural Concepts (Brief)

*   **Orchestrator (`roo-commander`):** User-facing, high-level delegation, session management.
*   **Manager Modes (e.g., `project-manager`):** Domain-specific orchestrators, break down tasks, manage Squads via MDTM.
*   **Squad Modes (e.g., `task-planner`, `task-executor`):** Specialized executors, perform granular tasks, produce artifacts.
*   **MDTM:** Standardized TOML+Markdown files for task delegation and tracking (`.mdtm/` folder).
*   **Layered Context Management (Crucial for Token Efficiency):**
    *   **Tier 1 (`.roo/rules/`):** Universal, project-wide standards (pre-loaded for ALL modes).
    *   **Tier 2 (`.roo/rules-[mode_slug]/`):** Mode-specific, fundamental rules (pre-loaded for THAT mode).
    *   **Tier 3 (`.roo/rules-[mode_slug]/kb/`):** Detailed KB content (dynamically retrieved by AI using `read` tool, guided by `kb/README.md`).

## 3. File Structure & Important Locations

*   **Project Root (`/`):**
    *   `.roomodes`: Generated YAML file defining all custom modes (run `combine_mode_yamls.js`).
    *   `.mdtm/`: Contains all MDTM task and session files.
        *   `tasks/`: For MDTM task files.
        *   `sessions/`: For session logs and artifacts.
*   **`.roo/`:** Root for Roo Code configs and Roo Commander components.
    *   `rules/`: Universal rules (e.g., `01-standard-toml-md-format.md`).
    *   `rules-[mode_slug]/`: Mode-specific pre-loaded rules and KBs.
        *   `00-[mode_slug]-core-principles.md`: Core operational tenets.
        *   `kb/`: Dynamic KB content (procedures, skills, etc., with `README.md` index).
    *   `commander/`:
        *   `docs/`: This documentation.
        *   `modes/`: Individual mode YAML definition files (e.g., `roo-commander.yaml`).
        *   `scripts/`: Build scripts (e.g., `combine_mode_yamls.js`).
        *   `templates/`: Standardized templates (tasks, sessions, note, summary, learning).

## 4. Build Process

To generate the `.roomodes` file for deployment:
1.  Ensure `js-yaml` is installed (`npm install js-yaml`).
2.  Run `node .roo/commander/scripts/combine_mode_yamls.js` from the project root.

## 5. Key Reminders & Common Pitfalls

*   **`groups` vs. `availableTools`:** Roo Code's `.roomodes` YAML uses the key `groups` for tool permissions, not `availableTools`.
*   **YAML Multi-line Strings:** Use `|` (literal style) for `roleDefinition` and `customInstructions` to preserve formatting.
*   **`.roomodes` Filename & Location:** Must be named `.roomodes` and reside in the project root for automatic discovery by Roo Code.
*   **Dynamic KB:** The AI is instructed to *read* its `kb/` folder dynamically. This means `kb/` content is NOT pre-loaded by Roo Code, but accessed via the AI's `read` tool.
*   **`00-*-core-principles.md`:** This file is crucial for each mode, as it's pre-loaded and contains the core operational tenets, including the directive for dynamic KB lookup.
*   **Emoji Consistency:** Mode names should have a single, leading emoji (e.g., `💼 Project Manager`).
*   **File Paths:** All paths in rules and documentation should be relative to the project root (e.g., `.mdtm/sessions/`).

## 6. How to Resume Work

1.  **Review Recent Commits:** Use `git log` to see the latest changes and understand the immediate context.
2.  **Check `git status`:** Identify any uncommitted changes or new files.
3.  **Review `03_file_structure_and_purpose.md`:** This is the definitive guide to the current project layout.
4.  **Consult this document:** Use this `00_for_gemini_agent.md` as a quick refresher on the overall architecture and principles.
5.  **Identify Next Task:** Based on the user's query, determine the next logical step in the project's development or maintenance.

Good luck, future self! You've got this.
