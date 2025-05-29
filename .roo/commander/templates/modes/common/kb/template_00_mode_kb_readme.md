+++
# --- Basic Metadata (Required for KB READMEs) ---
id = "KB-INDEX-[mode_slug_uppercase]" # Placeholder: e.g., KB-INDEX-ROO-COMMANDER, KB-INDEX-MANAGER-DATA-PRODUCT
title = "Knowledge Base (KB) Index for [Mode Name]" # Placeholder: e.g., Knowledge Base (KB) Index for 👑 Roo Commander
context_type = "kb_index" # Fixed type for KB README files
scope = "Index and overview of the Knowledge Base for the '[Mode Name]' (`[mode_slug]`) mode." # Placeholder
target_audience = ["[mode_slug]", "developers_maintaining_mode"] # Placeholder: [mode_slug]
granularity = "overview"
status = "active" # Default for a new mode's KB README
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this KB index instance
tags = ["kb", "index", "readme", "[mode_slug_tag]"] # Placeholder: [mode_slug_tag]
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Placeholder: Link to the mode definition
    ".roo/rules-[mode_slug]/00-[mode_slug]-core-principles.md" # Placeholder: Link to its Core Principles & KB Usage rule
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.README.md"

# --- KB Specific Fields (Optional - for the instance, fill as needed) ---
# primary_operational_procedure = "kb/procedures/01-main-flow.md" # Example: Path to its most important procedure within this KB
# key_reference_document = "kb/reference/00-important-data.md" # Example
# key_skill_article = "kb/skills/01-core-skill.md" # Example
+++

# Knowledge Base (KB) Index for {{ title | default: "[Mode Name]" }}

## 1. Purpose of this Knowledge Base

This Knowledge Base (KB) contains the specific operational instructions (elaborations on rules), reference materials, examples, skills, wisdom, and prompts that the **`[Mode Name]`** (`[mode_slug]`) mode uses to perform its designated functions effectively and consistently, as guided by its mode-specific rules in `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)`.

This `README.md` file serves as the primary index and entry point to the contents of *this specific mode's* KB.

## 2. How `[Mode Name]` Uses This KB

The `[Mode Name]` mode is instructed by its Core Principles & KB Usage rule (`[.roo/rules-[mode_slug]/00-[mode_slug]-core-principles.md]`) to consult this KB. Typically, it will:

1.  Start by reviewing this `README.md` (this file) to understand this KB's structure and locate key documents relevant to its current task.
2.  Access specific files within the subdirectories (`prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`) as directed by its operational logic defined in its rules or when seeking detailed information to execute a step from an MDTM task checklist.

## 3. KB Structure & Key Documents Overview

This KB is organized into the following standard subdirectories. Not all subdirectories may be populated for every mode, depending on its complexity and role. **This section should be updated by the `meta-kb-editor` or developers as key articles are added to this mode's KB.**

*   **`README.md` (This file):** Index and overview of this Knowledge Base.

*   **`prompts/` (Optional):**
    *   Contains structured text for dynamic prompts used by this mode.
    *   *Key files for `[Mode Name]` (if any):*
        *   `[./prompts/prompt_1.md](./prompts/prompt_1.md)`: [Brief description of this mode's specific prompt]
        *   ...

*   **`procedures/` (Often key for Orchestrators/Managers, can be for Squad members too):**
    *   Contains detailed, step-by-step procedures that elaborate on this mode's operational workflows (often referenced by its rules).
    *   *Key files for `[Mode Name]` (if any):*
        *   `[./procedures/procedure_1.md](./procedures/procedure_1.md)`: [Brief description, e.g., "Main Orchestration Flow for X"]
        *   ...

*   **`reference/` (Optional):**
    *   Contains reference lists, mappings, or summaries that this mode consults.
    *   *Key files for `[Mode Name]` (if any):*
        *   `[./reference/reference_1.md](./reference/reference_1.md)`: [Brief description, e.g., "Summary of Y"]
        *   ...

*   **`examples/` (Optional but Recommended):**
    *   Contains concrete examples relevant to this mode's operations.
    *   *Key files for `[Mode Name]` (if any):*
        *   `[./examples/example_1.md](./examples/example_1.md)`: [Brief description, e.g., "Sample Input Z"]
        *   ...

*   **`skills/` (Optional, for "how-to" knowledge):**
    *   Contains specific, actionable techniques or "how-to" guides relevant to this mode's specialist function.
    *   *Key files/subdirectories for `[Mode Name]` (if any):*
        *   `[./skills/skill_guide_1.md](./skills/skill_guide_1.md)`: [Brief description]
        *   ...

*   **`wisdom/` (Optional, for guiding principles):**
    *   Contains higher-level insights, best practices, or strategic considerations relevant to this mode's domain.
    *   *Key files/subdirectories for `[Mode Name]` (if any):*
        *   `[./wisdom/wisdom_article_1.md](./wisdom/wisdom_article_1.md)`: [Brief description]
        *   ...

## 4. Maintaining This KB

This KB, and specifically this `README.md` index, should be updated whenever:
*   The `[Mode Name]`'s core procedures or logic (defined in its rules or elaborated here) change.
*   New significant reference materials, examples, skills, or wisdom are codified for the mode.
*   Prompts used by the mode are created or modified.
Ensure all paths are workspace-root-relative, starting with `.roo/`.