# Documentation: Template `01_manager_mode_template.md`

## 1. Purpose

This template defines the standard structure for creating **Manager modes** within the Roo Commander V8 ecosystem. Manager modes act as domain-specific orchestrators. They receive a high-level objective (as an MDTM task) from a top-level coordinator (like `roo-commander`) and are responsible for breaking down that objective into a sequence of more granular sub-tasks. They then delegate these sub-tasks to a "squad" of specialist worker modes, manage the workflow and artifact flow, and report overall progress back to their coordinator.

Examples include `manager-data-product`, or hypothetical future modes like `manager-web-application-build`, `manager-api-development`.

## 2. Usage

1.  **Copy Template:** When creating a new Manager mode (e.g., `manager-data-product`):
    *   Copy `.roo/commander/templates/modes/01_manager_mode_template.md` to the new mode's directory (e.g., `.roo/commander/modes/manager-data-product/manager-data-product.mode.md`).
2.  **Populate TOML Frontmatter in the `.mode.md` file:**
    *   Fill in all placeholders marked with `[...]` in the copied `.mode.md` file.
    *   Key fields include `id`, `name`, `classification` (typically "director" or "manager"), `domain` (its area of management), and `summary`.
    *   The `system_prompt` provides a robust boilerplate for a Manager's core responsibilities (receiving a task, planning sub-tasks for its squad, MDTM sub-task creation, orchestration, reporting). Customize bracketed placeholders like `[Manager Mode Name]` and `[specific-domain-of-management]`.
    *   In `[metadata]`, list its `delegate_to` (its squad members) and `reports_to` (typically `roo-commander`).
3.  **Customize Markdown Body (Mode Documentation) in the `.mode.md` file:**
    *   Fill in the sections under `# [Manager Mode Name] - Mode Documentation` to describe its specific domain, responsibilities, the workflow it manages, and its squad composition.
4.  **Knowledge Base (KB) Creation & Structure (CRUCIAL for Managers):**
    *   Create a `kb/` subdirectory for the mode: `.roo/commander/modes/[manager-mode-slug]/kb/`.
    *   A Manager mode's KB is critical for its operation and **MUST** follow this standard structure. Not all subdirectories are mandatory if empty, but this organization is recommended:
        *   **`README.md` (KB Index):**
            *   **Purpose:** Overview of this Manager's KB. **MUST** link to its core `procedures/01-main-orchestration-flow.md` and `reference/00-squad-composition.md`.
        *   **`prompts/` (Optional, if complex interactions with its coordinator or squad):**
            *   `[prompt_name].md`: For structured `ask_followup_question` texts.
        *   **`procedures/` (MANDATORY):**
            *   **`01-main-orchestration-flow.md`**: This is the **primary KB document** for a Manager. It details the end-to-end sequence of operations it performs to fulfill its high-level MDTM task. This includes how it breaks down the main goal, the sequence of MDTM sub-tasks it creates for its squad members, how `input_artifacts` and `output_artifacts` are managed between squad tasks, logic for handling typical sequences, and how it updates its own primary MDTM task.
            *   `(Optional) [other_procedure_name].md`: For other distinct procedures it might follow (e.g., error handling specific to its domain).
        *   **`reference/` (MANDATORY):**
            *   **`00-squad-composition.md`**: Lists the Squad Member modes that this Manager directs and their primary roles/outputs within its managed workflow (slug, name, brief role, typical output artifact type).
            *   `(Optional) [other_reference_doc].md`: E.g., mappings, decision trees for squad selection if complex.
        *   **`examples/` (Highly Recommended):**
            *   `01-sample-input-mdtm-task.md`: An example of the high-level MDTM task it expects from its coordinator.
            *   `02-sample-squad-subtask.md`: An example of an MDTM sub-task it creates for one of its squad members.
            *   `03-sample-final-output-link.md`: A note describing or linking to an example of its final consolidated output (e.g., the structure of the `data_product_poc_plan.md` it aims to have its squad produce).
        *   **`skills/` (Optional, for domain management "how-to"):**
            *   Purpose: To store specific techniques or best practices related to *managing its specific domain workflow* or *coordinating its type of squad*.
            *   Example for `manager-data-product`: `skills/poc_planning/prioritizing_poc_features.md`.
        *   **`wisdom/` (Optional, for guiding principles for its domain):**
            *   Purpose: To store higher-level insights or strategic considerations for *its domain of management*.
            *   Example for `manager-data-product`: `wisdom/data_product_development/lean_poc_principles.md`.
    *   The mode's `system_prompt` (in its `.mode.md` file) will instruct it to consult its KB, especially its main orchestration flow.

## 3. TOML Frontmatter Schema (for the `.mode.md` file)

*   **`id` (String, Required):** Unique slug for the Manager mode (e.g., `"manager-data-product"`).
*   **`name` (String, Required):** Human-friendly name (e.g., `"🧑‍💼 Data Product Manager"`).
*   **`version` (String, Required):** Mode definition version.
*   **`classification` (String, Required):** Typically `"director"` or `"manager"`.
*   **`domain` (String, Required):** The specific workflow or area this Manager orchestrates (e.g., `"data-product-design-lifecycle"`).
*   `sub_domain` (String, Optional): Further specialization.
*   **`summary` (String, Required):** One-sentence description of its management role.
*   **`system_prompt` (String, Required, Multiline):**
    *   Defines its identity as a Manager, its core responsibilities (receiving a high-level MDTM task, planning and delegating MDTM sub-tasks to its squad, managing artifact flow, reporting to its coordinator), and operational guidelines.
    *   Emphasizes tool-agnostic instructions and reliance on its KB.
*   `allowed_tool_groups` (Array of Strings, Optional): Default: Permissive.
*   `file_access` (Table, Optional): Default: Permissive.
*   **`[metadata]` (Table, Optional):**
    *   `tags` (Array of Strings, Required): Keywords. Include domain-specific tags, `"manager"`, `"orchestrator"`.
    *   `categories` (Array of Strings, Required): Broader functional grouping.
    *   `delegate_to` (Array of Strings, Required): List of slugs for the Squad Member modes it manages.
    *   `reports_to` (String, Required): Slug of the coordinator mode it reports to (e.g., `"roo-commander"`).
*   **`custom_instructions_dir` (String, Required):** Standard value: `"kb"`. Points to the mode's own knowledge base directory: `.roo/commander/modes/[manager-mode-slug]/kb/`.

## 4. Markdown Body Structure (for the `.mode.md` file's documentation section)

*   **`# [Manager Mode Name] - Mode Documentation`**: Main title.
*   **`## 1. Description & Domain`**: Its area of responsibility and overall goal.
*   **`## 2. Core Responsibilities & Capabilities`**: Key functions as an orchestrator of its squad.
*   **`## 3. Typical Inputs (from its MDTM Task)`**: What it expects from its coordinator.
*   **`## 4. Primary Outputs`**: Its completed MDTM task and the final deliverables from its squad.
*   **`## 5. Managed Workflow & Squad Composition`**: Overview of the workflow it manages (linking to its KB procedure) and the squad it directs (linking to its KB reference).
*   **`## 6. Limitations`**: What it doesn't do.

## 5. Role in the "Manager + Squad" Architecture

Manager modes are the crucial middle layer. They take broad objectives from a top-level orchestrator like `roo-commander` and translate them into a concrete series of actions for a team of specialist Squad Members. They are responsible for the successful execution of complex, domain-specific workflows using MDTM for sub-task management. Their own KB, particularly the main orchestration flow procedure, is vital for their operation.