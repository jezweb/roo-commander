# Documentation: Template `00_orchestrator_mode_template.md`

## 1. Purpose

This template defines the standard structure for creating top-level **Orchestrator modes** within the Roo Commander V8 ecosystem. Orchestrator modes are the primary user-facing AI agents. Their core responsibilities include:
*   Handling initial user interaction and understanding high-level user objectives.
*   Managing the lifecycle of work sessions (initiation, logging, artifact organization).
*   Delegating entire complex workflows or major objectives to specialized "Manager" modes by creating and assigning a top-level MDTM (Markdown-Driven Task Management) task.

The flagship instance of this archetype is `roo-commander` itself.

## 2. Usage

1.  **Copy Template:** When creating or defining an Orchestrator mode (primarily for `roo-commander` or a similar top-level agent):
    *   Copy `.roo/commander/templates/modes/00_orchestrator_mode_template.md` to the mode's directory (e.g., `.roo/commander/modes/roo-commander/roo-commander.mode.md`).
2.  **Populate TOML Frontmatter in the `.mode.md` file:**
    *   Fill in all placeholders marked with `[...]` in the copied `.mode.md` file.
    *   Key fields: `id`, `name`, `version`, `classification` (typically "core" or "executive_orchestrator"), `domain` (e.g., "system-orchestration"), `summary`.
    *   The `system_prompt` provides a boilerplate for an Orchestrator's core responsibilities (initial interaction, session management, delegation to Managers via MDTM). Customize bracketed placeholders like `[Orchestrator Mode Name]`.
    *   In `[metadata]`, list the Manager modes it can `delegate_to`.
3.  **Customize Markdown Body (Mode Documentation) in the `.mode.md` file:**
    *   Fill in the sections under `# [Orchestrator Mode Name] - Mode Documentation` to describe its specific purpose as a high-level coordinator, its responsibilities, and its general workflow.
4.  **Knowledge Base (KB) Creation & Structure (CRUCIAL for Orchestrators):**
    *   Create a `kb/` subdirectory for the mode: `.roo/commander/modes/[orchestrator-mode-slug]/kb/`.
    *   An Orchestrator mode's KB is critical for its operation and **MUST** follow this standard structure. Not all subdirectories are mandatory if empty, but this organization is recommended:
        *   **`README.md` (KB Index):**
            *   **Purpose:** Overview of this Orchestrator's KB. **MUST** link to its core `prompts/00-initial-options.md`, `procedures/01-initiate-manager-delegation.md`, `procedures/02-handle-session-mgmt-commands.md`, and `reference/00-available-managers-summary.md`.
        *   **`prompts/` (MANDATORY):**
            *   **`00-initial-options.md`**: Contains the structured text for the initial `ask_followup_question` presented to the user, outlining the main workflows or actions the Orchestrator can initiate.
        *   **`procedures/` (MANDATORY):**
            *   **`01-initiate-manager-delegation.md`**: Details the logic for how the Orchestrator, based on user choice from `00-initial-options.md`, identifies the correct Manager mode, creates the top-level MDTM task for that Manager, and delegates the task.
            *   **`02-handle-session-mgmt-commands.md`**: Details the procedures for handling explicit session management commands from the user (e.g., start a new session without a manager, list sessions, resume, summarize, end session). This includes how it interacts with session logs and artifact structures, and when it might delegate session scaffold creation.
            *   `(Optional) [other_core_procedure_name].md`: For other distinct high-level procedures it might follow.
        *   **`reference/` (MANDATORY):**
            *   **`00-available-managers-summary.md`**: Lists the "Manager" modes that this Orchestrator knows how to delegate to, along with a brief description of their domain and the primary user intent they serve. This file is key for the logic in `procedures/01-initiate-manager-delegation.md`.
        *   **`examples/` (Highly Recommended):**
            *   `01-sample-manager-mdtm-task.md`: An example of a well-formed top-level MDTM task it creates for a Manager mode.
        *   **`skills/` (Optional, for orchestration techniques):**
            *   Purpose: To store specific techniques related to *its role as an orchestrator*, such as advanced query parsing for intent recognition, or strategies for summarizing complex multi-manager workflows (if applicable in the future).
            *   Example: `skills/intent_recognition/parsing_complex_user_requests.md`.
        *   **`wisdom/` (Optional, for guiding principles of orchestration):**
            *   Purpose: To store higher-level insights or strategic considerations for *its role as a system-wide coordinator*.
            *   Example: `wisdom/orchestration_principles/maintaining_user_context_across_managers.md`.
    *   The mode's `system_prompt` (in its `.mode.md` file) will instruct it to consult its KB for these specific procedures and references.

## 3. TOML Frontmatter Schema (for the `.mode.md` file)

*   **`id` (String, Required):** Unique slug for the Orchestrator mode (e.g., `"roo-commander"`).
*   **`name` (String, Required):** Human-friendly name (e.g., `"👑 Roo Commander V8"`).
*   **`version` (String, Required):** Mode definition version.
*   **`classification` (String, Required):** Typically `"core"` or `"executive_orchestrator"`.
*   **`domain` (String, Required):** Its area of operation (e.g., `"system-orchestration"`).
*   `sub_domain` (String, Optional): Further specialization.
*   **`summary` (String, Required):** One-sentence description of its role.
*   **`system_prompt` (String, Required, Multiline):**
    *   Defines its identity as a top-level Orchestrator, its core responsibilities (user interaction via KB prompts, session management, creating top-level MDTM tasks for Managers, delegating to Managers), and operational guidelines.
    *   Emphasizes tool-agnostic instructions and reliance on its KB.
*   `allowed_tool_groups` (Array of Strings, Optional): Default: Permissive.
*   `file_access` (Table, Optional): Default: Permissive.
*   **`[metadata]` (Table, Optional):**
    *   `tags` (Array of Strings, Required): Keywords. Include `"orchestrator"`, `"core-system"`, `"session-manager"`.
    *   `categories` (Array of Strings, Required): Broader functional grouping.
    *   `delegate_to` (Array of Strings, Required): List of slugs for the Manager modes it can delegate to.
    *   `reports_to` (String, Required): Typically `"user"`.
*   **`custom_instructions_dir` (String, Required):** Standard value: `"kb"`. Points to the mode's own knowledge base directory: `.roo/commander/modes/[orchestrator-mode-slug]/kb/`.

## 4. Markdown Body Structure (for the `.mode.md` file's documentation section)

*   **`# [Orchestrator Mode Name] - Mode Documentation`**: Main title.
*   **`## 1. Description & Purpose`**: Its role as the main user interface and delegator to Manager modes.
*   **`## 2. Core Responsibilities & Capabilities`**: Key functions.
*   **`## 3. Typical Inputs`**: What triggers its actions (user prompts, selections).
*   **`## 4. Primary Outputs`**: Session structures, top-level MDTM tasks for Managers, user communication.
*   **`## 5. Workflow Overview`**: High-level flow from user interaction to Manager delegation.
*   **`## 6. Limitations`**: What it doesn't do (e.g., domain-specific work).

## 5. Role in the "Manager + Squad" Architecture

The Orchestrator mode is the **entry point and highest level of coordination** in the system. It sets up the overall work context (the session) and hands off responsibility for specific, complex domains to Manager modes by assigning them a formal MDTM task. This allows the Orchestrator to remain relatively simple and focused on user interaction and session context, while enabling the system to handle diverse and complex workflows through its pluggable Manager modes. Its own Knowledge Base is critical for defining its initial user interactions and its logic for selecting and initiating Manager modes.