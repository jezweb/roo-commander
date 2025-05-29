+++
# --- Basic Metadata ---
id = "STANDARD-KB-STRUCTURING-V2" # Updated version
title = "Standard: Knowledge Base (KB) Structuring Best Practices"
context_type = "standards_document"
scope = "Defines best practices for structuring and populating AI Mode Knowledge Bases (KBs) within the Roo Commander workspace."
target_audience = ["all"] # Developers creating/maintaining modes, AI modes that might interact with KBs
granularity = "best_practice_guide"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "2.0" # Incremented due to refined conventions
tags = ["standards", "kb", "knowledge-base", "best-practices", "mode-development", "ai-context"]
related_context = [
    ".roo/commander/docs/architecture/06_knowledge_base_philosophy.md",
    ".roo/commander/docs/standards/00-directory-structure.md", # KBs are part of this structure
    ".roo/commander/docs/standards/01-naming-conventions.md", # For KB file naming and path referencing
    ".roo/commander/docs/standards/02-toml-md-document-format.md", # KB articles use this format
    ".roo/commander/templates/modes/common/kb/" # Location of common KB article templates
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Annually"
+++

# Standard: Knowledge Base (KB) Structuring Best Practices

## 1. Introduction

Each AI mode within the Roo Commander system (Orchestrators, Managers, and Squad Members) possesses its own dedicated Knowledge Base (KB). This KB, located at `[.roo/commander/modes/[mode_slug]/kb/](.roo/commander/modes/[mode_slug]/kb/)`, contains the specific operational instructions, procedural logic, reference data, domain expertise, and guiding principles that the mode relies on to perform its functions effectively and consistently.

A well-structured and thoughtfully populated KB is crucial for a mode's intelligence, reliability, maintainability, and future extensibility (e.g., for Retrieval Augmented Generation - RAG). This document outlines best practices for organizing content within the standard KB subdirectories.

The architectural overview of KBs can be found in `[.roo/commander/docs/architecture/06_knowledge_base_philosophy.md](.roo/commander/docs/architecture/06_knowledge_base_philosophy.md)`. All paths referenced herein **MUST** be workspace-root-relative (starting with `.roo/`).

## 2. General Principles for KB Content Creation

*   **Targeted for the Mode:** All KB content **MUST** be written from the perspective of being *used by the mode itself*. It's the mode's internal "brain."
*   **Clarity & Precision:** Use clear, unambiguous language. Define terms if necessary. AI modes rely on precise instructions.
*   **Actionability:** Information **SHOULD** directly help the mode perform its tasks, make decisions, or understand context.
*   **Modularity & Atomicity:** Break down complex topics into smaller, focused articles within the appropriate subdirectories. Each article should ideally address one specific procedure, skill, piece of wisdom, etc.
*   **Discoverability:**
    *   Use clear, descriptive filenames adhering to `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)` (e.g., `01-main-orchestration-flow.md`, `how-to-write-smart-objectives.md`).
    *   Ensure the mode's root KB `README.md` (the KB Index) accurately lists and links to key content within its KB.
*   **TOML+Markdown Standard:** All `.md` files within the KB **MUST** adhere to the `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`, including valid TOML frontmatter for metadata (e.g., `id`, `title`, `context_type`, `target_audience`, `tags`).
*   **Use Standard Templates:** For consistency, KB articles **MUST** be created using the common KB article templates found in `[.roo/commander/templates/modes/common/kb/](.roo/commander/templates/modes/common/kb/)` (e.g., `template_00_kb_procedure.md`, `template_00_kb_skill.md`).
*   **Tool Agnosticism (Generally):** In procedures and skills, focus on *what* needs to be achieved and the logical steps, rather than hardcoding specific tool names, unless a tool is absolutely intrinsic and universally available for that mode. Describe tool functions abstractly if possible.
*   **Path Referencing:** All internal file path references within KB articles (TOML or Markdown) **MUST** be workspace-root-relative, starting with `.roo/`.

## 3. Standard KB Subdirectory Structure & Content Guidelines

The following subdirectories provide a standard organization for a mode's KB. Not all modes will require content in every subdirectory, but this structure **MUST** be followed where applicable. Each mode's KB **MUST** have a root `README.md`.

### 3.1. `README.md` (KB Index - Mandatory)
*   **Location:** `[.roo/commander/modes/[mode_slug]/kb/README.md](.roo/commander/modes/[mode_slug]/kb/README.md)`
*   **Purpose:** The main entry point and index for this mode's KB.
*   **Content:**
    *   Brief overview of the KB's purpose for *this specific mode*.
    *   Explanation of how *this mode* is intended to use its KB (referencing its Core Principles & KB Usage rule, e.g., `[.roo/rules-[mode_slug]/00-[mode_slug]-core-principles.md]`).
    *   A structured list of the other subdirectories (`prompts/`, `procedures/`, etc.) and key documents within them, with brief descriptions and correct `.roo/` anchored paths.
    *   **Template:** `[.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md](.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md)`.

### 3.2. `prompts/`
*   **Purpose:** To store structured text snippets or templates used by the mode to dynamically construct prompts, especially for user interactions (e.g., via `ask_followup_question`) or for formulating messages to other modes.
*   **Content:**
    *   Typically `.md` files containing prompt text, placeholders for dynamic values (using `{{PLACEHOLDER}}` convention), and suggested follow-up options.
    *   Each file should focus on a specific interaction point.
*   **Example:** `[.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md](.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md)`
*   **Template:** `[.roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.md](.roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.md)`.

### 3.3. `procedures/`
*   **Purpose:** To document detailed, step-by-step operational logic, standard operating procedures (SOPs), or decision-making workflows that the mode itself executes. This is the "how-to" for the mode's internal processes.
*   **Content:**
    *   Sequences of actions, conditional logic, references to tools (described by function), calls to consult other KB sections (`reference/`, `skills/`, `wisdom/`).
    *   Crucial for Orchestrator and Manager modes to define their core orchestration flows.
*   **Example:** `[.roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md](.roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md)`
*   **Template:** `[.roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.md](.roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.md)`. Manager modes also use specialized procedure templates like `[.roo/commander/templates/modes/manager/kb/template_01_manager_orchestration_flow.md](.roo/commander/templates/modes/manager/kb/template_01_manager_orchestration_flow.md)`.

### 3.4. `reference/`
*   **Purpose:** To store lists, mappings, data summaries, or pointers to data that the mode needs to consult but isn't a "skill" or "wisdom" in itself.
*   **Content:**
    *   Data tables (in Markdown), lists of known entities, configuration summaries, glossaries specific to the mode's domain.
*   **Example:** `[.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md](.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md)`
*   **Template:** `[.roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.md](.roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.md)`. Manager modes also use specialized reference templates like `[.roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.md](.roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.md)`.

### 3.5. `examples/`
*   **Purpose:** To provide concrete examples that illustrate how the mode functions, what inputs it expects, or what its outputs look like. Useful for the mode's self-correction, for developers, and for testing.
*   **Content:**
    *   Sample input MDTM tasks the mode is designed to receive.
    *   Examples of the primary artifacts the mode produces.
*   **Example:** `[.roo/commander/modes/manager-data-product/kb/examples/01-sample-subtask-for-data-product-strategist.md](.roo/commander/modes/manager-data-product/kb/examples/01-sample-subtask-for-data-product-strategist.md)`
*   **Template:** `[.roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.md](.roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.md)`.

### 3.6. `skills/`
*   **Purpose:** To codify specific, actionable "how-to" knowledge, techniques, or methodologies relevant to the mode's specialist function. This is the mode's library of practical, applied knowledge.
*   **Content:**
    *   Step-by-step guides for performing a specialized analysis or task.
    *   Can be organized into subdirectories by skill category.
*   **Distinction from `procedures/`:** `procedures/` define the mode's *own overall operational flow*. `skills/` define *how to do specific expert things* that might be called upon during one of those procedures.
*   **Template:** `[.roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.md](.roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.md)`.

### 3.7. `wisdom/`
*   **Purpose:** To store higher-level insights, best practices, common pitfalls or anti-patterns, guiding principles, design philosophies, or strategic considerations relevant to the mode's domain. This is the mode's conceptual and strategic knowledge.
*   **Content:**
    *   Articles on design principles, lists of best practices, discussions of common challenges.
    *   Can be organized into subdirectories by topic.
*   **Distinction from `skills/`:** `skills/` is about "how to do." `wisdom/` is about "why to do it this way," "what to consider," or "what good looks like."
*   **Template:** `[.roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.md](.roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.md)`.

## 4. Maintaining KB Quality

*   **Relevance:** Ensure KB content is directly relevant to the mode's defined role and responsibilities.
*   **Accuracy:** Keep information up-to-date with current system standards and mode capabilities.
*   **Cross-Referencing:** Link between related KB articles, rules, and templates using correct `.roo/` anchored paths.
*   **Regular Review:** Periodically review and update KB content, especially as the mode or workspace standards evolve. The mode's `00-[mode_slug]-core-principles.md` rule should guide its KB usage.

By following these structuring guidelines, each mode's Knowledge Base can become a powerful asset, enabling more consistent, intelligent, and maintainable AI behavior within the Roo Commander ecosystem.