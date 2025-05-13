+++
# --- Metadata ---
id = "STRAT-MODE-KB-ENRICH-PHASE4-V1" # Updated ID for strategy set
title = "KB Enrichment Strategy: Phase 4 - Mode Integration & Usage" # Updated Title
status = "draft"
created_date = "2025-04-25" # Set to current date
updated_date = "2025-04-25" # Set to current date
version = "1.0" # Version for this strategy document
tags = ["strategy", "kb-enrichment", "phase4", "integration", "modes", "prompts", "usage", "workflow-step"]
related_docs = [
    ".ruru/planning/mode-kb-enrichment-strategy/00-strategy-overview.md",
    ".ruru/planning/mode-kb-enrichment-strategy/WF-MODE-KB-ENRICHMENT-001.md", # Link to main workflow
    ".ruru/planning/mode-kb-enrichment-strategy/03-kb-organization-indexing.md" # Previous phase
]
objective = "Define the procedure for updating the target specialist mode's configuration and providing internal KB guidance on how to utilize its enriched knowledge base. Corresponds to Steps 11-13 of the main enrichment workflow."
scope = "Details the steps for creating the mode's internal KB usage strategy document and modifying its `.mode.md` file to reference the new KB structure."
# --- Plan Specific Fields ---
target_mode_file_template = ".ruru/modes/{mode_slug}/{mode_slug}.mode.md"
target_mode_kb_dir_template = ".ruru/modes/{mode_slug}/kb/"
target_mode_kb_index_file = "index.toml" # Within the mode's kb dir
target_mode_usage_strategy_kb_file = "00-kb-usage-strategy.md" # Within the mode's kb dir
delegate_for_mode_edit = "prime-coordinator" # Safer choice for config edits
delegate_for_kb_write = "util-writer" # Suitable for writing documentation/KB
+++

# KB Enrichment Strategy: Phase 4 - Mode Integration & Usage

**Objective:** Ensure the target specialist mode (`[mode_slug]`) is configured to access its enriched KB and understands the strategy for leveraging this internal, synthesized knowledge. This corresponds to **Steps 11-13** in the main workflow document (`WF-MODE-KB-ENRICHMENT-001.md`).
**Procedure (Executed by `roo-commander` for a given `[mode_slug]` and applicable `[library_name]`):**

1.  **Define KB Usage Strategy (Coordinator Task / Plan):**
    *   **Action:** Finalize the content for the mode's internal KB document that explains *how* to use the enriched library KBs. This involves querying the indexes and loading relevant synthesized files. *(Content defined in Step 2)*.

2.  **Create Mode's KB Usage Strategy Document (Delegate to `[delegate_for_kb_write]`, Workflow Step 11):**
    *   **Description:** Create the `00-kb-usage-strategy.md` file within the target mode's KB directory.
    *   **Tool:** `new_task`
    *   **Mode:** `[delegate_for_kb_write]` (e.g., `util-writer`)
    *   **Target Path:** `[target_mode_kb_dir_template]/[target_mode_usage_strategy_kb_file]` (e.g., `.ruru/modes/framework-astro/kb/00-kb-usage-strategy.md`)
    *   **Message Content:**
        ```markdown
        # KB Usage Strategy for [Mode Name] ([mode_slug])

        **Objective:** To effectively utilize the specialized, AI-synthesized knowledge bases located within your `kb/` directory for relevant libraries.

        **Workflow:**

        1.  **Identify Relevance:** When assigned a task, determine if it relates specifically to a technology (e.g., Astro, React, Vertex AI) for which a dedicated knowledge base might exist within your `kb/` directory. Check your master KB index (`kb/index.toml`) for available library KBs.
        2.  **Prioritize Internal KB:** If a relevant library KB exists, **prioritize consulting it** before relying solely on general knowledge or external web searches for core concepts, API usage, common patterns, or setup procedures related to that library.
        3.  **Consult Library Index:** Use `read_file` to load the specific library's index file (e.g., `kb/[library_name]/index.toml`, path found in the master `kb/index.toml`).
        4.  **Identify Keywords:** Analyze your current task requirements to extract relevant keywords or concepts (e.g., 'routing', 'state management', 'component API', 'core concepts').
        5.  **Search Index (In Context):** Review the loaded library index data. Search the `title`, `summary`, and `tags` fields of the `[[documents]]` entries for matches to your identified keywords.
        6.  **Select Relevant Documents:** Identify the top 1-3 `file` paths corresponding to the index entries with the strongest relevance to your current task.
        7.  **Load Synthesized Content:** Use `read_file` iteratively to load the content of the selected synthesized markdown files (e.g., `kb/[library_name]/synthesized/core-concepts-summary.md`).
        8.  **Utilize Context:** Incorporate the information from these synthesized documents (summaries, concepts, patterns) into your reasoning process and response generation for the assigned task.
        9.  **(Optional) Fallback:** If the internal KB does not provide sufficient detail, you may then proceed to use other methods like web search (`agent-research`) or consult broader documentation, but always check the internal synthesized KB first for relevant libraries.
        ```
    *   **Action:** Delegate the writing of this KB file using `new_task`. Await completion. Handle errors (Log, potentially **Stop**).

3.  **Update Mode Definition File (Delegate to `[delegate_for_mode_edit]`, Workflow Step 12):**
    *   **Description:** Modify the mode's `.mode.md` file to reference the new KB structure and usage strategy.
    *   **Tool:** `new_task`
    *   **Mode:** `[delegate_for_mode_edit]` (e.g., `prime-coordinator`)
    *   **Target Path:** `[target_mode_file_template]` (e.g., `.ruru/modes/framework-astro/framework-astro.mode.md`)
    *   **Message:**
        ```        Update the mode definition file at `[target_mode_file_template]`. Make the following changes accurately using appropriate file modification tools (prefer `apply_diff` or `search_and_replace`):

        1.  **In the TOML frontmatter (`+++` block):**
            *   Ensure the path to the mode's master KB index (`kb/[target_mode_kb_index_file]`, e.g., `kb/index.toml`) is present in the `related_context` array. Add it if missing.
            *   Ensure the path to the new KB usage strategy file (`kb/[target_mode_usage_strategy_kb_file]`, e.g., `kb/00-kb-usage-strategy.md`) is present in the `related_context` array. Add it if missing.

        2.  **In the System Prompt / Role Description (Markdown body):**
            *   Add a sentence explicitly mentioning the internal KB. Example: "You have access to specialized knowledge bases for relevant libraries within your `kb/` directory. Consult your `kb/00-kb-usage-strategy.md` document for instructions on how to query and prioritize this internal knowledge."

        Apply these changes carefully, preserving existing content and valid TOML/Markdown syntax. Prime Coordinator workers should request confirmation before applying changes.
        ```
    *   **Action:** Delegate the task using `new_task`. Await confirmation (may involve user interaction). Handle errors (Log, **Stop**).

4.  **Verification (Coordinator Task / Manual, Workflow Step 13):**
    *   **Description:** Confirm the mode integration was successful.
    *   **Procedure:**
        *   Give the target mode (`[mode_slug]`) a task specifically related to the `[library_name]` for which the KB was enriched.
        *   Observe the execution flow (if possible via logs/tracing). Look for evidence that the mode attempts to access its KB indexes and synthesized files.
        *   Evaluate the quality of the mode's response – does it seem to incorporate the synthesized knowledge effectively?
    *   **Outputs:** Initial assessment of integration success. Log findings.

**Completion:** The target specialist mode is configured, has internal guidance on KB usage, and has been preliminarily tested. The KB enrichment process for this mode/library combination is complete. Ongoing monitoring and feedback are recommended.
**Procedure (Executed by `roo-commander` for a given `[mode_slug]` and applicable `[library_name]`):**

1.  **Define KB Usage Strategy (Coordinator Task / Plan):**
    *   **Action:** Finalize the content for the mode's internal KB document that explains *how* to use the enriched library KBs. This involves querying the indexes and loading relevant synthesized files. *(Content defined in Step 2)*.

2.  **Create Mode's KB Usage Strategy Document (Delegate to `[delegate_for_kb_write]`, Workflow Step 11):**
    *   **Description:** Create the `00-kb-usage-strategy.md` file within the target mode's KB directory.
    *   **Tool:** `new_task`
    *   **Mode:** `[delegate_for_kb_write]` (e.g., `util-writer`)
    *   **Target Path:** `[target_mode_kb_dir_template]/[target_mode_usage_strategy_kb_file]` (e.g., `.ruru/modes/framework-astro/kb/00-kb-usage-strategy.md`)
    *   **Message Content:**
        ```markdown
        # KB Usage Strategy for [Mode Name] ([mode_slug])

        **Objective:** To effectively utilize the specialized, AI-synthesized knowledge bases located within your `kb/` directory for relevant libraries.

        **Workflow:**

        1.  **Identify Relevance:** When assigned a task, determine if it relates specifically to a technology (e.g., Astro, React, Vertex AI) for which a dedicated knowledge base might exist within your `kb/` directory. Check your master KB index (`kb/index.toml`) for available library KBs.
        2.  **Prioritize Internal KB:** If a relevant library KB exists, **prioritize consulting it** before relying solely on general knowledge or external web searches for core concepts, API usage, common patterns, or setup procedures related to that library.
        3.  **Consult Library Index:** Use `read_file` to load the specific library's index file (e.g., `kb/[library_name]/index.toml`, path found in the master `kb/index.toml`).
        4.  **Identify Keywords:** Analyze your current task requirements to extract relevant keywords or concepts (e.g., 'routing', 'state management', 'component API', 'core concepts').
        5.  **Search Index (In Context):** Review the loaded library index data. Search the `title`, `summary`, and `tags` fields of the `[[documents]]` entries for matches to your identified keywords.
        6.  **Select Relevant Documents:** Identify the top 1-3 `file` paths corresponding to the index entries with the strongest relevance to your current task.
        7.  **Load Synthesized Content:** Use `read_file` iteratively to load the content of the selected synthesized markdown files (e.g., `kb/[library_name]/synthesized/core-concepts-summary.md`).
        8.  **Utilize Context:** Incorporate the information from these synthesized documents (summaries, concepts, patterns) into your reasoning process and response generation for the assigned task.
        9.  **(Optional) Fallback:** If the internal KB does not provide sufficient detail, you may then proceed to use other methods like web search (`agent-research`) or consult broader documentation, but always check the internal synthesized KB first for relevant libraries.
        ```
    *   **Action:** Delegate the writing of this KB file using `new_task`. Await completion. Handle errors (Log, potentially **Stop**).

3.  **Update Mode Definition File (Delegate to `[delegate_for_mode_edit]`, Workflow Step 12):**
    *   **Description:** Modify the mode's `.mode.md` file to reference the new KB structure and usage strategy.
    *   **Tool:** `new_task`
    *   **Mode:** `[delegate_for_mode_edit]` (e.g., `prime-coordinator`)
    *   **Target Path:** `[target_mode_file_template]` (e.g., `.ruru/modes/framework-astro/framework-astro.mode.md`)
    *   **Message:**
        ```        Update the mode definition file at `[target_mode_file_template]`. Make the following changes accurately using appropriate file modification tools (prefer `apply_diff` or `search_and_replace`):

        1.  **In the TOML frontmatter (`+++` block):**
            *   Ensure the path to the mode's master KB index (`kb/[target_mode_kb_index_file]`, e.g., `kb/index.toml`) is present in the `related_context` array. Add it if missing.
            *   Ensure the path to the new KB usage strategy file (`kb/[target_mode_usage_strategy_kb_file]`, e.g., `kb/00-kb-usage-strategy.md`) is present in the `related_context` array. Add it if missing.

        2.  **In the System Prompt / Role Description (Markdown body):**
            *   Add a sentence explicitly mentioning the internal KB. Example: "You have access to specialized knowledge bases for relevant libraries within your `kb/` directory. Consult your `kb/00-kb-usage-strategy.md` document for instructions on how to query and prioritize this internal knowledge."

        Apply these changes carefully, preserving existing content and valid TOML/Markdown syntax. Prime Coordinator workers should request confirmation before applying changes.
        ```
    *   **Action:** Delegate the task using `new_task`. Await confirmation (may involve user interaction). Handle errors (Log, **Stop**).

4.  **Verification (Coordinator Task / Manual, Workflow Step 13):**
    *   **Description:** Confirm the mode integration was successful.
    *   **Procedure:**
        *   Give the target mode (`[mode_slug]`) a task specifically related to the `[library_name]` for which the KB was enriched.
        *   Observe the execution flow (if possible via logs/tracing). Look for evidence that the mode attempts to access its KB indexes and synthesized files.
        *   Evaluate the quality of the mode's response – does it seem to incorporate the synthesized knowledge effectively?
    *   **Outputs:** Initial assessment of integration success. Log findings.

**Completion:** The target specialist mode is configured, has internal guidance on KB usage, and has been preliminarily tested. The KB enrichment process for this mode/library combination is complete. Ongoing monitoring and feedback are recommended.