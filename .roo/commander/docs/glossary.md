+++
# --- Basic Metadata ---
id = "GLOSSARY-ROO-COMMANDER-V2" # Updated version
title = "Glossary: Roo Commander System Terms"
context_type = "reference_document" # Or "standards_document" if it's considered a standard reference
scope = "Defines key terms, concepts, and acronyms used throughout the Roo Commander system and its documentation."
target_audience = ["all"] # Developers, AI Modes, Users
granularity = "glossary"
status = "active"
last_updated = "20250515"
version = "2.0" # Incremented due to structural and content updates
tags = ["glossary", "terminology", "definitions", "roo-commander", "reference"]
related_context = [
    ".roo/commander/docs/architecture/README.md", # Architectural concepts are defined here
    ".roo/commander/docs/standards/01-naming-conventions.md" # For acronyms and naming
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md" # Assuming a generic standard doc template
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Semi-Annually"
+++

# Glossary: Roo Commander System Terms

## 1. Introduction

This glossary defines key terms, concepts, and acronyms used throughout the Roo Commander system and its documentation. A shared understanding of this terminology is crucial for effective communication, development, and use of the system. All file path references herein adhere to the workspace-root-relative standard, starting with `.roo/`.

This glossary will be updated as the system evolves.

## 2. Core Architectural Concepts & Mode Archetypes

*   **Orchestrator (Mode Classification: `orchestrator`)**
    *   The highest-level AI agent responsible for primary user interaction, overall session management, and delegating complex, domain-specific workflows to "Manager" modes.
    *   In Roo Commander, `👑 Roo Commander` (`roo-commander`) is the primary Orchestrator.
    *   See: `[.roo/commander/docs/architecture/01_orchestrator_role.md](.roo/commander/docs/architecture/01_orchestrator_role.md)`

*   **Manager (Mode Classification: `manager`)**
    *   A specialized AI agent that receives a high-level objective (as an MDTM task) from an Orchestrator.
    *   It orchestrates a specific, complex workflow by breaking it down into sub-tasks and delegating these to a "Squad" of specialist worker modes.
    *   Example: `🧑‍💼 Data Product Manager` (`manager-data-product`).
    *   See: `[.roo/commander/docs/architecture/02_manager_modes.md](.roo/commander/docs/architecture/02_manager_modes.md)`

*   **Squad (Mode Grouping / Mode Classification: `squad`)**
    *   A collection of specialist "Squad Member" modes that report to a specific Manager mode. Each squad is focused on executing the various phases of the workflow managed by their Manager. The term "squad" can also be used as the `classification` for a Squad Member mode.
    *   Example: The `data-product-*` modes (strategist, ideator, etc.) form the squad for `manager-data-product`.
    *   See: `[.roo/commander/docs/architecture/03_squad_modes.md](.roo/commander/docs/architecture/03_squad_modes.md)`

*   **Squad Member (Mode Classification: `squad`)**
    *   A specialist AI agent that performs a specific, well-defined task assigned by its Manager mode via an MDTM task.
    *   Typically produces a defined output artifact (e.g., a design document, a piece of code).
    *   Example: `📊 Data Product Strategist` (`data-product-strategist`).

*   **Mode**
    *   A general term for an AI agent within the Roo Commander system, defined by a `.mode.md` file (located in `[.roo/commander/modes/[mode_slug]/](.roo/commander/modes/[mode_slug]/)`), its rules (in `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)`), and its Knowledge Base (in `[.roo/commander/modes/[mode_slug]/kb/](.roo/commander/modes/[mode_slug]/kb/)`). Modes can be Orchestrators, Managers, or Squad Members.

## 3. Key Systems, Standards & Document Types

*   **MDTM (Markdown-Driven Task Management)**
    *   The standardized system used for defining, delegating, tracking, and updating units of work within Roo Commander.
    *   Tasks are defined in TOML+Markdown files located in `[.roo/commander/tasks/](.roo/commander/tasks/)` using the `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.md)`.
    *   See: `[.roo/commander/docs/standards/03-mdtm-task-files.md](.roo/commander/docs/standards/03-mdtm-task-files.md)` and `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`.

*   **Session**
    *   A container for a distinct period of interaction between a user and `👑 Roo Commander`, focused on a specific goal.
    *   Each session has a dedicated directory: `[.roo/commander/sessions/SESSION-[Goal]-[Timestamp]/](.roo/commander/sessions/SESSION-[Goal]-[Timestamp]/)`.
    *   See: `[.roo/commander/docs/standards/04-session-logs-and-artifacts.md](.roo/commander/docs/standards/04-session-logs-and-artifacts.md)` and `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`.

*   **Session Log (`session_log.md`)**
    *   The central, chronological TOML+Markdown record of a session, detailing key events, decisions, delegations, and links to artifacts.
    *   Located within each session directory. Uses `[.roo/commander/templates/sessions/template_00_mdtm_session_generic.md](.roo/commander/templates/sessions/template_00_mdtm_session_generic.md)`.

*   **Session Artifact**
    *   Any file created or referenced during a session and stored within its `artifacts/` subdirectory (e.g., notes, design documents, research findings, code snippets).
    *   Key design deliverables (e.g., `data_product_poc_plan.md`) are important session artifacts, typically stored in `artifacts/design_outputs/`.

*   **KB (Knowledge Base)**
    *   A dedicated directory (`[.roo/commander/modes/[mode_slug]/kb/](.roo/commander/modes/[mode_slug]/kb/)`) associated with each AI mode.
    *   Contains the mode's specific operational instructions, procedural logic, reference data, prompts, examples, skills, and wisdom, all in TOML+Markdown format.
    *   Structured with standard subfolders: `README.md` (index), `prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`.
    *   See: `[.roo/commander/docs/architecture/06_knowledge_base_philosophy.md](.roo/commander/docs/architecture/06_knowledge_base_philosophy.md)` and `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`.

*   **Rule**
    *   A formal definition of behavior, standards, or procedures in a TOML+Markdown file.
    *   **Workspace Rules:** Apply to all modes (located in `[.roo/rules/](.roo/rules/)`).
    *   **Mode-Specific Rules:** Apply only to a particular mode (located in `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)`).

*   **Template**
    *   A pre-defined TOML+Markdown file structure used as a starting point for creating new documents like mode definitions, rules, KBs, tasks, or session artifacts.
    *   Located in `[.roo/commander/templates/](.roo/commander/templates/)`.
    *   See: `[.roo/commander/docs/standards/07-template-authoring-guide.md](.roo/commander/docs/standards/07-template-authoring-guide.md)`.

*   **TOML (Tom's Obvious, Minimal Language)**
    *   A simple configuration file format used for the metadata "frontmatter" in many structured documents.
    *   See: `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`.

*   **Standard Document**
    *   A formal document defining a convention, process, or best practice for the workspace, typically located in `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`.

## 4. Common Acronyms & Terms

*   **AI:** Artificial Intelligence.
*   **API:** Application Programming Interface.
*   **CRUD:** Create, Read, Update, Delete.
*   **DP:** Data Product (often used in `manager-data-product` and its squad).
*   **GFM:** GitHub Flavored Markdown.
*   **GUI:** Graphical User Interface.
*   **ID:** Identifier.
*   **ISO 8601:** International standard for date and time representation (e.g., `2025-07-20T14:30:00Z`).
*   **JSON:** JavaScript Object Notation.
*   **KB:** Knowledge Base.
*   **LLM:** Large Language Model.
*   **MCP:** Mode Control Protocol (for interacting with external AI services/tools).
*   **MDTM:** Markdown-Driven Task Management.
*   **NPM:** Node Package Manager.
*   **OS:** Operating System.
*   **PII:** Personally Identifiable Information.
*   **PoC:** Proof of Concept.
*   **PR:** Pull Request (in Git).
*   **RAG:** Retrieval Augmented Generation.
*   **SemVer:** Semantic Versioning.
*   **Slug:** A URL-friendly, unique identifier, typically in `kebab-case` (e.g., `manager-data-product`).
*   **SOP:** Standard Operating Procedure.
*   **TOML:** Tom's Obvious, Minimal Language.
*   **UI:** User Interface.
*   **UX:** User Experience.
*   **YAML:** YAML Ain't Markup Language.

## 5. Symbolic Language (Future Integration)

*(This section will be populated based on the outcomes and definitions from the Symbolic Language Glossary, e.g., `[.roo/commander/docs/ideas/symbolic-prompt-optimization/PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md](.roo/commander/docs/ideas/symbolic-prompt-optimization/PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md)`, once that initiative is further developed and integrated. It will list key symbols and their precise meanings within the Roo Commander context.)*

*   **Example (Hypothetical):**
    *   `🎯`: Goal, Objective, Purpose.
    *   `✍️⟨File⟩{path="doc.md"}`: Write or Edit the file at the specified path.

---

This glossary is a living document. New terms will be added as the Roo Commander system and its capabilities expand.