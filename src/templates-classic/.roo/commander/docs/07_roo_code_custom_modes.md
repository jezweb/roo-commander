# Roo Commander V8.1: Roo Code Custom Modes

This document explains how Roo Commander defines and utilizes custom modes within the Roo Code environment, leveraging the `.roomodes` file and the structured `/.roo/commander/modes/` directory.

## 1. Custom Mode Definition in Roo Code

Roo Code allows for the creation of custom modes to tailor its behavior for specific tasks or workflows. These modes are defined by a set of properties that describe their identity, capabilities, and operational guidelines.

### 1.1. The `.roomodes` File

At the heart of project-specific custom mode definitions in Roo Code is the `.roomodes` YAML file, located in the project's root directory. This single file contains the combined definitions for all custom modes available within that project. Roo Commander automates the generation of this file by combining individual mode YAMLs.

### 1.2. Mode Properties

Each custom mode defined in `.roomodes` (and authored in `/.roo/commander/modes/`) includes the following key properties:

*   **`slug`**: A unique, internal identifier for the mode (e.g., `project-manager`, `gemini-build-agent`). This is used by Roo Code to reference the mode.
*   **`name`**: A human-readable display name for the mode, often including a single emoji for quick identification (e.g., `🧑‍💼 Project Manager`, `🤖 Gemini Build Agent`).
*   **`description`**: A concise, one-sentence summary of the mode's core purpose or function.
*   **`roleDefinition`**: A crucial, very concise statement of the AI's core persona and high-level purpose (e.g., "You are a highly organized Project Manager responsible for planning, executing, and overseeing software development projects."). This sets the fundamental identity and primary objective of the AI when operating in this mode.
*   **`groups`**: Defines the set of tools and permissions available to the mode (e.g., `read`, `edit`, `command`, `browser`, `mcp`). This controls what actions the AI can take.
*   **`whenToUse`**: Provides guidance for Roo Code's orchestrator on scenarios or keywords that would suggest or activate this mode. This helps in automated mode selection.
*   **`customInstructions`**: A very brief, overarching instruction for the AI, primarily directing it to consult its mode-specific rules folder for detailed guidance (e.g., "Refer to your rules directory for detailed instructions and procedures."). This acts as a high-level directive.

## 2. Roo Commander's Approach to Custom Mode Authoring

Roo Commander organizes individual custom mode definitions in the `/.roo/commander/modes/` directory. Each mode has its own dedicated YAML file (e.g., `roo-commander.yaml`, `project-manager.yaml`).

This approach offers several benefits:

*   **Modularity:** Each mode's definition is self-contained, making it easier to manage, update, or extend individual modes without affecting others.
*   **Readability:** Separating definitions into individual files improves clarity and navigability within the project structure.
*   **Version Control:** Individual mode files can be version-controlled independently, simplifying tracking of changes.
*   **Automated Combination:** A build script (`build/combine_mode_yamls.js`) is used to combine these individual YAML files into the single `.roomodes` file that Roo Code consumes. This ensures that all modes are correctly registered with the Roo Code environment.

## 3. Deployment and Activation

When deploying Roo Commander, the entire `/.roo/commander/` structure (including the `modes/` directory) is copied into the user's project. After copying, the `combine_mode_yamls.js` script is run to generate or update the `.roomodes` file. Once `.roomodes` is in place, Roo Code automatically recognizes and makes the custom modes available for use.
