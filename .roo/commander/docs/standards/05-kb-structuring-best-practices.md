# Standard: Knowledge Base (KB) Structuring Best Practices

## 1. Introduction

Each AI mode within the Roo Commander V8 system (Orchestrators, Managers, and Squad Members) possesses its own dedicated Knowledge Base (KB), located in `.roo/commander/modes/[mode_slug]/kb/`. This KB contains the specific operational instructions, procedural logic, reference data, and domain expertise that the mode relies on.

A well-structured KB is crucial for a mode's effectiveness, consistency, maintainability, and future extensibility (e.g., for Retrieval Augmented Generation - RAG). This document outlines best practices for organizing content within the standard KB subdirectories.

The architectural overview of KBs can be found in `[../architecture/06_knowledge_base_philosophy.md](../architecture/06_knowledge_base_philosophy.md)`.

## 2. General Principles for KB Content

*   **Clarity & Conciseness:** Write content clearly and to the point. AI modes process this text; ambiguity leads to errors.
*   **Modularity:** Break down complex information into smaller, focused articles or procedures.
*   **Actionability:** Information should be directly usable by the mode to perform its tasks or make decisions.
*   **Discoverability:** Use clear filenames and ensure the mode's KB `README.md` (index) accurately reflects the KB's content and structure.
*   **TOML+Markdown Standard:** All `.md` files within the KB should adhere to the `[.roo/rules/01-standard-toml-md-format.md](.././/rules/01-standard-toml-md-format.md)`, allowing for metadata like `id`, `title`, `tags`, etc.
*   **Tool Agnosticism:** When writing procedures or skills, focus on the *objective* and the *logical steps*, rather than prescribing specific tool names, unless a tool is absolutely intrinsic to that specific skill or procedure.

## 3. Standard KB Subdirectory Structure & Content Guidelines

The following subdirectories provide a standard organization for a mode's KB. Not all modes will need every subdirectory, but this structure should be followed where applicable.

### 3.1. `README.md` (KB Index - Mandatory)
*   **Location:** `.roo/commander/modes/[mode_slug]/kb/README.md`
*   **Purpose:** The main entry point and index for this mode's KB.
*   **Content:**
    *   Brief overview of the KB's purpose for *this specific mode*.
    *   Explanation of how *this mode* is intended to use its KB (referencing its KB Lookup Rule).
    *   A structured list of the other subdirectories (`prompts/`, `procedures/`, etc.) and key documents within them, with brief descriptions.
    *   Use template: `[.roo/commander/templates/modes/kb/template_00_mode_kb_readme.md](.././/templates/modes/kb/template_00_mode_kb_readme.md)`.

### 3.2. `prompts/`
*   **Purpose:** To store structured text snippets or templates used by the mode to dynamically construct prompts, especially for user interactions via `ask_followup_question` or for formulating messages to other modes.
*   **Content:**
    *   Typically `.md` files containing prompt text, placeholders for dynamic values, and suggested follow-up options.
    *   Each file should focus on a specific interaction point (e.g., `00-initial-options.md` for `roo-commander`, `01-clarify-feature-scope.md` for a Manager).
*   **Example:** `roo-commander/kb/prompts/00-initial-options.md` defines the first menu shown to the user.

### 3.3. `procedures/`
*   **Purpose:** To document detailed, step-by-step operational logic, standard operating procedures (SOPs), or decision-making workflows that the mode itself executes. This is the "how-to" for the mode's own internal processes.
*   **Content:**
    *   Sequences of actions, conditional logic, references to tools (described by function, not necessarily name), and calls to consult other KB sections (`reference/`, `skills/`, `wisdom/`).
    *   Crucial for Orchestrator and Manager modes to define their core orchestration flows.
    *   Squad Members might have simpler procedures or none if their MDTM task checklist is sufficiently detailed.
*   **Example:** `manager-data-product/kb/procedures/01-main-orchestration-flow.md` details how it sequences its squad.

### 3.4. `reference/`
*   **Purpose:** To store lists, mappings, summaries of external information, or pointers to data that the mode needs to consult to perform its tasks but isn't a "skill" or "wisdom" in itself.
*   **Content:**
    *   Data tables (in Markdown), lists of known entities (e.g., available Manager modes for `roo-commander`), configuration value summaries, or glossaries specific to the mode's domain.
    *   Pointers to critical external documentation if directly relevant and frequently used.
*   **Example:** `roo-commander/kb/reference/00-available-managers-summary.md`.

### 3.5. `examples/`
*   **Purpose:** To provide concrete examples that illustrate how the mode functions, what inputs it expects, or what its outputs look like. Useful for the mode's self-correction, for developers, and for testing.
*   **Content:**
    *   Sample input MDTM tasks the mode is designed to receive.
    *   Examples of the primary artifacts the mode produces.
    *   Illustrative scenarios of its interaction patterns.
*   **Example:** `manager-data-product/kb/examples/01-sample-input-mdtm-task.md`.

### 3.6. `skills/`
*   **Purpose:** To codify specific, actionable techniques, "how-to" guides for particular domain-specific methods, or detailed usage instructions for abstract concepts/tools relevant to the mode's specialist function. This is the mode's library of practical, applied knowledge.
*   **Content:**
    *   Step-by-step guides for performing a specialized analysis (e.g., "How to Conduct a SWOT Analysis" for `data-product-strategist`).
    *   Instructions on applying a particular methodology (e.g., "Steps for Writing Effective User Stories" for `data-product-ux-persona-architect`).
    *   Detailed explanations of how to use a conceptual tool or approach (e.g., "Applying the Value Proposition Canvas Framework").
    *   Can be organized into subdirectories by skill category.
*   **Distinction from `procedures/`:** `procedures/` define the mode's *own overall operational flow*. `skills/` define *how to do specific expert things* that might be called upon during one of those procedures.

### 3.7. `wisdom/`
*   **Purpose:** To store higher-level insights, best practices, common pitfalls or anti-patterns, guiding principles, design philosophies, or strategic considerations relevant to the mode's domain. This is the mode's conceptual and strategic knowledge.
*   **Content:**
    *   Articles on design principles (e.g., "Principles of User-Centric Data Product Design" for `manager-data-product`).
    *   Lists of best practices (e.g., "Best Practices for Writing Clear Acceptance Criteria").
    *   Discussions of common challenges and how to think about them (e.g., "Common Biases in Strategic Planning and How to Mitigate Them" for `data-product-strategist`).
    *   Conceptual explanations of why certain approaches are preferred.
    *   Can be organized into subdirectories by topic.
*   **Distinction from `skills/`:** `skills/` is about "how to do." `wisdom/` is about "why to do it this way," "what to consider," or "what good looks like."

## 4. Maintaining KB Quality

*   **Relevance:** Ensure KB content is directly relevant to the mode's defined role and responsibilities.
*   **Accuracy:** Keep information up-to-date.
*   **Atomicity (where practical):** Prefer smaller, focused articles over monolithic documents.
*   **Cross-Referencing:** Link between related KB articles, rules, and templates where appropriate.
*   **Regular Review:** Periodically review and update KB content, especially as the mode or workspace standards evolve.

By following these structuring guidelines, each mode's Knowledge Base can become a powerful asset, enabling more consistent, intelligent, and maintainable AI behavior.