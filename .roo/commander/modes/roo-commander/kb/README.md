+++
# --- Basic Metadata (Required for KB READMEs) ---
id = "KB-INDEX-ROO-COMMANDER" # As per template: KB-INDEX-[mode_slug_uppercase]
title = "Knowledge Base (KB) Index for Roo Commander V8" # As per template
context_type = "kb_index" # Fixed type for KB README files
scope = "Index and overview of the Knowledge Base for the 'Roo Commander V8' (roo-commander) mode." # As per template
target_audience = ["roo-commander", "developers_maintaining_mode"] # As per template
granularity = "overview" # As per template
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder - To be filled with current date
version = "1.0" # Version of this KB index structure
tags = ["kb", "index", "readme", "roo-commander"] # As per template, added roo-commander tag
related_context = [
    ".roo/commander/modes/roo-commander/roo-commander.mode.md", # Link to the mode definition
    ".roo/commander/modes/roo-commander/rules-roo-commander/99-rc-kb-lookup.md" # Link to its KB lookup rule
]
template_schema_doc = ".roo/commander/templates/modes/kb/template_00_mode_kb_readme.README.md" # Path to its own schema

# --- KB Specific Fields (Optional) ---
primary_operational_procedure = "kb/procedures/01-initiate-manager-delegation.md" # Key procedure
# key_reference_document = "kb/reference/00-available-managers-summary.md" # Also key, but README lists it
+++

# Knowledge Base (KB) Index for Roo Commander V8 (👑)

## 1. Purpose of this Knowledge Base

This Knowledge Base (KB) contains the specific operational instructions, prompts, procedures, and reference materials that **Roo Commander V8** (`roo-commander`) uses to perform its core functions. As the primary user-facing orchestrator, `roo-commander` relies on this KB to:

*   Understand how to interact with the user for initial goal clarification.
*   Manage the lifecycle of work sessions (initiation, logging, artifact organization).
*   Correctly identify and delegate high-level objectives to specialized "Manager" modes (e.g., `manager-data-product`) by creating top-level MDTM tasks.
*   Handle explicit user commands related to session management.

Adherence to the procedures and references within this KB is critical for `roo-commander` to operate consistently, effectively, and in alignment with the workspace standards defined in `.roo/rules/`.

## 2. How Roo Commander V8 Uses This KB

The `roo-commander` mode is instructed by its system prompt and its dedicated KB lookup rule (`.roo/commander/modes/roo-commander/rules-roo-commander/99-rc-kb-lookup.md`) to consult this KB. Typically, it will:

1.  Start by reviewing this `README.md` (this file) to understand the KB's structure and locate key documents.
2.  Access specific files within the subdirectories (`prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`) as directed by its operational logic or its KB lookup rule for the task at hand.

## 3. KB Structure & Key Documents Overview

This KB is organized into the following standard subdirectories. Not all subdirectories may be populated initially, but this structure allows for future growth.

*   **`README.md` (This file):** Index and overview of this Knowledge Base.

*   **`prompts/`**:
    *   Contains structured text for dynamic prompts used by `roo-commander` in user interactions.
    *   **Key File:**
        *   `prompts/00-initial-options.md` - Defines the primary menu of options presented to the user upon initiation.

*   **`procedures/`**:
    *   Contains detailed, step-by-step procedures for `roo-commander`'s core operational workflows.
    *   **Key Files:**
        *   `procedures/01-initiate-manager-delegation.md` - Outlines how to delegate to a Manager mode (e.g., for starting a Data Product Design workflow).
        *   `procedures/02-handle-session-mgmt-commands.md` - Details handling of explicit user commands for session management (start, list, resume, summarize, end).

*   **`reference/`**:
    *   Contains reference lists, mappings, or summaries that `roo-commander` consults.
    *   **Key File:**
        *   `reference/00-available-managers-summary.md` - Lists Manager modes `roo-commander` can delegate to and the user intents they serve.

*   **`examples/` (Optional - To be developed as needed):**
    *   This directory can store concrete examples relevant to `roo-commander`'s operations.
    *   *Potential files:*
        *   `examples/01-sample-manager-mdtm-task.md` - An example of a top-level MDTM task it creates.
        *   `examples/02-sample-session-log-structure.md` - An example of a populated `session_log.md`.

*   **`skills/` (Optional - To be developed as needed):**
    *   This directory can store specific techniques related to `roo-commander`'s orchestration role.
    *   *Potential files:*
        *   `skills/advanced_user_intent_parsing.md`

*   **`wisdom/` (Optional - To be developed as needed):**
    *   This directory can store guiding principles for `roo-commander`'s role.
    *   *Potential files:*
        *   `wisdom/multi_manager_coordination_strategies.md`

## 4. Maintaining This KB

This KB should be updated whenever:
*   `roo-commander`'s core procedures or logic change.
*   New Manager modes are added (requiring updates to `reference/00-available-managers-summary.md` and potentially `prompts/00-initial-options.md`).
*   Prompts used by `roo-commander` are created or modified.
*   This `README.md` file itself should be kept current to accurately reflect the KB's contents.