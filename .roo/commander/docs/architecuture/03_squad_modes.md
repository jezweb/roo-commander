# Architecture: Squad Member Modes - Specialist Executors

## 1. Introduction to Squad Member Modes

In the Roo Commander V8 hierarchical architecture, **Squad Member modes** are the specialist AI agents that perform the detailed, focused work within a specific domain. They operate under the direction of a "Manager" mode (e.g., `manager-data-product`) and are responsible for executing well-defined tasks that contribute to the Manager's overall objective.

Each Squad Member is an expert in a narrow area, such as defining product strategy, creating user personas, designing data schemas, or generating specific types of documentation. They are the "workhorses" of the "Manager + Squad" model.

## 2. Core Purpose and Philosophy

The introduction of Squad Member modes aims to:

*   **Enable Deep Specialization:** Allow individual AI modes to develop and apply deep expertise in a very specific sub-domain or task type.
*   **Promote Single Responsibility:** Each Squad Member typically has one primary function and produces one primary type of output artifact.
*   **Facilitate Granular Task Management:** Enable Managers to break down complex workflows into small, manageable, and delegable units of work.
*   **Improve Output Quality:** By focusing on a narrow area, Squad Members can leverage more targeted knowledge and procedures, leading to higher-quality, more consistent outputs for their specific tasks.
*   **Simplify Mode Development:** Creating a new specialist Squad Member is generally less complex than creating a mode that tries to handle many different functions.

## 3. Key Responsibilities of a Squad Member Mode

All Squad Member modes, despite their varied specializations, share a common set of operational responsibilities centered around processing MDTM (Markdown-Driven Task Management) tasks:

### 3.1. MDTM Task Ingestion and Understanding
*   **Receive Sub-Task:** A Squad Member is activated when it receives an MDTM task assigned by its Manager mode.
*   **Thoroughly Read Task:** It must read and fully understand its assigned MDTM task file, paying close attention to:
    *   The `title`, `description` (goal of this specific task).
    *   The `acceptance_criteria` for its work.
    *   The detailed `checklist / sub-tasks` it needs to perform.
    *   Any `input_artifacts` (e.g., outputs from previous Squad Members) it needs to use.
    *   The expected `output_artifacts` it needs to produce.

### 3.2. Specialized Task Execution
*   **Follow Checklist:** Methodically execute the steps outlined in its MDTM task's `checklist`.
*   **Apply Expertise:** Utilize its specialized knowledge (potentially guided by its own minimal KB, particularly `skills/` or `wisdom/` sections if developed) to perform its designated function (e.g., strategic analysis, persona development, data modeling).
*   **Create Primary Output Artifact:** Generate its primary deliverable, which is typically a structured TOML+Markdown document using a predefined template (e.g., `data-product-strategist` uses `template_product_strategy.md`). This artifact is saved to a designated location within the active session's `artifacts/` directory (e.g., `artifacts/design_outputs/[ProductName]/[artifact_name].md`), as specified or implied by its MDTM task.

### 3.3. MDTM Task File Updates (Mandatory)
As a Squad Member works on its assigned MDTM task, it **MUST** continuously update its task file:
*   Mark `checklist` items as complete (`- [ ]` to `- [✅]`).
*   Append detailed progress, observations, any issues encountered, or significant actions taken to the `Log Entries / Notes 🪵` section of its MDTM task file, including timestamps.
*   Upon completion of its primary deliverable, add the relative path(s) to its created output artifact(s) to the `output_artifacts` array in the TOML frontmatter of its MDTM task file.
*   Update the `status` field in its MDTM task's TOML (e.g., to "🟢 Done", "🔴 Error", "⚪ Blocked").
*   Regularly update the `updated_date` field in its MDTM task's TOML.

### 3.4. Reporting to Manager
*   Once its assigned MDTM task is fully completed (all checklist items done, acceptance criteria met, output artifact created and linked) or if it encounters an unrecoverable error or an insurmountable blocker, it **MUST** report its final status (referencing its MDTM Task ID) back to its `coordinator` (the Manager mode).

### 3.5. Session Context Awareness
*   Squad Members operate within the context of the work session initiated by `roo-commander` and passed down through their Manager. All artifacts they create should be part of this session and linkable from the main `session_log.md` (typically via the Manager's reporting).

## 4. Example: The `data-product-*` Squad

The `manager-data-product` directs a squad of specialist modes to execute the Data Product Design PoC Workflow. Each member has a distinct role:

*   **`data-product-strategist`:**
    *   **Receives:** MDTM task from `manager-data-product` with the high-level PoC goal.
    *   **Executes:** Collaborates (conceptually, or via prompts if user interaction is funneled through it) to define vision, objectives, target audience.
    *   **Produces:** `product_strategy.md` (using `template_product_strategy.md`).
    *   **Updates MDTM Task:** Logs progress, links output, sets status to "Done".
*   **`data-product-ideator`:**
    *   **Receives:** MDTM task with `product_strategy.md` as input.
    *   **Executes:** Brainstorms PoC features, defines scope, outlines initial data needs.
    *   **Produces:** `poc_ideation.md` (using `template_poc_ideation.md`).
    *   **Updates MDTM Task.**
*   **`data-product-ux-persona-architect`:**
    *   **Receives:** MDTM task with `poc_ideation.md` as input.
    *   **Executes:** Develops detailed user personas.
    *   **Produces:** One or more `user_persona_[name].md` files (using `template_user_persona.md`).
    *   **Updates MDTM Task.**
*   **`data-product-simdata-designer`:**
    *   **Receives:** MDTM task with `poc_ideation.md` and persona documents as input.
    *   **Executes:** Defines data schema, describes/generates simulated data.
    *   **Produces:** `simulated_data_schema.md` (using `template_simulated_data_schema.md`) and the associated data file (e.g., `.csv`).
    *   **Updates MDTM Task.**
*   **`data-product-poc-interface-architect`:**
    *   **Receives:** MDTM task with personas and data schema/sample data as input.
    *   **Executes:** Designs conceptual UI/UX for the PoC.
    *   **Produces:** `poc_interface_design.md` (using `template_poc_interface_design.md`).
    *   **Updates MDTM Task.**
*   **`data-product-poc-documenter`:**
    *   **Receives:** MDTM task with ALL previous artifacts as input.
    *   **Executes:** Consolidates inputs into the final PoC plan.
    *   **Produces:** `data_product_poc_plan.md` (using `template_data_product_poc_plan.md`).
    *   **Updates MDTM Task.**

This sequential execution, managed by `manager-data-product`, ensures each specialist contributes its expertise to build a comprehensive final deliverable.

## 5. Key Characteristics of Squad Member Modes

*   **Highly Specialized:** Focused on a narrow set of tasks and one primary output type.
*   **Task-Driven:** Their operation is almost entirely defined by the MDTM task they receive.
*   **Artifact Producers:** Their main contribution is a well-defined, structured artifact.
*   **Minimal Internal Orchestration Logic:** Complex sequencing is handled by their Manager; Squad Members primarily follow their MDTM task's checklist.
*   **Lean KBs (Potentially):** While they have a standard KB structure, their KBs might initially be minimal, containing primarily references to their output templates or core skills/wisdom if their task is highly specialized and requires codified domain knowledge beyond the MDTM checklist.

Squad Member modes are the fundamental building blocks for executing detailed work within the Roo Commander V8 architecture, enabling depth of expertise and modularity.