# Developer Guide: Using the Symbolic Language in Roo Commander V8

## 1. Introduction

To enhance token efficiency, precision, and consistency, the Roo Commander V8 system incorporates a **custom symbolic language**. This language replaces common verbose phrases and concepts with concise symbols, primarily for use within Markdown content such as:

*   AI Mode System Prompts (`.mode.md` files)
*   Mode-Specific Rules (`rules-[mode_slug]/` files)
*   Knowledge Base (KB) articles (`kb/` files for all modes)
*   MDTM Task descriptions and log entries
*   Session Log entries

This guide provides an overview of the symbolic language, its purpose, where to find the definitive glossary, and best practices for its application. The formal proposal for this system can be found in `[../../../proposals/PLAN-SYMOPT-001_Symbolic_Prompt_Optimization_v2.md](../../../proposals/PLAN-SYMOPT-001_Symbolic_Prompt_Optimization_v2.md)`.

**This guide assumes the symbolic language and its glossary are actively being implemented or are in use.**

## 2. Purpose of the Symbolic Language

*   **Token Efficiency:** Significantly reduce the number of tokens used in prompts and stored instructions, leading to lower operational costs and allowing for larger, more relevant contextual information in LLM calls.
*   **Instructional Precision:** Symbols can represent complex operations or concepts unambiguously once defined.
*   **Consistency:** Ensures common actions, states, or entities are referred to in a standardized way across all modes and documentation.
*   **Maintainability:** Updating the meaning or expansion of a symbol can be done centrally in the glossary, propagating the change system-wide.

## 3. The Definitive Glossary: Source of Truth

All symbols, their meanings, and basic syntax conventions are defined in the **Foundation Glossary document**:

*   **Primary Glossary:** `[.roo/commander/docs/ideas/PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md](../../../proposals/PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md)`
    *   *(Note: This path might eventually move to a more permanent location like `docs/standards/06-symbolic-language-glossary.md` once fully adopted).*

**Developers and AI modes MUST refer to this glossary as the single source of truth for all symbol definitions and usage patterns.**

## 4. Basic Syntax Conventions (Refer to Glossary for Full Details)

The glossary will define the precise syntax, but generally, expect patterns like:

*   **Symbols:** Standalone characters (often Unicode emojis or mathematical symbols).
    *   Example: `🎯` (Goal/Objective), `✅` (Success/Done), `✍️` (Write/Edit)
*   **Entities/Concepts:** Often enclosed in angle brackets `⟨EntityName⟩`.
    *   Example: `⟨File⟩`, `⟨Task⟩`, `⟨Rule⟩`
*   **Parameters/Details:** Often enclosed in curly braces `{Detail="Value"}` or `{flag}`.
    *   Example: `✍️⟨File⟩{path="src/file.js" status="draft"}` (Write to file "src/file.js" with status "draft")

**Always consult the latest version of the glossary for the exact symbols and their prescribed syntax.**

## 5. Where to Use Symbols

Symbols are primarily intended for use within **Markdown content sections** of various system files.

*   **Mode System Prompts:** To make core instructions more concise.
*   **Rule Definitions (`.roo/rules/` & `rules-[mode_slug]/`):** To define procedural steps or conditions succinctly.
*   **Knowledge Base Articles (`kb/`):**
    *   `procedures/`: For describing steps.
    *   `skills/`: For outlining techniques.
    *   `wisdom/`: For stating principles.
    *   `reference/`: For concise lists or mappings.
*   **MDTM Task Files (`.roo/commander/tasks/`):**
    *   In the `Description` or `Checklist` sections for concise instructions.
    *   In `Log Entries` for brief status updates (e.g., `[TS] - mode_slug: ✅ Step 3`).
*   **Session Logs (`session_log.md`):**
    *   For brief log entries (e.g., `[TS] - roo-commander: 🤝⟨Manager⟩{slug="manager-dp"} TaskID: TASK-MDP-XYZ`).

**Important Considerations for Usage:**

*   **DO NOT use symbols in TOML keys or where they would break TOML syntax.** Symbols are for string values within TOML or for Markdown content.
*   **DO NOT use symbols in XML tool call tags or parameter names.** XML syntax must remain standard. Symbols can be used *within the string content* of an XML parameter if appropriate.
*   **Balance Density with Readability:** While the goal is token reduction, ensure that the use of symbols does not make the underlying instruction completely unreadable for humans who might need to debug or maintain the files. The glossary is the key to understanding.
*   **Context is Still Important:** Even with symbols, provide sufficient surrounding context so that the AI mode can correctly interpret the symbolized instruction within its current task.

## 6. How AI Modes Should Interpret Symbols

*   **KB-Driven Interpretation:** Each mode's system prompt and its Core Principles rule (`00-[mode_slug]-core-principles.md`) will instruct it to be aware of the symbolic language and to consult the global glossary (or potentially a mode-specific interpretation guide in its own KB if needed for highly specialized symbols).
*   **Training Data (Implicit):** As modes are developed and tested with symbol-rich instructions, they will implicitly learn their usage patterns.
*   **Focus on Expansion (Conceptual):** When a mode encounters a symbol, it should conceptually expand it to its full meaning based on the glossary to understand the required action or concept.

## 7. Introducing New Symbols or Modifying Existing Ones

The symbolic language is expected to evolve.

1.  **Proposal:** If a new recurring concept or action is identified as a good candidate for symbolization, or if an existing symbol needs refinement, propose the change. This might involve creating/updating an entry in a "Proposed Symbols" section of the glossary or a separate discussion document.
2.  **Review:** Discuss the proposal with the team/architects to ensure clarity, avoid conflicts, and assess tokenization benefits.
3.  **Glossary Update:** Once approved, the `PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md` (or its successor) **MUST** be updated.
4.  **Communication:** Announce the new/updated symbol to developers.
5.  **Refactoring (Optional but Recommended):** Gradually refactor existing rules, KBs, and prompts to incorporate the new/updated symbol where appropriate.

## 8. Benefits of Adherence

Consistent and correct use of the symbolic language will:
*   Reduce prompt lengths and associated costs.
*   Allow more complex instructions and context to fit within LLM context windows.
*   Improve the precision of instructions given to AI modes.
*   Make the system's core logic (in rules and KBs) more scannable once the symbols are learned.

This symbolic language is a powerful tool for optimizing the Roo Commander V8 ecosystem. Refer to the glossary often and use symbols consistently.