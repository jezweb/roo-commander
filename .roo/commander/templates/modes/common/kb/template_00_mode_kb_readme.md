+++
# --- Basic Metadata (Required for KB READMEs) ---
id = "KB-INDEX-[mode_slug_uppercase]" # e.g., KB-INDEX-ROO-COMMANDER, KB-INDEX-MANAGER-DATA-PRODUCT
title = "Knowledge Base (KB) Index for [Mode Name]"
context_type = "kb_index" # Fixed type for KB README files
scope = "Index and overview of the Knowledge Base for the '[Mode Name]' ([mode_slug]) mode."
target_audience = ["[mode_slug]", "developers_maintaining_mode"] # The mode itself and humans
granularity = "overview"
status = "active" # Should be active if the mode is active
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this KB index structure
tags = ["kb", "index", "readme", "[mode_slug_tag]"]
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Link to the mode definition
    ".roo/commander/modes/[mode_slug]/rules-[mode_slug]/99-[mode_slug_lc]-kb-lookup.md" # Link to its KB lookup rule
]
template_schema_doc = ".roo/commander/templates/modes/kb/template_00_mode_kb_readme.README.md" # Path to its own schema
# --- KB Specific Fields (Optional) ---
# primary_operational_procedure = "kb/procedures/01-main-flow.md" # Example: Path to its most important procedure
# key_reference_document = "kb/reference/00-important-data.md" # Example
+++

# Knowledge Base (KB) Index for {{ title | default: "[Mode Name]" }}

## 1. Purpose of this Knowledge Base

This Knowledge Base (KB) contains the specific operational instructions, prompts, procedures, reference materials, examples, skills, and wisdom that the **`[Mode Name]`** (`[mode_slug]`) mode uses to perform its designated functions effectively and consistently.

This `README.md` file serves as the primary index and entry point to the contents of this KB.

## 2. How `[Mode Name]` Uses This KB

The `[Mode Name]` mode is instructed by its system prompt and its dedicated KB lookup rule (`.roo/commander/modes/[mode_slug]/rules-[mode_slug]/99-[mode_slug_lc]-kb-lookup.md`) to consult this KB. Typically, it will:

1.  Start by reviewing this `README.md` (this file) to understand the KB's structure and locate key documents.
2.  Access specific files within the subdirectories (`prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`) as directed by its operational logic or its KB lookup rule for the task at hand.

## 3. KB Structure & Key Documents Overview

This KB is organized into the following standard subdirectories. Not all subdirectories may be populated for every mode, depending on its complexity and role.

*   **`README.md` (This file):** Index and overview of this Knowledge Base.

*   **`prompts/` (Optional):**
    *   Contains structured text for dynamic prompts used by this mode in user interactions or when formulating messages for other modes.
    *   *Key files (if any):*
        *   `[path/to/prompt_1.md]` - [Brief description]
        *   ...

*   **`procedures/` (Often Mandatory for Orchestrators/Managers):**
    *   Contains detailed, step-by-step procedures for this mode's core operational workflows and decision-making logic.
    *   *Key files (if any):*
        *   `[path/to/procedure_1.md]` - [Brief description, e.g., "Main Orchestration Flow"]
        *   ...

*   **`reference/` (Optional):**
    *   Contains reference lists, mappings, summaries of external information, or pointers that this mode consults.
    *   *Key files (if any):*
        *   `[path/to/reference_1.md]` - [Brief description, e.g., "Summary of Squad Members"]
        *   ...

*   **`examples/` (Optional but Recommended):**
    *   Contains concrete examples relevant to this mode's operations, such as sample inputs it expects or sample outputs it produces.
    *   *Key files (if any):*
        *   `[path/to/example_1.md]` - [Brief description, e.g., "Sample Input MDTM Task"]
        *   ...

*   **`skills/` (Optional, for "how-to" knowledge):**
    *   Contains specific, actionable techniques, "how-to" guides for tools or methodologies relevant to this mode's specialist function.
    *   *Key files/subdirectories (if any):*
        *   `[skill_category]/[specific_skill_guide.md]` - [Brief description]
        *   ...

*   **`wisdom/` (Optional, for guiding principles):**
    *   Contains higher-level insights, best practices, anti-patterns, design principles, or strategic considerations relevant to this mode's domain.
    *   *Key files/subdirectories (if any):*
        *   `[topic_area]/[principle_or_insight.md]` - [Brief description]
        *   ...

## 4. Maintaining This KB

This KB should be updated whenever:
*   The `[Mode Name]`'s core procedures or logic change.
*   New reference materials, examples, skills, or wisdom are codified for the mode.
*   Prompts used by the mode are created or modified.
*   This `README.md` file itself should be kept current to accurately reflect the KB's contents.