# Roo Commander V8.1: Roo Code Integration

Roo Commander V8.1 is designed to integrate seamlessly with the Roo Code environment, leveraging its native features for custom modes and custom instructions. This document explains how Roo Commander's components map to Roo Code's expectations.

## 1. Custom Mode Definition (`.roomodes` YAML)

Roo Code consumes a single `.roomodes` YAML file (located in the project root) to define all custom modes. Roo Commander generates this file by combining individual mode YAMLs.

### Mapping from Roo Commander Mode YAML to `.roomodes`

Each `[mode_slug].yaml` file in `/.roo/commander/modes/` directly maps to an entry in the `customModes` array within the `.roomodes` file.

*   **`slug`**: Unique identifier for the mode.
*   **`name`**: Human-readable name.
*   **`description`**: Concise summary of the mode's purpose.
*   **`roleDefinition`**: **(Crucial)** This is a very concise statement of the AI's core persona and high-level purpose (e.g., "You are an expert Python Backend Developer."). It does *not* contain detailed instructions or procedures.
*   **`groups`**: Defines the tools and permissions available to the mode (e.g., `read`, `edit`, `command`).
*   **`whenToUse`**: Describes the scenarios or keywords that would trigger Roo Code's orchestrator to suggest or activate this mode.
*   **`customInstructions`**: **(Crucial)** A very brief, overarching instruction for the AI, primarily directing it to consult its mode-specific rules folder for detailed guidance (e.g., "Refer to your rules directory for detailed instructions and procedures.").

## 2. Layered Custom Instructions

Roo Commander leverages Roo Code's layered custom instructions mechanism for token efficiency and dynamic context retrieval.

### Tier 1: Universal Rules (`.roo/rules/`)

*   **Roo Code Behavior:** Automatically loads all Markdown files from `/.roo/rules/` (and `~/.roo/rules/` for global) into the context of *every* active mode.
*   **Roo Commander Usage:** This folder contains fundamental, project-wide standards (e.g., TOML+MD format, MDTM standard, session management standard) that are universally applicable to all modes operating within the Roo Commander ecosystem.
*   **Principle:** Keep this content lean and high-level to avoid unnecessary token consumption for all modes.

### Tier 2: Mode-Specific Pre-loaded Rules (`.roo/rules-[mode_slug]/`)

*   **Roo Code Behavior:** Automatically loads all Markdown files from `/.roo/rules-[mode_slug]/` (and its subdirectories) into the context of the LLM *only when that specific mode is active*.
*   **Roo Commander Usage:** This folder contains:
    *   `00-[mode_slug]-core-principles.md`: Defines the mode's core operational tenets and its strategy for using its `kb/`.
    *   `kb/` folder: **This is where the mode's detailed Knowledge Base resides.**
*   **Principle:** Provides essential, always-relevant context for a specific mode without being loaded for all modes.

### Tier 3: Dynamic KB Lookup (`.roo/rules-[mode_slug]/kb/`)

*   **Roo Code Behavior:** Roo Code itself does *not* automatically pre-load the content of the `kb/` folder.
*   **Roo Commander Usage:** The AI mode is explicitly instructed (via its `roleDefinition` or `customInstructions` in the `.roomodes` YAML, and its `00-*-core-principles.md` file) to:
    1.  Use its `read` tool (and potentially `list_directory` if available) to access files within its `kb/` folder.
    2.  Dynamically retrieve and incorporate relevant information (procedures, skills, examples, references) from these files *on demand* based on the current task.
    3.  Often, a `README.md` within the `kb/` folder acts as an index or a "KB Lookup Rule" for the AI to guide its retrieval process.
*   **Principle:** Optimizes token usage by only loading relevant context when needed, leveraging the AI's ability to use its tools for dynamic RAG.

## 3. MDTM Integration

Roo Commander uses MDTM as the primary mechanism for task delegation and progress tracking. Roo Code's ability to read and write files allows modes to interact with MDTM files seamlessly.

## 4. Session Management

Roo Commander's session management (creating session directories, logging to `session_log.md`) relies on Roo Code's file system access capabilities.