# Developer Guide: Creating New Manager Modes

## 1. Introduction

This guide provides step-by-step instructions for developers looking to extend the Roo Commander V8 system by creating a new **Manager mode**. Manager modes are crucial components responsible for orchestrating complex, domain-specific workflows by managing a "squad" of specialist worker modes.

Examples of Manager modes include `manager-data-product` (for designing Data Product PoCs) or hypothetical future modes like `manager-web-app-build` or `manager-api-development-lifecycle`.

By following this guide, you can create new Manager modes that integrate seamlessly into the Roo Commander V8 architecture, adhering to established standards for definition, knowledge base structure, and interaction patterns.

**Prerequisites:**
*   Familiarity with the overall Roo Commander V8 architecture, particularly the roles of Orchestrators, Managers, and Squads. (See `[.roo/commander/docs/architecuture/README.md](.roo/commander/docs/architecuture/README.md)`)
*   Understanding of the TOML+Markdown format used for mode definitions and other artifacts. (See `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`)
*   Knowledge of the MDTM task standard. (See `[.roo/commander/docs/standards/03-mdtm-task-files.md](.roo/commander/docs/standards/03-mdtm-task-files.md)`)

## 2. Design Principles for Manager Modes

Before creating a Manager mode, consider these principles:

*   **Clear Domain Responsibility:** A Manager should have a well-defined area of expertise and a primary workflow it orchestrates (e.g., "end-to-end data product PoC design," "CI/CD pipeline setup").
*   **Squad-Based Execution:** Managers achieve their goals by delegating specific tasks to a pre-defined "squad" of specialist worker modes. They typically do not perform the specialist work themselves.
*   **MDTM Centric:** Managers receive their primary objective as an MDTM task from an Orchestrator (like `roo-commander`) and, in turn, create and manage MDTM sub-tasks for their squad members.
*   **KB-Driven Orchestration:** The core logic for how a Manager sequences tasks and coordinates its squad resides within its own Knowledge Base (KB), primarily in its main orchestration procedure file.

## 3. Steps to Create a New Manager Mode

Let's assume you are creating a new Manager mode with the slug `manager-new-domain`.

### Step 3.1: Create the Mode Directory Structure

1.  Create the main directory for your new Manager mode:
    *   `.roo/commander/modes/manager-new-domain/`
2.  Within this directory, create subdirectories for its rules and Knowledge Base:
    *   `.roo/commander/modes/manager-new-domain/rules-manager-new-domain/`
    *   `.roo/commander/modes/manager-new-domain/kb/`

### Step 3.2: Define the Mode (`.mode.md` file)

1.  **Copy the Manager Template:**
    *   Copy `[.roo/commander/templates/modes/manager/template_00_manager.md](.roo/commander/templates/modes/manager/template_00_manager.md)`
    *   To: `.roo/commander/modes/manager-new-domain/manager-new-domain.mode.md`
2.  **Populate TOML Frontmatter:** Open `manager-new-domain.mode.md` and carefully fill in the TOML fields:
    *   `id`: `"manager-new-domain"` (must match slug)
    *   `name`: `"🧑‍💼 New Domain Manager"` (or similar, with a relevant emoji)
    *   `version`: `"1.0.0"`
    *   `classification`: `"director"` or `"manager"`
    *   `domain`: A clear description of its management domain (e.g., `"new-domain-workflow-orchestration"`)
    *   `summary`: A concise one-sentence summary.
    *   `system_prompt`:
        *   Carefully customize the bracketed placeholders: `[Manager Mode Name]` and `[specific-domain-of-management]`.
        *   Ensure the core responsibilities (Task Ingestion, Squad Sub-Task Creation, Workflow Orchestration, Reporting, KB Usage) from the template are preserved as they define standard Manager behavior.
    *   `[metadata]`:
        *   `tags`: Add relevant tags, including its domain, `"manager"`, `"orchestrator"`.
        *   `categories`: Define its functional grouping.
        *   `delegate_to`: **Crucially, list the slugs of all Squad Member modes that this Manager will direct.**
        *   `reports_to`: Typically `"roo-commander"`.
    *   `custom_instructions_dir`: Should remain `"kb"`.
    *   Leave `allowed_tool_groups` and `file_access` commented out for permissive defaults initially, unless specific restrictions are immediately known and necessary.

3.  **Write Mode Documentation (Markdown Body):**
    *   In the Markdown section of `manager-new-domain.mode.md`, fill out the documentation sections (Description & Domain, Core Responsibilities, Typical Inputs, Primary Outputs, Managed Workflow & Squad Composition, Limitations) to clearly describe your new Manager mode.

### Step 3.3: Create Mode-Specific Rules

1.  **KB Lookup Rule (Mandatory):**
    *   Copy `BROKEN_LINK_NEEDS_MANUAL_REVIEW_[.roo/commander/templates/rules/template_00_mode_kb_lookup_rule.md](../../templates/rules/template_00_mode_kb_lookup_rule.md)`
    *   To: `.roo/commander/modes/manager-new-domain/rules-manager-new-domain/99-mnd-kb-lookup.md` (using a short prefix like `mnd` for "manager-new-domain").
    *   Edit this file, replacing placeholders like `[Mode Name]`, `[mode_slug]`, and ensuring `target_audience` is `["manager-new-domain"]`. The core logic of the KB lookup rule template should generally suffice.
2.  **Core Principles Rule (Recommended):**
    *   Copy `[.roo/commander/templates/rules/mode_specific/common/template_00_mode_specific_rule.md](.roo/commander/templates/rules/mode_specific/common/template_00_mode_specific_rule.md)`
    *   To: `.roo/commander/modes/manager-new-domain/rules-manager-new-domain/00-mnd-core-principles.md`.
    *   Edit this to define any core operational principles specific to this Manager (e.g., how it prioritizes sub-tasks, its error handling philosophy within its squad).
3.  **Main Orchestration Logic Rule (Crucial):**
    *   Copy `[.roo/commander/templates/rules/mode_specific/common/template_00_mode_specific_rule.md](.roo/commander/templates/rules/mode_specific/common/template_00_mode_specific_rule.md)`
    *   To: `.roo/commander/modes/manager-new-domain/rules-manager-new-domain/01-mnd-squad-orchestration.md`.
    *   **This rule is vital.** It will instruct the Manager mode to consult and follow its primary KB procedure for orchestrating its squad.
    *   **Content Example for `01-mnd-squad-orchestration.md`:**
        *   **Objective:** "To ensure `manager-new-domain` consistently follows its defined workflow for managing its squad and achieving its assigned MDTM task objectives."
        *   **Rule Definition:** "When `manager-new-domain` receives an MDTM task, it MUST consult and execute the steps outlined in its Knowledge Base procedure: `kb/procedures/01-main-orchestration-flow.md`. This procedure details how to plan sub-tasks, delegate to squad members, manage artifacts, and update its primary MDTM task."

### Step 3.4: Structure and Populate the Knowledge Base (KB)

This is where the Manager's unique orchestration logic is defined. Create the following in `.roo/commander/modes/manager-new-domain/kb/`:

1.  **`README.md` (KB Index - Mandatory):**
    *   Use `[.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md](.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md)` as a basis.
    *   Customize it for `manager-new-domain`. It **must** link to `procedures/01-main-orchestration-flow.md` and `reference/00-squad-composition.md`.
2.  **`procedures/01-main-orchestration-flow.md` (MANDATORY):**
    *   **This is the heart of your Manager mode.**
    *   Detail, step-by-step, how this Manager takes its input MDTM task and orchestrates its squad to produce the final output.
    *   Include:
        *   How it plans the sequence of squad tasks.
        *   For each squad task:
            *   Which Squad Member mode to call (`data-product-strategist`, etc.).
            *   How to create the MDTM sub-task for that squad member (key TOML fields, description, AC, checklist).
            *   What `input_artifacts` to provide (often outputs from previous squad members).
            *   What `output_artifacts` to expect.
        *   How it monitors sub-task completion.
        *   How it updates its own primary MDTM task's checklist and logs.
        *   How it populates its own primary MDTM task's `output_artifacts` field with the final deliverable(s) from the squad.
3.  **`reference/00-squad-composition.md` (MANDATORY):**
    *   List the mode slugs, names, and primary roles/outputs of each Squad Member mode that this Manager directs.
4.  **Optional KB Subdirectories (`examples/`, `skills/`, `wisdom/`, `prompts/`):**
    *   Populate these as needed, following the guidelines in `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`.
    *   `examples/` is highly recommended to show a sample input MDTM task it expects and a sample sub-task it creates.

### Step 3.5: Update Orchestrator (`roo-commander`) Awareness

For `roo-commander` to be able to delegate to your new `manager-new-domain`:

1.  **Edit `roo-commander`'s KB:**
    *   Open `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`.
    *   Add a new entry for your `manager-new-domain`, including its user-facing "Workflow Description," its `slug`, a brief domain description, and its typical high-level goal.
2.  **Consider `roo-commander`'s Initial Prompt:**
    *   If you want your new Manager's workflow to be a top-level option for the user, you might need to suggest an update to `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md`. (This change should be carefully considered to keep the initial options concise).

## 4. Testing Your New Manager Mode

1.  **Unit Testing (Conceptual):** Review the Manager's `.mode.md` system prompt and its KB procedures. Does the logic flow correctly?
2.  **Integration Testing:**
    *   Start an interaction with `@roo-commander`.
    *   Select the option that should trigger your new `manager-new-domain`.
    *   Observe if `roo-commander` correctly creates an MDTM task for your Manager.
    *   Manually simulate your Manager mode receiving this task:
        *   Read its primary MDTM task.
        *   Follow its `kb/procedures/01-main-orchestration-flow.md`.
        *   Manually create (or use a simple script/mode to create) the MDTM sub-tasks for its squad members.
        *   Simulate squad members completing their tasks and updating their MDTM files.
        *   See if your Manager mode correctly processes these completions and updates its own MDTM task.
        *   Simulate it reporting completion back to `roo-commander`.

## 5. Iteration and Refinement

Developing a Manager mode is an iterative process. Expect to refine its system prompt, KB procedures, and even its squad's roles as you test and observe its behavior.

By following these steps and adhering to the established templates and standards, you can create powerful and well-integrated Manager modes that significantly expand the capabilities of the Roo Commander V8 system.