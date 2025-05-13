# Developer Guide: Creating New Squad Member Modes

## 1. Introduction

This guide is for developers looking to create new **Squad Member modes** for the Roo Commander V8 system. Squad Member modes are specialized AI agents that perform specific, well-defined tasks. They operate under the direction of a "Manager" mode (e.g., `manager-data-product`) as part of a "squad" dedicated to a particular complex workflow.

Examples of Squad Member modes include `data-product-strategist`, `data-product-ideator`, or hypothetical future modes like `web-app-frontend-component-builder` or `api-endpoint-tester`.

Creating effective Squad Member modes is key to building out the specialized capabilities of any Manager-led workflow. This guide will walk you through the process using the standard templates and adhering to architectural best practices.

**Prerequisites:**
*   Familiarity with the overall Roo Commander V8 architecture, especially the roles of Managers and Squads. (See `[.roo/commander/docs/architecuture/README.md](.roo/commander/docs/architecuture/README.md)`)
*   Understanding of the TOML+Markdown format. (See `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`)
*   Detailed knowledge of the MDTM task standard, as Squad Members are primarily driven by these tasks. (See `[.roo/commander/docs/standards/03-mdtm-task-files.md](.roo/commander/docs/standards/03-mdtm-task-files.md)`)
*   Knowledge of the Manager mode this Squad Member will report to and the overall workflow it participates in.

## 2. Design Principles for Squad Member Modes

*   **Single, Focused Responsibility:** Each Squad Member should excel at one specific task or producing one primary type of artifact (e.g., defining strategy, creating personas, writing a specific type of code module).
*   **MDTM Task-Driven:** A Squad Member's entire operation is initiated and guided by an MDTM task file assigned by its Manager. The checklist in this task is its primary set of instructions.
*   **Artifact Producer:** The main output of a Squad Member is typically a well-defined artifact (often a TOML+Markdown document using a specific template, or a code file).
*   **Clear Inputs & Outputs:** It should have clearly defined input artifacts (received via its MDTM task) and output artifacts (which it links in its completed MDTM task).
*   **Lean KB (Initially):** While Squad Members have a standard KB structure, their initial KB might be minimal, focusing on essential skills or references for their specific task. Much of their immediate instruction comes from the MDTM task itself.

## 3. Steps to Create a New Squad Member Mode

Let's assume you are creating a new Squad Member mode with the slug `[squad-name-prefix]-[specialization-slug]` (e.g., `data-product-new-specialist`).

### Step 3.1: Create the Mode Directory Structure

1.  Create the main directory for your new Squad Member mode:
    *   `.roo/commander/modes/[squad-name-prefix]-[specialization-slug]/`
    *   Example: `.roo/commander/modes/data-product-new-specialist/`
2.  Within this directory, create subdirectories for its rules (if any beyond KB lookup) and Knowledge Base:
    *   `.roo/commander/modes/data-product-new-specialist/rules-data-product-new-specialist/`
    *   `.roo/commander/modes/data-product-new-specialist/kb/`

### Step 3.2: Define the Mode (`.mode.md` file)

1.  **Copy the Squad Member Template:**
    *   Copy `[.roo/commander/templates/modes/squad/template_00_squad.mode.md](.roo/commander/templates/modes/squad/template_00_squad.mode.md)`
    *   To: `.roo/commander/modes/data-product-new-specialist/data-product-new-specialist.mode.md`
2.  **Populate TOML Frontmatter:** Open `data-product-new-specialist.mode.md` and carefully fill in the TOML fields:
    *   `id`: `"data-product-new-specialist"` (must match slug)
    *   `name`: `"🛠️ New Data Product Specialist"` (or similar, with a relevant emoji)
    *   `version`: `"1.0.0"`
    *   `classification`: `"worker"` or `"specialist"`
    *   `domain`: A clear description of its specific expertise (e.g., `"data-product-market-analysis"`, `"ux-journey-mapping"`)
    *   `summary`: A concise one-sentence summary of its function and primary deliverable.
    *   `system_prompt`:
        *   Carefully customize the bracketed placeholders: `[Squad Member Mode Name]` and `[specific-domain-of-expertise]`.
        *   The core responsibilities outlined in the template (Task Ingestion, Execution, Artifact Creation, MDTM Updates, Reporting, KB Usage) are standard for Squad Members and should generally be preserved.
        *   Emphasize that its primary instructions come from the MDTM task checklist.
    *   `[metadata]`:
        *   `tags`: Add relevant tags, including its domain, skill, and `"squad-member"`.
        *   `categories`: Define its functional grouping (e.g., "Data Product Design Squad").
        *   `delegate_to`: Usually empty or very limited for Squad Members.
        *   `reports_to`: **Crucially, set this to the slug of the Manager mode that will direct this Squad Member** (e.g., `"manager-data-product"`).
    *   `custom_instructions_dir`: Should remain `"kb"`.
    *   Leave `allowed_tool_groups` and `file_access` commented out for permissive defaults initially.

3.  **Write Mode Documentation (Markdown Body):**
    *   In the Markdown section of `data-product-new-specialist.mode.md`, fill out the documentation sections (Description & Expertise, Core Capabilities, Typical Inputs, Primary Outputs, Workflow within the Squad, Limitations) to clearly describe your new Squad Member mode.

### Step 3.3: Create Mode-Specific Rules (Minimal for Squad Members)

1.  **KB Lookup Rule (Mandatory):**
    *   Copy `BROKEN_LINK_NEEDS_MANUAL_REVIEW_[.roo/commander/templates/rules/template_00_mode_kb_lookup_rule.md](../../templates/rules/template_00_mode_kb_lookup_rule.md)`
    *   To: `.roo/commander/modes/data-product-new-specialist/rules-data-product-new-specialist/99-dpns-kb-lookup.md` (using a short prefix like `dpns`).
    *   Edit this file, replacing placeholders like `[Mode Name]`, `[mode_slug]`, and ensuring `target_audience` is `["data-product-new-specialist"]`. The template's core logic for KB lookup should generally suffice.
2.  **Other Rules (Usually Not Needed):** Most Squad Members will not require additional complex operational rules beyond their system prompt and the instructions in their MDTM tasks. If highly specific, reusable logic is needed, consider if it belongs in a KB `procedure/` or `skill/` first.

### Step 3.4: Structure and Populate the Knowledge Base (KB)

A Squad Member's KB might be lean initially, with much of its guidance coming from the MDTM task checklist. However, setting up the standard structure is good practice. Create the following in `.roo/commander/modes/data-product-new-specialist/kb/`:

1.  **`README.md` (KB Index - Mandatory):**
    *   Use `[.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md](.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md)` as a basis.
    *   Customize it for `data-product-new-specialist`. It might be very brief, perhaps just stating the mode's core function and pointing to its primary output artifact template if it has one.
2.  **Optional KB Subdirectories (`examples/`, `skills/`, `wisdom/`, `reference/`, `procedures/`, `prompts/`):**
    *   Populate these as needed, following the guidelines in `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`.
    *   **`skills/` and `wisdom/` are the most likely candidates for content** if the Squad Member has deep, reusable domain expertise or techniques that aren't suitable for a simple checklist item.
        *   Example for `data-product-strategist`: `kb/skills/defining_smart_objectives.md`.
    *   `examples/` can be useful to show a sample MDTM task it handles well, or an example of its output artifact.
    *   `reference/` could point to the specific TOML+MD template it uses for its output artifact (e.g., `template_product_strategy.md`).

### Step 3.5: Update the Manager Mode's Awareness

For the relevant Manager mode (e.g., `manager-data-product`) to use your new Squad Member:

1.  **Edit the Manager's `.mode.md` file:**
    *   Add the slug of your new Squad Member (e.g., `"data-product-new-specialist"`) to the `[metadata].delegate_to` array.
2.  **Edit the Manager's KB:**
    *   Open the Manager's `kb/reference/00-squad-composition.md`. Add an entry for your new Squad Member, detailing its slug, name, role, and typical output.
    *   Update the Manager's `kb/procedures/01-main-orchestration-flow.md` to incorporate this new Squad Member into its workflow sequence, detailing when it's called, what inputs it gets, and what outputs are expected. This is a critical step.

## 4. Testing Your New Squad Member Mode

1.  **MDTM Task Simulation:**
    *   Manually create an MDTM task file that your Manager mode *would* create for this new Squad Member. Ensure it has clear inputs, description, AC, and checklist.
    *   Invoke your new Squad Member mode directly, providing it with the path to this simulated MDTM task.
2.  **Observe Behavior:**
    *   Does it correctly read and understand the task?
    *   Does it attempt to follow the checklist?
    *   Does it create its expected output artifact in the correct format and location?
    *   Does it correctly update its MDTM task file (checklist, logs, status, `output_artifacts`)?
    *   Does it report completion appropriately?
3.  **Integration Testing (with Manager):**
    *   Once the Squad Member seems to work in isolation, test it as part of its Manager's full workflow. Initiate the Manager via `roo-commander` and observe if the Manager correctly delegates to your new Squad Member and processes its output.

## 5. Iteration and Refinement

Squad Member modes, being specialized, often require careful tuning of their system prompt and potentially their `skills/` or `wisdom/` KB articles to perform their task effectively. Test and iterate based on their performance.

By following these steps, you can create new specialist Squad Member modes that extend the capabilities of your Manager modes and the overall Roo Commander V8 system.