# Roo Commander V8: Glossary of Terms

## 1. Introduction

This glossary defines key terms, concepts, and acronyms used throughout the Roo Commander V8 system and its documentation. A shared understanding of this terminology is crucial for effective communication, development, and use of the system.

This glossary will be updated as the system evolves.

## 2. Core Architectural Concepts

*   **Orchestrator (Mode Archetype):**
    *   The highest-level AI agent responsible for primary user interaction, overall session management, and delegating complex, domain-specific workflows to "Manager" modes.
    *   In Roo Commander V8, `roo-commander` is the primary Orchestrator.

*   **Manager (Mode Archetype):**
    *   A specialized AI agent that receives a high-level objective (as an MDTM task) from an Orchestrator.
    *   It orchestrates a specific, complex workflow by breaking it down into sub-tasks and delegating these to a "Squad" of specialist worker modes.
    *   Example: `manager-data-product`.

*   **Squad (Mode Grouping):**
    *   A collection of specialist "Squad Member" modes that report to a specific Manager mode. Each squad is focused on executing the various phases of the workflow managed by their Manager.
    *   Example: The `data-product-*` modes (strategist, ideator, etc.) form the squad for `manager-data-product`.

*   **Squad Member (Mode Archetype):**
    *   A specialist AI agent that performs a specific, well-defined task assigned by its Manager mode via an MDTM task.
    *   Typically produces a defined output artifact (e.g., a design document, a piece of code).
    *   Example: `data-product-strategist`.

*   **Mode:**
    *   A general term for an AI agent within the Roo Code environment, defined by a `.mode.md` file, its rules, and its Knowledge Base. Modes can be Orchestrators, Managers, Squad Members, or other utility types.

## 3. Key Systems & Standards

*   **MDTM (Markdown-Driven Task Management):**
    *   The standardized system used for defining, delegating, tracking, and updating units of work within Roo Commander V8.
    *   Tasks are defined in TOML+Markdown files (`.roo/commander/tasks/`) using `template_00_mdtm_task_generic.md`.
    *   See: `[./standards/03-mdtm-task-files.md](./standards/03-mdtm-task-files.md)`

*   **Session:**
    *   A container for a distinct period of interaction between a user and `roo-commander`, focused on a specific goal.
    *   Each session has a dedicated directory (`.roo/commander/sessions/SESSION-[Goal]-[Timestamp]/`) containing a `session_log.md` and an `artifacts/` subdirectory.
    *   See: `[./standards/04-session-logs-and-artifacts.md](./standards/04-session-logs-and-artifacts.md)`

*   **Session Log (`session_log.md`):**
    *   The central, chronological record of a session, detailing key events, decisions, delegations, and links to artifacts.
    *   Uses `template_00_mdtm_session_generic.md`.

*   **Session Artifact:**
    *   Any file created or referenced during a session and stored within its `artifacts/` directory (e.g., notes, design documents, research findings, code snippets).
    *   Key design deliverables from workflows (like the Data Product PoC Plan) are important session artifacts, typically stored in `artifacts/design_outputs/`.

*   **KB (Knowledge Base):**
    *   A dedicated directory (`.roo/commander/modes/[mode_slug]/kb/`) associated with each AI mode.
    *   Contains the mode's specific operational instructions, procedural logic, reference data, prompts, examples, skills, and wisdom.
    *   Structured with standard subfolders: `README.md` (index), `prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`.
    *   See: `[./architecture/06_knowledge_base_philosophy.md](./architecture/06_knowledge_base_philosophy.md)` and `[./standards/05-kb-structuring-best-practices.md](./standards/05-kb-structuring-best-practices.md)`

*   **Rule:**
    *   A formal definition of behavior, standards, or procedures.
    *   **Workspace Rules:** Apply to all modes (located in `.roo/rules/`).
    *   **Mode-Specific Rules:** Apply only to a particular mode (located in `.roo/commander/modes/[mode_slug]/rules-[mode_slug]/`).

*   **Template:**
    *   A pre-defined TOML+Markdown file structure used as a starting point for creating new documents like mode definitions, rules, KBs, tasks, or session artifacts.
    *   Located in `.roo/commander/templates/`.

*   **TOML (Tom's Obvious, Minimal Language):**
    *   A simple configuration file format used for the metadata "frontmatter" in many structured documents (e.g., tasks, session logs, mode definitions).
    *   See: `[./standards/02-toml-md-document-format.md](./standards/02-toml-md-document-format.md)`

## 4. Common Acronyms & Terms

*   **AI:** Artificial Intelligence.
*   **DP:** Data Product (often used in `manager-data-product` and its squad).
*   **PoC:** Proof of Concept.
*   **RAG:** Retrieval Augmented Generation (a technique for enhancing LLM responses with information retrieved from a knowledge base).
*   **Slug:** A URL-friendly, unique identifier, typically in `kebab-case` (e.g., `manager-data-product`).
*   **MDTM:** Markdown-Driven Task Management.
*   **KB:** Knowledge Base.
*   **UI:** User Interface.
*   **UX:** User Experience.
*   **ISO 8601:** International standard for date and time representation (e.g., `2025-07-16T14:30:00Z`).

## 5. Symbolic Language (Placeholder for Future Integration)

*(This section will be populated based on the outcomes and definitions from `PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md` once the symbolic prompt optimization initiative is further developed and integrated. It will list symbols and their precise meanings within the Roo Commander V8 context.)*

*   **Example (Hypothetical):**
    *   `🎯`: Goal, Objective, Purpose.
    *   `✍️⟨File⟩{path="doc.md"}`: Write or Edit the file at the specified path.

---

This glossary is a living document. New terms will be added as the Roo Commander V8 system and its capabilities expand.