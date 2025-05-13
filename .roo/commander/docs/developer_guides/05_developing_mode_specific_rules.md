# Developer Guide: Developing Mode-Specific Rules

## 1. Introduction

This guide is for developers creating or maintaining AI modes within the Roo Commander V8 ecosystem. It explains the purpose, structure, and best practices for developing **Mode-Specific Rules**. These rules are critical for defining the unique operational logic, decision-making processes, and Knowledge Base (KB) interaction patterns for individual modes like `roo-commander`, `manager-data-product`, or any specialist squad member.

Mode-Specific Rules reside in a dedicated directory for each mode (e.g., `.roo/rules-roo-commander/`, `.roo/rules-manager-data-product/`) and provide the "instant context" that shapes a mode's behavior when it's activated.

**Prerequisites:**
*   Understanding of Workspace Rules (see `BROKEN_LINK_NEEDS_MANUAL_REVIEW_[../standards/README.md](../standards/README.md)` for an index).
*   Familiarity with the TOML+Markdown format (`[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`).
*   Knowledge of the mode archetype (Orchestrator, Manager, Squad Member) for which you are developing rules.

## 2. Purpose of Mode-Specific Rules

While a mode's `.mode.md` file defines its identity, system prompt, and metadata, its Mode-Specific Rules codify its detailed operational logic:

*   **Core Operational DNA:** The `00-[mode_slug]-core-principles.md` file establishes the mode's fundamental guiding principles and, crucially, how it utilizes its own Knowledge Base (KB).
*   **Specialized Procedures:** Additional rule files (e.g., `01-[manager_slug]-squad-orchestration.md` for Manager modes) define detailed procedures for complex, role-specific responsibilities.
*   **Consistency and Reliability:** They ensure a mode behaves predictably and consistently when performing its designated functions.
*   **Maintainability:** Separating detailed logic into rule files keeps the main `.mode.md` system prompt cleaner and makes rules easier to update.

## 3. Standard Location and Naming

*   **Location:** Each mode **MUST** have its own rules directory named `rules-[mode_slug]` located at the same level as the main `.roo/rules/` directory (the workspace rules).
    *   Example: `.roo/rules-manager-data-product/`
*   **Naming Convention for Rule Files:** `[NN]-[mode_slug_prefix]-[description].md`
    *   `NN`: Two-digit number for ordering (e.g., `00-`, `01-`).
    *   `[mode_slug_prefix]`: A short, lowercase prefix for the mode (e.g., `rc-` for `roo-commander`, `mdp-` for `manager-data-product`).
    *   `[description]`: Kebab-case description of the rule's content.
    *   **Example:** `00-mdp-core-principles.md`, `01-mdp-squad-orchestration.md`.
    *   Refer to `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)` for full details.

## 4. Key Rule Templates

The following templates, located in `.roo/commander/templates/rules/`, should be used as a basis for creating mode-specific rules:

*   **`template_00_mode_core_principles_rule.md`**:
    *   **Purpose:** **MANDATORY for EVERY mode.** Used to create the `00-[mode_slug]-core-principles.md` file.
    *   **Content:** Defines the mode's fundamental operational tenets AND how it consults and utilizes its own Knowledge Base (KB). This single rule replaces the need for a separate KB lookup rule file per mode.
    *   **Schema Doc:** `.roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.README.md`

*   **`template_01_manager_squad_orchestration_rule.md`**:
    *   **Purpose:** **MANDATORY for Manager archetype modes.** Used to create the `01-[manager_slug]-squad-orchestration.md` file.
    *   **Content:** Defines the generic procedure for how a Manager mode orchestrates its specialist squad using MDTM sub-tasks, relying on its KB for the specific sequence and details.
    *   **Schema Doc:** `.roo/commander/templates/rules/mode_specific/manager/template_01_manager_squad_orchestration_rule.README.md`

*   **`template_00_mode_specific_rule.md`** (Generic template for *other* rules):
    *   **Purpose:** A generic template for any *additional* operational rules a mode might need beyond its core principles or standard archetype-specific rules (like squad orchestration for Managers). Use this if a mode has other complex, distinct procedures that warrant their own rule file.
    *   **Schema Doc:** `.roo/commander/templates/rules/mode_specific/common/template_00_mode_specific_rule.README.md`

## 5. Developing the `00-[mode_slug]-core-principles.md` Rule

This is the most important rule file for any mode.

1.  **Copy Template:** Start with `.roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.md`.
2.  **Rename:** Save as `00-[mode_slug]-core-principles.md` in the mode's `rules-[mode_slug]/` directory.
3.  **Populate TOML:**
    *   `id`: e.g., `[MODE_SLUG_UPPERCASE]-RULE-CORE-PRINCIPLES-V1`
    *   `title`: `"[Mode Name]: Rule - Core Operational Principles & KB Usage"`
    *   `target_audience`: `["[mode_slug]"]`
    *   `tags`: Include `"[mode_slug_tag]"`, `"core-principles"`, `"kb-lookup"`, and its archetype (e.g., `"manager"`, `"squad-member"`).
    *   `related_context`: Link to its `.mode.md` file and its KB `README.md`. Also link to key workspace rules it must adhere to (e.g., MDTM standard, Session Management standard).
    *   `template_schema_doc`: `".roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.README.md"`
4.  **Customize Markdown Body:**
    *   **Section 3 (Core Operational Principles):** This is where you define 3-7 critical, high-level principles specific to *this mode's role and responsibilities*. These should be derived from its system prompt in its `.mode.md` file.
        *   *Example for a Squad Member:* Focus on MDTM task adherence, primary artifact delivery, quality of output, communication with its Manager.
        *   *Example for a Manager:* Focus on MDTM task ingestion, squad orchestration via sub-tasks, artifact flow management, reporting to its Orchestrator.
    *   **Section 4 (KB Utilization Procedure):** The template provides a good boilerplate. Customize the "Targeted Information Retrieval" part to guide the mode to its most critical KB sections based on its archetype and specific KB structure (e.g., a Manager will heavily use its `kb/procedures/01-main-orchestration-flow.md`).

## 6. Developing Additional Mode-Specific Rules (e.g., Squad Orchestration for Managers)

1.  **Identify Need:** Determine if the mode requires procedural logic complex enough to warrant its own rule file beyond the core principles. For Manager modes, the squad orchestration logic is a prime candidate.
2.  **Select Template:**
    *   For Manager squad orchestration: Use `.roo/commander/templates/rules/mode_specific/manager/template_01_manager_squad_orchestration_rule.md`.
    *   For other unique procedures: Use the generic `.roo/commander/templates/rules/mode_specific/common/template_00_mode_specific_rule.md`.
3.  **Rename & Populate:** Follow similar steps as for the core principles rule, ensuring TOML fields and Markdown content are specific to the rule's purpose for that mode.
    *   The `01-[manager_slug]-squad-orchestration.md` rule, for instance, will detail the generic *process* of a manager using its KB to plan, create MDTM sub-tasks, delegate, monitor, and report, while its KB procedure (`kb/procedures/01-main-...-orchestration-flow.md`) contains the *specific sequence* for its domain.

## 7. Best Practices for Writing Mode-Specific Rules

*   **Clarity and Precision:** Rules must be unambiguous for the AI mode to interpret correctly.
*   **Actionability:** Rules should lead to specific behaviors or decision-making processes.
*   **Focus:** Each rule file should address a distinct aspect of the mode's operation.
*   **Reference Workspace Standards:** Ensure mode-specific rules are compatible with and often reference broader workspace rules (e.g., MDTM usage, session management).
*   **Tool Agnosticism:** Define rules in terms of objectives and logical steps, not specific tool names, allowing Roo Code core or the mode itself to determine the best tool for an action.
*   **Testability (Conceptual):** Think about how you would verify if the mode is adhering to the rule.
*   **Documentation:** Ensure the rule's purpose and logic are clear from its TOML metadata and Markdown content.

By carefully developing these mode-specific rules, you provide each AI mode with clear, "instant context" that governs its core behavior, making the entire system more predictable, reliable, and maintainable.