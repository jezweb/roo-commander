# Developer Guide: Extending `roo-commander`'s KB for New Manager Workflows

## 1. Introduction

As the Roo Commander V8 ecosystem grows, new "Manager" modes will be developed to orchestrate different complex workflows (e.g., beyond the initial `manager-data-product`). For the top-level Orchestrator, `roo-commander`, to be able to offer these new workflows to the user and correctly delegate to the new Manager modes, its Knowledge Base (KB) must be updated.

This guide outlines the specific files within `roo-commander`'s KB (`.roo/commander/modes/roo-commander/kb/`) that need to be modified when a new Manager mode and its associated workflow are introduced.

**Assumptions:**
*   You have already created and tested your new Manager mode (e.g., `manager-new-workflow`) and its associated squad, following the guide `[./01_creating_new_manager_modes.md](./01_creating_new_manager_modes.md)`.
*   Your new Manager mode is capable of receiving a top-level MDTM task and orchestrating its workflow.

## 2. Key `roo-commander` KB Files to Update

When adding a new Manager workflow, you primarily need to update `roo-commander`'s reference material and potentially its initial prompt options.

### Step 2.1: Update the List of Available Managers

This is the most critical step to make `roo-commander` aware of your new Manager.

1.  **File to Edit:**
    *   `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`
2.  **Action:**
    *   Add a new entry to the "Manager Mode Mappings" list in this file. Follow the existing format:
        ```markdown
        *   **Workflow Description:** "[User-friendly name for the new workflow, e.g., 🚀 My New Awesome Workflow]"
            *   **Manager Mode Slug:** `[slug-of-your-new-manager-mode]` (e.g., `manager-new-workflow`)
            *   **Brief Domain:** [Short description of what this Manager and workflow achieve]
            *   **Typical High-Level Goal for Manager:** [Example of a goal `roo-commander` would put in the MDTM task for this Manager]
        ```
3.  **Example Addition:**
    ```markdown
    *   **Workflow Description:** "⚙️ Automate System Maintenance Tasks"
        *   **Manager Mode Slug:** `manager-system-maintenance`
        *   **Brief Domain:** Orchestrates routine system checks, log rotations, and backup procedures.
        *   **Typical High-Level Goal for Manager:** "Execute weekly system maintenance routine for production environment."
    ```
4.  **Impact:**
    *   The procedure `roo-commander/kb/procedures/01-initiate-manager-delegation.md` consults this summary file. By adding your new Manager here, `roo-commander` will now be able to:
        *   Present "[User-friendly name for the new workflow]" as an option to the user if it presents a list of workflows.
        *   Correctly identify `[slug-of-your-new-manager-mode]` as the target for delegation if that workflow is chosen.

### Step 2.2: (Optional) Update Initial Prompt Options

If you want the new Manager's workflow to be a very prominent, top-level option presented immediately to the user by `roo-commander`:

1.  **File to Edit:**
    *   `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md`
2.  **Action:**
    *   Consider if your new workflow is common enough to be listed directly in the first set of choices. The current structure is:
        ```markdown
        1.  🚀 Start New Design / Workflow Session...
        2.  📂 Manage Existing Work Sessions...
        3.  ❓ Help / About this Commander
        ```
    *   **Option A (Keep it under "Start New Design / Workflow Session..."):** This is the default and usually preferred way. No change is needed in `00-initial-options.md`. `roo-commander` will discover your new workflow via the `00-available-managers-summary.md` when the user selects option 1. This keeps the initial menu lean.
    *   **Option B (Add as a new top-level option):** If the new workflow is fundamentally different and deserves its own top-level entry, you could add it. *This should be done sparingly to avoid cluttering the initial prompt.*
        *   Example (if adding):
            ```markdown
            1.  🚀 Start New Design / Workflow Session...
            2.  ⚙️ Initiate System Maintenance Workflow
            3.  📂 Manage Existing Work Sessions...
            4.  ❓ Help / About this Commander
            ```
3.  **Impact:**
    *   If you choose Option B, `roo-commander`'s main initialization rule (`.roo/commander/modes/roo-commander/rules-roo-commander/01-rc-initialization-delegation.md`) might need a slight adjustment to its logic to directly trigger the `01-initiate-manager-delegation.md` procedure with your new Manager pre-selected if this new top-level option is chosen. However, the current design of `01-initiate-manager-delegation.md` (where it presents options from the summary file) is more scalable.

**Recommendation:** For most new Manager workflows, **Option A (no change to `00-initial-options.md`) is preferred.** Simply updating `reference/00-available-managers-summary.md` is usually sufficient to make `roo-commander` aware and capable of offering the new workflow when the user indicates they want to start *a* new workflow.

### Step 2.3: Update `roo-commander`'s `.mode.md` (Delegate List)

To maintain an accurate reflection of `roo-commander`'s capabilities for documentation and potential future tooling:

1.  **File to Edit:**
    *   `.roo/commander/modes/roo-commander/roo-commander.mode.md`
2.  **Action:**
    *   Add the slug of your new Manager mode (e.g., `manager-new-workflow`) to the `[metadata].delegate_to` array in the TOML frontmatter.
    ```toml
    [metadata]
    # ... other tags and categories ...
    delegate_to = [
        "manager-data-product",
        "manager-new-workflow", # Your new manager
        "prime-txt"
    ]
    # ...
    ```
3.  **Impact:** This field provides a quick reference for developers (and potentially for `roo-commander` itself or other tools) about which Manager modes it is designed to interact with.

## 3. Testing the Integration

After updating these KB files:

1.  **Restart/Reload `roo-commander`** (if your Roo Code environment requires it for KB changes to take effect).
2.  **Initiate an interaction with `@roo-commander`.**
3.  Select the option "🚀 Start New Design / Workflow Session..." (or your new top-level option if you added one).
4.  **Verify:**
    *   `roo-commander` should now present your new "[User-friendly name for the new workflow]" as an option (if it presents a list of managers).
    *   If you select your new workflow, `roo-commander` should correctly identify your new Manager mode's slug.
    *   It should then proceed to create a top-level MDTM task and delegate it to your new Manager mode.
5.  Check the `session_log.md` to ensure the delegation and MDTM task creation for your new Manager are logged correctly.

## 4. Conclusion

By updating these key files in `roo-commander`'s Knowledge Base, you effectively "teach" it about new high-level workflows and the Manager modes responsible for them. This process ensures that Roo Commander V8 remains extensible and can adapt to orchestrate a growing variety of complex tasks.