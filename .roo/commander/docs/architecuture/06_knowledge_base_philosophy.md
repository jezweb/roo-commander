+++
# --- Basic Metadata ---
id = "ARCHITECTURE-KB-PHILOSOPHY-V2" # Updated version
title = "Architecture: Knowledge Base (KB) Philosophy & Structure"
context_type = "architectural_document"
scope = "Explains the philosophy, purpose, structure, and role of mode-specific Knowledge Bases (KBs) within the Roo Commander system, and their relationship with mode-specific rules."
target_audience = ["developers", "system_architects"]
granularity = "conceptual_overview"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "2.0" # Incremented due to significant revisions in philosophy
tags = ["architecture", "knowledge-base", "kb", "ai-context", "mode-development", "rules-integration"]
related_context = [
    ".roo/commander/docs/architecture/README.md", # Parent index
    ".roo/commander/docs/standards/05-kb-structuring-best-practices.md", # Details on KB content
    ".roo/commander/docs/architecture/07_rules_system_architecture.md", # KBs supplement rules
    ".roo/commander/templates/modes/common/kb/" # Common KB article templates
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Semi-Annually"
+++

# Architecture: Knowledge Base (KB) Philosophy & Structure

## 1. Introduction: The Role of Knowledge Bases in Roo Commander

In the Roo Commander system, each AI mode (Orchestrator, Manager, or Squad Member) possesses its own dedicated **Knowledge Base (KB)**. The KB is a structured collection of files (primarily TOML+Markdown) located at `[.roo/commander/modes/[mode_slug]/kb/](.roo/commander/modes/[mode_slug]/kb/)`.

The primary philosophy behind mode-specific KBs in Roo Commander is to serve as a repository for **supplementary knowledge, reference data, detailed procedural elaborations, specific skills, guiding wisdom, examples, and dynamic prompts** that a mode can consult to effectively perform its functions.

Crucially, the KB is **not** the primary source of a mode's core operational instructions or its immediate behavioral logic. That role is fulfilled by:
1.  The mode's `roleDefinition` in its `.mode.md` file (for core identity given to Roo Code).
2.  The mode's specific rules located in `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)` (especially the `00-[mode_slug]-core-principles.md` file), which provide the direct, "instant context" instructions loaded by Roo Code.

The KB, therefore, supports and enriches the instructions found in the rules, providing the "deeper knowledge" a mode might need to execute a step defined in its rules.

## 2. Purpose of Mode-Specific KBs

*   **Encapsulate Domain-Specific Knowledge:** Allow each mode to have its own tailored set of detailed information relevant to its unique role (e.g., specific data product design techniques for `manager-data-product`, NPM command details for `spec-npm`).
*   **Provide Reference Material:** Store lists, mappings, summaries, or pointers to data the mode needs to consult (e.g., `00-available-managers-summary.md` for `👑 Roo Commander`).
*   **Detail Complex Procedures or Skills:** Elaborate on *how* to perform complex actions or apply specific techniques that might be referenced by a mode's rules (e.g., a Manager's main orchestration flow, a Squad Member's specialized analysis skill).
*   **Store Dynamic Prompts & Examples:** House structured text for dynamic prompts or illustrative examples of inputs/outputs.
*   **Codify Wisdom & Best Practices:** Capture guiding principles or strategic considerations relevant to the mode's domain.
*   **Promote Modularity:** Keep detailed, domain-specific knowledge separate from the mode's core definition and primary rules, making updates to knowledge more targeted.
*   **Foundation for RAG (Future):** Well-structured, granular KB articles are ideal for future integration with Retrieval Augmented Generation (RAG) systems, allowing modes to dynamically pull in the most relevant knowledge for a given task, as guided by their rules.

## 3. Relationship with Mode-Specific Rules

It's vital to understand the interplay between a mode's rules (in `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)`) and its KB:

*   **Rules Define *What* and *Core How*:** The mode's `00-[mode_slug]-core-principles.md` (and any other rules in its directory) define its fundamental operational principles, its primary decision-making logic, and *when and how it should consult its KB*. For instance, a rule might state: "When tasked with [X], consult KB procedure `kb/procedures/01-detailed-x-flow.md` and follow its steps."
*   **KB Provides *Detailed Elaboration* and *Supporting Knowledge*:** The KB then contains that `01-detailed-x-flow.md` procedure, or the specific skill details, reference data, or wisdom articles that the rules direct the mode to use.

The `custom_instructions_dir` field in a mode's `.mode.md` (e.g., `custom_instructions_dir = ".roo/commander/modes/[mode_slug]/kb/"`) points to its KB, but this is primarily for our workspace organization and for the mode's internal reference when its rules instruct it to look up KB content. The direct instructions loaded by Roo Code come from the `.roo/rules-[mode_slug]/` directory.

## 4. Standard KB Directory Structure

Each mode's KB resides in a dedicated subdirectory: `[.roo/commander/modes/[mode_slug]/kb/](.roo/commander/modes/[mode_slug]/kb/)`.

Within this `kb/` directory, a standard set of subfolders is used to organize different types of knowledge, as detailed in `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`. These include:

*   **`README.md` (KB Index):** The entry point to the mode's KB. (Template: `[.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md](.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md)`)
*   **`prompts/`:** Stores structured text for dynamic prompts.
*   **`procedures/`:** Contains detailed, step-by-step operational logic that elaborates on instructions found in the mode's rules.
*   **`reference/`:** Holds lists, mappings, or summaries the mode needs to consult.
*   **`examples/`:** Provides concrete examples relevant to the mode's operations.
*   **`skills/`:** Houses specific, actionable techniques or "how-to" guides for specialist functions.
*   **`wisdom/`:** Stores higher-level insights, best practices, or strategic considerations.

Each mode's `00-[mode_slug]-core-principles.md` rule specifies how it navigates and utilizes its own KB content.

## 5. KB Content by Mode Archetype (General Guidance)

*   **Orchestrator (`👑 Roo Commander`):**
    *   KB contains initial user prompts, procedures for manager delegation and session management, and reference lists of available managers. Its rules heavily reference these KB procedures.
*   **Manager Modes (e.g., `🧑‍💼 Data Product Manager`):**
    *   KB is critical. Contains the detailed main orchestration flow procedure for its squad, squad composition references, examples of sub-tasks, and potentially skills/wisdom for managing its specific domain. Its rules will direct it to follow this main KB procedure.
*   **Squad Member Modes (e.g., `📊 Data Product Strategist`):**
    *   KB contains specific skills, wisdom, examples, and references relevant to its narrow expertise (e.g., how to write SMART objectives, template for its output artifact). Its rules will guide it to use these when executing its MDTM task checklist.

## 6. Benefits of this KB Philosophy

*   **Clear Separation of Concerns:** Core operational directives are in rules (for Roo Code "instant context"), while detailed supporting knowledge is in the KB.
*   **Maintainability:** Changes to domain-specific knowledge or detailed procedures can be made within the KB without altering the mode's core rules or `.mode.md` definition.
*   **Reduced Rule Bloat:** Keeps rule files focused on primary logic, with detailed elaborations in the KB.
*   **Enhanced AI Reasoning:** Allows modes to be directed by rules to "look up" and apply deeper knowledge from their KB when needed.

By treating each mode's KB as a rich repository of supplementary, domain-specific knowledge that supports its rule-driven operations, Roo Commander aims for a more intelligent, adaptable, and maintainable multi-agent system.