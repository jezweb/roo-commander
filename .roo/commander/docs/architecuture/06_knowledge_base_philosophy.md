# Architecture: Knowledge Base (KB) Philosophy & Structure

## 1. Introduction: The Role of Knowledge Bases

In the Roo Commander V8 system, each AI mode (Orchestrator, Manager, or Squad Member) possesses its own dedicated **Knowledge Base (KB)**. The KB is a structured collection of files (primarily TOML+Markdown) that contains the specific operational instructions, procedural logic, reference data, prompts, examples, and domain-specific expertise that the mode relies on to perform its functions effectively and consistently.

The philosophy behind mode-specific KBs is to:

*   **Encapsulate Expertise:** Allow each mode to have its own tailored set of knowledge relevant to its unique role and responsibilities.
*   **Promote Modularity:** Keep a mode's core operational logic separate from its fundamental system prompt, making the mode's behavior easier to understand, update, and maintain.
*   **Standardize Mode Behavior:** Provide a consistent way for modes of the same archetype (e.g., all Manager modes) to access and utilize common types of information.
*   **Enable Learning and Adaptation (Future):** Lay a foundation where KBs can be updated or expanded over time, allowing modes to "learn" or be refined without altering their core code (system prompt).

## 2. Standard KB Directory Structure

Each mode's KB resides in a dedicated subdirectory:
`.roo/commander/modes/[mode_slug]/kb/`

Within this `kb/` directory, a standard set of subfolders is recommended to organize different types of knowledge. While not all modes will utilize every subfolder (especially simpler Squad Members), this structure provides a consistent framework:

*   **`README.md` (KB Index):** The entry point to the mode's KB. It provides an overview of the KB's contents and links to key documents within the subfolders. (Template: `.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md`)
*   **`prompts/`:** Stores structured text for dynamic prompts the mode uses, especially for `ask_followup_question` interactions.
*   **`procedures/`:** Contains detailed, step-by-step operational logic and workflows specific to how the mode executes its core functions.
*   **`reference/`:** Holds lists, mappings, summaries of external information, or pointers to data the mode needs to consult.
*   **`examples/`:** Provides concrete examples relevant to the mode's operations, such as sample inputs it expects or outputs it produces.
*   **`skills/`:** Houses specific, actionable techniques, "how-to" guides for tools or methodologies relevant to the mode's specialist function (the "how-to" knowledge).
*   **`wisdom/`:** Stores higher-level insights, best practices, anti-patterns, design principles, or strategic considerations relevant to the mode's domain (the "why" or "what to consider" knowledge).

Each mode also has a mode-specific KB Lookup Rule (e.g., `.roo/commander/modes/[mode_slug]/rules-[mode_slug]/99-[mode_slug_lc]-kb-lookup.md`) that defines *how* it navigates and utilizes its own KB content.

## 3. KB Content by Mode Archetype

The typical KB content varies based on the mode's role in the "Orchestrator - Manager - Squad" hierarchy:

### 3.1. Orchestrator Mode KB (e.g., `roo-commander`)
*   **Focus:** High-level user interaction, session management, and Manager mode selection/delegation.
*   **Key KB Files:**
    *   `README.md`: Overall KB index.
    *   `prompts/00-initial-options.md`: Defines the first menu shown to the user.
    *   `procedures/01-initiate-manager-delegation.md`: Logic for selecting and starting a Manager workflow.
    *   `procedures/02-handle-session-mgmt-commands.md`: Logic for explicit session commands.
    *   `reference/00-available-managers-summary.md`: List of Manager modes it can delegate to.
    *   `examples/` might contain a sample top-level MDTM task it creates for a Manager.
    *   `skills/` could cover advanced user intent parsing.
    *   `wisdom/` might include principles for multi-manager coordination (for future scalability).

### 3.2. Manager Mode KB (e.g., `manager-data-product`)
*   **Focus:** Orchestrating its specific domain workflow and managing its squad.
*   **Key KB Files:**
    *   `README.md`: Index, pointing heavily to its main procedure.
    *   `procedures/01-main-orchestration-flow.md`: **This is the Manager's core.** It details the sequence of MDTM sub-tasks for its squad, artifact handoffs, and decision logic for its domain (e.g., the end-to-end Data Product Design PoC process).
    *   `reference/00-squad-composition.md`: Lists its squad members, their roles, and typical outputs.
    *   `examples/` could show a sample high-level MDTM task it receives and a sample sub-task it creates for a squad member.
    *   `skills/` might contain best practices for managing its specific type of workflow or squad (e.g., "Techniques for Prioritizing PoC Features" for `manager-data-product`).
    *   `wisdom/` could hold strategic principles for its domain (e.g., "Lean Principles for Data Product PoCs").

### 3.3. Squad Member Mode KB (e.g., `data-product-strategist`)
*   **Focus:** Executing its specialized task and producing its defined artifact.
*   **Key KB Files (often minimal initially):**
    *   `README.md`: Brief overview, may point to its output template.
    *   `reference/00-output-artifact-template-info.md` (Optional): Note on the primary TOML+MD template it uses for its output.
    *   `examples/` (Optional): Sample input MDTM task it expects, sample output artifact it produces.
    *   `skills/` (Most likely KB content for Squad Members): Contains the "how-to" for its specific expertise. For `data-product-strategist`, this could be `skills/strategic_analysis/conducting_swot.md` or `skills/objective_setting/writing_smart_goals.md`.
    *   `wisdom/` (Optional): Guiding principles for its specific skill. For `data-product-strategist`, this could be `wisdom/strategy_ pitfalls/avoiding_confirmation_bias.md`.
    *   `procedures/` are less common for simple Squad Members, as their primary procedure is often "execute the checklist in your MDTM task." However, if their internal process to achieve a checklist item is complex, it could be documented here.

## 4. Benefits of this KB Philosophy

*   **Explicit Knowledge:** Makes the operational logic and expertise of each mode explicit and reviewable.
*   **Maintainability:** Changes to a mode's specific procedures or domain knowledge can be made within its KB without altering its core system prompt, promoting easier updates.
*   **Consistency:** Standardized KB structures help ensure that modes of the same archetype share common ways of storing and accessing information.
*   **Reduced Prompt Bloat:** Complex procedures and large reference lists are kept out of the main system prompt, improving its clarity and token efficiency.
*   **Foundation for RAG:** Well-structured, granular KB articles are ideal for future integration with Retrieval Augmented Generation (RAG) systems, allowing modes to dynamically pull in the most relevant knowledge for a given task.
*   **Onboarding for Developers:** Provides a clear place for developers to understand and extend a mode's capabilities.

By treating each mode's KB as an integral part of its definition, Roo Commander V8 aims for a more intelligent, adaptable, and maintainable multi-agent system.