# Developer Guide: Populating Mode Knowledge Bases (KBs)

## 1. Introduction

This guide is for developers creating or extending AI modes within the Roo Commander V8 system. Each mode has a dedicated Knowledge Base (KB) located at `.roo/commander/modes/[mode_slug]/kb/`. This KB is crucial as it stores the mode's specific operational instructions, procedural logic, reference data, domain expertise, and guiding principles.

Effectively populating this KB is key to creating intelligent, consistent, and maintainable modes. This guide outlines best practices for structuring and writing content for the standard KB subdirectories, using the provided KB article templates.

**Prerequisites:**
*   You have already created the basic mode definition (`[mode_slug].mode.md`) and its core principles rule (`00-[mode_slug]-core-principles.md`).
*   Familiarity with the standard KB structure (see `[../standards/05-kb-structuring-best-practices.md](../standards/05-kb-structuring-best-practices.md)`).
*   Understanding of the TOML+Markdown format (`[../standards/02-toml-md-document-format.md](../standards/02-toml-md-document-format.md)`).
*   Access to KB article templates in `.roo/commander/templates/modes/common/kb/`.

## 2. General Principles for KB Content Creation

*   **Targeted for the Mode:** All KB content should be written from the perspective of being *used by the mode itself*. It's the mode's internal "brain."
*   **Clarity & Precision:** Use clear, unambiguous language. Define terms if necessary.
*   **Actionability:** Information should directly help the mode perform its tasks or make decisions.
*   **Modularity:** Break down complex topics into smaller, focused articles within the appropriate subdirectories.
*   **Discoverability:** Use descriptive filenames (see `[../standards/01-naming-conventions.md](../standards/01-naming-conventions.md)`) and ensure the mode's root KB `README.md` accurately indexes key content.
*   **Use Templates:** For consistency, use the provided KB article templates for procedures, prompts, references, examples, skills, and wisdom articles.
*   **TOML Metadata:** Ensure each KB article has accurate TOML frontmatter, including a unique `id`, `title`, `context_type` (e.g., `kb_procedure`, `kb_skill`), `target_audience` (the mode's slug), and relevant `tags`.
*   **Tool Agnosticism (Generally):** In procedures and skills, focus on *what* needs to be achieved and the logical steps, rather than hardcoding specific tool names, unless a tool is absolutely intrinsic and universally available.

## 3. Populating Standard KB Subdirectories

Below are guidelines for populating each standard KB subdirectory. Remember that not all modes will require content in every subdirectory.

### 3.1. `README.md` (KB Index - Mandatory)
*   **Template:** `[.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md](../../templates/modes/common/kb/template_00_mode_kb_readme.md)`
*   **Purpose:** The main entry point and index for this mode's KB.
*   **Key Content to Customize:**
    *   Update all placeholders like `[Mode Name]` and `[mode_slug]`.
    *   In Section 3 ("KB Structure & Key Documents Overview"), accurately list and briefly describe the *actual key files* you are creating within each subdirectory of *this mode's* KB. This makes the README a useful, specific index.
    *   Update `related_context` in the TOML to point to this mode's `.mode.md` and its `00-...-core-principles.md` rule.

### 3.2. `prompts/`
*   **Template:** `[.roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.md](../../templates/modes/common/kb/prompts/template_00_kb_prompt.md)`
*   **Purpose:** For structured text used by the mode to generate dynamic prompts (e.g., for `ask_followup_question`).
*   **When to Use:** If your mode needs to ask users clarifying questions or present options in a structured way. Orchestrators and some Managers are more likely to use this. Many Squad Members might not.
*   **Content Focus:** Main question text, suggested follow-up options, placeholders for dynamic values.

### 3.3. `procedures/`
*   **Template:** `[.roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.md](../../templates/modes/common/kb/procedures/template_00_kb_procedure.md)`
*   **Purpose:** For detailed, step-by-step operational logic that the mode itself executes. This is the "how-to" for the mode's internal processes.
*   **When to Use:**
    *   **Managers:** **Crucial.** The `01-main-orchestration-flow.md` (or similarly named primary procedure) is mandatory and details how it manages its squad.
    *   **Orchestrators:** Essential for defining how it handles initial options, delegates to managers, and manages sessions.
    *   **Squad Members:** Optional. Only if its internal process for completing its MDTM task is complex and warrants a separate procedural document beyond its system prompt and the MDTM checklist.
*   **Content Focus:** Numbered steps, conditional logic, references to tools (by function), calls to consult other KB sections.

### 3.4. `reference/`
*   **Template:** `[.roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.md](../../templates/modes/common/kb/reference/template_00_kb_reference.md)`
*   **Purpose:** For lists, mappings, data summaries, or pointers that the mode needs to consult.
*   **When to Use:**
    *   **Managers:** Essential for `00-[squad_name]-squad-composition.md`.
    *   **Orchestrators:** Essential for `00-available-managers-summary.md`.
    *   **Squad Members:** Useful for `00-output-artifact-template-info.md` (pointing to the template it uses for its deliverable) or glossaries of terms specific to its narrow domain.
*   **Content Focus:** Tables, definition lists, configuration summaries, links.

### 3.5. `examples/`
*   **Template:** `[.roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.md](../../templates/modes/common/kb/examples/template_00_kb_example_file.md)`
*   **Purpose:** To provide concrete examples of inputs the mode expects, outputs it produces, or key artifacts it interacts with.
*   **When to Use:** Highly recommended for Managers (to show sample input tasks from Orchestrator and sample sub-tasks for its squad) and useful for Squad Members (to show an example of their primary output artifact).
*   **Content Focus:** An outer "KB Example" wrapper containing an embedded, fully-formed example of another artifact type (e.g., an MDTM task).

### 3.6. `skills/`
*   **Template:** `[.roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.md](../../templates/modes/common/kb/skills/template_00_kb_skill.md)`
*   **Purpose:** To codify specific, actionable "how-to" knowledge, techniques, or methodologies relevant to the mode's specialist function.
*   **When to Use:** For any mode that applies specific, teachable techniques.
    *   `data-product-strategist`: e.g., "Defining SMART Objectives," "Crafting Value Propositions."
    *   `manager-data-product`: e.g., "Managing Design Handoffs," "Risk Assessment for PoC Phases."
*   **Content Focus:** Step-by-step guides, best practices for applying the skill, expected outcomes.

### 3.7. `wisdom/`
*   **Template:** `[.roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.md](../../templates/modes/common/kb/wisdom/template_00_kb_wisdom.md)`
*   **Purpose:** To store higher-level insights, guiding principles, best practices, anti-patterns, or strategic considerations for the mode's domain.
*   **When to Use:** For any mode where guiding principles or strategic thinking are important.
    *   `data-product-strategist`: e.g., "Common Pitfalls in PoC Strategy."
    *   `manager-data-product`: e.g., "Iterative PoC Development Principles."
*   **Content Focus:** Core principle, explanation/rationale, application context, implications for the mode's behavior.

## 4. Iterative KB Development

*   **Start Lean:** For a new mode, begin by creating its KB `README.md` and any absolutely critical `procedures/` or `reference/` files (like a Manager's main orchestration flow and squad composition).
*   **Populate as Needed:** Add `skills/`, `wisdom/`, and `examples/` articles incrementally as the mode is developed, tested, and refined, or as specific knowledge gaps are identified.
*   **Driven by Mode's Needs:** The content of the KB should directly support the mode's ability to perform its tasks as defined in its `.mode.md` system prompt and its core principles rule.

By following these guidelines and utilizing the provided templates, you can build rich, structured, and maintainable Knowledge Bases that significantly enhance the capabilities and reliability of your AI modes.